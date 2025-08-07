import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Globe } from 'lucide-react';
import Container from '../shared/Container';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 dark:bg-black text-white py-16 transition-colors duration-300 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute inset-0 bg-repeat opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF9933' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/assets/images/SanatanInternational_Logo.png" 
                alt="Sanatan International" 
                className="h-10 w-auto"
              />
              <span className="font-heading font-bold text-lg text-saffron-500 dark:text-saffron-400">
                Sanatan International
              </span>
            </Link>
            <p className="text-gray-300 dark:text-silver-300 leading-relaxed">
              {t('footer.description') || 'A global initiative dedicated to sharing the timeless wisdom of Sanatan Dharma with seekers worldwide.'}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-saffron-500 dark:text-saffron-400" />
                <span className="text-gray-300 dark:text-silver-300">
                  {t('footer.globalOrg') || 'Global Organization'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-saffron-500 dark:text-saffron-400" />
                <span className="text-gray-300 dark:text-silver-300">
                  {t('footer.servingWorldwide') || 'Serving Worldwide'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-saffron-500 dark:text-saffron-400" />
                <a 
                  href="mailto:contact@sanataninternational.org" 
                  className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200"
                >
                  contact@sanataninternational.org
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-6 text-saffron-500 dark:text-saffron-400">
              {t('footer.quickLinks') || 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-saffron-500 dark:bg-saffron-400 rounded-full mr-3"></span>
                  {t('navLinks.home') || 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-saffron-500 dark:bg-saffron-400 rounded-full mr-3"></span>
                  {t('navLinks.about') || 'About Us'}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-saffron-500 dark:bg-saffron-400 rounded-full mr-3"></span>
                  {t('navLinks.projects') || 'Projects'}
                </Link>
              </li>
              <li>
                <Link to="/library" className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-saffron-500 dark:bg-saffron-400 rounded-full mr-3"></span>
                  {t('navLinks.library') || 'Resources'}
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-saffron-500 dark:bg-saffron-400 rounded-full mr-3"></span>
                  {t('navLinks.donate') || 'Donate'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-heading text-lg mb-6 text-saffron-500 dark:text-saffron-400">
              {t('footer.community') || 'Community'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-saffron-500 dark:bg-saffron-400 rounded-full mr-3"></span>
                  {t('navLinks.blog') || 'Blog'}
                </Link>
              </li>
              <li>
                <Link to="/devotees" className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-saffron-500 dark:bg-saffron-400 rounded-full mr-3"></span>
                  {t('navLinks.devotees') || 'Devotees'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-saffron-500 dark:bg-saffron-400 rounded-full mr-3"></span>
                  {t('navLinks.contact') || 'Contact'}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-saffron-500 dark:bg-saffron-400 rounded-full mr-3"></span>
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-saffron-500 dark:bg-saffron-400 rounded-full mr-3"></span>
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-heading text-lg mb-6 text-saffron-500 dark:text-saffron-400">
              {t('footer.subscribe.title') || 'Stay Connected'}
            </h3>
            <form className="space-y-4 mb-6">
              <div>
                <input
                  type="email"
                  placeholder={t('footer.subscribe.placeholder') || 'Your email'}
                  className="w-full px-4 py-3 rounded-lg bg-navy-800 dark:bg-silver-800 border border-navy-700 dark:border-silver-600 focus:outline-none focus:border-saffron-500 dark:focus:border-saffron-400 text-white placeholder-gray-400 dark:placeholder-silver-400 transition-colors duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-saffron-500 dark:bg-saffron-600 text-white rounded-lg hover:bg-saffron-600 dark:hover:bg-saffron-700 transition-colors duration-200 font-medium"
              >
                {t('footer.subscribe.button') || 'Subscribe'}
              </button>
            </form>

            <div>
              <h4 className="font-medium mb-4 text-gray-300 dark:text-silver-300">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 p-2 bg-navy-800 dark:bg-silver-800 rounded-lg hover:bg-navy-700 dark:hover:bg-silver-700"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 p-2 bg-navy-800 dark:bg-silver-800 rounded-lg hover:bg-navy-700 dark:hover:bg-silver-700"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 p-2 bg-navy-800 dark:bg-silver-800 rounded-lg hover:bg-navy-700 dark:hover:bg-silver-700"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200 p-2 bg-navy-800 dark:bg-silver-800 rounded-lg hover:bg-navy-700 dark:hover:bg-silver-700"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-navy-800 dark:border-silver-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 dark:text-silver-400 text-sm">
                © {currentYear} Sanatan International. All rights reserved. 🙏 Dhanyavaadah!
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 dark:text-silver-400 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 dark:text-silver-400 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 dark:text-silver-400 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;