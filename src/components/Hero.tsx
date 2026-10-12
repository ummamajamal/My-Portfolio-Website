import React, { useState } from 'react';
import { ArrowDown, Terminal, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-24 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#381323] via-[#48182E] to-[#2C0D1B]"
    >
      {/* Subtle glossy darker plum & darker luxora architectural light accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-[#9E5370]/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#521F35]/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Direction Tagline */}
            <ScrollReveal delay={0.05} distance={16}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4E1B31] border border-[#D9DCE2]/20 text-xs font-semibold text-[#D9DCE2] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#9E5370] animate-pulse shadow-[0_0_8px_#9E5370]" />
                <span>{PERSONAL_INFO.role}</span>
              </div>
            </ScrollReveal>

            {/* Name */}
            <ScrollReveal delay={0.1} distance={20}>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#D9DCE2] tracking-tight leading-[1.1] drop-shadow-sm">
                  {PERSONAL_INFO.name}
                </h1>

                {/* Personal Motto Quote directly beneath name */}
                <div className="mt-4 pl-4 border-l-2 border-[#9E5370] py-1">
                  <p className="font-serif italic text-lg sm:text-xl text-[#D9DCE2]/95 leading-snug">
                    "{PERSONAL_INFO.motto}"
                  </p>
                  <div className="text-xs uppercase tracking-widest text-[#9E5370] font-semibold mt-1">
                    — {PERSONAL_INFO.mottoAttribution}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Professional Headline */}
            <ScrollReveal delay={0.15} distance={20}>
              <h2 className="text-xl sm:text-2xl font-serif text-[#D9DCE2]/90 font-semibold">
                {PERSONAL_INFO.headline}
              </h2>
            </ScrollReveal>

            {/* Short Introduction */}
            <ScrollReveal delay={0.2} distance={20}>
              <p className="text-sm sm:text-base text-[#D9DCE2]/80 leading-relaxed max-w-2xl font-sans">
                First-year ICS student at <strong className="text-white font-medium">Concordia Colleges, Nowshera</strong> exploring the frontiers of artificial intelligence, Python automation, and intelligent web applications. Driven by curiosity and practical development—transforming repetitive tasks into dependable, autonomous workflows.
              </p>
            </ScrollReveal>

            {/* Primary Action Buttons */}
            <ScrollReveal delay={0.25} distance={20}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#9E5370] text-[#2C0D1B] text-sm font-bold hover:bg-[#B26483] transition-all transform active:scale-98 shadow-lg shadow-[#9E5370]/25 cursor-pointer"
                >
                  <span>Explore My Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4E1B31] text-[#D9DCE2] text-sm font-semibold hover:bg-[#521F35] hover:text-white transition-all border border-[#D9DCE2]/25 shadow-sm cursor-pointer"
                >
                  <span>Contact Me</span>
                </a>

                <a
                  href={PERSONAL_INFO.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#2C0D1B] text-[#D9DCE2] text-xs font-semibold hover:bg-[#381323] hover:text-white transition-all border border-[#D9DCE2]/20 shadow-xs cursor-pointer group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#9E5370] group-hover:scale-125 transition-transform" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Quick credibility unboxed text list */}
            <ScrollReveal delay={0.3} distance={16}>
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#D9DCE2]/75">
                <span className="flex items-center gap-1.5 font-medium">
                  <Terminal className="w-3.5 h-3.5 text-[#9E5370]" /> Python & FastAPI
                </span>
                <span aria-hidden="true" className="text-[#D9DCE2]/30">·</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Cpu className="w-3.5 h-3.5 text-[#9E5370]" /> AI Automation
                </span>
                <span aria-hidden="true" className="text-[#D9DCE2]/30">·</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9E5370]" /> Concordia Colleges, Nowshera
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Exact Uploaded Avatar Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal delay={0.2} distance={28}>
              <div className="relative w-full max-w-sm sm:max-w-md">
                
                {/* Outer decorative metallic silver and darker luxora framing */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#D9DCE2]/40 via-[#521F35] to-[#9E5370] opacity-60 blur-md -z-10" />

                <div className="relative rounded-2xl overflow-hidden bg-[#44182B] border-2 border-[#D9DCE2]/30 shadow-2xl p-3">
                  {/* Image Container */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#2C0D1B] flex items-center justify-center">
                    
                    {/* The exact uploaded user portrait */}
                    <img
                      src="/images/ummama-avatar.png"
                      alt="Ummama Jamal Qureshi - AI Automation & Python Developer"
                      className={`w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103 ${
                        imageLoaded ? 'opacity-100' : 'opacity-90'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => {
                        setImageError(true);
                        console.warn('Avatar image fallback triggered');
                      }}
                      referrerPolicy="no-referrer"
                    />

                    {/* Fallback warning container only if file cannot be read */}
                    {imageError && (
                      <div className="absolute inset-0 bg-[#2C0D1B] flex flex-col items-center justify-center p-6 text-center text-[#D9DCE2]">
                        <span className="font-serif font-bold text-lg">Ummama Jamal Qureshi</span>
                        <span className="text-xs text-[#9E5370] mt-1">Avatar asset at /images/ummama-avatar.png</span>
                      </div>
                    )}

                    {/* Corner status card */}
                    <div className="absolute bottom-3 left-3 right-3 bg-[#381323]/90 backdrop-blur-md px-3 py-2 rounded-lg border border-[#D9DCE2]/25 shadow-md flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-bold text-[#D9DCE2] leading-tight">
                          Ummama Jamal Qureshi
                        </div>
                        <div className="text-[10px] text-[#9E5370] font-medium leading-tight">
                          Concordia Colleges · Nowshera
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-[#D9DCE2] bg-[#4E1B31] border border-[#D9DCE2]/20 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9E5370] shadow-[0_0_6px_#9E5370]" />
                        Active
                      </div>
                    </div>
                  </div>

                  {/* Caption beneath photo */}
                  <div className="mt-2.5 px-2 flex items-center justify-between text-[11px] text-[#D9DCE2]/75">
                    <span className="italic font-serif">Original Identity & Portrait</span>
                    <span className="font-mono text-[10px] text-[#9E5370]">Verified Student Asset</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[#D9DCE2]/50">
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll to discover</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#9E5370]" />
      </div>
    </section>
  );
};
