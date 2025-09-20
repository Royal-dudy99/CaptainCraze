import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className }) => {
  return (
    <motion.div
      className={`glass-card p-6 ${className}`}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
