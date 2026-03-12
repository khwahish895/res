import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

// Components
import { SplashScreen } from './components/SplashScreen';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { AuthPage } from './components/AuthPage';
import { ComingSoon } from './components/ComingSoon';
import { DashboardLayout } from './components/DashboardLayout';

// Public Pages
import { HomePage, GalleryPage } from './components/PublicPages';
import { MenuOrderPage } from './components/MenuOrder';

// Dashboards
import { AdminDashboard } from './components/dashboards/AdminDashboard';
import { CustomerDashboard } from './components/dashboards/CustomerDashboard';
import { StaffDashboard } from './components/dashboards/StaffDashboard';
import { DeliveryDashboard } from './components/dashboards/DeliveryDashboard';

const MainContent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/admin') || 
                      location.pathname.startsWith('/customer') || 
                      location.pathname.startsWith('/staff') || 
                      location.pathname.startsWith('/delivery');

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <>
      <ThreeBackground />
      {!isDashboard && <Navbar />}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuOrderPage />} />
          <Route path="/about" element={<ComingSoon title="Our Story" />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reservations" element={<ComingSoon title="Table Booking" />} />
          <Route path="/online-order" element={<MenuOrderPage />} />
          <Route path="/review" element={<ComingSoon title="Customer Reviews" />} />
          <Route path="/faq" element={<ComingSoon title="Frequently Asked Questions" />} />
          <Route path="/events" element={<ComingSoon title="Upcoming Events" />} />
          <Route path="/special" element={<ComingSoon title="Today's Specials" />} />
          <Route path="/info" element={<ComingSoon title="Restaurant Information" />} />
          <Route path="/setting" element={<ComingSoon title="User Settings" />} />
          <Route path="/profile" element={<ComingSoon title="Your Profile" />} />
          
          {/* Auth Route */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Admin Dashboards */}
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="menu" element={<ComingSoon title="Menu Management" />} />
            <Route path="orders" element={<ComingSoon title="Order Management" />} />
            <Route path="reservations" element={<ComingSoon title="Reservation Management" />} />
            <Route path="customers" element={<ComingSoon title="Customer Directory" />} />
            <Route path="promotions" element={<ComingSoon title="Promotion Management" />} />
            <Route path="reviews" element={<ComingSoon title="Review Moderation" />} />
            <Route path="settings" element={<ComingSoon title="System Settings" />} />
          </Route>

          {/* Customer Dashboards */}
          <Route path="/customer" element={<DashboardLayout />}>
            <Route index element={<CustomerDashboard />} />
            <Route path="orders" element={<ComingSoon title="My Orders" />} />
            <Route path="tracking" element={<ComingSoon title="Order Tracking" />} />
            <Route path="favorites" element={<ComingSoon title="My Favorites" />} />
            <Route path="profile" element={<ComingSoon title="Profile Settings" />} />
          </Route>

          {/* Staff Dashboards */}
          <Route path="/staff" element={<DashboardLayout />}>
            <Route index element={<StaffDashboard />} />
            <Route path="orders" element={<ComingSoon title="Kitchen Orders" />} />
            <Route path="kitchen" element={<ComingSoon title="Kitchen Display System" />} />
            <Route path="tables" element={<ComingSoon title="Table Management" />} />
            <Route path="reservations" element={<ComingSoon title="Staff Reservations" />} />
          </Route>

          {/* Delivery Dashboards */}
          <Route path="/delivery" element={<DashboardLayout />}>
            <Route index element={<DeliveryDashboard />} />
            <Route path="list" element={<ComingSoon title="Available Deliveries" />} />
            <Route path="map" element={<ComingSoon title="Navigation Map" />} />
            <Route path="history" element={<ComingSoon title="Delivery History" />} />
            <Route path="earnings" element={<ComingSoon title="Earnings Summary" />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}
