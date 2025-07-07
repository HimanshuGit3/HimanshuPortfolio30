import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ExternalLink, Tag, ArrowRight } from 'lucide-react';

const Blogs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogs = [
    {
      id: 1,
      title: 'Getting Started with Docker: A Beginner\'s Guide',
      excerpt: 'Learn the fundamentals of containerization with Docker, from basic concepts to creating your first container.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Docker', 'Containers', 'DevOps'],
      category: 'Tutorial',
      link: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Kubernetes Deployment Strategies Explained',
      excerpt: 'Explore different deployment strategies in Kubernetes including rolling updates, blue-green, and canary deployments.',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-08',
      readTime: '12 min read',
      tags: ['Kubernetes', 'Deployment', 'CI/CD'],
      category: 'Best Practices',
      link: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Building CI/CD Pipelines with Jenkins',
      excerpt: 'Step-by-step guide to creating robust CI/CD pipelines using Jenkins for automated testing and deployment.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-01',
      readTime: '15 min read',
      tags: ['Jenkins', 'CI/CD', 'Automation'],
      category: 'Tutorial',
      link: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Infrastructure as Code with Terraform',
      excerpt: 'Learn how to manage your infrastructure using Terraform for scalable and maintainable cloud resources.',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023-12-25',
      readTime: '10 min read',
      tags: ['Terraform', 'IaC', 'AWS'],
      category: 'Guide',
      link: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Monitoring and Logging in DevOps',
      excerpt: 'Best practices for implementing monitoring and logging solutions using Prometheus, Grafana, and ELK stack.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023-12-18',
      readTime: '14 min read',
      tags: ['Monitoring', 'Logging', 'Prometheus', 'Grafana'],
      category: 'Best Practices',
      link: '#',
      featured: false
    },
    {
      id: 6,
      title: 'AWS Security Best Practices for DevOps',
      excerpt: 'Essential security practices when working with AWS services in a DevOps environment.',
      image: 'https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023-12-11',
      readTime: '11 min read',
      tags: ['AWS', 'Security', 'DevOps'],
      category: 'Security',
      link: '#',
      featured: false
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

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const regularBlogs = blogs.filter(blog => !blog.featured);

  return (
    <section id="blogs" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DevOps <span className="text-purple-400">Blogs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing knowledge and insights about DevOps practices, tools, and technologies
          </p>
        </motion.div>

        {/* Featured Blogs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-purple-400">⭐</span>
            Featured Articles
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {featuredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                      {blog.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                      Featured
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{blog.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-md text-xs flex items-center gap-1"
                      >
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Regular Blogs */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">All Articles</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm text-white rounded-full text-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-2">{blog.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded-md text-xs">
                        +{blog.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <motion.a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                  >
                    Read Article
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">6</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Articles Published</h3>
            <p className="text-gray-400">DevOps knowledge sharing</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Featured Posts</h3>
            <p className="text-gray-400">Most popular articles</p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Categories</h3>
            <p className="text-gray-400">Tutorial, Guide, Best Practices</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;