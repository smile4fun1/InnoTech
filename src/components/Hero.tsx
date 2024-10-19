import { motion, useReducedMotion } from 'framer-motion'
import './Hero.css' // Import the CSS file for custom styles

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()

  const handleGetStarted = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div id="home" className="relative h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 aurora-effect"></div>
      {/* Mobile background image */}
      <div className="absolute inset-0 bg-cover bg-center md:hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-7xl font-heading font-bold mb-4 text-white text-shadow"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Innovate. Transform. Succeed.
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-6 md:mb-8 text-white text-shadow"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            Empowering businesses with cutting-edge technology solutions.
          </motion.p>
          <motion.button
            className="bg-accent text-primary px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-bold hover:bg-opacity-90 transition-smooth hover:shadow-lg transform hover:-translate-y-1"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            onClick={handleGetStarted}
          >
            Get Started
          </motion.button>
        </div>
      </div>
      {!shouldReduceMotion && (
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 text-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <a href="#features" className="text-white text-3xl md:text-4xl inline-block">↓</a>
        </motion.div>
      )}
    </div>
  )
}

export default Hero
