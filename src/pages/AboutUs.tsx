import React from 'react';
import { SectionTitle } from '../components/ui-elements';
import { Users, Target, Zap, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutUsPage = () => {
  const values = [
    { icon: <Target className="text-art-accent" strokeWidth={1}/>, title: "Our Mission", desc: "To provide quality products that enhance the daily lives of our customers." },
    { icon: <Zap className="text-art-accent" strokeWidth={1}/>, title: "Quality First", desc: "Every product is curated and inspected by our team of experts." },
    { icon: <Users className="text-art-accent" strokeWidth={1}/>, title: "Community", desc: "We believe in building lasting relationships with our customers and partners." },
    { icon: <Heart className="text-art-accent" strokeWidth={1}/>, title: "Sustainability", desc: "Committed to eco-friendly packaging and ethical sourcing." }
  ];

  return (
    <div className="pb-48">
      {/* Hero */}
      <section className="bg-art-text py-48 text-white relative overflow-hidden mb-48">

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="mb-12 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-art-accent"></span>
              <span className="text-[11px] uppercase tracking-[0.4em] text-art-accent font-bold">Studio Profile</span>
              <span className="h-px w-12 bg-art-accent"></span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-serif tracking-tighter text-center"
          >
            AETHER <br/><span className="italic ml-8 text-art-accent">URBAN</span>
          </motion.h1>
          <p className="text-sm uppercase tracking-[0.3em] font-medium text-gray-400 max-w-xl mx-auto text-center mt-12 leading-loose opacity-80">
            Curation of raw urban aesthetics and premium streetwear essentials since MMXXIV.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-48">
          <div className="relative group">
             <div className="absolute -top-8 -left-8 w-full h-full border border-art-accent -z-10" />
             <img 
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
               className="grayscale hover:grayscale-0 transition-all duration-1000 w-full"
               alt="Team"
             />
          </div>
          <div className="space-y-12">
            <h2 className="text-5xl font-serif italic tracking-tight text-art-text">Our Philosophy</h2>
            <div className="space-y-8">
                <p className="text-sm leading-relaxed text-gray-500 uppercase tracking-widest font-medium opacity-80">
                  We believe that shopping should be an inspiring experience. Our collections are carefully curated from talented designers who share our commitment to craftsmanship and quality.
                </p>
                <p className="text-sm leading-relaxed text-gray-500 uppercase tracking-widest font-medium opacity-80">
                  Whether you're looking for everyday essentials or unique statement pieces, we provide a selection that is both timeless and trend-setting.
                </p>
                <div className="h-px w-24 bg-art-accent"></div>
            </div>
          </div>
        </div>

        <SectionTitle title="The Principles" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-8 p-12 bg-art-muted/50 border border-art-gray/10 hover:border-art-accent/20 transition-all text-center"
            >
              <div className="flex justify-center text-art-accent">
                {v.icon}
              </div>
              <h4 className="text-xs uppercase tracking-[0.4em] font-bold">{v.title}</h4>
              <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest font-medium opacity-80">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
