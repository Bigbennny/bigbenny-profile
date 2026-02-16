
import React from 'react';
import { 
  Users, 
  Cpu,
  Layout,
  BrainCircuit
} from 'lucide-react';
import { Experience, Project, SkillGroup } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "United Nations",
    role: "Senior Fullstack Engineer (Remote)",
    period: "July 2022 – Dec 2025",
    description: [
      "Led fullstack revamp of internal document management portal using React.js, Node.js, SOLR, and microservices architecture, emphasizing reliability and unit testing.",
      "Collaborated across international teams (Cross-team Collaboration) using Agile Methodologies and GitHub to deliver complex project designs.",
      "Developed and documented scalable APIs (API Development & Documentation) improving global data accessibility.",
      "Leveraged Artificial Intelligence (AI) and Python for advanced document indexing and automated problem solving.",
      "Managed back-end web development lifecycle with NPM, SQL, and NoSQL databases for mission-critical systems."
    ],
    impact: "Improved data retrieval performance by 40% and reduced dev cycles by 50% through strategic AI integration and project design.",
    tech: ["React.js", "Node.js", "SOLR", "Python", "SQL", "NoSQL", "API Development", "Microservices", "Unit Testing", "Agile", "JSX", "HTML5", "CSS", "GitHub", "NPM", "AI"],
    links: [
      { label: "UN Documents Portal", url: "https://documents.un.org" },
      { label: "UN Search System", url: "https://search.un.org" }
    ]
  },
  {
    company: "Spexes Consulting LTD",
    role: "Senior Fullstack Engineer",
    period: "June 2021 – 2022",
    description: [
      "Lead Frontend Engineer for Inter-Banking solutions using React JS and TypeScript, delivering robust features with JSX and modern JavaScript.",
      "Spearheaded back-end web development using Node JS and Express JS, managing SQL, NoSQL, XML, and JSON data layers.",
      "Architected microservices and third-party APIs while maintaining high reliability through unit testing, Docker, and Sonar Cloud.",
      "Facilitated cross-team collaboration and communication within Agile Methodologies, leveraging AI-assisted development and CI/CD pipelines to solve complex problems."
    ],
    impact: "Led front-end architecture for critical inter-banking systems and improved deployment reliability through CI/CD and Sonar Cloud.",
    tech: ["React JS", "Node JS", "Express JS", "TypeScript", "SQL", "NoSQL", "Docker", "CI/CD", "AI-assisted development", "Sonar Cloud", "Agile", "Unit Testing", "JSON", "XML", "JSX", "npm", "JavaScript"]
  },
  {
    company: "Digital Solutions (NIG)",
    role: "Intermediate to Senior Fullstack Developer",
    period: "2010 – 2020",
    description: [
      "Supervised implementation of mission-critical projects including Oil-Well Sampling and Meteorological Forecasting apps across Web, Windows, and Mobile.",
      "Project ownership of Schools Management, Payroll, and Medical Lab Scheduling systems; provided mentoring to junior engineers.",
      "Architected enterprise-grade systems using VB.Net, C#, and Java, managing complex databases on SQL Server, Oracle, and MySQL.",
      "Handled full-cycle hardware and network infrastructure setup and maintenance, including AWS cloud deployments."
    ],
    impact: "A decade of delivering diverse enterprise solutions and mentoring teams across multiple platforms.",
    tech: ["VB.Net", "C#", "React Native", "TypeScript", "SQL Server", "Oracle", "MySQL", "AWS", "Java", "JSON", "XML", "Mentoring", "Windows Dev", "Mobile Dev", "Web Dev", "Networking", "Hardware"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "UN Official Document System",
    problem: "Global requirement for a secure, high-availability repository for official UN records and legislative documents.",
    solution: "Architected a mission-critical archival system ensuring multi-region data persistence and strict accessibility standards.",
    outcome: "Secured global access to millions of official records with 99.9% system uptime and sub-second retrieval speeds.",
    tech: ["React.js", "Node.js", "SOLR", "Enterprise Security"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    url: "https://documents.un.org"
  },
  {
    title: "UN - Unite Search",
    problem: "Fragmented search experience across disparate UN document silos, hindering researcher productivity.",
    solution: "Implemented a centralized, AI-enhanced search engine using SOLR and Microservices to unify multiple document streams.",
    outcome: "Unified access to diverse UN content, significantly increasing search efficiency for global missions.",
    tech: ["SOLR", "Microservices", "Python", "React"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    url: "https://search.un.org"
  },
  {
    title: "Inter-Banking Integration Portal",
    problem: "Lack of real-time synchronization and high latency in inter-banking financial communications.",
    solution: "Engineered a high-performance integration hub with real-time sync logic and robust error handling.",
    outcome: "Reduced inter-bank transaction latency by 60% while maintaining absolute data integrity and audit trails.",
    tech: ["React JS", "Node JS", "SQL", "TypeScript"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Meteorological Data Hub",
    problem: "Inefficient logging and archival of critical climatological data from remote regional weather stations.",
    solution: "Developed a specialized weather data archiving suite with real-time processing and historical analysis capabilities.",
    outcome: "Enabled first-class forecasting accuracy through reliable data capture and streamlined archival protocols.",
    tech: ["VB.Net", "SQL Server", "Meteorology", "Data Science"],
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Doctors Appointments App",
    problem: "Manual scheduling leading to patient bottlenecks and administrative overhead in busy clinics.",
    solution: "Created a robust scheduling engine with automated slot management and real-time patient notifications.",
    outcome: "Successfully streamlined clinic operations, reducing patient wait times by an average of 40%.",
    tech: ["C#", "SQL Server", "Web API", "React Native"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Lab Management System",
    problem: "Disjointed workflows between clinical sample collection, diagnosis, and final result reporting.",
    solution: "Architected an end-to-end management platform unifying laboratory workflows and patient data security.",
    outcome: "Accelerated the clinical diagnosis cycle and improved record accuracy across regional medical facilities.",
    tech: ["Fullstack", "Database Management", "Security"],
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800",
    url: "https://funtom-medicals.com.ng"
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "AI Models & Productivity",
    skills: ["Cline", "Gemini", "AI Studio", "ChatGPT", "GitHub CoPilot", "AI-Assisted Dev"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Vue", "Angular", "TypeScript", "SCSS", "HTML5", "JSX", "jQuery"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "Express", "PHP", "Java", "C#", "VB.NET", "Python", "API Dev"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "NoSQL", "Firebase", "Oracle"]
  },
  {
    category: "Mobile & DevOps",
    skills: ["React Native", "Android (Java)", "Docker", "GitHub Actions", "Unit Testing", "SonarCloud"]
  },
  {
    category: "Soft Skills & Process",
    skills: ["Teamwork", "Agile", "Cross-team Collaboration", "Problem Solving", "Project Design", "Communication"]
  }
];

export const VALUES = [
  {
    title: "AI-Accelerated Dev",
    desc: "Leveraging advanced AI models to reduce delivery time by 50% without compromising reliability.",
    icon: <BrainCircuit className="w-6 h-6" />
  },
  {
    title: "Mission-Critical Scaling",
    desc: "15+ years of experience designing systems that thrive in high-traffic production environments.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Team Leadership",
    desc: "Adept at leading agile teams and mentoring developers to deliver enterprise-grade solutions.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Clean Architecture",
    desc: "Expertise in software design patterns and scalable backend architecture for long-term maintainability.",
    icon: <Layout className="w-6 h-6" />
  }
];
