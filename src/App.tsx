import Header from './Components/Layouts/Header'
import Hero from './Components/Views/Hero'
import About from './Components/Views/About'
import Skills from './Components/Views/Skills'
import Experience from './Components/Views/Experience'
import Projects from './Components/Views/Projects'
import Testimonials from './Components/Views/Testimonials'
import Contact from './Components/Views/Contact'
import Footer from './Components/Layouts/Footer'
import React, { useState, useEffect } from 'react';


// Main Portfolio Component
  const Portfolio: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = window.innerHeight * 0.2;

      if (currentScroll < scrollThreshold) {
        setIsNavVisible(true);
      } else {
        if (currentScroll > lastScrollTop) {
          setIsNavVisible(false);
        } else {
          setIsNavVisible(true);
        }
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className="bg-[rgba(2,7,27,1)] ">
      
      <Header isNavVisible={isNavVisible} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        } 
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;