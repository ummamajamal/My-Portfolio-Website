import React from 'react';
import { GraduationCap, MapPin, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 bg-[#44182B] border-y border-[#D9DCE2]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs uppercase tracking-widest text-[#9E5370] font-bold mb-2">
              My Background & Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#D9DCE2] tracking-tight">
              Curiosity, Experimentation, and Purposeful Code
            </h2>
            <div className="w-16 h-1 bg-[#9E5370] mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Story Content */}
          <ScrollReveal delay={0.1} className="lg:col-span-7 space-y-6 text-[#D9DCE2]/85 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-[#D9DCE2] text-base sm:text-lg">
              I am <strong className="text-white font-semibold">Ummama Jamal Qureshi</strong>, a first-year ICS student at Concordia Colleges in Nowshera, Pakistan, with a growing passion for artificial intelligence, Python programming, and automation.
            </p>

            <p>
              For me, technology is more than writing code or building attractive websites. It is an opportunity to rethink how everyday work gets done. I am fascinated by the idea that a repetitive task can become an intelligent workflow, that scattered information can become a useful system, and that an ordinary problem can inspire a genuinely practical digital solution.
            </p>

            <p>
              My learning journey is driven by experimentation. I enjoy exploring how AI agents, APIs, databases, automation workflows, and user interfaces can work together to solve real problems. Rather than limiting myself to tutorials, I challenge myself to build projects, test functionality, troubleshoot errors, and understand how the pieces connect.
            </p>

            <p>
              Through my project work, I have explored inventory management, admissions assistance, AI-powered veterinary support, automation workflows, and interactive web experiences. Every project gives me an opportunity to improve my technical thinking, learn from mistakes, and turn ideas into something people can actually use.
            </p>

            <p>
              I am still at the beginning of my journey, and that is precisely what makes it exciting. I want to keep learning, ask better questions, build more useful systems, and develop the discipline to turn ambitious ideas into dependable products.
            </p>

            <p className="font-serif italic text-base sm:text-lg text-[#D9DCE2] pt-2 border-t border-[#D9DCE2]/20">
              "My goal is to become a skilled developer and AI automation engineer who builds technology with purpose: solutions that save time, reduce unnecessary complexity, and make everyday work a little smarter."
            </p>
          </ScrollReveal>

          {/* Education & Core Philosophy Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <ScrollReveal delay={0.15}>
              <div className="bg-[#4E1B31] rounded-2xl p-6 border-2 border-[#D9DCE2]/25 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#2C0D1B] text-[#9E5370] shrink-0 border border-[#D9DCE2]/15">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#9E5370] font-bold">
                      Current Academic Education
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#D9DCE2] mt-1">
                      {PERSONAL_INFO.education.status}
                    </h3>
                    <div className="text-sm font-semibold text-[#D9DCE2]/90 mt-0.5">
                      {PERSONAL_INFO.education.institution}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#D9DCE2]/75 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#9E5370]" />
                      <span>{PERSONAL_INFO.education.location}</span>
                    </div>
                    <p className="text-xs text-[#D9DCE2]/70 mt-3 pt-3 border-t border-[#D9DCE2]/15 leading-relaxed">
                      Building core fundamentals in computer science, algorithmic logic, discrete mathematics, and software development methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Guiding Principles */}
            <ScrollReveal delay={0.2}>
              <div className="bg-[#4E1B31] rounded-2xl p-6 border border-[#D9DCE2]/20 space-y-4">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#D9DCE2] flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#9E5370]" />
                  How I Approach Software & AI
                </h4>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#9E5370] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Learn by Engineering:</strong> Testing concepts in functioning apps rather than passive video consumption.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#9E5370] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Pragmatic Automation:</strong> Replacing manual spreadsheets and fragmented messages with robust, verifiable workflows.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#9E5370] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Responsible AI Guardrails:</strong> Retaining human oversight, audit logs, and clear ethical boundaries.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Portrait Thumbnail Strip */}
            <ScrollReveal delay={0.25}>
              <div className="bg-[#4E1B31] p-4 rounded-2xl border border-[#D9DCE2]/20 flex items-center gap-4">
                <img
                  src="/images/ummama-avatar.png"
                  alt="Ummama Jamal Qureshi"
                  className="w-16 h-16 rounded-xl object-cover border border-[#D9DCE2]/30 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-xs">
                  <div className="font-serif font-bold text-sm text-[#D9DCE2]">Ummama Jamal Qureshi</div>
                  <div className="text-[#9E5370] font-medium">Independent Developer & ICS Student</div>
                  <div className="text-[#D9DCE2]/65 text-[11px] mt-0.5">Committed to honest, continuous growth</div>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
