/*
  # Fix users table RLS policies

  1. Changes
    - Remove existing RLS policies that are causing issues
    - Add new policies that properly handle role checking
    - Ensure authenticated users can read their own data
    - Allow users to read their own role for admin verification
  
  2. Security
    - Maintain strict access control
    - Only allow users to read their own data
    - Prevent unauthorized access to user information
*/

-- Drop existing policies that might conflict
DROP POLICY IF EXISTS "Admins can read all users" ON users;
DROP POLICY IF EXISTS "Users can read own data" ON users;

-- Create new policies with proper access controls
CREATE POLICY "Users can read own data"
ON users
FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- Allow users to read their own role for admin verification
CREATE POLICY "Users can read own role"
ON users
FOR SELECT
TO authenticated
USING (
  -- Allow reading role column when querying own record
  auth.uid() = id
);

-- Ensure RLS is enabled
ALTER TABLE users ENABLE ROW LEVEL SECURITY;