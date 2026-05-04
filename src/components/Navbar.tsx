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
          <div className="bg-blue-600 p-2 rounded-lg text-white font-bold shadow-lg shadow-blue-900/40">
            <Calendar className="w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold text-white tracking-tight">
            SmartEvent<span className="text-blue-400">Planner</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors text-blue-400">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors underline-offset-4 hover:underline">
            Log in
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50 hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 p-6 shadow-2xl"
        >
          <div className="flex flex-col gap-6 text-slate-300 font-medium">
            <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            <hr className="border-white/5" />
            <button className="text-left py-2 font-semibold text-white">Log in</button>
            <button className="bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-900/20">Get Started</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
