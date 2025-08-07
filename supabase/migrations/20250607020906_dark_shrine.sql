-- Clean up existing admin users to avoid conflicts
DELETE FROM auth.users WHERE email IN ('admin@sanatanint.org', 'ptyagi.contact@gmail.com', 'SanatanAdmin', 'Admin');
DELETE FROM public.users WHERE email IN ('admin@sanatanint.org', 'ptyagi.contact@gmail.com', 'SanatanAdmin', 'Admin');

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
  'Admin',
  crypt('pass123', gen_salt('bf')),
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
WHERE email = 'Admin';