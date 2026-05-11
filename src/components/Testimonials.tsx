import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Ketua BEM UI",
      content: "SmartEvent Planner mengubah cara kami mengelola seminar nasional. Tidak ada lagi antrean panjang di meja registrasi berkat sistem scan QR-nya.",
      avatar: "https://i.pravatar.cc/150?u=budi"
    },
    {
      name: "Siti Aminah",
      role: "Koordinator Event ITB",
      content: "Sangat mudah digunakan! Tim kami bisa memantau jumlah pendaftar secara real-time dan langsung mengirim sertifikat digital setelah acara selesai.",
      avatar: "https://i.pravatar.cc/150?u=siti"
    },
    {
      name: "Andi Wijaya",
      role: "Founder Komunitas Tech",
      content: "Estetika platformnya sangat modern dan profesional. Peserta kami merasa sangat terkesan dengan kemudahan proses registrasinya.",
      avatar: "https://i.pravatar.cc/150?u=andi"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="glow-purple -top-24 -left-24 w-96 h-96 opacity-10" />
      <div className="glow-pink -bottom-24 -right-24 w-96 h-96 opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h4 className="text-accent-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">Testimoni</h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Apa Kata <span className="text-accent-500">Klien</span> Kami
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dengarkan pengalaman langsung dari para pemimpin organisasi dan komunitas yang telah bertransformasi digital bersama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card p-10 flex flex-col items-center text-center group"
            >
              <div className="mb-8 relative">
                 <div className="absolute -top-4 -left-4 text-brand-100 group-hover:text-brand-300 transition-colors">
                    <Quote size={40} />
                 </div>
                 <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-20 h-20 rounded-full border-4 border-brand-50 shadow-lg relative z-10"
                />
              </div>
              <p className="text-slate-600 mb-8 italic leading-relaxed">"{t.content}"</p>
              <div>
                 <h4 className="font-bold text-slate-900">{t.name}</h4>
                 <p className="text-xs text-brand-600 font-medium uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
