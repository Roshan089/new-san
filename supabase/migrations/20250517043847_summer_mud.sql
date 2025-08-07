/*
  # Fix Users Table RLS Policies

  1. Changes
    - Drop existing RLS policies that might be causing conflicts
    - Add new RLS policies for:
      - Authenticated users to read their own data
      - Admin users to read all user data
      - Admin users to update user roles
  
  2. Security
    - Enable RLS on users table (if not already enabled)
    - Add policies for proper role-based access control
    - Ensure admin users can manage other users
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Admin access policy" ON users;
DROP POLICY IF EXISTS "Users can read own data" ON users;

-- Ensure RLS is enabled
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own data
CREATE POLICY "Users can read own data"
ON users
FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- Allow admins to read all user data
CREATE POLICY "Admins can read all users"
ON users
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM users AS admin_user
    WHERE admin_user.id = auth.uid()
    AND admin_user.role = 'admin'
  )
);

-- Allow admins to update user data
CREATE POLICY "Admins can update users"
ON users
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM users AS admin_user
    WHERE admin_user.id = auth.uid()
    AND admin_user.role = 'admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1
    FROM users AS admin_user
    WHERE admin_user.id = auth.uid()
    AND admin_user.role = 'admin'
  )
);