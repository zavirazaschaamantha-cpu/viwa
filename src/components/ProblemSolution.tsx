import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, FileText, Clock, BarChart3, Layers } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    { icon: <FileText className="text-red-500" />, title: "Kesalahan Data Manual", desc: "Kesalahan pada daftar peserta dan sertifikat akibat entri data manual." },
    { icon: <Clock className="text-red-500" />, title: "Kehadiran Lambat", desc: "Antrean panjang dan hambatan saat check-in acara di lokasi." },
    { icon: <Layers className="text-red-500" />, title: "Data Tidak Real-time", desc: "Koordinator kurang mendapatkan wawasan instan tentang jumlah pendaftaran." },
    { icon: <BarChart3 className="text-red-500" />, title: "Pelaporan Berantakan", desc: "Jam-jam yang dihabiskan untuk menyusun laporan dari spreadsheet yang tersebar." },
  ];

  const solutions = [
    { title: "Pendaftaran Online", desc: "Formulir kustom bermerek yang menangkap data secara akurat sejak awal." },
    { title: "Tiket QR", desc: "Tiket digital instan dikirim ke peserta untuk pemindaian masuk secepat kilat." },
    { title: "Dasbor Real-time", desc: "Pantau pendaftaran dan kehadiran saat itu juga." },
    { title: "Pelaporan Mudah", desc: "Unduh laporan acara profesional dengan satu klik." },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Problem Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 text-red-500 font-bold mb-4 uppercase tracking-widest text-xs">
              <AlertCircle size={18} /> Hambatan
            </div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Proses manual <span className="text-red-500">menghambat</span> pertumbuhan Anda.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((p, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-red-50 border border-red-100">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-sm">{p.title}</h4>
                    <p className="text-[11px] text-slate-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 order-1 lg:order-2"
          >
            <div className="relative rounded-[40px] overflow-hidden bg-brand-50 p-2 border border-brand-100">
              <div className="rounded-[32px] overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/paperwork/800/600" 
                  alt="Messy paperwork illustration" 
                  className="w-full opacity-60 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-red-500 text-white p-3 rounded-full shadow-2xl">
                    <AlertCircle size={40} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Solution Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative rounded-[40px] overflow-hidden glass-card p-2">
              <div className="rounded-[32px] overflow-hidden relative bg-brand-600">
                <img 
                  src="https://picsum.photos/seed/qr-code/800/600" 
                  alt="QR Scanning digital solution" 
                  className="w-full opacity-40 mix-blend-overlay"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                   <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-4 border border-brand-100">
                      <div className="w-24 h-24 bg-brand-500/10 rounded-2xl border-2 border-brand-500 flex items-center justify-center">
                         <BarChart3 className="text-brand-600 w-12 h-12" />
                      </div>
                      <span className="font-bold text-brand-950 tracking-widest text-sm uppercase">Alur Kerja Optimal</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-2 text-brand-600 font-bold mb-4 uppercase tracking-widest text-xs">
              <CheckCircle2 size={18} /> Efisiensi Digital
            </div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 leading-tight">
               Dibangun untuk institusi <span className="text-brand-600">masa depan</span>.
            </h2>
            <div className="space-y-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-brand-50 border border-brand-100 hover:bg-white hover:shadow-xl hover:shadow-brand-100 transition-all">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{s.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
