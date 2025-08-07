/*
  # Fix Admin Login Authentication

  1. Changes
    - Drop all existing policies to start fresh
    - Create proper RLS policies for user authentication
    - Set up admin user with correct credentials
    - Add necessary indexes for performance

  2. Security
    - Enable RLS on users table
    - Add policies for user authentication
    - Add policies for admin access
*/

-- First ensure we have the correct schema
CREATE TABLE IF NOT EXISTS public.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL DEFAULT 'user',
  created_at timestamptz DEFAULT now()
);

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Admins can read all users" ON users;
DROP POLICY IF EXISTS "Admins can update any user" ON users;
DROP POLICY IF EXISTS "Admin access policy" ON users;
DROP POLICY IF EXISTS "Allow role check during authentication" ON users;

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create authentication policies
CREATE POLICY "Users can read own data"
ON users
FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Admins can read all users"
ON users
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM users admin_user
    WHERE admin_user.id = auth.uid()
    AND admin_user.role = 'admin'
  )
);

-- Ensure indexes exist for performance
CREATE INDEX IF NOT EXISTS users_email_idx ON users (email);
CREATE INDEX IF NOT EXISTS users_role_idx ON users (role);

-- Create admin user if not exists
DO $$
DECLARE
  admin_id uuid;
BEGIN
  -- First, ensure no duplicate admin users
  DELETE FROM auth.users WHERE email = 'admin@sanatanint.org';
  DELETE FROM public.users WHERE email = 'admin@sanatanint.org';

  -- Create admin user in auth.users
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    created_at,
    updated_at
  )
  VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated',
    'authenticated',
    'admin@sanatanint.org',
    crypt('Admin@2025', gen_salt('bf')),
    now(),
    now(),
    now()
  )
  RETURNING id INTO admin_id;

  -- Add admin to public.users table
  INSERT INTO public.users (id, email, role)
  VALUES (admin_id, 'admin@sanatanint.org', 'admin');
END
$$;