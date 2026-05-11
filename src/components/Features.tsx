import { motion } from 'motion/react';
import { UserCheck, Ticket, Search, BarChart, Smartphone, Globe } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Globe className="text-brand-600" />, title: "Sistem Pendaftaran", desc: "Formulir online yang sepenuhnya dapat disesuaikan untuk menangani pembayaran dan pendaftaran grup dengan lancar." },
    { icon: <UserCheck className="text-brand-600" />, title: "Manajemen Peserta", desc: "Filter, urutkan, dan kelola basis data peserta Anda dari dasbor pusat." },
    { icon: <Ticket className="text-brand-600" />, title: "Tiket Digital", desc: "Tiket PDF otomatis dengan kode QR aman yang dikirim segera setelah pendaftaran." },
    { icon: <Search className="text-brand-600" />, title: "Pemindai Kehadiran", desc: "Ubah ponsel cerdas apa pun menjadi perangkat check-in profesional dengan aplikasi pemindai seluler kami." },
    { icon: <BarChart className="text-brand-600" />, title: "Dasbor & Laporan", desc: "Analitik mendalam tentang tingkat kehadiran, kinerja pemasaran, dan demografi." },
    { icon: <Smartphone className="text-brand-600" />, title: "Ramah Seluler", desc: "Pengalaman responsif bagi penyelenggara acara dan peserta di perangkat apa pun." },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Fitur Unggulan</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk menjalankan acara kampus yang sukses tanpa stres. 
            Otomatiskan hal-hal yang membosankan sehingga Anda dapat fokus pada pengalaman.
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
              className="p-8 glass-card rounded-3xl hover:border-brand-500 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Dashboard Preview Section */}
        <div className="mt-32">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative rounded-[40px] overflow-hidden border border-brand-100 shadow-2xl glass-card p-1"
           >
              <div className="p-4 border-b border-brand-50 flex items-center justify-between">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                 </div>
                 <div className="text-[10px] text-slate-400 font-mono">dashboard.smartevent.io/analytics</div>
                 <div className="w-12 h-4" />
              </div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/dashboard/1200/800" 
                  alt="Dashboard Mockup Preview" 
                  className="w-full opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              </div>
              
              <div className="absolute bottom-10 left-10 text-slate-900">
                 <div className="text-3xl font-display font-bold">Analitika Real-time</div>
                 <p className="text-slate-600">Lihat siapa yang datang, siapa yang sudah check-in, dan bagaimana acara Anda berkembang.</p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
