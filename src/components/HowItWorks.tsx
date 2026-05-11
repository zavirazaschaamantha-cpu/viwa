import { motion } from "motion/react";
import { UserPlus, CalendarCheck, QrCode, Sparkles, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Desain Pengalaman",
      desc: "Rancang pendaftaran Anda dalam hitungan menit dengan antarmuka yang elegan dan field data yang fleksibel.",
      icon: <UserPlus className="text-white" size={24} />,
      gradient: "from-brand-600 to-brand-400"
    },
    {
      step: "02",
      title: "Promosi Organik",
      desc: "Luncurkan halaman event eksklusif Anda. Kami menangani seluruh aliran transaksi dan konfirmasi otomatis.",
      icon: <CalendarCheck className="text-white" size={24} />,
      gradient: "from-pink-custom to-brand-500"
    },
    {
      step: "03",
      title: "Akses Tanpa Hambatan",
      desc: "Selamat datang peserta Anda dengan check-in QR instan yang memberikan keamanan dan keanggunan seketika.",
      icon: <QrCode className="text-white" size={24} />,
      gradient: "from-accent-500 to-pink-custom"
    },
    {
      step: "04",
      title: "Wawasan Strategis",
      desc: "Pantau kesuksesan event melalui dashboard analitik premium dan kirimkan apresiasi digital secara massal.",
      icon: <Sparkles className="text-white" size={24} />,
      gradient: "from-accent-600 to-accent-400"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-black text-brand-600 uppercase tracking-[0.4em] mb-4"
          >
            Alur Kerja Eksklusif
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-8"
          >
            Empat Langkah Menuju <br />
            <span className="text-gradient">Kesempurnaan Event</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-premium rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group"
            >
              {/* Connector line for large screens */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[60px] left-[calc(50%+40px)] w-full h-[2px] bg-slate-100 z-0" />
              )}
              
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
                <div className="relative mb-10">
                   <div className="text-9xl font-display font-black text-slate-50 absolute -top-12 -left-12 -z-10 select-none group-hover:text-brand-50 transition-colors">
                     {item.step}
                   </div>
                   <div className={`w-28 h-28 rounded-[36px] bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl shadow-brand-500/20 group-hover:scale-110 transition-transform duration-500`}>
                     {item.icon}
                   </div>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6">
                  {item.desc}
                </p>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-[10px] font-black text-brand-600 uppercase tracking-widest cursor-pointer"
                >
                  Pelajari Lebih Lanjut <ArrowRight size={14} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
