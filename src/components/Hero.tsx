import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 transform translate-x-20 z-0 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              University & Community Hub
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Plan <span className="text-gradient">Smarter</span>, <br />
              Manage Events Better
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              The all-in-one platform for university students and institutions to coordinate, 
              promote, and analyze campus events without the manual mess.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-xl shadow-white/10 flex items-center justify-center gap-2">
                Get Started Free <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2">
                Watch Demo
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                <div className="text-blue-400 font-bold text-2xl">98%</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Efficiency Boost</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
                <div className="text-blue-400 font-bold text-2xl">15k+</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Events Hosted</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/10 p-1 bg-white/5 backdrop-blur-xl">
              <div className="rounded-[36px] overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/smart-event-hero/1200/800" 
                  alt="Students collaborating on event" 
                  className="w-full h-auto object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                  92%
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Attendance</div>
                  <div className="text-sm font-bold text-white">Target Reached</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
