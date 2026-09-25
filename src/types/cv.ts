export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  highlights: string[];
  sourceTraceId?: string; // Links back to raw input for anti-hallucination
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  role: string;
  period: string;
  summary: string;
  techStack: string[];
  achievements: string[];
  sourceTraceId?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  certified: boolean;
}

export interface SkillCategory {
  category: string; // e.g. "Languages & Frameworks", "AI & Cloud", "Methodologies"
  skills: string[];
}

export interface AIClaimVerification {
  bulletId: string;
  bulletText: string;
  sourceRawText: string;
  confidenceScore: number; // 0-100%
  status: 'VERIFIED' | 'NEEDS_PO_CHECK' | 'UNTRACED';
}

export interface POReviewState {
  status: 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'REJECTED';
  poName: string;
  reviewDate?: string;
  feedback?: string;
  antiHallucinationScore: number; // e.g. 98%
  costInUSD: number;
}

export interface HarvestCV {
  version: string;
  personalInfo: {
    fullName: string;
    targetRole: string; // e.g., Forward Deployed Engineer (FDE)
    program: string; // Harvest CPION-Accredited IT Post-Master
    cohort: string;
    summary: string;
    email: string;
    location: string;
    linkedin?: string;
    github?: string;
  };
  skills: SkillCategory[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: string[];
  aiVerifications: AIClaimVerification[];
  poReview: POReviewState;
}
