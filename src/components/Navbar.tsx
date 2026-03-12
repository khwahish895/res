import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import { Button } from './UI';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Mock user state
  const [user, setUser] = useState<{ role: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Online Order', path: '/online-order' },
    { name: 'Review', path: '/review' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Events', path: '/events' },
    { name: 'Special', path: '/special' },
  ];

  const moreLinks = [
    { name: 'Restaurant Info', path: '/info' },
    { name: 'Setting', path: '/setting' },
    { name: 'Profile', path: '/profile' },
  ];

  const isAdmin = user?.role === 'admin';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-cream/80 backdrop-blur-lg shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-3xl font-serif text-brand-orange italic group-hover:scale-110 transition-transform">GH</span>
          <span className="text-xl font-serif font-bold tracking-tighter text-brand-brown uppercase hidden sm:block">Gourmet Haven</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-orange ${location.pathname === link.path ? 'text-brand-orange' : 'text-brand-brown'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-brand-brown hover:text-brand-orange transition-colors">
              More <ChevronDown size={14} />
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-brand-brown/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 p-2">
              {moreLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2 text-sm text-brand-brown hover:bg-brand-orange/10 hover:text-brand-orange rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  to="/admin"
                  className="block px-4 py-2 text-sm font-bold text-brand-orange hover:bg-brand-orange/10 rounded-lg transition-colors"
                >
                  Admin Dashboard
                </Link>
              )}
            </div>
          </div>

          <Button variant="primary" onClick={() => navigate('/auth')} className="px-6 py-2">
            Login
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-brown" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-cream border-t border-brand-brown/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {[...navLinks, ...moreLinks].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-serif ${location.pathname === link.path ? 'text-brand-orange' : 'text-brand-brown'}`}
                >
                  {link.name}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif font-bold text-brand-orange"
                >
                  Admin Dashboard
                </Link>
              )}
              <Button variant="primary" onClick={() => { setIsOpen(false); navigate('/auth'); }} className="mt-4">
                Login / Register
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
