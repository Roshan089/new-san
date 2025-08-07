import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle } from 'lucide-react';
import Button from '../shared/Button';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      {formSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-heading font-bold text-navy-900 dark:text-white mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-navy-600 dark:text-silver-300">
            Thank you for your message! We'll get back to you soon. 🙏
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-navy-700 dark:text-white font-medium mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-silver-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white transition-colors duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-navy-700 dark:text-white font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-silver-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white transition-colors duration-200"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-navy-700 dark:text-white font-medium mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-silver-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white transition-colors duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-navy-700 dark:text-white font-medium mb-2">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 dark:border-silver-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white transition-colors duration-200"
              required
            ></textarea>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            size="lg"
          >
            <Send className="w-5 h-5 mr-2" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;