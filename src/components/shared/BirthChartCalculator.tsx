import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Button from './Button';

interface BirthChartForm {
  date: string;
  time: string;
  place: string;
}

const BirthChartCalculator: React.FC = () => {
  const [formData, setFormData] = useState<BirthChartForm>({
    date: '',
    time: '',
    place: ''
  });
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to calculate the birth chart
    // For now, we'll just show a mock result
    setResult('Aries (Mesh) with Moon in Taurus (Vrishabha)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-silver-800 rounded-lg p-6 shadow-md"
    >
      <div className="flex items-center mb-6">
        <Star className="w-6 h-6 text-saffron-500 dark:text-saffron-400 mr-2" />
        <h3 className="text-lg font-heading font-semibold text-navy-800 dark:text-silver-100">
          Birth Chart Calculator
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-navy-700 dark:text-silver-200 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-silver-700 text-navy-900 dark:text-silver-100"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 dark:text-silver-200 mb-1">
            Time of Birth
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-silver-700 text-navy-900 dark:text-silver-100"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-navy-700 dark:text-silver-200 mb-1">
            Place of Birth
          </label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            placeholder="City, Country"
            className="w-full px-4 py-2 border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-silver-700 text-navy-900 dark:text-silver-100 placeholder-gray-400 dark:placeholder-silver-400"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Calculate Birth Chart
        </Button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-saffron-50 dark:bg-saffron-900/20 rounded-lg">
          <h4 className="font-medium text-navy-800 dark:text-silver-100 mb-2">Your Birth Chart</h4>
          <p className="text-navy-600 dark:text-silver-300">{result}</p>
        </div>
      )}
    </motion.div>
  );
};

export default BirthChartCalculator;