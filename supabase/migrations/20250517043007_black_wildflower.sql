/*
  # Update Admin Credentials

  Updates the admin user's email and password to:
  - Email: ptyagi.contact@gmail.com
  - Password: Sanatan@2025

  1. Updates auth.users table
  2. Updates public.users table
*/

-- Update admin user in auth.users
UPDATE auth.users 
SET 
  email = 'ptyagi.contact@gmail.com',
  encrypted_password = crypt('Sanatan@2025', gen_salt('bf')),
  updated_at = NOW()
WHERE email = 'SanatanAdmin';

-- Update admin user in public.users
UPDATE users 
SET email = 'ptyagi.contact@gmail.com'
WHERE email = 'SanatanAdmin';