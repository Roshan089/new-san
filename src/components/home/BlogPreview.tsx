import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import Container from '../shared/Container';
import Button from '../shared/Button';
import { blogPosts } from '../../pages/BlogsPage';

const BlogPreview: React.FC = () => {
  // Get the 3 most recent blog posts
  const recentBlogs = [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <section className="py-20 bg-gray-50 dark:bg-silver-900">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-white"
          >
            Recent Insights
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button href="/blog" variant="outline">
              View All Posts <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-silver-700"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-saffron-50 dark:bg-saffron-900/20 text-saffron-600 dark:text-saffron-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-navy-800 dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-navy-600 dark:text-silver-300 mb-4 line-clamp-2">
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
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;