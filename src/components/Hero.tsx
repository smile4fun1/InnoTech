import { useCallback } from 'react'

const Hero = () => {
  const handleGetStarted = useCallback(() => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <h1>Innovate. Transform. Succeed.</h1>
        <p>Empowering businesses with cutting-edge technology solutions.</p>
        <button onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
