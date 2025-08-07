import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Lightbulb, Globe, Users } from 'lucide-react';
import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';
import QuoteRotator from '../shared/QuoteRotator';

const sampleQuotes = [
  {
    id: 1,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    english: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
    hindi: "कर्म करने का अधिकार तुम्हारा है, लेकिन फल पर नहीं।",
    chapter: 2,
    verse: 47
  },
  {
    id: 2,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
    english: "Whenever there is a decline in righteousness and an increase in unrighteousness, at that time I manifest myself.",
    hindi: "जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं स्वयं को प्रकट करता हूँ।",
    chapter: 4,
    verse: 7
  }
];

const missionItems = [
  {
    title: "Preserve",
    description: "Authentic resources and trusted commentaries from sacred texts",
    image: "/assets/images/Sanatan_preserve.jpg"
  },
  {
    title: "Educate",
    description: "Educational initiatives with experienced scholars and traditional teachers",
    image: "/assets/images/Vedic-education.jpg"
  },
  {
    title: "Connect",
    description: "Global community of fellow devotees and seekers across continents",
    image: "/assets/images/Global-Community.jpg"
  }
];

const MissionSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute inset-0 bg-repeat opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF9933' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <Container className="relative z-10">
        <div className="mb-16 p-8 bg-gray-50 dark:bg-silver-900 rounded-lg shadow-sm border border-gray-200 dark:border-silver-700">
          <QuoteRotator quotes={sampleQuotes} />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-white mb-6">
              Welcome to Sanatan International
            </h2>
            <p className="text-lg text-navy-700 dark:text-silver-300 mb-6">
              A global initiative dedicated to sharing the timeless wisdom of Sanatan Dharma with seekers worldwide.
            </p>
            <p className="text-navy-600 dark:text-silver-400 mb-8">
              Rooted in the eternal teachings of the Vedas, Upanishads, Bhagavad Gita, Ramayana, Mahabharata, 
              and the great Puranas, we are committed to preserving and promoting the pure essence of Dharma, 
              free from distortion or dilution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {missionItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-heading font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default MissionSection;