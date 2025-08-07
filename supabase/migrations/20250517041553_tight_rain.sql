/*
  # Add admin user and authentication setup

  1. Updates
    - Add admin user with specified credentials
    - Set up admin role and permissions
*/

-- Create admin user if not exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM auth.users WHERE email = 'SanatanAdmin'
  ) THEN
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
    VALUES (
      '00000000-0000-0000-0000-000000000000',
      gen_random_uuid(),
      'authenticated',
      'admin',
      'SanatanAdmin',
      crypt('Sanatan@2025', gen_salt('bf')),
      NOW(),
      NOW(),
      NOW()
    );
  END IF;
END $$;

-- Add admin role to users table if not exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM users WHERE email = 'SanatanAdmin'
  ) THEN
    INSERT INTO users (id, email, role)
    SELECT id, email, 'admin'
    FROM auth.users
    WHERE email = 'SanatanAdmin';
  END IF;
END $$;