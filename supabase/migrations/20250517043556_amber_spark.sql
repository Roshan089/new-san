/*
  # Fix Users Table RLS Policies

  1. Changes
    - Drop existing RLS policies on users table
    - Add new, more permissive policies for authentication flow
    - Ensure admin role check works correctly
    
  2. Security
    - Enable RLS on users table
    - Add policies for:
      - Authentication: Allow checking user role during login
      - Admin access: Allow admin users full access
      - User access: Allow users to read their own data
*/

-- First, drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Admin users can access everything" ON users;
DROP POLICY IF EXISTS "Admin users can read all users" ON users;
DROP POLICY IF EXISTS "Users can read own data" ON users;

-- Re-enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Add policy for authentication (allows checking role during login)
CREATE POLICY "Allow role check during authentication"
ON users
FOR SELECT
TO authenticated
USING (
  auth.uid() = id OR
  EXISTS (
    SELECT 1
    FROM auth.users
    WHERE auth.users.id = auth.uid()
    AND auth.users.email = 'ptyagi.contact@gmail.com'
  )
);

-- Add policy for admin users
CREATE POLICY "Admin users can access everything"
ON users
FOR ALL 
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM users
    WHERE users.id = auth.uid()
    AND users.role = 'admin'
  )
);

-- Add policy for users to read their own data
CREATE POLICY "Users can read own data"
ON users
FOR SELECT
TO authenticated
USING (auth.uid() = id);