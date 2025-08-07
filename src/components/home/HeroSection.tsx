import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import Button from '../shared/Button';
import SanatanCalendar from '../shared/SanatanCalendar';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Theme-based Background Images with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Light theme image */}
        <motion.div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: "url('/assets/images/Hero About us.jpg')",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: theme === 'light' ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
        
        {/* Dark theme image */}
        <motion.div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: "url('/assets/images/Hero About us_Darktheme.jpg')",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: theme === 'dark' ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
        
        {/* Enhanced dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-900/70 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/40"></div>
      </div>

      {/* Animated Background Patterns */}
      <div className="absolute inset-0 z-10">
        {/* Floating Om symbols */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-16 h-16 opacity-10"
        >
          <div className="w-full h-full rounded-full border-2 border-saffron-500 flex items-center justify-center">
            <span className="text-saffron-500 text-2xl">ॐ</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-12 h-12 opacity-10"
        >
          <div className="w-full h-full rounded-full border-2 border-orange-500 flex items-center justify-center">
            <span className="text-orange-500 text-lg">ॐ</span>
          </div>
        </motion.div>

        {/* Geometric patterns */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-32 top-1/4 opacity-5 z-0"
        >
          <div className="w-96 h-96 rounded-full border-4 border-saffron-500 relative">
            <div className="absolute inset-8 rounded-full border-2 border-orange-500"></div>
            <div className="absolute inset-16 rounded-full border border-saffron-300"></div>
          </div>
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-32 bottom-1/4 opacity-5 z-0"
        >
          <div className="w-80 h-80 rounded-full border-4 border-orange-500 relative">
            <div className="absolute inset-6 rounded-full border-2 border-saffron-500"></div>
            <div className="absolute inset-12 rounded-full border border-orange-300"></div>
          </div>
        </motion.div>

        {/* Mandala-inspired patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/4 w-32 h-32">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="w-full h-full"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-saffron-500">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Particle-like dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            className="absolute w-2 h-2 bg-saffron-500 rounded-full opacity-10"
            style={{
              left: `${10 + (i * 4)}%`,
              top: `${20 + (i * 3)}%`
            }}
          />
        ))}
      </div>

      {/* Theme indicator */}
      <motion.div 
        className="absolute top-32 right-8 bg-white/10 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-medium z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        {theme === 'light' ? '☀️ Light Theme' : '🌙 Dark Theme'}
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Sanatan Dharma for the World
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-saffron-400 mb-4 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Timeless Vedic Wisdom for Modern Seekers
              </motion.p>
              <motion.p 
                className="text-lg text-white/90 mb-8 max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Explore authentic Vedic teachings, sacred scriptures, and community-driven Dharma projects. 
                Join our global movement to preserve and promote Sanatan Dharma through the perfect blend of ancient wisdom and modern innovation.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button href="/about" size="lg" className="shadow-lg hover:shadow-xl">
                  Learn More
                </Button>
                <Button href="/donate" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  Support Us
                </Button>
                <Button href="/devotees" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  Join the Community
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <SanatanCalendar />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <motion.div
        animate={{ 
          y: [0, -15, 0], 
          rotate: [0, 5, 0],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-20 left-10 w-20 h-20 opacity-20 z-10"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-saffron-500 to-orange-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">ॐ</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-32 right-20 w-16 h-16 opacity-20 z-10"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;