import { motion } from "motion/react";
import { 
  Users, 
  Ticket, 
  BarChart3, 
  Calendar as CalendarIcon, 
  Bell, 
  Search, 
  Plus,
  ArrowUpRight,
  TrendingUp,
  LayoutDashboard
} from "lucide-react";

export default function DashboardDemo() {
  return (
    <section className="py-24 bg-brand-50/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-2 text-brand-600 font-bold mb-4 uppercase tracking-widest text-xs justify-center lg:justify-start">
              <LayoutDashboard size={16} /> Dasbor Event All-in-One
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Kelola Event dengan <span className="text-brand-600">Presisi Digital</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              Antarmuka modern yang dirancang untuk kecepatan. Pantau penjualan tiket, 
              kehadiran peserta, dan analitik performa dalam satu tampilan intuitif.
            </p>
            
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
               {[
                 { title: "Penjualan Tiket Real-time", icon: <TrendingUp size={18} /> },
                 { title: "Manajemen Peserta Cerdas", icon: <Users size={18} /> },
                 { title: "Sistem Scan Terintegrasi", icon: <Ticket size={18} /> }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-brand-100 shadow-sm">
                   <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                     {item.icon}
                   </div>
                   <span className="font-bold text-slate-900">{item.title}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 bg-white rounded-[32px] border border-brand-100 shadow-2xl p-6 overflow-hidden max-w-2xl"
            >
              {/* Fake Sidebar Nav */}
              <div className="flex gap-4 mb-8">
                <div className="flex-1 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                  {['Ringkasan', 'Peserta', 'Tiket', 'Analitika'].map((tab, i) => (
                    <span key={i} className={`text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap ${i === 0 ? 'bg-brand-600 text-white' : 'bg-slate-50 text-slate-500'}`}>
                      {tab}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <Search size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                    <Plus size={14} />
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Total Peserta", val: "1,248", change: "+12%", color: "text-brand-600" },
                  { label: "Tiket Terjual", val: "842", change: "+8%", color: "text-accent-500" },
                  { label: "Kehadiran", val: "94%", change: "+2%", color: "text-emerald-500" }
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-brand-50/30 border border-brand-50">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter mb-1">{stat.label}</div>
                    <div className={`text-xl font-bold ${stat.color}`}>{stat.val}</div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 mt-1">
                      <ArrowUpRight size={10} /> {stat.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                   <h4 className="text-sm font-bold text-slate-900">Pertumbuhan Pendaftaran</h4>
                   <div className="text-[10px] font-bold text-slate-400">7 hari terakhir</div>
                </div>
                <div className="h-40 w-full bg-gradient-to-b from-brand-50/50 to-transparent rounded-2xl border border-dashed border-brand-200 flex items-end justify-between px-6 pb-2">
                   {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                     <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        className="w-4 bg-brand-500 rounded-t-sm"
                     />
                   ))}
                </div>
              </div>

              {/* List Placeholder */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-4">Aktivitas Terkini</h4>
                <div className="space-y-3">
                  {[
                    { name: "Andi Saputra", action: "mendaftar Seminar AI", time: "2m yang lalu" },
                    { name: "Siti Aminah", action: "membeli Tiket VIP", time: "5m yang lalu" }
                  ].map((act, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-200 text-[10px] font-bold flex items-center justify-center text-brand-700">
                          {act.name.charAt(0)}
                        </div>
                        <div className="text-xs">
                           <span className="font-bold text-slate-900">{act.name}</span> <span className="text-slate-500">{act.action}</span>
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">{act.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-200 rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-400 rounded-full blur-3xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
