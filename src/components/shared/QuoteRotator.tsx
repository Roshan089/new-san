import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Language } from '../../types';

interface QuoteRotatorProps {
  quotes: Quote[];
  interval?: number;
}

const QuoteRotator: React.FC<QuoteRotatorProps> = ({
  quotes,
  interval = 15000,
}) => {
  const { i18n } = useTranslation();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [activeLanguage, setActiveLanguage] = useState<Language>('en');
  
  useEffect(() => {
    setActiveLanguage(i18n.language as Language);
  }, [i18n.language]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, interval);

    return () => clearInterval(timer);
  }, [quotes.length, interval]);

  const currentQuote = quotes[currentQuoteIndex];

  const getTranslatedText = () => {
    switch (activeLanguage) {
      case 'hi':
        return currentQuote.hindi;
      case 'en':
      default:
        return currentQuote.english;
    }
  };

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="h-48 md:h-40 overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={currentQuoteIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-sanskrit font-bold text-navy-800 dark:text-white mb-3">
            "{currentQuote.sanskrit}"
          </p>
          <p className="text-lg md:text-xl font-medium text-navy-700 dark:text-silver-300 italic mb-3">
            "{getTranslatedText()}"
          </p>
          <footer className="text-sm text-navy-600 dark:text-silver-400">
            Bhagavad Gita {currentQuote.chapter}.{currentQuote.verse}
          </footer>
        </motion.blockquote>
      </AnimatePresence>
    </div>
  );
};

export default QuoteRotator;