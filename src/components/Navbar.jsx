import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MessageSquare, Sparkles, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <div className="relative">
      <MessageSquare className="text-brand-aqua h-8 w-8" />
      <Sparkles className="absolute -top-1 -right-1 text-brand-pink h-4 w-4" />
    </div>
    <span className="text-2xl font-bold brand-gradient-text">CaptionCraze</span>
  </Link>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Captions', path: '/caption-generator' },
    { name: 'Hashtags', path: '/hashtag-generator' },
    { name: 'Favorites', path: '/favorites' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-brand-pink ${
                    isActive ? 'text-brand-aqua' : 'text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-900/90 pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 px-4 text-lg font-medium transition-colors hover:text-brand-pink ${
                  isActive ? 'text-brand-aqua' : 'text-gray-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
