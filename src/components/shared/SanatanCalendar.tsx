import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface PanchangData {
  date: string;
  tithi: string;
  nakshatra: string;
  yoga: string;
  karana: string;
}

const mockPanchangData = {
  date: new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }),
  tithi: 'Shukla Pratipada',
  nakshatra: 'Ashwini',
  yoga: 'Vishkambha',
  karana: 'Bava'
};

const SanatanCalendar: React.FC = () => {
  const [panchangData, setPanchangData] = useState<PanchangData>(mockPanchangData);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-silver-800 rounded-lg p-6 shadow-md"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Calendar className="w-6 h-6 text-saffron-500 dark:text-saffron-400 mr-2" />
          <h3 className="text-lg font-heading font-semibold text-navy-800 dark:text-silver-100">
            Sanatan Calendar
          </h3>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevDay}
            className="p-2 hover:bg-gray-100 dark:hover:bg-silver-700 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-navy-600 dark:text-silver-300" />
          </button>
          <span className="font-medium text-navy-800 dark:text-silver-200">
            {selectedDate.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <button
            onClick={handleNextDay}
            className="p-2 hover:bg-gray-100 dark:hover:bg-silver-700 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 text-navy-600 dark:text-silver-300" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3 text-navy-600 dark:text-silver-300">
          <p>
            <span className="font-medium text-navy-800 dark:text-silver-200">Tithi:</span> {panchangData.tithi}
          </p>
          <p>
            <span className="font-medium text-navy-800 dark:text-silver-200">Nakshatra:</span> {panchangData.nakshatra}
          </p>
          <p>
            <span className="font-medium text-navy-800 dark:text-silver-200">Yoga:</span> {panchangData.yoga}
          </p>
          <p>
            <span className="font-medium text-navy-800 dark:text-silver-200">Karana:</span> {panchangData.karana}
          </p>
        </div>
        <div className="space-y-3 text-navy-600 dark:text-silver-300">
          <h4 className="font-medium text-navy-800 dark:text-silver-200">Auspicious Timings</h4>
          <p>Brahma Muhurta: 4:32 AM - 5:20 AM</p>
          <p>Abhijit: 11:45 AM - 12:30 PM</p>
          <p>Amrit Kaal: 7:15 PM - 8:45 PM</p>
        </div>
      </div>

      <motion.div
        className="absolute -right-4 -bottom-4 w-24 h-24 opacity-10"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-saffron-500 dark:border-saffron-400"></div>
      </motion.div>
    </motion.div>
  );
};

export default SanatanCalendar;