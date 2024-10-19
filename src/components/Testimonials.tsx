import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'

const testimonials = [
  {
    quote: "InnoTech's AI-powered analytics platform has revolutionized our decision-making process. The insights we've gained have directly contributed to a 30% increase in our operational efficiency.",
    author: "Jane Doe",
    position: "CTO",
    company: "Tech Innovators Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    quote: "The level of expertise and support from InnoTech is unparalleled. Their cloud infrastructure solution has not only enhanced our security but also reduced our IT costs by 25%.",
    author: "John Smith",
    position: "CEO",
    company: "Global Solutions Ltd.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    quote: "Implementing InnoTech's IoT platform has transformed our manufacturing process. We've seen a 40% improvement in production efficiency and a significant reduction in downtime.",
    author: "Emily Chen",
    position: "Operations Director",
    company: "Smart Manufacturing Co.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  }
]

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 10000) // Change testimonial every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handlers = useSwipeable({
    onSwipedLeft: nextTestimonial,
    onSwipedRight: prevTestimonial,
    trackMouse: true
  })

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative" {...handlers}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-xl md:text-2xl text-white text-center mb-8 max-w-3xl">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
                  <span className="text-primary font-bold text-lg">
                    {getInitials(testimonials[activeIndex].author)}
                  </span>
                </div>
                <div className="text-white">
                  <p className="font-semibold">{testimonials[activeIndex].author}</p>
                  <p className="text-sm opacity-75">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                index === activeIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-30'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
