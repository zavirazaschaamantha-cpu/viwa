import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BarChart3, 
  Users, 
  Ticket, 
  Calendar, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  Plus,
  LayoutDashboard,
  MoreVertical,
  ChevronRight,
  TrendingUp,
  CreditCard,
  Sparkles,
  Zap,
  Star,
  ArrowUpRight,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Ringkasan");
  
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Ringkasan" },
    { icon: <Calendar size={20} />, label: "Event Saya" },
    { icon: <Users size={20} />, label: "Peserta" },
    { icon: <Ticket size={20} />, label: "Tiket & QR" },
    { icon: <BarChart3 size={20} />, label: "Analitika" },
    { icon: <CreditCard size={20} />, label: "Pembayaran" },
  ];

  const recentEvents = [
    { name: "Sains & Teknologi 2026", date: "24 Okt 2026", status: "Aktif", participants: 452, growth: "+12%" },
    { name: "Lokakarya UI/UX Design", date: "05 Nov 2026", status: "Draft", participants: 0, growth: "0%" },
    { name: "Seminar Karir Masa Depan", date: "12 Des 2026", status: "Selesai", participants: 1200, growth: "+45%" },
  ];

  return (
    <div className="min-h-screen bg-white flex selection:bg-brand-500 selection:text-white">
      {/* Premium Sidebar */}
      <aside className="w-80 bg-slate-950 flex flex-col hidden lg:flex sticky top-0 h-screen overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 blur-[100px] pointer-events-none" />
        
        <div className="p-8 relative z-10">
          <Link to="/" className="flex items-center gap-3 mb-12 group">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="bg-gradient-premium p-2 rounded-xl shadow-lg shadow-brand-500/20 border border-white/10"
            >
              <Calendar className="text-white w-7 h-7" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-black text-white tracking-tight leading-none uppercase">
                SmartEvent<span className="text-pink-custom">.</span>
              </span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-1">Premium Hub</span>
            </div>
          </Link>

          <nav className="space-y-3">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ x: 5 }}
                onClick={() => setActiveTab(item.label)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-[20px] transition-all font-black text-[11px] uppercase tracking-[0.15em] ${
                  activeTab === item.label 
                  ? "bg-white text-slate-950 shadow-xl shadow-white/5" 
                  : "text-slate-500 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-4">
                   {item.icon}
                   {item.label}
                </div>
                {activeTab === item.label && <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shadow-[0_0_10px_var(--color-brand-500)]" />}
              </motion.button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-white/5 space-y-4 relative z-10">
           <div className="p-6 rounded-[24px] bg-gradient-to-br from-brand-900/50 to-slate-900 border border-white/5 mb-8 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-125 transition-transform">
                 <Zap className="text-accent-500" />
              </div>
              <h5 className="text-[10px] font-black uppercase tracking-widest text-brand-400 mb-2">Upgrade Elite</h5>
              <p className="text-[11px] text-slate-400 font-medium mb-4 leading-relaxed">Dapatkan fitur kustomisasi tanpa batas.</p>
              <button className="w-full py-3 bg-white text-slate-950 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-500 hover:text-white transition-all">
                 Level Up
              </button>
           </div>
           
           <button className="w-full flex items-center gap-4 px-6 py-4 rounded-[20px] text-slate-500 hover:text-white transition-all font-black text-[11px] uppercase tracking-widest">
             <Settings size={20} /> Pengaturan
           </button>
           <Link to="/" className="w-full flex items-center gap-4 px-6 py-4 rounded-[20px] text-pink-custom hover:text-red-400 transition-all font-black text-[11px] uppercase tracking-widest">
             <LogOut size={20} /> Keluar
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative">
        {/* Futuristic Header */}
        <header className="h-24 bg-white/70 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-10 sticky top-0 z-30">
          <div className="relative max-w-lg w-full hidden md:block group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Eksplorasi terminal premium..." 
              className="w-full bg-slate-50/50 border border-transparent rounded-[24px] pl-14 pr-6 py-4 focus:outline-none focus:border-brand-100 focus:bg-white transition-all text-sm font-black tracking-tight placeholder:text-slate-300 focus:shadow-xl focus:shadow-brand-500/5"
            />
          </div>

          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <button className="w-12 h-12 flex items-center justify-center text-slate-400 bg-white border border-slate-100 rounded-2xl hover:text-brand-600 hover:border-brand-200 transition-all relative group">
                   <Bell size={22} />
                   <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-pink-custom rounded-full border-2 border-white animate-pulse" />
                </button>
                <button className="w-12 h-12 flex items-center justify-center text-slate-400 bg-white border border-slate-100 rounded-2xl hover:text-accent-600 hover:border-accent-200 transition-all">
                   <Filter size={20} />
                </button>
             </div>
             
             <div className="h-10 w-px bg-slate-100 mx-2" />
             
             <div className="flex items-center gap-4 p-2 pr-6 bg-slate-50 border border-slate-50 rounded-[20px] cursor-pointer hover:bg-white hover:border-brand-100 hover:shadow-xl transition-all group">
                <div className="relative">
                   <img src="https://i.pravatar.cc/100?u=admin_prem" className="w-10 h-10 rounded-xl border-2 border-white shadow-sm" alt="Admin" />
                   <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                </div>
                <div className="text-left hidden sm:block">
                   <div className="text-xs font-black text-slate-900 leading-none mb-1 group-hover:text-brand-600">Budi Santoso</div>
                   <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Admin Elite</div>
                </div>
             </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-10 pb-20">
           {/* Dynamic Greeting */}
           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
              <div>
                 <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-[9px] font-black uppercase tracking-[0.3em] mb-4">
                    <Sparkles size={14} className="text-accent-500" /> Sesi Aktif: Elite v2.5
                 </div>
                 <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tighter mb-2 italic">
                   Selamat Datang, <span className="text-gradient">Budi</span>.
                 </h1>
                 <p className="text-slate-400 text-lg font-medium tracking-tight">Kesehatan performa event Anda <span className="text-emerald-500 font-black tracking-normal">Optimal (98%)</span> hari ini.</p>
              </div>
              <button className="group relative overflow-hidden flex items-center gap-3 px-10 py-5 bg-slate-950 text-white font-black rounded-[24px] shadow-2xl shadow-slate-200 transition-all hover:scale-105 active:scale-95 uppercase tracking-[0.2em] text-xs">
                 <span className="relative z-10 flex items-center gap-2">
                    Buat Mahakarya Baru <Plus size={20} />
                 </span>
                 <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-pink-custom opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
           </div>

           {/* Stats Section with New Cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { label: "Elite Members", val: "2,842", change: "+12.5%", icon: <Users size={24} />, color: "from-blue-500 to-blue-600" },
                { label: "Ticket Revenue", val: "Rp 12.4M", change: "+8.2%", icon: <CreditCard size={24} />, color: "from-brand-600 to-purple-600" },
                { label: "Conversion", val: "84.5%", change: "+15.0%", icon: <TrendingUp size={24} />, color: "from-emerald-500 to-teal-600" },
                { label: "Global Rating", val: "4.98", change: "Stabil", icon: <Star size={24} />, color: "from-accent-500 to-sunkist" },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-brand-500/5 transition-all group overflow-hidden relative"
                >
                   <div className="flex items-center justify-between mb-8">
                      <div className={`w-14 h-14 rounded-[22px] bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                         {stat.icon}
                      </div>
                      <div className="flex flex-col items-end">
                         <div className="text-[10px] font-black text-emerald-500 tracking-widest">{stat.change}</div>
                         <ArrowUpRight size={14} className="text-emerald-500" />
                      </div>
                   </div>
                   <div className="text-3xl font-black text-slate-900 mb-2 tracking-tighter">{stat.val}</div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
                   
                   {/* Abstract decoration icon */}
                   <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                      {stat.icon}
                   </div>
                </motion.div>
              ))}
           </div>

           <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
              {/* Event Table Section */}
              <div className="xl:col-span-2">
                 <div className="bg-white p-2 rounded-[48px] border border-slate-100 shadow-sm">
                    <div className="p-10 border-b border-slate-50 flex items-center justify-between">
                       <div>
                          <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1 uppercase">Event Berjalan</h3>
                          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Pusat Data Real-time</p>
                       </div>
                       <button className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:text-brand-600 transition-colors">
                          <MoreVertical size={20} />
                       </button>
                    </div>
                    <div className="overflow-x-auto">
                       <table className="w-full text-left">
                          <thead className="bg-slate-50/30 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
                             <tr>
                                <th className="px-10 py-6">Eksplorasi Nama</th>
                                <th className="px-10 py-6">Kesehatan</th>
                                <th className="px-10 py-6">Data</th>
                                <th className="px-10 py-6 text-right">Aksi</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50">
                             {recentEvents.map((event, i) => (
                               <tr key={i} className="hover:bg-slate-50/50 transition-all group">
                                  <td className="px-10 py-8">
                                     <div className="text-base font-black text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">{event.name}</div>
                                     <div className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">{event.date}</div>
                                  </td>
                                  <td className="px-10 py-8">
                                     <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${
                                          event.status === 'Aktif' ? 'bg-emerald-500 animate-pulse' : 
                                          event.status === 'Draft' ? 'bg-slate-300' : 'bg-brand-500'
                                        }`} />
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${
                                          event.status === 'Aktif' ? 'text-emerald-500' : 
                                          event.status === 'Draft' ? 'text-slate-400' : 'text-brand-600'
                                        }`}>
                                           {event.status}
                                        </span>
                                     </div>
                                  </td>
                                  <td className="px-10 py-8">
                                     <div className="text-sm font-black text-slate-900 leading-none mb-1">{event.participants}</div>
                                     <div className="text-[10px] font-bold text-emerald-500">{event.growth} Growth</div>
                                  </td>
                                  <td className="px-10 py-8 text-right">
                                     <button className="p-3 bg-white border border-slate-100 rounded-xl text-slate-300 hover:text-brand-600 hover:border-brand-200 transition-all">
                                        <ChevronRight size={18} />
                                     </button>
                                  </td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
              </div>

              {/* Sidebar Cards */}
              <div className="space-y-10">
                 {/* Premium Chart Placeholder Card */}
                 <div className="p-10 rounded-[48px] bg-slate-950 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                       <TrendingUp size={80} className="text-brand-500" />
                    </div>
                    <div className="relative z-10">
                       <h3 className="text-xl font-black mb-8 uppercase tracking-tight italic">Performance Curve</h3>
                       <div className="flex items-end h-32 gap-3 mb-10">
                          {[30, 45, 25, 60, 40, 80, 55, 95].map((h, i) => (
                            <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className={`flex-1 rounded-t-lg bg-gradient-to-t ${i === 5 ? 'from-accent-600 to-accent-400' : 'from-brand-600 to-brand-400'}`}
                            />
                          ))}
                       </div>
                       <div className="flex justify-between items-center bg-white/5 rounded-2xl p-4 border border-white/5">
                          <div>
                             <div className="text-[9px] font-black text-brand-400 uppercase tracking-widest">Total Sales</div>
                             <div className="text-xl font-black">Rp 128.4M</div>
                          </div>
                          <button className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center hover:bg-brand-500 transition-colors shadow-lg shadow-brand-600/20">
                             <ArrowUpRight size={20} />
                          </button>
                       </div>
                    </div>
                 </div>

                 {/* Activity Feed Premium */}
                 <div className="p-10 rounded-[48px] bg-white border border-slate-100 shadow-sm overflow-hidden group">
                    <div className="flex items-center justify-between mb-10">
                       <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase leading-none">Aktivitas Real-time</h3>
                       <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    </div>
                    <div className="space-y-8">
                       {[
                         { user: "Siti Aminah", action: "Tiket VIP Terjual", time: "2 mnt", color: "bg-brand-100 text-brand-600" },
                         { user: "Andi Wijaya", action: "Pencairan Revenue", time: "15 mnt", color: "bg-emerald-100 text-emerald-600" },
                         { user: "Rina Sari", action: "Sertifikat Terkirim", time: "1 jam", color: "bg-pink-100 text-pink-custom" },
                       ].map((act, i) => (
                         <div key={i} className="flex gap-5 group/item">
                            <div className={`w-12 h-12 rounded-[18px] ${act.color} flex items-center justify-center font-black text-sm group-hover/item:scale-110 transition-transform`}>
                               {act.user.charAt(0)}
                            </div>
                            <div className="flex-1">
                               <div className="flex justify-between items-center mb-1">
                                  <div className="text-sm font-black text-slate-900">{act.user}</div>
                                  <div className="text-[9px] font-black text-slate-300 uppercase">{act.time}</div>
                               </div>
                               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{act.action}</div>
                            </div>
                         </div>
                       ))}
                    </div>
                    <button className="w-full mt-10 py-5 bg-slate-50 rounded-[20px] text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] hover:bg-brand-50 hover:text-brand-600 transition-all active:scale-95">
                       Eksplorasi Seluruh Log
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
