import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ArrowUpRight, ChevronRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const sectionLabels: Record<string, string> = {
    home: 'Home',
    about: 'About Me',
    skills: 'Technical Skills',
    projects: 'Featured Projects',
    journey: 'Learning Journey',
    contact: 'Get In Touch'
  };

  const currentLabel = sectionLabels[activeSection] || 'Home';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#381323]/95 backdrop-blur-md shadow-xl border-b border-[#D9DCE2]/15' 
          : 'bg-[#381323]/60 backdrop-blur-xs py-2 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand & Breadcrumb Indicator */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href="#home" 
              className="flex flex-col group transition-transform"
            >
              <span className="font-serif font-bold text-lg sm:text-xl text-[#D9DCE2] tracking-tight group-hover:text-white transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans tracking-widest uppercase text-[#9E5370] font-medium">
                AI Automation & Python
              </span>
            </a>

            {/* Breadcrumb section pill indicator */}
            <div className="hidden lg:flex items-center gap-1.5 pl-3 border-l border-[#D9DCE2]/20 text-xs text-[#D9DCE2]/70 font-sans">
              <ChevronRight className="w-3.5 h-3.5 text-[#9E5370]" />
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D9DCE2] bg-[#4E1B31] border border-[#D9DCE2]/15 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E5370] animate-pulse" />
                <span>{currentLabel}</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-wider font-semibold transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#D9DCE2]'
                      : 'text-[#D9DCE2]/65 hover:text-[#D9DCE2]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9E5370] rounded-full shadow-[0_0_8px_#9E5370]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#4E1B31] text-[#D9DCE2] hover:bg-[#521F35] hover:text-white transition-colors border border-[#D9DCE2]/20 shadow-xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#9E5370]" />
            </a>

            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#9E5370] text-[#2C0D1B] hover:bg-[#B26483] transition-colors shadow-md font-bold cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            {/* Compact breadcrumb for mobile */}
            <span className="text-[10px] font-mono text-[#9E5370] bg-[#4E1B31] border border-[#D9DCE2]/15 px-2 py-0.5 rounded-full">
              {currentLabel}
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#D9DCE2] hover:bg-[#4E1B31] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar along the bottom of the navigation bar */}
      <div className="w-full h-[2.5px] bg-[#2C0D1B] overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#9E5370] via-[#D9DCE2] to-[#9E5370] shadow-[0_0_8px_#9E5370] origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#381323] border-b border-[#D9DCE2]/20 px-4 pt-2 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          <div className="px-3 py-1.5 text-[11px] uppercase tracking-wider text-[#9E5370] font-semibold border-b border-[#D9DCE2]/15 mb-2">
            Currently Viewing: <strong className="text-[#D9DCE2]">{currentLabel}</strong>
          </div>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center justify-between ${
                  isActive 
                    ? 'bg-[#4E1B31] text-[#D9DCE2] border-l-2 border-[#9E5370]' 
                    : 'text-[#D9DCE2]/80 hover:bg-[#4E1B31]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#9E5370]" />}
              </a>
            );
          })}
          <div className="pt-4 border-t border-[#D9DCE2]/20 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-[#4E1B31] text-[#D9DCE2] text-sm font-semibold rounded-lg border border-[#D9DCE2]/20"
            >
              <Github className="w-4 h-4" /> View GitHub Profile
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center px-4 py-2 bg-[#9E5370] text-[#2C0D1B] text-sm font-bold rounded-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
