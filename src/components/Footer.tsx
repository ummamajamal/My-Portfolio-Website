import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C0D1B] border-t border-[#D9DCE2]/15 py-12 sm:py-16 text-[#D9DCE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#D9DCE2]/15">
          
          {/* Identity & Motto */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <span className="font-serif font-bold text-2xl text-[#D9DCE2] block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#9E5370] font-semibold">
                {PERSONAL_INFO.role}
              </span>
            </div>

            <p className="font-serif italic text-base text-[#D9DCE2]/90 max-w-md">
              "{PERSONAL_INFO.motto}"
            </p>

            <div className="text-xs text-[#D9DCE2]/70">
              First-year ICS Student at Concordia Colleges, Nowshera, Pakistan.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider font-bold text-[#D9DCE2]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="text-[#D9DCE2]/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-[#D9DCE2]/70 hover:text-white transition-colors">About & Education</a></li>
              <li><a href="#skills" className="text-[#D9DCE2]/70 hover:text-white transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#projects" className="text-[#D9DCE2]/70 hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#journey" className="text-[#D9DCE2]/70 hover:text-white transition-colors">Learning Journey</a></li>
              <li><a href="#contact" className="text-[#D9DCE2]/70 hover:text-white transition-colors">Get In Touch</a></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider font-bold text-[#D9DCE2]">
              Connect
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <a
                  href={PERSONAL_INFO.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#D9DCE2]/70 hover:text-white transition-colors"
                >
                  <span className="w-3.5 h-3.5 text-[#9E5370] flex items-center justify-center font-bold text-[10px]">WA</span>
                  <span>WhatsApp Chat</span>
                </a>
              </div>
              <div>
                <a
                  href={PERSONAL_INFO.socialLinks.devconnect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#D9DCE2]/70 hover:text-white transition-colors"
                >
                  <span className="w-3.5 h-3.5 text-[#9E5370] flex items-center justify-center font-bold text-[10px]">&lt;/&gt;</span>
                  <span>DevConnect Profile</span>
                </a>
              </div>
              <div>
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#D9DCE2]/70 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#9E5370]" />
                  <span>github.com/ummamajamal</span>
                </a>
              </div>
              <div>
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#D9DCE2]/70 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#9E5370]" />
                  <span>linkedin.com/in/ummamajamal</span>
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.socialLinks.email}`}
                  className="flex items-center gap-2 text-[#D9DCE2]/70 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9E5370]" />
                  <span>{PERSONAL_INFO.socialLinks.email}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9DCE2]/65">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React 19, Vite, Tailwind CSS & Framer Motion</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="text-[#9E5370] font-semibold hover:text-white inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
