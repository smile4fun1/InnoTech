import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LightBulbIcon, ShieldCheckIcon, ChartBarIcon, CogIcon, GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { FaTimes } from 'react-icons/fa'

const features = [
  {
    icon: LightBulbIcon,
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology tailored to your business needs.',
    details: 'Our innovative solutions leverage the latest technologies such as AI, machine learning, and blockchain to solve complex business challenges and drive growth.',
    benefits: [
      'Customized solutions for unique business requirements',
      'Increased operational efficiency',
      'Competitive advantage through technological innovation'
    ]
  },
  {
    icon: ShieldCheckIcon,
    title: 'Robust Security',
    description: 'State-of-the-art security measures to protect your data.',
    details: 'We implement multi-layered security protocols, including end-to-end encryption, regular security audits, and compliance with international data protection standards.',
    benefits: [
      'Enhanced data protection and privacy',
      'Reduced risk of cyber threats and breaches',
      'Compliance with industry regulations'
    ]
  },
  {
    icon: ChartBarIcon,
    title: 'Advanced Analytics',
    description: 'Data-driven insights to inform your business decisions.',
    details: 'Our advanced analytics platform provides real-time dashboards, predictive modeling, and custom reports to help you make informed decisions and optimize your operations.',
    benefits: [
      'Improved decision-making process',
      'Identification of new business opportunities',
      'Optimized resource allocation'
    ]
  },
  {
    icon: CogIcon,
    title: 'Scalable Infrastructure',
    description: 'Flexible solutions that grow with your business.',
    details: 'Our cloud-based infrastructure is designed to scale seamlessly, ensuring your systems can handle increased loads as your business expands.',
    benefits: [
      'Seamless business growth without technical limitations',
      'Cost-effective scaling of resources',
      'Improved performance during peak usage periods'
    ]
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Reach',
    description: 'Expand your business across borders with ease.',
    details: 'Our solutions are built with internationalization in mind, supporting multiple languages, currencies, and compliance with regional regulations.',
    benefits: [
      'Simplified expansion into new markets',
      'Localized user experiences',
      'Compliance with international regulations'
    ]
  },
  {
    icon: SparklesIcon,
    title: 'Continuous Innovation',
    description: 'Stay ahead of the curve with our R&D initiatives.',
    details: 'Our dedicated research and development team continuously explores emerging technologies to bring you cutting-edge solutions that keep you ahead of the competition.',
    benefits: [
      'Access to the latest technological advancements',
      'Continuous improvement of existing solutions',
      'Future-proofing your business'
    ]
  }
]

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedFeature(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedFeature(feature)}
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-xl font-heading font-semibold text-primary">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <motion.button
                className="text-secondary hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-lg max-w-3xl w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-3xl font-heading font-bold text-primary flex items-center">
                    <selectedFeature.icon className="h-8 w-8 text-secondary mr-3" />
                    {selectedFeature.title}
                  </h3>
                  <button
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    onClick={() => setSelectedFeature(null)}
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-gray-600 mb-6">{selectedFeature.details}</p>
                <h4 className="text-xl font-semibold mb-4 text-secondary">Key Benefits:</h4>
                <ul className="list-disc pl-5 mb-6">
                  {selectedFeature.benefits.map((benefit, index) => (
                    <motion.li 
                      key={index} 
                      className="text-gray-700 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  className="bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Features
