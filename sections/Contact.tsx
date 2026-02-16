
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Mail, Github, Linkedin, Send, Phone, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = "bigbennyogbuani@gmail.com";
    const subject = encodeURIComponent(`Inquiry from Portfolio: ${formState.name}`);
    const body = encodeURIComponent(
      `Hello Reuben,\n\nYou have received a new inquiry from your portfolio website.\n\n` +
      `Sender Name: ${formState.name}\n` +
      `Sender Email: ${formState.email}\n\n` +
      `Message:\n${formState.message}\n\n` +
      `Best regards,\n${formState.name}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark text-white border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <SectionHeader 
              title="Global Collaboration" 
              subtitle="Available for senior architectural consulting and high-impact engineering leadership roles."
            />
            
            <div className="space-y-10 mt-12">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-brand-navy/40 border border-white/5 flex items-center justify-center group-hover:bg-brand-mint transition-all duration-300">
                  <Mail className="w-7 h-7 text-brand-mint group-hover:text-brand-dark" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-pink mb-1">Email Terminal</div>
                  <div className="text-xl font-normal tracking-tighter text-white">bigbennyogbuani@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-brand-navy/40 border border-white/5 flex items-center justify-center group-hover:bg-brand-mint transition-all duration-300">
                  <Linkedin className="w-7 h-7 text-brand-mint group-hover:text-brand-dark" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-pink mb-1">Professional Hub</div>
                  <a href="https://www.linkedin.com/in/reuben-ogbuani-736b9961" target="_blank" className="text-xl font-normal tracking-tighter text-white hover:text-brand-mint transition-colors">reuben-ogbuani</a>
                </div>
              </div>

              <div className="pt-10 flex gap-5">
                {[
                  { icon: <Github />, url: "https://github.com/bigbennny" },
                  { icon: <Phone />, url: "https://wa.me/2348080808660" },
                  { icon: <Facebook />, url: "https://web.facebook.com/chukwuemeka.ogbuani" }
                ].map((item, i) => (
                  <a key={i} href={item.url} target="_blank" className="w-14 h-14 rounded-2xl bg-brand-navy/40 border border-white/5 flex items-center justify-center hover:bg-brand-mint hover:text-brand-dark transition-all duration-300">
                    {/* Fix: Cast icon to React.ReactElement<any> to satisfy TypeScript for className prop in cloneElement */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-brand-navy/20 border border-white/5 p-12 rounded-[40px] backdrop-blur-xl">
             {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-pulse py-20">
                <div className="w-24 h-24 bg-brand-mint text-brand-dark rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-brand-mint/20">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tighter text-brand-mint">Transmission Initiated</h3>
                <p className="text-brand-light/40 font-bold uppercase tracking-widest text-xs">Direct mail protocol established.</p>
              </div>
             ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-pink">Full Name</label>
                    <input required type="text" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-mint transition-colors text-white font-medium" placeholder="Jane Doe" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-pink">Email Key</label>
                    <input required type="email" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-mint transition-colors text-white font-medium" placeholder="jane@company.com" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-pink">Project Brief</label>
                  <textarea required rows={5} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-brand-mint transition-colors text-white font-medium resize-none" placeholder="Strategic requirements..." value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} />
                </div>
                <button type="submit" className="w-full py-5 bg-brand-mint hover:bg-brand-mint/90 text-brand-dark font-black uppercase tracking-[0.3em] text-sm rounded-2xl transition-all flex items-center justify-center gap-4 shadow-xl shadow-brand-mint/10">
                  Secure Send <Send className="w-5 h-5" />
                </button>
              </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
