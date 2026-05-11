import { motion } from "motion/react";

export default function TrustedLogos() {
  const stats = [
    { label: "Event Eksklusif", val: "25,000+" },
    { label: "Peserta Elite", val: "2.4M+" },
    { label: "Transaksi Aman", val: "Rp 150M+" },
    { label: "Rating Platform", val: "4.98/5" },
  ];

  const partners = [
    { name: "UI", full: "Universitas Indonesia" },
    { name: "ITB", full: "Inst. Teknologi Bandung" },
    { name: "UGM", full: "Univ. Gadjah Mada" },
    { name: "UNAIR", full: "Univ. Airlangga" },
    { name: "BINUS", full: "Binus University" },
    { name: "IPB", full: "Institut Pertanian Bogor" },
  ];

  return (
    <section className="bg-white/40 backdrop-blur-xl border-y border-slate-100 relative z-10 py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-50/5 via-transparent to-accent-50/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
           {stats.map((stat, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="text-center relative group"
             >
                <div className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                  {stat.val}
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] group-hover:text-brand-600 transition-colors">
                  {stat.label}
                </div>
                {i < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-100 hidden lg:block" />
                )}
             </motion.div>
           ))}
        </div>
        
        <div className="pt-16 border-t border-slate-100/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="shrink-0">
               <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-300 transform -rotate-90 origin-center hidden xl:block whitespace-nowrap">
                 Mitra Strategis Kami
               </p>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block xl:hidden text-center mb-8">
                 Mitra Strategis Kami
               </p>
            </div>
            
            <div className="flex-1 flex flex-wrap justify-center lg:justify-between items-center gap-x-12 gap-y-10 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              {partners.map((uni, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.05) }}
                  className="flex flex-col items-center group cursor-default"
                >
                  <div className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tighter hover:text-brand-600 transition-colors">
                    {uni.name}
                  </div>
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {uni.full}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
