import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink, BookOpen } from 'lucide-react';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: 'Expected 2024',
      status: 'In Progress',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Comprehensive AWS cloud architecture and services certification',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'RDS', 'Lambda'],
      credentialId: 'AWS-SA-2024-001',
      link: '#'
    },
    {
      id: 2,
      title: 'Docker Certified Associate',
      organization: 'Docker Inc.',
      date: 'Expected 2024',
      status: 'Planned',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Container technology and orchestration certification',
      skills: ['Docker', 'Containers', 'Docker Compose', 'Swarm', 'Registry'],
      credentialId: 'DCA-2024-002',
      link: '#'
    },
    {
      id: 3,
      title: 'Kubernetes Administrator (CKA)',
      organization: 'Cloud Native Computing Foundation',
      date: 'Expected 2024',
      status: 'Planned',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Kubernetes cluster administration and management',
      skills: ['Kubernetes', 'kubectl', 'Pods', 'Services', 'Deployments', 'RBAC'],
      credentialId: 'CKA-2024-003',
      link: '#'
    },
    {
      id: 4,
      title: 'Jenkins Engineer',
      organization: 'CloudBees',
      date: 'Expected 2024',
      status: 'Planned',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'CI/CD pipeline design and implementation with Jenkins',
      skills: ['Jenkins', 'Pipeline', 'Groovy', 'Plugins', 'Build Automation'],
      credentialId: 'JE-2024-004',
      link: '#'
    },
    {
      id: 5,
      title: 'Terraform Associate',
      organization: 'HashiCorp',
      date: 'Expected 2024',
      status: 'Planned',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Infrastructure as Code with Terraform',
      skills: ['Terraform', 'HCL', 'Providers', 'State Management', 'Modules'],
      credentialId: 'TF-2024-005',
      link: '#'
    },
    {
      id: 6,
      title: 'Red Hat Certified Engineer',
      organization: 'Red Hat',
      date: 'Expected 2024',
      status: 'Planned',
      image: 'https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Advanced Linux system administration and automation',
      skills: ['RHEL', 'Ansible', 'System Administration', 'Automation', 'Security'],
      credentialId: 'RHCE-2024-006',
      link: '#'
    },
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400';
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-400';
      case 'Planned':
        return 'bg-purple-500/20 text-purple-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-purple-400">Certifications</span> & Learning Path
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development in DevOps technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(cert.status)}`}>
                    {cert.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-purple-600/20 backdrop-blur-sm p-2 rounded-lg">
                    <Award className="text-purple-400" size={24} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-purple-400 font-medium mb-2">{cert.organization}</p>
                <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-md text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    ID: {cert.credentialId}
                  </div>
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>View</span>
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">6+</h3>
            <p className="text-gray-400">Certifications Planned</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">1</h3>
            <p className="text-gray-400">In Progress</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">2024</h3>
            <p className="text-gray-400">Target Year</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;