
import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Values from './sections/Values';
import Contact from './sections/Contact';
import AIChatBubble from './components/AIChatBubble';
import { Menu, X, Terminal, Github, Linkedin, Mail, Phone, Facebook, ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-brand-mint/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={scrollToTop}>
            <div className="w-12 h-12 rounded-2xl bg-brand-mint flex items-center justify-center shadow-lg shadow-brand-mint/20">
              <Terminal className="text-brand-dark w-6 h-6" />
            </div>
            <div className={`font-ubuntu font-semibold text-2xl tracking-[0.1px] transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>
              REUBEN <span className="text-brand-mint">OGBUANI</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-light/60 hover:text-brand-mint transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-xl bg-brand-mint text-brand-dark text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-brand-mint/20"
            >
              Consult Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-brand-mint"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-white/5 py-12 px-8 flex flex-col gap-8 animate-in slide-in-from-top-4">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-3xl font-black uppercase tracking-tighter text-white hover:text-brand-mint"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Values />
        <Contact />
      </main>

      {/* Redesigned Footer */}
      <footer className="pt-24 pb-12 bg-brand-dark/90 text-white border-t border-white/5 backdrop-blur-md relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-mint/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                {/* Logo size reduced further from w-10 to w-8 */}
                <div className="w-8 h-8 rounded-lg bg-brand-mint flex items-center justify-center">
                  {/* Icon size reduced further */}
                  <Terminal className="text-brand-dark w-4 h-4" />
                </div>
                {/* Font size reduced further to text-lg */}
                <div className="font-ubuntu font-semibold text-lg tracking-[0.1px] text-white">
                  REUBEN <span className="text-brand-mint">OGBUANI</span>
                </div>
              </div>
              <p className="text-brand-light/40 text-sm leading-relaxed max-w-xs font-medium">
                Senior Fullstack Engineer specializing in high-availability enterprise systems and AI-accelerated development lifecycles.
              </p>
              <p className="text-brand-gold text-xs font-black uppercase tracking-widest italic">
                "Architecting global impact."
              </p>
            </div>

            {/* Column 2: Directory */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-mint">Directory</h4>
              <nav className="flex flex-col gap-4">
                {navItems.map(item => (
                  <a key={item.name} href={item.href} className="text-brand-light/60 hover:text-white text-sm font-bold transition-colors w-fit">
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3: Direct Line */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-mint">Direct Line</h4>
              <div className="flex flex-col gap-6">
                <a href="mailto:bigbennyogbuani@gmail.com" className="group flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-mint/20 transition-all">
                    <Mail className="w-4 h-4 text-brand-mint" />
                  </div>
                  <span className="text-sm font-medium text-brand-light/60 group-hover:text-white transition-colors">Email Terminal</span>
                </a>
                <a href="tel:+2348080808660" className="group flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-mint/20 transition-all">
                    <Phone className="w-4 h-4 text-brand-mint" />
                  </div>
                  <span className="text-sm font-medium text-brand-light/60 group-hover:text-white transition-colors">+234 808 0808 660</span>
                </a>
              </div>
            </div>

            {/* Column 4: Network */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-mint">Network</h4>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://github.com/bigbennny" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-mint/50 transition-all group">
                  <Github className="w-4 h-4 text-brand-light/40 group-hover:text-brand-mint transition-colors" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-light/40 group-hover:text-white">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/reuben-ogbuani-736b9961" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-mint/50 transition-all group">
                  <Linkedin className="w-4 h-4 text-brand-light/40 group-hover:text-brand-mint transition-colors" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-light/40 group-hover:text-white">LinkedIn</span>
                </a>
                <a href="https://wa.me/2348080808660" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-mint/50 transition-all group">
                  <Phone className="w-4 h-4 text-brand-light/40 group-hover:text-brand-mint transition-colors" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-light/40 group-hover:text-white">WhatsApp</span>
                </a>
                <a href="https://web.facebook.com/chukwuemeka.ogbuani" target="_blank" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-mint/50 transition-all group">
                  <Facebook className="w-4 h-4 text-brand-light/40 group-hover:text-brand-mint transition-colors" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-brand-light/40 group-hover:text-white">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Meta Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] text-center md:text-left">
              © {new Date().getFullYear()} Reuben Ogbuani — All Rights Reserved
            </p>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-brand-mint hover:text-brand-dark transition-all duration-500"
            >
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-brand-dark">Back to Zenith</span>
              <ChevronUp className="w-4 h-4 text-brand-mint group-hover:text-brand-dark transition-colors" />
            </button>
          </div>
        </div>
      </footer>

      <AIChatBubble />
    </div>
  );
};

export default App;
