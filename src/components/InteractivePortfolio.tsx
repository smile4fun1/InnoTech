import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './Modal'

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  link: string
  technologies: string[]
}

const projects: Project[] = [
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

const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))]

const InteractivePortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const loadImage = (image: string) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        loadImg.onload = () => resolve(image)
        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(projects.map(project => loadImage(project.image)))
      .then(() => setImagesLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])

  const openModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-gray-100 select-none">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Our Portfolio</h2>
        
        <div className="hidden md:flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 m-2 rounded-full ${
                activeCategory === category ? 'bg-primary text-white' : 'bg-white text-primary'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: imagesLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(project)}
              layout
              role="button"
              aria-label={`View details of ${project.title}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover" 
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 line-clamp-3">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal isOpen={true} onClose={closeModal} title={selectedProject.title}>
            {selectedProject && (
              <>
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
              </>
            )}
          </Modal>
        )}
      </AnimatePresence>
    </section>
  )
}

export default InteractivePortfolio
