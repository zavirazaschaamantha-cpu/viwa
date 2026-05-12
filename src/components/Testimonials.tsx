import { motion } from "motion/react";
import { Quote, Star, Sparkles } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Ketua BEM @ Universitas Indonesia",
      content: "SmartEvent Planner sangat membantu koordinasi acara kampus kami. Fitur manajemen pesertanya luar biasa dan sangat intuitif.",
      avatar: "https://i.pravatar.cc/150?u=budi"
    },
    {
      name: "Siti Aminah",
      role: "Sekretaris @ Organisasi Mahasiswa",
      content: "Sangat mudah digunakan! Sistem ticketing QR code-nya menghemat banyak waktu saat check-in peserta di lokasi acara.",
      avatar: "https://i.pravatar.cc/150?u=siti"
    },
    {
      name: "Andi Wijaya",
      role: "Koordinator Event @ Startup Hub",
      content: "Dashboard analitiknya memberikan wawasan yang sangat berguna untuk evaluasi acara kami ke depannya. Rekomendasi utama untuk panitia event!",
      avatar: "https://i.pravatar.cc/150?u=andi"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-6"
          >
            <Sparkles size={16} />
            Testimoni Pengguna
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Dipercaya oleh <span className="text-brand-600">Ribuan Penyelenggara</span>
          </h2>
          <div className="flex items-center gap-4">
             <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />)}
             </div>
             <span className="text-slate-600 font-semibold italic">Rating 4.9/5 dari pengguna kami</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-10 bg-slate-50 rounded-3xl border border-slate-100 relative group"
            >
                <div className="absolute top-10 right-10 text-brand-100">
                  <Quote size={48} />
                </div>
                
                <div className="relative z-10">
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium italic">
                    "{t.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-8 border-t border-slate-200">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md shadow-slate-200"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{t.name}</h4>
                      <p className="text-sm text-slate-500 font-semibold">{t.role}</p>
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
