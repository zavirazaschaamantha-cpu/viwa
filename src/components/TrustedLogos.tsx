import { motion } from "motion/react";

export default function TrustedLogos() {
  const stats = [
    { label: "Acara Sukses", val: "15,000+" },
    { label: "Peserta Terdaftar", val: "1.2M+" },
    { label: "Tiket Terjual", val: "Rp 50M+" },
    { label: "Kepuasan Klien", val: "4.9/5" },
  ];

  const universities = [
    { name: "UI", full: "Universitas Indonesia" },
    { name: "ITB", full: "Inst. Teknologi Bandung" },
    { name: "UGM", full: "Univ. Gadjah Mada" },
    { name: "UNAIR", full: "Univ. Airlangga" },
    { name: "BINUS", full: "Binus University" },
  ];

  return (
    <section className="bg-white border-y border-brand-50 relative z-10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
           {stats.map((stat, i) => (
             <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-1">{stat.val}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
        
        <div className="pt-8 border-t border-brand-50">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300 mb-8">
            Dipercaya oleh Institusi Terkemuka
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-30 grayscale saturate-0">
            {universities.map((uni, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="text-2xl font-display font-black text-slate-800 tracking-tighter">
                  {uni.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
