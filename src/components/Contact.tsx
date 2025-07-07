import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Send,
  ExternalLink
} from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'himanshu.devops@example.com',
      link: 'mailto:himanshu.devops@example.com',
      description: 'Send me an email'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Himanshu Kumar Singh',
      link: 'https://www.linkedin.com/in/himanshusingh300/',
      description: 'Connect with me'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'HimanshuGit3',
      link: 'https://github.com/HimanshuGit3',
      description: 'View my projects'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      link: '#',
      description: 'Available for remote work'
    }
  ];

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
      url: 'mailto:himanshu.devops@example.com',
      color: 'hover:text-red-400'
    }
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
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to discuss DevOps opportunities, collaboration, or just want to connect? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="text-purple-400" size={24} />
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities in DevOps, cloud computing, 
                and automation. Whether you have a project in mind, want to collaborate, or 
                just want to chat about DevOps best practices, feel free to reach out!
              </p>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-6"
              >
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(139, 92, 246, 0.2)"
                    }}
                    className="group"
                  >
                    <motion.a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-purple-600/20 p-3 rounded-lg group-hover:bg-purple-600/30 transition-all duration-300">
                        <item.icon className="text-purple-400" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                        <p className="text-purple-400 font-medium">{item.value}</p>
                      </div>
                      {item.link.startsWith('http') && (
                        <ExternalLink className="text-gray-400 group-hover:text-purple-400 transition-colors" size={16} />
                      )}
                    </motion.a>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gray-700/50 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:bg-purple-600/20`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Quick Message</h3>
            <p className="text-gray-300 mb-8">
              Prefer to send a quick message? Use the contact details above or connect with me 
              on LinkedIn for the fastest response. I typically respond within 24 hours.
            </p>

            {/* Quick Contact Options */}
            <div className="space-y-4">
              <motion.a
                href="mailto:himanshu.devops@example.com"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 w-full p-4 bg-purple-600/20 border border-purple-500/30 rounded-lg hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300 text-white"
              >
                <Mail size={20} />
                <span>Send Email</span>
                <ExternalLink size={16} className="ml-auto" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/himanshusingh300/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 w-full p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-300 text-white"
              >
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
                <ExternalLink size={16} className="ml-auto" />
              </motion.a>
              
              <motion.a
                href="https://github.com/HimanshuGit3"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(107, 114, 128, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 w-full p-4 bg-gray-600/20 border border-gray-500/30 rounded-lg hover:bg-gray-600/30 hover:border-gray-500/50 transition-all duration-300 text-white"
              >
                <Github size={20} />
                <span>View GitHub Profile</span>
                <ExternalLink size={16} className="ml-auto" />
              </motion.a>
            </div>

            {/* Availability Status */}
            <div className="mt-8 p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available for opportunities</span>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                Currently seeking DevOps roles and open to freelance projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate and build efficient, scalable DevOps solutions together.
            </p>
            <motion.a
              href="mailto:himanshu.devops@example.com"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-white font-semibold shadow-lg transition-all duration-300"
            >
              <Send size={20} />
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;