import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import Container from '../../components/shared/Container';
import Button from '../../components/shared/Button';

const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('Admin');
  const [password, setPassword] = useState('pass123');
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'connected' | 'failed'>('checking');

  // Check Supabase connection and existing session
  useEffect(() => {
    checkConnection();
    checkExistingSession();
  }, []);

  const checkConnection = async () => {
    try {
      const { data, error } = await supabase.from('users').select('count', { count: 'exact', head: true });
      if (error) {
        console.error('Supabase connection error:', error);
        setConnectionStatus('failed');
        setError('Database connection failed. Please check your internet connection.');
      } else {
        setConnectionStatus('connected');
        console.log('Supabase connection successful');
      }
    } catch (err) {
      console.error('Connection test failed:', err);
      setConnectionStatus('failed');
      setError('Unable to connect to the database. Please try again later.');
    }
  };

  const checkExistingSession = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // Check if user has admin role
        const { data: userData } = await supabase
          .from('users')
          .select('role')
          .eq('id', session.user.id)
          .single();
        
        if (userData?.role === 'admin') {
          navigate('/admin');
        }
      }
    } catch (err) {
      console.log('No existing session or error checking session');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (connectionStatus !== 'connected') {
      setError('Please wait for database connection to be established.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('Attempting login with:', { email: email.trim() });

      // Try to sign in with the provided credentials
      const { data: authData, error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim()
      });

      if (signInError) {
        console.error('Sign in error:', signInError);
        
        // Handle specific error cases
        if (signInError.message.includes('Invalid login credentials')) {
          throw new Error('Invalid credentials. Please check your username and password.');
        } else if (signInError.message.includes('Email not confirmed')) {
          throw new Error('Email not confirmed. Please check your email for confirmation link.');
        } else if (signInError.message.includes('Too many requests')) {
          throw new Error('Too many login attempts. Please wait a few minutes and try again.');
        } else {
          throw new Error(`Authentication failed: ${signInError.message}`);
        }
      }

      if (!authData.user) {
        throw new Error('Authentication failed. No user data returned.');
      }

      console.log('Authentication successful for user:', authData.user.email);

      // Check if the user has admin role
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('role')
        .eq('id', authData.user.id)
        .single();

      if (userError) {
        console.error('User role check error:', userError);
        await supabase.auth.signOut();
        throw new Error('Unable to verify admin access. Please contact support.');
      }

      if (!userData || userData.role !== 'admin') {
        console.log('User role check failed:', userData);
        await supabase.auth.signOut();
        throw new Error('Access denied. Admin privileges required.');
      }

      console.log('Admin role verified successfully');
      
      // Successfully authenticated as admin
      navigate('/admin');
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-saffron-100 dark:bg-saffron-900/20 rounded-full flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-saffron-500" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-navy-900 dark:text-white mb-2">
              Admin Login
            </h2>
            <p className="text-navy-600 dark:text-silver-300">
              Access the admin dashboard to manage content
            </p>
          </div>

          {/* Connection Status */}
          <div className="mt-6 mb-4">
            <div className={`flex items-center justify-center p-3 rounded-lg ${
              connectionStatus === 'connected' 
                ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' 
                : connectionStatus === 'failed'
                ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                : 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
            }`}>
              {connectionStatus === 'connected' && <CheckCircle className="w-5 h-5 mr-2" />}
              {connectionStatus === 'failed' && <AlertCircle className="w-5 h-5 mr-2" />}
              {connectionStatus === 'checking' && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
              )}
              <span className="text-sm font-medium">
                {connectionStatus === 'connected' && 'Database Connected'}
                {connectionStatus === 'failed' && 'Database Connection Failed'}
                {connectionStatus === 'checking' && 'Connecting to Database...'}
              </span>
            </div>
          </div>

          <div className="mt-8 bg-white dark:bg-black py-8 px-4 shadow-md rounded-lg sm:px-10 border border-gray-200 dark:border-silver-700 transition-colors duration-300">
            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md flex items-start"
              >
                <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-red-600 dark:text-red-400 font-medium">Login Failed</p>
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-navy-700 dark:text-white mb-2"
                >
                  Username
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-silver-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-silver-400 bg-white dark:bg-black text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-colors duration-200"
                  disabled={loading || connectionStatus !== 'connected'}
                />
              </div>

              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-navy-700 dark:text-white mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-silver-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-silver-400 bg-white dark:bg-black text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-colors duration-200"
                  disabled={loading || connectionStatus !== 'connected'}
                />
              </div>

              <Button
                type="submit"
                className="w-full flex justify-center py-3"
                disabled={loading || connectionStatus !== 'connected'}
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <div className="bg-gray-50 dark:bg-silver-900 rounded-lg p-4 border border-gray-200 dark:border-silver-700">
                <p className="text-sm text-gray-600 dark:text-silver-400 mb-2">
                  <strong>Demo Credentials:</strong>
                </p>
                <div className="text-sm font-mono bg-white dark:bg-black p-2 rounded border">
                  <div>Username: <span className="text-saffron-600 dark:text-saffron-400">Admin</span></div>
                  <div>Password: <span className="text-saffron-600 dark:text-saffron-400">pass123</span></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-silver-500 mt-2">
                  Note: These are the exact credentials configured in the database
                </p>
              </div>
            </div>

            {/* Debug Information */}
            <div className="mt-4 text-center">
              <details className="text-xs text-gray-500 dark:text-silver-500">
                <summary className="cursor-pointer hover:text-gray-700 dark:hover:text-silver-300">
                  Debug Information
                </summary>
                <div className="mt-2 p-2 bg-gray-100 dark:bg-silver-800 rounded text-left">
                  <p>Connection Status: {connectionStatus}</p>
                  <p>Supabase URL: {import.meta.env.VITE_SUPABASE_URL ? 'Set' : 'Missing'}</p>
                  <p>Supabase Key: {import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Set' : 'Missing'}</p>
                </div>
              </details>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default AdminLoginPage;