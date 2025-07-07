import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Zap, Code, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Target,
      title: 'Focused Learning',
      description: 'Dedicated to mastering DevOps practices and cloud technologies',
    },
    {
      icon: Zap,
      title: 'Automation Enthusiast',
      description: 'Passionate about automating workflows and improving efficiency',
    },
    {
      icon: Code,
      title: 'Technical Growth',
      description: 'Continuously expanding knowledge in containerization and CI/CD',
    },
    {
      icon: Globe,
      title: 'Cloud Native',
      description: 'Building expertise in AWS and cloud-native solutions',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">My DevOps Journey</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My journey into the world of DevOps began with a fascination for bridging the gap between 
                development and operations. I'm passionate about creating efficient, scalable, and reliable 
                systems that enable teams to deliver high-quality software faster.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Currently, I'm focused on mastering cloud technologies, containerization with Docker and 
                Kubernetes, and implementing robust CI/CD pipelines. My goal is to become a skilled DevOps 
                engineer who can drive innovation and efficiency in software delivery.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I believe in continuous learning and staying updated with the latest industry trends and 
                best practices. Every day brings new challenges and opportunities to grow in this 
                ever-evolving field.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg">
                    <highlight.icon className="text-purple-400" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white">{highlight.title}</h4>
                </div>
                <p className="text-gray-400">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;