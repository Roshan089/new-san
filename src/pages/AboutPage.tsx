import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Lightbulb, Globe, Users, Book, Heart, Award, Shield, Compass } from 'lucide-react';
import Container from '../components/shared/Container';
import SectionTitle from '../components/shared/SectionTitle';
import CallToAction from '../components/shared/CallToAction';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - Sanatan International';
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: Shield,
      title: "Authenticity",
      description: "Maintaining the highest standard of scriptural integrity and traditional accuracy"
    },
    {
      icon: Heart,
      title: "Devotion",
      description: "Approaching all work with reverence and devotional service to Dharma"
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "Welcoming seekers from all backgrounds to explore eternal wisdom"
    },
    {
      icon: Compass,
      title: "Guidance",
      description: "Providing clear direction based on traditional teachings and commentaries"
    }
  ];

  const achievements = [
    {
      number: "10,000+",
      label: "Sacred Texts Digitized",
      description: "Ancient manuscripts preserved for future generations"
    },
    {
      number: "50+",
      label: "Countries Reached",
      description: "Global community of seekers and devotees"
    },
    {
      number: "100+",
      label: "Scholars Supported",
      description: "Traditional teachers and researchers worldwide"
    },
    {
      number: "25+",
      label: "Languages",
      description: "Translations and commentaries available"
    }
  ];

  return (
    <div className="pt-24">
      <Helmet>
        <title>About Us - Sanatan International</title>
        <meta name="description" content="Learn about Sanatan International — a global non-profit dedicated to preserving and promoting authentic Sanatan Dharma through sacred teachings, community, and service." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-navy-900 dark:bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-mandala-pattern bg-repeat opacity-5"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -right-32 top-1/4 opacity-10 z-0"
        >
          <div className="w-96 h-96 rounded-full border-4 border-saffron-500"></div>
        </motion.div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-heading font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              About Sanatan International
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-saffron-400 mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Preserving Eternal Wisdom for Global Transformation
            </motion.p>
            <motion.p 
              className="text-lg text-white/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A global, non-profit organization devoted to the preservation, promotion, and practice of Sanatan Dharma — 
              the eternal, universal tradition of Vedic wisdom.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white dark:bg-silver-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="\assets\images\Hero-aboutus.jpg" 
                  alt="Sanatan International" 
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-saffron-500 text-white p-4 rounded-full shadow-lg"
              >
                <Book className="w-8 h-8" />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-navy-900 dark:text-silver-100">
                Our Sacred Purpose
              </h2>
              
              <div className="space-y-6 text-navy-700 dark:text-silver-300">
                <motion.p 
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  We serve as a bridge between the ancient teachings of Bharat's Rishis and the modern world. 
                  All our offerings are grounded in the <span className="text-saffron-600 dark:text-saffron-400 font-semibold">Vedas, Upanishads, Bhagavad Gita, Mahabharata, Ramayana, 
                  Puranas, Agamas, Tantras</span>, and authentic Dharma Shastras.
                </motion.p>
                
                <motion.p 
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Guided by the traditional commentaries of respected Acharyas like <span className="font-semibold">Shankaracharya, 
                  Ramanujacharya, and Madhvacharya</span>, we ensure the purity and authenticity of every teaching we share.
                </motion.p>

                <motion.p 
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Our commitment extends beyond preservation to active promotion of Dharma-based living, 
                  making these eternal truths accessible and applicable for seekers worldwide.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                variants={fadeInUp}
                className="text-center p-6 bg-gradient-to-br from-saffron-50 to-orange-50 dark:from-saffron-900/20 dark:to-orange-900/20 rounded-xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-saffron-600 dark:text-saffron-400 mb-2"
                >
                  {achievement.number}
                </motion.div>
                <h3 className="text-lg font-semibold text-navy-800 dark:text-silver-200 mb-2">
                  {achievement.label}
                </h3>
                <p className="text-sm text-navy-600 dark:text-silver-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-silver-100 mb-6">
              What We Do
            </h2>
            <p className="text-lg text-navy-600 dark:text-silver-300 max-w-3xl mx-auto">
              Our comprehensive approach to preserving and sharing Dharma encompasses multiple dimensions of service
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Book,
                title: "Authentic Resources",
                description: "Provide authentic resources to the global community with traditional commentaries and scholarly insights"
              },
              {
                icon: Users,
                title: "Educational Projects",
                description: "Support educational projects and scripture preservation through digital initiatives and scholarly programs"
              },
              {
                icon: Heart,
                title: "Dharma-based Seva",
                description: "Facilitate Dharma-based seva and community development through service-oriented projects"
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "Foster a living, global network of devotees and seekers connected by shared wisdom"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white dark:bg-silver-900 p-8 rounded-xl shadow-lg text-center group cursor-pointer"
              >
                <motion.div 
                  className="p-4 bg-saffron-100 dark:bg-saffron-900/30 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-saffron-200 dark:group-hover:bg-saffron-800/50 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-10 h-10 text-saffron-600 dark:text-saffron-400" />
                </motion.div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-navy-800 dark:text-silver-200">
                  {item.title}
                </h3>
                <p className="text-navy-600 dark:text-silver-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-silver-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-silver-100 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-navy-600 dark:text-silver-300 max-w-3xl mx-auto">
              These fundamental principles guide every aspect of our work and service
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="flex items-start space-x-6 p-6 bg-gray-50 dark:bg-black rounded-xl"
              >
                <motion.div 
                  className="p-3 bg-saffron-100 dark:bg-saffron-900/30 rounded-full flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon className="w-8 h-8 text-saffron-600 dark:text-saffron-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-navy-800 dark:text-silver-200">
                    {value.title}
                  </h3>
                  <p className="text-navy-600 dark:text-silver-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-silver-900 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="p-4 bg-saffron-100 dark:bg-saffron-900/30 rounded-full mr-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-8 h-8 text-saffron-600 dark:text-saffron-400" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy-800 dark:text-silver-100">
                  Our Mission
                </h3>
              </div>
              <div className="space-y-4 text-navy-600 dark:text-silver-300">
                <p className="text-lg font-semibold text-saffron-600 dark:text-saffron-400">
                  To preserve, promote, and share the timeless wisdom of Sanatan Dharma with the world.
                </p>
                <p>
                  Through education, community-building, and service, we strive to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-saffron-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Make authentic teachings accessible to all seekers
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-saffron-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Support traditional scholars and lineages
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-saffron-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Protect and digitize sacred texts
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-saffron-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Promote Dharma-based living worldwide
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-silver-900 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="p-4 bg-saffron-100 dark:bg-saffron-900/30 rounded-full mr-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Lightbulb className="w-8 h-8 text-saffron-600 dark:text-saffron-400" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy-800 dark:text-silver-100">
                  Our Vision
                </h3>
              </div>
              <div className="space-y-4 text-navy-600 dark:text-silver-300">
                <p className="text-lg font-semibold text-saffron-600 dark:text-saffron-400">
                  A vibrant, accessible global space where Dharma wisdom is preserved with integrity.
                </p>
                <p>
                  We aspire to create a future where:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-saffron-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Every seeker can engage with authentic teachings
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-saffron-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    A living community supports one another
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-saffron-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dharma-based projects contribute to harmony
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-saffron-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Vedic wisdom informs daily life globally
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-navy-900 dark:bg-black text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-8"
            >
              <Award className="w-full h-full text-saffron-400" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-saffron-400">
              Our Sacred Commitment
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              To maintain the highest standard of scriptural integrity and devotional reverence, 
              serving both the tradition and the global community with humility and dedication.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block"
            >
              <p className="text-lg text-saffron-300 font-medium">
                "सत्यं शिवं सुन्दरम्" - Truth, Auspiciousness, Beauty
              </p>
              <p className="text-white/80 mt-2">
                These eternal principles guide our every action and decision
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <CallToAction variant="alternate" />
    </div>
  );
};

export default AboutPage;