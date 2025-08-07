import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Users, 
  DollarSign, 
  Clock, 
  MapPin, 
  Target, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  Heart,
  Share2,
  Download,
  Mail,
  Phone,
  MessageSquare,
  Star,
  Award,
  Building,
  Zap,
  Globe
} from 'lucide-react';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';

// Mock project data - in real app this would come from Supabase
const projectsData = {
  'land-acquisition-el-sobrante': {
    id: '1',
    title: 'Land Acquisition - El Sobrante Center',
    slug: 'land-acquisition-el-sobrante',
    description: 'Acquiring 33 acres of prime land in El Sobrante, California for our flagship spiritual and cultural center.',
    status: 'active',
    priority: true,
    progress: 0,
    fundingGoal: 2500000,
    raisedAmount: 0,
    startDate: '2025-01-01',
    targetDate: '2026-01-01',
    location: 'El Sobrante, California',
    category: 'Infrastructure',
    image: 'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg',
    gallery: [
      'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg',
      'https://images.pexels.com/photos/6044237/pexels-photo-6044237.jpeg',
      'https://images.pexels.com/photos/6044243/pexels-photo-6044243.jpeg'
    ],
    content: `# Land Acquisition - El Sobrante Center

Our first major initiative is to acquire 33 acres of prime land in El Sobrante, California. This land will serve as the foundation for our comprehensive Sanatan International Center, creating a sacred space where ancient wisdom meets modern innovation.

## Project Overview

The El Sobrante Center will be our flagship facility, designed to serve as a beacon of Sanatan Dharma teachings and community service. This carefully selected location offers the perfect balance of accessibility and tranquility.

## Key Features

### 🏛️ Main Temple Complex
- Traditional architecture with modern amenities
- Capacity for 500+ devotees
- Sacred spaces for various ceremonies

### 📚 Research & Library Center
- Digital archive of ancient texts
- Research facilities for scholars
- Interactive learning spaces

### 🧘 Meditation & Wellness Center
- Multiple meditation halls
- Yoga studios with natural lighting
- Ayurvedic consultation rooms

### 🌱 Sustainable Development
- Solar power systems
- Rainwater harvesting
- Organic gardens and food production

## Environmental Impact

We are committed to sustainable development practices that honor both the land and our spiritual values. The center will be designed to achieve LEED certification and serve as a model for eco-conscious spiritual facilities.

## Community Benefits

- Educational programs for all ages
- Cultural events and festivals
- Community kitchen serving organic meals
- Interfaith dialogue spaces
- Volunteer training programs`,
    timeline: [
      {
        id: '1',
        title: 'Land Survey & Environmental Assessment',
        description: 'Complete geological and environmental surveys of the selected property',
        targetDate: '2025-03-01',
        completed: true,
        status: 'completed'
      },
      {
        id: '2',
        title: 'Zoning Approvals & Permits',
        description: 'Obtain all necessary permits and zoning approvals from local authorities',
        targetDate: '2025-05-01',
        completed: false,
        status: 'in-progress'
      },
      {
        id: '3',
        title: 'Final Land Purchase',
        description: 'Complete the legal purchase and transfer of the property',
        targetDate: '2025-08-01',
        completed: false,
        status: 'pending'
      },
      {
        id: '4',
        title: 'Site Preparation',
        description: 'Prepare the land for construction including utilities and access roads',
        targetDate: '2025-12-01',
        completed: false,
        status: 'pending'
      }
    ],
    team: [
      {
        id: '1',
        name: 'Pankaj Tyagi',
        role: 'Project Director',
        image: 'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg',
        bio: 'Founder and visionary leader overseeing all aspects of the project'
      },
      {
        id: '2',
        name: 'Dr. Vineeta Kapoor',
        role: 'Strategic Advisor',
        image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
        bio: 'Brand Ambassador providing strategic guidance and community outreach'
      },
      {
        id: '3',
        name: 'Nate Sondhi',
        role: 'Operations Manager',
        image: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg',
        bio: 'Co-founder managing day-to-day operations and partnerships'
      }
    ],
    updates: [
      {
        id: '1',
        date: '2024-12-15',
        title: 'Environmental Assessment Completed',
        content: 'We have successfully completed the environmental impact assessment for the El Sobrante property. The results show minimal environmental impact and full compliance with California environmental regulations.',
        author: 'Project Team'
      },
      {
        id: '2',
        date: '2024-12-01',
        title: 'Community Meeting Success',
        content: 'Held a successful community meeting with local residents and officials. Received overwhelming support for the project and valuable feedback on community integration.',
        author: 'Nate Sondhi'
      },
      {
        id: '3',
        date: '2024-11-20',
        title: 'Project Launch',
        content: 'We are excited to announce the official launch of our Land Acquisition project! This marks the beginning of our journey to create a transformative spiritual center.',
        author: 'Pankaj Tyagi'
      }
    ],
    faqs: [
      {
        question: 'When will construction begin?',
        answer: 'Construction is planned to begin in early 2026, following the completion of land acquisition and all necessary permits.'
      },
      {
        question: 'Will the center be open to all communities?',
        answer: 'Yes, the Sanatan International Center will welcome people of all backgrounds who are interested in learning about Vedic wisdom and participating in community activities.'
      },
      {
        question: 'How can I volunteer for this project?',
        answer: 'We welcome volunteers with various skills including construction, landscaping, administration, and community outreach. Please contact us through the inquiry form below.'
      },
      {
        question: 'What makes this location special?',
        answer: 'El Sobrante offers the perfect balance of accessibility to the Bay Area while maintaining a peaceful, natural environment ideal for spiritual practice and community gathering.'
      }
    ],
    donationTiers: [
      {
        amount: 10,
        title: 'Supporter',
        description: 'Help us reach our goal',
        benefits: ['Digital updates', 'Name on virtual wall']
      },
      {
        amount: 50,
        title: 'Patron',
        description: 'Significant contribution',
        benefits: ['All Supporter benefits', 'Quarterly virtual meetings', 'Early access to events']
      },
      {
        amount: 100,
        title: 'Founder Circle',
        description: 'Major supporter',
        benefits: ['All Patron benefits', 'Named brick in center', 'VIP access', 'Personal consultation']
      },
      {
        amount: 500,
        title: 'Visionary Circle',
        description: 'Premium supporter',
        benefits: ['All Founder Circle benefits', 'Annual recognition dinner', 'Advisory board invitation']
      }
    ]
  },
  'sanatan-center-construction': {
    id: '2',
    title: 'Sanatan International Center Construction',
    slug: 'sanatan-center-construction',
    description: 'Building our flagship center with skill development, yoga, and Ayurveda facilities. We offer accommodation to skilled volunteers.',
    status: 'active',
    priority: true,
    progress: 0,
    fundingGoal: 3200000,
    raisedAmount: 0,
    startDate: '2026-01-01',
    targetDate: '2027-12-31',
    location: 'El Sobrante, California',
    category: 'Infrastructure',
    image: 'https://images.pexels.com/photos/6044237/pexels-photo-6044237.jpeg',
    content: `# Sanatan International Center Construction

Building our flagship center with multiple specialized facilities for education, wellness, and community service. This will be a transformative space where ancient wisdom meets modern innovation.

## Facility Overview

### 🎓 Skill Development Center
- Certified training programs
- Technology and digital literacy
- Traditional crafts and arts
- Professional development courses

### 🧘 Yoga Center
- Traditional Hatha and Ashtanga yoga
- Teacher training certification
- Meditation and pranayama classes
- Therapeutic yoga programs

### 🌿 Ayurveda Center
- Holistic wellness consultations
- Traditional treatments and therapies
- Herbal medicine preparation
- Wellness education programs

### 🏠 Volunteer Accommodation
- On-site housing for skilled volunteers
- Community kitchen and dining
- Study and recreation areas
- Support services and utilities`,
    timeline: [
      {
        id: '1',
        title: 'Architectural Design',
        description: 'Complete architectural plans and engineering designs',
        targetDate: '2026-03-01',
        completed: false,
        status: 'pending'
      },
      {
        id: '2',
        title: 'Construction Permits',
        description: 'Obtain all construction permits and approvals',
        targetDate: '2026-06-01',
        completed: false,
        status: 'pending'
      }
    ],
    team: [
      {
        id: '1',
        name: 'Pankaj Tyagi',
        role: 'Project Director',
        image: 'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg',
        bio: 'Overseeing the entire construction project'
      }
    ],
    updates: [],
    faqs: [
      {
        question: 'What volunteer opportunities are available?',
        answer: 'We offer accommodation and support to skilled volunteers who can teach 2-4 hours per day in our skill development, yoga, or Ayurveda centers.'
      }
    ],
    donationTiers: [
      {
        amount: 10,
        title: 'Supporter',
        description: 'Help build our center',
        benefits: ['Construction updates', 'Virtual tours']
      },
      {
        amount: 50,
        title: 'Builder',
        description: 'Significant support',
        benefits: ['All Supporter benefits', 'Progress reports', 'Early access']
      },
      {
        amount: 100,
        title: 'Patron',
        description: 'Major contribution',
        benefits: ['All Builder benefits', 'Named recognition', 'VIP events']
      },
      {
        amount: 500,
        title: 'Founder',
        description: 'Premium support',
        benefits: ['All Patron benefits', 'Permanent recognition', 'Advisory role']
      }
    ]
  }
};

interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: 'general' | 'volunteer' | 'donation' | 'partnership';
}

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [inquiryForm, setInquiryForm] = useState<InquiryForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    loadProject();
  }, [slug]);

  const loadProject = async () => {
    try {
      // In real app, this would fetch from Supabase
      const projectData = projectsData[slug as keyof typeof projectsData];
      if (projectData) {
        setProject(projectData);
      } else {
        navigate('/projects');
      }
    } catch (error) {
      console.error('Error loading project:', error);
      navigate('/projects');
    } finally {
      setLoading(false);
    }
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setInquiryForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
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
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-saffron-500 mx-auto mb-4"></div>
          <p className="text-navy-600 dark:text-silver-300">Loading project details...</p>
        </div>
      </div>
    );
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Project not found</h2>
          <Button href="/projects">View All Projects</Button>
        </div>
      </div>
    );
  }

  const progress = project.raisedAmount ? (project.raisedAmount / project.fundingGoal) * 100 : 0;

  return (
    <div className="pt-24 bg-white dark:bg-black">
      <Helmet>
        <title>{`${project.title} - Sanatan International`}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-navy-900 via-indigo-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              {project.priority && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-saffron-500 text-white">
                  <Star className="w-4 h-4 mr-1" />
                  Priority Project
                </span>
              )}
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
              }`}>
                <CheckCircle className="w-4 h-4 mr-1" />
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/80 mb-6 max-w-3xl mx-auto">
              {project.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-saffron-400" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-saffron-400" />
                <span>{formatDate(project.startDate)} - {formatDate(project.targetDate)}</span>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2 text-saffron-400" />
                <span>{project.category}</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 dark:border-silver-700 mb-8">
              <nav className="flex space-x-8">
                {[
                  { id: 'overview', label: 'Overview', icon: Building },
                  { id: 'timeline', label: 'Timeline', icon: Clock },
                  { id: 'team', label: 'Team', icon: Users },
                  { id: 'updates', label: 'Updates', icon: TrendingUp },
                  { id: 'faq', label: 'FAQ', icon: MessageSquare }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'border-saffron-500 text-saffron-600 dark:text-saffron-400'
                          : 'border-transparent text-navy-500 dark:text-silver-400 hover:text-navy-700 dark:hover:text-silver-200'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[600px]">
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Project Gallery */}
                  {project.gallery && (
                    <div className="mb-8">
                      <h3 className="text-xl font-heading font-semibold mb-4 text-navy-900 dark:text-white">
                        Project Gallery
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {project.gallery.map((image: string, index: number) => (
                          <div key={index} className="rounded-lg overflow-hidden">
                            <img
                              src={image}
                              alt={`${project.title} ${index + 1}`}
                              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Content */}
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br>').replace(/###/g, '<h3>').replace(/##/g, '<h2>').replace(/#/g, '<h1>') }} />
                  </div>
                </motion.div>
              )}

              {activeTab === 'timeline' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-heading font-bold mb-6 text-navy-900 dark:text-white">
                    Project Timeline
                  </h3>
                  <div className="relative">
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-silver-700"></div>
                    {project.timeline.map((milestone: any, index: number) => (
                      <motion.div
                        key={milestone.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-12 pb-8"
                      >
                        <div className={`absolute left-2 top-2 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                          milestone.completed 
                            ? 'bg-green-500' 
                            : milestone.status === 'in-progress' 
                            ? 'bg-blue-500' 
                            : 'bg-gray-300 dark:bg-silver-600'
                        }`}></div>
                        <div className="bg-white dark:bg-silver-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-silver-700">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-navy-900 dark:text-white">
                              {milestone.title}
                            </h4>
                            <span className="text-sm text-navy-500 dark:text-silver-400">
                              {formatDate(milestone.targetDate)}
                            </span>
                          </div>
                          <p className="text-navy-600 dark:text-silver-300 mb-3">
                            {milestone.description}
                          </p>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            milestone.completed 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                              : milestone.status === 'in-progress'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                          }`}>
                            {milestone.completed ? 'Completed' : milestone.status === 'in-progress' ? 'In Progress' : 'Pending'}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'team' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-heading font-bold mb-6 text-navy-900 dark:text-white">
                    Project Team
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.team.map((member: any) => (
                      <motion.div
                        key={member.id}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-silver-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-silver-700"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="text-lg font-semibold text-navy-900 dark:text-white">
                              {member.name}
                            </h4>
                            <p className="text-saffron-600 dark:text-saffron-400 font-medium">
                              {member.role}
                            </p>
                          </div>
                        </div>
                        <p className="text-navy-600 dark:text-silver-300">
                          {member.bio}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'updates' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-heading font-bold mb-6 text-navy-900 dark:text-white">
                    Project Updates
                  </h3>
                  {project.updates.length > 0 ? (
                    <div className="space-y-6">
                      {project.updates.map((update: any) => (
                        <motion.div
                          key={update.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-white dark:bg-silver-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-silver-700"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-semibold text-navy-900 dark:text-white">
                              {update.title}
                            </h4>
                            <span className="text-sm text-navy-500 dark:text-silver-400">
                              {formatDate(update.date)}
                            </span>
                          </div>
                          <p className="text-navy-600 dark:text-silver-300 mb-3">
                            {update.content}
                          </p>
                          <p className="text-sm text-navy-500 dark:text-silver-400">
                            — {update.author}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-navy-600 dark:text-silver-300">
                        No updates available yet. Check back soon for project progress!
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'faq' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-heading font-bold mb-6 text-navy-900 dark:text-white">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {project.faqs.map((faq: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-silver-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-silver-700"
                      >
                        <h4 className="text-lg font-semibold text-navy-900 dark:text-white mb-3">
                          {faq.question}
                        </h4>
                        <p className="text-navy-600 dark:text-silver-300">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Live Funding Progress */}
            <div className="bg-white dark:bg-silver-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-silver-700">
              <div className="flex items-center mb-4">
                <DollarSign className="w-5 h-5 text-saffron-500 mr-2" />
                <h3 className="text-lg font-heading font-semibold text-navy-900 dark:text-white">
                  Live Funding Progress
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-navy-600 dark:text-silver-300">Raised</span>
                    <span className="font-semibold text-navy-900 dark:text-white">
                      {formatCurrency(project.raisedAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-navy-600 dark:text-silver-300">Goal</span>
                    <span className="font-semibold text-navy-900 dark:text-white">
                      {formatCurrency(project.fundingGoal)}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-silver-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-saffron-500 to-orange-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(progress, 100)}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                  <div className="text-center mt-2 text-sm text-navy-500 dark:text-silver-400">
                    {progress.toFixed(1)}% of goal reached
                  </div>
                </div>

                {/* Donation Tiers */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-navy-900 dark:text-white">Support This Project</h4>
                  {project.donationTiers.map((tier: any, index: number) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="border border-gray-200 dark:border-silver-600 rounded-lg p-3 hover:border-saffron-300 dark:hover:border-saffron-600 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-saffron-600 dark:text-saffron-400">
                          ${tier.amount}
                        </span>
                        <span className="text-sm font-medium text-navy-900 dark:text-white">
                          {tier.title}
                        </span>
                      </div>
                      <p className="text-xs text-navy-600 dark:text-silver-400 mb-2">
                        {tier.description}
                      </p>
                      <ul className="text-xs text-navy-500 dark:text-silver-500">
                        {tier.benefits.map((benefit: string, i: number) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1 h-1 bg-saffron-500 rounded-full mr-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <Button
                  href={`/donate?project=${project.slug}`}
                  className="w-full"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Support This Project
                </Button>
              </div>
            </div>

            {/* Project Stats */}
            <div className="bg-white dark:bg-silver-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-silver-700">
              <h3 className="text-lg font-heading font-semibold mb-4 text-navy-900 dark:text-white">
                Project Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-navy-600 dark:text-silver-300">Status</span>
                  <span className={`font-medium ${
                    project.status === 'active' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-600 dark:text-silver-300">Progress</span>
                  <span className="font-medium text-navy-900 dark:text-white">{project.progress}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-600 dark:text-silver-300">Start Date</span>
                  <span className="font-medium text-navy-900 dark:text-white">
                    {formatDate(project.startDate)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-600 dark:text-silver-300">Target Date</span>
                  <span className="font-medium text-navy-900 dark:text-white">
                    {formatDate(project.targetDate)}
                  </span>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white dark:bg-silver-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-silver-700">
              <h3 className="text-lg font-heading font-semibold mb-4 text-navy-900 dark:text-white">
                Project Inquiry
              </h3>
              
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-navy-900 dark:text-white mb-2">
                    Inquiry Sent Successfully!
                  </h4>
                  <p className="text-sm text-navy-600 dark:text-silver-300">
                    We'll get back to you within 24-48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 dark:text-white mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={inquiryForm.inquiryType}
                      onChange={(e) => setInquiryForm({...inquiryForm, inquiryType: e.target.value as any})}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="donation">Donation Question</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-navy-700 dark:text-white mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-navy-700 dark:text-white mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-navy-700 dark:text-white mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-navy-700 dark:text-white mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={inquiryForm.subject}
                      onChange={(e) => setInquiryForm({...inquiryForm, subject: e.target.value})}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-navy-700 dark:text-white mb-1">
                      Message *
                    </label>
                    <textarea
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full"
                    size="sm"
                    disabled={isSubmitting}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </Button>
                </form>
              )}
            </div>

            {/* Share Project */}
            <div className="bg-white dark:bg-silver-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-silver-700">
              <h3 className="text-lg font-heading font-semibold mb-4 text-navy-900 dark:text-white">
                Share This Project
              </h3>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetailPage;