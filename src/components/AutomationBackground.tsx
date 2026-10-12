import React, { useEffect, useState } from 'react';

export const AutomationBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax subtle offset calculation
  const parallaxOffset = scrollY * 0.14;

  return (
    <div 
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* 1. Global Architectural Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #D9DCE2 1px, transparent 1px),
            linear-gradient(to bottom, #D9DCE2 1px, transparent 1px)
          `,
          backgroundSize: '90px 90px'
        }}
      />

      {/* Atmospheric Ambient Glow Spheres in Shiny Plum & Luxura */}
      <div className="absolute top-1/4 -left-48 w-[640px] h-[640px] rounded-full bg-[#521F35]/35 blur-[140px]" />
      <div className="absolute top-1/2 -right-48 w-[640px] h-[640px] rounded-full bg-[#9E5370]/18 blur-[150px]" />
      <div className="absolute top-[85%] left-1/4 w-[540px] h-[540px] rounded-full bg-[#521F35]/25 blur-[130px]" />

      {/* 2. REAL GENERATED IMAGE 1: AI Automation Workflows (Upper Section, Hero / About) */}
      <div 
        className="absolute top-24 left-3 sm:left-8 lg:left-14 w-[320px] sm:w-[460px] lg:w-[580px] transition-transform duration-700 ease-out animate-float-slow opacity-25"
        style={{
          transform: `translateY(${-parallaxOffset * 0.35}px)`
        }}
      >
        <div className="rounded-2xl bg-[#2C0D1B]/85 border-2 border-[#D9DCE2]/20 shadow-2xl p-2.5 sm:p-3 backdrop-blur-[2px]">
          {/* Header pill indicator */}
          <div className="flex items-center justify-between px-2 pb-2 mb-1.5 border-b border-[#D9DCE2]/15">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9E5370] animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#D9DCE2] uppercase">
                AI Automation Workflows
              </span>
            </div>
            <span className="text-[9px] font-mono text-[#D9DCE2]/60">
              public/images/ai-automation.png
            </span>
          </div>

          {/* Actual Real Image File */}
          <img
            src="/images/ai-automation.png"
            alt="AI Automation Workflows - Connected automation nodes, triggers, webhooks and processes"
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-xl border border-[#D9DCE2]/15 shadow-inner object-cover"
          />
        </div>
      </div>

      {/* 3. REAL GENERATED IMAGE 2: Python Programming (Mid-Section, Skills / Projects) */}
      <div 
        className="absolute top-[720px] right-3 sm:right-8 lg:right-14 w-[330px] sm:w-[480px] lg:w-[600px] transition-transform duration-700 ease-out animate-float-reverse opacity-20 hidden md:block"
        style={{
          transform: `translateY(${-parallaxOffset * 0.45}px)`
        }}
      >
        <div className="rounded-2xl bg-[#250917]/85 border-2 border-[#B87591]/25 shadow-2xl p-2.5 sm:p-3 backdrop-blur-[2px]">
          {/* Header pill indicator */}
          <div className="flex items-center justify-between px-2 pb-2 mb-1.5 border-b border-[#D9DCE2]/15">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D9DCE2]" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#D9DCE2] uppercase">
                Python Programming Runtime
              </span>
            </div>
            <span className="text-[9px] font-mono text-[#9E5370]">
              public/images/python-programming.png
            </span>
          </div>

          {/* Actual Real Image File */}
          <img
            src="/images/python-programming.png"
            alt="Python Programming - Development environment, code editor and FastAPI modules"
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-xl border border-[#D9DCE2]/15 shadow-inner object-cover"
          />
        </div>
      </div>

      {/* 4. REAL GENERATED IMAGE 3: AI Agents & Intelligent Systems (Lower Section, Journey / Contact) */}
      <div 
        className="absolute top-[1480px] left-3 sm:left-8 lg:left-16 w-[320px] sm:w-[460px] lg:w-[580px] transition-transform duration-700 ease-out animate-float-slow opacity-22 hidden sm:block"
        style={{
          transform: `translateY(${-parallaxOffset * 0.3}px)`
        }}
      >
        <div className="rounded-2xl bg-[#2C0D1B]/85 border-2 border-[#D9DCE2]/20 shadow-2xl p-2.5 sm:p-3 backdrop-blur-[2px]">
          {/* Header pill indicator */}
          <div className="flex items-center justify-between px-2 pb-2 mb-1.5 border-b border-[#D9DCE2]/15">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9E5370]" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#D9DCE2] uppercase">
                AI Agents &amp; Intelligent Architecture
              </span>
            </div>
            <span className="text-[9px] font-mono text-[#D9DCE2]/60">
              public/images/ai-agents.png
            </span>
          </div>

          {/* Actual Real Image File */}
          <img
            src="/images/ai-agents.png"
            alt="AI Agents and Intelligent Systems - Multi-agent collaboration, vector embeddings and workflow routing"
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-xl border border-[#D9DCE2]/15 shadow-inner object-cover"
          />
        </div>
      </div>

      {/* Subtle Ambient Code Glyphs */}
      <div className="absolute top-[480px] right-[24%] text-[#D9DCE2]/20 font-mono text-xs hidden lg:block">
        FastAPI • POST /api/v1/trigger • Supabase RLS
      </div>
      <div className="absolute top-[1250px] left-[20%] text-[#9E5370]/25 font-mono text-xs hidden lg:block">
        async def run_pipeline() -&gt; MultiAgentDecision:
      </div>
    </div>
  );
};
