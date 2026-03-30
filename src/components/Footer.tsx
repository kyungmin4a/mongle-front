import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 md:py-20 border-t border-on-surface-variant/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <Sparkles size={18} />
          </div>
          <span className="text-lg font-display font-bold tracking-tight text-primary">StoryMagic</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors">홈</Link>
          <Link to="/explore" className="hover:text-primary transition-colors">검색</Link>
          <Link to="/create" className="hover:text-primary transition-colors">제작</Link>
          <Link to="/library" className="hover:text-primary transition-colors">서재</Link>
        </div>
        <p className="text-sm text-on-surface-variant text-center">© 2026 StoryMagic AI. 모든 권리 보유.</p>
      </div>
    </footer>
  );
};

export default Footer;
