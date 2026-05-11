import { motion } from 'motion/react';
import { Check, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: "Standard",
      price: "Rp 0",
      description: "Untuk komunitas kecil yang baru memulai.",
      features: ["Hingga 100 peserta / event", "Formulir standar", "Tiket digital dasar", "Support komunitas"],
      cta: "Mulai Gratis",
      highlighted: false,
      icon: <Zap className="text-slate-400" />
    },
    {
      name: "Premium",
      price: "Rp 49rb",
      description: "Solusi lengkap untuk organisasi profesional.",
      features: ["Hingga 1.000 peserta / event", "Kustomisasi branding total", "Analitika real-time", "Scan QR via Aplikasi", "Sertifikat otomatis"],
      cta: "Pilih Premium",
      highlighted: true,
      icon: <Sparkles className="text-brand-600" />
    },
    {
      name: "Elite",
      price: "Rp 149rb",
      description: "Keamanan & performa tanpa kompromi.",
      features: ["Peserta tanpa batas", "Domain kustom eksklusif", "Manajemen VIP khusus", "Prioritas Server Utama", "Dukungan 24/7 Personal"],
      cta: "Hubungi Elite",
      highlighted: false,
      icon: <ShieldCheck className="text-accent-600" />
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4"
           >
             Struktur Investasi
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-8 tracking-tighter"
           >
             Pilih Level <span className="text-gradient">Eksklusivitas</span> Anda
           </motion.h2>
           <div className="w-24 h-1 bg-gradient-premium rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-stretch">
           {plans.map((plan, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1, duration: 0.6 }}
               className={`relative p-12 rounded-[48px] flex flex-col transition-all duration-500 overflow-hidden ${plan.highlighted ? "bg-slate-950 text-white shadow-2xl scale-105 z-10" : "bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl"}`}
             >
                {/* Highlight decoration */}
                {plan.highlighted && (
                  <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/20 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-custom/20 blur-3xl" />
                    <div className="mb-8 inline-flex px-4 py-1.5 rounded-full bg-gradient-premium text-white text-[9px] font-black uppercase tracking-[0.2em] self-start">
                      Saran Tim Ahli
                    </div>
                  </>
                )}

                <div className="mb-12">
                   <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${plan.highlighted ? "bg-white/10" : "bg-white shadow-sm"}`}>
                         {plan.icon}
                      </div>
                      {!plan.highlighted && <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{plan.name}</div>}
                   </div>
                   <h3 className={`text-2xl font-black mb-4 uppercase tracking-tight ${plan.highlighted ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                   <div className="flex items-baseline gap-2 mb-4">
                      <span className={`text-5xl font-display font-black tracking-tighter ${plan.highlighted ? "text-white" : "text-slate-900"}`}>{plan.price}</span>
                      <span className={`text-xs font-bold uppercase tracking-widest ${plan.highlighted ? "text-slate-500" : "text-slate-400"}`}>/event</span>
                   </div>
                   <p className={`text-sm font-medium ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>{plan.description}</p>
                </div>

                <div className={`h-px w-full mb-10 ${plan.highlighted ? "bg-white/10" : "bg-slate-200/50"}`} />

                <ul className="space-y-6 mb-12 flex-grow">
                   {plan.features.map((feature, i) => (
                     <li key={i} className="flex items-center gap-4">
                       <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted ? "bg-brand-500 text-white" : "bg-emerald-500 text-white"}`}>
                         <Check size={12} />
                       </div>
                       <span className={`text-sm font-bold tracking-tight ${plan.highlighted ? "text-slate-300" : "text-slate-600"}`}>{feature}</span>
                     </li>
                   ))}
                </ul>

                <Link 
                  to="/signup" 
                  className={`group relative overflow-hidden w-full py-5 rounded-[24px] font-black uppercase tracking-[0.2em] text-xs text-center transition-all duration-300 ${plan.highlighted ? "bg-white text-slate-950 hover:scale-[1.02]" : "bg-slate-900 text-white hover:bg-brand-600 hover:scale-[1.02]"}`}
                >
                   <span className="relative z-10">{plan.cta}</span>
                </Link>
             </motion.div>
           ))}
        </div>

        <div className="mt-20 p-10 rounded-[40px] bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 blur-[100px]" />
           <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Butuh Solusi Kustom?</h3>
              <p className="text-slate-400 font-medium">Hubungi tim konsultan kami untuk paket institusi skala besar.</p>
           </div>
           <button className="relative z-10 px-10 py-5 bg-white text-slate-950 font-black rounded-2xl uppercase tracking-widest text-xs hover:bg-brand-500 hover:text-white transition-all active:scale-95">
              Konsultasi Gratis
           </button>
        </div>
      </div>
    </section>
  );
}
