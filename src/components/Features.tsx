import { motion } from 'motion/react';
import { UserCheck, Ticket, Search, BarChart, Smartphone, Globe, Shield, Zap, Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function Features() {
  const features = [
    { 
      icon: <Globe size={28} />, 
      title: "Ekosistem Global", 
      desc: "Hubungkan acara Anda dengan ribuan peserta melalui infrastruktur cloud berperforma tinggi yang stabil dan responsif.",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <UserCheck size={28} />, 
      title: "Otomatisasi Cerdas", 
      desc: "Hapus kerumitan manual dengan sistem manajemen pendaftaran yang sepenuhnya otomatis dan real-time.",
      color: "from-brand-500 to-purple-500"
    },
    { 
      icon: <Ticket size={28} />, 
      title: "Tiket Eksklusif", 
      desc: "Tiket digital premium dengan kode QR keamanan tinggi yang memberikan kesan mewah bagi setiap peserta Anda.",
      color: "from-pink-500 to-brand-400"
    },
    { 
      icon: <Zap size={28} />, 
      title: "Performa Kilat", 
      desc: "Kecepatan muat halaman di bawah 1 detik untuk memastikan konversi pendaftaran yang maksimal tanpa hambatan.",
      color: "from-accent-400 to-sunkist"
    },
    { 
      icon: <BarChart size={28} />, 
      title: "Analitik Futuristik", 
      desc: "Dapatkan wawasan mendalam melalui visualisasi data modern yang membantu Anda mengambil keputusan strategis.",
      color: "from-emerald-500 to-teal-500"
    },
    { 
      icon: <Shield size={28} />, 
      title: "Keamanan Militer", 
      desc: "Data peserta dan transaksi keuangan Anda dilindungi oleh enkripsi end-to-end standar industri perbankan.",
      color: "from-slate-700 to-slate-900"
    },
  ];

  return (
    <section id="features" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-200/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-100/20 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
            >
              <Sparkles size={14} className="animate-pulse" />
              Teknologi Mutakhir
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-black text-slate-900 leading-[1.1]"
            >
              Dirancang untuk <br />
              <span className="text-gradient">Standar Tertinggi</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed lg:mb-2"
          >
            Kami menggabungkan estetika modern dengan fungsionalitas yang tak tertandingi untuk memastikan event Anda tidak hanya sukses, tapi juga berkesan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group p-1 bg-white/50 backdrop-blur-xl border border-white rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 overflow-hidden"
            >
              <div className="p-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-[24px] bg-gradient-to-br ${feature.color} flex items-center justify-center mb-10 shadow-lg shadow-brand-500/10 group-hover:scale-110 transition-transform duration-500 text-white`}>
                   {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-5 tracking-tight group-hover:text-brand-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-8 flex-1">{feature.desc}</p>
                
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <Heart size={12} className="text-pink-custom fill-pink-custom" /> Teruji & Terpercaya
                   </div>
                   <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-600 group-hover:text-white group-hover:rotate-45 transition-all">
                      <ArrowRight size={18} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
