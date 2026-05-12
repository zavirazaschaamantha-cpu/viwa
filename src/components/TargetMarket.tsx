import { motion } from 'motion/react';
import { GraduationCap, Users, Building2, Sparkles } from 'lucide-react';

export default function TargetMarket() {
  const targets = [
    { icon: <GraduationCap size={40} />, title: "Organisasi Mahasiswa", desc: "Sempurna untuk BEM, Himpunan, atau Unit Kegiatan Mahasiswa yang mengelola banyak acara rutin kampus." },
    { icon: <Users size={40} />, title: "Komunitas Kreatif", desc: "Mudahkan koordinasi gathering, workshop, atau pameran seni bagi komunitas hobi dan profesional." },
    { icon: <Building2 size={40} />, title: "Panitia Seminar", desc: "Solusi profesional untuk seminar nasional, konferensi ilmiah, hingga webinar dengan ribuan peserta." },
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold mb-6"
          >
            <Sparkles size={16} /> Fleksibilitas Tinggi
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Dirancang Untuk <span className="text-brand-600">Berbagai Skala Acara</span>
          </h2>
          <p className="text-slate-600 leading-relaxed font-medium">SmartEvent membantu siapa saja yang ingin menyelenggarakan acara dengan lebih terorganisir dan efisien.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="mx-auto w-20 h-20 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-8">
                {target.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{target.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">{target.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
            alt="Collaborative Team" 
            className="w-full max-w-5xl mx-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
