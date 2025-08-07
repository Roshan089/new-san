/*
  # Fix Admin Authentication

  1. Changes
    - Clean up existing admin users
    - Create new admin user with correct credentials
    - Set up proper RLS policies
*/

-- First, clean up any existing admin users to avoid conflicts
DELETE FROM auth.users WHERE email = 'ptyagi.contact@gmail.com';
DELETE FROM public.users WHERE email = 'ptyagi.contact@gmail.com';

-- Create the admin user in auth.users
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  role,
  aud,
  created_at,
  updated_at
)
VALUES (
  gen_random_uuid(),
  '00000000-0000-0000-0000-000000000000',
  'ptyagi.contact@gmail.com',
  crypt('Sanatan@2025', gen_salt('bf')),
  NOW(),
  'authenticated',
  'authenticated',
  NOW(),
  NOW()
);

-- Add the admin user to public.users with admin role
INSERT INTO public.users (
  id,
  email,
  role,
  created_at
)
SELECT
  id,
  email,
  'admin',
  NOW()
FROM auth.users
WHERE email = 'ptyagi.contact@gmail.com';

-- Ensure proper RLS policies are in place
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 
    FROM pg_policies 
    WHERE schemaname = 'public' 
    AND tablename = 'users' 
    AND policyname = 'Admin users can access everything'
  ) THEN
    DROP POLICY "Admin users can access everything" ON public.users;
  END IF;
END $$;

-- Create new admin access policy
CREATE POLICY "Admin users can access everything"
  ON public.users
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'ptyagi.contact@gmail.com');