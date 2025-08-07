import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-silver-800 transition-colors duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-navy-800 dark:text-white" />
      ) : (
        <Sun size={20} className="text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;