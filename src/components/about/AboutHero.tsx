import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../shared/Container';

const AboutHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-24 pb-16 bg-navy-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mandala-pattern bg-repeat opacity-5"></div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About Sanatan International
          </h1>
          <p className="text-2xl font-heading mb-4 text-saffron-500">
            From Eternal Wisdom to Universal Transformation
          </p>
          <p className="text-xl text-white/80">
            Bridging sacred ancient knowledge with modern technology to serve humanity.
          </p>
        </motion.div>
      </Container>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-16 -bottom-16 w-64 h-64 opacity-10"
      >
        <div className="w-full h-full rounded-full border-4 border-saffron-500"></div>
      </motion.div>
    </section>
  );
};

export default AboutHero;