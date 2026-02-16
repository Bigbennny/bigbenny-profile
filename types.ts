
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
  impact?: string;
  links?: { label: string; url: string }[];
}

export interface Project {
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  outcome: string;
  image: string;
  url?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
