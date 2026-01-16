import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'
import OptimizedImage from './OptimizedImage'

const About = () => {

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-10 pointer-events-none">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Images with 3D Effect */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Single Prominent Profile Image */}
            <div className="mb-6">
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image Container with Border */}
                <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-inner">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <OptimizedImage
                      src="/images/profile-1.jpg"
                      alt="Juan IV R. Magarro - Information Technology Professional"
                      className="w-full h-full"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </motion.div>
                  
                  {/* Elegant Overlay Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Name Badge */}
                  <motion.div
                    className="absolute bottom-6 left-6 right-6 z-10"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20">
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        Juan IV R. Magarro
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm md:text-base">
                        Information Technology Professional
                      </p>
                      <div className="mt-2 flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400">
                        <span>📍 Antipolo, Rizal</span>
                        <span>•</span>
                        <span>🎓 BS Information Technology</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full"></div>
                  <div className="absolute top-8 right-8 w-8 h-8 border-2 border-primary-400/50 rounded-full"></div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl p-8 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Information Technology Professional
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm Juan IV R. Magarro, an Information Technology professional passionate about 
                creating innovative solutions and building impactful digital experiences. With a 
                strong foundation in software development and system design, I bring technical 
                expertise and creative problem-solving to every project.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My work focuses on developing efficient, scalable systems that solve real-world 
                problems. I'm committed to continuous learning and staying current with the latest 
                technologies and best practices in the field.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  className="bg-primary-600 p-3 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaGraduationCap className="text-white text-xl" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                  <p className="text-gray-700 dark:text-gray-300">Bachelor of Science in Information Technology</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  className="bg-primary-600 p-3 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaMapMarkerAlt className="text-white text-xl" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    #27 Dao St. Town and Country Executive Village
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  className="bg-primary-600 p-3 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Focus Areas</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Software Development • System Design • Library Management Systems
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
