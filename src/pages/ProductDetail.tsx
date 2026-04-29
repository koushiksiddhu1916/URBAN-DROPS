import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Minus, Plus } from 'lucide-react';
import { cn } from '../lib/utils';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ProductCard, SectionTitle } from '../components/ui-elements';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToCart, updateQuantity, cart } = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(product?.sizes ? product.sizes[0] : undefined);

  if (!product) return <div className="text-center py-48 text-[10px] uppercase tracking-widest font-bold text-gray-400">Artifact not found</div>;

  const cartItemId = `${product.id}-${size || 'default'}`;
  const cartItem = cart.find(item => item.cartItemId === cartItemId);
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    if (product.sizes && !size) {
      alert("Please select a size");
      return;
    }
    for (let i = 0; i < qty; i++) {
      addToCart(product, size);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-48">
        {/* Images */}
        <div className="relative group">
          <div className="absolute -top-8 -right-8 w-full h-full border border-art-accent -z-10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[4/5] bg-art-muted overflow-hidden border border-art-gray/10"
          >
            <img src={product.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt={product.title} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-art-accent"></span>
                <span className="text-[11px] uppercase tracking-[0.4em] text-art-accent font-bold">{product.category}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none text-art-text">{product.title}</h1>
            <div className="flex items-center gap-6">
              <p className="text-3xl font-mono tracking-widest font-bold">₹{product.price}</p>
              <div className="flex items-center gap-1.5 pt-1">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={cn("w-1.5 h-1.5 rounded-full", i < product.rating ? "bg-art-accent" : "bg-art-gray")} />
                ))}
              </div>
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 leading-relaxed max-w-md opacity-80">
            {product.description}
          </p>

          <div className="space-y-12 pt-12 border-t border-art-gray/20">
            {product.sizes && (
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">Select Size</span>
                <div className="flex gap-4">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={cn(
                        "w-12 h-12 flex items-center justify-center border text-[10px] uppercase tracking-widest font-bold transition-all",
                        size === s ? "border-art-text bg-art-text text-white" : "border-art-gray/40 hover:border-art-text text-art-text"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex items-center border border-art-text h-16 w-full sm:w-40">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="flex-1 h-full hover:bg-art-muted transition-colors flex items-center justify-center border-r border-art-text/20"
                >
                  <Minus size={16} />
                </button>
                <div className="flex-1 text-center font-mono font-bold text-lg">{qty}</div>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="flex-1 h-full hover:bg-art-muted transition-colors flex items-center justify-center border-l border-art-text/20"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full sm:flex-1 bg-art-text text-white h-16 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-art-accent transition-all shadow-xl shadow-art-text/10"
              >
                Add to Archive
              </button>
            </div>

            {cartItem && (
                <p className="text-[10px] uppercase tracking-widest text-art-accent font-bold">
                   Entry exists in archive: x{cartItem.quantity}
                </p>
            )}
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section>
          <SectionTitle title="Similar Concepts" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
