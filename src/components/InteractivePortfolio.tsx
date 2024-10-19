import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const projects = [
  { 
    id: 1, 
    title: 'E-commerce Platform', 
    category: 'Web Development', 
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A fully responsive e-commerce solution with advanced features including real-time inventory management, AI-powered product recommendations, and seamless payment integration.',
    link: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  { 
    id: 2, 
    title: 'Fitness Tracking App', 
    category: 'Mobile App', 
    image: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'An intuitive mobile app for tracking fitness and health goals, featuring personalized workout plans, nutrition tracking, and integration with wearable devices.',
    link: '#',
    technologies: ['React Native', 'Firebase', 'TensorFlow Lite']
  },
  { 
    id: 3, 
    title: 'Financial Dashboard', 
    category: 'Data Visualization', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Interactive financial data visualization platform providing real-time insights, predictive analytics, and customizable reporting for informed decision-making.',
    link: '#',
    technologies: ['D3.js', 'Python', 'PostgreSQL', 'Machine Learning']
  },
  { 
    id: 4, 
    title: 'Smart Home System', 
    category: 'IoT', 
    image: 'https://images.unsplash.com/photo-1707718282117-8f5ebb5b8843?q=80&w=3074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Integrated IoT solution for home automation and energy management, featuring voice control, machine learning for optimal energy usage, and robust security measures.',
    link: '#',
    technologies: ['Raspberry Pi', 'MQTT', 'TensorFlow', 'React']
  },
  { 
    id: 5, 
    title: 'AI-powered Chatbot', 
    category: 'Artificial Intelligence', 
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Advanced chatbot with natural language processing capabilities, context awareness, and integration with multiple platforms for seamless customer support.',
    link: '#',
    technologies: ['NLP', 'Python', 'TensorFlow', 'AWS Lambda']
  },
  { 
    id: 6, 
    title: 'Virtual Reality Game', 
    category: 'Gaming', 
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Immersive VR gaming experience with cutting-edge graphics, physics-based interactions, and multiplayer capabilities for a truly next-gen gaming experience.',
    link: '#',
    technologies: ['Unity3D', 'C#', 'Oculus SDK', 'Photon Networking']
  },
]

const categories = ['All', ...new Set(projects.map(project => project.category))]

const InteractivePortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }))
  }, [filteredProjects, controls])

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Portfolio
        </motion.h2>
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`m-2 px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-smooth ${
                activeCategory === category 
                  ? 'bg-secondary text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                custom={index}
                onClick={() => openModal(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                  <h3 className="text-2xl font-serif font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4 text-center">{project.category}</p>
                  <motion.button
                    className="bg-secondary text-white px-4 py-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-lg max-w-3xl w-full overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-3xl font-heading font-bold text-primary">{selectedProject.title}</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes className="h-6 w-6" />
                  </button>
                </div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-secondary text-white px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-2 rounded-full inline-block hover:bg-opacity-90 transition-colors"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default InteractivePortfolio
