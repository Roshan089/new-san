/*
  # Fix Users Table RLS Policies

  1. Changes
    - Drop existing RLS policies that may be causing conflicts
    - Create new, more specific RLS policies for the users table:
      - Allow users to read their own data
      - Allow admins to read all user data
      - Allow users to update their own data
      - Allow admins to update any user data
  
  2. Security
    - Maintains RLS enabled on users table
    - Ensures proper access control for both regular users and admins
    - Prevents unauthorized access to user data
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Admins can read all users" ON users;
DROP POLICY IF EXISTS "Admins can update users" ON users;

-- Create new, more specific policies
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

CREATE POLICY "Users can update own data"
ON users
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can update any user"
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
)
WITH CHECK (
  EXISTS (
    SELECT 1
    FROM users admin_user
    WHERE admin_user.id = auth.uid()
    AND admin_user.role = 'admin'
  )
);