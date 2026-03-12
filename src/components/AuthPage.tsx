import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Mail, ChevronRight, ShieldCheck, Truck, ChefHat, Users } from 'lucide-react';
import { Button, GlassCard } from './UI';

type Role = 'customer' | 'staff' | 'delivery' | 'admin';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState<Role>('customer');
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd validate here. For now, we just redirect based on role.
    localStorage.setItem('userRole', selectedRole);
    navigate(`/${selectedRole}`);
  };

  const roles = [
    { id: 'customer', label: 'Customer', icon: Users },
    { id: 'staff', label: 'Staff', icon: ChefHat },
    { id: 'delivery', label: 'Delivery', icon: Truck },
    { id: 'admin', label: 'Admin', icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Branding/Info */}
        <div className="hidden md:block">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <span className="text-brand-orange font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Welcome Back</span>
            <h2 className="text-6xl font-serif italic text-brand-brown mb-6 leading-tight">
              Join the <br /> <span className="text-brand-orange">Gourmet</span> Circle
            </h2>
            <p className="text-lg text-brand-brown/60 font-serif italic mb-8">
              Experience the art of fine dining with exclusive access to our digital platform.
            </p>
            
            <div className="space-y-4">
              {['Exclusive Rewards', 'Priority Reservations', 'Real-time Tracking'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-brand-brown/80">
                  <div className="w-2 h-2 rounded-full bg-brand-orange" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Auth Form */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <GlassCard className="p-8 md:p-10">
            <div className="flex gap-6 mb-8 border-b border-brand-brown/10 pb-4">
              <button 
                onClick={() => setIsLogin(true)}
                className={`text-lg font-serif italic transition-all ${isLogin ? 'text-brand-orange' : 'text-brand-brown/40'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`text-lg font-serif italic transition-all ${!isLogin ? 'text-brand-orange' : 'text-brand-brown/40'}`}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleAuth} className="space-y-6">
              {/* Role Selector */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-brand-brown/60 font-bold">Select Your Role</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id as Role)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                        selectedRole === role.id 
                        ? 'bg-brand-orange border-brand-orange text-white' 
                        : 'border-brand-brown/10 text-brand-brown/60 hover:border-brand-orange/50'
                      }`}
                    >
                      <role.icon size={20} className="mb-1" />
                      <span className="text-[10px] font-bold uppercase tracking-tighter">{role.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-brown/40" size={18} />
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-white/50 border border-brand-brown/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all"
                  />
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-brown/40" size={18} />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-white/50 border border-brand-brown/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-brown/40" size={18} />
                <input 
                  type="password" 
                  placeholder="Password"
                  className="w-full bg-white/50 border border-brand-brown/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 transition-all"
                />
              </div>

              <Button type="submit" className="w-full py-4 group">
                {isLogin ? 'Sign In' : 'Create Account'}
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-brand-brown/60">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-brand-orange font-bold hover:underline"
                >
                  {isLogin ? 'Register Now' : 'Login Here'}
                </button>
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};
