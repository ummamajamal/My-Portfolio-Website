import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Cpu, Workflow, Layout } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Skills: React.FC = () => {
  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Terminal className="w-5 h-5 text-[#9E5370]" />;
      case 1: return <Cpu className="w-5 h-5 text-[#D9DCE2]" />;
      case 2: return <Workflow className="w-5 h-5 text-[#9E5370]" />;
      case 3: default: return <Layout className="w-5 h-5 text-[#D9DCE2]" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="py-20 sm:py-28 bg-[#381323] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs uppercase tracking-widest text-[#9E5370] font-bold mb-2">
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#D9DCE2] tracking-tight">
              Tools, Technologies & Applied Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#D9DCE2]/75 mt-3 max-w-2xl">
              Honest reflection of my hands-on developer stack—technologies I actively study, implement in projects, and refine through practical problem solving.
            </p>
            <div className="w-16 h-1 bg-[#9E5370] mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Skill Category Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <ScrollReveal key={cat.title} delay={idx * 0.1}>
              <div className="bg-[#44182B] rounded-2xl p-6 sm:p-8 border border-[#D9DCE2]/20 shadow-lg hover:border-[#9E5370] hover:shadow-[0_0_20px_rgba(158,83,112,0.15)] transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-[#D9DCE2]/15">
                    <div className="p-2.5 rounded-xl bg-[#2C0D1B] border border-[#D9DCE2]/15">
                      {getCategoryIcon(idx)}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-[#D9DCE2]">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#D9DCE2]/70 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {cat.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="p-3 rounded-xl bg-[#381323] border border-[#D9DCE2]/15 space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-xs sm:text-sm text-[#D9DCE2]">
                            {skill.name}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#9E5370] bg-[#4E1B31] border border-[#D9DCE2]/15 px-2 py-0.5 rounded">
                            {skill.level}
                          </span>
                        </div>
                        <div className="text-xs text-[#D9DCE2]/70">
                          {skill.focus}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9DCE2]/15 flex items-center justify-between text-xs text-[#D9DCE2]/65">
                  <span className="italic">Applied in live prototypes</span>
                  <span className="font-mono text-[10px] text-[#9E5370]">Verified code</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
