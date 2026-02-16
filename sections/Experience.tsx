
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { EXPERIENCES } from '../constants';
import { Building2, TrendingUp, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Professional Journey" 
        />
        
        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Vertical Timeline Thread */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-gold/20 hidden md:block" />
              
              <div className="md:grid md:grid-cols-5 md:gap-12">
                {/* Period Column */}
                <div className="hidden md:block md:col-span-1 pt-3">
                  <div className="text-brand-gold font-black text-xs uppercase tracking-widest mb-1">{exp.period}</div>
                  <div className="text-brand-dark/40 font-bold text-[10px] uppercase tracking-tighter">{exp.company}</div>
                </div>

                {/* Content Card */}
                <div className="md:col-span-4 relative pl-16 md:pl-0">
                  {/* Circle Node */}
                  <div className="absolute -left-[41px] md:left-[-61px] top-5 w-4 h-4 rounded-full bg-brand-light border-4 border-brand-gold z-10 group-hover:bg-brand-mint group-hover:border-brand-mint transition-all duration-300" />
                  
                  <div className="bg-white p-10 rounded-3xl shadow-xl shadow-brand-dark/5 border border-brand-dark/5 hover:border-brand-mint/30 transition-all duration-500">
                    <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                      <div>
                        <h3 className="text-2xl font-black text-brand-dark tracking-tight">{exp.role}</h3>
                        <div className="flex items-center text-brand-dark/50 text-xs font-bold uppercase tracking-widest mt-2">
                           <Building2 className="w-3.5 h-3.5 mr-1.5 text-brand-gold" /> {exp.company}
                        </div>
                      </div>
                      {exp.impact && (
                        <div className="inline-flex items-center px-4 py-2 bg-brand-mint/10 text-brand-mint text-[10px] font-black uppercase tracking-widest rounded-full border border-brand-mint/20">
                          <TrendingUp className="w-3.5 h-3.5 mr-2" /> Impact Record
                        </div>
                      )}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start text-brand-dark/70 leading-relaxed text-sm">
                          <span className="mt-2 mr-3 w-1.5 h-1.5 rounded-full bg-brand-mint flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Live Project Links */}
                    {exp.links && exp.links.length > 0 && (
                      <div className="flex flex-wrap gap-4 mb-8">
                        {exp.links.map((link, lIdx) => (
                          <a 
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-brand-dark/40 hover:text-brand-mint transition-colors border-b-2 border-transparent hover:border-brand-mint pb-0.5"
                          >
                            <ExternalLink className="w-3 h-3 mr-1.5" /> {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-brand-dark/5 text-brand-dark/60 border border-brand-dark/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
