import { motion } from "motion/react";
import { 
  Users, 
  BarChart3, 
  Search, 
  Plus,
  ArrowUpRight,
  TrendingUp,
  LayoutDashboard,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from "lucide-react";

export default function DashboardDemo() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold mb-6"
            >
              <LayoutDashboard size={18} /> Dashboard Intuitif
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Kontrol Penuh di <br />
              <span className="text-brand-600">Ujung Jari Anda</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-xl font-medium leading-relaxed">
              Monitor statistik pendaftaran, validasi tiket peserta, dan kelola tim kepanitiaan dalam satu pusat komando yang mudah digunakan.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
               {[
                 { title: "Statistik Real-time", desc: "Pantau grafik pendaftaran", icon: <TrendingUp size={20} /> },
                 { title: "Manajemen Peserta", desc: "Validasi data instan", icon: <Users size={20} /> },
                 { title: "Keamanan Data", desc: "Enkripsi tingkat tinggi", icon: <ShieldCheck size={20} /> },
                 { title: "Sistem Ticketing", desc: "QR Code otomatis", icon: <CheckCircle2 size={20} /> }
               ].map((item, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 + (i * 0.1) }}
                   className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-brand-200 hover:bg-brand-50 transition-all"
                 >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-600 shadow-sm transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div className="text-left">
                       <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                       <div className="text-xs text-slate-500 font-medium">{item.desc}</div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full lg:min-w-[600px]"
          >
            {/* Dashboard Mockup UI */}
            <div className="relative z-10 bg-white rounded-[32px] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-6 md:p-8 overflow-hidden">
               {/* Header Mockup */}
               <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-50">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                        <TrendingUp size={16} />
                     </div>
                     <span className="font-bold text-slate-900 text-sm">Event Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg text-xs font-semibold text-slate-500">
                        <Search size={14} /> Cari Peserta...
                     </div>
                     <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                  </div>
               </div>

               {/* Stats Grid */}
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Total Peserta", val: "842", change: "+12%" },
                    { label: "Tiket Terjual", val: "620", change: "+8%" },
                    { label: "Pemasukan", val: "Rp 12.4M", change: "Stabil" }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</div>
                       <div className="text-xl font-bold text-slate-900 mb-1">{stat.val}</div>
                       <div className="text-[10px] font-bold text-green-600 flex items-center gap-0.5">
                          <ArrowUpRight size={10} /> {stat.change}
                       </div>
                    </div>
                  ))}
               </div>

               {/* Table/List Mockup */}
               <div className="rounded-xl border border-slate-50 overflow-hidden mb-6">
                  <div className="bg-slate-50/50 px-4 py-3 flex justify-between items-center border-b border-slate-50">
                     <span className="text-xs font-bold text-slate-900">Pendaftar Terbaru</span>
                     <span className="text-[10px] font-bold text-brand-600 cursor-pointer">Lihat Semua</span>
                  </div>
                  <div className="divide-y divide-slate-50">
                     {[
                       { name: "Rafli Pratama", type: "Tiket Reguler", status: "Sudah Bayar", time: "2m lalu" },
                       { name: "Sarah Az-Zahra", type: "Tiket VIP", status: "Tertunda", time: "5m lalu" },
                       { name: "Dimas Saputra", type: "Tiket Gratis", status: "Sudah Bayar", time: "10m lalu" }
                     ].map((user, i) => (
                       <div key={i} className="px-4 py-3 flex items-center justify-between hover:bg-slate-50/30 transition-colors">
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">
                                {user.name.charAt(0)}
                             </div>
                             <div>
                                <div className="text-xs font-bold text-slate-900">{user.name}</div>
                                <div className="text-[10px] text-slate-500 font-medium">{user.type}</div>
                             </div>
                          </div>
                          <div className="text-right">
                             <div className={`text-[10px] font-bold ${user.status === 'Sudah Bayar' ? 'text-green-600' : 'text-orange-500'}`}>
                                {user.status}
                             </div>
                             <div className="text-[10px] text-slate-400 font-medium">{user.time}</div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Chart Mockup */}
               <div className="h-24 flex items-end gap-1.5 px-1">
                  {[20, 60, 40, 90, 50, 80, 70, 85, 50, 30, 60, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + (i * 0.05), duration: 0.8 }}
                      className="flex-1 rounded-t-sm bg-brand-200 group-hover:bg-brand-500 transition-colors"
                    />
                  ))}
               </div>
            </div>

            {/* Decoration */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-12 p-4 bg-white rounded-2xl border border-slate-100 shadow-xl z-20 hidden md:block"
            >
               <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white mb-3">
                  <Calendar size={20} />
               </div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Status</div>
               <div className="text-lg font-bold text-slate-900">Aktif</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
