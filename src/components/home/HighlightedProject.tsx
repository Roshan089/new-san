import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, DollarSign, Users, Building, Zap, Heart, CheckCircle, Target } from 'lucide-react';
import Container from '../shared/Container';
import Button from '../shared/Button';

const HighlightedProject: React.FC = () => {
  return (
    <section className="py-20 bg-navy-900 dark:bg-black text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-saffron-500/20 text-saffron-400 rounded-full text-sm font-medium mb-6">
              🏗️ Current Priority Project
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Land Acquisition - El Sobrante Center
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Our first major initiative is to acquire 33 acres of prime land in El Sobrante, California. 
              This land will serve as the foundation for our comprehensive Sanatan International Center, 
              creating a sacred space where ancient wisdom meets modern innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-saffron-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Location</p>
                  <p className="font-medium text-white">El Sobrante, CA</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-saffron-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Target Date</p>
                  <p className="font-medium text-white">January 2026</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <DollarSign className="w-5 h-5 text-saffron-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Funding Goal</p>
                  <p className="font-medium text-white">$2.5M</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Users className="w-5 h-5 text-saffron-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Progress</p>
                  <p className="font-medium text-white">0% Complete</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white/90">Environmental impact assessment completed</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white/90">Zoning approvals in progress</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-saffron-400" />
                <span className="text-white/90">Sustainable development with eco-friendly design</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-saffron-400" />
                <span className="text-white/90">Community-focused facilities for all ages</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/projects/land-acquisition-el-sobrante">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button href="/donate?project=land-acquisition" variant="outline">
                Support This Project
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg"
              alt="El Sobrante Center Land"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-saffron-500 text-navy-900 p-6 rounded-xl shadow-lg">
              <p className="font-heading font-bold text-lg">Target: Jan 2026</p>
              <p className="text-sm">$0 raised so far</p>
            </div>
          </motion.div>
        </div>

        {/* Second Project */}
        <div className="mt-20 pt-20 border-t border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
                🏛️ Phase 2 Project
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Sanatan International Center Construction
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Once land is acquired, we will construct our flagship center featuring multiple specialized facilities 
                for education, wellness, and community service. This will be a transformative space where ancient 
                wisdom meets modern innovation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-blue-400" />
                  <span className="text-white/90">Skill Development Center with certified training programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span className="text-white/90">Yoga Center for traditional practices and teacher training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-blue-400" />
                  <span className="text-white/90">Ayurveda Center for holistic wellness and healing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-white/90">Volunteer accommodation and support facilities</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Heart className="w-5 h-5 text-saffron-400 mr-2" />
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/projects/sanatan-center-construction">
                  View Center Plans <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button href="/donate?project=center-construction" variant="outline">
                  Support This Project
                </Button>
                <Button href="/volunteer" variant="outline">
                  Volunteer with Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:order-1 relative"
            >
              <img 
                src="https://images.pexels.com/photos/6044237/pexels-photo-6044237.jpeg"
                alt="Sanatan International Center"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-6 rounded-xl shadow-lg">
                <p className="font-heading font-bold text-lg">Phase 2: 2026-2027</p>
                <p className="text-sm">Multi-purpose facility</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HighlightedProject;