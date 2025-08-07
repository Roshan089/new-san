import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/home/HeroSection';
import MissionSection from '../components/home/MissionSection';
import ProjectsSection from '../components/home/ProjectsSection';
import BlogPreview from '../components/home/BlogPreview';
import CallToAction from '../components/shared/CallToAction';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('home.title') || 'Sanatan International - Timeless Vedic Wisdom for Modern Seekers';
  }, [t]);

  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      <HeroSection />
      <MissionSection />
      <ProjectsSection />
      <BlogPreview />
      <CallToAction />
    </div>
  );
};

export default HomePage;