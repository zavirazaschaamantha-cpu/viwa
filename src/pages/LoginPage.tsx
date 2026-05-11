import { motion } from "motion/react";
import { Calendar, ArrowLeft, Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="glow-purple -top-[10%] -left-[10%] w-[50%] h-[50%] opacity-20" />
        <div className="glow-pink bottom-[10%] -right-[10%] w-[40%] h-[40%] opacity-15" />
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
        className="w-full max-w-md relative z-10"
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
          <h1 className="text-4xl font-display font-black text-slate-900 mb-4 tracking-tighter">Selamat Datang</h1>
          <p className="text-slate-500 font-medium tracking-tight">Masuk ke terminal eksklusif Anda untuk mengelola mahakarya event.</p>
        </div>

        <div className="p-1 backdrop-blur-2xl rounded-[40px] bg-gradient-to-b from-white to-white/50 border border-white shadow-2xl">
           <div className="p-10 space-y-8">
              <form className="space-y-6">
                 <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Identitas Surel</label>
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
                    <div className="flex justify-between items-center px-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Kata Sandi</label>
                       <a href="#" className="text-[10px] font-black text-brand-600 uppercase tracking-widest hover:text-pink-custom">Lupa?</a>
                    </div>
                    <div className="relative group">
                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors">
                          <Lock size={18} />
                       </div>
                       <input 
                         type="password" 
                         placeholder="••••••••" 
                         className="w-full bg-slate-50/50 border border-slate-100 rounded-[20px] pl-12 pr-4 py-5 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-bold text-sm tracking-tight"
                       />
                    </div>
                 </div>

                 <button className="relative group w-full py-6 bg-slate-950 text-white font-black rounded-[24px] transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 overflow-hidden active:scale-95 uppercase tracking-[0.2em] text-xs">
                    <span className="relative z-10 flex items-center gap-2">
                      Masuk Sekarang <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-pink-custom opacity-0 group-hover:opacity-100 transition-opacity" />
                 </button>
              </form>

              <div className="pt-8 border-t border-slate-50 flex flex-col items-center gap-6">
                 <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Sparkles size={16} className="text-accent-500" /> Member Baru?
                 </div>
                 <Link to="/signup" className="w-full py-5 border border-slate-100 rounded-[20px] text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] text-center hover:bg-slate-50 transition-colors">
                   Buat Akun Elite
                 </Link>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
