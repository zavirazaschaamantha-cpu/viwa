import { motion } from "motion/react";
import { UserPlus, CalendarCheck, QrCode, BarChart } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Buat Event & Formulir",
      desc: "Buat event Anda dalam hitungan menit. Sesuaikan formulir pendaftaran sesuai kebutuhan data komunitas Anda.",
      icon: <UserPlus className="text-brand-600" size={24} />,
      color: "bg-brand-50"
    },
    {
      step: "02",
      title: "Promosikan & Registrasi",
      desc: "Bagikan link pendaftaran ke peserta. Kami menangani pendaftaran, pembayaran, dan konfirmasi otomatis.",
      icon: <CalendarCheck className="text-accent-500" size={24} />,
      color: "bg-accent-50"
    },
    {
      step: "03",
      title: "Check-in QR Praktis",
      desc: "Gunakan aplikasi pemindai kami untuk memvalidasi tiket QR peserta di lokasi acara secara instan.",
      icon: <QrCode className="text-brand-600" size={24} />,
      color: "bg-brand-50"
    },
    {
      step: "04",
      title: "Analitik & Sertifikat",
      desc: "Lihat laporan kehadiran real-time dan kirim sertifikat digital ke semua peserta dengan satu klik.",
      icon: <BarChart className="text-accent-500" size={24} />,
      color: "bg-accent-50"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h4 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Langkah Sederhana</h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Bagaimana <span className="text-brand-600">SmartEvent</span> Bekerja
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dari perencanaan hingga laporan akhir, kami menyederhanakan setiap langkah manajemen event Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-brand-100 -translate-y-12 z-0" />
          
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10"
            >
              <div className="text-6xl font-display font-black text-slate-100 absolute -top-10 left-0 z-0">
                {item.step}
              </div>
              <div className="bg-white p-8 rounded-[32px] border border-brand-50 shadow-sm relative z-10 group hover:shadow-xl transition-shadow">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
