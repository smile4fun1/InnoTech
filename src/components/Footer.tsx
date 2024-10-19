import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const socialIcons = [
    { Icon: FaFacebook, link: '#' },
    { Icon: FaTwitter, link: '#' },
    { Icon: FaLinkedin, link: '#' },
    { Icon: FaInstagram, link: '#' },
  ]

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">InnoTech</h3>
            <p className="text-sm opacity-75">Empowering businesses with innovative technology solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Features', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-accent transition-smooth">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">123 Tech Street, Silicon Valley, CA 94000</p>
            <p className="text-sm">info@innotech.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  className="text-white hover:text-accent transition-smooth"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center">
          <p>&copy; 2024 InnoTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
