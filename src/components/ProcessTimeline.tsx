import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLightbulb, FaPencilRuler, FaCode, FaRocket, FaChevronDown } from 'react-icons/fa'

const steps = [
  { 
    icon: FaLightbulb, 
    title: 'Ideation', 
    description: 'We brainstorm and conceptualize your project, defining clear goals and objectives.',
    details: 'Our team of experts collaborates with you to understand your vision, target audience, and business needs. We use various ideation techniques to generate innovative solutions tailored to your specific requirements.'
  },
  { 
    icon: FaPencilRuler, 
    title: 'Design', 
    description: 'Our designers create stunning visuals and user experiences that captivate your audience.',
    details: 'We focus on creating intuitive, user-centered designs that not only look great but also enhance usability. Our design process includes wireframing, prototyping, and iterative refinement based on your feedback.'
  },
  { 
    icon: FaCode, 
    title: 'Development', 
    description: 'Our developers bring the designs to life with clean, efficient, and scalable code.',
    details: 'Using the latest technologies and best practices, we build robust and performant solutions. Our development process includes regular code reviews, testing, and quality assurance to ensure a bug-free final product.'
  },
  { 
    icon: FaRocket, 
    title: 'Launch', 
    description: 'We deploy your project and ensure a smooth launch, providing ongoing support.',
    details: 'Our launch process includes thorough testing in a staging environment, data migration (if required), and a carefully planned go-live strategy. We provide post-launch support and monitoring to address any issues promptly.'
  },
]

const ProcessTimeline = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index)
  }

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Our Process</h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-8 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div 
                className="flex items-center cursor-pointer"
                onClick={() => toggleStep(index)}
              >
                <div className="bg-primary text-white rounded-full p-3 mr-4">
                  <step.icon className="text-2xl" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <motion.div
                  animate={{ rotate: expandedStep === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-primary" />
                </motion.div>
              </div>
              <AnimatePresence>
                {expandedStep === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 ml-16 text-gray-600"
                  >
                    {step.details}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
