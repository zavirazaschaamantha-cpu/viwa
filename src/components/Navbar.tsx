import { motion } from 'motion/react';
import { Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="bg-brand-600 p-2 rounded-lg text-white font-bold shadow-lg shadow-brand-200">
            <Calendar className="w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold text-brand-950 tracking-tight">
            SmartEvent<span className="text-accent-500">Planner</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-brand-600 transition-colors">Fitur</a>
          <a href="#pricing" className="hover:text-brand-600 transition-colors">Harga</a>
          <a href="#about" className="hover:text-brand-600 transition-colors">Tentang</a>
          <a href="#contact" className="hover:text-brand-600 transition-colors text-accent-500">Kontak</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">
            Masuk
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-brand-600 to-accent-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-brand-100 transition-all hover:scale-105 active:scale-95">
            Mulai Sekarang
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-brand-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-brand-100 p-6 shadow-2xl"
        >
          <div className="flex flex-col gap-6 text-slate-600 font-medium">
            <a href="#features" onClick={() => setIsOpen(false)}>Fitur</a>
            <a href="#pricing" onClick={() => setIsOpen(false)}>Harga</a>
            <a href="#about" onClick={() => setIsOpen(false)}>Tentang</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Kontak</a>
            <hr className="border-brand-50" />
            <button className="text-left py-2 font-semibold text-brand-900">Masuk</button>
            <button className="bg-gradient-to-r from-brand-600 to-accent-500 text-white py-3 rounded-xl font-semibold shadow-lg shadow-brand-100">Mulai Sekarang</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
