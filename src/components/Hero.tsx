import { motion } from 'motion/react';
import { ArrowRight, Play, Sparkles, Calendar, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-50 blur-[120px] rounded-full opacity-60" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-indigo-50 blur-[120px] rounded-full opacity-60" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-bold mb-8"
          >
            <Sparkles size={16} className="text-brand-600" />
            Platform Manajemen Acara Kampus No.1
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight"
          >
            Kelola Acara Kampus Lebih <br />
            <span className="text-brand-600">Mudah & Profesional</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
          >
            Satu platform untuk semua kebutuhan organisasi Anda. Mulai dari pendaftaran peserta, manajemen panitia, hingga analitik kehadiran secara real-time.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link to="/signup" className="px-8 py-4 bg-brand-600 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">
               Coba Gratis Sekarang <ArrowRight size={20} />
            </Link>
            
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-2xl flex items-center gap-2 hover:bg-slate-50 transition-all">
                <Play size={16} className="fill-current text-brand-600" />
                Lihat Demo
            </button>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative p-2 rounded-[32px] bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
            <div className="rounded-[24px] overflow-hidden border border-slate-50 bg-slate-50 aspect-[16/9] relative group">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000" 
                alt="Dashboard Preview" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating elements to simulate a dashboard */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  {[
                    { icon: <Users size={18} />, label: "Total Peserta", val: "1,250+" },
                    { icon: <Calendar size={18} />, label: "Acara Berjalan", val: "12" },
                    { icon: <BarChart3 size={18} />, label: "Growth", val: "+25%" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + (i * 0.1) }}
                      className="p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
                    >
                      <div className="text-brand-600 mb-2">{item.icon}</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                      <div className="text-2xl font-black text-slate-900">{item.val}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
