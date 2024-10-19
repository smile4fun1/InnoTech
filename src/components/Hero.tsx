import { motion } from 'framer-motion'

const Hero = () => {
  const handleGetStarted = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id="home" className="relative h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-heading font-bold mb-4 text-white text-shadow"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Innovate. Transform. Succeed.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white text-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering businesses with cutting-edge technology solutions.
          </motion.p>
          <motion.button
            className="bg-accent text-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-smooth hover:shadow-lg transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
          >
            Get Started
          </motion.button>
        </div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full text-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#features" className="text-white text-4xl inline-block">↓</a>
      </motion.div>
    </div>
  )
}

export default Hero
