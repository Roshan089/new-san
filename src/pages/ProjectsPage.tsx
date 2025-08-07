import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Clock, Calendar, Target, Users, BookOpen, Heart, Globe, Zap, MapPin, Building, Brain, Smartphone, Star, Award, ExternalLink, TrendingUp, DollarSign } from 'lucide-react';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';
import { useTheme } from '../contexts/ThemeContext';

const projects = [
  {
    id: "1",
    title: "Land Acquisition - El Sobrante Center",
    slug: "land-acquisition-el-sobrante",
    description: "Acquiring 33 acres of prime land in El Sobrante, California for our flagship spiritual and cultural center.",
    status: "active",
    category: "infrastructure",
    progress: 0,
    impact: "Foundation for all future projects",
    timeline: "2025-2026",
    funding: "$2.5M",
    raised: "$0",
    icon: MapPin,
    image: "/assets/images/Land-for-sale.jpg",
    highlights: [
      "33 acres of prime land in California",
      "Environmental assessments completed", 
      "Zoning approvals in progress",
      "Sustainable development planning"
    ],
    priority: true,
    liveData: {
      fundingGoal: 2500000,
      raisedAmount: 0,
      supporters: 0,
      daysRemaining: 365,
      lastUpdate: "2024-12-15"
    }
  },
  {
    id: "2", 
    title: "Sanatan International Center Construction",
    slug: "sanatan-center-construction",
    description: "Building our flagship center with skill development, yoga, and Ayurveda facilities. We offer accommodation to skilled volunteers.",
    status: "active",
    category: "infrastructure",
    progress: 0,
    impact: "Multi-purpose spiritual facility",
    timeline: "2026-2027",
    funding: "$3.2M",
    raised: "$0",
    icon: Building,
    image: "/assets/images/Sanataninternational_temple.jpg", // Default to light theme
    darkImage: "/assets/images/Sanataninternational_center_temple_darktheme.jpg",
    highlights: [
      "Skill Development Center with certified training",
      "Yoga Center for traditional practices",
      "Ayurveda Center for holistic wellness",
      "Volunteer accommodation and support"
    ],
    priority: true,
    liveData: {
      fundingGoal: 3200000,
      raisedAmount: 0,
      supporters: 0,
      daysRemaining: 730,
      lastUpdate: "2024-12-10"
    }
  },
  {
    id: "3",
    title: "Grantham.ai - Digital Scripture Library",
    slug: "grantham-ai",
    description: "AI-powered platform for accessing and understanding ancient Vedic texts with advanced search and translation capabilities.",
    status: "active",
    category: "technology",
    progress: 0,
    impact: "10,000+ texts digitized",
    timeline: "2024-2025",
    funding: "$500K",
    raised: "$0",
    icon: Brain,
    image: "/assets/images/Sanatan_R&D01.png",
    highlights: [
      "AI-powered Sanskrit text recognition",
      "Multi-language translations",
      "Advanced search capabilities",
      "Interactive learning modules"
    ],
    liveData: {
      fundingGoal: 500000,
      raisedAmount: 0,
      supporters: 0,
      daysRemaining: 180,
      lastUpdate: "2024-12-12"
    }
  },
  {
    id: "4",
    title: "AyurVeda AI - Personalized Wellness App",
    slug: "ayurveda-ai",
    description: "AI-powered mobile application providing personalized Ayurvedic treatment recommendations and holistic wellness guidance.",
    status: "upcoming",
    category: "technology",
    progress: 0,
    impact: "Planning phase",
    timeline: "2025-2026",
    funding: "$300K",
    raised: "$0",
    icon: Smartphone,
    image: "/assets/images/Aayurvedaai.jpg",
    highlights: [
      "Personalized dosha analysis",
      "AI-powered treatment recommendations",
      "Diet and lifestyle guidance",
      "Integration with wellness tracking"
    ],
    liveData: {
      fundingGoal: 300000,
      raisedAmount: 0,
      supporters: 0,
      daysRemaining: 365,
      lastUpdate: "2024-12-01"
    }
  },
  {
    id: "5",
    title: "Yoga.live - Streaming Platform",
    slug: "yoga-live",
    description: "Live streaming platform for authentic yoga practices, meditation sessions, and spiritual teachings from traditional masters.",
    status: "upcoming",
    category: "technology", 
    progress: 0,
    impact: "Global reach planned",
    timeline: "2025-2026",
    funding: "$400K",
    raised: "$0",
    icon: Heart,
    image: "/assets/images/Sanatan-Yogalive.jpg",
    highlights: [
      "Live streaming yoga sessions",
      "Traditional meditation practices",
      "Interactive spiritual teachings",
      "Global community features"
    ],
    liveData: {
      fundingGoal: 400000,
      raisedAmount: 0,
      supporters: 0,
      daysRemaining: 400,
      lastUpdate: "2024-11-28"
    }
  },
  {
    id: "6",
    title: "Global Bhagavad Gita Educational Program",
    slug: "gita-education",
    description: "Comprehensive educational initiative to teach Bhagavad Gita wisdom to seekers worldwide through modern pedagogical methods.",
    status: "active",
    category: "education",
    progress: 0,
    impact: "50,000+ students reached",
    timeline: "2024-2025",
    funding: "$180K",
    raised: "$0",
    icon: BookOpen,
    image: "/assets/images/Vedic-education.jpg",
    highlights: [
      "Interactive online courses",
      "Traditional commentary integration",
      "Multi-language support",
      "Certified instructor program"
    ],
    liveData: {
      fundingGoal: 180000,
      raisedAmount: 0,
      supporters: 0,
      daysRemaining: 120,
      lastUpdate: "2024-12-14"
    }
  },
  {
    id: "7",
    title: "Support for Traditional Vedic Scholars",
    slug: "scholar-support",
    description: "Providing comprehensive resources and support to traditional scholars preserving authentic Vedic knowledge and lineages.",
    status: "active", 
    category: "community",
    progress: 0,
    impact: "100+ scholars supported",
    timeline: "Ongoing",
    funding: "$320K",
    raised: "$0",
    icon: Users,
    image: "/assets/images/Vedic-scholar.jpg", // Light theme hero image
    darkImage: "/assets/images/Vedic-scholar.jpg", // Dark theme hero image
    highlights: [
      "Monthly stipend program",
      "Research facility access",
      "Publication support",
      "Intergenerational knowledge transfer"
    ],
    liveData: {
      fundingGoal: 320000,
      raisedAmount: 0,
      supporters: 0,
      daysRemaining: 0, // Ongoing
      lastUpdate: "2024-12-16"
    }
  },
  {
    id: "8",
    title: "Global Community Outreach Program",
    slug: "community-outreach",
    description: "Bringing Dharma resources and support to underserved communities around the world through mobile initiatives.",
    status: "active",
    category: "outreach",
    progress: 0,
    impact: "15 communities served",
    timeline: "2024-2027",
    funding: "$150K",
    raised: "$0",
    icon: Globe,
    image: "/assets/images/Global-Community.jpg",
    highlights: [
      "Mobile teaching units",
      "Local language materials",
      "Community leader training",
      "Sustainable resource distribution"
    ],
    liveData: {
      fundingGoal: 150000,
      raisedAmount: 0,
      supporters: 0,
      daysRemaining: 1095,
      lastUpdate: "2024-12-13"
    }
  }
];

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const Icon = project.icon;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4" />;
      case 'upcoming':
        return <Clock className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  // Determine which image to use based on theme
  const getProjectImage = () => {
    if (project.darkImage && theme === 'dark') {
      return project.darkImage;
    }
    return project.image;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`bg-white dark:bg-black rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border ${
        project.priority 
          ? 'border-saffron-300 dark:border-saffron-600 ring-2 ring-saffron-200 dark:ring-saffron-800' 
          : 'border-gray-200 dark:border-silver-700'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        {/* Theme-based image with smooth transition for projects with darkImage */}
        {project.darkImage ? (
          <div className="relative w-full h-full">
            <motion.img
              src={project.image}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                theme === 'light' ? 'opacity-100' : 'opacity-0'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: theme === 'light' ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src={project.darkImage}
              alt={`${project.title} - Dark Theme`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                theme === 'dark' ? 'opacity-100' : 'opacity-0'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: theme === 'dark' ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        ) : (
          <img
            src={getProjectImage()}
            alt={project.title}
            className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Priority Badge */}
        {project.priority && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-saffron-500 text-white shadow-lg">
              <Star className="w-4 h-4 mr-1" />
              Priority Project
            </span>
          </div>
        )}
        
        <div className="absolute top-4 right-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
            {getStatusIcon(project.status)}
            <span className="ml-1 capitalize">{project.status}</span>
          </span>
        </div>
        
        {/* Theme indicator for projects with theme-based images */}
        {project.darkImage && (
          <motion.div 
            className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {theme === 'light' ? '☀️ Light' : '🌙 Dark'} Theme
          </motion.div>
        )}
        
        <div className="absolute bottom-4 left-4">
          <div className={`${project.priority ? 'bg-saffron-500/20' : 'bg-white/20'} backdrop-blur-sm rounded-full p-2`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-heading font-bold mb-3 ${
          project.priority 
            ? 'text-saffron-600 dark:text-saffron-400' 
            : 'text-navy-800 dark:text-white'
        }`}>
          {project.title}
        </h3>
        <p className="text-navy-600 dark:text-silver-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Live Data Section */}
        {project.liveData && (
          <div className="mb-4 p-3 bg-gray-50 dark:bg-silver-800 rounded-lg">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-navy-500 dark:text-silver-400">Raised:</span>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  {formatCurrency(project.liveData.raisedAmount)}
                </p>
              </div>
              <div>
                <span className="text-navy-500 dark:text-silver-400">Supporters:</span>
                <p className="font-semibold text-navy-800 dark:text-white">
                  {project.liveData.supporters.toLocaleString()}
                </p>
              </div>
              <div>
                <span className="text-navy-500 dark:text-silver-400">Goal:</span>
                <p className="font-semibold text-navy-800 dark:text-white">
                  {formatCurrency(project.liveData.fundingGoal)}
                </p>
              </div>
              <div>
                <span className="text-navy-500 dark:text-silver-400">Updated:</span>
                <p className="font-semibold text-navy-800 dark:text-white">
                  {formatDate(project.liveData.lastUpdate)}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Project Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-navy-500 dark:text-silver-400">Impact:</span>
            <p className="font-semibold text-navy-800 dark:text-white">{project.impact}</p>
          </div>
          <div>
            <span className="text-navy-500 dark:text-silver-400">Timeline:</span>
            <p className="font-semibold text-navy-800 dark:text-white">{project.timeline}</p>
          </div>
        </div>

        {/* Funding Progress */}
        {project.status === 'active' && project.liveData && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-navy-600 dark:text-silver-300">Progress</span>
              <span className="text-navy-600 dark:text-silver-300">{project.progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-silver-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${
                  project.priority 
                    ? 'bg-gradient-to-r from-saffron-500 to-orange-500' 
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                }`}
                initial={{ width: 0 }}
                whileInView={{ width: `${project.progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        )}

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-navy-800 dark:text-white mb-2">Key Highlights:</h4>
          <ul className="text-xs text-navy-600 dark:text-silver-400 space-y-1">
            {project.highlights.slice(0, 2).map((highlight: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className={`w-1 h-1 rounded-full mr-2 ${
                  project.priority ? 'bg-saffron-500' : 'bg-blue-500'
                }`}></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex gap-2">
          <Button
            href={`/projects/${project.slug}`}
            variant="outline"
            size="sm"
            className="flex-1 group"
          >
            <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            View Details
          </Button>
          <Button
            href={`/donate?project=${project.slug}`}
            size="sm"
            className={`flex-1 ${
              project.priority 
                ? 'bg-saffron-500 hover:bg-saffron-600' 
                : ''
            }`}
          >
            <Heart className="w-4 h-4 mr-2" />
            Support
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('projects.title') || 'Projects - Sanatan International';
  }, [t]);

  const priorityProjects = projects.filter(p => p.priority);
  const activeProjects = projects.filter(p => p.status === 'active' && !p.priority);
  const upcomingProjects = projects.filter(p => p.status === 'upcoming');

  // Calculate total stats
  const totalFunding = projects.reduce((sum, p) => sum + (p.liveData?.fundingGoal || 0), 0);
  const totalRaised = projects.reduce((sum, p) => sum + (p.liveData?.raisedAmount || 0), 0);
  const totalSupporters = projects.reduce((sum, p) => sum + (p.liveData?.supporters || 0), 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="pt-24">
      <Helmet>
        <title>{t('projects.title') || 'Projects - Sanatan International'}</title>
        <meta name="description" content={t('projects.description') || 'Support Sanatan International\'s Dharma-based projects — from scripture preservation to global education and community development.'} />
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
              {t('projects.title') || 'Dharma Projects'}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-saffron-400 mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Preserving Ancient Wisdom Through Modern Innovation
            </motion.p>
            <motion.p 
              className="text-lg text-white/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('projects.description') || 'Sanatan International runs various Dharma projects aimed at preserving and promoting Vedic wisdom worldwide.'}
            </motion.p>

            {/* Live Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="w-6 h-6 text-saffron-400 mr-2" />
                  <span className="text-2xl font-bold text-white">{formatCurrency(totalRaised)}</span>
                </div>
                <p className="text-white/80 text-sm">Total Raised</p>
                <p className="text-white/60 text-xs">Goal: {formatCurrency(totalFunding)}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-saffron-400 mr-2" />
                  <span className="text-2xl font-bold text-white">{totalSupporters.toLocaleString()}</span>
                </div>
                <p className="text-white/80 text-sm">Total Supporters</p>
                <p className="text-white/60 text-xs">Across all projects</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-saffron-400 mr-2" />
                  <span className="text-2xl font-bold text-white">{projects.length}</span>
                </div>
                <p className="text-white/80 text-sm">Active Projects</p>
                <p className="text-white/60 text-xs">Making impact globally</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button href="/donate" size="lg" className="mr-4">
                Support Our Projects
              </Button>
              <Button href="#priority-projects" variant="outline" size="lg">
                View Priority Projects
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 bg-white dark:bg-black">
        <Container>
          {/* Priority Projects */}
          <div id="priority-projects" className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-navy-900 dark:text-white">
                ⭐ Priority Projects
              </h2>
              <p className="text-lg text-navy-600 dark:text-silver-300 max-w-3xl mx-auto">
                Our flagship initiatives that form the foundation for all future projects and community development
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {priorityProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Active Projects */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-navy-900 dark:text-white">
                ✅ {t('projects.active') || 'Active Projects'}
              </h2>
              <p className="text-lg text-navy-600 dark:text-silver-300 max-w-3xl mx-auto">
                Currently running initiatives making a tangible difference in preserving and promoting Dharma worldwide
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Upcoming Projects */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-navy-900 dark:text-white">
                🔜 {t('projects.upcoming') || 'Upcoming Projects'}
              </h2>
              <p className="text-lg text-navy-600 dark:text-silver-300 max-w-3xl mx-auto">
                Future initiatives planned to expand our impact and reach even more communities globally
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-saffron-50 to-orange-50 dark:from-saffron-900/20 dark:to-orange-900/20 rounded-2xl p-8 text-center border border-saffron-200 dark:border-saffron-800"
          >
            <Award className="w-16 h-16 text-saffron-500 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 dark:text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-navy-600 dark:text-silver-300 mb-6 max-w-2xl mx-auto">
              Your support enables us to preserve ancient wisdom and make it accessible to seekers worldwide. 
              Every contribution, no matter the size, makes a meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/donate" size="lg">
                Support Projects
              </Button>
              <Button href="/devotees" variant="outline" size="lg">
                Join Community
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default ProjectsPage;