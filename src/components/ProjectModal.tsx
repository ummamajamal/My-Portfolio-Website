import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Lightbulb, BookOpen, Layers } from 'lucide-react';
import { Project } from '../types';
import { ProjectVisual } from './ProjectVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2C0D1B]/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#44182B] rounded-2xl border-2 border-[#D9DCE2]/25 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#D9DCE2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#44182B]/95 backdrop-blur border-b border-[#D9DCE2]/15 px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#9E5370] font-semibold">
              Project Architecture & Overview
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#D9DCE2] mt-0.5">
              {project.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-[#D9DCE2] hover:bg-[#4E1B31] transition-colors cursor-pointer border border-[#D9DCE2]/15"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Interactive UI Mockup / Visual */}
          <div className="w-full">
            <ProjectVisual type={project.visualType} title={project.title} />
          </div>

          {/* Category & Status */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#D9DCE2]/80 pb-2 border-b border-[#D9DCE2]/15">
            <span className="font-semibold text-[#9E5370]">{project.category}</span>
          </div>

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#381323] p-4 rounded-xl border border-[#D9DCE2]/15 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#D9DCE2]">
                <Lightbulb className="w-4 h-4 text-[#9E5370]" /> The Problem Statement
              </div>
              <p className="text-xs sm:text-sm text-[#D9DCE2]/80 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="bg-[#381323] p-4 rounded-xl border border-[#D9DCE2]/15 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#D9DCE2]">
                <Layers className="w-4 h-4 text-[#9E5370]" /> The Engineering Approach
              </div>
              <p className="text-xs sm:text-sm text-[#D9DCE2]/80 leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D9DCE2]">
              Key Capabilities & System Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-[#381323] p-2.5 rounded-lg border border-[#D9DCE2]/15">
                  <CheckCircle2 className="w-4 h-4 text-[#9E5370] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#D9DCE2]/90 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D9DCE2]">
              Practical Engineering Insights
            </h4>
            <div className="bg-[#381323] p-3 rounded-xl border border-[#D9DCE2]/15 space-y-2">
              {project.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#D9DCE2]/85">
                  <BookOpen className="w-3.5 h-3.5 text-[#9E5370] shrink-0 mt-1" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D9DCE2]/80">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="text-xs font-mono px-2.5 py-1 rounded bg-[#4E1B31] text-[#D9DCE2] border border-[#D9DCE2]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#44182B] border-t border-[#D9DCE2]/15 px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#D9DCE2]/80 hover:text-white hover:bg-[#4E1B31] rounded-lg transition-colors cursor-pointer"
          >
            Close Overview
          </button>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#9E5370] text-[#2C0D1B] text-xs font-bold rounded-lg hover:bg-[#B26483] transition-colors shadow-md"
            >
              <Github className="w-3.5 h-3.5" /> View Repository
            </a>
          ) : (
            <span className="text-xs text-[#D9DCE2]/60 italic">
              Academic concept & research prototype
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
