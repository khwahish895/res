import React from 'react';
import { motion } from 'motion/react';
import { 
  Truck, 
  MapPin, 
  Navigation, 
  Clock, 
  Wallet, 
  CheckCircle2, 
  Phone,
  MessageSquare,
  ChevronRight,
  Star,
  ShoppingBag
} from 'lucide-react';
import { Button, GlassCard } from '../UI';

export const DeliveryDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif italic text-brand-brown">Delivery Portal</h2>
          <p className="text-brand-brown/40">Active tasks and earnings overview.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-brand-brown/40 font-bold uppercase tracking-widest">Today's Earnings</p>
            <p className="text-xl font-bold text-brand-orange">$142.50</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
            <Wallet size={24} />
          </div>
        </div>
      </div>

      {/* Active Task */}
      <GlassCard className="p-0 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center">
                  <Navigation size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-serif italic text-brand-brown">Current Task</h3>
                  <p className="text-xs text-brand-brown/40 font-bold uppercase tracking-widest">Order #GH-9283</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-[10px] font-bold uppercase tracking-widest">On the Way</span>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-brand-orange" />
                  <div className="w-[2px] flex-1 bg-brand-brown/10" />
                  <div className="w-3 h-3 rounded-full border-2 border-brand-orange" />
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] text-brand-brown/40 font-bold uppercase tracking-widest">Pickup</p>
                    <p className="text-sm font-bold text-brand-brown">Gourmet Haven Main Branch</p>
                    <p className="text-xs text-brand-brown/60">123 Culinary Ave, Food District</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-brown/40 font-bold uppercase tracking-widest">Dropoff</p>
                    <p className="text-sm font-bold text-brand-brown">Sarah Miller's Residence</p>
                    <p className="text-xs text-brand-brown/60">456 Skyline Blvd, Apt 12B</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="primary" className="flex-1">
                Complete Delivery
              </Button>
              <button className="p-4 bg-brand-brown/5 text-brand-brown rounded-full hover:bg-brand-brown/10 transition-colors">
                <Phone size={20} />
              </button>
              <button className="p-4 bg-brand-brown/5 text-brand-brown rounded-full hover:bg-brand-brown/10 transition-colors">
                <MessageSquare size={20} />
              </button>
            </div>
          </div>

          <div className="bg-brand-brown/5 min-h-[300px] relative overflow-hidden">
            {/* Mock Map View */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-brand-orange mx-auto mb-4 animate-bounce" />
                <p className="text-brand-brown/40 font-serif italic">Live Navigation Map</p>
              </div>
            </div>
            {/* Decorative Map Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
              <path d="M0 20 Q 50 50 100 20" stroke="currentColor" fill="none" strokeWidth="0.5" />
              <path d="M20 0 Q 50 50 20 100" stroke="currentColor" fill="none" strokeWidth="0.5" />
              <path d="M80 0 Q 50 50 80 100" stroke="currentColor" fill="none" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </GlassCard>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Available Tasks */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif italic text-brand-brown">Available Nearby</h3>
          {[
            { id: '9284', dist: '1.2 km', pay: '$8.50', items: '3 items' },
            { id: '9285', dist: '2.5 km', pay: '$12.00', items: '5 items' },
          ].map((task) => (
            <GlassCard key={task.id} className="p-6 flex items-center justify-between hover:bg-white transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-brown/5 flex items-center justify-center text-brand-brown/40">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-brown">Order #{task.id}</p>
                  <p className="text-xs text-brand-brown/40">{task.dist} away • {task.items}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-brand-orange">{task.pay}</p>
                <button className="text-[10px] font-bold uppercase text-brand-brown/40 hover:text-brand-orange transition-colors">Accept</button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Performance Stats */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif italic text-brand-brown">Your Performance</h3>
          <GlassCard className="p-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-brand-orange mb-2">
                  <Star size={20} className="fill-brand-orange" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="text-xs text-brand-brown/40 font-bold uppercase tracking-widest">Rating</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-brown mb-2">98%</div>
                <p className="text-xs text-brand-brown/40 font-bold uppercase tracking-widest">On-Time</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-brand-brown/5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-brand-brown/60">Weekly Goal</span>
                <span className="text-brand-brown font-bold">42/50 Deliveries</span>
              </div>
              <div className="h-2 bg-brand-brown/5 rounded-full overflow-hidden">
                <div className="h-full bg-brand-orange w-[84%]" />
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
