import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Award, BookOpen, MessageSquare, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Blogs', href: '#blogs', icon: BookOpen },
    { name: 'Why Hire Me', href: '#why-hire-me', icon: MessageSquare },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-purple-500/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
            }}
            className="text-2xl font-bold text-white relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
            <span className="text-purple-400 relative z-10">Himanshu</span>
            <span className="relative z-10">Singh</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-500/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                <item.icon size={16} className="relative z-10" />
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 5px 15px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-lg hover:bg-purple-500/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative z-10">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-purple-500/20 rounded-b-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ 
                    x: 5,
                    backgroundColor: "rgba(139, 92, 246, 0.1)",
                    boxShadow: "0 5px 15px rgba(139, 92, 246, 0.2)"
                  }}
                  className="w-full text-left text-gray-300 hover:text-white transition-all duration-300 block px-4 py-3 flex items-center gap-3 rounded-lg relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
                  <item.icon size={16} className="relative z-10" />
                  <span className="relative z-10">{item.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;