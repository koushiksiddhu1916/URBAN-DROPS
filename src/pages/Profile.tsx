import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { auth, db } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { LogOut, Package, User as UserIcon } from 'lucide-react';
import { SectionTitle } from '../components/ui-elements';

export const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchOrders = async () => {
      try {
        const q = query(
          collection(db, 'orders'),
          where('userId', '==', user.uid),
          orderBy('createdAt', 'desc')
        );
        const querySnapshot = await getDocs(q);
        const ordersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate()
        }));
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
        {/* Profile Sidebar */}
        <aside className="lg:col-span-1 space-y-12">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex p-8 bg-art-muted rounded-full text-art-accent">
               <UserIcon size={48} strokeWidth={1} />
            </div>
            <div>
              <h2 className="text-2xl font-serif italic">{user.displayName || 'Anonymous Subject'}</h2>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-2">{user.email}</p>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-red-500 hover:text-red-600 transition-colors"
          >
            <LogOut size={16} /> Terminate Session
          </button>
        </aside>

        {/* Order History */}
        <div className="lg:col-span-3 space-y-12">
          <SectionTitle title="The Archives / My Orders" />
          
          {loading ? (
             <p className="text-[10px] uppercase tracking-widest text-gray-400">Restoring History...</p>
          ) : orders.length > 0 ? (
            <div className="space-y-12">
              {orders.map((order) => (
                <div key={order.id} className="border border-art-gray/10 p-12 bg-art-muted/30 space-y-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-art-gray/10 pb-8">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-1">Order Identifier</p>
                      <p className="text-xs font-mono font-bold">#{order.id.slice(0, 12).toUpperCase()}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-1">Status</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-art-accent">{order.status}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-1">Artifact Total</p>
                      <p className="text-sm font-mono font-bold">₹{order.total}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {order.items.map((item: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                        <span className="text-art-text font-bold">{item.title} <span className="opacity-50 text-[9px] ml-2">x{item.quantity}</span></span>
                        <span className="font-mono">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-art-gray/20">
               <Package size={48} strokeWidth={1} className="mx-auto text-art-gray/30 mb-6" />
               <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">No Artifacts in History</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
