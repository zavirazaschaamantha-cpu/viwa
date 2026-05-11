import { motion } from 'motion/react';
import { UserCheck, Ticket, Search, BarChart, Smartphone, Globe } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Globe size={24} />, title: "Sistem Pendaftaran", desc: "Formulir online yang sepenuhnya dapat disesuaikan untuk menangani pembayaran dan pendaftaran grup dengan lancar." },
    { icon: <UserCheck size={24} />, title: "Manajemen Peserta", desc: "Filter, urutkan, dan kelola basis data peserta Anda dari dasbor pusat." },
    { icon: <Ticket size={24} />, title: "Tiket Digital", desc: "Tiket PDF otomatis dengan kode QR aman yang dikirim segera setelah pendaftaran." },
    { icon: <Search size={24} />, title: "Pemindai Kehadiran", desc: "Ubah ponsel cerdas apa pun menjadi perangkat check-in profesional dengan aplikasi pemindai seluler kami." },
    { icon: <BarChart size={24} />, title: "Dasbor & Laporan", desc: "Analitik mendalam tentang tingkat kehadiran, kinerja pemasaran, dan demografi." },
    { icon: <Smartphone size={24} />, title: "Digitalisasi Total", desc: "Pengalaman responsif bagi penyelenggara acara dan peserta di perangkat apa pun." },
  ];

  return (
    <section id="features" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h4 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Fitur Premium</h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Segalanya untuk <span className="text-brand-600">Kesuksesan</span> Acara Anda
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Otomatisasi cerdas yang membebaskan waktu Anda untuk fokus menciptakan pengalaman yang tak terlupakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 premium-card hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-8 group-hover:bg-brand-600 transition-all duration-500 shadow-sm group-hover:shadow-brand-200">
                <div className="text-brand-600 group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
