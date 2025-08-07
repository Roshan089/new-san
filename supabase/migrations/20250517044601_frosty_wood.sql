-- First ensure we have the correct schema
CREATE TABLE IF NOT EXISTS public.users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL DEFAULT 'user',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Drop and recreate policies using DO block to handle existing policies
DO $$
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Users can read own data" ON users;
  DROP POLICY IF EXISTS "Users can update own data" ON users;
  DROP POLICY IF EXISTS "Admins can read all users" ON users;
  DROP POLICY IF EXISTS "Admins can update any user" ON users;
  DROP POLICY IF EXISTS "Admin access policy" ON users;

  -- Create base policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'users' AND policyname = 'Users can read own data'
  ) THEN
    CREATE POLICY "Users can read own data"
    ON users
    FOR SELECT
    TO authenticated
    USING (auth.uid() = id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'users' AND policyname = 'Users can update own data'
  ) THEN
    CREATE POLICY "Users can update own data"
    ON users
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);
  END IF;

  -- Create admin policies
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'users' AND policyname = 'Admins can read all users'
  ) THEN
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
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'users' AND policyname = 'Admins can update any user'
  ) THEN
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
  END IF;
END
$$;

-- Ensure indexes exist for performance
CREATE INDEX IF NOT EXISTS users_email_idx ON users (email);
CREATE INDEX IF NOT EXISTS users_role_idx ON users (role);

-- Create admin user if not exists
DO $$
DECLARE
  admin_id uuid;
BEGIN
  -- Create admin user in auth.users if not exists
  IF NOT EXISTS (
    SELECT 1 FROM auth.users WHERE email = 'admin@sanatanint.org'
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
      'authenticated',
      'admin@sanatanint.org',
      crypt('Admin@2025', gen_salt('bf')),
      now(),
      now(),
      now()
    )
    RETURNING id INTO admin_id;

    -- Add admin to public.users table
    INSERT INTO public.users (id, email, role)
    VALUES (admin_id, 'admin@sanatanint.org', 'admin');
  END IF;
END
$$;