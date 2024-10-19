import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useSwipeable } from 'react-swipeable'

interface Product {
  id: number
  title: string
  description: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization with predictive insights for informed decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 2,
    title: "Smart IoT Management System",
    description: "Centralized control for all your IoT devices with advanced automation capabilities.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 3,
    title: "Secure Cloud Storage Solution",
    description: "Enterprise-grade cloud storage with end-to-end encryption and seamless integration.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
]

const InteractiveProductDemo = () => {
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

  return (
    <section id="product-demo" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Our Products</h2>
        <div className="relative max-w-4xl mx-auto" {...handlers}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold mb-4">{products[currentProduct].title}</h3>
                <p className="text-gray-300 mb-6">{products[currentProduct].description}</p>
                <button className="bg-accent text-primary px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src={products[currentProduct].image} 
                  alt={products[currentProduct].title} 
                  className="rounded-lg shadow-lg"
                />
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
