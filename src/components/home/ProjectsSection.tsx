import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MapPin, Building, Brain, Smartphone, Heart, CheckCircle, Target, DollarSign, Calendar, Users, Clock, Award, Home, Zap } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import Container from '../shared/Container';
import Button from '../shared/Button';
import { useTheme } from '../../contexts/ThemeContext';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className="py-20 bg-gray-50 dark:bg-silver-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute inset-0 bg-repeat opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF9933' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <SectionTitle
            title={t('home.projects.title') || 'Our Projects'}
            className="mb-4 md:mb-0"
          />
          <Button 
            href="/projects" 
            variant="outline"
            className="self-start md:self-auto"
          >
            {t('home.projects.viewAll') || 'View All Projects'} <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>

        <div className="space-y-8">
          {/* Project 1: Land Acquisition (Enhanced with more details) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-saffron-500 to-orange-500 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="text-white">
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mr-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      🏗️ Current Priority Project
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">
                  Land Acquisition - El Sobrante Center
                </h3>
                <p className="text-xl text-white/90 mb-6">
                  Our first major initiative is to acquire 33 acres of prime land in El Sobrante, California. 
                  This land will serve as the foundation for our comprehensive Sanatan International Center, 
                  creating a sacred space where ancient wisdom meets modern innovation.
                </p>
                
                {/* Project Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <MapPin className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white/70 text-xs">Location</p>
                    <p className="font-semibold text-sm">El Sobrante, CA</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <Calendar className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white/70 text-xs">Target Date</p>
                    <p className="font-semibold text-sm">January 2026</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <DollarSign className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white/70 text-xs">Funding Goal</p>
                    <p className="font-semibold text-sm">$2.5M</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <Users className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white/70 text-xs">Progress</p>
                    <p className="font-semibold text-sm">0% Complete</p>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">Environmental impact assessment completed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">Zoning approvals in progress</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-saffron-200 flex-shrink-0" />
                    <span className="text-white/90">Sustainable development with eco-friendly design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-saffron-200 flex-shrink-0" />
                    <span className="text-white/90">Community-focused facilities for all ages</span>
                  </div>
                </div>

                {/* Funding Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/80">Funding Progress</span>
                    <span className="text-white font-semibold">$0 raised of $2.5M</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "0%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    href="/projects/land-acquisition-el-sobrante" 
                    variant="outline" 
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 flex-1"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                  <Button 
                    href="/donate?project=land-acquisition" 
                    className="bg-white text-saffron-600 hover:bg-white/90 font-semibold flex-1"
                  >
                    <Heart size={16} className="mr-2" />
                    Support This Project
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/assets/images/Land-for-sale.jpg"
                  alt="El Sobrante Land for Sale"
                  className="w-full h-64 lg:h-full object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
                  0% Complete
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-navy-800 px-3 py-2 rounded-lg text-sm font-medium">
                  <span className="text-saffron-600 font-bold">$0</span> raised so far
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2: Construction (Enhanced with theme-based temple images) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="order-2 lg:order-1 relative">
                {/* Theme-based temple image with smooth transition */}
                <div className="relative w-full h-64 lg:h-full rounded-xl overflow-hidden shadow-lg">
                  <motion.img 
                    src="/assets/images/Sanataninternational_temple.jpg"
                    alt="Sanatan International Center - Light Theme"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      theme === 'light' ? 'opacity-100' : 'opacity-0'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: theme === 'light' ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  />
                  <motion.img 
                    src="/assets/images/Sanataninternational_center_temple_darktheme.jpg"
                    alt="Sanatan International Center - Dark Theme"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      theme === 'dark' ? 'opacity-100' : 'opacity-0'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: theme === 'dark' ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg">
                    Phase 2: 2026-2027
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-navy-800 px-3 py-2 rounded-lg text-sm font-medium">
                    <span className="text-blue-600 font-bold">$0</span> raised of $3.2M
                  </div>
                  
                  {/* Theme indicator */}
                  <motion.div 
                    className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    {theme === 'light' ? '☀️ Light' : '🌙 Dark'} Theme
                  </motion.div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 text-white">
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mr-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      🏛️ Phase 2 Project
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">
                  Sanatan International Center Construction
                </h3>
                <p className="text-xl text-white/90 mb-6">
                  Building our flagship center with skill development, yoga, and Ayurveda facilities. 
                  We offer accommodation and support to skilled volunteers who teach a few hours in our centers.
                </p>

                {/* Project Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <Building className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white/70 text-xs">Type</p>
                    <p className="font-semibold text-sm">Multi-purpose</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <Calendar className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white/70 text-xs">Timeline</p>
                    <p className="font-semibold text-sm">2026-2027</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <DollarSign className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white/70 text-xs">Budget</p>
                    <p className="font-semibold text-sm">$3.2M</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <Users className="w-5 h-5 text-white mx-auto mb-1" />
                    <p className="text-white/70 text-xs">Progress</p>
                    <p className="font-semibold text-sm">0% Complete</p>
                  </div>
                </div>

                {/* Facility Features */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <span className="text-white/90">Skill Development Center with certified training programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <span className="text-white/90">Yoga Center for traditional practices and teacher training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <span className="text-white/90">Ayurveda Center for holistic wellness and healing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <span className="text-white/90">Volunteer accommodation and support facilities</span>
                  </div>
                </div>

                {/* Volunteer Opportunities Highlight */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <Users className="w-5 h-5 text-blue-300 mr-2" />
                    Volunteer Opportunities
                  </h4>
                  <p className="text-white/80 text-sm mb-4">
                    We offer accommodation and support to skilled volunteers who can teach a few hours 
                    in our skill development, yoga, or Ayurveda centers. Join our mission while sharing your expertise!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="font-medium text-white">Teaching Roles</p>
                      <p className="text-white/70">2-4 hours/day</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="font-medium text-white">Accommodation</p>
                      <p className="text-white/70">Provided on-site</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="font-medium text-white">Support</p>
                      <p className="text-white/70">Meals & utilities</p>
                    </div>
                  </div>
                </div>

                {/* Funding Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/80">Funding Progress</span>
                    <span className="text-white font-semibold">$0 raised of $3.2M</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "0%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    href="/projects/sanatan-center-construction" 
                    variant="outline" 
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 flex-1"
                  >
                    View Center Plans <ArrowRight size={16} className="ml-2" />
                  </Button>
                  <Button 
                    href="/donate?project=center-construction" 
                    className="bg-white text-blue-600 hover:bg-white/90 font-semibold flex-1"
                  >
                    <Heart size={16} className="mr-2" />
                    Support This Project
                  </Button>
                  <Button 
                    href="/volunteer" 
                    variant="outline" 
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 flex-1"
                  >
                    <Users size={16} className="mr-2" />
                    Volunteer with Us
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects 3-5: Three Parallel Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Grantham.ai */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-silver-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="/assets/images/Sanatan_R&D01.png"
                  alt="Grantham.ai"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full mr-3">
                    <Brain className="w-6 h-6 text-purple-500" />
                  </div>
                  <span className="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 px-2 py-1 rounded-full text-xs font-medium">
                    Future Project
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-navy-800 dark:text-white">
                  Grantham.ai
                </h3>
                <p className="text-navy-600 dark:text-silver-300 mb-4 text-sm">
                  AI-powered Sanatan scripture library making ancient texts searchable and accessible to global seekers.
                </p>
                <div className="flex gap-2">
                  <Button href="/projects/grantham-ai" variant="outline" size="sm" className="flex-1">
                    Learn More
                  </Button>
                  <Button href="/donate?project=grantham-ai" size="sm" className="flex-1">
                    Support
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Ayurveda AI App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-silver-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="/assets/images/Aayurvedaai.jpg"
                  alt="AyurVeda AI"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                    <Smartphone className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 px-2 py-1 rounded-full text-xs font-medium">
                    Future Project
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-navy-800 dark:text-white">
                  AyurVeda AI
                </h3>
                <p className="text-navy-600 dark:text-silver-300 mb-4 text-sm">
                  AI-powered app for personalized Ayurvedic treatment recommendations and holistic wellness guidance.
                </p>
                <div className="flex gap-2">
                  <Button href="/projects/ayurveda-ai" variant="outline" size="sm" className="flex-1">
                    Learn More
                  </Button>
                  <Button href="/donate?project=ayurveda-ai" size="sm" className="flex-1">
                    Support
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Yoga.live */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-silver-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="/assets/images/Sanatan-Yogalive.jpg"
                  alt="Yoga.live"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full mr-3">
                    <Heart className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 px-2 py-1 rounded-full text-xs font-medium">
                    Future Project
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-navy-800 dark:text-white">
                  Yoga.live
                </h3>
                <p className="text-navy-600 dark:text-silver-300 mb-4 text-sm">
                  Live streaming platform for authentic yoga practices, meditation sessions, and spiritual teachings.
                </p>
                <div className="flex gap-2">
                  <Button href="/projects/yoga-live" variant="outline" size="sm" className="flex-1">
                    Learn More
                  </Button>
                  <Button href="/donate?project=yoga-live" size="sm" className="flex-1">
                    Support
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;