import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-900" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-500 rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-400 rounded-full blur-[150px] opacity-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[60px] p-12 md:p-20 text-center max-w-5xl mx-auto"
         >
            <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-accent-500/20 rotate-12">
               <Zap className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
               Siap Mentransformasi <br className="hidden md:block" /> Digitalisasi Event Anda?
            </h2>
            <p className="text-brand-100 text-lg mb-12 max-w-2xl mx-auto">
               Bergabunglah dengan ribuan organisasi mahasiswa dan komunitas yang telah menyederhanakan manajemen event mereka hari ini.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link to="/signup" className="w-full sm:w-auto px-10 py-5 bg-white text-brand-900 font-bold rounded-2xl hover:bg-brand-50 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 group">
                  Mulai Sekarang Gratis <ArrowRight className="group-hover:translate-x-1 transition-transform" />
               </Link>
               <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
                  Hubungi Penjualan
               </button>
            </div>
         </motion.div>
      </div>
    </section>
  );
}
