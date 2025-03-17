import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'হোম' },
    { to: '/products', label: 'পণ্যসমূহ' },
    { to: '/faq', label: 'সচরাচর জিজ্ঞাসা' },
    { to: '/testimonials', label: 'গ্রাহকদের মতামত' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-brand-green text-white py-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Leaf className="w-8 h-8" />
            </motion.div>
            <h1 className="text-2xl font-medium font-inter">Natural Care by Tasmim</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hover:text-white/80 transition-colors font-inter ${
                  location.pathname === link.to ? 'text-white font-medium' : 'text-white/90'
                }`}
                lang="bn"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/order"
              className="bg-white text-brand-green px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/90 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span lang="bn">অর্ডার করুন</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4 py-4">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-2 rounded-lg hover:bg-white/10 transition-colors ${
                      location.pathname === link.to ? 'bg-white/10' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                    lang="bn"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/order"
                  className="bg-white text-brand-green px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/90 transition-all justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span lang="bn">অর্ডার করুন</span>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;