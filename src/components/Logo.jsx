import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

const Logo = ({ className = '', isScrolled = false, isDark = false }) => {
  return (
    <motion.a
      href="#home"
      className={`flex items-center space-x-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* New Modern Logo Design */}
      <motion.div
        className="relative"
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo Container */}
        <div className={`relative w-12 h-12 rounded-xl ${
          isScrolled 
            ? isDark ? 'bg-gradient-to-br from-primary-500 to-primary-700' : 'bg-gradient-to-br from-primary-600 to-primary-800'
            : 'bg-gradient-to-br from-white to-primary-50'
        } flex items-center justify-center shadow-lg overflow-hidden`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)`,
              backgroundSize: '200% 200%'
            }}></div>
          </div>
          
          {/* Code Icon */}
          <FaCode 
            className={`text-2xl ${
              isScrolled 
                ? 'text-white' 
                : 'text-primary-600'
            } relative z-10`}
          />
          
          {/* Accent Line */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-1 ${
              isScrolled 
                ? 'bg-white/50' 
                : 'bg-primary-600'
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
        
        {/* Glow Effect */}
        <motion.div
          className={`absolute inset-0 rounded-xl ${
            isScrolled 
              ? isDark ? 'bg-primary-400' : 'bg-primary-500'
              : 'bg-primary-400'
          } opacity-0 blur-xl`}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <motion.span
          className={`text-xl font-bold leading-tight ${
            isScrolled 
              ? isDark ? 'text-primary-300' : 'text-primary-600'
              : 'text-white'
          }`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Juan Magarro
        </motion.span>
        <motion.span
          className={`text-xs font-medium ${
            isScrolled 
              ? isDark ? 'text-gray-400' : 'text-gray-600'
              : 'text-primary-200'
          }`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          IT Professional
        </motion.span>
      </div>
    </motion.a>
  )
}

export default Logo
