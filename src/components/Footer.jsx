import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="relative">
              <MessageSquare className="text-brand-aqua h-8 w-8" />
              <Sparkles className="absolute -top-1 -right-1 text-brand-pink h-4 w-4" />
            </div>
            <span className="text-2xl font-bold brand-gradient-text">CaptionCraze</span>
          </div>
          <div className="flex gap-6 text-gray-400">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 border-t border-gray-800 pt-6">
          <p>&copy; {new Date().getFullYear()} CaptionCraze — Captions that hook. Hashtags that trend.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
