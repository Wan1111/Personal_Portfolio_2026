import { FaCode, FaDatabase, FaCloud, FaTools, FaLaptopCode } from 'react-icons/fa'
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiMysql, SiPhp, SiZoho, SiNodedotjs, SiGit, SiGithub } from 'react-icons/si'
import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'

const Scene3D = lazy(() => import('./3D/Scene3D'))
const Interactive3D = lazy(() => import('./3D/Interactive3D'))

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FaCode,
      skills: [
        { name: 'JavaScript', icon: SiJavascript, level: 85 },
        { name: 'HTML5', icon: SiHtml5, level: 90 },
        { name: 'CSS3', icon: SiCss3, level: 85 },
        { name: 'PHP', icon: SiPhp, level: 75 },
        { name: 'Node.js', icon: SiNodedotjs, level: 70 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: FaLaptopCode,
      skills: [
        { name: 'React', icon: SiReact, level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vite', level: 75 }
      ]
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: [
        { name: 'MySQL', icon: SiMysql, level: 80 },
        { name: 'Database Design', level: 75 },
        { name: 'Data Management', level: 80 }
      ]
    },
    {
      title: 'Tools & Software',
      icon: FaTools,
      skills: [
        { name: 'ZOHO CRM', icon: SiZoho, level: 85 },
        { name: 'Git', icon: SiGit, level: 80 },
        { name: 'GitHub', icon: SiGithub, level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'System Design', level: 80 }
      ]
    },
    {
      title: 'Cloud & Deployment',
      icon: FaCloud,
      skills: [
        { name: 'Netlify', level: 75 },
        { name: 'Vercel', level: 70 },
        { name: 'API Integration', level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* 3D Interactive Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
        <Suspense fallback={<div className="w-full h-full" />}>
          <Scene3D>
            <Interactive3D />
          </Scene3D>
        </Suspense>
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
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIdx) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={categoryIdx}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    className="bg-primary-600 p-3 rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CategoryIcon className="text-white text-xl" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => {
                    const SkillIcon = skill.icon
                    return (
                      <motion.div
                        key={skillIdx}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: skillIdx * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {SkillIcon && (
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.5 }}
                              >
                                <SkillIcon className="text-primary-600 dark:text-primary-400 text-lg" />
                              </motion.div>
                            )}
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="bg-primary-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIdx * 0.1 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
