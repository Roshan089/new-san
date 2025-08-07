import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';

const timelineEvents = [
  {
    year: '2024',
    phase: 'The Vision Ignites',
    description: 'The idea of Sanatan International is born in California with the mission to combine ancient Indian wisdom with modern tools to uplift humanity.'
  },
  {
    year: 'Mid-2024',
    phase: 'Foundation Begins',
    description: 'www.sanataninternational.com & .org secured. Strategic plan laid for land acquisition and center development in El Sobrante, California.'
  },
  {
    year: 'Late 2024',
    phase: 'Project Planning & Partnerships',
    description: 'Blueprint developed for multiple Sanatan projects including a Yoga Center, R&D Lab, Ayurvedic Wellness Facility, and AI-powered tech like smart vision glasses for the visually impaired.'
  },
  {
    year: '2025',
    phase: 'Website, Donations & Volunteer Launch',
    description: 'Dynamic multilingual website goes live with full content on Sanatan teachings, live Panchang, Vedic Library, Projects, and a global call for volunteers and supporters.'
  },
  {
    year: '2025–2026',
    phase: 'Land Acquisition & Center Construction',
    description: 'Land purchased in El Sobrante, CA. Construction begins for the Sanatan International Research & Wellness Campus.'
  },
  {
    year: '2026 Onward',
    phase: 'Global Expansion',
    description: 'Mobile Ayurvedic Vans in rural USA, Grantham.ai digital library expands to 10,000+ scriptures, retreats and learning programs launched worldwide.'
  }
];

const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Our Journey"
          centered
          className="mb-16"
        />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-saffron-200"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-saffron-500 border-4 border-white z-10"></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-12' : 'ml-auto pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-lg font-heading font-bold text-saffron-500 mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3 text-navy-800">
                      {event.phase}
                    </h3>
                    <p className="text-navy-600">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for opposite side */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>

          {/* Future indicator */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-6 h-6 flex items-center justify-center">
            <div className="animate-ping absolute w-4 h-4 rounded-full bg-saffron-400 opacity-75"></div>
            <div className="relative w-3 h-3 rounded-full bg-saffron-500"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;