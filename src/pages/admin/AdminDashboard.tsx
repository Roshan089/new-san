import React, { useEffect, useState } from 'react';
import { FileText, Users, Tags } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface DashboardStats {
  totalBlogs: number;
  publishedBlogs: number;
  totalUsers: number;
  totalTags: number;
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalBlogs: 0,
    publishedBlogs: 0,
    totalUsers: 0,
    totalTags: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [
        { count: totalBlogs },
        { count: publishedBlogs },
        { count: totalUsers },
        { count: totalTags },
      ] = await Promise.all([
        supabase.from('blogs').select('*', { count: 'exact', head: true }),
        supabase.from('blogs').select('*', { count: 'exact', head: true }).eq('published', true),
        supabase.from('users').select('*', { count: 'exact', head: true }),
        supabase.from('tags').select('*', { count: 'exact', head: true }),
      ]);

      setStats({
        totalBlogs: totalBlogs || 0,
        publishedBlogs: publishedBlogs || 0,
        totalUsers: totalUsers || 0,
        totalTags: totalTags || 0,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard: React.FC<{
    title: string;
    value: number;
    icon: React.ReactNode;
    color: string;
  }> = ({ title, value, icon, color }) => (
    <div className="bg-white dark:bg-black rounded-lg shadow-sm p-6 border border-gray-200 dark:border-silver-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-navy-600 dark:text-silver-300 mb-1">{title}</p>
          <p className="text-2xl font-bold text-navy-900 dark:text-white">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <div className="text-center py-8 text-navy-900 dark:text-white">Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold mb-6 text-navy-900 dark:text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Blogs"
          value={stats.totalBlogs}
          icon={<FileText size={24} className="text-blue-600" />}
          color="bg-blue-50 dark:bg-blue-900/20"
        />
        <StatCard
          title="Published Blogs"
          value={stats.publishedBlogs}
          icon={<FileText size={24} className="text-green-600" />}
          color="bg-green-50 dark:bg-green-900/20"
        />
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={<Users size={24} className="text-purple-600" />}
          color="bg-purple-50 dark:bg-purple-900/20"
        />
        <StatCard
          title="Total Tags"
          value={stats.totalTags}
          icon={<Tags size={24} className="text-amber-600" />}
          color="bg-amber-50 dark:bg-amber-900/20"
        />
      </div>

      {/* Recent Activity Section */}
      <div className="mt-8">
        <h2 className="text-xl font-heading font-semibold mb-4 text-navy-900 dark:text-white">Recent Activity</h2>
        <div className="bg-gray-50 dark:bg-black rounded-lg p-6 text-center text-navy-600 dark:text-silver-300 border border-gray-200 dark:border-silver-700">
          Coming soon...
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;