import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Code,
  Cloud,
  Settings
} from 'lucide-react';

const WhyHireMe: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: Zap,
      title: 'Rapid Learning & Adaptation',
      description: 'Quick to learn new technologies and adapt to changing requirements in fast-paced environments.',
      highlight: 'Future-Ready Skills'
    },
    {
      icon: Target,
      title: 'Goal-Oriented Approach',
      description: 'Focused on delivering measurable results and achieving project objectives efficiently.',
      highlight: 'Results-Driven'
    },
    {
      icon: Users,
      title: 'Collaboration & Communication',
      description: 'Strong teamwork skills with the ability to bridge technical and non-technical stakeholders.',
      highlight: 'Team Player'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'Continuously improving and staying updated with the latest DevOps trends and best practices.',
      highlight: 'Always Learning'
    }
  ];

  const devopsFlow = [
    { step: 'Plan', icon: '📋', description: 'Requirements analysis and project planning' },
    { step: 'Code', icon: '💻', description: 'Development with version control best practices' },
    { step: 'Build', icon: '🔧', description: 'Automated build and testing processes' },
    { step: 'Test', icon: '🧪', description: 'Comprehensive testing and quality assurance' },
    { step: 'Deploy', icon: '🚀', description: 'Automated deployment to production' },
    { step: 'Monitor', icon: '📊', description: 'Continuous monitoring and feedback' }
  ];

  const skills = [
    { name: 'Infrastructure as Code', level: 85 },
    { name: 'CI/CD Pipelines', level: 90 },
    { name: 'Cloud Platforms', level: 80 },
    { name: 'Container Orchestration', level: 85 },
    { name: 'Monitoring & Logging', level: 75 },
    { name: 'Security & Compliance', level: 70 }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="why-hire-me" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why <span className="text-purple-400">Hire Me</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I bring dedication, modern DevOps expertise, and a passion for automating and optimizing 
            infrastructure to drive your business forward.
          </p>
        </motion.div>

        {/* Main Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 mb-16"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Your Next DevOps Team Member
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              As an aspiring DevOps engineer, I combine fresh perspectives with solid technical foundations. 
              I'm passionate about creating efficient CI/CD pipelines, managing cloud infrastructure, and 
              implementing automation that reduces manual overhead while increasing reliability and scalability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Code className="text-purple-400" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Modern Tools</h4>
                <p className="text-gray-400">Latest DevOps technologies and best practices</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Cloud className="text-purple-400" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Cloud Native</h4>
                <p className="text-gray-400">AWS, containerization, and microservices</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Settings className="text-purple-400" size={32} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Automation</h4>
                <p className="text-gray-400">Infrastructure as Code and CI/CD pipelines</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Strengths */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 rounded-lg p-3">
                  <reason.icon className="text-purple-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
                      {reason.highlight}
                    </span>
                  </div>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* DevOps Process Understanding */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            DevOps <span className="text-purple-400">Process Expertise</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsFlow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.step}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Core <span className="text-purple-400">Competencies</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                  <span className="text-purple-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Build Amazing Things Together?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can contribute to your DevOps initiatives and help streamline 
              your development and deployment processes.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-white font-semibold shadow-lg transition-all duration-300"
            >
              Let's Connect
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMe;