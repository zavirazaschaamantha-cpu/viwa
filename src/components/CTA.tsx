import { motion } from "motion/react";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative overflow-hidden p-12 md:p-24 rounded-[48px] bg-brand-600 text-center max-w-6xl mx-auto shadow-2xl shadow-brand-200"
         >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full transform -skew-y-12 bg-white/10" />
            </div>

            <div className="relative z-10">
               <motion.div 
                 whileHover={{ rotate: 10, scale: 1.1 }}
                 className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 text-white"
               >
                  <Rocket size={32} />
               </motion.div>
               
               <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
                  Mulai Sukseskan Acara <br />
                  <span className="text-brand-200 font-black">Organisasi Anda Sekarang</span>
               </h2>
               <p className="text-brand-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                  Bergabunglah dengan ribuan penyelenggara acara yang telah menggunakan SmartEvent untuk memudahkan manajemen pendaftaran dan koordinasi.
               </p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link to="/signup" className="group px-10 py-5 bg-white text-brand-600 font-bold rounded-2xl flex items-center gap-2 hover:bg-brand-50 transition-all shadow-xl">
                    Daftar Sekarang <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="px-10 py-5 bg-transparent border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                    Lihat Demo
                  </button>
               </div>

               {/* Trust badges */}
               <div className="mt-16 pt-16 border-t border-white/10 flex flex-col items-center gap-6">
                  <div className="flex -space-x-3">
                     {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-600 overflow-hidden shadow-lg">
                           <img src={`https://i.pravatar.cc/100?u=cta${i}`} className="w-full h-full object-cover" alt="User" />
                        </div>
                     ))}
                  </div>
                  <div className="flex items-center gap-2 text-brand-100 text-sm font-semibold">
                    <Sparkles size={16} /> Dipercaya oleh lebih dari 500+ Organisasi Kampus
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
    </section>
  );
}
