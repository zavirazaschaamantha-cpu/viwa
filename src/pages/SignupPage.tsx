import { motion } from "motion/react";
import { Calendar, ArrowLeft, Mail, Lock, User, ArrowRight, Building } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col items-center justify-center p-6 py-12">
      <div className="glow-purple -top-24 -left-24 w-96 h-96" />
      <div className="glow-pink -bottom-24 -right-24 w-96 h-96" />

      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors font-semibold">
        <ArrowLeft size={20} /> Kembali
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-brand-600 p-2 rounded-xl shadow-lg shadow-brand-200">
              <Calendar className="text-white w-8 h-8" />
            </div>
            <span className="text-3xl font-display font-bold text-slate-900 tracking-tight">SmartEvent</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Mulai Perjalanan Anda</h1>
          <p className="text-slate-500">Buat akun untuk mendigitalisasi event komunitas Anda.</p>
        </div>

        <div className="premium-card p-10 bg-white/70 backdrop-blur-xl">
           <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Nama Lengkap</label>
                   <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium"
                      />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Nama Institusi</label>
                   <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="text" 
                        placeholder="BEM UI / UKM Tech" 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium"
                      />
                   </div>
                </div>
              </div>

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
                 <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Kata Sandi</label>
                 <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="password" 
                      placeholder="Minimal 8 karakter" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium"
                    />
                 </div>
              </div>

              <div className="flex items-start gap-3 py-2">
                 <input type="checkbox" className="mt-1 accent-brand-600 h-4 w-4 rounded border-slate-300" />
                 <p className="text-xs text-slate-500 leading-relaxed">
                    Saya menyetujui <a href="#" className="text-brand-600 font-bold hover:underline">Ketentuan Layanan</a> dan <a href="#" className="text-brand-600 font-bold hover:underline">Kebijakan Privasi</a> SmartEvent.
                 </p>
              </div>

              <button className="w-full bg-brand-600 text-white font-bold py-5 rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-100 flex items-center justify-center gap-2 group">
                 Daftar Sekarang <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
           </form>

           <div className="mt-8 pt-8 border-t border-slate-50 text-center">
              <p className="text-slate-500 text-sm">
                Sudah punya akun? <Link to="/login" className="text-brand-600 font-bold hover:underline">Masuk Saja</Link>
              </p>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
