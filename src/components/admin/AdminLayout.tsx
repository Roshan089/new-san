import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Tags, Users, Settings } from 'lucide-react';
import Container from '../shared/Container';

const AdminLayout: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/blogs', icon: FileText, label: 'Blogs' },
    { path: '/admin/tags', icon: Tags, label: 'Tags' },
    { path: '/admin/users', icon: Users, label: 'Users' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-16 transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-12 gap-6 py-8">
          {/* Sidebar */}
          <div className="col-span-3">
            <nav className="bg-white dark:bg-black rounded-lg shadow-sm p-4 border border-gray-200 dark:border-silver-700 transition-colors duration-300">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
                          isActive
                            ? 'bg-saffron-50 dark:bg-saffron-900/20 text-saffron-600 dark:text-saffron-400'
                            : 'hover:bg-gray-50 dark:hover:bg-silver-800 text-navy-600 dark:text-white hover:text-navy-900 dark:hover:text-silver-100'
                        }`}
                      >
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <div className="bg-white dark:bg-black rounded-lg shadow-sm p-6 border border-gray-200 dark:border-silver-700 transition-colors duration-300">
              <Outlet />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminLayout;