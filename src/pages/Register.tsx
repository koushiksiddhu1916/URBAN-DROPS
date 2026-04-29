import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { UserPlus } from 'lucide-react';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
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
          <h1 className="text-4xl font-serif italic tracking-tight">Identity Creation</h1>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">New Subject Registration</p>
        </div>

        {error && <p className="text-red-500 text-[10px] uppercase tracking-widest text-center">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Subject Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                className="w-full bg-transparent border-b border-art-text/20 h-10 px-0 focus:border-art-accent focus:ring-0 outline-none transition-all text-[10px] uppercase tracking-widest" 
                placeholder="FULL IDENTITY" 
              />
            </div>
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
            {loading ? 'Processing...' : <><UserPlus size={14} /> Create Identity</>}
          </button>
        </form>

        <div className="text-center">
            <Link 
              to="/login" 
              className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-art-accent transition-colors"
            >
              Existing Identity? Access Studio
            </Link>
        </div>
      </motion.div>
    </div>
  );
};
