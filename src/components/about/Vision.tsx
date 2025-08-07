import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Lightbulb, Globe, Users } from 'lucide-react';
import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';

const Vision: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTitle
            title="Our Vision & Mission"
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-saffron-100 rounded-full mr-4">
                <Target className="w-6 h-6 text-saffron-500" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-navy-800">
                Our Mission
              </h3>
            </div>
            <p className="text-navy-600">
              To educate, empower, and elevate individuals globally by integrating ancient Sanatan teachings with modern technology, creating life-changing systems, tools, and programs for health, vision, consciousness, and community upliftment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-saffron-100 rounded-full mr-4">
                <Lightbulb className="w-6 h-6 text-saffron-500" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-navy-800">
                Our Vision
              </h3>
            </div>
            <p className="text-navy-600">
              A world where timeless Sanatan wisdom illuminates every human life — blending spiritual consciousness with technological innovation to create harmony, health, and holistic evolution.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-saffron-100 rounded-full mr-4">
                <Globe className="w-6 h-6 text-saffron-500" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-navy-800">
                Global Impact
              </h3>
            </div>
            <p className="text-navy-600">
              Creating a network of transformation centers worldwide, powered by technology and rooted in ancient wisdom, serving communities across cultures and boundaries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-saffron-100 rounded-full mr-4">
                <Users className="w-6 h-6 text-saffron-500" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-navy-800">
                Community Focus
              </h3>
            </div>
            <p className="text-navy-600">
              Building inclusive spaces where diverse communities can come together to learn, grow, and evolve through the integration of ancient wisdom and modern innovation.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Vision;