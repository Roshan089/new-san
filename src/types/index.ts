export interface NavLink {
  name: string;
  path: string;
  children?: NavLink[];
}

export interface Quote {
  id: number;
  sanskrit: string;
  english: string;
  hindi: string;
  chapter: number;
  verse: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  status: 'completed' | 'in-progress' | 'planned';
  image_url: string;
  start_date?: string;
  end_date?: string;
  created_at: string;
  updated_at: string;
}

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  photo_url: string;
  role: string;
  project_id: string;
  created_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export type Language = 'en' | 'hi' | 'sa';