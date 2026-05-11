import { motion } from "motion/react";
import { Calendar, ArrowLeft, Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col items-center justify-center p-6">
      <div className="glow-purple -top-24 -left-24 w-96 h-96" />
      <div className="glow-pink -bottom-24 -right-24 w-96 h-96" />

      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors font-semibold">
        <ArrowLeft size={20} /> Kembali
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-brand-600 p-2 rounded-xl shadow-lg shadow-brand-200">
              <Calendar className="text-white w-8 h-8" />
            </div>
            <span className="text-3xl font-display font-bold text-slate-900 tracking-tight">SmartEvent</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Selamat Datang Kembali</h1>
          <p className="text-slate-500">Masuk ke akun Anda untuk mengelola event.</p>
        </div>

        <div className="premium-card p-8 bg-white/70 backdrop-blur-xl">
           <form className="space-y-6">
              <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Alamat Surel</label>
                 <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="email" 
                      placeholder="email@contoh.com" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium"
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Kata Sandi</label>
                    <a href="#" className="text-[10px] font-bold text-brand-600 uppercase tracking-widest hover:underline">Lupa?</a>
                 </div>
                 <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium"
                    />
                 </div>
              </div>

              <button className="w-full bg-brand-600 text-white font-bold py-5 rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-100 flex items-center justify-center gap-2 group">
                 Masuk Sekarang <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
           </form>

           <div className="mt-8 pt-8 border-t border-slate-50 text-center">
              <p className="text-slate-500 text-sm">
                Belum punya akun? <Link to="/signup" className="text-brand-600 font-bold hover:underline">Daftar Gratis</Link>
              </p>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
