import { motion } from 'framer-motion'

const Logo = ({ className = '', isScrolled = false, isDark = false }) => {
  return (
    <motion.a
      href="#home"
      className={`flex items-center space-x-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Logo Icon */}
      <motion.div
        className="relative"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className={`w-10 h-10 rounded-lg ${
          isScrolled 
            ? isDark ? 'bg-primary-500' : 'bg-primary-600'
            : 'bg-white'
        } flex items-center justify-center shadow-lg`}>
          <span className={`text-xl font-bold ${
            isScrolled 
              ? isDark ? 'text-white' : 'text-white'
              : 'text-primary-600'
          }`}>
            JM
          </span>
        </div>
        {/* Animated ring */}
        <motion.div
          className={`absolute inset-0 rounded-lg border-2 ${
            isScrolled 
              ? isDark ? 'border-primary-400' : 'border-primary-500'
              : 'border-white'
          }`}
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <span className={`text-xl font-bold leading-tight ${
          isScrolled 
            ? isDark ? 'text-primary-400' : 'text-primary-600'
            : 'text-white'
        }`}>
          Juan Magarro
        </span>
        <span className={`text-xs font-medium ${
          isScrolled 
            ? isDark ? 'text-gray-400' : 'text-gray-600'
            : 'text-primary-200'
        }`}>
          IT Professional
        </span>
      </div>
    </motion.a>
  )
}

export default Logo
