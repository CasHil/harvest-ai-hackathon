import { HarvestCV } from '../types/cv';

export const initialSampleCV: HarvestCV = {
  version: "1.0.0",
  personalInfo: {
    fullName: "Alex de Vries",
    subtitle: "Forward Deployed Engineer (FDE)",
    summary: "Gedreven IT-professional met passie voor modern web development, software-architectuur en schaalbare systemen. Strong focus on enterprise quality and business impact.",
    photoUrl: "", // Can be uploaded by Harvester
    woonplaats: "Amsterdam",
    beschikbaarheid: "Direct (40 uur/week)",
    email: "alex.devries@harvester.nl",
    phone: "+31 6 12345678"
  },

  // Page 1 Left Sidebar
  skills: ["React & TypeScript", "Software Architecture", "Agile / Scrum", "REST APIs", "CI/CD Pipelines"],
  hobbies: ["Hardlopen", "Schaken", "Open-source development"],
  talen: ["Nederlands (Moedertaal)", "Engels (Vloeiend)"],

  // Page 1 Main Section
  education: [
    {
      id: "edu-1",
      degree: "CPION IT Post-Master Program",
      institution: "Harvest IT Academy",
      year: "2024 - 2025",
      details: "Gespecialiseerd in Forward Deployed Engineering, moderne cloud stacks en agile deliverable skills."
    },
    {
      id: "edu-2",
      degree: "MSc Computer Science",
      institution: "TU Delft",
      year: "2021 - 2023",
      details: "Afgestudeerd met een focus op Software Architecture & Distributed Systems."
    },
    {
      id: "edu-3",
      degree: "BSc Informatica",
      institution: "Universiteit van Amsterdam",
      year: "2018 - 2021",
      details: "Fundamentele informatica, datastructuren en algoritmen."
    }
  ],

  // Page 2 Left Sidebar
  softskills: ["Probleemoplossend", "Communicatief", "Teamplayer", "Pragmatisch", "Eigenaarschap"],
  programmeertalen: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
  tools: ["Git & GitHub", "Vite / React", "Docker", "Node.js", "PostgreSQL", "VS Code"],
  domein: ["Financiële Dienstverlening", "Enterprise IT", "E-commerce"],

  // Page 2 Main Section
  experiences: [
    {
      id: "exp-1",
      company: "Harvest",
      role: "Forward Deployed Engineer in Training",
      startDate: "2024",
      endDate: "Heden",
      location: "Utrecht / Client site",
      description: "Verantwoordelijk voor de ontwikkeling van maatwerk softwareoplossingen bij enterprise opdrachtgevers.",
      highlights: [
        "Ontwerpen en bouwen van schaalbare webapplicaties.",
        "Samenwerken in agile teams dicht bij de business."
      ]
    },
    {
      id: "exp-2",
      company: "TechSolutions B.V.",
      role: "Software Developer",
      startDate: "2023",
      endDate: "2024",
      location: "Amsterdam",
      description: "Ontwikkeling en onderhoud van React webapplicaties en cloud API's.",
      highlights: [
        "Herontwerp van de UI componentenbibliotheek.",
        "Optimalisatie van de laadtijden met 30%."
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Harvest CV Platform Prototype",
      client: "Harvest Internal",
      role: "Lead Engineer",
      period: "2025",
      summary: "Ontwerp en realisatie van een interactief CV platform volgens Harvest huisstijl.",
      techStack: ["React", "TypeScript", "Vite", "CSS Grid"],
      achievements: [
        "Gerealiseerd volgens strikte 2-pagina wireframes.",
        "Volledig browser-gebaseerde JSON import/export en PDF generator."
      ]
    }
  ],

  poReview: {
    status: "DRAFT",
    reviewerName: "Harvest Business Reviewer",
    reviewDate: "",
    feedback: "CV concept gereed voor beoordeling."
  }
};
