/*
  # Fix Authentication and RLS Policies

  1. Updates
    - Drop existing problematic policies
    - Create new streamlined policies for authentication
    - Fix role-based access control
    - Ensure proper email-based admin access
*/

-- First, drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Admin users can access everything" ON users;
DROP POLICY IF EXISTS "Allow role check during authentication" ON users;
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Admin users can read all users" ON users;

-- Re-enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create base policy for all authenticated users
CREATE POLICY "Users can read own data"
ON users
FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- Create admin policy with email check
CREATE POLICY "Admin access policy"
ON users
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM auth.users
    WHERE auth.users.id = auth.uid()
    AND auth.users.email = 'ptyagi.contact@gmail.com'
  )
);

-- Ensure admin user exists with correct role
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM users 
    WHERE email = 'ptyagi.contact@gmail.com'
  ) THEN
    INSERT INTO users (id, email, role)
    VALUES (
      (SELECT id FROM auth.users WHERE email = 'ptyagi.contact@gmail.com'),
      'ptyagi.contact@gmail.com',
      'admin'
    );
  END IF;
END
$$;