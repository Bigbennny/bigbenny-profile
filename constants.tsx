
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
    company: "Mercor",
    role: "Agentic Code Writer (Remote)",
    period: "Feb 2026 – Present",
    description: [
      "Leverage AI-powered development tools to write, optimize, and maintain code across diverse technology stacks.",
      "Collaborate with cross-functional teams to deliver software solutions that meet client specifications.",
      "Implement best practices for code quality, testing, and documentation.",
      "Apply software design patterns to create scalable and maintainable solutions.",
      "Utilize multiple AI models to accelerate development cycles while ensuring high-quality deliverables."
    ],
    impact: "Accelerated enterprise-grade delivery timelines and maintained clean, high-availability codebases across diverse stacks using agentic AI workflows.",
    tech: ["AI-powered Development", "AI Models", "Software Design Patterns", "Multi-stack Engineering", "Agentic Workflows", "Prompt Engineering"]
  },
  {
    company: "United Nations",
    role: "Senior Fullstack Engineer (Remote)",
    period: "July 2022 – Dec 2025",
    description: [
      "Led fullstack revamp of internal document management portal using React, Node.js, and Apache Solr.",
      "Developed scalable APIs for third-party integrations, improving data retrieval speed by 40%.",
      "Collaborated with global teams via Jira and MS Teams, ensuring seamless deployment and testing.",
      "Developed RESTful internal and third-party APIs with integrations, database creation, and queries optimization to improve overall system performance, as well as scalable backend services and microservices architectures.",
      "Emphasized logging, monitoring, and error handling to maintain uptime and resilience in production systems.",
      "Used AI Models to decrease development time by more than 50%, while optimizing existing codebase and generating robust API documentation."
    ],
    impact: "Improved data retrieval performance by 40% and reduced dev cycles by 50% through strategic AI integration and project design.",
    tech: ["React", "Node.js", "Apache Solr", "Python", "SQL", "NoSQL", "API Development", "Microservices", "Unit Testing", "Agile", "GitHub", "NPM", "AI", "Jira", "MS Teams", "Logging & Monitoring"],
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
      "Collaborated with other Fullstack engineers to develop an Inter-Banking and integrations banking solution (React, Node JS, and Typescript) as lead frontend engineer.",
      "Team lead in development of mobile applications (Medical Scheduling Application, Tractor Booking, Blood Bank Management, and others alike).",
      "Handled internal and third-party API creation and integration, database creation, query optimization, and scalable backend services."
    ],
    impact: "Led front-end architecture for critical inter-banking systems and improved deployment reliability through CI/CD and Sonar Cloud.",
    tech: ["React JS", "Node JS", "Express JS", "TypeScript", "SQL", "NoSQL", "Docker", "CI/CD", "AI-assisted development", "Sonar Cloud", "Agile", "Unit Testing", "JSON", "XML", "JSX", "npm", "JavaScript"]
  },
  {
    company: "Digital Solutions (NIG)",
    role: "Intermediate to Senior Fullstack Developer",
    period: "2010 – 2020",
    description: [
      "Supervised implementation of several projects, on-site and off-site, including Schools Management, Oil-Well Sampling, Payroll, Medical Labs, and Financial systems.",
      "Developed and maintained several web applications (Full-Stack Development) from design to implementation and hosting, including robust database design.",
      "On-Site Projects Management, including setup of networks, computers, and other peripheral devices.",
      "Headed project maintenance of each package from delivery till expiration of test period and subsequent maintenance of applications.",
      "Worked with and managed high-traffic databases, including schema design, query optimization, and safe migrations."
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
    category: "AI Models & Tools",
    skills: ["Cline", "ChatGPT", "CoPilot", "Google Gemini", "AI Studio", "AI-Assisted Dev"]
  },
  {
    category: "Frontend",
    skills: ["React", "Vue", "Angular", "Next.js", "SCSS", "HTML5", "CSS3", "jQuery", "JSX"]
  },
  {
    category: "Backend",
    skills: ["Node.js (JavaScript & Typescript)", "Express", "NestJS", "PHP", "Java", "C#", "VB.NET", "Python"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Firebase", "Oracle", "NoSQL"]
  },
  {
    category: "Mobile & DevOps",
    skills: ["React Native", "Android (Java)", "GitHub Actions", "Docker", "SonarCloud", "Netlify", "CI/CD"]
  },
  {
    category: "Systems & Design",
    skills: ["Figma", "CorelDraw", "UI/UX Implementation", "API Development & Documentation", "Agile/Scrum", "Team Leadership", "Chrome Extensions", "Database Optimization", "Schema Design", "Jira", "MS Teams"]
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
