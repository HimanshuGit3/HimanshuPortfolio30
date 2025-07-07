import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Aspiring DevOps Engineer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <motion.div 
                  className="block relative overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <motion.span 
                    className="text-purple-400 inline-block relative"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, type: "spring", bounce: 0.4 }}
                    style={{
                      textShadow: "0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)",
                      filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))"
                    }}
                  >
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-20 blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="relative z-10">Himanshu</span>
                  </motion.span>
                </motion.div>
                
                <motion.div 
                  className="block relative overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.span 
                    className="bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent inline-block relative"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.4 }}
                    style={{
                      backgroundSize: "200% 200%",
                      filter: "drop-shadow(0 0 15px rgba(139, 92, 246, 0.3))"
                    }}
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-10 blur-lg"
                      animate={{
                        x: ["-100%", "100%"],
                        opacity: [0.1, 0.3, 0.1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <motion.span
                      className="relative z-10"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        background: "linear-gradient(90deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6)",
                        backgroundSize: "300% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}
                    >
                      Kumar Singh
                    </motion.span>
                  </motion.span>
                </motion.div>
              </h1>
              
              {/* Typing Effect for Role */}
              <motion.div 
                className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light h-12 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="relative">
                  {typedText}
                  <motion.span
                    className="inline-block w-0.5 h-8 bg-purple-400 ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  {/* Typing sound effect visual */}
                  <motion.div
                    className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                    animate={{ 
                      scale: typedText.length > 0 ? [1, 1.2, 1] : 1,
                      opacity: typedText.length > 0 ? [0.5, 1, 0.5] : 0
                    }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  </motion.div>
                </span>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl"
            >
              Aspiring DevOps Engineer with expertise in cloud computing, containerization, and automation. 
              Dedicated to building scalable infrastructure, implementing CI/CD pipelines, and optimizing 
              system performance to drive business success and innovation.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-white font-semibold shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
                <motion.div
                  className="group-hover:rotate-12 transition-transform duration-300 relative z-10"
                  whileHover={{ rotate: 180 }}
                >
                  <Download size={16} />
                </motion.div>
              </motion.button>

              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/himanshusingh300/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.15, 
                    boxShadow: "0 15px 35px rgba(139, 92, 246, 0.5)",
                    backgroundColor: "rgba(139, 92, 246, 0.3)",
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-400 hover:text-white transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Linkedin size={24} className="relative z-10" />
                </motion.a>
                <motion.a
                  href="https://github.com/HimanshuGit3"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.15, 
                    boxShadow: "0 15px 35px rgba(139, 92, 246, 0.5)",
                    backgroundColor: "rgba(139, 92, 246, 0.3)",
                    rotate: -5
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-400 hover:text-white transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Github size={24} className="relative z-10" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5
              }}
              className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]"
              style={{ perspective: "1000px" }}
            >
              {/* Animated border with glow effect */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 to-purple-500 p-1 shadow-2xl"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))"
                }}
              >
                <div className="w-full h-full rounded-3xl bg-gray-900"></div>
              </motion.div>
              
              {/* Profile Image */}
              <motion.div 
                className="absolute inset-3 rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl"
                whileHover={{
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
                }}
              >
                <img
                  src="/public/WhatsApp Image 2025-07-07 at 4.55.42 PM-Photoroom.png"
                  alt="Himanshu Kumar Singh"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
              </motion.div>

              {/* Floating tech elements */}
              <motion.div
                animate={{ 
                  y: [-15, 15, -15],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-purple-600/20 backdrop-blur-sm p-4 rounded-2xl border border-purple-500/30 shadow-lg"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white font-bold">
                  K8s
                </div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [15, -15, 15],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-purple-600/20 backdrop-blur-sm p-4 rounded-2xl border border-purple-500/30 shadow-lg"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold">
                  AWS
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  x: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-purple-600/20 backdrop-blur-sm p-3 rounded-xl border border-purple-500/30 shadow-lg"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-md flex items-center justify-center text-white text-xs font-bold">
                  CI
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-purple-400"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;