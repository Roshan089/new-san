/*
  # Add projects and volunteers tables

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `description` (text)
      - `content` (text)
      - `status` (text)
      - `image_url` (text)
      - `start_date` (date)
      - `end_date` (date)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `volunteers`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `photo_url` (text)
      - `role` (text)
      - `project_id` (uuid, foreign key)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for admin write access
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  content text NOT NULL,
  status text NOT NULL DEFAULT 'planned',
  image_url text,
  start_date date,
  end_date date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create volunteers table
CREATE TABLE IF NOT EXISTS volunteers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  photo_url text,
  role text NOT NULL,
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;

-- Projects policies
CREATE POLICY "Anyone can read projects"
  ON projects
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin users can CRUD projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Volunteers policies
CREATE POLICY "Anyone can read volunteers"
  ON volunteers
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin users can CRUD volunteers"
  ON volunteers
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Update trigger for projects
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();