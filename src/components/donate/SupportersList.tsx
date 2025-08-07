import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Button from '../shared/Button';

const supporters = [
  {
    name: "Rajesh Sharma",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    location: "California, USA",
    amount: "$500"
  },
  {
    name: "Priya Patel",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
    location: "New Jersey, USA",
    amount: "$250"
  },
  {
    name: "Amit Kumar",
    image: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg",
    location: "Texas, USA",
    amount: "$100"
  },
  {
    name: "Maya Singh",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
    location: "London, UK",
    amount: "$100"
  },
  {
    name: "Vijay Reddy",
    image: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg",
    location: "California, USA",
    amount: "$50"
  }
];

const SupportersList: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-4">
              Our Devoted Supporters
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Join our growing community of supporters who are helping preserve and share ancient wisdom.
            </p>
          </motion.div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [-1920, 0],
            }}
            transition={{
              x: {
                duration: 50,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              },
            }}
          >
            {[...supporters, ...supporters].map((supporter, index) => (
              <motion.div
                key={index}
                className="flex-none w-72 bg-white rounded-lg shadow-md p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={supporter.image}
                    alt={supporter.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-heading font-semibold text-navy-800">
                      {supporter.name}
                    </h3>
                    <p className="text-sm text-navy-600">{supporter.location}</p>
                  </div>
                </div>
                <div className="text-saffron-500 font-semibold">
                  {supporter.amount}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative Elements */}
          <motion.img
            src="https://raw.githubusercontent.com/sanatanvedic/assets/main/symbols/om.png"
            alt=""
            className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 opacity-10"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.img
            src="https://raw.githubusercontent.com/sanatanvedic/assets/main/symbols/lotus.png"
            alt=""
            className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 opacity-10"
            animate={{ 
              rotate: -360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="text-center mt-12">
          <Button href="/devotees" className="inline-flex items-center">
            <Users className="w-5 h-5 mr-2" />
            View All Devotees
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupportersList;