import { motion } from 'motion/react';
import { GraduationCap, Users, Building2 } from 'lucide-react';

export default function TargetMarket() {
  const targets = [
    { icon: <GraduationCap size={40} className="text-brand-600" />, title: "Mahasiswa & Universitas", desc: "Kelola organisasi mahasiswa di seluruh kampus dan acara departemen dengan satu akun terpadu." },
    { icon: <Users size={40} className="text-brand-600" />, title: "Komunitas", desc: "Tingkatkan jangkauan dan koordinasi sukarelawan Anda dalam kelompok minat atau komunitas publik." },
    { icon: <Building2 size={40} className="text-brand-600" />, title: "Perusahaan", desc: "Pelatihan korporat profesional, seminar, dan manajemen acara jejaring menjadi lebih mudah." },
  ];

  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Dibangun untuk Semua Orang</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dari klub mahasiswa lokal hingga pertemuan institusi skala besar, 
            SmartEvent Planner beradaptasi dengan alur kerja unik Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="mx-auto w-24 h-24 bg-white border border-brand-100 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-xl shadow-brand-100">
                <div className="group-hover:text-white transition-colors">
                  {target.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{target.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{target.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-brand-100 text-center">
           <img 
             src="https://picsum.photos/seed/team/1200/400" 
             alt="Collaborative team" 
             className="rounded-[40px] w-full max-w-4xl mx-auto shadow-2xl opacity-60 grayscale"
             referrerPolicy="no-referrer"
           />
        </div>
      </div>
    </section>
  );
}
