import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';

const Story: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className="py-20 bg-white dark:bg-black">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Theme-based images with smooth transition */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Light theme image */}
              <motion.img 
                src="/assets/images/Hero About us.jpg"
                alt="Sanatan International Story - Light Theme" 
                className={`w-full h-auto transition-opacity duration-1000 ${
                  theme === 'light' ? 'opacity-100' : 'opacity-0'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: theme === 'light' ? 1 : 0 }}
                transition={{ duration: 1 }}
              />
              
              {/* Dark theme image */}
              <motion.img 
                src="/assets/images/Hero About us_Darktheme.jpg"
                alt="Sanatan International Story - Dark Theme" 
                className={`absolute inset-0 w-full h-auto transition-opacity duration-1000 ${
                  theme === 'dark' ? 'opacity-100' : 'opacity-0'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: theme === 'dark' ? 1 : 0 }}
                transition={{ duration: 1 }}
              />
              
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Theme indicator */}
              <motion.div 
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                {theme === 'light' ? '☀️ Light' : '🌙 Dark'} Theme
              </motion.div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-saffron-500 text-white p-4 rounded-full shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="currentColor" d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
              </svg>
            </motion.div>

            {/* Sacred geometry overlay */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -left-8 w-24 h-24 opacity-20"
            >
              <div className="w-full h-full rounded-full border-2 border-saffron-500 relative">
                <div className="absolute inset-2 rounded-full border border-orange-500"></div>
                <div className="absolute inset-4 rounded-full border border-saffron-300"></div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Our Sacred Purpose"
              className="mb-6"
            />
            
            <div className="prose prose-lg dark:prose-invert">
              <motion.p 
                className="text-navy-700 dark:text-silver-300 mb-6 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Sanatan International is a visionary non-profit organization founded in 2024 in California, USA, with a mission to bring the eternal teachings of Sanatan Dharma into the modern world. We exist to bridge the sacred ancient knowledge of the Vedas, Upanishads, Ayurveda, Yoga, and Sanatan science with today's technological advancements — creating powerful tools, centers, and platforms that serve humanity.
              </motion.p>
              
              <motion.p 
                className="text-navy-700 dark:text-silver-300 mb-6 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our approach is inclusive, non-religious, and rooted in the fundamental idea that Sanatan (meaning "eternal") is not just a philosophy, but a universal code of life.
              </motion.p>

              <motion.p 
                className="text-navy-700 dark:text-silver-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                We aim to build centers for transformation — spiritual, mental, and scientific — that will empower individuals and communities through practices inspired by Sanatan wisdom and powered by modern research and innovation.
              </motion.p>

              {/* Sacred symbols decoration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 flex items-center justify-center space-x-6"
              >
                <div className="text-saffron-500 text-2xl">ॐ</div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-saffron-500 to-orange-500"></div>
                <div className="text-orange-500 text-xl">🕉️</div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-saffron-500"></div>
                <div className="text-saffron-500 text-2xl">ॐ</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Story;