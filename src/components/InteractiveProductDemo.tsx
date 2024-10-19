import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRocket, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useSwipeable } from 'react-swipeable'

const products = [
  {
    name: 'AI-Powered Analytics',
    description: 'Harness the power of artificial intelligence to gain deep insights from your data.',
    icon: FaRocket,
    features: [
      'Real-time data processing',
      'Predictive analytics',
      'Custom dashboards',
      'Anomaly detection'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Secure Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions to power your business applications.',
    icon: FaRocket,
    features: [
      'Multi-region deployment',
      'Auto-scaling',
      'Disaster recovery',
      '24/7 monitoring'
    ],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'IoT Platform',
    description: 'Connect and manage your IoT devices with our comprehensive platform.',
    icon: FaRocket,
    features: [
      'Device management',
      'Data visualization',
      'Edge computing support',
      'API integration'
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
]

const InteractiveProductDemo: React.FC = () => {
  const [currentProduct, setCurrentProduct] = useState(0)

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length)
  }

  const handlers = useSwipeable({
    onSwipedLeft: nextProduct,
    onSwipedRight: prevProduct,
    trackMouse: true
  })

  const product = products[currentProduct]

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Products
        </motion.h2>
        <div className="relative" {...handlers}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct}
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full max-w-md mb-8">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-serif font-bold mb-4 flex items-center justify-center">
                  <product.icon className="mr-4 text-accent" />
                  {product.name}
                </h3>
                <p className="text-xl mb-6">{product.description}</p>
                <ul className="mb-8 text-left">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <FaRocket className="text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="bg-accent text-primary px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-smooth"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="hidden md:flex justify-between mt-8">
            <motion.button 
              onClick={prevProduct} 
              className="bg-white text-primary p-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft className="text-xl" />
            </motion.button>
            <motion.button 
              onClick={nextProduct} 
              className="bg-white text-primary p-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight className="text-xl" />
            </motion.button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                index === currentProduct ? 'bg-white scale-125' : 'bg-white bg-opacity-30'
              }`}
              onClick={() => setCurrentProduct(index)}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InteractiveProductDemo
