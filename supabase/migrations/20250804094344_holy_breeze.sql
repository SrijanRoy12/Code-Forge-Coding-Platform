/*
  # Discussion Forum System

  1. New Tables
    - `discussions`
      - `id` (uuid, primary key) - Discussion identifier
      - `user_id` (uuid) - Reference to user who created discussion
      - `problem_id` (uuid, optional) - Reference to problem if related
      - `contest_id` (uuid, optional) - Reference to contest if related
      - `title` (text) - Discussion title
      - `content` (text) - Discussion content in markdown
      - `tags` (text array) - Discussion tags
      - `upvotes` (integer) - Number of upvotes
      - `downvotes` (integer) - Number of downvotes
      - `replies_count` (integer) - Number of replies
      - `is_pinned` (boolean) - Whether discussion is pinned
      - `created_at` (timestamp) - Creation timestamp
      - `updated_at` (timestamp) - Last update timestamp

    - `discussion_replies`
      - `id` (uuid, primary key) - Reply identifier
      - `discussion_id` (uuid) - Reference to discussion
      - `user_id` (uuid) - Reference to user who replied
      - `parent_id` (uuid, optional) - Reference to parent reply for threading
      - `content` (text) - Reply content in markdown
      - `upvotes` (integer) - Number of upvotes
      - `downvotes` (integer) - Number of downvotes
      - `created_at` (timestamp) - Creation timestamp
      - `updated_at` (timestamp) - Last update timestamp

    - `discussion_votes`
      - `id` (uuid, primary key) - Vote identifier
      - `user_id` (uuid) - Reference to user who voted
      - `discussion_id` (uuid, optional) - Reference to discussion
      - `reply_id` (uuid, optional) - Reference to reply
      - `vote_type` (text) - 'upvote' or 'downvote'
      - `created_at` (timestamp) - Vote timestamp

  2. Security
    - Enable RLS on all tables
    - Add policies for public reading
    - Add policies for authenticated user interactions
*/

CREATE TABLE IF NOT EXISTS discussions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  problem_id uuid REFERENCES problems(id) ON DELETE SET NULL,
  contest_id uuid REFERENCES contests(id) ON DELETE SET NULL,
  title text NOT NULL,
  content text NOT NULL,
  tags text[] DEFAULT '{}',
  upvotes integer DEFAULT 0,
  downvotes integer DEFAULT 0,
  replies_count integer DEFAULT 0,
  is_pinned boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS discussion_replies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  discussion_id uuid NOT NULL REFERENCES discussions(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  parent_id uuid REFERENCES discussion_replies(id) ON DELETE CASCADE,
  content text NOT NULL,
  upvotes integer DEFAULT 0,
  downvotes integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS discussion_votes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  discussion_id uuid REFERENCES discussions(id) ON DELETE CASCADE,
  reply_id uuid REFERENCES discussion_replies(id) ON DELETE CASCADE,
  vote_type text NOT NULL CHECK (vote_type IN ('upvote', 'downvote')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, discussion_id),
  UNIQUE(user_id, reply_id),
  CHECK ((discussion_id IS NOT NULL AND reply_id IS NULL) OR (discussion_id IS NULL AND reply_id IS NOT NULL))
);

-- Enable RLS
ALTER TABLE discussions ENABLE ROW LEVEL SECURITY;
ALTER TABLE discussion_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE discussion_votes ENABLE ROW LEVEL SECURITY;

-- Discussions are publicly readable
CREATE POLICY "Discussions are publicly readable"
  ON discussions
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Authenticated users can create discussions
CREATE POLICY "Authenticated users can create discussions"
  ON discussions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own discussions
CREATE POLICY "Users can update own discussions"
  ON discussions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Discussion replies are publicly readable
CREATE POLICY "Discussion replies are publicly readable"
  ON discussion_replies
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Authenticated users can create replies
CREATE POLICY "Authenticated users can create replies"
  ON discussion_replies
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own replies
CREATE POLICY "Users can update own replies"
  ON discussion_replies
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Users can manage their own votes
CREATE POLICY "Users can manage own votes"
  ON discussion_votes
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Indexes for performance
CREATE INDEX idx_discussions_user_id ON discussions(user_id);
CREATE INDEX idx_discussions_problem_id ON discussions(problem_id);
CREATE INDEX idx_discussions_contest_id ON discussions(contest_id);
CREATE INDEX idx_discussions_tags ON discussions USING GIN(tags);
CREATE INDEX idx_discussions_created_at ON discussions(created_at DESC);
CREATE INDEX idx_discussion_replies_discussion_id ON discussion_replies(discussion_id);
CREATE INDEX idx_discussion_replies_user_id ON discussion_replies(user_id);
CREATE INDEX idx_discussion_votes_discussion_id ON discussion_votes(discussion_id);
CREATE INDEX idx_discussion_votes_reply_id ON discussion_votes(reply_id);

-- Function to update vote counts
CREATE OR REPLACE FUNCTION update_vote_counts()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    -- Update upvote/downvote counts
    IF NEW.discussion_id IS NOT NULL THEN
      IF NEW.vote_type = 'upvote' THEN
        UPDATE discussions SET upvotes = upvotes + 1 WHERE id = NEW.discussion_id;
      ELSE
        UPDATE discussions SET downvotes = downvotes + 1 WHERE id = NEW.discussion_id;
      END IF;
    ELSIF NEW.reply_id IS NOT NULL THEN
      IF NEW.vote_type = 'upvote' THEN
        UPDATE discussion_replies SET upvotes = upvotes + 1 WHERE id = NEW.reply_id;
      ELSE
        UPDATE discussion_replies SET downvotes = downvotes + 1 WHERE id = NEW.reply_id;
      END IF;
    END IF;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    -- Decrease vote counts
    IF OLD.discussion_id IS NOT NULL THEN
      IF OLD.vote_type = 'upvote' THEN
        UPDATE discussions SET upvotes = upvotes - 1 WHERE id = OLD.discussion_id;
      ELSE
        UPDATE discussions SET downvotes = downvotes - 1 WHERE id = OLD.discussion_id;
      END IF;
    ELSIF OLD.reply_id IS NOT NULL THEN
      IF OLD.vote_type = 'upvote' THEN
        UPDATE discussion_replies SET upvotes = upvotes - 1 WHERE id = OLD.reply_id;
      ELSE
        UPDATE discussion_replies SET downvotes = downvotes - 1 WHERE id = OLD.reply_id;
      END IF;
    END IF;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Function to update reply counts
CREATE OR REPLACE FUNCTION update_reply_counts()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE discussions SET replies_count = replies_count + 1 WHERE id = NEW.discussion_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE discussions SET replies_count = replies_count - 1 WHERE id = OLD.discussion_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Triggers
CREATE TRIGGER update_discussion_vote_counts
  AFTER INSERT OR DELETE ON discussion_votes
  FOR EACH ROW
  EXECUTE FUNCTION update_vote_counts();

CREATE TRIGGER update_discussion_reply_counts
  AFTER INSERT OR DELETE ON discussion_replies
  FOR EACH ROW
  EXECUTE FUNCTION update_reply_counts();

CREATE TRIGGER update_discussions_updated_at
  BEFORE UPDATE ON discussions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_discussion_replies_updated_at
  BEFORE UPDATE ON discussion_replies
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();