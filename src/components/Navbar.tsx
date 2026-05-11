import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Fitur Utama", href: "#features" },
    { label: "Cara Kerja", href: "#how-it-works" },
    { label: "Ulasan", href: "#testimonials" },
    { label: "Investasi", href: "#pricing" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-lg shadow-brand-500/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 12, scale: 1.1 }}
            className="bg-gradient-premium p-2 rounded-xl shadow-lg shadow-brand-500/20"
          >
            <Calendar className="text-white w-6 h-6" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-black text-slate-900 tracking-tight leading-none uppercase">
              SmartEvent<span className="text-pink-custom">.</span>
            </span>
            <span className="text-[10px] font-bold text-accent-500 uppercase tracking-widest mt-0.5">Premium Hub</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-10 text-[11px] font-extrabold text-slate-500 uppercase tracking-widest">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-brand-600 transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-1.5 ml-4">
            <Link to="/login" className="px-6 py-2.5 text-xs font-black text-slate-900 hover:text-brand-600 transition-transform active:scale-95 uppercase tracking-wider">
              Masuk
            </Link>
            <Link to="/signup" className="relative group overflow-hidden px-8 py-3.5 bg-slate-900 text-white text-xs font-black rounded-2xl hover:bg-brand-600 shadow-xl shadow-slate-200 hover:shadow-brand-100 transition-all uppercase tracking-widest active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Mulai Sekarang <Sparkles size={14} className="text-accent-400" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-pink-custom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-slate-900 hover:text-brand-600 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-[32px] border border-brand-50 shadow-2xl overflow-hidden mt-2 z-50"
          >
            <div className="p-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-black text-slate-900 hover:text-brand-500 transition-colors uppercase tracking-tight"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-slate-50" />
              <div className="flex flex-col gap-4">
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-5 text-center font-black text-slate-900 bg-slate-50 rounded-2xl uppercase tracking-widest text-xs"
                >
                  Masuk
                </Link>
                <Link 
                  to="/signup" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-6 bg-brand-600 text-white text-center font-black rounded-2xl shadow-xl shadow-brand-100 uppercase tracking-widest text-xs"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
