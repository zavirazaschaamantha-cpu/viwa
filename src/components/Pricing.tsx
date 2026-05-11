import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: "Paket Gratis",
      price: "Rp0",
      features: ["Hingga 50 peserta", "Formulir pendaftaran standar", "Notifikasi email", "Dukungan komunitas"],
      cta: "Mulai Sekarang",
      highlighted: false
    },
    {
      name: "Paket Dasar",
      price: "Rp49.000",
      features: ["Hingga 500 peserta", "Kolom pendaftaran kustom", "Sistem tiket QR", "Aplikasi pemindai kehadiran", "Dukungan prioritas"],
      cta: "Pilih Dasar",
      highlighted: false
    },
    {
      name: "Paket Pro",
      price: "Rp99.000",
      features: ["Peserta tanpa batas", "Dasbor & analitik tingkat lanjut", "Sertifikat tanpa batas", "Alat kolaborasi tim", "Dukungan Premium 24/7", "Siap domain kustom"],
      cta: "Ambil Pro Sekarang",
      highlighted: true
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="glow-purple top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
           <h4 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Investasi Anda</h4>
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">Pilih Paket <span className="text-brand-600">Terbaik</span></h2>
           <p className="text-slate-600 max-w-2xl mx-auto text-lg">Investasi kecil untuk dampak besar pada profesionalisme event komunitas Anda.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
           {plans.map((plan, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className={`p-12 rounded-[48px] flex flex-col transition-all duration-500 border ${plan.highlighted ? "bg-white border-brand-200 shadow-[0_40px_80px_-15px_rgba(168,85,247,0.2)] scale-110 z-10" : "bg-white/50 backdrop-blur-sm border-brand-50 hover:bg-white hover:border-brand-100 shadow-xl shadow-brand-50/50"}`}
             >
                {plan.highlighted && (
                  <div className="mb-6 inline-flex self-start px-4 py-1.5 rounded-full bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest">
                    Paling Populer
                  </div>
                )}
                <div className="mb-10">
                   <h3 className="text-2xl font-bold mb-4 text-slate-900">{plan.name}</h3>
                   <div className="flex items-baseline gap-2">
                     <span className="text-5xl font-display font-bold text-slate-900 tracking-tight">{plan.price}</span>
                     <span className="text-slate-500 font-medium">/bulan</span>
                   </div>
                </div>

                <ul className="space-y-5 mb-12 flex-grow">
                   {plan.features.map((feature, i) => (
                     <li key={i} className="flex items-center gap-4 text-slate-600">
                       <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-600"}`}>
                         <Check size={14} />
                       </div>
                       <span className="font-medium">{feature}</span>
                     </li>
                   ))}
                </ul>

                <Link to="/signup" className={`w-full py-5 rounded-2xl font-bold text-center transition-all duration-300 ${plan.highlighted ? "bg-brand-600 text-white hover:bg-brand-700 shadow-xl shadow-brand-200" : "bg-slate-900 text-white hover:bg-slate-800"}`}>
                   {plan.cta}
                </Link>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
