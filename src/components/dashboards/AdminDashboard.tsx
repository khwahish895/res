import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area 
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  Plus
} from 'lucide-react';
import { Button, GlassCard } from '../UI';

const data = [
  { name: 'Mon', revenue: 4000, orders: 240 },
  { name: 'Tue', revenue: 3000, orders: 198 },
  { name: 'Wed', revenue: 2000, orders: 150 },
  { name: 'Thu', revenue: 2780, orders: 210 },
  { name: 'Fri', revenue: 1890, orders: 180 },
  { name: 'Sat', revenue: 2390, orders: 250 },
  { name: 'Sun', revenue: 3490, orders: 310 },
];

const stats = [
  { label: 'Total Revenue', value: '$128,430', change: '+12.5%', icon: DollarSign, color: 'text-green-500' },
  { label: 'Total Orders', value: '1,240', change: '+8.2%', icon: ShoppingBag, color: 'text-brand-orange' },
  { label: 'New Customers', value: '432', change: '+14.1%', icon: Users, color: 'text-blue-500' },
  { label: 'Avg. Order Value', value: '$103.50', change: '-2.4%', icon: TrendingUp, color: 'text-purple-500' },
];

export const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif italic text-brand-brown">Analytics Overview</h2>
          <p className="text-brand-brown/40">Welcome back, Administrator. Here's what's happening today.</p>
        </div>
        <Button variant="primary">
          <Plus size={18} className="mr-2" />
          Create Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <GlassCard key={i} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-brand-brown/5 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-brand-brown/40 font-medium mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-brand-brown">{stat.value}</h3>
          </GlassCard>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8">
        <GlassCard className="p-8 h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-serif italic text-brand-brown">Revenue Trends</h3>
            <select className="bg-brand-brown/5 border-none rounded-lg text-xs font-bold px-3 py-1 focus:ring-0">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F27D26" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#F27D26" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#999' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#999' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#F27D26" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard className="p-8 h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-serif italic text-brand-brown">Order Volume</h3>
            <button className="p-2 hover:bg-brand-brown/5 rounded-lg transition-colors">
              <MoreVertical size={20} className="text-brand-brown/40" />
            </button>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#999' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#999' }} />
              <Tooltip 
                cursor={{ fill: '#f8f8f8' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="orders" fill="#2D241E" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Recent Activity Table */}
      <GlassCard className="overflow-hidden p-0">
        <div className="p-8 border-b border-brand-brown/5 flex items-center justify-between">
          <h3 className="text-xl font-serif italic text-brand-brown">Recent Orders</h3>
          <Button variant="ghost" className="text-brand-orange text-xs font-bold uppercase tracking-widest">View All</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-brand-brown/5 text-brand-brown/40 text-[10px] uppercase tracking-widest font-bold">
                <th className="px-8 py-4">Customer</th>
                <th className="px-8 py-4">Dish</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-brown/5">
              {[
                { name: 'Alex Johnson', dish: 'Truffle Risotto', status: 'Completed', amount: '$32.00', time: '12 mins ago' },
                { name: 'Sarah Miller', dish: 'Wagyu Steak', status: 'Preparing', amount: '$58.00', time: '25 mins ago' },
                { name: 'Michael Chen', dish: 'Lobster Bisque', status: 'Pending', amount: '$28.00', time: '42 mins ago' },
                { name: 'Emma Wilson', dish: 'Pesto Pasta', status: 'Completed', amount: '$22.00', time: '1 hour ago' },
              ].map((order, i) => (
                <tr key={i} className="hover:bg-brand-brown/5 transition-colors">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange text-xs font-bold">
                        {order.name[0]}
                      </div>
                      <span className="text-sm font-bold text-brand-brown">{order.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-sm text-brand-brown/60 italic font-serif">{order.dish}</td>
                  <td className="px-8 py-4">
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-600' :
                      order.status === 'Preparing' ? 'bg-blue-100 text-blue-600' :
                      'bg-amber-100 text-amber-600'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-sm font-bold text-brand-brown">{order.amount}</td>
                  <td className="px-8 py-4 text-xs text-brand-brown/40">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
};
