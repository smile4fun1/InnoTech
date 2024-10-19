import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLightbulb, FaCog, FaRocket, FaShieldAlt } from 'react-icons/fa'
import Modal from './Modal'

interface Feature {
  id: number
  title: string
  description: string
  icon: React.ElementType
  details: string
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology to solve complex business challenges',
    icon: FaLightbulb,
    details: 'Our innovative solutions leverage the latest technologies such as AI, machine learning, and blockchain to provide unique and effective answers to your business problems. We stay ahead of the curve to ensure your business remains competitive in the digital age.'
  },
  {
    id: 2,
    title: 'Scalable Architecture',
    description: 'Build systems that grow with your business',
    icon: FaCog,
    details: 'Our scalable architecture designs ensure that your systems can handle increased load and complexity as your business grows. We use cloud-native technologies and microservices architecture to build flexible and resilient systems that adapt to your changing needs.'
  },
  {
    id: 3,
    title: 'Rapid Deployment',
    description: 'Get your products to market faster',
    icon: FaRocket,
    details: 'Our rapid deployment strategies and DevOps practices enable us to deliver high-quality software quickly and efficiently. We use continuous integration and deployment pipelines to ensure smooth and frequent releases, reducing time-to-market for your products.'
  },
  {
    id: 4,
    title: 'Robust Security',
    description: 'Protect your data and systems with advanced security measures',
    icon: FaShieldAlt,
    details: 'We implement state-of-the-art security measures to protect your valuable data and systems. Our security-first approach includes encryption, secure authentication, regular security audits, and compliance with industry standards to ensure your business stays protected against cyber threats.'
  }
]

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)

  const openModal = (feature: Feature) => {
    setSelectedFeature(feature)
  }

  const closeModal = () => {
    setSelectedFeature(null)
  }

  return (
    <section id="features" className="py-20 bg-gray-50 select-none">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Our Features</h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(feature)}
              layout
              role="button"
              aria-label={`Learn more about ${feature.title}`}
            >
              <feature.icon className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <Modal isOpen={true} onClose={closeModal} title={selectedFeature.title}>
            <div>
              <selectedFeature.icon className="text-5xl text-primary mb-4" />
              <p className="text-gray-600 mb-4">{selectedFeature.details}</p>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Features
