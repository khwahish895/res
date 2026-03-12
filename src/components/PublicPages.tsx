import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Utensils, 
  ChefHat, 
  Wine, 
  Coffee,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { Button, TiltCard, GlassCard } from './UI';
import { useNavigate } from 'react-router-dom';

// --- Home Page ---
export const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-orange font-medium tracking-[0.4em] uppercase text-sm mb-6 block">Michelin Star Experience</span>
            <h1 className="text-7xl md:text-9xl font-serif italic text-brand-brown mb-8 leading-[0.9]">
              The Art of <br /> <span className="text-brand-orange">Exquisite</span> <br /> Dining
            </h1>
            <p className="text-xl text-brand-brown/60 font-serif italic mb-10 max-w-lg">
              Embark on a culinary journey where every dish tells a story of passion, tradition, and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" onClick={() => navigate('/online-order')}>Order Online</Button>
              <Button variant="outline" onClick={() => navigate('/reservations')}>Book a Table</Button>
            </div>
          </motion.div>

          {/* 3D Circular Carousel Simulation */}
          <div className="relative h-[600px] hidden lg:flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="relative w-[500px] h-[500px]"
            >
              {[
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400',
                'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400',
                'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400',
                'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=400',
              ].map((img, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-white shadow-2xl overflow-hidden"
                  style={{
                    transform: `rotate(${i * 90}deg) translateY(-250px) rotate(-${i * 90}deg)`,
                  }}
                >
                  <img src={img} alt={`Dish ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
              <div className="absolute inset-0 rounded-full border border-brand-orange/20" />
            </motion.div>
            
            {/* Center Piece */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-2xl z-10">
              <span className="text-4xl font-serif italic">GH</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-orange font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Chef's Selection</span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-brand-brown">Signature Creations</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Truffle Risotto', price: '$32', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=600' },
              { title: 'Wagyu Steak', price: '$58', img: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=600' },
              { title: 'Lobster Bisque', price: '$28', img: 'https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?auto=format&fit=crop&q=80&w=600' },
            ].map((dish, i) => (
              <TiltCard key={i} className="group cursor-pointer">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                  <img src={dish.img} alt={dish.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <Button variant="primary" className="w-full">Quick Order</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-serif italic text-brand-brown">{dish.title}</h3>
                  <span className="text-brand-orange font-bold">{dish.price}</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Story Preview */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1550966842-28c2e202ec91?auto=format&fit=crop&q=80&w=400" className="rounded-2xl mt-12" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400" className="rounded-2xl" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full -z-10 blur-3xl" />
          </div>
          <div>
            <span className="text-brand-orange font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Our Legacy</span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-brand-brown mb-8">Crafting Memories Since 1992</h2>
            <p className="text-lg text-brand-brown/60 font-serif italic mb-10">
              Gourmet Haven was born from a simple dream: to create a sanctuary where culinary excellence meets heartfelt hospitality. Over three decades, we've evolved into a destination for those who seek more than just a meal.
            </p>
            <Button variant="outline" onClick={() => navigate('/about')}>Read Our Story</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Gallery Page ---
export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [rotation, setRotation] = useState(0);

  const categories = ['all', 'drinks', 'dessert', 'main', 'ambiance'];
  
  const images = [
    { id: 1, category: 'main', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', title: 'Signature Sea Bass' },
    { id: 2, category: 'drinks', url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', title: 'Smoked Old Fashioned' },
    { id: 3, category: 'dessert', url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800', title: 'Chocolate Lava' },
    { id: 4, category: 'ambiance', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', title: 'Main Dining Hall' },
    { id: 5, category: 'main', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800', title: 'Garden Salad' },
    { id: 6, category: 'drinks', url: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800', title: 'Tropical Fusion' },
  ];

  const filteredImages = activeCategory === 'all' ? images : images.filter(img => img.category === activeCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 60);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Visual Feast</span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-brand-brown">Our Gallery</h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat 
                ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
                : 'bg-white text-brand-brown/60 hover:bg-brand-brown/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[500px] mb-32 carousel-container flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="relative w-full h-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredImages.map((img, i) => {
                const angle = (i * (360 / filteredImages.length)) + rotation;
                return (
                  <motion.div
                    key={img.id}
                    className="absolute w-80 h-96 rounded-2xl overflow-hidden shadow-2xl carousel-item"
                    animate={{
                      rotateY: angle,
                      translateZ: 400,
                      opacity: Math.abs(angle % 360) < 90 || Math.abs(angle % 360) > 270 ? 1 : 0.2,
                    }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  >
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                      <span className="text-brand-orange text-xs uppercase tracking-widest font-bold mb-1">{img.category}</span>
                      <h3 className="text-white text-xl font-serif italic">{img.title}</h3>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-white text-2xl font-serif italic mb-2">{img.title}</h3>
                  <div className="h-[1px] w-12 bg-brand-orange mx-auto" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
