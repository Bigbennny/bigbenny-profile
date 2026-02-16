
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { VALUES } from '../constants';

const Values: React.FC = () => {
  return (
    <section id="values" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Engineering Philosophy" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((val, idx) => (
            <div key={idx} className="p-10 rounded-3xl bg-white border border-brand-dark/5 hover:border-brand-mint/40 transition-all shadow-xl shadow-brand-dark/5 group">
              <div className="w-16 h-16 rounded-2xl bg-brand-dark text-brand-mint flex items-center justify-center mb-8 group-hover:bg-brand-mint group-hover:text-brand-dark transition-all duration-300">
                {/* Fix: Cast icon to React.ReactElement<any> to satisfy TypeScript for className prop in cloneElement */}
                {React.cloneElement(val.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-4 tracking-tight">{val.title}</h3>
              <p className="text-brand-dark/60 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
