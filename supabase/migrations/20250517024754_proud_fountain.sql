/*
  # Add initial projects and content

  1. New Content
    - Add initial projects with detailed information
    - Set up project timeline and funding goals
    - Include project descriptions and milestones

  2. Updates
    - Add funding_goal and raised_amount columns to projects
    - Add project_timeline table for milestones
    - Add donation_tiers table for structured donations
*/

-- Add new columns to projects table
ALTER TABLE projects ADD COLUMN IF NOT EXISTS funding_goal numeric DEFAULT 0;
ALTER TABLE projects ADD COLUMN IF NOT EXISTS raised_amount numeric DEFAULT 0;

-- Create project_timeline table
CREATE TABLE IF NOT EXISTS project_timeline (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  target_date date,
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create donation_tiers table
CREATE TABLE IF NOT EXISTS donation_tiers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  amount numeric NOT NULL,
  description text NOT NULL,
  benefits text[],
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE project_timeline ENABLE ROW LEVEL SECURITY;
ALTER TABLE donation_tiers ENABLE ROW LEVEL SECURITY;

-- Add RLS policies
CREATE POLICY "Anyone can read project timeline" ON project_timeline
  FOR SELECT TO public USING (true);

CREATE POLICY "Anyone can read donation tiers" ON donation_tiers
  FOR SELECT TO public USING (true);

-- Insert initial projects
INSERT INTO projects (title, slug, description, content, status, image_url, start_date, funding_goal)
VALUES
  (
    'Land Acquisition - El Sobrante Center',
    'land-acquisition-el-sobrante',
    'Acquiring 5 acres of land in El Sobrante, California for our spiritual and cultural center.',
    '# Land Acquisition Project

Our first major initiative is to acquire 5 acres of land in El Sobrante, California. This land will serve as the foundation for our spiritual and cultural center.

## Project Details

- **Location**: El Sobrante, California
- **Land Size**: 5 acres
- **Purpose**: Spiritual and Cultural Center
- **Timeline**: 2025-2026

## Planned Facilities

1. Main Temple Complex
2. Meditation Hall
3. Library and Research Center
4. Community Kitchen
5. Residential Quarters
6. Sustainable Gardens

## Environmental Impact

We are committed to sustainable development and will preserve the natural beauty of the land while creating spaces for spiritual growth and community gathering.',
    'in-progress',
    'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg',
    '2025-01-01',
    2500000
  ),
  (
    'Grantham.ai - Digital Library',
    'grantham-ai',
    'AI-powered platform for accessing and understanding ancient Vedic texts.',
    '# Grantham.ai

An innovative AI-powered platform that makes ancient Vedic wisdom accessible to everyone.

## Features

- Advanced Sanskrit text recognition
- Multi-language translations
- Context-aware search
- Interactive learning modules
- Voice-guided meditation
- Personal spiritual assistant

## Technology Stack

- Natural Language Processing
- Machine Learning
- Cloud Computing
- Mobile Applications',
    'planned',
    'https://images.pexels.com/photos/6147363/pexels-photo-6147363.jpeg',
    '2025-07-01',
    500000
  ),
  (
    'Seevo - Vedic Lifestyle App',
    'seevo-app',
    'Mobile application for daily Vedic lifestyle guidance and spiritual practices.',
    '# Seevo - Your Daily Vedic Companion

A comprehensive mobile application that helps users integrate Vedic principles into their daily lives.

## Features

- Daily routine planner based on Vedic time
- Meditation timer and guides
- Ayurvedic diet recommendations
- Yoga and exercise routines
- Community features
- Progress tracking',
    'planned',
    'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    '2026-01-01',
    300000
  );

-- Insert project timelines
INSERT INTO project_timeline (project_id, title, description, target_date)
SELECT 
  id,
  'Land Survey and Analysis',
  'Complete geological and environmental surveys of potential land parcels',
  '2025-03-01'
FROM projects WHERE slug = 'land-acquisition-el-sobrante';

INSERT INTO project_timeline (project_id, title, description, target_date)
SELECT 
  id,
  'Land Purchase',
  'Complete the purchase and legal documentation of the selected land',
  '2025-06-01'
FROM projects WHERE slug = 'land-acquisition-el-sobrante';

-- Insert donation tiers
INSERT INTO donation_tiers (name, amount, description, benefits)
VALUES
  (
    'Supporter',
    108,
    'Basic support tier for our mission',
    ARRAY['Digital newsletter', 'Name on virtual wall of supporters']
  ),
  (
    'Patron',
    1008,
    'Enhanced support with additional benefits',
    ARRAY['All Supporter benefits', 'Quarterly virtual meeting with founders', 'Early access to digital content']
  ),
  (
    'Founder Circle',
    5008,
    'Premium support tier with exclusive benefits',
    ARRAY['All Patron benefits', 'Named brick in physical center', 'VIP access to all events', 'Personal consultation with spiritual guides']
  );