import { motion } from "motion/react";
import { Calendar, ArrowLeft, Mail, Lock, User, ArrowRight, Building, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center p-6 py-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="glow-purple -top-[10%] -left-[10%] w-[60%] h-[60%] opacity-20" />
        <div className="glow-pink bottom-[10%] -right-[10%] w-[50%] h-[50%] opacity-15" />
        <div className="glow-orange top-[20%] right-[10%] w-[30%] h-[30%] opacity-10" />
      </div>

      <Link to="/" className="absolute top-8 left-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-brand-600 transition-all group">
         <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:-translate-x-1 transition-transform">
           <ArrowLeft size={18} />
         </div>
         Beranda
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl relative z-10"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-8 group justify-center">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="bg-gradient-premium p-2 rounded-xl shadow-lg"
            >
              <Calendar className="text-white w-8 h-8" />
            </motion.div>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-display font-black text-slate-900 tracking-tight leading-none uppercase">
                SmartEvent<span className="text-pink-custom">.</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Premium Hub</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-4 tracking-tighter">Bentuk Masa Depan</h1>
          <p className="text-slate-500 font-medium tracking-tight">Daftarkan institusi Anda untuk memulai revolusi koordinasi event digital.</p>
        </div>

        <div className="p-1 backdrop-blur-2xl rounded-[48px] bg-gradient-to-b from-white to-white/50 border border-white shadow-2xl">
           <div className="p-10 md:p-14 space-y-10">
              <form className="space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Nama Lengkap</label>
                       <div className="relative group">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors">
                             <User size={18} />
                          </div>
                          <input 
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full bg-slate-50/50 border border-slate-100 rounded-[20px] pl-12 pr-4 py-5 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-bold text-sm tracking-tight"
                          />
                       </div>
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Nama Institusi</label>
                       <div className="relative group">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent-600 transition-colors">
                             <Building size={18} />
                          </div>
                          <input 
                            type="text" 
                            placeholder="Organisasi Kampus / Komunitas" 
                            className="w-full bg-slate-50/50 border border-slate-100 rounded-[20px] pl-12 pr-4 py-5 focus:outline-none focus:border-accent-500 focus:bg-white transition-all text-slate-900 font-bold text-sm tracking-tight"
                          />
                       </div>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Alamat Surel Bisnis</label>
                    <div className="relative group">
                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors">
                          <Mail size={18} />
                       </div>
                       <input 
                         type="email" 
                         placeholder="nama@institusi.com" 
                         className="w-full bg-slate-50/50 border border-slate-100 rounded-[20px] pl-12 pr-4 py-5 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-bold text-sm tracking-tight"
                       />
                    </div>
                 </div>

                 <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Kata Sandi Kuat</label>
                    <div className="relative group">
                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors">
                          <Lock size={18} />
                       </div>
                       <input 
                         type="password" 
                         placeholder="Minimal 8 karakter unik" 
                         className="w-full bg-slate-50/50 border border-slate-100 rounded-[20px] pl-12 pr-4 py-5 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-bold text-sm tracking-tight"
                       />
                    </div>
                 </div>

                 <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                    <input type="checkbox" className="mt-1 h-5 w-5 rounded-lg border-slate-300 text-brand-600 focus:ring-brand-500" />
                    <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase tracking-widest">
                       SAYA MENYETUJUI <a href="#" className="text-slate-900 underline underline-offset-4">KETENTUAN LAYANAN</a> DAN <a href="#" className="text-slate-900 underline underline-offset-4">KEBIJAKAN PRIVASI</a> SMART EVENT PREMIUM.
                    </p>
                 </div>

                 <button className="relative group w-full py-6 bg-slate-950 text-white font-black rounded-[24px] transition-all shadow-2xl shadow-slate-200 flex items-center justify-center gap-3 overflow-hidden active:scale-95 uppercase tracking-[0.2em] text-xs">
                    <span className="relative z-10 flex items-center gap-2">
                       Buat Akun Elite <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-600 via-pink-custom to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </button>
              </form>

              <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
                 <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <ShieldCheck size={16} className="text-emerald-500" /> Keamanan Terenkripsi
                 </div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    SUDAH BERGABUNG? <Link to="/login" className="text-brand-600 hover:text-pink-custom transition-colors">MASUK KE TERMINAL</Link>
                 </p>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
