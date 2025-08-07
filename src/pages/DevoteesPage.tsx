import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Video, Heart, Calendar, Users, Globe, Star, Award, ExternalLink, Linkedin, Instagram, Facebook, Crown, Sparkles, Target, BookOpen } from 'lucide-react';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';

const devoteesList = [
  {
    name: "Anonymous Devotee",
    message: "",
    date: "June 6, 2025",
    isAnonymous: true
  },
  {
    name: "Smt. Lakshmi Nair",
    message: "With gratitude to the Vedas.",
    date: "June 5, 2025",
    isAnonymous: false
  },
  {
    name: "Anonymous Devotee", 
    message: "",
    date: "June 5, 2025",
    isAnonymous: true
  },
  {
    name: "Shri Arjun Das",
    message: "For the service of Dharma.",
    date: "June 4, 2025",
    isAnonymous: false
  },
  {
    name: "Dr. Meera Sharma",
    message: "Supporting ancient wisdom preservation.",
    date: "June 3, 2025",
    isAnonymous: false
  },
  {
    name: "Anonymous Devotee",
    message: "",
    date: "June 2, 2025",
    isAnonymous: true
  }
];

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    role: "Vedic Scholar",
    location: "California, USA",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    message: "Sanatan International has created a beautiful bridge between ancient wisdom and modern accessibility. Their commitment to authentic teachings is invaluable for preserving our sacred heritage.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Devotee & Teacher",
    location: "New Jersey, USA", 
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
    message: "The resources provided by Sanatan International have deepened my understanding of our sacred texts. Their approach maintains the purity of traditional teachings while making them accessible to modern seekers.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Community Leader",
    location: "Texas, USA",
    image: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg",
    message: "Supporting Sanatan International means supporting the preservation of our eternal Dharma. Their vision of global accessibility while maintaining authenticity is truly remarkable and needed in today's world.",
    rating: 5
  }
];

const communityStats = [
  { number: "0", label: "Global Devotees", icon: Users },
  { number: "50+", label: "Countries", icon: Globe },
  { number: "$0", label: "Raised", icon: Heart },
  { number: "8", label: "Projects Supported", icon: Star }
];

const visionary = {
  name: "Dr. Vineeta Kapoor",
  role: "International Ambassador & Co-Founder",
  image: "/assets/images/Vineeta-kapoor.jpg",
  description: "Dr. Vineeta Kapoor serves as the International Ambassador and Co-Founder of Sanatan International, bringing her extensive expertise in transformational coaching, spiritual sciences, and global leadership to our mission. As the main face of our organization, she represents our values and vision on the international stage.",
  impact: "Through her guidance and global presence, Dr. Kapoor inspires millions to embrace timeless Sanatan teachings while applying them in modern life. Her leadership ensures that Sanatan International resonates not only with the Indian diaspora but with seekers worldwide, bridging cultures and communities through the universal wisdom of Dharma.",
  vision: "Dr. Kapoor's leadership aligns perfectly with our vision of making Sanatan wisdom relevant for future generations through education, research, innovation, and community service. As our International Ambassador, she embodies the perfect synthesis of ancient wisdom and contemporary relevance.",
  socialLinks: [
    { platform: "Website", icon: ExternalLink, url: "#" },
    { platform: "Instagram", icon: Instagram, url: "#" },
    { platform: "LinkedIn", icon: Linkedin, url: "#" },
    { platform: "Facebook", icon: Facebook, url: "#" }
  ],
  badge: "International Ambassador"
};

const DevoteesPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('devotees.title') || 'Devotees - Sanatan International';
  }, [t]);

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

  return (
    <div className="pt-24 bg-white dark:bg-black transition-colors duration-300">
      <Helmet>
        <title>{t('devotees.title') || 'Devotees - Sanatan International'}</title>
        <meta name="description" content={t('devotees.description') || 'Join the global community of Sanatan Dharma devotees — support our mission and choose to appear as an anonymous donor or by name in our live Devotees List.'} />
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <Heart className="w-16 h-16 text-saffron-500 mx-auto" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {t('devotees.hero.title') || 'Our Global Community of Devotees'}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-saffron-400 mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t('devotees.hero.subtitle') || 'United by Dharma, Connected Across Continents'}
            </motion.p>
            <motion.p 
              className="text-lg text-white/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {t('devotees.hero.description') || 'The heart of Sanatan International is its global community of devotees. By supporting our mission, you help preserve and promote Sanatan Dharma for future generations.'}
            </motion.p>

            {/* Organization Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto mb-8"
            >
              <h3 className="text-xl font-heading font-semibold text-saffron-400 mb-4">
                🌟 Our Mission & Vision
              </h3>
              <p className="text-white/90 leading-relaxed">
                Sanatan International is a transformative initiative dedicated to preserving and promoting the timeless wisdom of Sanatan Dharma. 
                Our organization brings together visionary leaders, dedicated volunteers, and passionate devotees to create a global movement that bridges ancient wisdom with modern innovation, 
                serving seekers worldwide and helping humanity reconnect with eternal spiritual truths.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* International Ambassador Section */}
      <section className="py-20 bg-gradient-to-br from-saffron-50 via-orange-50 to-yellow-50 dark:from-saffron-900/20 dark:via-orange-900/20 dark:to-yellow-900/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-saffron-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-white">
                ✨ Our International Ambassador
              </h2>
              <Sparkles className="w-8 h-8 text-saffron-500 ml-3" />
            </div>
            <p className="text-lg text-navy-600 dark:text-silver-300 max-w-4xl mx-auto mb-8">
              Meet the distinguished leader who serves as the global face of Sanatan International, 
              representing our mission and values on the international stage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-saffron-200 to-orange-200 dark:from-saffron-800 dark:to-orange-800 rounded-2xl opacity-50"></div>
                <img
                  src={visionary.image}
                  alt={visionary.name}
                  className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg bg-gradient-to-r from-purple-500 to-pink-500">
                    <Crown className="w-4 h-4 mr-1" />
                    {visionary.badge}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-xl border border-saffron-200 dark:border-saffron-800">
                <div className="flex items-center mb-6">
                  <Star className="w-6 h-6 text-saffron-500 mr-3" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 dark:text-white">
                    {visionary.name}
                  </h3>
                </div>
                
                <p className="text-lg font-medium text-saffron-600 dark:text-saffron-400 mb-6">
                  {visionary.role}
                </p>

                <div className="space-y-4 mb-6">
                  <p className="text-navy-700 dark:text-silver-300 leading-relaxed">
                    {visionary.description}
                  </p>
                  
                  <div className="bg-saffron-50 dark:bg-saffron-900/20 p-4 rounded-lg border-l-4 border-saffron-500">
                    <p className="text-navy-700 dark:text-silver-300 leading-relaxed">
                      <strong>👉 Global Impact:</strong> {visionary.impact}
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-navy-700 dark:text-silver-300 leading-relaxed">
                      <strong>🎯 Leadership Vision:</strong> {visionary.vision}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {visionary.socialLinks.map((link, linkIndex) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-saffron-500 to-orange-500 text-white rounded-lg hover:from-saffron-600 hover:to-orange-600 transition-all duration-200 shadow-md"
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {link.platform} ➜
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-navy-900 to-indigo-900 dark:from-black dark:to-gray-900 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <Target className="w-16 h-16 text-saffron-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
              📜 Our Shared Vision for Humanity
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
              Through dedicated leadership and collaborative efforts, we are building a global movement where:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <BookOpen className="w-8 h-8 text-saffron-400 mx-auto mb-3" />
                <p className="text-white/90">
                  Ancient Sanatan knowledge is digitized, democratized, and disseminated globally
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="w-8 h-8 text-saffron-400 mx-auto mb-3" />
                <p className="text-white/90">
                  Communities worldwide can access life-transforming spiritual tools and teachings
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Award className="w-8 h-8 text-saffron-400 mx-auto mb-3" />
                <p className="text-white/90">
                  A world-class Sanatan International Center emerges as a beacon of excellence
                </p>
              </div>
            </div>

            <p className="text-xl text-saffron-400 font-medium">
              ✨ Join us on this divine journey — as we honor the past, serve the present, and inspire the future.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-gray-50 dark:bg-silver-900">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center p-6 bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-silver-700"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-saffron-100 dark:bg-saffron-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                >
                  <stat.icon className="w-8 h-8 text-saffron-500" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-saffron-600 dark:text-saffron-400 mb-2"
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-lg font-semibold text-navy-800 dark:text-white">
                  {stat.label}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Recognition Options */}
      <section className="py-16 bg-white dark:bg-black">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-6 text-navy-900 dark:text-white">
                🙏 {t('devotees.recognition.title') || 'Choose How You Are Recognized'}
              </h2>
              <p className="text-lg text-navy-600 dark:text-silver-300 mb-8">
                {t('devotees.recognition.description') || 'When you donate or offer seva, you can select:'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-saffron-50 to-orange-50 dark:from-saffron-900/20 dark:to-orange-900/20 p-8 rounded-xl shadow-lg text-center border border-saffron-200 dark:border-saffron-800"
              >
                <div className="bg-saffron-100 dark:bg-saffron-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-saffron-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-navy-800 dark:text-white">
                  {t('devotees.recognition.named.title') || 'Show My Name'}
                </h3>
                <p className="text-navy-600 dark:text-silver-300">
                  {t('devotees.recognition.named.description') || 'Appear on Devotees List with your name and optional short message'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl shadow-lg text-center border border-blue-200 dark:border-blue-800"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-navy-800 dark:text-white">
                  {t('devotees.recognition.anonymous.title') || 'Donate Anonymously'}
                </h3>
                <p className="text-navy-600 dark:text-silver-300">
                  {t('devotees.recognition.anonymous.description') || 'Listed as "Anonymous Devotee" to maintain privacy'}
                </p>
              </motion.div>
            </div>

            <div className="text-center">
              <Button href="/donate" size="lg">
                {t('devotees.supportNow') || 'Support Now'}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Live Devotees List */}
      <section className="py-16 bg-gray-50 dark:bg-silver-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold mb-4 text-navy-900 dark:text-white">
              🌟 {t('devotees.liveList.title') || 'Live Devotees List'}
            </h2>
            <p className="text-navy-600 dark:text-silver-300">
              {t('devotees.liveList.description') || 'Automatically updated in real time after donation'}
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-silver-700">
              <div className="bg-navy-900 dark:bg-black text-white p-6">
                <div className="grid grid-cols-3 gap-4 font-heading font-semibold">
                  <div className="text-white">{t('devotees.table.name') || 'Name'}</div>
                  <div className="text-white">{t('devotees.table.message') || 'Message'}</div>
                  <div className="flex items-center text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t('devotees.table.date') || 'Date'}
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-silver-700">
                {devoteesList.map((devotee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 dark:hover:bg-silver-800 transition-colors duration-200"
                  >
                    <div className={`font-medium ${devotee.isAnonymous ? 'text-gray-500 dark:text-silver-400 italic' : 'text-navy-800 dark:text-white'}`}>
                      {devotee.name}
                    </div>
                    <div className="text-navy-600 dark:text-silver-300 italic">
                      {devotee.message && `"${devotee.message}"`}
                    </div>
                    <div className="text-navy-500 dark:text-silver-400 text-sm">
                      {devotee.date}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Community Messages */}
      <section className="py-16 bg-white dark:bg-black">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-navy-900 dark:text-white mb-4">
              {t('devotees.messages.title') || 'Messages from Our Community'}
            </h2>
            <p className="text-lg text-navy-600 dark:text-silver-300">
              {t('devotees.messages.description') || 'Hear from devotees who are part of our global Dharma family'}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-silver-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-silver-700"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-heading font-semibold text-navy-800 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-navy-600 dark:text-silver-400">{testimonial.role}</p>
                    <p className="text-sm text-navy-500 dark:text-silver-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <MessageCircle className="w-8 h-8 text-saffron-200 dark:text-saffron-800 absolute -top-4 -left-4" />
                  <p className="text-navy-600 dark:text-silver-300 italic leading-relaxed">
                    "{testimonial.message}"
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Join Community CTA */}
      <section className="py-16 bg-gradient-to-r from-saffron-50 to-orange-50 dark:from-saffron-900/20 dark:to-orange-900/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Award className="w-16 h-16 text-saffron-500 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 dark:text-white mb-4">
              {t('devotees.cta.title') || 'Join Our Sacred Mission'}
            </h3>
            <p className="text-navy-600 dark:text-silver-300 mb-8 text-lg">
              {t('devotees.cta.description') || 'Become part of our global family dedicated to preserving and sharing the eternal wisdom of Sanatan Dharma. Your support, whether through donation or service, helps keep these sacred teachings alive for future generations.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/donate" size="lg">
                {t('devotees.cta.support') || 'Support Our Mission'}
              </Button>
              <Button href="/volunteer" variant="outline" size="lg">
                {t('devotees.cta.volunteer') || 'Become a Volunteer'}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default DevoteesPage;