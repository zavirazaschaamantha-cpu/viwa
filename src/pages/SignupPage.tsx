import { motion } from "motion/react";
import { Calendar, ArrowLeft, Mail, Lock, User, ArrowRight, Building, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center p-6 py-20 font-sans">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-600 transition-all group">
         <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
         Kembali ke Beranda
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl relative z-10"
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
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Daftarkan Organisasi Anda</h1>
          <p className="text-slate-500 font-medium leading-relaxed max-w-lg mx-auto">Mulai kelola acara dengan lebih profesional dan efisien bersama SmartEvent.</p>
        </div>

        <div className="bg-white rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
           <div className="p-8 md:p-12 space-y-8 relative z-10">
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700 ml-1">Nama Lengkap</label>
                       <div className="relative group">
                          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors">
                             <User size={18} />
                          </div>
                          <input 
                            type="text" 
                            placeholder="Rafli Pratama" 
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium"
                          />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700 ml-1">Nama Organisasi</label>
                       <div className="relative group">
                          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors">
                             <Building size={18} />
                          </div>
                          <input 
                            type="text" 
                            placeholder="BEM Fakultas Teknik" 
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium"
                          />
                       </div>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Organisasi</label>
                    <div className="relative group">
                       <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors">
                          <Mail size={18} />
                       </div>
                       <input 
                         type="email" 
                         placeholder="admin@himpunan.id" 
                         className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium"
                       />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Kata Sandi</label>
                    <div className="relative group">
                       <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors">
                          <Lock size={18} />
                       </div>
                       <input 
                         type="password" 
                         placeholder="Minimal 8 karakter" 
                         className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium"
                       />
                    </div>
                 </div>

                 <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                       Dengan mendaftar, Anda menyetujui <a href="#" className="text-brand-600 font-bold hover:underline">Ketentuan Layanan</a> dan <a href="#" className="text-brand-600 font-bold hover:underline">Kebijakan Privasi</a> SmartEvent.
                    </p>
                 </div>

                 <button className="w-full py-4 px-6 bg-brand-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-700 shadow-xl shadow-brand-100 transition-all active:scale-95">
                    Buat Akun Sekarang <ArrowRight size={20} />
                 </button>
              </form>

              <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-center gap-2">
                 <p className="text-sm text-slate-500 font-medium">Sudah memiliki akun?</p>
                 <Link to="/login" className="text-sm font-bold text-brand-600 hover:text-brand-700 hover:underline">Masuk ke Dashboard</Link>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
