import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../../types';
import LanguageSwitcher from '../shared/LanguageSwitcher';
import ThemeToggle from '../shared/ThemeToggle';
import Container from '../shared/Container';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks: NavLink[] = [
    { name: t('navLinks.home') || 'Home', path: '/' },
    { name: t('navLinks.about') || 'About Us', path: '/about' },
    { name: t('navLinks.projects') || 'Projects', path: '/projects' },
    { name: t('navLinks.library') || 'Resources', path: '/library' },
    { name: t('navLinks.blog') || 'Blog', path: '/blog' },
    { name: t('navLinks.devotees') || 'Devotees', path: '/devotees' },
    { name: t('navLinks.donate') || 'Donate', path: '/donate' },
    { name: t('navLinks.contact') || 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg py-2' 
      : 'bg-transparent py-4'
  }`;

  return (
    <header className={headerClasses}>
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-saffron-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute inset-0 bg-repeat opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF9933' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <Container className="relative z-10">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <motion.img 
              src="/assets/images/SanatanInternational_Logo.png" 
              alt="Sanatan International" 
              className="h-10 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <span className="font-heading font-bold text-lg text-saffron-500 dark:text-saffron-400">
              Sanatan International
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-saffron-500 dark:hover:text-saffron-400 ${
                  location.pathname === link.path
                    ? 'text-saffron-500 dark:text-saffron-400'
                    : 'text-navy-800 dark:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-navy-800 dark:text-white hover:text-saffron-500 dark:hover:text-saffron-400 focus:outline-none transition-colors duration-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 p-4 border-t border-gray-200 dark:border-silver-800"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium py-2 transition-colors duration-200 hover:text-saffron-500 dark:hover:text-saffron-400 ${
                  location.pathname === link.path
                    ? 'text-saffron-500 dark:text-saffron-400'
                    : 'text-navy-800 dark:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;