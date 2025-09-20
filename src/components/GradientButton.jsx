import React from 'react';
import { motion } from 'framer-motion';

const GradientButton = ({ children, onClick, className, icon: Icon }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-aqua via-brand-purple to-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="relative flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5" />}
        {children}
      </span>
    </motion.button>
  );
};

export default GradientButton;
