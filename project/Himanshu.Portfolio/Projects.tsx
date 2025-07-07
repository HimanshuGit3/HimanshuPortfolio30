import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, X, Calendar, Users, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Kubernetes Cluster Deployment',
      description: 'Automated Kubernetes cluster setup with monitoring and logging',
      detailDescription: 'A comprehensive Kubernetes cluster deployment solution using Infrastructure as Code principles. This project includes automated provisioning, monitoring with Prometheus and Grafana, centralized logging with ELK stack, and automated backups. The setup is designed for production workloads with high availability and security best practices.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Grafana'],
      github: 'https://github.com/HimanshuGit3',
      live: '#',
      status: 'Completed',
      duration: '3 months',
      team: 'Solo Project',
      highlights: [
        'Automated cluster provisioning with Terraform',
        'Implemented monitoring and alerting',
        'Set up centralized logging system',
        'Configured automated backups',
        'Security hardening and RBAC'
      ]
    },
    {
      id: 2,
      title: 'CI/CD Pipeline with Jenkins',
      description: 'Complete CI/CD pipeline for microservices architecture',
      detailDescription: 'A robust CI/CD pipeline built with Jenkins for a microservices-based application. The pipeline includes automated testing, security scanning, container image building, and deployment to multiple environments. Features blue-green deployment strategy and automated rollback capabilities.',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Jenkins', 'Docker', 'Git', 'SonarQube', 'Nexus'],
      github: 'https://github.com/HimanshuGit3',
      live: '#',
      status: 'In Progress',
      duration: '2 months',
      team: 'Team of 3',
      highlights: [
        'Multi-branch pipeline configuration',
        'Automated testing and quality gates',
        'Security scanning integration',
        'Blue-green deployment strategy',
        'Automated rollback mechanism'
      ]
    },
    {
      id: 3,
      title: 'AWS Infrastructure Automation',
      description: 'Infrastructure as Code using Terraform and AWS services',
      detailDescription: 'Complete AWS infrastructure automation using Terraform for a scalable web application. Includes VPC setup, auto-scaling groups, load balancers, RDS database, and S3 storage. The infrastructure is designed for high availability across multiple availability zones.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Terraform', 'AWS', 'CloudFormation', 'Route53', 'CloudWatch'],
      github: 'https://github.com/HimanshuGit3',
      live: '#',
      status: 'Completed',
      duration: '4 months',
      team: 'Solo Project',
      highlights: [
        'Multi-environment infrastructure setup',
        'Auto-scaling and load balancing',
        'Database replication and backups',
        'CDN integration for performance',
        'Cost optimization strategies'
      ]
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing my DevOps projects and infrastructure automation work
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <X size={24} />
                        </button>
                      </div>

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Project Details</h4>
                          <div className="space-y-2 text-gray-400">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>Duration: {project.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users size={16} />
                              <span>Team: {project.team}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star size={16} />
                              <span>Status: {project.status}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-md text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                        <p className="text-gray-400 leading-relaxed">{project.detailDescription}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-400">
                              <span className="text-purple-400 mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-white transition-colors"
                        >
                          <Github size={20} />
                          View Code
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white transition-colors"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </motion.a>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;