import React from 'react';
import { CATEGORIES } from '../constants';
import { SectionTitle } from '../components/ui-elements';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const CategoriesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <SectionTitle title="Browse Categories" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row bg-transparent rounded-none overflow-hidden border border-art-gray/20 h-full group"
          >
            <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
              <img src={cat.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={cat.name} />
            </div>
            <div className="p-8 flex flex-col justify-center flex-1 bg-art-muted">
              <h3 className="text-2xl font-serif italic tracking-tight text-art-text mb-3">{cat.name}</h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-6 line-clamp-3">
                {cat.shortDesc}
              </p>
              <Link
                to={`/products?category=${cat.id}`}
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-art-text hover:text-art-accent hover:translate-x-2 transition-all"
              >
                View collection <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
