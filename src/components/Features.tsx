import { motion } from 'motion/react';
import { UserCheck, Ticket, BarChart, Smartphone, Shield, Zap, Sparkles, ArrowRight } from 'lucide-react';

export default function Features() {
  const features = [
    { 
      icon: <UserCheck size={28} />, 
      title: "Pendaftaran Cepat", 
      desc: "Proses pendaftaran yang mulus dan cepat untuk semua jenis acara kampus Anda.",
      color: "bg-brand-50 text-brand-600"
    },
    { 
      icon: <Ticket size={28} />, 
      title: "QR Tiket Digital", 
      desc: "Sistem tiket berbasis QR code yang memudahkan check-in peserta di lokasi acara.",
      color: "bg-blue-50 text-blue-600"
    },
    { 
      icon: <Smartphone size={28} />, 
      title: "Ramah Mobile", 
      desc: "Akses dan kelola acara Anda dari mana saja melalui perangkat mobile apa pun.",
      color: "bg-purple-50 text-purple-600"
    },
    { 
      icon: <BarChart size={28} />, 
      title: "Analitik Real-time", 
      desc: "Pantau pertumbuhan peserta dan data statistik acara Anda secara langsung.",
      color: "bg-pink-50 text-pink-600"
    },
    { 
      icon: <Shield size={28} />, 
      title: "Keamanan Data", 
      desc: "Perlindungan data peserta yang aman dan terenkripsi sesuai standar industri.",
      color: "bg-emerald-50 text-emerald-600"
    },
    { 
      icon: <Zap size={28} />, 
      title: "Otomatisasi Email", 
      desc: "Kirim konfirmasi dan pengingat acara secara otomatis ke semua peserta.",
      color: "bg-orange-50 text-orange-600"
    },
  ];

  return (
    <section id="features" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-6"
          >
            <Sparkles size={16} />
            Fitur Unggulan
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Semua yang Anda Butuhkan untuk <span className="text-brand-600">Sukseskan Acara</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Dilengkapi dengan alat canggih yang dirancang khusus untuk mempermudah koordinasi dan manajemen acara organisasi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-2xl hover:shadow-brand-100 transition-all duration-300"
            >
               <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
               <p className="text-slate-600 leading-relaxed mb-6">{feature.desc}</p>
               <div className="flex items-center gap-2 text-brand-600 font-bold text-sm">
                 Selengkapnya <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
