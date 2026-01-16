import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import Logo from './Logo'

const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  // Determine text colors based on scroll and theme
  const getTextColor = () => {
    if (!isScrolled) return 'text-white'
    return isDark ? 'text-gray-100' : 'text-gray-900'
  }

  const getNavTextColor = () => {
    if (!isScrolled) return 'text-white hover:text-primary-300'
    return isDark 
      ? 'text-gray-300 hover:text-primary-400' 
      : 'text-gray-700 hover:text-primary-600'
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark 
            ? 'bg-gray-900 shadow-lg py-4 border-b border-gray-800' 
            : 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo isScrolled={isScrolled} isDark={isDark} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${getNavTextColor()}`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle - Desktop */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? isDark
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Theme Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? isDark
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            
            {/* Burger Menu Button */}
            <button
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? isDark
                    ? 'text-gray-100 hover:bg-gray-800'
                    : 'text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-4 ${
            isScrolled 
              ? isDark ? 'bg-gray-900' : 'bg-white'
              : 'bg-gray-900/95 backdrop-blur-sm'
          } rounded-lg p-4 -mx-4 sm:-mx-6`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block font-medium transition-colors ${
                  isScrolled
                    ? isDark
                      ? 'text-gray-300 hover:text-primary-400'
                      : 'text-gray-700 hover:text-primary-600'
                    : 'text-gray-300 hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
