import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Page Not Found - Sanatan International';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <img 
                src="/om-symbol.svg" 
                alt="Om Symbol" 
                className="w-24 h-24 mx-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy-900 mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading mb-6 text-navy-800">
              Page Not Found
            </h2>
            <p className="text-navy-600 mb-8 max-w-md mx-auto">
              The page you are looking for doesn't exist or has been moved.
              Let us guide you back to the path of wisdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate(-1)}>
                Go Back
              </Button>
              <Button href="/" variant="outline">
                Return Home
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;