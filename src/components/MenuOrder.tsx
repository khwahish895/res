import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  Plus, 
  Minus, 
  ShoppingBag, 
  X, 
  CreditCard, 
  MapPin, 
  ChevronRight,
  Star,
  Info
} from 'lucide-react';
import { Button, TiltCard, GlassCard } from './UI';

const MENU_DATA = [
  { id: 1, name: 'Margherita Pizza', category: 'pizza', price: 18, img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=400', rating: 4.8 },
  { id: 2, name: 'Truffle Burger', category: 'burgers', price: 24, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400', rating: 4.9 },
  { id: 3, name: 'Pesto Pasta', category: 'pasta', price: 22, img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=400', rating: 4.7 },
  { id: 4, name: 'Old Fashioned', category: 'drinks', price: 14, img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400', rating: 4.9 },
  { id: 5, name: 'Tiramisu', category: 'desserts', price: 12, img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=400', rating: 4.8 },
  { id: 6, name: 'Pepperoni Pizza', category: 'pizza', price: 20, img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400', rating: 4.6 },
];

export const MenuOrderPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'pizza', 'burgers', 'pasta', 'drinks', 'desserts'];

  const filteredMenu = MENU_DATA.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: typeof MENU_DATA[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-brand-orange font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Culinary Selection</span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-brand-brown">Our Menu</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-brown/40" size={18} />
              <input 
                type="text" 
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border border-brand-brown/10 rounded-full py-3 pl-12 pr-6 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all"
              />
            </div>
            <Button variant="secondary" onClick={() => setIsCartOpen(true)} className="relative">
              <ShoppingBag size={18} className="mr-2" />
              Cart ({cart.length})
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-orange text-white text-[10px] flex items-center justify-center rounded-full border-2 border-brand-cream">
                  {cart.length}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat 
                ? 'bg-brand-brown text-white shadow-lg' 
                : 'bg-white text-brand-brown/60 hover:bg-brand-brown/5 border border-brand-brown/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <TiltCard className="p-0 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-brand-brown">
                      <Star size={12} className="text-brand-orange fill-brand-orange" />
                      {item.rating}
                    </div>
                    <div className="absolute inset-0 bg-brand-brown/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-serif italic text-brand-brown">{item.name}</h3>
                      <span className="text-xl font-bold text-brand-orange">${item.price}</span>
                    </div>
                    <p className="text-sm text-brand-brown/60 font-serif italic mb-6">
                      Fresh ingredients prepared with traditional techniques and modern flair.
                    </p>
                    <Button variant="primary" className="w-full" onClick={() => addToCart(item)}>
                      Add to Cart
                    </Button>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-brand-brown/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-brand-cream z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-brand-brown/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="text-brand-orange" />
                  <h3 className="text-2xl font-serif italic text-brand-brown">Your Order</h3>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-brand-brown/5 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-brand-brown/5 rounded-full flex items-center justify-center mb-4">
                      <ShoppingBag size={32} className="text-brand-brown/20" />
                    </div>
                    <p className="text-brand-brown/40 font-serif italic">Your cart is empty</p>
                    <Button variant="outline" className="mt-6" onClick={() => setIsCartOpen(false)}>Start Ordering</Button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-serif italic text-brand-brown text-lg">{item.name}</h4>
                        <p className="text-brand-orange font-bold text-sm">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-3 bg-brand-brown/5 rounded-full px-3 py-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-brand-orange transition-colors">
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-brand-orange transition-colors">
                          <Plus size={14} />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-brand-brown/20 hover:text-red-500 transition-colors">
                        <X size={18} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 bg-white border-t border-brand-brown/10 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-brand-brown/60">
                      <span>Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-brand-brown/60">
                      <span>Delivery Fee</span>
                      <span>$5.00</span>
                    </div>
                    <div className="flex justify-between text-xl font-serif italic text-brand-brown pt-2 border-t border-brand-brown/5">
                      <span>Total</span>
                      <span className="text-brand-orange">${(total + 5).toFixed(2)}</span>
                    </div>
                  </div>
                  <Button variant="primary" className="w-full py-4 group">
                    Checkout Now
                    <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
