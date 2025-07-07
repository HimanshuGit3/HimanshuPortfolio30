import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Server, 
  Cloud, 
  Container, 
  GitBranch, 
  Settings, 
  Code, 
  Terminal,
  Workflow,
  Shield,
  Database
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Linux', icon: Terminal, level: 85, color: 'from-orange-400 to-red-500' },
    { name: 'Docker', icon: Container, level: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'Kubernetes', icon: Settings, level: 75, color: 'from-purple-400 to-pink-500' },
    { name: 'AWS', icon: Cloud, level: 80, color: 'from-yellow-400 to-orange-500' },
    { name: 'Git & GitHub', icon: GitBranch, level: 95, color: 'from-green-400 to-emerald-500' },
    { name: 'Jenkins', icon: Workflow, level: 85, color: 'from-indigo-400 to-purple-500' },
    { name: 'Ansible', icon: Server, level: 70, color: 'from-red-400 to-pink-500' },
    { name: 'Python', icon: Code, level: 80, color: 'from-blue-400 to-green-500' },
    { name: 'Shell Scripting', icon: Terminal, level: 85, color: 'from-gray-400 to-gray-600' },
    { name: 'CI/CD', icon: Workflow, level: 90, color: 'from-purple-400 to-blue-500' },
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
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building expertise in modern DevOps tools and technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-20`}>
                  <skill.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* DevOps Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            DevOps <span className="text-purple-400">Workflow</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Plan', icon: '📋', desc: 'Project planning and requirements' },
              { title: 'Code', icon: '💻', desc: 'Development and version control' },
              { title: 'Build', icon: '🔧', desc: 'CI/CD pipeline automation' },
              { title: 'Deploy', icon: '🚀', desc: 'Container orchestration' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;