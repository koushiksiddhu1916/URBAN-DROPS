import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../constants';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const ProductCard = ({ product, ...props }: { product: Product } & any) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-art-muted border border-art-gray/20 overflow-hidden"
    >
      {/* Decorative Frame */}
      <div className="absolute -top-2 -right-2 w-full h-full border border-art-accent/10 -z-10 group-hover:top-0 group-hover:right-0 transition-all duration-500" />
      
      <div className="relative aspect-[4/5] overflow-hidden bg-art-gray/20">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
        </Link>
        {product.isNew && (
          <span className="absolute top-6 left-6 bg-art-accent text-white text-[9px] font-bold px-3 py-1 uppercase tracking-[0.2em]">
            New
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, product.sizes ? product.sizes[0] : undefined);
          }}
          className="absolute bottom-6 right-6 p-4 bg-art-text text-white opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0 hover:bg-art-accent"
        >
          <ShoppingCart size={18} strokeWidth={1.5} />
        </button>
      </div>

      <div className="p-8 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">{product.category}</h3>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg font-serif italic tracking-tight text-art-text group-hover:text-art-accent transition-colors">
                {product.title}
              </h3>
            </Link>
          </div>
          <div className="text-[11px] font-mono tracking-widest font-bold">
            ₹{product.price}
          </div>
        </div>
        
        <div className="flex items-center gap-1 pt-4 border-t border-art-gray/20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-1 h-1 rounded-full",
                i < product.rating ? "bg-art-accent" : "bg-art-gray"
              )}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const SectionTitle = ({ title }: { title: string }) => (
  <div className="text-center mb-24 space-y-4">
    <div className="flex items-center justify-center gap-4">
        <span className="h-px w-12 bg-art-accent"></span>
        <span className="text-[11px] uppercase tracking-[0.4em] text-art-accent font-bold">Curation</span>
        <span className="h-px w-12 bg-art-accent"></span>
    </div>
    <h2 className="text-5xl md:text-7xl font-serif tracking-tighter text-art-text">
        {title.split(' ').map((word, i) => (
            <span key={i} className={cn(i % 1 === 0 && i !== 0 ? "italic ml-2" : "")}>{word} </span>
        ))}
    </h2>
  </div>
);
