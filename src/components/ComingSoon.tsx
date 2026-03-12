import React from 'react';
import { motion } from 'motion/react';
import { Clock, ChefHat } from 'lucide-react';
import { Button } from './UI';
import { useNavigate } from 'react-router-dom';

export const ComingSoon = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-orange/10 text-brand-orange mb-8"
        >
          <ChefHat size={48} />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-brand-orange font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
            {title}
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-brand-brown mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-brand-brown/60 font-serif italic mb-12">
            We're crafting something special for you. Our culinary team is putting the finishing touches on this experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" onClick={() => navigate('/')}>
              Back to Home
            </Button>
            <Button variant="outline" onClick={() => navigate('/menu')}>
              Explore Menu
            </Button>
          </div>
        </motion.div>
        
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-radial-gradient from-brand-orange/20 to-transparent blur-3xl" />
        </div>
      </div>
    </div>
  );
};
