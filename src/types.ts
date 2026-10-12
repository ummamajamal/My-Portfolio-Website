export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  problemStatement: string;
  approach: string;
  keyFeatures: string[];
  learningOutcomes: string[];
  technologies: string[];
  githubUrl?: string;
  visualType: 'stocksense' | 'admitcrew' | 'aivet' | 'python' | 'automation' | 'portfolio';
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    focus: string;
  }[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  institutionOrContext: string;
  description: string;
  highlights: string[];
}
