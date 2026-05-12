import { motion } from "motion/react";
import { Calendar, ArrowLeft, Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center p-6 font-sans">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-600 transition-all group">
         <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
         Kembali ke Beranda
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <div className="flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-200">
                <Calendar className="text-white w-7 h-7" />
              </div>
              <span className="text-3xl font-display font-bold tracking-tight text-slate-900">
                SmartEvent<span className="text-brand-600">.</span>
              </span>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Selamat Datang Kembali</h1>
          <p className="text-slate-500 font-medium leading-relaxed">Masukkan detail akun Anda untuk mengelola acara kampus Anda hari ini.</p>
        </div>

        <div className="bg-white rounded-[32px] border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 md:p-10">
          <form className="space-y-6">
             <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Organisasi</label>
                <div className="relative group">
                   <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors">
                      <Mail size={18} />
                   </div>
                   <input 
                     type="email" 
                     placeholder="nama@organisasi.id" 
                     className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400"
                   />
                </div>
             </div>

             <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                   <label className="text-sm font-bold text-slate-700">Kata Sandi</label>
                   <a href="#" className="text-xs font-bold text-brand-600 hover:text-brand-700">Lupa Sandi?</a>
                </div>
                <div className="relative group">
                   <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors">
                      <Lock size={18} />
                   </div>
                   <input 
                     type="password" 
                     placeholder="••••••••••••" 
                     className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400"
                   />
                </div>
             </div>

             <button className="w-full py-4 px-6 bg-brand-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-700 shadow-xl shadow-brand-100 transition-all active:scale-95">
                Masuk Sekarang <ArrowRight size={20} />
             </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-50 text-center">
             <p className="text-sm text-slate-500 font-medium mb-4">Belum memiliki akun SmartEvent?</p>
             <Link to="/signup" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors hover:underline">
                Daftar Organisasi Baru <Sparkles size={16} />
             </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
