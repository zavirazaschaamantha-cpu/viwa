import { motion } from "motion/react";
import { 
  Users, 
  Ticket, 
  BarChart3, 
  Bell, 
  Search, 
  Plus,
  ArrowUpRight,
  TrendingUp,
  LayoutDashboard,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react";

export default function DashboardDemo() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--color-brand-100),transparent_50%),radial-gradient(ellipse_at_bottom_left,var(--color-accent-100),transparent_50%)]" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-brand-100 text-brand-600 font-black uppercase tracking-[0.3em] text-[10px] mb-8 shadow-sm"
            >
              <LayoutDashboard size={16} className="text-accent-500" /> Pusat Kendali Elit
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-display font-black text-slate-900 mb-8 leading-tight tracking-tighter"
            >
              Manajemen Event dengan <br />
              <span className="text-gradient">Presisi Mutlak</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 mb-12 max-w-xl font-medium leading-relaxed"
            >
              Pantau kinerja setiap aspek event Anda melalui satu antarmuka futuristik yang menggabungkan keindahan desain dengan kekuatan analitik data real-time.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0">
               {[
                 { title: "Penjualan Real-time", icon: <TrendingUp size={20} />, color: "text-brand-600", bg: "bg-brand-50" },
                 { title: "Manajemen Elite", icon: <Users size={20} />, color: "text-pink-custom", bg: "bg-pink-50" },
                 { title: "Keamanan Sertifikasi", icon: <ShieldCheck size={20} />, color: "text-emerald-600", bg: "bg-emerald-50" },
                 { title: "Akses Kilat", icon: <Zap size={20} />, color: "text-accent-500", bg: "bg-accent-50" }
               ].map((item, i) => (
                 <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-4 p-5 bg-white/50 backdrop-blur-xl rounded-[24px] border border-white hover:border-brand-200 transition-all group shadow-sm hover:shadow-md"
                 >
                    <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <span className="font-bold text-slate-800 text-sm tracking-tight">{item.title}</span>
                 </motion.div>
               ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full lg:min-w-[600px]"
          >
            {/* Actual Mockup structure */}
            <div className="relative z-10 bg-white/70 backdrop-blur-3xl rounded-[48px] border border-white shadow-2xl p-8 overflow-hidden">
               {/* Toolbar */}
               <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-4">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                     </div>
                     <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest ml-4">Terminal SmartEvent v2.0</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 cursor-pointer">
                        <Search size={18} />
                     </div>
                     <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 cursor-pointer">
                        <Plus size={18} />
                     </div>
                  </div>
               </div>

               {/* Stats Area */}
               <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {[
                    { label: "Pendaftar", val: "1,248", change: "+12.5%", color: "brand" },
                    { label: "Revenue", val: "Rp 12.4M", change: "+8.2%", color: "pink" },
                    { label: "Status", val: "Elite", change: "Stabil", color: "orange" }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-[28px] bg-slate-50/50 border border-slate-100/50 group hover:bg-white hover:shadow-xl transition-all">
                       <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</div>
                       <div className="text-2xl font-black text-slate-900 mb-2">{stat.val}</div>
                       <div className="flex items-center gap-1 text-[10px] font-black text-emerald-500">
                          <ArrowUpRight size={12} /> {stat.change}
                       </div>
                    </div>
                  ))}
               </div>

               {/* Large Activity Section */}
               <div className="p-8 rounded-[32px] bg-slate-950 text-white mb-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                     <Star size={60} className="text-brand-500 animate-spin-slow" style={{ animationDuration: '10s' }} />
                  </div>
                  <div className="relative z-10">
                     <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-400 mb-6 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" /> Live Monitoring
                     </h4>
                     <div className="space-y-6">
                        {[
                          { name: "Rafli Pratama", type: "Tiket VIP", price: "Rp 750k" },
                          { name: "Sarah Azhari", type: "Tiket Reguler", price: "Rp 250k" }
                        ].map((user, i) => (
                          <div key={i} className="flex items-center justify-between group/item">
                             <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-black group-hover/item:bg-brand-600 transition-colors">
                                   {user.name.charAt(0)}
                                </div>
                                <div>
                                   <div className="text-sm font-black text-white">{user.name}</div>
                                   <div className="text-[10px] font-bold text-slate-400 uppercase">{user.type}</div>
                                </div>
                             </div>
                             <div className="text-right">
                                <div className="text-sm font-black text-emerald-400">{user.price}</div>
                                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Selesai</div>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Growth Curve Visualization */}
               <div className="flex items-end justify-between px-2 gap-2 h-20">
                  {[30, 50, 45, 80, 55, 95, 75, 85, 60, 40].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: 1 + (i * 0.1), duration: 1 }}
                      className={`flex-1 rounded-t-xl bg-gradient-to-t ${i === 5 ? 'from-accent-600 to-accent-400' : 'from-brand-600 to-brand-400'}`}
                    />
                  ))}
               </div>
            </div>

            {/* Floating details */}
            <motion.div 
              animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute -top-12 -right-12 p-6 glass-morphism rounded-3xl border-white shadow-2xl z-20 group"
            >
               <div className="w-12 h-12 rounded-2xl bg-accent-500 flex items-center justify-center text-white mb-4 group-hover:rotate-12 transition-transform">
                  <Star size={24} className="fill-current" />
               </div>
               <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kepuasan</div>
               <div className="text-2xl font-black text-slate-900">4.98</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
