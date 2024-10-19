import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import InteractivePortfolio from './components/InteractivePortfolio'
import ProcessTimeline from './components/ProcessTimeline'
import TechnologyStack from './components/TechnologyStack'
import InteractiveProductDemo from './components/InteractiveProductDemo'
import AwardsRecognition from './components/AwardsRecognition'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton'

function App() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute('href');
      if (id) {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-text">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <InteractivePortfolio />
          <ProcessTimeline />
          <TechnologyStack />
          <InteractiveProductDemo />
          <AwardsRecognition />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  )
}

export default App
