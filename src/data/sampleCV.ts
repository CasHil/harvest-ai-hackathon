import { HarvestCV } from '../types/cv';

export const initialSampleCV: HarvestCV = {
  version: "1.0.0",
  personalInfo: {
    fullName: "Alex de Vries",
    targetRole: "Forward Deployed Engineer (FDE)",
    program: "Harvest CPION-Accredited IT Post-Master Program",
    cohort: "2025 - 2026 Cohort",
    email: "alex.devries@harvester.nl",
    location: "Amsterdam, Netherlands",
    linkedin: "linkedin.com/in/alexdevries-harvester",
    github: "github.com/alexdevries",
    summary: "High-impact Forward Deployed Engineer with expertise in building production AI agents, React/TypeScript frontends, and cloud microservices. Combines technical depth with business sensitivity to deliver live solutions directly within client enterprise teams."
  },
  skills: [
    {
      category: "Frontend & Web",
      skills: ["React 18", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "HTML5/CSS3"]
    },
    {
      category: "AI & Backend Engineering",
      skills: ["OpenRouter API", "Claude 3.5 Sonnet", "Node.js", "Python", "REST APIs", "RAG Pipelines"]
    },
    {
      category: "DevOps & Quality",
      skills: ["GitHub Actions", "Docker", "Vercel", "Jest / Vitest", "Git", "CPION Governance"]
    }
  ],
  experiences: [
    {
      id: "exp-1",
      company: "Harvest IT Post-Master",
      role: "Forward Deployed Engineer in Training",
      startDate: "Oct 2024",
      endDate: "Present",
      location: "Utrecht, NL",
      description: "Undergoing intensive 12-month post-master training in software architecture, agentic engineering, and enterprise consulting.",
      highlights: [
        "Architected an agentic workflow harness for automated code generation and compliance tracking.",
        "Collaborated with enterprise POs to reduce sprint lead time by 35% using AI-driven specification tools."
      ],
      sourceTraceId: "raw-input-line-1"
    },
    {
      id: "exp-2",
      company: "TechScale Solutions",
      role: "Junior Full-Stack Developer",
      startDate: "Sep 2023",
      endDate: "Sep 2024",
      location: "Amsterdam, NL",
      description: "Developed customer-facing dashboard features and optimized REST API endpoints for a SaaS analytics platform.",
      highlights: [
        "Built dynamic data visualizations in React used daily by over 12,000 active enterprise users.",
        "Refactored legacy state management, reducing bundle size by 28% and page load time by 400ms."
      ],
      sourceTraceId: "raw-input-line-2"
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Harvest AI CV Generator & Verifier",
      client: "Harvest Internal Business Systems",
      role: "Lead Forward Deployed Engineer",
      period: "Hackathon MVP (2025)",
      summary: "Designed and implemented a 2-role web application allowing Harvesters to generate structured CVs while enabling POs to audit claims with zero-hallucination verification.",
      techStack: ["React", "TypeScript", "OpenRouter API", "Tailwind CSS", "GitHub Actions"],
      achievements: [
        "Integrated anti-hallucination source tracking to link every CV bullet back to verifiable input evidence.",
        "Optimized client-side model orchestration to achieve < $0.015 processing cost per generated CV."
      ],
      sourceTraceId: "raw-input-line-3"
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "MSc Computer Science & Software Engineering",
      institution: "Delft University of Technology (TU Delft)",
      year: "2023",
      certified: true
    },
    {
      id: "edu-2",
      degree: "BSc Computer Science",
      institution: "University of Amsterdam (UvA)",
      year: "2021",
      certified: true
    }
  ],
  certifications: [
    "Harvest CPION IT Post-Master Certificate (In Progress)",
    "AWS Certified Solutions Architect – Associate",
    "Professional Scrum Master I (PSM I)"
  ],
  aiVerifications: [
    {
      bulletId: "bullet-1",
      bulletText: "Architected an agentic workflow harness for automated code generation and compliance tracking.",
      sourceRawText: "Worked on building agentic harness scripts and compliance checks in git repos during Harvest training.",
      confidenceScore: 98,
      status: "VERIFIED"
    },
    {
      bulletId: "bullet-2",
      bulletText: "Built dynamic data visualizations in React used daily by over 12,000 active enterprise users.",
      sourceRawText: "Created React dashboard charts for TechScale SaaS platform with ~12k daily active users.",
      confidenceScore: 95,
      status: "VERIFIED"
    },
    {
      bulletId: "bullet-3",
      bulletText: "Optimized client-side model orchestration to achieve < $0.015 processing cost per generated CV.",
      sourceRawText: "Benchmarked OpenRouter API calls using Claude Sonnet and GPT-4o-mini to calculate token usage cost.",
      confidenceScore: 99,
      status: "VERIFIED"
    }
  ],
  poReview: {
    status: "SUBMITTED",
    poName: "Harvest Business Manager",
    antiHallucinationScore: 97,
    costInUSD: 0.012,
    feedback: "High quality overview. Technical highlights match Harvester's verified TU Delft degree and client project records."
  }
};
