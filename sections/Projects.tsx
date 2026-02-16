
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers, CheckCircle } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-brand-dark text-white border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Strategic Deliveries" 
          subtitle="A selection of high-stakes enterprise projects delivered with architectural precision."
        />
        
        <div className="grid grid-cols-1 gap-24">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center group`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-[40px] overflow-hidden aspect-video border-[8px] border-white/5 shadow-2xl group-hover:border-brand-mint/20 transition-all duration-700">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="inline-block px-4 py-1.5 bg-brand-mint/10 border border-brand-mint/30 text-brand-mint text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
                  Impact Case Study {idx + 1}
                </div>
                <h3 className="text-4xl font-black mb-8 tracking-tighter text-brand-gold">
                  {project.title}
                </h3>
                
                <div className="space-y-6 mb-10">
                  <div className="p-6 rounded-2xl bg-brand-navy/30 border border-white/5 hover:border-brand-pink/30 transition-colors group/item">
                    <h4 className="text-brand-pink font-black text-xs uppercase tracking-widest mb-3 flex items-center">
                      <Layers className="w-4 h-4 mr-2" /> Solution Architecture
                    </h4>
                    <p className="text-brand-light/70 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-brand-mint/5 border border-brand-mint/10">
                    <h4 className="text-brand-mint font-black text-xs uppercase tracking-widest mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" /> Verified Result
                    </h4>
                    <p className="text-brand-light/90 text-sm font-bold italic">"{project.outcome}"</p>
                  </div>
                </div>

                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-10 py-4 bg-brand-mint hover:bg-brand-mint/90 text-brand-dark font-black uppercase tracking-widest text-xs rounded-xl transition-all shadow-lg shadow-brand-mint/10 group/link"
                  >
                    Visit Project <ExternalLink className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
