import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Language } from '../../types';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'sa', label: 'संस्कृतम्' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="p-2 text-navy-800 dark:text-white hover:text-saffron-500 dark:hover:text-saffron-400 focus:outline-none flex items-center transition-colors duration-200"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-label="Change language"
      >
        <Globe size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 bg-white dark:bg-silver-900 rounded shadow-lg z-50 border border-gray-200 dark:border-silver-700">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-silver-800 transition-colors duration-200 ${
                    i18n.language === lang.code 
                      ? 'text-saffron-500 dark:text-saffron-400 font-medium bg-saffron-50 dark:bg-saffron-900/20' 
                      : 'text-navy-800 dark:text-white'
                  }`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;