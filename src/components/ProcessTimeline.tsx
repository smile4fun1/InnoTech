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
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index)
  }

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="p-6 cursor-pointer shadow-lg"
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <step.icon className="text-3xl text-secondary mr-4" />
                    <h3 className="text-xl font-heading font-semibold text-primary">{step.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeStep === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-primary" />
                  </motion.div>
                </div>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </motion.div>
              <AnimatePresence initial={false}>
                {activeStep === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-700">{step.details}</p>
                    </div>
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
