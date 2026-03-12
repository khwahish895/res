import React from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Star, 
  Clock, 
  MapPin, 
  Heart, 
  ChevronRight, 
  TrendingUp,
  Gift
} from 'lucide-react';
import { Button, GlassCard, TiltCard } from '../UI';

export const CustomerDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif italic text-brand-brown">Welcome Back, Guest</h2>
          <p className="text-brand-brown/40">Ready for another exquisite dining experience?</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-brand-brown/40 font-bold uppercase tracking-widest">Loyalty Points</p>
            <p className="text-xl font-bold text-brand-orange">2,450 pts</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
            <Gift size={24} />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
            <ShoppingBag size={24} />
          </div>
          <div>
            <p className="text-xs text-brand-brown/40 font-bold uppercase tracking-widest">Active Orders</p>
            <p className="text-xl font-bold text-brand-brown">1 Order</p>
          </div>
        </GlassCard>
        <GlassCard className="p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-xs text-brand-brown/40 font-bold uppercase tracking-widest">Reservations</p>
            <p className="text-xl font-bold text-brand-brown">Tomorrow, 7 PM</p>
          </div>
        </GlassCard>
        <GlassCard className="p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600">
            <Star size={24} />
          </div>
          <div>
            <p className="text-xs text-brand-brown/40 font-bold uppercase tracking-widest">Reviews Given</p>
            <p className="text-xl font-bold text-brand-brown">12 Reviews</p>
          </div>
        </GlassCard>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Active Tracking */}
        <GlassCard className="lg:col-span-2 p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-serif italic text-brand-brown">Active Order Status</h3>
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">Order #GH-9283</span>
          </div>
          
          <div className="relative pt-8 pb-12">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand-brown/5 -translate-y-1/2" />
            <div className="absolute top-1/2 left-0 w-2/3 h-1 bg-brand-orange -translate-y-1/2 transition-all duration-1000" />
            
            <div className="relative flex justify-between">
              {[
                { label: 'Confirmed', status: 'completed' },
                { label: 'Preparing', status: 'completed' },
                { label: 'On the Way', status: 'active' },
                { label: 'Delivered', status: 'pending' },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className={`w-10 h-10 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 transition-colors ${
                    step.status === 'completed' ? 'bg-brand-orange text-white' :
                    step.status === 'active' ? 'bg-brand-orange/20 text-brand-orange' :
                    'bg-brand-brown/5 text-brand-brown/20'
                  }`}>
                    {i + 1}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${
                    step.status === 'pending' ? 'text-brand-brown/20' : 'text-brand-brown'
                  }`}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-brown/5 rounded-2xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <MapPin size={24} className="text-brand-orange" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-brown">Estimated Delivery</p>
                <p className="text-xs text-brand-brown/60">Arriving in 15-20 mins</p>
              </div>
            </div>
            <Button variant="outline" className="px-6 py-2 text-xs">Track Live</Button>
          </div>
        </GlassCard>

        {/* Recommended */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif italic text-brand-brown">Recommended for You</h3>
          {[
            { name: 'Truffle Risotto', price: '$32', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=200' },
            { name: 'Wagyu Steak', price: '$58', img: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=200' },
          ].map((dish, i) => (
            <GlassCard key={i} className="p-4 flex items-center gap-4 group cursor-pointer hover:bg-white transition-colors">
              <div className="w-20 h-20 rounded-xl overflow-hidden">
                <img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif italic text-brand-brown">{dish.name}</h4>
                <p className="text-brand-orange font-bold text-sm">{dish.price}</p>
              </div>
              <button className="p-2 hover:bg-brand-orange/10 text-brand-orange rounded-full transition-colors">
                <ShoppingBag size={18} />
              </button>
            </GlassCard>
          ))}
          <Button variant="ghost" className="w-full text-brand-orange font-bold uppercase tracking-widest text-xs">
            View Full Menu <ChevronRight size={14} className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};
