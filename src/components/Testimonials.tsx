import { motion } from "motion/react";
import { Quote, Star, Sparkles } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Ketua BEM Universitas Indonesia",
      content: "SmartEvent bukan sekadar alat, tapi standar baru kemewahan manajemen event kampus. Efisiensi yang ditawarkan benar-benar tak tertandingi.",
      avatar: "https://i.pravatar.cc/150?u=budi"
    },
    {
      name: "Siti Aminah",
      role: "Koordinator Event Nasional ITB",
      content: "Visual yang memukau dan kemudahan navigasi membuat platform ini dicintai oleh seluruh tim kami. Digitalisasi yang sangat estetik.",
      avatar: "https://i.pravatar.cc/150?u=siti"
    },
    {
      name: "Andi Wijaya",
      role: "Founder Tech-Indonesia Hub",
      content: "Transisi ke SmartEvent adalah investasi terbaik kami tahun ini. Data analitiknya sangat membantu strategi pertumbuhan komunitas kami.",
      avatar: "https://i.pravatar.cc/150?u=andi"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] -left-[5%] w-[400px] h-[400px] bg-brand-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] -right-[5%] w-[400px] h-[400px] bg-pink-custom/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8"
          >
            <Star size={14} className="text-accent-500 fill-accent-500" /> Suara Para Pemimpin
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black text-white mb-8 tracking-tighter"
          >
            Pengalaman <span className="text-gradient">Eksklusif</span> <br />
            Yang Teruji & Terbukti
          </motion.h2>
          <div className="flex items-center gap-2">
             {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-accent-500 fill-accent-500" />)}
             <span className="text-xs font-bold text-slate-400 ml-2 uppercase tracking-widest">4.98/5 RATING GLOBAL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -10 }}
              className="relative p-1 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-[48px] overflow-hidden group"
            >
              <div className="p-12 h-full bg-slate-900 rounded-[46px] flex flex-col items-center text-center">
                <div className="mb-10 relative">
                   <div className="absolute -top-6 -left-10 text-white/5 scale-[2.5] group-hover:text-brand-500/20 transition-colors">
                      <Quote size={40} />
                   </div>
                   <div className="relative z-10 w-28 h-28 rounded-full p-1 bg-gradient-to-r from-brand-600 via-pink-custom to-accent-600 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-full h-full rounded-full border-4 border-slate-900 object-cover"
                    />
                   </div>
                   <div className="absolute -bottom-2 -right-2 bg-accent-600 p-2 rounded-full text-white shadow-xl">
                      <Sparkles size={16} />
                   </div>
                </div>

                <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium italic group-hover:text-white transition-colors">
                  "{t.content}"
                </p>

                <div className="mt-auto">
                   <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{t.name}</h4>
                   <p className="text-xs text-brand-400 font-extrabold uppercase tracking-[0.2em]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
