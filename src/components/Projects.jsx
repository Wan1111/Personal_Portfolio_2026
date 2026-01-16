import { FaCode, FaDatabase, FaBook, FaCloud, FaLaptopCode, FaMobileAlt, FaServer, FaChartLine } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'ZOHO CRM',
      description: 'Implemented and customized ZOHO CRM solutions for businesses to manage customer relationships, sales pipelines, and automate workflows. Configured custom modules, workflows, and integrations to optimize business processes.',
      type: 'CRM Implementation',
      icon: FaCloud,
      technologies: ['ZOHO CRM', 'Sales Automation', 'Workflow Configuration', 'Custom Modules', 'API Integration'],
      features: [
        'CRM system implementation and customization',
        'Sales pipeline management',
        'Automated workflow configuration',
        'Custom module development',
        'Third-party integrations',
        'Data migration and management'
      ]
    },
    {
      title: 'EreDocs',
      description: 'A comprehensive Library Management System designed to streamline library operations, manage book inventory, and enhance user experience for both librarians and patrons.',
      type: 'Library System',
      icon: FaBook,
      technologies: ['Information Technology', 'System Design', 'Database Management', 'Web Development'],
      features: [
        'Book inventory management',
        'User management system',
        'Borrowing and return tracking',
        'Search and catalog functionality'
      ]
    },
    {
      title: 'Web Application Development',
      description: 'Developed responsive web applications using modern frameworks and technologies. Built user-friendly interfaces with focus on performance, accessibility, and user experience.',
      type: 'Web Development',
      icon: FaLaptopCode,
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
      features: [
        'Responsive design implementation',
        'Component-based architecture',
        'State management',
        'API integration',
        'Performance optimization',
        'Cross-browser compatibility'
      ]
    },
    {
      title: 'Database Management System',
      description: 'Designed and implemented database solutions for various applications. Created efficient data structures, optimized queries, and ensured data integrity and security.',
      type: 'Database System',
      icon: FaDatabase,
      technologies: ['MySQL', 'Database Design', 'SQL', 'Data Modeling', 'Query Optimization'],
      features: [
        'Database schema design',
        'Query optimization',
        'Data migration',
        'Backup and recovery',
        'Security implementation',
        'Performance tuning'
      ]
    },
    {
      title: 'Business Process Automation',
      description: 'Created automated solutions to streamline business processes, reduce manual work, and improve efficiency. Integrated various systems and tools to create seamless workflows.',
      type: 'Automation',
      icon: FaChartLine,
      technologies: ['Process Automation', 'System Integration', 'Workflow Design', 'API Development'],
      features: [
        'Workflow automation',
        'System integration',
        'Process optimization',
        'Reporting and analytics',
        'Error handling',
        'Documentation'
      ]
    },
    {
      title: 'Mobile-Responsive Solutions',
      description: 'Developed mobile-first applications and responsive web solutions that work seamlessly across all devices. Ensured optimal user experience on smartphones, tablets, and desktops.',
      type: 'Mobile Development',
      icon: FaMobileAlt,
      technologies: ['Responsive Design', 'Mobile Optimization', 'Progressive Web Apps', 'Cross-platform'],
      features: [
        'Mobile-first design',
        'Touch-friendly interfaces',
        'Performance optimization',
        'Offline functionality',
        'App-like experience',
        'Device compatibility'
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute bottom-20 left-10 w-96 h-96 opacity-10 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-primary-600 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my work and contributions to innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div
                      className="bg-primary-100 dark:bg-primary-900 p-4 rounded-xl group-hover:bg-primary-600 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-primary-600 dark:text-primary-400 group-hover:text-white text-2xl transition-colors" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full">
                          {project.type}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                          Key Features
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                              <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
