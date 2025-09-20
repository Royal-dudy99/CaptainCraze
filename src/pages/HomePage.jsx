import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Edit3, Hash, Save } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';

const HomePage = () => {
  const features = [
    {
      icon: <Edit3 className="h-10 w-10 text-brand-aqua" />,
      title: 'AI Captions',
      description: 'Generate creative and engaging captions for any post in seconds.',
    },
    {
      icon: <Hash className="h-10 w-10 text-brand-purple" />,
      title: 'Trending Hashtags',
      description: 'Find the perfect hashtags to boost your reach and engagement.',
    },
    {
      icon: <Save className="h-10 w-10 text-brand-pink" />,
      title: 'Save & Copy',
      description: 'Easily save your favorite creations and copy them with a single click.',
    },
  ];

  return (
    <div className="text-center pt-20">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 brand-gradient-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Never run out of words again.
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Captions that hook. Hashtags that trend.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-4 mb-24"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link to="/caption-generator">
          <GradientButton icon={Edit3}>Generate Captions</GradientButton>
        </Link>
        <Link to="/hashtag-generator">
          <GradientButton icon={Hash}>Get Hashtags</GradientButton>
        </Link>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
          >
            <GlassCard className="text-left h-full">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
