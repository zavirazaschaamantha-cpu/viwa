import { motion } from "motion/react";
import { UserPlus, CalendarCheck, QrCode, BarChart3, ArrowRight, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Daftar Organisasi",
      desc: "Buat profil organisasi atau panitia acara Anda dalam hitungan menit secara gratis.",
      icon: <UserPlus className="text-white" size={24} />,
      color: "bg-brand-600 shadow-brand-200"
    },
    {
      step: "02",
      title: "Buat Acara",
      desc: "Rancang detail acara, tentukan kuota peserta, dan sesuaikan formulir pendaftaran.",
      icon: <CalendarCheck className="text-white" size={24} />,
      color: "bg-brand-600 shadow-brand-200"
    },
    {
      step: "03",
      title: "Sebarkan Link",
      desc: "Bagikan link pendaftaran unik kepada calon peserta melalui media sosial atau grup.",
      icon: <QrCode className="text-white" size={24} />,
      color: "bg-brand-600 shadow-brand-200"
    },
    {
      step: "04",
      title: "Kelola Analitik",
      desc: "Lihat statistik pendaftaran secara real-time dan kelola kehadiran peserta.",
      icon: <BarChart3 className="text-white" size={24} />,
      color: "bg-brand-600 shadow-brand-200"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold mb-6"
          >
            <Sparkles size={16} />
            Langkah Sederhana
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Bagaimana <span className="text-brand-600">SmartEvent Bekerja</span>
          </h2>
          <p className="text-slate-600 leading-relaxed font-medium">Sistem manajemen yang dirancang khusus untuk kemudahan koordinasi panitia acara kampus dan organisasi mahasiswa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative mb-8">
                   <div className="text-[120px] font-display font-black text-slate-50 absolute -top-16 -left-8 -z-10 select-none">
                     {item.step}
                   </div>
                   <div className={`w-20 h-20 rounded-2xl ${item.color} flex items-center justify-center shadow-2xl transition-transform hover:scale-110 duration-500`}>
                     {item.icon}
                   </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-6">
                  {item.desc}
                </p>
                
                <button className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors uppercase tracking-wider">
                  Pelajari Lebih Lanjut <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
