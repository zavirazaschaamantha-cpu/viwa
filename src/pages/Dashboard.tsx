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
  Filter,
  Cpu,
  Activity,
  Terminal,
  Database
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
    { name: "Science & Technology 2026", date: "24 OCT 2026", status: "Active", participants: 452, growth: "+12%" },
    { name: "Neural UX Workshop", date: "05 NOV 2026", status: "Draft", participants: 0, growth: "0%" },
    { name: "Quantum Career Seminar", date: "12 DEC 2026", status: "Success", participants: 1200, growth: "+45%" },
  ];

  return (
    <div className="min-h-screen bg-cyber-dark flex selection:bg-neon-green/30 selection:text-white relative overflow-hidden">
      <div className="grid-background absolute inset-0 opacity-10 pointer-events-none" />
      
      {/* Glow decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-green/5 blur-[150px] -z-10" />

      {/* Cyber Sidebar */}
      <aside className="w-80 bg-black/40 backdrop-blur-2xl border-r border-white/5 flex flex-col hidden lg:flex sticky top-0 h-screen overflow-hidden group">
        <div className="p-8 relative z-10 flex-1">
          <Link to="/" className="flex items-center gap-4 mb-16 group/logo italic">
            <motion.div 
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="bg-neon-green p-2.5 rounded-xl shadow-[0_0_15px_rgba(57,255,20,0.5)]"
            >
              <Terminal className="text-black w-7 h-7" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-black text-white tracking-tighter leading-none uppercase">
                SMART_EVENT<span className="text-neon-green">_</span>
              </span>
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] mt-1 italic group-hover/logo:text-neon-green transition-colors">Elite_Dashboard</span>
            </div>
          </Link>

          <nav className="space-y-4">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ x: 5 }}
                onClick={() => setActiveTab(item.label)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-[20px] transition-all font-black text-[10px] uppercase tracking-[0.2em] italic border ${
                  activeTab === item.label 
                  ? "bg-neon-green text-black border-neon-green shadow-[0_0_20px_rgba(57,255,20,0.2)]" 
                  : "text-slate-500 border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-5">
                   <div className={`${activeTab === item.label ? 'text-black' : 'text-neon-green/40 group-hover:text-neon-green'} transition-colors`}>
                    {item.icon}
                   </div>
                   {item.label}
                </div>
                {activeTab === item.label && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
              </motion.button>
            ))}
          </nav>

          <div className="mt-16 p-6 rounded-[24px] bg-white/5 border border-white/5 relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:scale-125 transition-transform">
                <Cpu className="text-neon-green" size={24} />
             </div>
             <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-neon-green mb-3 italic">UPGRADE_PROTOCOL</h5>
             <p className="text-[11px] text-slate-500 font-bold mb-6 leading-relaxed uppercase tracking-tighter italic">Aktifkan sinkronisasi node tak terbatas untuk skalabilitas global.</p>
             <button className="w-full py-4 bg-neon-green text-black rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:shadow-[0_0_15px_rgba(57,255,20,0.4)] transition-all italic">
                INITIALIZE_LEVEL_UP
             </button>
          </div>
        </div>

        <div className="p-8 border-t border-white/5 space-y-4 relative z-10 bg-black/20">
           <button className="w-full flex items-center gap-5 px-6 py-4 rounded-[20px] text-slate-600 hover:text-white transition-all font-black text-[10px] uppercase tracking-[0.3em] italic group/btn">
             <Settings size={20} className="group-hover/btn:rotate-90 transition-transform" /> SETTINGS_NODE
           </button>
           <Link to="/" className="w-full flex items-center gap-5 px-6 py-4 rounded-[20px] text-red-500/60 hover:text-red-500 transition-all font-black text-[10px] uppercase tracking-[0.3em] italic group/btn">
             <LogOut size={20} className="group-hover/btn:-translate-x-1 transition-transform" /> TERMINATE_SESSION
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative z-10 overflow-y-auto">
        {/* Cyber Header */}
        <header className="h-24 bg-cyber-dark/40 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between px-10 sticky top-0 z-30">
          <div className="relative max-w-lg w-full hidden md:block group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-neon-green transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="SCAN_NETWORK_DATA..." 
              className="w-full bg-white/5 border border-transparent rounded-[20px] pl-16 pr-6 py-4 focus:outline-none focus:border-neon-green/20 focus:bg-white/10 transition-all text-[10px] font-black tracking-[0.25em] uppercase italic placeholder:text-slate-700"
            />
          </div>

          <div className="flex items-center gap-8">
             <div className="flex items-center gap-3">
                <button className="w-14 h-14 flex items-center justify-center text-slate-500 glass-card rounded-2xl hover:text-neon-green hover:border-neon-green/30 transition-all relative group">
                   <Bell size={24} />
                   <span className="absolute top-4 right-4 w-3 h-3 bg-neon-green rounded-full border-4 border-cyber-dark animate-pulse shadow-[0_0_10px_#39ff14]" />
                </button>
                <button className="w-14 h-14 flex items-center justify-center text-slate-500 glass-card rounded-2xl hover:text-neon-green hover:border-neon-green/30 transition-all">
                   <Filter size={22} />
                </button>
             </div>
             
             <div className="h-10 w-px bg-white/5 mx-2" />
             
             <div className="flex items-center gap-5 p-2 pr-8 glass-card rounded-[20px] cursor-pointer hover:border-neon-green/30 transition-all group border-white/5 bg-white/5">
                <div className="relative">
                   <img src="https://i.pravatar.cc/100?u=admin_elite" className="w-12 h-12 rounded-xl border border-white/10 grayscale group-hover:grayscale-0 transition-all" alt="Operator" />
                   <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-neon-green border-4 border-cyber-dark rounded-full shadow-[0_0_10px_#39ff14]" />
                </div>
                <div className="text-left hidden sm:block">
                   <div className="text-[11px] font-black text-white leading-none mb-1.5 group-hover:text-neon-green italic uppercase tracking-widest">BUDI_SANTOSO</div>
                   <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] italic">ROOT_OPERATOR</div>
                </div>
             </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-12 pb-32">
           {/* Section Title */}
           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
              <div>
                 <motion.div 
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-neon-green/5 border border-neon-green/20 text-neon-green text-[9px] font-black uppercase tracking-[0.4em] mb-6 shadow-[0_0_15px_rgba(57,255,20,0.1)]"
                 >
                    <Activity size={14} className="animate-pulse" /> SYSTEM_UPTIME: 99.98%
                 </motion.div>
                 <h1 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mb-4 italic uppercase">
                   WELCOME, <span className="text-neon-green">BUDI_</span>
                 </h1>
                 <p className="text-slate-500 text-xl font-bold tracking-tight uppercase italic opacity-80">Sinkronisasi metadata event sedang berlangsung... <span className="text-neon-green font-black">OPTIMAL_STATE</span></p>
              </div>
              <button className="group relative overflow-hidden flex items-center gap-4 px-12 py-6 btn-cyber-primary !rounded-2xl !text-xs italic">
                INITIALIZE_NEW_MASTERPIECE <Plus size={24} />
              </button>
           </div>

           {/* Grid Stats */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
              {[
                { label: "Elite Members", val: "2,842", change: "+12.5%", icon: <Users size={28} />, color: "text-neon-green" },
                { label: "Credit Flow", val: "Rp 12.4M", change: "+8.2%", icon: <CreditCard size={28} />, color: "text-cyan-400" },
                { label: "Conversion rate", val: "84.5%", change: "+15.0%", icon: <TrendingUp size={28} />, color: "text-lime-400" },
                { label: "Network Rating", val: "4.98", change: "STABLE", icon: <Star size={28} />, color: "text-yellow-400" },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-10 rounded-[48px] border-white/5 hover:border-neon-green/30 transition-all duration-500 group relative overflow-hidden"
                >
                   <div className="flex items-center justify-between mb-12">
                      <div className={`w-16 h-16 rounded-[24px] bg-cyber-dark flex items-center justify-center ${stat.color} shadow-lg border border-white/5 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] transition-all duration-500`}>
                         {stat.icon}
                      </div>
                      <div className="flex flex-col items-end">
                         <div className={`text-[10px] font-black ${stat.change.includes('+') ? 'text-neon-green' : 'text-slate-500'} tracking-widest italic`}>{stat.change}</div>
                         <ArrowUpRight size={18} className="text-neon-green" />
                      </div>
                   </div>
                   <div className="text-4xl font-black text-white mb-3 tracking-tighter italic uppercase underline decoration-white/5 underline-offset-8">{stat.val}</div>
                   <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] italic leading-none">{stat.label}</div>
                </motion.div>
              ))}
           </div>

           <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
              {/* Event Protocol Module */}
              <div className="xl:col-span-2">
                 <div className="glass-card rounded-[56px] border-white/5 overflow-hidden">
                    <div className="p-12 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                       <div>
                          <h3 className="text-3xl font-black text-white tracking-tighter mb-2 uppercase italic underline decoration-neon-green decoration-2 underline-offset-4">ACTIVE_PROTOCOLS</h3>
                          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] italic">Real-time Data Stream: Node_01 to Node_99</p>
                       </div>
                       <button className="p-5 glass-card !bg-white/5 rounded-2xl text-slate-500 hover:text-neon-green transition-all hover:rotate-90">
                          <MoreVertical size={24} />
                       </button>
                    </div>
                    <div className="overflow-x-auto">
                       <table className="w-full text-left">
                          <thead className="bg-white/[0.01] text-[10px] font-black text-slate-700 uppercase tracking-[0.4em] italic">
                             <tr>
                                <th className="px-12 py-8">IDENTITY_TAG</th>
                                <th className="px-12 py-8">UPLINK_HEALTH</th>
                                <th className="px-12 py-8">NODE_PULSE</th>
                                <th className="px-12 py-8 text-right">ACTION</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                             {recentEvents.map((event, i) => (
                               <tr key={i} className="hover:bg-white/[0.03] transition-all group">
                                  <td className="px-12 py-10">
                                     <div className="text-lg font-black text-white mb-2 group-hover:text-neon-green transition-colors italic tracking-tighter uppercase">{event.name}</div>
                                     <div className="text-[10px] font-black text-slate-600 tracking-[0.3em] uppercase italic">{event.date}</div>
                                  </td>
                                  <td className="px-12 py-10">
                                     <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full ${
                                          event.status === 'Active' ? 'bg-neon-green animate-pulse shadow-[0_0_10px_#39ff14]' : 
                                          event.status === 'Draft' ? 'bg-slate-700' : 'bg-cyan-500 shadow-[0_0_10px_#22d3ee]'
                                        }`} />
                                        <span className={`text-[10px] font-black uppercase tracking-[0.4em] italic ${
                                          event.status === 'Active' ? 'text-neon-green' : 
                                          event.status === 'Draft' ? 'text-slate-600' : 'text-cyan-400'
                                        }`}>
                                           {event.status}_MODE
                                        </span>
                                     </div>
                                  </td>
                                  <td className="px-12 py-10">
                                     <div className="text-xl font-black text-white leading-none mb-2 italic tracking-tighter underline underline-offset-4 decoration-white/5">{event.participants}</div>
                                     <div className="text-[10px] font-black text-neon-green uppercase tracking-widest italic">{event.growth} UPLINK</div>
                                  </td>
                                  <td className="px-12 py-10 text-right">
                                     <button className="w-12 h-12 glass-card !bg-white/5 rounded-xl text-slate-600 hover:text-neon-green hover:border-neon-green/30 transition-all flex items-center justify-center mx-auto">
                                        <ChevronRight size={22} />
                                     </button>
                                  </td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
              </div>

              {/* Analytics Module */}
              <div className="space-y-12">
                 <div className="p-12 rounded-[56px] bg-black border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform duration-1000 rotate-12">
                       <Database size={100} className="text-neon-green" />
                    </div>
                    <div className="relative z-10">
                       <h3 className="text-2xl font-black text-white mb-10 uppercase tracking-tighter italic underline decoration-neon-green decoration-2 underline-offset-8">NETWORK_TRAFFIC</h3>
                       <div className="flex items-end h-40 gap-4 mb-12">
                          {[30, 55, 25, 75, 45, 95, 65, 110].map((h, i) => (
                            <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${(h/110)*100}%` }}
                              transition={{ duration: 1.5, delay: i * 0.1 }}
                              className={`flex-1 rounded-t-xl bg-gradient-to-t ${i === 5 ? 'from-neon-green to-[#2bff00] shadow-[0_0_15px_rgba(57,255,20,0.3)]' : 'from-white/10 to-white/20'}`}
                            />
                          ))}
                       </div>
                       <div className="flex justify-between items-center bg-white/5 rounded-[24px] p-6 border border-white/5 group-hover:border-neon-green/20 transition-all">
                          <div>
                             <div className="text-[9px] font-black text-neon-green uppercase tracking-[0.4em] mb-2 italic">AGGREGATED_FLOW</div>
                             <div className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">RP 128.4M</div>
                          </div>
                          <button className="w-14 h-14 rounded-2xl bg-neon-green flex items-center justify-center hover:shadow-[0_0_20px_#39ff14] transition-all group/icon">
                             <ArrowUpRight size={28} className="text-black group-hover/icon:translate-x-1 group-hover/icon:-translate-y-1 transition-all" />
                          </button>
                       </div>
                    </div>
                 </div>

                 <div className="p-12 rounded-[56px] glass-card border-white/5 relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-12">
                       <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic leading-none underline decoration-white/5 underline-offset-8">REALTIME_LOGS</h3>
                       <div className="w-3 h-3 rounded-full bg-neon-green animate-ping shadow-[0_0_10px_#39ff14]" />
                    </div>
                    <div className="space-y-10">
                       {[
                         { user: "Siti Aminah", action: "VIP_KEY_SECURED", time: "2m", color: "text-neon-green" },
                         { user: "Andi Wijaya", action: "FLOW_DISBURSED", time: "15m", color: "text-cyan-400" },
                         { user: "Rina Sari", action: "NODAL_CERT_SENT", time: "1h", color: "text-lime-400" },
                       ].map((act, i) => (
                         <div key={i} className="flex gap-6 group/item">
                            <div className="w-14 h-14 rounded-[20px] bg-white/5 flex items-center justify-center font-black text-white text-lg border border-white/5 group-hover/item:text-neon-green group-hover/item:border-neon-green/20 transition-all italic">
                               {act.user.charAt(0)}
                            </div>
                            <div className="flex-1">
                               <div className="flex justify-between items-center mb-1.5 pt-1">
                                  <div className="text-base font-black text-white italic tracking-tighter uppercase group-hover/item:text-neon-green transition-colors">{act.user}</div>
                                  <div className="text-[9px] font-black text-slate-700 uppercase tracking-widest">{act.time}</div>
                                </div>
                               <div className={`text-[10px] font-black ${act.color} uppercase tracking-[0.3em] italic opacity-80`}>{act.action}</div>
                            </div>
                         </div>
                       ))}
                    </div>
                    <button className="w-full mt-12 py-5 bg-white/5 rounded-[24px] text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] hover:bg-neon-green hover:text-black transition-all italic shadow-inner">
                       RETRIEVE_ENTIRE_HISTORY_LOG
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
