import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, Layout, Scan, BarChart3, ShieldCheck } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    { icon: <Layout />, title: "Proses Manual Membingungkan", desc: "Koordinasi panitia yang masih menggunakan spreadsheet membuat data berantakan." },
    { icon: <Scan />, title: "Antrean Check-in Panjang", desc: "Proses verifikasi kehadiran konvensional memicu penumpukan peserta di lokasi." },
    { icon: <BarChart3 />, title: "Sulit Melacak Progress", desc: "Penyelenggara kesulitan melihat perkembangan pendaftaran secara waktu nyata." },
    { icon: <AlertCircle />, title: "Data Peserta Tidak Terpusat", desc: "Informasi peserta seringkali tersebar dan sulit untuk dikelola secara efisien." },
  ];

  const solutions = [
    { title: "Manajemen Terpusat", desc: "Kelola semua data peserta dan panitia dalam satu dashboard intuitif." },
    { title: "Sistem QR Code Instan", desc: "Verifikasi kehadiran peserta dalam hitungan detik dengan pemindaian barcode." },
    { icon: <ShieldCheck />, title: "Laporan Real-time", desc: "Pantau grafik statistik pendaftaran dan kehadiran secara instan kapan saja." },
    { title: "Keamanan Data Terjamin", desc: "Data organisasi dan peserta Anda aman bersama infrastruktur cloud terpercaya." },
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Transformasi Cara Anda <span className="text-brand-600">Mengelola Acara</span>
          </h2>
          <p className="text-slate-600 font-medium">Hapus hambatan operasional dan berikan pengalaman terbaik bagi peserta Anda.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Problems - Left Side */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center italic text-sm">!</span> 
              Masalah Umum
            </h3>
            {problems.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
              >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                      {p.icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-2">{p.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>

          {/* Central Visual */}
          <div className="hidden lg:flex flex-col justify-center px-4">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-brand-200 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-xl shadow-brand-200 z-10">
                <ArrowRight size={24} />
              </div>
            </div>
          </div>

          {/* Solutions - Right Side */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center text-sm">✓</span> 
              Solusi SmartEvent
            </h3>
            {solutions.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-brand-600 text-white shadow-xl shadow-brand-100"
              >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-brand-100">
                      {s.icon || <CheckCircle2 />}
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-2">{s.title}</h4>
                        <p className="text-brand-50 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
