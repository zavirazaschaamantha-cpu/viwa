import { motion } from "motion/react";

export default function TrustedLogos() {
  const stats = [
    { label: "Peserta Terdaftar", val: "50,000+" },
    { label: "Organisasi Aktif", val: "500+" },
    { label: "Tiket Terbit", val: "100k+" },
    { label: "Tingkat Kepuasan", val: "99.9%" },
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
    <section className="bg-white border-y border-slate-50 relative z-10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
           {stats.map((stat, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="text-center"
             >
                <div className="text-3xl md:text-4xl font-display font-black text-slate-900 mb-2 tracking-tight">
                  {stat.val}
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
             </motion.div>
           ))}
        </div>
        
        <div className="pt-12 border-t border-slate-50">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="shrink-0 text-center lg:text-left">
               <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Telah Dipercaya Oleh</div>
               <div className="h-1 w-12 bg-brand-600 mx-auto lg:mx-0 rounded-full" />
            </div>
            
            <div className="flex-1 flex flex-wrap justify-center lg:justify-between items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              {partners.map((uni, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.05) }}
                  className="group cursor-default"
                >
                  <div className="text-2xl font-display font-black text-slate-900 tracking-tighter group-hover:text-brand-600 transition-colors">
                    {uni.name}
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
