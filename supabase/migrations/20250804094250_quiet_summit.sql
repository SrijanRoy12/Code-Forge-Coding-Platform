/*
  # User Management System

  1. New Tables
    - `users`
      - `id` (uuid, primary key) - User identifier
      - `email` (text, unique) - User email address
      - `username` (text, unique) - Unique username
      - `full_name` (text) - User's full name
      - `avatar_url` (text, optional) - Profile picture URL
      - `bio` (text, optional) - User biography
      - `country` (text, optional) - User's country
      - `company` (text, optional) - User's company
      - `github_url` (text, optional) - GitHub profile URL
      - `linkedin_url` (text, optional) - LinkedIn profile URL
      - `total_solved` (integer) - Total problems solved
      - `easy_solved` (integer) - Easy problems solved
      - `medium_solved` (integer) - Medium problems solved
      - `hard_solved` (integer) - Hard problems solved
      - `ranking` (integer) - Global ranking
      - `contest_rating` (integer) - Contest rating
      - `max_streak` (integer) - Maximum solving streak
      - `current_streak` (integer) - Current solving streak
      - `created_at` (timestamp) - Account creation timestamp
      - `updated_at` (timestamp) - Last update timestamp

  2. Security
    - Enable RLS on `users` table
    - Add policy for users to read their own data
    - Add policy for users to update their own data
    - Add policy for public profile viewing
*/

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  username text UNIQUE NOT NULL,
  full_name text NOT NULL,
  avatar_url text,
  bio text,
  country text,
  company text,
  github_url text,
  linkedin_url text,
  total_solved integer DEFAULT 0,
  easy_solved integer DEFAULT 0,
  medium_solved integer DEFAULT 0,
  hard_solved integer DEFAULT 0,
  ranking integer DEFAULT 0,
  contest_rating integer DEFAULT 1200,
  max_streak integer DEFAULT 0,
  current_streak integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Users can read their own data
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Users can update their own data
CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Public profiles are readable by everyone
CREATE POLICY "Public profiles are viewable by everyone"
  ON users
  FOR SELECT
  TO anon
  USING (true);

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();