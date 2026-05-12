import { motion } from 'motion/react';
import { ShieldCheck, Zap, TrendingUp, AlertTriangle, Sparkles } from 'lucide-react';
import React from 'react';

export default function SWOT() {
  const items = [
    { 
      label: "Kekuatan", 
      icon: <ShieldCheck className="text-brand-600" />, 
      color: "bg-white border-slate-100",
      accent: "text-brand-600",
      desc: "Sistem verifikasi QR Code yang cepat dan integrasi database terpusat yang aman." 
    },
    { 
      label: "Kelemahan", 
      icon: <AlertTriangle className="text-orange-500" />, 
      color: "bg-white border-slate-100",
      accent: "text-orange-500",
      desc: "Ketergantungan pada koneksi internet untuk proses sinkronisasi data secara real-time." 
    },
    { 
      label: "Peluang", 
      icon: <Zap className="text-brand-600" />, 
      color: "bg-white border-slate-100",
      accent: "text-brand-600",
      desc: "Mendukung transformasi digital organisasi kampus dalam mengelola administrasi acara." 
    },
    { 
      label: "Tantangan", 
      icon: <TrendingUp className="text-orange-500" />, 
      color: "bg-white border-slate-100",
      accent: "text-orange-500",
      desc: "Edukasi panitia untuk beralih dari metode manual ke sistem digital yang lebih efisien." 
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold mb-6"
          >
            <Sparkles size={16} /> Analisis Strategis
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Tinjauan <span className="text-brand-600">SmartEvent</span>
          </h2>
          <p className="text-slate-600 leading-relaxed font-medium">Analisis mendalam mengenai ekosistem dan kapabilitas platform kami dalam melayani organisasi Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {items.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className={`p-8 rounded-3xl border ${item.color} shadow-sm flex flex-col items-center text-center hover:shadow-xl transition-all duration-300`}
             >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                   {item.icon}
                </div>
                <h4 className={`text-xl font-bold mb-4 ${item.accent}`}>{item.label}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
