import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { LogIn } from 'lucide-react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-12 bg-art-muted/30 p-12 border border-art-gray/10"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif italic tracking-tight">Identity Access</h1>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Secure Entry to Aether</p>
        </div>

        {error && <p className="text-red-500 text-[10px] uppercase tracking-widest text-center">{error}</p>}

        <form onSubmit={handleEmailLogin} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Digital Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="w-full bg-transparent border-b border-art-text/20 h-10 px-0 focus:border-art-accent focus:ring-0 outline-none transition-all text-[10px] uppercase tracking-widest" 
                placeholder="EMAIL@STUDIO.COM" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Secure Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="w-full bg-transparent border-b border-art-text/20 h-10 px-0 focus:border-art-accent focus:ring-0 outline-none transition-all text-[10px] uppercase tracking-widest" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-art-text text-white py-6 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-art-accent transition-all flex items-center justify-center gap-2"
          >
            {loading ? 'Processing...' : <><LogIn size={14} /> Initializing Access</>}
          </button>
        </form>

        <div className="space-y-4">
          <button 
            onClick={handleGoogleLogin}
            className="w-full border border-art-gray/20 text-art-text py-4 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-art-muted transition-all"
          >
            Access with Google
          </button>
          
          <div className="text-center">
            <Link 
              to="/register" 
              className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-art-accent transition-colors"
            >
              New Subject? Create Profile
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
