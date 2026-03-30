import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, Search, PlusCircle, Menu, X, LogIn } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isReading = location.pathname.startsWith('/read');

  useEffect(() => {
    const checkToken = () => {
      const hasToken = document.cookie.split(';').some((item) => item.trim().startsWith('token='));
      setIsLoggedIn(hasToken);
    };

    checkToken();
    // Optional: Add event listener for storage changes or custom events if needed
  }, [location]);

  if (isReading) return null;

  const navLinks = [
    { to: "/explore", label: "검색" },
    { to: "/library", label: "내 서재" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-3xl md:rounded-full px-4 md:px-8 py-3">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <Sparkles size={20} className="md:w-6 md:h-6" />
          </div>
          <span className="text-lg md:text-xl font-display font-bold tracking-tight text-primary">StoryMagic</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.to}
              to={link.to} 
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors", 
                location.pathname === link.to ? "text-primary" : "text-on-surface-variant"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/create" className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-secondary transition-all shadow-md hover:shadow-lg active:scale-95">
            <PlusCircle size={18} />
            그림책 만들기
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          
          {isLoggedIn ? (
            <Link to="/profile" className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors">
              <img src="https://i.pravatar.cc/150?u=jang" alt="프로필" className="w-full h-full object-cover" />
            </Link>
          ) : (
            <Link 
              to="/login" 
              className="flex items-center gap-2 bg-surface-container-high text-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-all shadow-sm active:scale-95"
            >
              <LogIn size={18} />
              <span className="hidden sm:inline">로그인</span>
            </Link>
          )}
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-4 right-4 glass rounded-3xl p-6 shadow-2xl z-40"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-bold p-2 rounded-xl transition-colors", 
                    location.pathname === link.to ? "bg-primary/10 text-primary" : "text-on-surface-variant"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/create" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-bold shadow-lg"
              >
                <PlusCircle size={20} />
                그림책 만들기
              </Link>

              <div className="h-px bg-on-surface-variant/10 my-2" />

              {isLoggedIn ? (
                <Link 
                  to="/profile" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                    <img src="https://i.pravatar.cc/150?u=jang" alt="프로필" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-bold text-on-surface-variant text-lg">내 프로필</span>
                </Link>
              ) : (
                <Link 
                  to="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-surface-container-high text-primary py-4 rounded-2xl font-bold"
                >
                  <LogIn size={20} />
                  로그인
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
