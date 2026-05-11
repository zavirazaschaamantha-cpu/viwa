import { motion } from "motion/react";

export default function TrustedLogos() {
  const universities = [
    { name: "Universitas Indonesia", logo: "UI" },
    { name: "Institut Teknologi Bandung", logo: "ITB" },
    { name: "Universitas Gadjah Mada", logo: "UGM" },
    { name: "Universitas Airlangga", logo: "UNAIR" },
    { name: "Universitas Brawijaya", logo: "UB" },
    { name: "Binus University", logo: "BINUS" },
  ];

  return (
    <section className="py-12 bg-white border-y border-brand-50">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
          Dipercaya oleh Institusi Terkemuka di Indonesia
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
          {universities.map((uni, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center"
            >
              <div className="text-2xl font-display font-black text-slate-800 tracking-tighter group-hover:text-brand-600 transition-colors">
                {uni.logo}
              </div>
              <span className="text-[10px] font-bold text-slate-400 hidden md:block">{uni.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
