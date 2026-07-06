
import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const cvText = `
REUBEN CHUKWUEMEKA OGBUANI
Senior Fullstack Developer
--------------------------------------------------
Contact: +234-808-0808-660 | +234-908-4444-884
Email: bigbennyogbuani@gmail.com
GitHub: https://github.com/bigbennny
LinkedIn: https://www.linkedin.com/in/reuben-ogbuani-736b9961
Website: https://bigbennyogbuani.netlify.app

PROFESSIONAL SUMMARY
--------------------------------------------------
Senior Fullstack Developer with 12+ years of experience designing and maintaining scalable web and mobile applications across diverse industries, including mission-critical production systems. Proven expertise in PHP, React, Node.js, and cloud-native architectures, with hands-on deployment and workload management in cloud environments. Adept at leading agile teams, mentoring developers, and delivering enterprise-grade solutions for clients such as the United Nations.

In recent projects, I have leveraged advanced AI models—including Cline, ChatGPT, Copilot, Google Gemini, and AI Studio—to accelerate development cycles, reducing delivery time by over 50% while maintaining reliability and scalability. On the frontend, I’ve built robust applications with React and PHP, including a UN document management portal that improved data retrieval speed by 40%. On the backend, I’ve engineered APIs with Node.js and NestJS, optimized high-traffic databases, and deployed containerized services in cloud environments. My focus is always on reliability, scalability, and maintainability—ensuring that solutions not only work but thrive in production.

SKILLS
--------------------------------------------------
• Frontend: React, Vue, Angular, Next.js, SCSS, HTML5, CSS3, jQuery
• Backend: Node.js (JavaScript and Typescript), Express, NestJS, PHP, Java, C#, VB.NET, Python
• Mobile: React Native, Android (Java)
• DevOps & Tools: GitHub Actions, Docker, SonarCloud, Netlify, Jira, MS Teams
• Databases: MongoDB, MySQL, SQL Server, Firebase, Oracle, PostgreSQL
• Design & Prototyping: Figma, CorelDraw, UI/UX Implementation
• AI Models: Cline, Chat GPT, CoPilot, Google Gemini, AI Studio, etc.
• Other: API Development & Documentation, Chrome Extensions, Agile/Scrum, Team Leadership, and solid understanding of software design patterns and scalable backend architecture, relational databases query optimizations and schema design.

EXPERIENCE
--------------------------------------------------
Mercor – Agentic Code Writer (Remote)
2026 (February) – Present
• Leverage AI-powered development tools to write, optimize, and maintain code across diverse technology stacks.
• Collaborate with cross-functional teams to deliver software solutions that meet client specifications.
• Implement best practices for code quality, testing, and documentation.
• Apply software design patterns to create scalable and maintainable solutions.
• Utilize multiple AI models to accelerate development cycles while ensuring high-quality deliverables.

United Nations – Senior Fullstack Engineer (Remote)
2022 (July) – Dec 2025
• Led fullstack revamp of internal document management portal using React, Node.js, and Apache Solr.
• Developed scalable APIs for third-party integrations, improving data retrieval speed by 40%.
• Collaborated with global teams via Jira and MS Teams, ensuring seamless deployment and testing.
• Developed RESTful internal and third-party APIs with integrations, database creation and queries optimization to improve overall system performance; and scalable backend services and microservices architectures.
• Emphasized logging, monitoring and error handling to maintain uptime and resilience in production systems.
• Used AI Models, decreasing development time by more than 50%, also optimizing existing codes and generating API documentation.

Spexes Consulting LTD – Senior Fullstack Engineer
2021 (June) till 2022
• Collaboration with other Fullstack engineers to develop Inter-Banking and integrations banking solution (React, Node JS, and Typescript) as lead frontend engineer.
• Team lead in development of mobile applications (Medical Scheduling Application, Tractor Booking, Blood Bank Management, and a couple of others alike).
• Similar tasks as my work with the UN, which include internal and third-party API creation and integration; database creation and queries optimization, scalable backend services and microservices architectures.

Intermediate to Senior Fullstack Developer – Digital Solutions (NIG)
2010 till 2020
• Supervised the implementation of several projects, on-site and off-site, including Schools Managements, Oil-Well Sampling App, Payroll Management App, Medical Laboratories Scheduling and Management Apps, Meteorological and Climatological Data Management and Forecasting App, Financial Management App, and others alike.
• Developed and maintained several web applications (Full-Stack Development), from design to implementation and hosting (including database design).
• On-Site Projects Management, including setup of networks, computers and others peripheral devices (all hardware and software related matters).
• Headed project maintenance of each package from delivery till expiration of test period, and subsequent maintenance of applications, depending on individual project(s) agreement.
• Worked with and managed high-traffic databases, including schema design, query optimization, and safe migrations.

EDUCATION
--------------------------------------------------
University of Lagos, Akoka
• BSc (Computer Engineering) – 2nd Class Upper Division

Regional Meteorological Training Institute, Lagos, Nigeria
• Diploma in Meteorology and Computer – First Class Equivalent (Best Graduating Student Award)

PROFESSIONAL GROUPS / COMMUNITIES
--------------------------------------------------
• Stack Overflow
• Webdev Simplified
• freeCodeCamp
• Microsoft Developer Team
• Freelancer.com
• Upwork.com
• Kevin Powell – Community (CSS and Dev)
• Online Tutorials with Muhammad Ishrabad
• The Net Ninja
• And a lot of others!

REFERENCES
--------------------------------------------------
Seung Soo Son (UN Supervisor) – sons@un.org
Others available on request
    `;
    const blob = new Blob([cvText.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Reuben_Ogbuani_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20">
      {/* Background Hero Image - Scaled 50% and moved to the right */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/tpV2Kn4X/New-Profile-Pix-2.png" 
          alt="Engineering Scalable Solutions" 
          className="w-full h-full object-cover grayscale opacity-70 brightness-50 object-right scale-50 origin-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Top Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-mint/20 bg-brand-mint/5 text-brand-mint text-[10px] font-black uppercase tracking-[0.2em] mb-10 backdrop-blur-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-mint mr-2 animate-pulse" />
            15+ Years of Engineering Leadership
          </div>
          
          {/* Main Heading - High-impact typography */}
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight leading-[1.05] text-white">
            Engineering <br/>
            <span className="gradient-text">Scalable Solutions</span> <br/>
            for Global Impact.
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-brand-light/70 mb-12 leading-relaxed max-w-2xl font-light">
            I'm <span className="text-white font-semibold">Reuben Ogbuani</span>. 
            A Senior Fullstack Developer & Agentic Code Writer at <span className="text-brand-mint font-semibold">Mercor</span>, 
            crafting resilient enterprise systems with past high-impact roles at the <span className="text-brand-pink font-semibold">United Nations</span>.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-6">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-brand-mint hover:bg-brand-mint/90 text-brand-dark font-black uppercase tracking-widest text-[10px] rounded-lg transition-all flex items-center shadow-lg shadow-brand-mint/20 hover:scale-105"
            >
              Initiate a Consulting Conversation <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <button 
              onClick={handleDownloadCV}
              className="px-10 py-5 border border-brand-pink/30 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest text-[10px] rounded-lg transition-all flex items-center backdrop-blur-sm hover:scale-105"
            >
              <FileText className="mr-2 w-5 h-5 text-brand-pink" /> Download CV
            </button>
          </div>
        </div>
      </div>
      
      {/* Background Decor - Subtle gradient blur */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-brand-mint/5 blur-[150px] rounded-full pointer-events-none -z-0" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <div className="w-px h-8 bg-gradient-to-b from-brand-mint to-transparent" />
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-mint">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
