import React from 'react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Journey: React.FC = () => {
  return (
    <section 
      id="journey" 
      className="py-20 sm:py-28 bg-[#381323] border-t border-[#D9DCE2]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs uppercase tracking-widest text-[#9E5370] font-bold mb-2">
              Learning Progression
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#D9DCE2] tracking-tight">
              My Journey & Development Milestones
            </h2>
            <p className="text-sm sm:text-base text-[#D9DCE2]/80 mt-3 max-w-2xl">
              A chronological timeline of hands-on learning, practical experimentation, and software craftsmanship—from core algorithmic fundamentals to intelligent workflow automation.
            </p>
            <div className="w-16 h-1 bg-[#9E5370] mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#D9DCE2]/20 ml-4 sm:ml-8 space-y-12">
          {JOURNEY_MILESTONES.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#381323] border-2 border-[#9E5370] group-hover:bg-[#9E5370] group-hover:border-[#D9DCE2] shadow-[0_0_8px_#9E5370] transition-colors" />

              <ScrollReveal delay={idx * 0.12}>
                <div className="bg-[#44182B] rounded-2xl p-6 sm:p-8 border border-[#D9DCE2]/20 shadow-lg hover:border-[#9E5370] hover:shadow-[0_0_20px_rgba(158,83,112,0.15)] transition-all duration-300 space-y-4">
                  
                  {/* Milestone Period & Context */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9DCE2]/15 pb-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#9E5370]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <div className="text-xs font-medium text-[#D9DCE2] bg-[#2C0D1B] border border-[#D9DCE2]/15 px-2.5 py-1 rounded">
                      {item.institutionOrContext}
                    </div>
                  </div>

                  {/* Milestone Title */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#D9DCE2]">
                    {item.title}
                  </h3>

                  {/* Narrative */}
                  <p className="text-xs sm:text-sm text-[#D9DCE2]/80 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Accomplishments / Experiments */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#D9DCE2]/80">
                      Key Highlights & Experiments:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 bg-[#381323] p-2.5 rounded-lg border border-[#D9DCE2]/15 text-xs text-[#D9DCE2]/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9E5370] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
