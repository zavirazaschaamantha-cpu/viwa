import { motion } from "motion/react";
import { ArrowRight, Zap, Sparkles, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background with futuristic glows */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-600 rounded-full blur-[180px] opacity-20 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-pink-custom rounded-full blur-[180px] opacity-15 -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent-600 rounded-full blur-[200px] opacity-10" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
         <motion.div 
           initial={{ opacity: 0, y: 50, rotateX: 5 }}
           whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: "circOut" }}
           className="relative overflow-hidden p-16 md:p-24 lg:p-32 rounded-[64px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl text-center max-w-6xl mx-auto group shadow-2xl"
         >
            {/* Animated particles background (simulated) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
               {[...Array(5)].map((_, i) => (
                 <motion.div
                   key={i}
                   animate={{ 
                     y: [0, -1000],
                     opacity: [0, 1, 0]
                   }}
                   transition={{ 
                     duration: Math.random() * 5 + 5,
                     repeat: Infinity,
                     ease: "linear",
                     delay: Math.random() * 5
                   }}
                   style={{ 
                     left: `${Math.random() * 100}%`,
                     width: `${Math.random() * 4 + 1}px`,
                     height: `${Math.random() * 100 + 50}px`
                   }}
                   className="absolute bottom-0 bg-gradient-to-t from-transparent via-brand-400 to-transparent"
                 />
               ))}
            </div>

            <div className="relative z-10">
               <motion.div 
                 whileHover={{ rotate: 360 }}
                 transition={{ duration: 1 }}
                 className="w-20 h-20 bg-gradient-to-br from-brand-500 via-pink-custom to-accent-600 rounded-[28px] flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(124,58,237,0.4)]"
               >
                  <Rocket className="text-white" size={36} />
               </motion.div>
               
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10"
               >
                 <Sparkles size={14} className="text-accent-500" /> Transformasi Digital Tanpa Batas
               </motion.div>

               <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-10 leading-[0.9] tracking-tighter">
                  Waktunya Level Up <br />
                  <span className="text-gradient">Acara Anda.</span>
               </h2>
               <p className="text-slate-400 text-lg md:text-xl mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
                  Bergabunglah dengan ekosistem elit penyelenggara acara di seluruh Indonesia. Rasakan kemudahan, keamanan, dan keindahan dalam satu platform revolusioner.
               </p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <Link to="/signup" className="group relative w-full sm:w-auto px-12 py-6 bg-white text-slate-950 font-black rounded-[24px] transition-all hover:scale-105 shadow-[0_20px_50px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 active:scale-95 overflow-hidden">
                     <span className="relative z-10 flex items-center gap-3 text-sm tracking-widest uppercase">
                       Mulai Tanpa Biaya <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                     </span>
                     <div className="absolute inset-0 bg-gradient-to-r from-brand-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <button className="w-full sm:w-auto px-12 py-6 bg-transparent border border-white/20 text-white font-black rounded-[24px] text-sm tracking-widest uppercase hover:bg-white/5 hover:border-white transition-all active:scale-95">
                     Hubungi Konsultan
                  </button>
               </div>

               {/* Social proof summary */}
               <div className="mt-20 flex flex-col items-center gap-4">
                  <div className="flex -space-x-3">
                     {[1,2,3,4,5].map(i => (
                       <img key={i} src={`https://i.pravatar.cc/100?u=cta${i}`} className="w-10 h-10 rounded-full border-2 border-slate-900 shadow-2xl" alt="U" />
                     ))}
                  </div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                    Dipercaya oleh <span className="text-white">25,000+</span> Pengguna Berpuas
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
    </section>
  );
}
