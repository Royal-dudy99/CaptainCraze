import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clipboard, ClipboardCheck, Wand2, Flame } from 'lucide-react';
import GradientButton from '../components/GradientButton';
import GlassCard from '../components/GlassCard';

const tones = ['Funny', 'Motivational', 'Professional', 'Aesthetic', 'Random'];
const spicyCaptions = [
  "Keep looking… I know you can’t scroll away 👀🔥",
  "Not just a post, this is your guilty pleasure.",
  "Teasing your feed, one caption at a time 💋",
  "Handle with care, I'm hotter than your screen.",
  "Serving looks and a little bit of chaos."
];

const dummyCaptions = {
  Funny: ["I need a six-month holiday, twice a year.", "I'm not lazy, I'm on energy-saving mode.", "Life is short. Smile while you still have teeth."],
  Motivational: ["The secret of getting ahead is getting started.", "Believe you can and you're halfway there.", "The only way to do great work is to love what you do."],
  Professional: ["Excited to share our latest project update.", "Great discussion with the team today.", "Proud to be part of this industry-leading initiative."],
  Aesthetic: ["Chasing sunsets and dreams.", "Lost in the right direction.", "Living in a golden state of mind."],
  Random: ["Just a random pic from my camera roll.", "Thinking about tacos.", "Is it Friday yet?"],
};

const CaptionGeneratorPage = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Funny');
  const [generatedCaptions, setGeneratedCaptions] = useState([]);
  const [copied, setCopied] = useState(null);
  const [generationCount, setGenerationCount] = useState(0);
  const [showSecretModeModal, setShowSecretModeModal] = useState(false);
  const [secretMode, setSecretMode] = useState(false);

  useEffect(() => {
    if (generationCount === 3 && !secretMode) {
      setShowSecretModeModal(true);
    }
  }, [generationCount, secretMode]);

  const handleGenerate = () => {
    if (secretMode) {
      setGeneratedCaptions(spicyCaptions);
    } else {
      setGeneratedCaptions(dummyCaptions[tone] || dummyCaptions['Random']);
    }
    setGenerationCount(prev => prev + 1);
  };

  const handleCopy = (caption, index) => {
    navigator.clipboard.writeText(caption);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const enableSecretMode = () => {
    setSecretMode(true);
    setShowSecretModeModal(false);
    setTone('Spicy');
  };

  return (
    <div className="max-w-3xl mx-auto pt-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-2 brand-gradient-text">Caption Generator</h1>
        <p className="text-center text-gray-400 mb-8">Enter a topic and choose a tone to get started.</p>
        
        <GlassCard className="p-8">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter keywords or a topic (e.g., 'summer vacation')"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-purple focus:outline-none"
            />
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-purple focus:outline-none"
              disabled={secretMode}
            >
              {secretMode ? <option value="Spicy">Spicy 🔥</option> : tones.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <GradientButton onClick={handleGenerate} icon={Wand2}>
              Generate
            </GradientButton>
          </div>
        </GlassCard>
      </motion.div>

      {generatedCaptions.length > 0 && (
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-bold text-center mb-6">Your Captions</h2>
          <div className="space-y-4">
            <AnimatePresence>
              {generatedCaptions.map((caption, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-4 flex justify-between items-center">
                    <p className="text-gray-300">{caption}</p>
                    <button onClick={() => handleCopy(caption, index)} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
                      {copied === index ? <ClipboardCheck className="text-green-500" /> : <Clipboard className="text-gray-400" />}
                    </button>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {showSecretModeModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass-card p-8 rounded-2xl text-center max-w-sm"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
            >
              <Flame className="h-16 w-16 mx-auto text-brand-pink mb-4" />
              <h2 className="text-2xl font-bold mb-2">Unlock Spicy Captions?</h2>
              <p className="text-gray-400 mb-6">Ready to turn up the heat? (18+)</p>
              <div className="flex justify-center gap-4">
                <button onClick={() => setShowSecretModeModal(false)} className="px-6 py-2 rounded-full border border-gray-600 hover:bg-gray-700">Maybe Later</button>
                <GradientButton onClick={enableSecretMode}>Yes, Unlock!</GradientButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaptionGeneratorPage;
