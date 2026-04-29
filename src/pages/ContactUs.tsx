import React, { useState } from 'react';
import { SectionTitle } from '../components/ui-elements';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactUsPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <SectionTitle title="Direct Inquiry" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
        {[
          { icon: <Phone size={24} strokeWidth={1}/>, title: "Phone", info: "+91-9876543210", color: "text-art-accent" },
          { icon: <Mail size={24} strokeWidth={1}/>, title: "Email", info: "support@aether.studio", color: "text-art-accent" },
          { icon: <MapPin size={24} strokeWidth={1}/>, title: "Location", info: "Bandra West, Mumbai, India", color: "text-art-accent" }
        ].map((item, i) => (
          <div key={i} className="text-center space-y-6">
            <div className={`inline-flex ${item.color}`}>
              {item.icon}
            </div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">{item.title}</h3>
            <p className="text-xs uppercase tracking-widest font-medium opacity-80">{item.info}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-art-muted/30 border border-art-gray/10 overflow-hidden">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-24 text-center space-y-8"
            >
              <div className="flex justify-center text-art-accent">
                <Send size={48} strokeWidth={1} />
              </div>
              <h2 className="text-3xl font-serif italic tracking-tight">Dispatch Confirmed</h2>
              <p className="text-xs uppercase tracking-widest font-medium text-gray-500 leading-loose">We've received your inquiry and our studio will respond within XXIV hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-[10px] uppercase tracking-[0.4em] font-bold text-art-accent border-b border-art-accent pb-1"
              >
                New Correspondence
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="p-12 md:p-20 space-y-12">
              <h3 className="text-3xl font-serif italic text-center tracking-tight mb-16">Studio Correspondence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Your Identity</label>
                  <input required className="w-full bg-transparent border-b border-art-text/20 h-10 px-0 focus:border-art-accent focus:ring-0 outline-none transition-all text-[10px] uppercase tracking-widest" placeholder="JANE DOE" />
                </div>
                <div className="space-y-4">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Digital Address</label>
                  <input required type="email" className="w-full bg-transparent border-b border-art-text/20 h-10 px-0 focus:border-art-accent focus:ring-0 outline-none transition-all text-[10px] uppercase tracking-widest" placeholder="JANE@STUDIO.COM" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Subject</label>
                <input required className="w-full bg-transparent border-b border-art-text/20 h-10 px-0 focus:border-art-accent focus:ring-0 outline-none transition-all text-[10px] uppercase tracking-widest" placeholder="ARTIFACT INQUIRY" />
              </div>
              <div className="space-y-4">
                <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">The Message</label>
                <textarea required rows={4} className="w-full bg-transparent border-b border-art-text/20 py-4 px-0 focus:border-art-accent focus:ring-0 outline-none transition-all text-[10px] uppercase tracking-widest resize-none" placeholder="HOW MAY THE STUDIO ASSIST?" />
              </div>
              <button 
                type="submit"
                className="w-full bg-art-text text-white py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-art-accent transition-all"
              >
                Send Correspondence
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
