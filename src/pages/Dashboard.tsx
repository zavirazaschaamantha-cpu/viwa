import { useState } from "react";
import { motion } from "motion/react";
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
  CreditCard
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
    { name: "Sains & Teknologi 2026", date: "24 Okt 2026", status: "Aktif", participants: 452, progress: 75 },
    { name: "Lokakarya UI/UX Design", date: "05 Nov 2026", status: "Draft", participants: 0, progress: 0 },
    { name: "Seminar Karir Masa Depan", date: "12 Des 2026", status: "Selesai", participants: 1200, progress: 100 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col p-6 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="bg-brand-600 p-1.5 rounded-lg">
            <Calendar className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold text-slate-900 tracking-tight">SmartEvent</span>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm ${
                activeTab === item.label 
                ? "bg-brand-600 text-white shadow-lg shadow-brand-100" 
                : "text-slate-500 hover:bg-slate-50 hover:text-brand-600"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-slate-100 space-y-2">
           <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 font-semibold text-sm transition-all">
             <Settings size={20} /> Pengaturan
           </button>
           <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 font-semibold text-sm transition-all">
             <LogOut size={20} /> Keluar
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20">
          <div className="relative max-w-md w-full hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Cari event, peserta, atau laporan..." 
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-2.5 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-sm font-medium"
            />
          </div>

          <div className="flex items-center gap-4">
             <button className="p-2.5 text-slate-400 bg-slate-50 border border-slate-100 rounded-xl hover:bg-brand-50 hover:text-brand-600 transition-all relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
             </button>
             <div className="h-10 w-px bg-slate-200 mx-2" />
             <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-1.5 pr-4 rounded-xl cursor-pointer hover:bg-brand-50 transition-all group">
                <img src="https://i.pravatar.cc/100?u=admin" className="w-8 h-8 rounded-lg border border-white" alt="Admin" />
                <div className="text-left hidden sm:block">
                   <div className="text-xs font-bold text-slate-900 leading-none mb-1 group-hover:text-brand-600">Budi Santoso</div>
                   <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Ketua Pelaksana</div>
                </div>
             </div>
          </div>
        </header>

        {/* Dashboard Content Area */}
        <div className="p-8 pb-12 overflow-y-auto">
           {/* Welcome Header */}
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div>
                 <h1 className="text-2xl font-display font-bold text-slate-900 mb-1">Halo, Budi! 👋</h1>
                 <p className="text-slate-500 text-sm">Inilah yang terjadi dengan event Anda hari ini.</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-bold rounded-xl shadow-lg shadow-brand-100 hover:bg-brand-700 transition-all hover:-translate-y-0.5">
                 <Plus size={18} /> Buat Event Baru
              </button>
           </div>

           {/* Quick Stats Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { label: "Total Peserta", val: "2,842", change: "+12.5%", icon: <Users size={22} />, color: "bg-blue-50 text-blue-600" },
                { label: "Tiket Terjual", val: "1,248", change: "+8.2%", icon: <Ticket size={22} />, color: "bg-purple-50 text-purple-600" },
                { label: "Pendapatan", val: "Rp 12.4M", change: "+15.0%", icon: <TrendingUp size={22} />, color: "bg-emerald-50 text-emerald-600" },
                { label: "Event Aktif", val: "4", change: "Stabil", icon: <Calendar size={22} />, color: "bg-orange-50 text-orange-600" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color}`}>
                         {stat.icon}
                      </div>
                      <span className="text-xs font-bold text-emerald-600">{stat.change}</span>
                   </div>
                   <div className="text-2xl font-bold text-slate-900 mb-1">{stat.val}</div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
           </div>

           <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Event List */}
              <div className="xl:col-span-2 space-y-6">
                 <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                       <h3 className="font-bold text-slate-900">Event Terakhir</h3>
                       <button className="text-xs font-bold text-brand-600 uppercase tracking-widest flex items-center gap-1 hover:underline">
                          Lihat Semua <ChevronRight size={14} />
                       </button>
                    </div>
                    <div className="overflow-x-auto">
                       <table className="w-full text-left">
                          <thead className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                             <tr>
                                <th className="px-6 py-4">Nama Event</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Peserta</th>
                                <th className="px-6 py-4">Progres</th>
                                <th className="px-6 py-4 text-center">Aksi</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50">
                             {recentEvents.map((event, i) => (
                               <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                  <td className="px-6 py-5">
                                     <div className="text-sm font-bold text-slate-900">{event.name}</div>
                                     <div className="text-xs text-slate-500">{event.date}</div>
                                  </td>
                                  <td className="px-6 py-5">
                                     <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                                       event.status === 'Aktif' ? 'bg-emerald-50 text-emerald-600' : 
                                       event.status === 'Draft' ? 'bg-slate-100 text-slate-500' : 'bg-brand-50 text-brand-600'
                                     }`}>
                                        {event.status}
                                     </span>
                                  </td>
                                  <td className="px-6 py-5 text-sm font-medium text-slate-600">{event.participants}</td>
                                  <td className="px-6 py-5">
                                     <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-600 rounded-full" style={{ width: `${event.progress}%` }} />
                                     </div>
                                  </td>
                                  <td className="px-6 py-5 text-center text-slate-400 cursor-pointer hover:text-brand-600">
                                     <MoreVertical size={18} />
                                  </td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
              </div>

              {/* Quick Analytics & Activity */}
              <div className="space-y-8">
                 <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-6">Analitik Mingguan</h3>
                    <div className="space-y-6">
                       {[
                         { label: "Pendaftaran Baru", val: 128, color: "bg-brand-600" },
                         { label: "Tiket Terjual", val: 84, color: "bg-accent-500" },
                         { label: "Interaksi", val: 245, color: "bg-blue-500" },
                       ].map((item, i) => (
                         <div key={i}>
                            <div className="flex justify-between text-xs font-bold mb-2">
                               <span className="text-slate-500 uppercase tracking-widest">{item.label}</span>
                               <span className="text-slate-900">{item.val}</span>
                            </div>
                            <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 animate={{ width: `${(item.val / 250) * 100}%` }}
                                 className={`h-full ${item.color}`}
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-6">Aktivitas Terkini</h3>
                    <div className="space-y-6">
                       {[
                         { user: "Siti Aminah", action: "mendaftar ke event Sains", time: "2 mnt yang lalu" },
                         { user: "Andi Wijaya", action: "membayar Tiket VIP", time: "15 mnt yang lalu" },
                         { user: "Rina Sari", action: "mengunduh Sertifikat", time: "1 jam yang lalu" },
                       ].map((act, i) => (
                         <div key={i} className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-brand-600 shrink-0">
                               {act.user.charAt(0)}
                            </div>
                            <div>
                               <div className="text-xs font-bold text-slate-900 leading-none mb-1">{act.user}</div>
                               <div className="text-[10px] text-slate-500 mb-1">{act.action}</div>
                               <div className="text-[9px] font-bold text-slate-300 uppercase">{act.time}</div>
                            </div>
                         </div>
                       ))}
                    </div>
                    <button className="w-full mt-6 py-3 border border-slate-100 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all uppercase tracking-widest">
                       Lihat Semua Aktivitas
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
