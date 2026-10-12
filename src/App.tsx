import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AutomationBackground } from './components/AutomationBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { FloatingContact } from './components/FloatingContact';
import { Footer } from './components/Footer';

const sectionMotionProps = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#381323] text-[#D9DCE2] selection:bg-[#9E5370] selection:text-[#2C0D1B] relative">
      {/* Continuous AI Automation & Python Ambient Background Layer */}
      <AutomationBackground />

      {/* Persistent Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Portfolio Sections Wrapped with framer-motion motion.div */}
      <main id="main-content">
        <motion.div {...sectionMotionProps}>
          <Hero />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <About />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <Skills />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <Projects />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <Journey />
        </motion.div>

        <motion.div {...sectionMotionProps}>
          <Contact />
        </motion.div>
      </main>

      {/* Floating Quick Contact Widget */}
      <FloatingContact />

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}
