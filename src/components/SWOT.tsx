import { motion } from 'motion/react';
import { ShieldCheck, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

export default function SWOT() {
  const items = [
    { 
      label: "Kekuatan", 
      icon: <ShieldCheck className="text-brand-600" />, 
      color: "border-brand-200 bg-brand-50",
      desc: "Validasi berbasis QR yang kuat dan sinkronisasi real-time di seluruh perangkat." 
    },
    { 
      label: "Kelemahan", 
      icon: <AlertTriangle className="text-accent-500" />, 
      color: "border-accent-200 bg-accent-50",
      desc: "Ketergantungan tinggi pada konektivitas internet yang stabil untuk sinkronisasi data cloud real-time." 
    },
    { 
      label: "Peluang", 
      icon: <Zap className="text-brand-600" />, 
      color: "border-brand-200 bg-brand-50",
      desc: "Meningkatnya permintaan akan transformasi digital di institusi pendidikan pasca pandemi." 
    },
    { 
      label: "Ancaman", 
      icon: <TrendingUp className="text-accent-500" />, 
      color: "border-accent-200 bg-accent-50",
      desc: "Kompetisi dari platform acara global yang sudah mapan dan solusi kampus khusus." 
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 text-slate-900">
          <h2 className="text-4xl font-display font-bold mb-4">Tinjauan Strategis</h2>
          <p className="text-slate-600">Analisis SWOT dari ekosistem SmartEvent Planner.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {items.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className={`p-8 rounded-[32px] border ${item.color} shadow-sm border flex flex-col items-center text-center hover:scale-105 transition-transform`}
             >
                <div className="w-16 h-16 rounded-2xl bg-white border border-brand-100 flex items-center justify-center mb-6 shadow-sm">
                   {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.label}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
