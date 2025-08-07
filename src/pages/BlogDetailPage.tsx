import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';
import { blogPosts } from './BlogsPage';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = blogPosts.findIndex(post => post.slug === slug);
    if (index === -1) {
      navigate('/blog');
    } else {
      setCurrentIndex(index);
    }
  }, [slug, navigate]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        navigateBlog('prev');
      } else if (e.key === 'ArrowRight') {
        navigateBlog('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex]);

  const currentBlog = blogPosts[currentIndex];

  const navigateBlog = (direction: 'prev' | 'next') => {
    let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    
    if (newIndex < 0) {
      newIndex = blogPosts.length - 1;
    } else if (newIndex >= blogPosts.length) {
      newIndex = 0;
    }

    navigate(`/blog/${blogPosts[newIndex].slug}`);
    setCurrentIndex(newIndex);
  };

  if (!currentBlog) {
    return null;
  }

  return (
    <div className="pt-24">
      <Helmet>
        <title>{`${currentBlog.title} - Sanatan International`}</title>
        <meta name="description" content={currentBlog.excerpt} />
      </Helmet>

      <article>
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={currentBlog.image}
            alt={currentBlog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Container>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentBlog.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-saffron-500/20 text-white text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                  {currentBlog.title}
                </h1>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    {currentBlog.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {format(new Date(currentBlog.publishedAt), 'MMMM d, yyyy')}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {currentBlog.readTime}
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="max-w-4xl mx-auto py-12">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown>{currentBlog.content}</ReactMarkdown>
            </div>

            <div className="mt-12 flex justify-between items-center">
              <Button
                onClick={() => navigateBlog('prev')}
                variant="outline"
                className="flex items-center"
              >
                <ArrowLeft size={16} className="mr-2" />
                Previous Article
              </Button>
              <Button
                onClick={() => navigateBlog('next')}
                variant="outline"
                className="flex items-center"
              >
                Next Article
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </article>
    </div>
  );
};

export default BlogDetailPage;