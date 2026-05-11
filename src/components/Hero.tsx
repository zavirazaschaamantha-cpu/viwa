import { motion } from 'motion/react';
import { ArrowRight, Ticket, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/5 -skew-x-12 transform translate-x-20 z-0 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              Hub Universitas & Komunitas
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              Rencana <span className="text-gradient">Lebih Cerdas</span>, <br />
              Kelola Acara Lebih Baik
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Platform all-in-one untuk mahasiswa dan institusi guna mengoordinasikan, 
              mempromosikan, dan menganalisis acara kampus tanpa kerumitan manual.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-700 text-white font-bold rounded-xl hover:bg-brand-800 transition-all hover:scale-105 shadow-xl shadow-brand-200 flex items-center justify-center gap-2 group">
                Mulai Gratis <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-brand-100 hover:bg-brand-50 transition-all flex items-center justify-center gap-2">
                Lihat Demo
              </button>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-brand-600 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">+2k</div>
               </div>
               <div className="text-left">
                  <div className="flex items-center gap-1 text-accent-500">
                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                  </div>
                  <div className="text-xs text-slate-500 font-bold">Dipercaya oleh 2,000+ Organisasi Kampus</div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            {/* Dashboard Mockup Layered Effect */}
            <div className="relative group">
               <div className="absolute inset-0 bg-brand-200 rounded-[40px] blur-3xl opacity-20 -rotate-3 group-hover:scale-110 transition-transform" />
               <div className="relative rounded-[40px] border border-brand-100 shadow-[0_32px_64px_-16px_rgba(30,41,59,0.15)] bg-white p-2">
                  <div className="bg-slate-50 rounded-[34px] overflow-hidden border border-slate-100 p-4">
                     <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                     </div>
                     <img 
                      src="https://picsum.photos/seed/dashboard-preview/1200/800" 
                      alt="Dashboard Interface" 
                      className="w-full h-auto rounded-2xl shadow-sm opacity-90 group-hover:scale-[1.02] transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
               </div>

               {/* Floating Widgets */}
               <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white border border-brand-100 p-4 rounded-2xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-3">
                   <div className="bg-accent-100 p-2 rounded-xl text-accent-600">
                      <Ticket size={24} />
                   </div>
                   <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Tiket Terjual</div>
                      <div className="text-lg font-bold text-slate-900">Rp 12.4M</div>
                   </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-10 bg-white border border-brand-100 p-4 rounded-2xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-3">
                   <div className="bg-brand-100 p-2 rounded-xl text-brand-600">
                      <Users size={24} />
                   </div>
                   <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Peserta Aktif</div>
                      <div className="text-lg font-bold text-slate-900">542</div>
                   </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
