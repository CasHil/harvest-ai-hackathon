export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  highlights: string[];
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
}

export interface POReviewState {
  status: 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'REJECTED';
  reviewerName: string;
  reviewDate?: string;
  feedback?: string;
}

export interface HarvestCV {
  version: string;
  personalInfo: {
    fullName: string;
    subtitle: string; // e.g. Forward Deployed Engineer (FDE)
    summary: string;
    photoUrl?: string; // base64 Data URL or URL
    woonplaats: string; // Residence / Location
    beschikbaarheid: string; // Availability
    email: string;
    phone?: string;
  };
  // Page 1 Left Sidebar fields
  skills: string[]; // General Skills
  hobbies: string[];
  talen: string[]; // Languages

  // Page 1 Main field
  education: EducationItem[];

  // Page 2 Left Sidebar fields
  softskills: string[];
  programmeertalen: string[];
  tools: string[];
  domein: string[]; // Domain experience (e.g. Banking, Energy, Public Sector)

  // Page 2 Main fields
  experiences: ExperienceItem[];
  projects: ProjectItem[];

  // Business Review State
  poReview: POReviewState;
}
