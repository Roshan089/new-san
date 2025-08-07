import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Book, FileText, Video, Download, Headphones, Search, Filter, Star, Play, Eye } from 'lucide-react';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';
import SanatanCalendar from '../components/shared/SanatanCalendar';
import BirthChartCalculator from '../components/shared/BirthChartCalculator';

const resources = [
  {
    title: 'Sacred Texts',
    description: 'Authentic Vedic scriptures with traditional commentaries from respected Acharyas.',
    icon: Book,
    color: 'from-blue-500 to-indigo-600',
    items: [
      { 
        name: 'Vedas (Rig, Sama, Yajur, Atharva)', 
        format: 'PDF', 
        size: '15.2 MB', 
        url: '/resources/vedas',
        rating: 4.9,
        downloads: 12500,
        description: 'Complete collection of the four Vedas with Sanskrit text and translations'
      },
      { 
        name: 'Upanishads Collection', 
        format: 'PDF', 
        size: '8.1 MB', 
        url: '/resources/upanishads',
        rating: 4.8,
        downloads: 9800,
        description: 'Principal Upanishads with commentaries from Shankaracharya'
      },
      { 
        name: 'Bhagavad Gita', 
        format: 'PDF', 
        size: '3.5 MB', 
        url: '/resources/bhagavad-gita',
        rating: 5.0,
        downloads: 25000,
        description: 'Complete Bhagavad Gita with multiple traditional commentaries'
      },
      { 
        name: 'Mahabharata & Ramayana', 
        format: 'PDF', 
        size: '25.3 MB', 
        url: '/resources/epics',
        rating: 4.7,
        downloads: 8200,
        description: 'Complete epics with cultural and spiritual insights'
      },
      { 
        name: 'Puranas Collection', 
        format: 'PDF', 
        size: '18.7 MB', 
        url: '/resources/puranas',
        rating: 4.6,
        downloads: 6500,
        description: 'Major Puranas including Vishnu, Shiva, and Bhagavata Purana'
      }
    ],
  },
  {
    title: 'Commentaries',
    description: 'Traditional commentaries from respected Acharyas including Shankara, Ramanuja, and Madhva.',
    icon: FileText,
    color: 'from-emerald-500 to-teal-600',
    items: [
      { 
        name: 'Shankaracharya Commentaries', 
        format: 'PDF', 
        size: '12.2 MB', 
        url: '/resources/shankara',
        rating: 4.9,
        downloads: 7800,
        description: 'Advaita Vedanta commentaries on major Upanishads and Gita'
      },
      { 
        name: 'Ramanujacharya Works', 
        format: 'PDF', 
        size: '8.4 MB', 
        url: '/resources/ramanuja',
        rating: 4.8,
        downloads: 5600,
        description: 'Vishishtadvaita philosophy and devotional teachings'
      },
      { 
        name: 'Madhvacharya Teachings', 
        format: 'PDF', 
        size: '6.8 MB', 
        url: '/resources/madhva',
        rating: 4.7,
        downloads: 4200,
        description: 'Dvaita Vedanta philosophy and scriptural interpretations'
      },
      { 
        name: 'Other Respected Acharyas', 
        format: 'PDF', 
        size: '15.1 MB', 
        url: '/resources/acharyas',
        rating: 4.6,
        downloads: 3800,
        description: 'Commentaries from Vallabhacharya, Nimbarkacharya, and others'
      },
      { 
        name: 'Contemporary Scholars', 
        format: 'PDF', 
        size: '9.3 MB', 
        url: '/resources/modern-scholars',
        rating: 4.5,
        downloads: 3200,
        description: 'Modern scholarly interpretations maintaining traditional authenticity'
      }
    ],
  },
  {
    title: 'Audio / Video Teachings',
    description: 'Recitations, guided reflections, and talks by scholars to deepen your spiritual practice.',
    icon: Video,
    color: 'from-purple-500 to-pink-600',
    items: [
      { 
        name: 'Vedic Recitations', 
        format: 'MP3', 
        size: '450 MB', 
        url: '/resources/recitations',
        rating: 4.9,
        downloads: 15000,
        description: 'Authentic Vedic chanting by traditional scholars'
      },
      { 
        name: 'Guided Reflections', 
        format: 'MP3', 
        size: '280 MB', 
        url: '/resources/guided-meditation',
        rating: 4.8,
        downloads: 12000,
        description: 'Meditation guidance based on Vedic principles'
      },
      { 
        name: 'Talks by Scholars', 
        format: 'MP4', 
        size: '1.2 GB', 
        url: '/resources/scholar-talks',
        rating: 4.7,
        downloads: 8500,
        description: 'Lectures on various aspects of Dharma and spirituality'
      },
      { 
        name: 'Sanskrit Pronunciation Guide', 
        format: 'MP4', 
        size: '350 MB', 
        url: '/resources/pronunciation',
        rating: 4.8,
        downloads: 9200,
        description: 'Learn correct Sanskrit pronunciation for mantras and texts'
      },
      { 
        name: 'Bhajan and Kirtan Collection', 
        format: 'MP3', 
        size: '650 MB', 
        url: '/resources/devotional-music',
        rating: 4.9,
        downloads: 18000,
        description: 'Traditional devotional music for spiritual upliftment'
      }
    ],
  },
  {
    title: 'Articles & Insights',
    description: 'Practical wisdom for modern living based on eternal Dharmic principles.',
    icon: Headphones,
    color: 'from-orange-500 to-red-600',
    items: [
      { 
        name: 'Dharma in Modern Life', 
        format: 'PDF', 
        size: '2.1 MB', 
        url: '/resources/modern-dharma',
        rating: 4.7,
        downloads: 11000,
        description: 'Applying ancient principles to contemporary challenges'
      },
      { 
        name: 'Rituals and Festivals Guide', 
        format: 'PDF', 
        size: '4.8 MB', 
        url: '/resources/festivals',
        rating: 4.8,
        downloads: 13500,
        description: 'Complete guide to Vedic festivals and their significance'
      },
      { 
        name: 'Saints and Sages Biographies', 
        format: 'PDF', 
        size: '7.2 MB', 
        url: '/resources/saints',
        rating: 4.6,
        downloads: 7800,
        description: 'Lives and teachings of great spiritual masters'
      },
      { 
        name: 'Vedic Science and Philosophy', 
        format: 'PDF', 
        size: '5.5 MB', 
        url: '/resources/vedic-science',
        rating: 4.7,
        downloads: 9200,
        description: 'Scientific principles found in ancient Vedic texts'
      },
      { 
        name: 'Daily Spiritual Practices', 
        format: 'PDF', 
        size: '3.1 MB', 
        url: '/resources/daily-practice',
        rating: 4.9,
        downloads: 16000,
        description: 'Practical guide for incorporating spirituality in daily life'
      }
    ],
  },
];

const LibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Resources - Sanatan International';
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

  const filteredResources = resources.filter(resource => {
    if (selectedCategory === 'all') return true;
    return resource.title.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="pt-24">
      <Helmet>
        <title>Resources - Sanatan International</title>
        <meta name="description" content="Explore a rich collection of Vedic resources — sacred texts, authentic commentaries, audio teachings, and articles to deepen your understanding of Sanatan Dharma." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-navy-900 via-indigo-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-black text-white relative overflow-hidden">
        {/* Animated Background */}
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
              Sanatan Resources
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-saffron-400 mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Curated Collection of Authentic Dharma Materials
            </motion.p>
            <motion.p 
              className="text-lg text-white/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our Resources section offers a curated collection of authentic Sanatan Dharma materials, 
              including sacred texts, traditional commentaries, audio teachings, and practical insights.
            </motion.p>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-saffron-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-saffron-500"
              >
                <option value="all">All Categories</option>
                <option value="sacred">Sacred Texts</option>
                <option value="commentaries">Commentaries</option>
                <option value="audio">Audio/Video</option>
                <option value="articles">Articles</option>
              </select>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 bg-white dark:bg-black">
        <Container>
          {/* Calendar and Calculator Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-navy-900 dark:text-white mb-4">
                Spiritual Tools & Calendar
              </h2>
              <p className="text-lg text-navy-600 dark:text-silver-300">
                Connect with cosmic rhythms and discover your spiritual path
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <SanatanCalendar />
              </div>
              <div>
                <BirthChartCalculator />
              </div>
            </div>
          </motion.div>

          {/* Resources Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  variants={fadeInUp}
                  className="bg-white dark:bg-black rounded-2xl shadow-xl overflow-hidden group border border-gray-200 dark:border-silver-700"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${resource.color} p-6 text-white relative overflow-hidden`}>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -right-8 -top-8 w-32 h-32 opacity-20"
                    >
                      <Icon className="w-full h-full" />
                    </motion.div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full mr-4">
                          <Icon className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-heading font-bold text-white">
                          {resource.title}
                        </h2>
                      </div>
                      <p className="text-white/90 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {resource.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          onMouseEnter={() => setHoveredItem(item.name)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className="group/item p-4 border border-gray-200 dark:border-silver-700 rounded-xl hover:border-saffron-300 dark:hover:border-saffron-600 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-navy-800 dark:text-white mb-2 group-hover/item:text-saffron-600 dark:group-hover/item:text-saffron-400 transition-colors">
                                {item.name}
                              </h3>
                              
                              <AnimatePresence>
                                {hoveredItem === item.name && (
                                  <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-sm text-navy-600 dark:text-silver-400 mb-3"
                                  >
                                    {item.description}
                                  </motion.p>
                                )}
                              </AnimatePresence>

                              <div className="flex items-center space-x-4 text-sm text-navy-500 dark:text-silver-500 mb-3">
                                <span className="flex items-center">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                                  {item.format}
                                </span>
                                <span>{item.size}</span>
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                                  <span>{item.rating}</span>
                                </div>
                                <div className="flex items-center">
                                  <Download className="w-4 h-4 mr-1" />
                                  <span>{item.downloads.toLocaleString()}</span>
                                </div>
                              </div>
                            </div>
                            
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                href={item.url}
                                variant="outline"
                                size="sm"
                                className="flex items-center group-hover/item:bg-saffron-500 group-hover/item:text-white group-hover/item:border-saffron-500"
                              >
                                {item.format === 'MP3' || item.format === 'MP4' ? (
                                  <>
                                    <Play size={14} className="mr-1" />
                                    Play
                                  </>
                                ) : (
                                  <>
                                    <Eye size={14} className="mr-1" />
                                    View
                                  </>
                                )}
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="mt-6 pt-6 border-t border-gray-200 dark:border-silver-700"
                    >
                      <Button
                        href={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full"
                      >
                        Explore All {resource.title}
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Featured Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-saffron-50 to-orange-50 dark:from-saffron-900/20 dark:to-orange-900/20 rounded-2xl p-8 text-center border border-saffron-200 dark:border-saffron-800"
          >
            <h3 className="text-2xl font-heading font-bold text-navy-900 dark:text-white mb-4">
              Need Something Specific?
            </h3>
            <p className="text-navy-600 dark:text-silver-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team of scholars and researchers 
              can help you access specific texts, commentaries, or teachings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact">
                Request Resources
              </Button>
              <Button href="/scholars" variant="outline">
                Connect with Scholars
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default LibraryPage;