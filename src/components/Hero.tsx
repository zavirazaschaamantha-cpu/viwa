import { motion } from 'motion/react';
import { ArrowRight, Ticket, Users, Play, Star, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      {/* Background decoration & Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="glow-purple -top-[20%] -left-[10%] w-[60%] h-[60%] opacity-30" />
        <div className="glow-pink top-[20%] -right-[10%] w-[50%] h-[50%] opacity-20" />
        <div className="glow-orange -bottom-[10%] left-[20%] w-[50%] h-[50%] opacity-20" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/50 backdrop-blur-md border border-brand-200/50 text-brand-700 text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-sm"
          >
            <Zap size={14} className="text-accent-500 fill-accent-500" />
            Evolusi Manajemen Event
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-ping ml-1" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[100px] font-display font-black text-slate-900 leading-[0.9] mb-10 tracking-tighter"
          >
            Masa Depan <br />
            <span className="text-gradient">Event Premium</span> <br />
            Ada di Sini<span className="text-accent-500">.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-14 max-w-3xl leading-relaxed font-medium"
          >
            Alami kemewahan manajemen event digital dengan platform eksklusif kami. Dirancang khusus untuk organisasi yang mengutamakan kesempurnaan, estetika, dan fungsionalitas tingkat tinggi.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link to="/signup" className="group relative px-10 py-5 bg-slate-900 text-white font-black rounded-[20px] transition-all hover:scale-105 shadow-2xl shadow-slate-300 flex items-center gap-3 overflow-hidden">
               <span className="relative z-10 flex items-center gap-3">
                 Mulai Eksplorasi <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-pink-custom opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <Link to="/dashboard" className="px-10 py-5 bg-white/70 backdrop-blur-xl text-slate-900 font-extrabold rounded-[20px] border border-slate-200 hover:bg-white hover:border-brand-200 transition-all flex items-center gap-3 group shadow-sm">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                   <Play size={14} className="fill-current ml-0.5" />
                </div>
                Lihat Demo Interaktif
            </Link>
          </motion.div>
        </div>

        {/* Futuristic Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Decorative floating elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-200/30 rounded-full blur-3xl animate-pulse" />

          <div className="perspective-1000">
            <motion.div 
              whileHover={{ rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative rounded-[48px] p-4 bg-gradient-to-b from-white/80 to-white/20 backdrop-blur-3xl border border-white/50 shadow-[0_50px_100px_-20px_rgba(30,41,59,0.15)] overflow-hidden"
            >
              <div className="bg-slate-900/5 rounded-[36px] overflow-hidden border border-slate-200 p-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                  alt="Premium Dashboard" 
                  className="w-full h-auto rounded-[28px] opacity-95 group-hover:scale-[1.01] transition-transform duration-1000 object-cover aspect-[16/9]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                   <div className="p-6 glass-morphism rounded-3xl border-white/20 shadow-2xl">
                      <div className="flex items-center gap-4 mb-4">
                         <div className="flex -space-x-4">
                            {[1,2,3,4].map(i => (
                              <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="U" />
                            ))}
                         </div>
                         <div className="text-xs font-black text-slate-800 uppercase tracking-tighter">+12.4k Aktif</div>
                      </div>
                      <div className="h-1.5 w-48 bg-slate-200 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: "75%" }}
                           transition={{ duration: 2, delay: 1 }}
                           className="h-full bg-gradient-to-r from-brand-500 to-pink-custom"
                         />
                      </div>
                   </div>

                   <div className="flex gap-4">
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="p-5 glass-morphism rounded-3xl border-white/20 shadow-2xl text-center min-w-[120px]"
                      >
                         <Sparkles className="mx-auto mb-2 text-accent-500" size={24} />
                         <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth</div>
                         <div className="text-xl font-black text-slate-900">+42%</div>
                      </motion.div>
                      <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                        className="p-5 glass-morphism rounded-3xl border-white/20 shadow-2xl text-center min-w-[120px]"
                      >
                         <Star className="mx-auto mb-2 text-brand-500 fill-brand-500" size={24} />
                         <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rating</div>
                         <div className="text-xl font-black text-slate-900">4.9/5</div>
                      </motion.div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
