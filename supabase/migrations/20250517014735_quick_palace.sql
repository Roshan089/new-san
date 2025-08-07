/*
  # Initial Schema Setup

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - role (text)
      - created_at (timestamp)
    - blogs
      - id (uuid, primary key)
      - title (text)
      - slug (text, unique)
      - content (text)
      - excerpt (text)
      - author_id (uuid, references users)
      - published (boolean)
      - published_at (timestamp)
      - created_at (timestamp)
      - updated_at (timestamp)
    - tags
      - id (uuid, primary key)
      - name (text, unique)
      - slug (text, unique)
      - created_at (timestamp)
    - blog_tags
      - blog_id (uuid, references blogs)
      - tag_id (uuid, references tags)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add policies for admin users
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL DEFAULT 'user',
  created_at timestamptz DEFAULT now()
);

-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  author_id uuid REFERENCES users(id),
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create tags table
CREATE TABLE IF NOT EXISTS tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create blog_tags junction table
CREATE TABLE IF NOT EXISTS blog_tags (
  blog_id uuid REFERENCES blogs(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES tags(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (blog_id, tag_id)
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admin users can read all users"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Blogs policies
CREATE POLICY "Anyone can read published blogs"
  ON blogs
  FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Authors can CRUD own blogs"
  ON blogs
  FOR ALL
  TO authenticated
  USING (auth.uid() = author_id);

CREATE POLICY "Admin users can CRUD all blogs"
  ON blogs
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Tags policies
CREATE POLICY "Anyone can read tags"
  ON tags
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin users can CRUD tags"
  ON tags
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Blog tags policies
CREATE POLICY "Anyone can read blog tags"
  ON blog_tags
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin users can CRUD blog tags"
  ON blog_tags
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for blogs table
CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON blogs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();