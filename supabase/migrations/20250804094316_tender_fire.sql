/*
  # Submissions Management System

  1. New Tables
    - `submissions`
      - `id` (uuid, primary key) - Submission identifier
      - `user_id` (uuid) - Reference to user
      - `problem_id` (uuid) - Reference to problem
      - `language` (text) - Programming language used
      - `code` (text) - User's solution code
      - `status` (text) - Submission status
      - `runtime` (integer, optional) - Execution time in milliseconds
      - `memory` (integer, optional) - Memory usage in KB
      - `error_message` (text, optional) - Error details if failed
      - `test_cases_passed` (integer) - Number of test cases passed
      - `total_test_cases` (integer) - Total number of test cases
      - `submitted_at` (timestamp) - Submission timestamp

  2. Security
    - Enable RLS on submissions table
    - Add policy for users to read their own submissions
    - Add policy for users to create submissions
    - Add policy for public viewing of accepted submissions (optional)
*/

CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  problem_id uuid NOT NULL REFERENCES problems(id) ON DELETE CASCADE,
  language text NOT NULL,
  code text NOT NULL,
  status text NOT NULL CHECK (status IN (
    'Pending', 'Accepted', 'Wrong Answer', 'Time Limit Exceeded', 
    'Memory Limit Exceeded', 'Runtime Error', 'Compile Error'
  )),
  runtime integer,
  memory integer,
  error_message text,
  test_cases_passed integer DEFAULT 0,
  total_test_cases integer DEFAULT 0,
  submitted_at timestamptz DEFAULT now()
);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Users can read their own submissions
CREATE POLICY "Users can read own submissions"
  ON submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Users can create submissions
CREATE POLICY "Users can create submissions"
  ON submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Public can view accepted submissions (for learning purposes)
CREATE POLICY "Public can view accepted submissions"
  ON submissions
  FOR SELECT
  TO anon, authenticated
  USING (status = 'Accepted');

-- Indexes for performance
CREATE INDEX idx_submissions_user_id ON submissions(user_id);
CREATE INDEX idx_submissions_problem_id ON submissions(problem_id);
CREATE INDEX idx_submissions_status ON submissions(status);
CREATE INDEX idx_submissions_submitted_at ON submissions(submitted_at DESC);

-- Function to update user statistics when submission is accepted
CREATE OR REPLACE FUNCTION update_user_stats_on_accepted_submission()
RETURNS TRIGGER AS $$
BEGIN
  -- Only update stats if the submission is accepted and it's the first accepted submission for this problem
  IF NEW.status = 'Accepted' AND NOT EXISTS (
    SELECT 1 FROM submissions 
    WHERE user_id = NEW.user_id 
    AND problem_id = NEW.problem_id 
    AND status = 'Accepted' 
    AND id != NEW.id
  ) THEN
    -- Get problem difficulty
    DECLARE
      problem_difficulty text;
    BEGIN
      SELECT difficulty INTO problem_difficulty FROM problems WHERE id = NEW.problem_id;
      
      -- Update user stats
      UPDATE users SET
        total_solved = total_solved + 1,
        easy_solved = CASE WHEN problem_difficulty = 'Easy' THEN easy_solved + 1 ELSE easy_solved END,
        medium_solved = CASE WHEN problem_difficulty = 'Medium' THEN medium_solved + 1 ELSE medium_solved END,
        hard_solved = CASE WHEN problem_difficulty = 'Hard' THEN hard_solved + 1 ELSE hard_solved END,
        current_streak = current_streak + 1,
        max_streak = GREATEST(max_streak, current_streak + 1),
        updated_at = now()
      WHERE id = NEW.user_id;
    END;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update user stats
CREATE TRIGGER update_user_stats_trigger
  AFTER INSERT ON submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_user_stats_on_accepted_submission();