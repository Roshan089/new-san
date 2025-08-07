/*
  # Fix Authentication Schema

  1. Changes
    - Drop existing policies to start fresh
    - Create proper RLS policies for authentication
    - Ensure admin user exists with correct role
    - Add necessary indexes for performance

  2. Security
    - Enable RLS
    - Add policies for authentication
    - Add policies for admin access
*/

-- First ensure we have the correct schema
CREATE TABLE IF NOT EXISTS public.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL DEFAULT 'user',
  created_at timestamptz DEFAULT now()
);

-- Drop existing policies
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Admins can read all users" ON users;
DROP POLICY IF EXISTS "Admins can update users" ON users;
DROP POLICY IF EXISTS "Admin access policy" ON users;

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create base authentication policy
CREATE POLICY "Users can read own data"
ON users
FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- Create admin policies
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

CREATE POLICY "Admins can update users"
ON users
FOR UPDATE
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

-- Ensure admin user exists
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
SELECT
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'ptyagi.contact@gmail.com',
  crypt('Sanatan@2025', gen_salt('bf')),
  now(),
  now(),
  now()
WHERE NOT EXISTS (
  SELECT 1 FROM auth.users WHERE email = 'ptyagi.contact@gmail.com'
);

-- Ensure admin exists in public.users
INSERT INTO public.users (id, email, role)
SELECT 
  id,
  email,
  'admin'
FROM auth.users
WHERE email = 'ptyagi.contact@gmail.com'
AND NOT EXISTS (
  SELECT 1 FROM public.users WHERE email = 'ptyagi.contact@gmail.com'
);