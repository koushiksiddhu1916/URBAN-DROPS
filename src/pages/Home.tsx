import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Headphones } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard, SectionTitle } from '../components/ui-elements';

export const Home = () => {
  const latestProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-48 pb-48">
      {/* Hero Section */}
      <section className="relative h-screen bg-art-bg overflow-hidden flex items-center">
        {/* Background Decorative Text */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-[0.03] text-[280px] font-serif italic whitespace-nowrap pointer-events-none select-none z-0">
          AETHER
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-12 flex items-center gap-4">
              <span className="h-px w-12 bg-art-accent"></span>
              <span className="text-[11px] uppercase tracking-[0.4em] text-art-accent font-bold">Featured Concept</span>
            </div>
            <h1 className="text-[80px] md:text-[120px] font-serif leading-[0.85] tracking-tighter mb-12 text-art-text">
              URBAN<br/><span className="ml-12 md:ml-32 italic">DROPS</span>
            </h1>
            <div className="max-w-xs space-y-8">
              <p className="text-sm leading-relaxed text-gray-500 uppercase tracking-widest font-medium opacity-80">
                Premium streetwear curation. Exploring the synthesis of urban culture and modern daily aesthetics since MMXXIV.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/products"
                  className="px-12 py-5 bg-art-text text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-art-accent transition-all transform hover:-translate-y-1"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="relative hidden lg:flex justify-center">
             <div className="relative w-[400px] h-[520px] bg-art-muted group">
                <div className="absolute -top-8 -right-8 w-full h-full border border-art-accent -z-10 group-hover:top-0 group-hover:right-0 transition-all duration-700"></div>
                <div className="w-full h-full overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop" 
                        className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-110"
                        alt="Featured"
                    />
                </div>
                <div className="absolute bottom-8 right-8 text-right text-white mix-blend-difference">
                    <div className="text-[48px] font-serif italic leading-none">01</div>
                    <div className="text-[10px] uppercase tracking-widest opacity-50">Vol. MMXXIV</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionTitle title="The Archives" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <Link to="/categories" className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-art-muted border border-art-gray/10">
                    <img src={cat.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={cat.name} />
                    <div className="absolute inset-0 bg-art-text/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="mt-8 space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="w-8 h-px bg-art-accent opacity-0 group-hover:opacity-100 transition-all"></span>
                        <h3 className="text-xl font-serif italic text-art-text">{cat.name}</h3>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Browse collection / {idx + 1}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Products */}
      <section className="bg-art-muted/30 py-48">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Latest Works" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-24">
            <Link to="/products" className="text-[11px] uppercase tracking-[0.4em] font-bold text-art-text border-b-2 border-art-accent pb-2 hover:text-art-accent transition-colors">
              View All Artifacts
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-y border-art-gray/20">
          {[
            { icon: <Truck size={24} strokeWidth={1}/>, title: "Swift Dispatch", desc: "Express logistics across classical and modern territories." },
            { icon: <ShieldCheck size={24} strokeWidth={1}/>, title: "Encryption", desc: "Secure neural-link processing for all transactions." },
            { icon: <Headphones size={24} strokeWidth={1}/>, title: "Support", desc: "Our studio team is available across all time zones." }
          ].map((f, i) => (
            <div key={i} className="p-12 text-center space-y-6">
                <div className="flex justify-center text-art-accent">{f.icon}</div>
                <h3 className="text-xs uppercase tracking-[0.4em] font-bold">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px] mx-auto uppercase tracking-widest font-medium opacity-80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
