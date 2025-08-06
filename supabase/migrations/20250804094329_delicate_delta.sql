/*
  # Contest Management System

  1. New Tables
    - `contests`
      - `id` (uuid, primary key) - Contest identifier
      - `title` (text) - Contest title
      - `description` (text) - Contest description
      - `start_time` (timestamp) - Contest start time
      - `end_time` (timestamp) - Contest end time
      - `duration` (integer) - Contest duration in minutes
      - `problems` (text array) - Array of problem IDs
      - `participants` (integer) - Number of participants
      - `is_rated` (boolean) - Whether contest affects rating
      - `prize_pool` (text, optional) - Prize information
      - `status` (text) - Contest status
      - `created_at` (timestamp) - Creation timestamp

    - `contest_participants`
      - `id` (uuid, primary key) - Participation record identifier
      - `contest_id` (uuid) - Reference to contest
      - `user_id` (uuid) - Reference to user
      - `score` (integer) - User's score in contest
      - `penalty` (integer) - Time penalty in minutes
      - `rank` (integer) - User's rank in contest
      - `problems_solved` (integer) - Number of problems solved
      - `registered_at` (timestamp) - Registration timestamp
      - `finished_at` (timestamp, optional) - When user finished

  2. Security
    - Enable RLS on both tables
    - Add policies for public contest viewing
    - Add policies for participation management
*/

CREATE TABLE IF NOT EXISTS contests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  duration integer NOT NULL, -- in minutes
  problems text[] DEFAULT '{}',
  participants integer DEFAULT 0,
  is_rated boolean DEFAULT true,
  prize_pool text,
  status text NOT NULL CHECK (status IN ('Upcoming', 'Running', 'Ended')) DEFAULT 'Upcoming',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contest_participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contest_id uuid NOT NULL REFERENCES contests(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  score integer DEFAULT 0,
  penalty integer DEFAULT 0, -- in minutes
  rank integer DEFAULT 0,
  problems_solved integer DEFAULT 0,
  registered_at timestamptz DEFAULT now(),
  finished_at timestamptz,
  UNIQUE(contest_id, user_id)
);

-- Enable RLS
ALTER TABLE contests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contest_participants ENABLE ROW LEVEL SECURITY;

-- Contests are publicly readable
CREATE POLICY "Contests are publicly readable"
  ON contests
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Contest participants are publicly readable (for leaderboards)
CREATE POLICY "Contest participants are publicly readable"
  ON contest_participants
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Users can register for contests
CREATE POLICY "Users can register for contests"
  ON contest_participants
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own participation records
CREATE POLICY "Users can update own participation"
  ON contest_participants
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Indexes for performance
CREATE INDEX idx_contests_start_time ON contests(start_time);
CREATE INDEX idx_contests_status ON contests(status);
CREATE INDEX idx_contest_participants_contest_id ON contest_participants(contest_id);
CREATE INDEX idx_contest_participants_user_id ON contest_participants(user_id);
CREATE INDEX idx_contest_participants_rank ON contest_participants(contest_id, rank);

-- Function to update contest status based on time
CREATE OR REPLACE FUNCTION update_contest_status()
RETURNS void AS $$
BEGIN
  -- Update contests to 'Running' if they should have started
  UPDATE contests 
  SET status = 'Running' 
  WHERE status = 'Upcoming' AND start_time <= now();
  
  -- Update contests to 'Ended' if they should have ended
  UPDATE contests 
  SET status = 'Ended' 
  WHERE status = 'Running' AND end_time <= now();
END;
$$ LANGUAGE plpgsql;

-- Function to update participant count
CREATE OR REPLACE FUNCTION update_participant_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE contests 
    SET participants = participants + 1 
    WHERE id = NEW.contest_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE contests 
    SET participants = participants - 1 
    WHERE id = OLD.contest_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update participant count
CREATE TRIGGER update_contest_participant_count
  AFTER INSERT OR DELETE ON contest_participants
  FOR EACH ROW
  EXECUTE FUNCTION update_participant_count();