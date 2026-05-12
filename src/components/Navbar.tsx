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
    { label: "Fitur", href: "#features" },
    { label: "Cara Kerja", href: "#how-it-works" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Harga", href: "#pricing" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.1 }}
            className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-100"
          >
            <Calendar className="text-white w-6 h-6" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold text-slate-900 tracking-tight leading-none uppercase">
              SmartEvent<span className="text-accent-500">.</span>
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Planner Hub</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-brand-600 transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 ml-4">
            <Link to="/login" className="px-6 py-2 text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors">
              Masuk
            </Link>
            <Link to="/signup" className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-brand-600 transition-all shadow-xl shadow-slate-100">
               Coba Gratis
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
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
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-900 hover:text-brand-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-slate-50" />
              <div className="flex flex-col gap-4">
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 text-center font-bold text-slate-600 bg-slate-50 rounded-xl"
                >
                  Masuk
                </Link>
                <Link 
                  to="/signup" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 text-center font-bold text-white bg-brand-600 rounded-xl shadow-lg shadow-brand-100"
                >
                  Coba Gratis
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
