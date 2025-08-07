import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Users, BookOpen, Heart, MessageSquare, Phone, Globe } from 'lucide-react';
import Container from '../components/shared/Container';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('contact.title') || 'Contact Us - Sanatan International';
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const contactReasons = [
    {
      icon: BookOpen,
      title: "Seekers",
      description: "Interested in learning more about Sanatan Dharma?",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Devotees", 
      description: "Wishing to support our mission?",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Scholars",
      description: "Wishing to collaborate on projects?",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: MessageSquare,
      title: "Well-wishers",
      description: "With questions or feedback?",
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <div className="pt-24 bg-white dark:bg-black transition-colors duration-300">
      <Helmet>
        <title>{t('contact.title') || 'Contact Us - Sanatan International'}</title>
        <meta name="description" content={t('contact.description') || 'Connect with Sanatan International — we welcome your inquiries, support, and participation in the global Dharma community.'} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-navy-900 via-indigo-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-black text-white relative overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -right-32 -top-32 w-96 h-96 opacity-10"
        >
          <div className="w-full h-full rounded-full border-4 border-saffron-500"></div>
        </motion.div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Connect With Us
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-saffron-400 mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We Would Love to Hear From You!
            </motion.p>
            <motion.p 
              className="text-lg text-white/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Whether you're a seeker, devotee, scholar, or well-wisher, we welcome your inquiries, 
              support, and participation in our global Dharma community.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Reasons */}
      <section className="py-16 bg-gray-50 dark:bg-silver-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-navy-900 dark:text-white mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-navy-600 dark:text-silver-300">
              We're here to assist with various aspects of your spiritual journey
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-black rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-silver-700"
              >
                <div className={`bg-gradient-to-r ${reason.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy-800 dark:text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-navy-600 dark:text-silver-400">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white dark:bg-black">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-heading font-bold text-navy-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-navy-700 dark:text-silver-300 mb-8">
                Please use our Contact Form or reach us directly through the following channels:
              </p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-saffron-100 dark:bg-saffron-900/30 p-3 rounded-full text-saffron-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy-800 dark:text-white mb-1">Email</h3>
                    <a 
                      href="mailto:contact@sanataninternational.org" 
                      className="text-navy-600 dark:text-silver-300 hover:text-saffron-500 dark:hover:text-saffron-400 transition-colors duration-200"
                    >
                      contact@sanataninternational.org
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-saffron-100 dark:bg-saffron-900/30 p-3 rounded-full text-saffron-500">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy-800 dark:text-white mb-1">Organization</h3>
                    <p className="text-navy-600 dark:text-silver-300">Global Non-Profit</p>
                    <p className="text-navy-600 dark:text-silver-300">Serving Worldwide</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-saffron-100 dark:bg-saffron-900/30 p-3 rounded-full text-saffron-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy-800 dark:text-white mb-1">Headquarters</h3>
                    <p className="text-navy-600 dark:text-silver-300">California, United States</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-10">
                <h3 className="font-heading font-semibold text-navy-800 dark:text-white mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: "facebook", href: "#" },
                    { icon: "twitter", href: "#" },
                    { icon: "instagram", href: "#" },
                    { icon: "youtube", href: "#" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.icon}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="bg-navy-800 dark:bg-silver-800 text-white p-3 rounded-full hover:bg-saffron-500 dark:hover:bg-saffron-600 transition-colors duration-200"
                    >
                      <div className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-50 dark:bg-silver-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-silver-700">
                <h2 className="text-2xl font-heading font-bold text-navy-900 dark:text-white mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Response Promise */}
      <section className="py-16 bg-navy-900 dark:bg-black text-white text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <MessageSquare className="w-16 h-16 text-saffron-400 mx-auto mb-6" />
            <h2 className="text-2xl font-heading font-bold mb-4 text-white">
              We Will Respond as Soon as Possible
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Our team is dedicated to responding to all inquiries within 24-48 hours. 
              We value your interest in Sanatan Dharma and look forward to connecting with you.
            </p>
            <p className="text-xl text-saffron-400 font-medium">
              🙏 Dhanyavaadah!
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;