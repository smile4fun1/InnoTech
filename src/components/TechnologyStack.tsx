import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa'
import { SiTensorflow, SiKubernetes, SiMongodb, SiPostgresql, SiGraphql } from 'react-icons/si'

const technologies = [
  { icon: FaReact, name: 'React' },
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: FaPython, name: 'Python' },
  { icon: FaAws, name: 'AWS' },
  { icon: FaDocker, name: 'Docker' },
  { icon: SiTensorflow, name: 'TensorFlow' },
  { icon: SiKubernetes, name: 'Kubernetes' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiGraphql, name: 'GraphQL' },
]

const TechnologyStack = () => {
  return (
    <section id="tech-stack" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Technology Stack
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <tech.icon className="text-6xl text-secondary mb-4" />
              <p className="text-lg font-semibold text-primary">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologyStack
