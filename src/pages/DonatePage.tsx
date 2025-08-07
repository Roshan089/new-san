import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Heart, CreditCard, DollarSign, CheckCircle, Users, Gift, Star, Shield, Globe } from 'lucide-react';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';

interface DonationOption {
  amount: number;
  description: string;
  benefits: string[];
  popular?: boolean;
}

const donationOptions: DonationOption[] = [
  {
    amount: 10,
    description: "Basic support for our mission",
    benefits: ["Digital newsletter", "Name on virtual wall of supporters", "Monthly updates"]
  },
  {
    amount: 50,
    description: "Enhanced support for Dharma preservation",
    benefits: ["All previous benefits", "Quarterly project reports", "Access to exclusive content"],
    popular: true
  },
  {
    amount: 100,
    description: "Significant contribution to our initiatives",
    benefits: ["All previous benefits", "Virtual meeting with founders", "Early access to resources"]
  },
  {
    amount: 500,
    description: "Major support for global Dharma projects",
    benefits: ["All previous benefits", "Named recognition in annual report", "VIP access to events"]
  }
];

type RecognitionType = 'named' | 'anonymous';

const DonatePage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [recognitionType, setRecognitionType] = useState<RecognitionType>('named');
  const [donorName, setDonorName] = useState<string>('');
  const [donorMessage, setDonorMessage] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    document.title = t('donate.title') || 'Donate - Sanatan International';
  }, [t]);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return selectedAmount || (customAmount ? parseInt(customAmount) : 0);
  };

  const handleDonate = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Handle successful donation
    }, 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-24 bg-white dark:bg-black transition-colors duration-300">
      <Helmet>
        <title>{t('donate.title') || 'Donate - Sanatan International'}</title>
        <meta name="description" content={t('donate.description') || 'Support the global mission of Sanatan International — preserve Vedic wisdom, promote Dharma, and join our community of supporters.'} />
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <Heart className="w-16 h-16 text-saffron-500 mx-auto" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {t('donate.hero.title') || 'Support Our Mission'}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-saffron-400 mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t('donate.hero.subtitle') || 'Help Us Preserve and Share Timeless Wisdom'}
            </motion.p>
            <motion.p 
              className="text-lg text-white/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {t('donate.hero.description') || 'Your donation supports the preservation and digitization of sacred texts, educational initiatives for seekers, support for traditional Vedic scholars, and community-building efforts worldwide.'}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto"
            >
              <h3 className="text-lg font-semibold mb-6 text-white">{t('donate.supports.title') || 'Your donation supports:'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Shield, text: t('donate.supports.preservation') || "Preservation of sacred texts" },
                  { icon: Users, text: t('donate.supports.education') || "Educational initiatives" },
                  { icon: Heart, text: t('donate.supports.scholars') || "Support for scholars" },
                  { icon: Globe, text: t('donate.supports.community') || "Global community building" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="flex items-center text-left"
                  >
                    <item.icon className="w-5 h-5 text-saffron-400 mr-3 flex-shrink-0" />
                    <span className="text-white/90">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-silver-900">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Recognition Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-xl p-8 shadow-lg mb-8 border border-gray-200 dark:border-silver-700"
            >
              <h2 className="text-2xl font-heading font-bold mb-6 text-center text-navy-900 dark:text-white">
                🙏 {t('donate.recognition.title') || 'Choose How to Appear'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.button
                  onClick={() => setRecognitionType('named')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    recognitionType === 'named'
                      ? 'border-saffron-500 bg-saffron-50 dark:bg-saffron-900/20'
                      : 'border-gray-200 dark:border-silver-600 hover:border-saffron-200 dark:hover:border-saffron-600'
                  }`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <Users className="w-8 h-8 text-saffron-500" />
                  </div>
                  <h3 className="font-semibold mb-2 text-navy-800 dark:text-white">
                    {t('donate.recognition.named.title') || 'Show my name on Devotees List'}
                  </h3>
                  <p className="text-sm text-navy-600 dark:text-silver-400">
                    {t('donate.recognition.named.description') || 'Name + optional short message'}
                  </p>
                </motion.button>

                <motion.button
                  onClick={() => setRecognitionType('anonymous')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    recognitionType === 'anonymous'
                      ? 'border-saffron-500 bg-saffron-50 dark:bg-saffron-900/20'
                      : 'border-gray-200 dark:border-silver-600 hover:border-saffron-200 dark:hover:border-saffron-600'
                  }`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <Heart className="w-8 h-8 text-saffron-500" />
                  </div>
                  <h3 className="font-semibold mb-2 text-navy-800 dark:text-white">
                    {t('donate.recognition.anonymous.title') || 'Donate Anonymously'}
                  </h3>
                  <p className="text-sm text-navy-600 dark:text-silver-400">
                    {t('donate.recognition.anonymous.description') || 'Listed as "Anonymous Devotee"'}
                  </p>
                </motion.button>
              </div>

              {recognitionType === 'named' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-navy-700 dark:text-white mb-1">
                      {t('donate.form.name') || 'Your Name'}
                    </label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder={t('donate.form.namePlaceholder') || 'Enter your name'}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 dark:text-white mb-1">
                      {t('donate.form.message') || 'Optional Message'}
                    </label>
                    <input
                      type="text"
                      value={donorMessage}
                      onChange={(e) => setDonorMessage(e.target.value)}
                      placeholder={t('donate.form.messagePlaceholder') || 'Short message (optional)'}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Donation Amounts */}
            <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg mb-8 border border-gray-200 dark:border-silver-700">
              <h2 className="text-2xl font-heading font-bold mb-6 text-center text-navy-900 dark:text-white">
                {t('donate.amounts.title') || 'Select Donation Amount'}
              </h2>
              
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                {donationOptions.map((option) => (
                  <motion.button
                    key={option.amount}
                    variants={fadeInUp}
                    onClick={() => handleAmountSelect(option.amount)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                      selectedAmount === option.amount
                        ? 'border-saffron-500 bg-saffron-50 dark:bg-saffron-900/20'
                        : 'border-gray-200 dark:border-silver-600 hover:border-saffron-200 dark:hover:border-saffron-600'
                    }`}
                  >
                    {option.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-saffron-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {t('donate.popular') || 'Popular'}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-saffron-500">
                        ${option.amount}
                      </span>
                      {selectedAmount === option.amount && (
                        <CheckCircle className="w-6 h-6 text-saffron-500" />
                      )}
                    </div>
                    <p className="text-navy-600 dark:text-silver-300 mb-3">{option.description}</p>
                    <ul className="text-sm text-navy-500 dark:text-silver-400 space-y-1">
                      {option.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-saffron-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.button>
                ))}
              </motion.div>

              <div className="border-t border-gray-200 dark:border-silver-700 pt-6">
                <label className="block text-sm font-medium text-navy-700 dark:text-white mb-2">
                  {t('donate.custom.title') || 'Or enter custom amount'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400 dark:text-silver-400" />
                  </div>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder={t('donate.custom.placeholder') || 'Enter amount'}
                    className="pl-10 w-full px-4 py-3 text-lg border border-gray-300 dark:border-silver-600 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500 bg-white dark:bg-black text-navy-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg border border-gray-200 dark:border-silver-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2 text-navy-900 dark:text-white">
                  {t('donate.payment.title') || 'Complete Your Donation'}
                </h3>
                {getCurrentAmount() > 0 && (
                  <p className="text-3xl font-bold text-saffron-500">
                    ${getCurrentAmount().toLocaleString()}
                  </p>
                )}
              </div>

              <Button
                size="lg"
                className="w-full mb-6"
                disabled={getCurrentAmount() === 0 || isProcessing}
                onClick={handleDonate}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                {isProcessing ? (t('donate.payment.processing') || 'Processing...') : (t('donate.payment.button') || 'Donate Now — Secure and trusted payment')}
              </Button>

              <div className="text-center">
                <p className="text-lg text-saffron-600 dark:text-saffron-400 font-medium mb-2">
                  🙏 {t('donate.thanks.title') || 'Dhanyavaadah!'}
                </p>
                <p className="text-sm text-navy-600 dark:text-silver-400">
                  {t('donate.thanks.message') || 'Thank you for supporting Sanatan Dharma preservation and promotion worldwide.'}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default DonatePage;