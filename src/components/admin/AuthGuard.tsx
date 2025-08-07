import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session?.user?.email);
      
      if (event === 'SIGNED_OUT' || !session) {
        setIsAuthenticated(false);
        navigate('/admin/login');
        return;
      }

      if (event === 'SIGNED_IN' && session) {
        await verifyAdminRole(session.user.id);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const verifyAdminRole = async (userId: string) => {
    try {
      console.log('Verifying admin role for user:', userId);
      
      const { data: user, error } = await supabase
        .from('users')
        .select('role, email')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error checking user role:', error);
        setIsAuthenticated(false);
        navigate('/admin/login');
        return;
      }

      console.log('User data retrieved:', user);

      if (user?.role === 'admin') {
        console.log('Admin role verified successfully');
        setIsAuthenticated(true);
      } else {
        console.log('User does not have admin role:', user?.role);
        await supabase.auth.signOut();
        setIsAuthenticated(false);
        navigate('/admin/login');
      }
    } catch (error) {
      console.error('Auth verification error:', error);
      setIsAuthenticated(false);
      navigate('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const checkAuth = async () => {
    try {
      console.log('Checking authentication status...');
      
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.error('Session error:', sessionError);
        setIsAuthenticated(false);
        navigate('/admin/login');
        setLoading(false);
        return;
      }

      if (!session) {
        console.log('No active session found');
        setIsAuthenticated(false);
        navigate('/admin/login');
        setLoading(false);
        return;
      }

      console.log('Active session found for user:', session.user.email);
      await verifyAdminRole(session.user.id);
    } catch (error) {
      console.error('Auth check error:', error);
      setIsAuthenticated(false);
      navigate('/admin/login');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-saffron-500 mx-auto mb-4"></div>
          <p className="text-navy-600 dark:text-silver-300">Verifying authentication...</p>
          <p className="text-sm text-navy-500 dark:text-silver-400 mt-2">
            Checking admin privileges...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return <>{children}</>;
};

export default AuthGuard;