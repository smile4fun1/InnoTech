import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa'

const awards = [
  {
    icon: FaTrophy,
    title: 'Best Tech Innovator 2023',
    organization: 'Tech Excellence Awards',
    description: 'Recognized for groundbreaking advancements in AI and machine learning applications.',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FaMedal,
    title: 'Top 10 AI Companies',
    organization: 'AI Breakthrough',
    description: 'Ranked among the most influential companies shaping the future of artificial intelligence.',
    image: 'https://images.unsplash.com/photo-1495592822108-9e6261896da8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FaAward,
    title: 'Excellence in UX Design',
    organization: 'UX Design Awards',
    description: 'Honored for creating intuitive and user-centric interfaces that set new industry standards.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FaStar,
    title: 'Best Workplace in Tech',
    organization: 'Tech Employer Awards',
    description: 'Celebrated for fostering an innovative, inclusive, and employee-centric work environment.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
]

const AwardsRecognition: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Awards & Recognition
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <img 
                src={award.image} 
                alt={award.title} 
                className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
                <div className="text-center">
                  <award.icon className="text-5xl text-accent mb-4 mx-auto" />
                  <h3 className="text-2xl font-serif font-semibold mb-2">{award.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{award.organization}</p>
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.p
                        className="text-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {award.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AwardsRecognition
