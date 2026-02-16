
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

PROFESSIONAL SUMMARY
--------------------------------------------------
Senior Fullstack Developer with 15+ years of experience designing and maintaining scalable web and mobile applications across diverse industries, including mission-critical production systems. Proven expertise in PHP, React, Node.js, and cloud-native architectures, with hands-on deployment and workload management in cloud environments. Adept at leading agile teams, mentoring developers, and delivering enterprise-grade solutions for clients such as the United Nations.
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
            A Senior Fullstack Developer crafting resilient enterprise systems for global organizations, 
            including the United Nations.
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
