import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const menuItems = ['Home', 'Features', 'Portfolio', 'Process', 'Products', 'Awards', 'Testimonials', 'Contact']

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      animate={{ y: scrolled ? 0 : -100, opacity: scrolled ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className={`text-2xl font-heading font-bold transition-smooth ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          InnoTech
        </motion.a>
        <div className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-lg font-semibold transition-smooth ${
                scrolled ? 'text-text hover:text-primary' : 'text-white hover:text-accent'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="lg:hidden">
          <button
            className={`p-2 rounded-md ${
              scrolled ? 'text-text hover:text-primary' : 'text-white hover:text-accent'
            } focus:outline-none transition-smooth`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-text hover:text-primary transition-smooth"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
