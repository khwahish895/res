import React, { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  Calendar, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Search, 
  Bell,
  ChevronRight,
  Truck,
  ChefHat,
  ShoppingBag,
  Heart,
  User,
  MapPin,
  BarChart3,
  Megaphone,
  MessageSquare,
  ClipboardList,
  Map as MapIcon,
  Wallet,
  Globe,
  RefreshCw,
  LucideIcon
} from 'lucide-react';
import { Button } from './UI';

interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showRoleSwitcher, setShowRoleSwitcher] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const role = localStorage.getItem('userRole') || 'customer';

  const getNavItems = (role: string): NavItem[] => {
    switch (role) {
      case 'admin':
        return [
          { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
          { name: 'Menu Management', path: '/admin/menu', icon: UtensilsCrossed },
          { name: 'Orders', path: '/admin/orders', icon: ShoppingBag },
          { name: 'Reservations', path: '/admin/reservations', icon: Calendar },
          { name: 'Customers', path: '/admin/customers', icon: Users },
          { name: 'Promotions', path: '/admin/promotions', icon: Megaphone },
          { name: 'Reviews', path: '/admin/reviews', icon: MessageSquare },
          { name: 'Settings', path: '/admin/settings', icon: Settings },
        ];
      case 'customer':
        return [
          { name: 'Dashboard', path: '/customer', icon: LayoutDashboard },
          { name: 'My Orders', path: '/customer/orders', icon: ShoppingBag },
          { name: 'Tracking', path: '/customer/tracking', icon: MapPin },
          { name: 'Favorites', path: '/customer/favorites', icon: Heart },
          { name: 'Profile', path: '/customer/profile', icon: User },
        ];
      case 'staff':
        return [
          { name: 'Dashboard', path: '/staff', icon: LayoutDashboard },
          { name: 'Orders', path: '/staff/orders', icon: ShoppingBag },
          { name: 'Kitchen', path: '/staff/kitchen', icon: ChefHat },
          { name: 'Tables', path: '/staff/tables', icon: UtensilsCrossed },
          { name: 'Reservations', path: '/staff/reservations', icon: Calendar },
        ];
      case 'delivery':
        return [
          { name: 'Dashboard', path: '/delivery', icon: LayoutDashboard },
          { name: 'Deliveries', path: '/delivery/list', icon: ClipboardList },
          { name: 'Map', path: '/delivery/map', icon: MapIcon },
          { name: 'History', path: '/delivery/history', icon: ShoppingBag },
          { name: 'Earnings', path: '/delivery/earnings', icon: Wallet },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems(role);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  const handleSwitchRole = (newRole: string) => {
    localStorage.setItem('userRole', newRole);
    setShowRoleSwitcher(false);
    navigate(`/${newRole}`);
  };

  return (
    <div className="min-h-screen bg-brand-cream/30 flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="fixed left-0 top-0 bottom-0 bg-brand-brown text-white z-50 flex flex-col"
      >
        <div className="p-6 flex items-center justify-between">
          <Link to="/" className={`flex items-center gap-2 ${!isSidebarOpen && 'hidden'}`}>
            <span className="text-2xl font-serif text-brand-orange italic">GH</span>
            <span className="text-lg font-serif font-bold tracking-tighter uppercase">Gourmet Haven</span>
          </Link>
          {!isSidebarOpen && <span className="text-2xl font-serif text-brand-orange italic mx-auto">GH</span>}
        </div>

        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                location.pathname === item.path 
                ? 'bg-brand-orange text-white' 
                : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {isSidebarOpen && <span className="font-medium">{item.name}</span>}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-white/10 space-y-2">
          {/* Role Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowRoleSwitcher(!showRoleSwitcher)}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all"
            >
              <RefreshCw size={20} />
              {isSidebarOpen && <span className="font-medium">Switch Role</span>}
            </button>
            
            <AnimatePresence>
              {showRoleSwitcher && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`absolute bottom-full left-0 mb-2 w-48 bg-white text-brand-brown rounded-xl shadow-2xl p-2 z-[60] ${!isSidebarOpen && 'left-full ml-2 bottom-0'}`}
                >
                  {['customer', 'staff', 'delivery', 'admin'].map((r) => (
                    <button
                      key={r}
                      onClick={() => handleSwitchRole(r)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm capitalize transition-colors ${role === r ? 'bg-brand-orange/10 text-brand-orange font-bold' : 'hover:bg-brand-brown/5'}`}
                    >
                      {r}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/"
            className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all"
          >
            <Globe size={20} />
            {isSidebarOpen && <span className="font-medium">Go to Website</span>}
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-[280px]' : 'ml-[80px]'}`}>
        {/* Top Bar */}
        <header className="h-20 bg-white border-b border-brand-brown/5 px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-brand-brown/5 rounded-lg transition-colors"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-brown/40" size={18} />
              <input 
                type="text" 
                placeholder="Search anything..."
                className="bg-brand-brown/5 rounded-full py-2 pl-10 pr-6 w-64 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 hover:bg-brand-brown/5 rounded-lg transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-orange rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-brand-brown/10">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-brand-brown capitalize">{role} Account</p>
                <p className="text-xs text-brand-brown/40">Gourmet Haven Member</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold uppercase">
                {role[0]}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
