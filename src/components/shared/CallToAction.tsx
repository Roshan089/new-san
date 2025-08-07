import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users } from 'lucide-react';
import Container from './Container';
import Button from './Button';

interface CallToActionProps {
  variant?: 'default' | 'alternate';
}

const CallToAction: React.FC<CallToActionProps> = ({ variant = 'default' }) => {
  const isAlternate = variant === 'alternate';
  
  return (
    <section className={`py-16 ${isAlternate ? 'bg-navy-900 dark:bg-black text-white' : 'bg-gray-50 dark:bg-silver-900'}`}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-silver-800 rounded-lg shadow-md p-8 flex flex-col items-center text-center"
          >
            <div className="bg-saffron-100 dark:bg-saffron-900/30 p-4 rounded-full mb-6">
              <Heart size={32} className="text-saffron-500 dark:text-saffron-400" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-navy-900 dark:text-silver-100 mb-4">
              Support Our Mission
            </h3>
            <p className="text-navy-600 dark:text-silver-300 mb-6">
              Your contribution helps us preserve and share ancient wisdom with the world.
              Support our initiatives and be part of this transformative journey.
            </p>
            <Button href="/donate">
              Donate Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-silver-800 rounded-lg shadow-md p-8 flex flex-col items-center text-center"
          >
            <div className="bg-saffron-100 dark:bg-saffron-900/30 p-4 rounded-full mb-6">
              <Users size={32} className="text-saffron-500 dark:text-saffron-400" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-navy-900 dark:text-silver-100 mb-4">
              Join Our Community
            </h3>
            <p className="text-navy-600 dark:text-silver-300 mb-6">
              Become part of our global community of devotees and seekers.
              Connect with fellow practitioners and deepen your spiritual journey.
            </p>
            <Button href="/devotees" variant="outline">
              Join Community
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;