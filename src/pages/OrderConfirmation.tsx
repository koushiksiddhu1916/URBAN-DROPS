import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Home, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

export const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const orderNo = location.state?.orderNo;

  useEffect(() => {
    if (!orderNo) {
      navigate('/');
    } else {
        clearCart();
    }
  }, [orderNo, navigate, clearCart]);

  if (!orderNo) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-48 text-center bg-art-bg">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-12"
      >
        <div className="flex justify-center">
            <div className="relative inline-flex p-12 bg-art-muted text-art-accent border border-art-gray/10">
                <div className="absolute -top-4 -right-4 w-full h-full border border-art-accent -z-10" />
                <Package size={64} strokeWidth={1} />
            </div>
        </div>

        <div className="space-y-4">
            <h1 className="text-6xl font-serif italic tracking-tighter text-art-text">Acquisition Confirmed</h1>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Artifact Registry Updated</p>
        </div>

        <div className="max-w-md mx-auto p-12 bg-art-muted/30 border border-art-gray/10 space-y-8">
            <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                    <span className="text-gray-400 font-bold">Protocol ID</span>
                    <span className="font-mono font-bold text-art-text">#{orderNo}</span>
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                    <span className="text-gray-400 font-bold">Status</span>
                    <span className="text-art-accent font-bold">IN TRANSIT</span>
                </div>
            </div>
            
            <p className="text-[10px] text-gray-500 leading-loose uppercase tracking-widest font-medium opacity-80 text-center">
                The selected artifacts have been entered into the dispatch queue. Physical manifestation expected within III-V cycles.
            </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <Link to="/" className="px-12 py-5 border border-art-text text-art-text text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-art-text hover:text-white transition-all transform hover:-translate-y-1">
            Studio Home
          </Link>
          <Link to="/profile" className="px-12 py-5 bg-art-text text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-art-accent transition-all transform hover:-translate-y-1">
            My Archives
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
