import { Project, SkillCategory, JourneyMilestone } from '../types';

export const PERSONAL_INFO = {
  name: "Ummama Jamal Qureshi",
  headline: "Building Intelligent Solutions, One Workflow at a Time.",
  role: "AI Automation | Python Development | Intelligent Web Applications",
  motto: "Dream beyond what exists, learn beyond what is known, and build what once seemed impossible.",
  mottoAttribution: "My personal motto",
  education: {
    status: "First Year ICS Student",
    institution: "Concordia Colleges",
    location: "Nowshera, Pakistan",
    focus: "Computer Science, Mathematics, Algorithmic Thinking & Python Programming"
  },
  bio: `I am Ummama Jamal Qureshi, a first-year ICS student at Concordia Colleges in Nowshera, Pakistan, with a growing passion for artificial intelligence, Python programming, and automation.

For me, technology is more than writing code or building attractive websites. It is an opportunity to rethink how everyday work gets done. I am fascinated by the idea that a repetitive task can become an intelligent workflow, that scattered information can become a useful system, and that an ordinary problem can inspire a genuinely practical digital solution.

My learning journey is driven by experimentation. I enjoy exploring how AI agents, APIs, databases, automation workflows, and user interfaces can work together to solve real problems. Rather than limiting myself to tutorials, I challenge myself to build projects, test functionality, troubleshoot errors, and understand how the pieces connect.

Through my project work, I have explored inventory management, admissions assistance, AI-powered veterinary support, automation workflows, and interactive web experiences. Every project gives me an opportunity to improve my technical thinking, learn from mistakes, and turn ideas into something people can actually use.

I am still at the beginning of my journey, and that is precisely what makes it exciting. I want to keep learning, ask better questions, build more useful systems, and develop the discipline to turn ambitious ideas into dependable products.

My goal is to become a skilled developer and AI automation engineer who builds technology with purpose: solutions that save time, reduce unnecessary complexity, and make everyday work a little smarter.`,
  socialLinks: {
    github: "https://github.com/ummamajamal",
    email: "ummamajamalqureshi@gmail.com",
    linkedin: "https://linkedin.com/in/ummamajamal",
    whatsapp: "https://wa.me/?text=Hello%20Ummama%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
    devconnect: "https://devpost.com/ummamajamal",
    location: "Nowshera, Khyber Pakhtunkhwa, Pakistan"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "stocksense-ai-inventory",
    title: "StockSense AI Inventory",
    category: "AI Inventory Management | Python | FastAPI | Supabase | React",
    shortDescription: "An AI-assisted inventory management system designed for small and medium shops to replace chaotic paper registers and WhatsApp tracking with structured workflows.",
    problemStatement: "Small and medium-sized shops often track inventory through paper ledgers, fragmented WhatsApp messages, and manual counts. This causes stockouts, lost sales, inaccurate reconciliations, and unauthorized access to cost margins.",
    approach: "StockSense bridges the gap between structured database storage and everyday conversational communication. Staff can check stock levels, record incoming and outgoing shipments, and prepare draft stock adjustments for supervisor sign-off. Strict role-based permissions hide sensitive profit and supplier pricing from front-line staff while keeping Supabase as the immutable source of truth.",
    keyFeatures: [
      "Natural language stock querying for desk staff without complex search screens",
      "Automated low-stock threshold triggers & reorder warnings",
      "Strict role-based access control (RBAC): Staff vs Manager permission tiers",
      "Negative-inventory prevention logic enforced at the database and API level",
      "Full audit trail of stock movements with timestamped supervisor confirmation"
    ],
    learningOutcomes: [
      "Designed relational schemas and Row-Level Security in Supabase",
      "Built clean FastAPI REST endpoints with structured Pydantic validation",
      "Learned state synchronization between conversational prompts and database transactions"
    ],
    technologies: ["Python", "FastAPI", "Supabase", "PostgreSQL", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/ummamajamal/Stock-Sense-AI-Inventory-Management-System.",
    visualType: "stocksense",
    accentColor: "#71334F"
  },
  {
    id: "admitcrew-admissions-team",
    title: "AdmitCrew / AdmitQ",
    category: "Agentic AI | Admissions Automation | React | Vite | AI Studio",
    shortDescription: "Agentic AI admissions team concept designed for study-abroad consultancies to handle high inquiry volumes across WhatsApp, social channels, and phone calls.",
    problemStatement: "Admissions teams at educational consultancies in Nowshera are flooded with repetitive queries concerning tuition fees, application deadlines, minimum IELTS/TOEFL bands, and document checklists. Staff spend hours answering the same questions while high-intent applicants wait for replies.",
    approach: "AdmitCrew explores how specialized, collaborating AI agents can serve as a first-line intake desk: greeting prospective students, providing accredited program info, verifying document checklists, qualifying academic backgrounds, and routing ready-to-apply files to human counselors with clear structured notes.",
    keyFeatures: [
      "Multi-agent task division: Greeter Agent, Document Screener, Eligibility Classifier",
      "Automated document requirement checklist generator based on target country/degree",
      "Lead scoring and contact qualification captured into a centralized CRM pipeline",
      "Human-in-the-loop escalation: critical decisions and visa guidance stay with counselors",
      "Prepares conversational follow-up summaries for WhatsApp and email dispatch"
    ],
    learningOutcomes: [
      "Mastered agent prompting strategies, tool calling, and guardrails",
      "Implemented structured JSON outputs for seamless CRM database ingestion",
      "Designed compassionate, transparent UX ensuring applicants know an AI is assisting"
    ],
    technologies: ["Agentic AI", "React", "Vite", "TypeScript", "AI Studio", "Tailwind CSS", "REST APIs"],
    githubUrl: "https://github.com/ummamajamal/ADMITCREW-Agentic-Teams-for-Admissions.",
    visualType: "admitcrew",
    accentColor: "#B87591"
  },
  {
    id: "ai-vet-agent",
    title: "AI Vet Agent",
    category: "AI Assistant | Python | FastAPI | Image and Symptom Analysis",
    shortDescription: "An AI-assisted veterinary triage support concept to help pet owners organize symptom details, observations, and photos before seeking professional clinic care.",
    problemStatement: "When pets display signs of illness or injury, pet guardians frequently struggle to accurately describe symptoms, evaluate urgency, or recognize emergency indicators, often delaying critical veterinary treatment or panicking unnecessarily.",
    approach: "AI Vet Agent provides an empathetic, structured triage assistant. It records pet profiles (breed, age, diet, medical history), prompts owners for vital symptom details through targeted checklists, notes observations from user-provided images, and compiles a clear medical briefing for the veterinarian. It is deliberately architected never to provide definitive diagnosis or replace licensed veterinary medicine.",
    keyFeatures: [
      "Structured symptom intake questionnaire with behavioral and physical signals",
      "Image-based visual observation notes (e.g. skin irritation, posture, eye discharge)",
      "Urgency level scoring (Emergency Clinic immediately vs Schedule routine checkup)",
      "Automated Pet Health Summary export ready for veterinary clinic intake",
      "Clear medical disclaimer guardrails preventing speculative self-medication advice"
    ],
    learningOutcomes: [
      "Implemented responsible AI ethical constraints and medical safety guardrails",
      "Processed multimodal user inputs (photographs + contextual questionnaires)",
      "Built resilient FastAPI endpoints with structured symptom classifications"
    ],
    technologies: ["Python", "FastAPI", "Multimodal AI", "Pydantic", "React", "Tailwind CSS"],
    visualType: "aivet",
    accentColor: "#71334F"
  },
  {
    id: "personal-python-projects",
    title: "Personal Python Projects & Interactive Applications",
    category: "Python Programming | Logic | Problem Solving",
    shortDescription: "A curated collection of practical programming projects, interactive utilities, simulations, and 2D games showcasing core programming logic and algorithmic exploration.",
    problemStatement: "Mastering software engineering requires rigorous hands-on problem solving beyond surface tutorials—wrestling with data structures, object-oriented principles, game loops, and mathematical models from first principles.",
    approach: "Built a suite of functional standalone applications demonstrating programming logic: a full Student Data Management System with CRUD operations and file storage, a fast 2D Space Shooter arcade game with collision physics, and an interactive 3D Sphere & Black Hole mathematical simulation rendering spatial coordinates.",
    keyFeatures: [
      "Student Data Management System: Record indexing, search algorithms, data persistence",
      "Space Shooter Game: Pygame rendering loop, projectile trajectories, score tracking",
      "Black Hole & 3D Celestial Simulation: Vector mathematics, particle physics projection",
      "Clean modular code structure with error handling, functions, dictionaries, and classes"
    ],
    learningOutcomes: [
      "Deepened understanding of memory, loops, conditional trees, and OOP architecture",
      "Applied trigonometry and coordinate transformations for visual rendering",
      "Cultivated disciplined debugging and refactoring habits in pure Python"
    ],
    technologies: ["Python 3", "Pygame", "Math & Vectors", "File I/O", "Data Structures"],
    githubUrl: "https://github.com/ummamajamal/Student-Data-Management-System-with-Pyhton.",
    visualType: "python",
    accentColor: "#71334F"
  },
  {
    id: "ai-automation-workflow-engineering",
    title: "AI Automation & Workflow Engineering",
    category: "AI Automation | APIs | Webhooks | Workflow Design",
    shortDescription: "Modular automation pipelines integrating webhook triggers, multi-stage LLM data processing, database synchronization, and human approval checkpoints.",
    problemStatement: "Organizations lose hundreds of hours copying information between web forms, email threads, chat apps, and spreadsheets. Manual data re-entry introduces errors, delays approvals, and frustrates customers.",
    approach: "Designed end-to-end automation workflows that listen for events (webhooks, email leads, form submissions), parse unstructured data using AI, query relational databases, perform cross-checks, and trigger conditional notifications—always retaining human review gates before critical actions.",
    keyFeatures: [
      "QuickFix Smart Work business pipeline integrating real-time lead ingestion",
      "Webhook listeners triggering asynchronous validation and routing",
      "Document parsing & entity extraction to replace manual data entry",
      "Human-in-the-loop approval workflows with one-click verification",
      "Automated follow-up scheduling and notification dispatch"
    ],
    learningOutcomes: [
      "Configured robust webhook receivers with idempotent event handling",
      "Designed defensive workflows with automatic fallback when APIs timeout",
      "Understood how to coordinate multi-step data pipelines securely"
    ],
    technologies: ["Python", "Webhooks", "REST APIs", "FastAPI", "JSON Schema", "Supabase"],
    githubUrl: "https://github.com/ummamajamal/QuickFix-Smart-Work-AI-Powered-Business-Workflow-Automation",
    visualType: "automation",
    accentColor: "#B87591"
  },
  {
    id: "personal-portfolio-web-dev",
    title: "Personal Portfolio & Web Development",
    category: "React | Vite | Responsive Web Design",
    shortDescription: "A bespoke, accessible web development showcase engineered with React 19, Vite, Tailwind CSS, custom aesthetic palettes, and responsive editorial layout.",
    problemStatement: "Many personal portfolios rely on identical generic templates with repetitive pill tags, black backgrounds, or bloated 3D environments that slow down page loads and distract from the actual engineering work.",
    approach: "Built this refined web application from the ground up using a signature luxury palette (Shiny Silver #D9DCE2, Shiny Plum #71334F, and Luxura #B87591), strict zero-pill typographic discipline, accessible contrast ratios, and modular React architecture.",
    keyFeatures: [
      "Bespoke luxury palette featuring Shiny Silver, Shiny Plum, and Luxura without black backgrounds or generic themes",
      "Authentic photographic portrait integration with zero AI distortion",
      "Interactive project preview terminals and architectural modal breakdowns",
      "Responsive editorial typography pairing Cormorant Garamond with Plus Jakarta Sans",
      "Accessible keyboard navigation, WCAG AA contrast, and zero layout shift"
    ],
    learningOutcomes: [
      "Engineered performant React 19 component structures with Vite",
      "Implemented strict design systems and semantic typography hierarchies",
      "Practiced production-ready front-end accessibility and cross-browser testing"
    ],
    technologies: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "Motion", "Lucide Icons"],
    githubUrl: "https://github.com/ummamajamal",
    visualType: "portfolio",
    accentColor: "#71334F"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Python Development & Logic",
    description: "Core programming, backend architecture, algorithm implementation, and data manipulation.",
    skills: [
      { name: "Python 3 Core", level: "Intermediate", focus: "OOP, Data Structures, Functions, File I/O" },
      { name: "FastAPI", level: "Building", focus: "REST API endpoints, Pydantic schemas, routing" },
      { name: "Scripting & Automation", level: "Intermediate", focus: "Task automation, file processing, data transformation" },
      { name: "Pygame & Simulations", level: "Practical", focus: "2D game loops, coordinate math, event handling" }
    ]
  },
  {
    title: "AI & Intelligent Systems",
    description: "Prompt engineering, agentic workflows, API integration, and structured responses.",
    skills: [
      { name: "Agentic AI Concepts", level: "Building", focus: "Multi-agent coordination, role division, guardrails" },
      { name: "Google AI Studio & Gemini API", level: "Practical", focus: "Model integration, structured JSON outputs, multimodal" },
      { name: "Prompt Architecture", level: "Advanced", focus: "System instructions, boundary enforcement, zero-hallucination" },
      { name: "Triage & Assistant Systems", level: "Building", focus: "Domain-specific questionnaires, recommendation logic" }
    ]
  },
  {
    title: "Workflow Engineering & APIs",
    description: "Connecting apps, databases, and services into reliable automated pipelines.",
    skills: [
      { name: "Webhook Triggers", level: "Building", focus: "Event ingestion, payload parsing, async handlers" },
      { name: "API Integration", level: "Practical", focus: "RESTful endpoints, HTTP clients, auth tokens" },
      { name: "Human-in-the-Loop Design", level: "Practical", focus: "Approval stages, draft reviews, safety verification" },
      { name: "Supabase & PostgreSQL", level: "Building", focus: "Relational tables, schema design, Row-Level Security" }
    ]
  },
  {
    title: "Modern Web & UI Development",
    description: "Building responsive, editorial, performant user interfaces with clean styling.",
    skills: [
      { name: "React & TypeScript", level: "Practical", focus: "Component architecture, hooks, typed state" },
      { name: "Vite Build Tool", level: "Practical", focus: "Fast dev loops, bundler config, static assets" },
      { name: "Tailwind CSS", level: "Advanced", focus: "Design tokens, responsive layouts, luxury palettes" },
      { name: "Web Accessibility (WCAG)", level: "Practical", focus: "Keyboard navigation, contrast, semantic HTML" }
    ]
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: "Present (2026)",
    title: "First-Year ICS Student & Active Developer",
    institutionOrContext: "Concordia Colleges, Nowshera, Pakistan",
    description: "Focusing on academic foundations in computer science and mathematics while actively designing and engineering real-world AI automation systems, APIs, and web interfaces.",
    highlights: [
      "Designed and coded StockSense AI Inventory prototype for retail stockrooms",
      "Created AdmitCrew multi-agent concept for admissions workflow optimization",
      "Explored ethical multimodal AI in the AI Vet Agent healthcare triage concept"
    ]
  },
  {
    period: "2025 - 2026",
    title: "Expanding into AI Automation & Workflows",
    institutionOrContext: "Independent Practical Exploration",
    description: "Moved beyond isolated scripts into connected systems—connecting webhooks, cloud databases (Supabase), FastAPI microservices, and conversational AI agents.",
    highlights: [
      "Engineered QuickFix Smart Work automated lead and document pipeline",
      "Integrated Supabase with FastAPI to enforce role-based access and data integrity",
      "Explored structured JSON prompting and tool-calling with AI Studio"
    ]
  },
  {
    period: "2024 - 2025",
    title: "Python Foundations, Logic & Creative Coding",
    institutionOrContext: "Self-Directed Software Engineering",
    description: "Built a solid programming foundation through hands-on development: creating console data managers, interactive 2D games, and algorithmic mathematical simulations.",
    highlights: [
      "Engineered Student Data Management System with CRUD and file persistence",
      "Built Space Shooter 2D arcade game from scratch using Python and Pygame",
      "Experimented with 3D coordinate mathematics and celestial black hole simulations"
    ]
  }
];
