import { motion } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, ArrowRight } from 'lucide-react';

export default function EventsPreview() {
  const events = [
    { title: "Seminar Nasional: Masa Depan Teknologi", date: "24 OKT 2026", loc: "Gedung Serbaguna Kampus", type: "Seminar", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" },
    { title: "Workshop Desain UI/UX Tingkat Lanjut", date: "05 NOV 2026", loc: "Laboratorium Komputer V", type: "Workshop", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" },
    { title: "Bootcamp Kepemimpinan Organisasi", date: "12 DES 2026", loc: "Aula Utama Universitas", type: "Training", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Inspirasi Acara <span className="text-brand-600">Terbaru Kami</span>
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              Jelajahi berbagai acara menarik yang sedang berlangsung dan yang akan datang. Daftarkan diri Anda sekarang.
            </p>
          </div>
          <button className="px-8 py-3 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:bg-brand-50 hover:text-brand-600 transition-all shadow-sm">
            Lihat Semua Acara
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-brand-100 transition-all duration-500 border border-slate-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={event.img} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-600 text-white px-4 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                   {event.type}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-brand-600 transition-colors">{event.title}</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-slate-500 text-sm font-semibold">
                    <CalendarIcon size={16} className="text-brand-600" /> {event.date}
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-sm font-semibold">
                    <MapPin size={16} className="text-brand-600" /> {event.loc}
                  </div>
                </div>
                <button className="w-full py-4 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-brand-600 transition-all flex items-center justify-center gap-2">
                  Daftar Sekarang <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
