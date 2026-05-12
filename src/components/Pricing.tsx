import { motion } from 'motion/react';
import { Check, ShieldCheck, Sparkles, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: "Pelajar",
      price: "Rp 0",
      description: "Untuk organisasi mahasiswa rintisan.",
      features: ["Maksimal 100 Peserta", "Formulir Standar", "E-Sertifikat Digital", "Support Komunitas"],
      cta: "Mulai Gratis",
      highlighted: false,
      icon: <Zap className="text-slate-400" />
    },
    {
      name: "Profesional",
      price: "Rp 49k",
      description: "Fitur lengkap untuk acara yang lebih besar.",
      features: ["Maksimal 1.000 Peserta", "Custom Branding", "Analitik Lengkap", "Sistem QR Code Sync", "E-Sertifikat Otomatis"],
      cta: "Pilih Paket",
      highlighted: true,
      icon: <Sparkles className="text-brand-600" />
    },
    {
      name: "Organisasi",
      price: "Rp 149k",
      description: "Kapasitas tanpa batas untuk institusi.",
      features: ["Peserta Tak Terbatas", "Custom Domain", "Prioritas Support", "Export Data Lengkap", "Support 24/7"],
      cta: "Hubungi Kami",
      highlighted: false,
      icon: <ShieldCheck className="text-brand-600" />
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold mb-6"
           >
             <Star size={16} /> Paket Harga
           </motion.div>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
             Investasi Untuk <span className="text-brand-600">Kesuksesan Acara</span>
           </h2>
           <p className="text-slate-600 leading-relaxed font-medium">Pilih paket yang paling sesuai dengan kebutuhan organisasi dan skala acara Anda.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
           {plans.map((plan, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className={`relative p-10 rounded-[32px] flex flex-col transition-all duration-300 ${plan.highlighted ? "bg-slate-900 text-white shadow-2xl shadow-brand-200 scale-105 z-10" : "bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl"}`}
             >
                {plan.highlighted && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1 rounded-full bg-brand-600 text-white text-xs font-bold shadow-lg shadow-brand-200">
                    Paling Populer
                  </div>
                )}

                <div className="mb-8">
                   <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${plan.highlighted ? "bg-white/10" : "bg-white shadow-sm border border-slate-100"}`}>
                         {plan.icon}
                      </div>
                      {!plan.highlighted && <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{plan.name}</div>}
                   </div>
                   <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                   <div className="flex items-baseline gap-1 mb-4">
                      <span className={`text-4xl font-bold ${plan.highlighted ? "text-brand-400" : "text-slate-900"}`}>{plan.price}</span>
                      <span className={`text-sm font-medium ${plan.highlighted ? "text-slate-400" : "text-slate-400"}`}>/ acara</span>
                   </div>
                   <p className={`text-sm font-medium leading-relaxed ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>{plan.description}</p>
                </div>

                <div className={`h-px w-full mb-8 ${plan.highlighted ? "bg-white/10" : "bg-slate-200"}`} />

                <ul className="space-y-4 mb-10 flex-grow">
                   {plan.features.map((feature, i) => (
                     <li key={i} className="flex items-center gap-3">
                       <Check size={18} className={plan.highlighted ? "text-brand-400" : "text-brand-600"} />
                       <span className={`text-sm font-medium ${plan.highlighted ? "text-slate-300" : "text-slate-600"}`}>{feature}</span>
                     </li>
                   ))}
                </ul>

                <Link 
                  to="/signup" 
                  className={`block text-center py-4 px-6 rounded-2xl font-bold transition-all duration-300 ${plan.highlighted ? "bg-brand-600 text-white hover:bg-brand-700 shadow-xl shadow-brand-900/20" : "bg-slate-900 text-white hover:bg-slate-800"}`}
                >
                   {plan.cta}
                </Link>
             </motion.div>
           ))}
        </div>

        <div className="mt-16 p-8 md:p-12 rounded-[32px] bg-brand-600 text-white flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Butuh Solusi Kustom?</h3>
              <p className="text-brand-100 font-medium">Hubungi tim kami untuk mendiskusikan kebutuhan khusus organisasi Anda.</p>
           </div>
           <button className="px-10 py-4 bg-white text-brand-600 rounded-2xl font-bold hover:bg-brand-50 transition-colors shadow-xl">
              Hubungi Penjualan
           </button>
        </div>
      </div>
    </section>
  );
}
