import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, totalAmount } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <div className="inline-flex p-6 mb-6">
          <ShoppingBag size={48} className="text-art-text opacity-20" />
        </div>
        <h2 className="text-4xl font-serif italic tracking-tight text-art-text mb-4">Your cart is empty</h2>
        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-8 max-w-sm mx-auto">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products" className="inline-block bg-art-text text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-art-accent transition-all">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
      <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-serif italic tracking-tight mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence>
            {cart.map((item, index) => (
              <motion.div
                key={item.cartItemId || `${item.id}-${index}`}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center gap-6 p-4 bg-transparent border-b border-art-gray/20"
              >
                <div className="w-24 h-32 overflow-hidden flex-shrink-0 bg-art-muted">
                  <img src={item.image} className="w-full h-full object-cover grayscale" alt={item.title} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif italic text-lg text-art-text mb-1">{item.title}</h3>
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4">
                    <span>{item.category}</span>
                    {item.size && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-art-gray/50"></span>
                        <span>SIZE: {item.size}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-art-gray/30 h-9">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="px-3 hover:bg-art-muted hover:text-art-accent text-gray-500 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 text-center font-mono text-[11px] font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="px-3 hover:bg-art-muted hover:text-art-accent text-gray-500 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="text-gray-400 hover:text-art-accent transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono font-bold text-art-text text-lg">₹{item.price * item.quantity}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">₹{item.price} EACH</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <div className="h-fit sticky top-28">
          <div className="bg-art-muted p-8 border border-art-gray/20">
            <h2 className="text-2xl font-serif italic text-art-text mb-6">Order Summary</h2>
            <div className="space-y-4 mb-8 text-[10px] uppercase tracking-widest font-bold">
              <div className="flex justify-between text-gray-500">
                <span>SUBTOTAL</span>
                <span className="font-mono">₹{totalAmount}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>SHIPPING</span>
                <span className="text-art-accent">FREE</span>
              </div>
              <div className="border-t border-art-gray/20 pt-4 flex justify-between text-art-text">
                <span>TOTAL</span>
                <span className="font-mono text-lg">₹{totalAmount}</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-art-text text-white h-14 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-art-accent transition-all flex items-center justify-center gap-2"
            >
              Checkout <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
