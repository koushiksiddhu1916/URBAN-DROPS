import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, ArrowUp, User as UserIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const { cartCount } = useCart();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'The Collection', path: '/products' },
    { name: 'Archive', path: '/categories' },
    { name: 'Studio', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-art-bg/80 backdrop-blur-md border-b border-art-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold tracking-tighter font-serif">
                AETHER<span className="text-art-accent">.</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex space-x-12 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-art-accent",
                    location.pathname === link.path ? "text-art-accent underline underline-offset-8" : "text-art-text"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/search" className="p-2 text-art-text hover:text-art-accent transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </Link>
            <Link to={user ? "/profile" : "/login"} className="p-2 text-art-text hover:text-art-accent transition-colors">
              <UserIcon size={20} strokeWidth={1.5} className={cn(user && "text-art-accent")} />
            </Link>
            <Link to="/cart" className="p-2 text-art-text hover:text-art-accent transition-colors relative">
              <ShoppingCart size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 h-2 w-2 bg-art-accent rounded-full border border-art-bg" />
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-art-text hover:text-art-accent"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-art-bg border-b border-art-gray/30">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-[10px] uppercase tracking-[0.3em] font-bold text-art-text hover:bg-art-muted hover:text-art-accent"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={user ? "/profile" : "/login"}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-[10px] uppercase tracking-[0.3em] font-bold text-art-text hover:bg-art-muted hover:text-art-accent"
            >
              {user ? "PROFILE" : "LOGIN"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-art-bg text-art-text pt-24 pb-12 border-t border-art-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <span className="text-2xl font-bold font-serif tracking-tighter">AETHER<span className="text-art-accent">.</span></span>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs uppercase tracking-widest font-medium opacity-80">
              Exploring the intersection of multisensory curation and modern daily aesthetics since MMXXIV.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Navigation</h4>
            <div className="flex flex-col gap-4">
              <Link to="/about" className="text-xs font-medium hover:text-art-accent transition-colors">Studio</Link>
              <Link to="/products" className="text-xs font-medium hover:text-art-accent transition-colors">Collection</Link>
              <Link to="/contact" className="text-xs font-medium hover:text-art-accent transition-colors">Contact</Link>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Archives</h4>
            <div className="flex flex-col gap-4">
              <Link to="/categories" className="text-xs font-medium hover:text-art-accent transition-colors">Categories</Link>
              <Link to="#" className="text-xs font-medium hover:text-art-accent transition-colors">Discounts</Link>
              <Link to="#" className="text-xs font-medium hover:text-art-accent transition-colors">Terms of Work</Link>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Dispatch</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest leading-loose">Join our digital installation updates.</p>
            <div className="flex border-b border-art-text pb-2">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-none px-0 py-2 w-full text-[10px] uppercase tracking-widest focus:ring-0 placeholder:text-gray-300"
              />
              <button className="text-[10px] font-bold uppercase tracking-widest hover:text-art-accent transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-art-gray/10 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          <span>MMXXIV © AETHER STUDIO</span>
          <div className="flex gap-8">
            <span className="hover:text-art-text cursor-pointer transition-colors">INSTAGRAM</span>
            <span className="hover:text-art-text cursor-pointer transition-colors">TWITTER</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-12 z-50 p-4 bg-art-accent text-white rounded-none shadow-2xl hover:bg-art-text transition-all hover:-translate-y-2 group"
        >
          <ArrowUp size={20} className="group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};
