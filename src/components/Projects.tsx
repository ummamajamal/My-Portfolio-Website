import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';
import { ProjectModal } from './ProjectModal';
import { ProjectMetricsChart } from './ProjectMetricsChart';
import { Github, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'AI Automation & Agents', value: 'ai' },
    { label: 'Python & Systems', value: 'python' },
    { label: 'Web Applications', value: 'web' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'ai') {
      return (
        project.id.includes('stocksense') || 
        project.id.includes('admitcrew') || 
        project.id.includes('vet') || 
        project.id.includes('automation')
      );
    }
    if (selectedFilter === 'python') {
      return (
        project.id.includes('stocksense') || 
        project.id.includes('vet') || 
        project.id.includes('python') || 
        project.id.includes('automation')
      );
    }
    if (selectedFilter === 'web') {
      return (
        project.id.includes('stocksense') || 
        project.id.includes('admitcrew') || 
        project.id.includes('portfolio')
      );
    }
    return true;
  });

  return (
    <section 
      id="projects" 
      className="py-20 sm:py-28 bg-[#44182B] border-t border-[#D9DCE2]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filter Tabs */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-widest text-[#9E5370] font-bold mb-2">
                Featured Engineering Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#D9DCE2] tracking-tight">
                Practical Systems, Workflows & Applications
              </h2>
              <p className="text-sm sm:text-base text-[#D9DCE2]/80 mt-3">
                Independent projects built to solve real operational bottlenecks, explore multi-agent logic, and test software architectures.
              </p>
              <div className="w-16 h-1 bg-[#9E5370] mt-4 rounded-full" />
            </div>

            {/* Filter Bar */}
            <div className="flex items-center gap-1.5 p-1 bg-[#2C0D1B] rounded-xl border border-[#D9DCE2]/20 self-start md:self-auto overflow-x-auto shadow-inner">
              {filterOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSelectedFilter(opt.value)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    selectedFilter === opt.value
                      ? 'bg-[#9E5370] text-[#2C0D1B] font-bold shadow-md'
                      : 'text-[#D9DCE2]/70 hover:text-[#D9DCE2] hover:bg-[#4E1B31]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={(idx % 3) * 0.1}>
              <div className="bg-[#4E1B31] rounded-2xl border border-[#D9DCE2]/20 shadow-lg hover:border-[#9E5370] hover:shadow-[0_0_24px_rgba(158,83,112,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
                <div>
                  {/* Visual Preview Container */}
                  <div className="p-4 pb-2">
                    <ProjectVisual type={project.visualType} title={project.title} />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 pt-3 space-y-3">
                    {/* Clean unboxed category metadata */}
                    <div className="text-[11px] font-mono text-[#9E5370] font-semibold truncate">
                      {project.category}
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#D9DCE2] group-hover:text-white transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#D9DCE2]/80 line-clamp-3 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Tech stack inline */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381323] text-[#D9DCE2] border border-[#D9DCE2]/15"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 text-[#9E5370]">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-[#D9DCE2]/15 mt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9E5370] hover:text-white transition-colors group/btn py-2 cursor-pointer"
                  >
                    <span>Explore Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[#D9DCE2]/70 hover:text-white hover:bg-[#381323] rounded-lg transition-colors border border-[#D9DCE2]/15"
                      title="View repository on GitHub"
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Recharts Project Complexity & Investment Analytics */}
        <ScrollReveal delay={0.2}>
          <ProjectMetricsChart />
        </ScrollReveal>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />
    </section>
  );
};
