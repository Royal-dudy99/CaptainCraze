import React from 'react';
import { motion } from 'framer-motion';
import { Heart, UserPlus } from 'lucide-react';
import GradientButton from '../components/GradientButton';
import GlassCard from '../components/GlassCard';

const FavoritesPage = () => {
  // Dummy data for saved items
  const savedCaptions = [
    "Living in a golden state of mind.",
    "I'm not lazy, I'm on energy-saving mode."
  ];
  const savedHashtags = ['#contentcreation', '#digitalmarketingtips', '#instagramgrowth'];

  // Dummy state for login
  const isLoggedIn = false;

  return (
    <div className="max-w-4xl mx-auto pt-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-2 brand-gradient-text">Your Favorites</h1>
        <p className="text-center text-gray-400 mb-8">All your saved captions and hashtags in one place.</p>
        
        {isLoggedIn ? (
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <h2 className="text-2xl font-bold mb-4">Saved Captions</h2>
              <ul className="space-y-3">
                {savedCaptions.map((caption, index) => (
                  <li key={index} className="text-gray-300 p-3 bg-gray-800 rounded-lg">{caption}</li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard>
              <h2 className="text-2xl font-bold mb-4">Saved Hashtags</h2>
              <div className="flex flex-wrap gap-2">
                {savedHashtags.map(tag => (
                  <span key={tag} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </GlassCard>
          </div>
        ) : (
          <GlassCard className="text-center p-10">
            <Heart className="h-16 w-16 mx-auto text-brand-pink mb-4" />
            <h2 className="text-2xl font-bold mb-2">Login to Save Your Favorites</h2>
            <p className="text-gray-400 mb-6">Create an account to save your generated content and access it anytime.</p>
            <GradientButton icon={UserPlus}>Sign Up / Login</GradientButton>
          </GlassCard>
        )}
      </motion.div>
    </div>
  );
};

export default FavoritesPage;
