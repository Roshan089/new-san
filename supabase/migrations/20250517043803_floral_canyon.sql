/*
  # Fix users table schema and RLS policies

  1. Changes
    - Ensure users table exists with correct schema
    - Add role column if not exists
    - Set up proper RLS policies for user authentication

  2. Security
    - Enable RLS on users table
    - Add policy for users to read their own data
    - Add policy for admin access
*/

-- First ensure the users table exists with the correct schema
CREATE TABLE IF NOT EXISTS public.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL DEFAULT 'user',
  created_at timestamptz DEFAULT now()
);

-- Make sure RLS is enabled
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any to avoid conflicts
DROP POLICY IF EXISTS "Users can read own data" ON public.users;
DROP POLICY IF EXISTS "Admin access policy" ON public.users;

-- Create policy for users to read their own data
CREATE POLICY "Users can read own data"
  ON public.users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Create policy for admin access
CREATE POLICY "Admin access policy"
  ON public.users
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

-- Ensure the role column exists and has the correct default
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'users' 
    AND column_name = 'role'
  ) THEN
    ALTER TABLE public.users ADD COLUMN role text NOT NULL DEFAULT 'user';
  END IF;
END $$;