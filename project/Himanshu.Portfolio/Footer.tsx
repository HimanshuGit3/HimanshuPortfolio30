import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/himanshusingh300/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/HimanshuGit3',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:himanshu300.singh@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-white">
                  <span className="text-purple-400">Himanshu</span> Kumar Singh
                </h3>
                <p className="text-gray-400 max-w-md">
                  Aspiring DevOps Engineer passionate about automation, cloud computing, and 
                  building efficient CI/CD pipelines. Ready to contribute to innovative projects 
                  and drive business success through technology.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 bg-gray-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-300`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <nav className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <motion.button
                      key={index}
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
                <div className="space-y-2">
                  <p className="text-gray-400">
                    📧 himanshu300.singh@gmail.com
                  </p>
                  <p className="text-gray-400">
                    📍 India
                  </p>
                  <p className="text-gray-400">
                    💼 Open to opportunities
                  </p>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for hire</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-gray-400"
            >
              <span>© {currentYear} Himanshu Kumar Singh. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="text-red-400" size={16} fill="currentColor" />
              </motion.div>
              <span>and lots of ☕</span>
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 px-4 py-2 rounded-lg text-purple-400 hover:text-purple-300 transition-all duration-300"
            >
              <ArrowUp size={16} />
              Back to Top
            </motion.button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-purple-400/10 text-8xl"
              initial={{ 
                x: Math.random() * 100,
                y: Math.random() * 100,
                rotate: 0
              }}
              animate={{
                x: Math.random() * 200,
                y: Math.random() * 200,
                rotate: 360
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {['⚙️', '☁️', '🚀'][i]}
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;