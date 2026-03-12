import React from 'react';
import { motion } from 'motion/react';
import { 
  ChefHat, 
  Clock, 
  UtensilsCrossed, 
  CheckCircle2, 
  AlertCircle, 
  Timer,
  Users,
  ChevronRight
} from 'lucide-react';
import { Button, GlassCard } from '../UI';

export const StaffDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif italic text-brand-brown">Kitchen Queue</h2>
          <p className="text-brand-brown/40">Real-time order preparation management.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-full text-xs font-bold uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            Kitchen Live
          </div>
        </div>
      </div>

      {/* Kitchen Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Orders', value: '8', icon: ChefHat, color: 'text-brand-orange' },
          { label: 'Avg. Prep Time', value: '18m', icon: Timer, color: 'text-blue-500' },
          { label: 'Table Occupancy', value: '85%', icon: UtensilsCrossed, color: 'text-purple-500' },
          { label: 'Staff Online', value: '12', icon: Users, color: 'text-green-500' },
        ].map((stat, i) => (
          <GlassCard key={i} className="p-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-brand-brown/5 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-[10px] text-brand-brown/40 font-bold uppercase tracking-widest">{stat.label}</p>
                <p className="text-xl font-bold text-brand-brown">{stat.value}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Active Orders List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-serif italic text-brand-brown">Preparation Workflow</h3>
            <div className="flex gap-2">
              <button className="px-4 py-1 rounded-full bg-brand-brown text-white text-[10px] font-bold uppercase tracking-widest">All</button>
              <button className="px-4 py-1 rounded-full bg-brand-brown/5 text-brand-brown/40 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-brown/10">Priority</button>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { id: '1024', items: ['Truffle Risotto x2', 'Wagyu Steak x1'], time: '8m ago', status: 'Preparing', priority: 'High' },
              { id: '1025', items: ['Lobster Bisque x1', 'Pesto Pasta x3'], time: '12m ago', status: 'Pending', priority: 'Normal' },
              { id: '1026', items: ['Margherita Pizza x2'], time: '15m ago', status: 'Preparing', priority: 'High' },
              { id: '1027', items: ['Tiramisu x4', 'Old Fashioned x2'], time: '20m ago', status: 'Ready', priority: 'Normal' },
            ].map((order) => (
              <GlassCard key={order.id} className="p-6 flex items-center justify-between group">
                <div className="flex items-center gap-6">
                  <div className="text-center border-r border-brand-brown/10 pr-6">
                    <p className="text-[10px] text-brand-brown/40 font-bold uppercase tracking-widest">Order</p>
                    <p className="text-lg font-bold text-brand-brown">#{order.id}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {order.priority === 'High' && <AlertCircle size={14} className="text-red-500" />}
                      <p className="text-sm font-bold text-brand-brown">{order.items.join(', ')}</p>
                    </div>
                    <p className="text-xs text-brand-brown/40 flex items-center gap-1">
                      <Clock size={12} /> Received {order.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${
                    order.status === 'Ready' ? 'bg-green-100 text-green-600' :
                    order.status === 'Preparing' ? 'bg-blue-100 text-blue-600' :
                    'bg-amber-100 text-amber-600'
                  }`}>
                    {order.status}
                  </span>
                  <Button variant="outline" className="px-4 py-2 text-xs">Update</Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Table Map Preview */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif italic text-brand-brown">Floor Map Status</h3>
          <GlassCard className="p-6 aspect-square relative">
            <div className="grid grid-cols-3 gap-4 h-full">
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i} 
                  className={`rounded-xl border-2 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                    i % 3 === 0 ? 'bg-brand-orange/10 border-brand-orange text-brand-orange' :
                    i % 4 === 0 ? 'bg-brand-brown/5 border-brand-brown/10 text-brand-brown/20' :
                    'bg-green-50 border-green-200 text-green-600'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-tighter">T-{i + 1}</span>
                  <UtensilsCrossed size={16} />
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between text-[10px] font-bold uppercase tracking-widest text-brand-brown/40">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500" /> Free</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-orange" /> Occupied</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-brown/20" /> Reserved</div>
            </div>
          </GlassCard>
          <Button variant="secondary" className="w-full">
            Manage Reservations <ChevronRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
