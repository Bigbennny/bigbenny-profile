
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-brand-dark text-white border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Technical Arsenal" 
          subtitle="A multi-layered stack optimized for high-performance enterprise applications and rapid AI integration."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((group) => (
            <div 
              key={group.category} 
              className="p-8 rounded-3xl bg-brand-navy/30 border border-white/5 hover:border-brand-mint/40 transition-all group"
            >
              <h3 className="text-xl font-bold mb-6 text-brand-pink group-hover:text-brand-mint transition-colors">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-brand-light/80 text-xs font-bold uppercase tracking-widest hover:bg-brand-mint hover:text-brand-dark hover:border-brand-mint transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
