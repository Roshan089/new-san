/*
  # Add sample content for blogs and projects

  This migration adds initial content including:
  1. Sample blog posts
  2. Sample projects
  3. Sample volunteers
*/

-- Insert sample blog posts
INSERT INTO blogs (title, slug, content, excerpt, published, published_at) VALUES
(
  'Understanding Karma: Ancient Wisdom for Modern Life',
  'understanding-karma',
  '# Understanding Karma: Ancient Wisdom for Modern Life

The concept of Karma is often misunderstood in modern context. Let''s explore its true meaning and application in our daily lives.

## What is Karma?

Karma literally means "action" in Sanskrit. However, it encompasses not just physical actions, but also our thoughts and intentions. The law of Karma states that every action has a corresponding reaction.

## Modern Applications

In today''s world, Karma can be understood through various contexts:

1. Professional Life
2. Relationships
3. Personal Growth

## Scientific Perspective

Recent studies in quantum physics and consciousness research have shown interesting parallels with the ancient understanding of Karma.',
  'Exploring the true meaning of Karma and its relevance in modern life through scientific and spiritual perspectives.',
  true,
  NOW()
),
(
  'The Science Behind Vedic Meditation',
  'vedic-meditation-science',
  '# The Science Behind Vedic Meditation

Vedic meditation techniques have been practiced for thousands of years. Modern science is now validating their benefits through rigorous research.

## Key Benefits

- Reduced stress and anxiety
- Improved cognitive function
- Better sleep quality
- Enhanced emotional regulation

## Research Findings

Multiple studies have shown significant improvements in practitioners of Vedic meditation techniques.',
  'Discover how ancient Vedic meditation techniques are being validated by modern scientific research.',
  true,
  NOW()
),
(
  'Ayurveda in the Digital Age',
  'ayurveda-digital-age',
  '# Ayurveda in the Digital Age

How can we integrate ancient Ayurvedic wisdom with modern technology? This article explores innovative approaches to making Ayurveda accessible in today''s world.

## Digital Transformation

- AI-powered dosha analysis
- Mobile apps for daily routines
- Telemedicine consultations

## Future Prospects

The integration of technology with Ayurveda opens new possibilities for personalized healthcare.',
  'Exploring the intersection of ancient Ayurvedic wisdom and modern technology.',
  true,
  NOW()
);

-- Insert sample projects
INSERT INTO projects (title, slug, description, content, status, image_url, start_date, end_date) VALUES
(
  'Sanatan International Center',
  'sanatan-center',
  'A state-of-the-art spiritual and research center in El Sobrante, California.',
  '# Sanatan International Center

Our flagship project aims to create a space where ancient wisdom meets modern innovation.

## Features

- Temple and meditation halls
- Research laboratories
- Digital library
- Community spaces
- Educational facilities

## Timeline

Phase 1 (2024-2025):
- Land acquisition
- Temple construction
- Basic infrastructure

Phase 2 (2025-2026):
- Research facilities
- Library development
- Technology integration',
  'in-progress',
  'https://raw.githubusercontent.com/sanatanvedic/assets/main/projects/center.jpg',
  '2024-01-01',
  '2026-12-31'
),
(
  'Digital Vedic Library',
  'digital-library',
  'Comprehensive digital archive of ancient texts with modern search and analysis tools.',
  '# Digital Vedic Library

Making ancient wisdom accessible through technology.

## Features

- AI-powered search
- Multi-language translations
- Interactive study tools
- Virtual reality experiences
- Research tools',
  'planned',
  'https://raw.githubusercontent.com/sanatanvedic/assets/main/projects/library.jpg',
  '2024-07-01',
  '2025-12-31'
),
(
  'Community Outreach Program',
  'community-outreach',
  'Educational and cultural programs bringing Vedic wisdom to local communities.',
  '# Community Outreach Program

Connecting communities with ancient wisdom through modern approaches.

## Programs

- Youth education
- Senior wellness
- Cultural events
- Meditation workshops
- Technology training',
  'in-progress',
  'https://raw.githubusercontent.com/sanatanvedic/assets/main/projects/community.jpg',
  '2024-03-01',
  '2025-03-01'
);

-- Insert sample volunteers
INSERT INTO volunteers (name, email, photo_url, role, project_id) 
SELECT 
  'Dr. Amit Sharma',
  'amit.sharma@example.com',
  'https://raw.githubusercontent.com/sanatanvedic/assets/main/team/amit.jpg',
  'Project Director',
  id
FROM projects WHERE slug = 'sanatan-center';

INSERT INTO volunteers (name, email, photo_url, role, project_id)
SELECT 
  'Maya Patel',
  'maya.patel@example.com',
  'https://raw.githubusercontent.com/sanatanvedic/assets/main/team/maya.jpg',
  'Research Lead',
  id
FROM projects WHERE slug = 'digital-library';

INSERT INTO volunteers (name, email, photo_url, role, project_id)
SELECT 
  'Raj Kumar',
  'raj.kumar@example.com',
  'https://raw.githubusercontent.com/sanatanvedic/assets/main/team/raj.jpg',
  'Community Coordinator',
  id
FROM projects WHERE slug = 'community-outreach';