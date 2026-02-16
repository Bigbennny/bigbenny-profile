
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ShieldCheck, Cpu, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="Engineering Excellence" 
            />
            
            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-white/50 border border-brand-dark/5 hover:bg-white transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-dark text-brand-mint flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-brand-dark font-bold mb-1">Production-First Mindset</h4>
                  <p className="text-brand-dark/60 text-sm">Ensuring reliability and maintainability in mission-critical environments.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white/50 border border-brand-dark/5 hover:bg-white transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-gold text-white flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-brand-dark font-bold mb-1">AI-Driven Efficiency</h4>
                  <p className="text-brand-dark/60 text-sm">Accelerating development cycles by 50% using enterprise-grade AI integration.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-dark/10">
                <h4 className="text-brand-dark font-bold flex items-center gap-2 mb-4">
                  <GraduationCap className="text-brand-gold w-5 h-5" /> Education & Recognition
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-brand-dark/5 shadow-sm">
                    <p className="text-brand-dark font-bold text-sm">BSc Computer Engineering</p>
                    <p className="text-brand-dark/50 text-xs">University of Lagos, Akoka</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-brand-dark/5 shadow-sm">
                    <p className="text-brand-dark font-bold text-sm">Advanced Diploma in Meteorology/Computer Studies</p>
                    <p className="text-brand-dark/50 text-xs">Best Graduating Student Award</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
              <img 
                src="https://i.ibb.co/YT3wStZy/Portrait.jpg" 
                alt="Reuben Ogbuani" 
                className="w-full h-full object-cover brightness-105 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-brand-mint/20 rounded-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 p-8 bg-brand-dark text-white rounded-2xl shadow-2xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-black text-brand-mint">15+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-light/40 leading-tight">YEARS OF<br/>EXPERIENCE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
