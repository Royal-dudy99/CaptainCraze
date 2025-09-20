import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clipboard, ClipboardCheck, Hash } from 'lucide-react';
import GradientButton from '../components/GradientButton';
import GlassCard from '../components/GlassCard';

const dummyHashtags = {
  small: ['#captioncrazeapp', '#newsaas', '#socialmediatools'],
  medium: ['#contentcreation', '#digitalmarketingtips', '#instagramgrowth'],
  viral: ['#socialmedia', '#marketing', '#instatips'],
};

const HashtagGeneratorPage = () => {
  const [topic, setTopic] = useState('');
  const [generatedHashtags, setGeneratedHashtags] = useState(null);
  const [copied, setCopied] = useState(null);

  const handleGenerate = () => {
    setGeneratedHashtags(dummyHashtags);
  };

  const handleCopy = (group) => {
    const textToCopy = generatedHashtags[group].join(' ');
    navigator.clipboard.writeText(textToCopy);
    setCopied(group);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto pt-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-2 brand-gradient-text">Hashtag Generator</h1>
        <p className="text-center text-gray-400 mb-8">Find the best hashtags to boost your content.</p>
        
        <GlassCard className="p-8">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter keywords (e.g., 'travel blogger')"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-purple focus:outline-none"
            />
            <GradientButton onClick={handleGenerate} icon={Hash}>
              Generate
            </GradientButton>
          </div>
        </GlassCard>
      </motion.div>

      <AnimatePresence>
        {generatedHashtags && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-bold text-center mb-6">Your Hashtags</h2>
            <div className="space-y-6">
              {Object.entries(generatedHashtags).map(([group, tags], index) => (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <GlassCard className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-semibold capitalize brand-gradient-text">{group} Hashtags</h3>
                      <button onClick={() => handleCopy(group)} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
                        {copied === group ? <ClipboardCheck className="text-green-500" /> : <Clipboard className="text-gray-400" />}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tags.map(tag => (
                        <span key={tag} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{tag}</span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HashtagGeneratorPage;
