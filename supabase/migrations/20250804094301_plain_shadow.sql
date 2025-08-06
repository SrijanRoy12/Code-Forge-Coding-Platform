/*
  # Problems Management System

  1. New Tables
    - `problems`
      - `id` (uuid, primary key) - Problem identifier
      - `title` (text) - Problem title
      - `slug` (text, unique) - URL-friendly problem identifier
      - `description` (text) - Problem description in markdown
      - `difficulty` (text) - Easy, Medium, or Hard
      - `tags` (text array) - Problem tags/categories
      - `companies` (text array) - Companies that asked this problem
      - `likes` (integer) - Number of likes
      - `dislikes` (integer) - Number of dislikes
      - `acceptance_rate` (decimal) - Acceptance rate percentage
      - `total_submissions` (integer) - Total submission count
      - `total_accepted` (integer) - Total accepted submissions
      - `constraints` (text) - Problem constraints
      - `examples` (jsonb) - Problem examples
      - `hints` (text array) - Problem hints
      - `similar_problems` (text array) - IDs of similar problems
      - `editorial_id` (uuid, optional) - Link to editorial
      - `is_premium` (boolean) - Premium problem flag
      - `created_at` (timestamp) - Creation timestamp
      - `updated_at` (timestamp) - Last update timestamp

    - `test_cases`
      - `id` (uuid, primary key) - Test case identifier
      - `problem_id` (uuid) - Reference to problem
      - `input` (text) - Test case input
      - `expected_output` (text) - Expected output
      - `is_example` (boolean) - Whether shown as example
      - `is_hidden` (boolean) - Whether hidden from user
      - `created_at` (timestamp) - Creation timestamp

  2. Security
    - Enable RLS on both tables
    - Add policies for reading problems (public)
    - Add policies for admin management
*/

CREATE TABLE IF NOT EXISTS problems (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
  tags text[] DEFAULT '{}',
  companies text[] DEFAULT '{}',
  likes integer DEFAULT 0,
  dislikes integer DEFAULT 0,
  acceptance_rate decimal(5,2) DEFAULT 0.0,
  total_submissions integer DEFAULT 0,
  total_accepted integer DEFAULT 0,
  constraints text DEFAULT '',
  examples jsonb DEFAULT '[]',
  hints text[] DEFAULT '{}',
  similar_problems text[] DEFAULT '{}',
  editorial_id uuid,
  is_premium boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS test_cases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  problem_id uuid NOT NULL REFERENCES problems(id) ON DELETE CASCADE,
  input text NOT NULL,
  expected_output text NOT NULL,
  is_example boolean DEFAULT false,
  is_hidden boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE problems ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_cases ENABLE ROW LEVEL SECURITY;

-- Problems are publicly readable
CREATE POLICY "Problems are publicly readable"
  ON problems
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Test cases are readable by authenticated users (with restrictions for hidden cases)
CREATE POLICY "Test cases are readable by authenticated users"
  ON test_cases
  FOR SELECT
  TO authenticated
  USING (NOT is_hidden OR is_example);

-- Admin policies (assuming admin role exists)
CREATE POLICY "Admins can manage problems"
  ON problems
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND email LIKE '%@admin.%'
    )
  );

CREATE POLICY "Admins can manage test cases"
  ON test_cases
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND email LIKE '%@admin.%'
    )
  );

-- Indexes for performance
CREATE INDEX idx_problems_slug ON problems(slug);
CREATE INDEX idx_problems_difficulty ON problems(difficulty);
CREATE INDEX idx_problems_tags ON problems USING GIN(tags);
CREATE INDEX idx_problems_companies ON problems USING GIN(companies);
CREATE INDEX idx_test_cases_problem_id ON test_cases(problem_id);

-- Update trigger for problems
CREATE TRIGGER update_problems_updated_at
  BEFORE UPDATE ON problems
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();