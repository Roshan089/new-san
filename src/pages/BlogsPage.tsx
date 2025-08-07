import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { Calendar, Clock, Tag, BookOpen, Users, Sparkles } from 'lucide-react';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';

export const blogPosts = [
  {
    id: '1',
    title: 'Understanding Dharma in Daily Life',
    slug: 'understanding-dharma-daily-life',
    excerpt: 'Exploring how the eternal principles of Dharma can guide our everyday decisions and actions in the modern world.',
    content: `# Understanding Dharma in Daily Life

Dharma, often translated as righteousness or duty, is one of the most fundamental concepts in Sanatan tradition. But how do we apply these eternal principles in our modern daily lives?

## What is Dharma?

Dharma encompasses our duties, moral obligations, and the righteous path that leads to harmony both within ourselves and in society. It is not a rigid set of rules but a dynamic principle that adapts to circumstances while maintaining its essential truth.

## Dharma in Modern Context

In today's world, Dharma manifests through:

1. **Professional Ethics**: Conducting business with honesty and integrity
2. **Family Relationships**: Fulfilling our duties as parents, children, and spouses
3. **Social Responsibility**: Contributing positively to our communities
4. **Environmental Stewardship**: Caring for the Earth as our sacred duty

## Practical Applications

- Start each day with reflection on your duties and responsibilities
- Make decisions based on what serves the greater good
- Practice truthfulness in all interactions
- Show compassion to all living beings

The beauty of Dharma lies in its universality - these principles guide us toward a life of meaning, purpose, and harmony.`,
    author: 'Acharya Ramesh Sharma',
    publishedAt: '2024-06-01',
    readTime: '6 min read',
    image: '/assets/images/Blog-Dharmainlife.jpg',
    tags: ['Dharma', 'Daily Practice', 'Modern Life']
  },
  {
    id: '2',
    title: 'The Wisdom of the Bhagavad Gita for Modern Seekers',
    slug: 'bhagavad-gita-modern-seekers',
    excerpt: 'Timeless teachings from the Bhagavad Gita that offer guidance for contemporary challenges and spiritual growth.',
    content: `# The Wisdom of the Bhagavad Gita for Modern Seekers

The Bhagavad Gita, spoken by Lord Krishna to Arjuna on the battlefield of Kurukshetra, contains profound wisdom that transcends time and remains relevant for modern seekers.

## Universal Teachings

The Gita addresses fundamental human concerns:
- Purpose and meaning in life
- Dealing with difficult decisions
- Managing stress and anxiety
- Finding inner peace

## Key Principles for Today

1. **Karma Yoga**: Acting without attachment to results
2. **Dharma**: Following one's righteous duty
3. **Surrender**: Trusting in divine will
4. **Equanimity**: Maintaining balance in success and failure

These teachings provide a framework for navigating modern challenges while maintaining spiritual growth.`,
    author: 'Dr. Priya Nair',
    publishedAt: '2024-06-04',
    readTime: '8 min read',
    image: '/assets/images/Blog_Bhagwad.jpg',
    tags: ['Bhagavad Gita', 'Spirituality', 'Wisdom']
  },
  {
    id: '3',
    title: 'Vedic Festivals: Connecting with Cosmic Rhythms',
    slug: 'vedic-festivals-cosmic-rhythms',
    excerpt: 'Understanding the deeper significance of Vedic festivals and how they align us with natural and cosmic cycles.',
    content: `# Vedic Festivals: Connecting with Cosmic Rhythms

Vedic festivals are not mere celebrations but profound spiritual practices that align us with cosmic rhythms and natural cycles.

## The Science Behind Festivals

Each festival is timed according to:
- Lunar cycles
- Solar transitions
- Seasonal changes
- Planetary alignments

## Major Festivals and Their Significance

- **Diwali**: Victory of light over darkness
- **Holi**: Celebration of spring and renewal
- **Navaratri**: Honoring the divine feminine
- **Makar Sankranti**: Solar transition and new beginnings

## Modern Relevance

These festivals help us:
- Reconnect with nature
- Strengthen community bonds
- Practice gratitude
- Cultivate spiritual awareness

By understanding their deeper meaning, we can participate more meaningfully in these sacred traditions.`,
    author: 'Pandit Suresh Kumar',
    publishedAt: '2024-06-07',
    readTime: '7 min read',
    image: '/assets/images/Blog-Vedicfestival.jpg',
    tags: ['Festivals', 'Traditions', 'Spirituality']
  },
  {
    id: '4',
    title: 'The Role of Meditation in Vedic Tradition',
    slug: 'meditation-vedic-tradition',
    excerpt: 'Exploring the ancient practice of meditation as taught in Vedic texts and its benefits for modern practitioners.',
    content: `# The Role of Meditation in Vedic Tradition

Meditation, or Dhyana, has been a cornerstone of Vedic practice for thousands of years, offering a direct path to self-realization and inner peace.

## Types of Vedic Meditation

1. **Trataka**: Candle gazing meditation
2. **Mantra Japa**: Repetition of sacred sounds
3. **Pranayama**: Breath-based meditation
4. **Dhyana**: Pure awareness meditation

## Benefits Validated by Science

Modern research confirms what ancient sages knew:
- Reduced stress and anxiety
- Improved focus and concentration
- Enhanced emotional regulation
- Better sleep quality
- Increased self-awareness

## Starting Your Practice

Begin with just 10 minutes daily, focusing on breath awareness or simple mantra repetition. Consistency is more important than duration.`,
    author: 'Swami Ananda Bharati',
    publishedAt: '2024-06-10',
    readTime: '5 min read',
    image: '/assets/images/Blog-Meditationbenefits.jpg',
    tags: ['Meditation', 'Practice', 'Wellness']
  }
];

const BlogsPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('blog.title') || 'Blog - Sanatan International';
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

  return (
    <div className="pt-24 bg-white dark:bg-black transition-colors duration-300">
      <Helmet>
        <title>{t('blog.title') || 'Blog - Sanatan International'}</title>
        <meta name="description" content={t('blog.description') || 'Read the Sanatan International Blog — articles on Vedic wisdom, Dharma practice, festivals, saints, and global community updates.'} />
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
              Sanatan Wisdom Blog
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-saffron-400 mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A Space for Reflection, Learning, and Community
            </motion.p>
            <motion.p 
              className="text-lg text-white/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Here you'll find teachings from scriptures and Acharyas, Dharma in modern life, 
              rituals, festivals, profiles of saints and sages, and news from our global community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button href="/newsletter" size="lg">
                Subscribe for Updates
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Submit Article
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Featured Categories */}
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
              Explore Our Topics
            </h2>
            <p className="text-lg text-navy-600 dark:text-silver-300">
              Discover wisdom across various aspects of Sanatan Dharma
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: BookOpen, title: "Sacred Texts", count: "25+ Articles", color: "from-blue-500 to-indigo-600" },
              { icon: Users, title: "Saints & Sages", count: "15+ Profiles", color: "from-emerald-500 to-teal-600" },
              { icon: Sparkles, title: "Festivals", count: "20+ Guides", color: "from-purple-500 to-pink-600" },
              { icon: Calendar, title: "Daily Practice", count: "30+ Tips", color: "from-orange-500 to-red-600" }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-black rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-silver-700"
              >
                <div className={`bg-gradient-to-r ${category.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy-800 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-navy-600 dark:text-silver-400">
                  {category.count}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Blog Posts */}
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
              Latest Articles
            </h2>
            <p className="text-lg text-navy-600 dark:text-silver-300">
              Fresh insights and timeless wisdom for modern seekers
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((blog, index) => (
              <motion.article
                key={blog.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-silver-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-silver-700"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-navy-800 dark:text-white line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-navy-600 dark:text-silver-300 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-navy-500 dark:text-silver-400 mb-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {format(new Date(blog.publishedAt), 'MMM d, yyyy')}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                  <Button 
                    href={`/blog/${blog.slug}`}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Read More
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/blog/all" size="lg">
              View All Articles
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-saffron-50 to-orange-50 dark:from-saffron-900/20 dark:to-orange-900/20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 dark:text-white mb-4">
              Stay Connected with Dharma
            </h3>
            <p className="text-navy-600 dark:text-silver-300 mb-8">
              Subscribe to receive weekly insights, festival updates, and spiritual guidance directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/newsletter" size="lg">
                Subscribe Now
              </Button>
              <Button href="/rss" variant="outline" size="lg">
                RSS Feed
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default BlogsPage;