import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar } from 'lucide-react';
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 10 }}
            className="bg-brand-600 p-1.5 rounded-xl shadow-lg shadow-brand-200"
          >
            <Calendar className="text-white w-6 h-6" />
          </motion.div>
          <span className="text-xl font-display font-bold text-slate-900 tracking-tight">SmartEvent<span className="text-accent-500">Planner</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-brand-600 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <div className="h-6 w-px bg-slate-200 mx-2" />
          <div className="flex items-center gap-4">
            <Link to="/login" className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors">
              Masuk
            </Link>
            <Link to="/signup" className="px-8 py-3 bg-slate-900 text-white text-sm font-bold rounded-2xl hover:bg-brand-600 shadow-xl shadow-slate-200 hover:shadow-brand-100 transition-all hover:-translate-y-0.5 active:scale-95">
              Daftar Sekarang
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
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
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6">
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
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-4">
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 text-center font-bold text-slate-600 hover:text-brand-600"
                >
                  Masuk
                </Link>
                <Link 
                  to="/signup" 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-5 bg-brand-600 text-white text-center font-bold rounded-2xl shadow-xl shadow-brand-100"
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
