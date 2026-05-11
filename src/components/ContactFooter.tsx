import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook, Calendar } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-white text-slate-900 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-500 rounded-full blur-3xl opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
           {/* Contact Info & Form */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-4xl font-display font-bold mb-8 text-brand-950">Hubungi Kami</h2>
              <p className="text-slate-600 mb-12 max-w-md">
                Punya pertanyaan tentang paket kami atau butuh solusi khusus untuk institusi Anda? 
                Tim kami siap membantu Anda merencanakan kesuksesan berikutnya.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center border border-brand-100">
                       <Mail size={20} className="text-brand-600" />
                    </div>
                    <span>hello@smartevent.io</span>
                 </div>
                 <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center border border-brand-100">
                       <Phone size={20} className="text-brand-600" />
                    </div>
                    <span>+62 812-3456-7890</span>
                 </div>
                 <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center border border-brand-100">
                       <MapPin size={20} className="text-brand-600" />
                    </div>
                    <span>Innovation Hub, Jakarta</span>
                 </div>
              </div>
           </motion.div>

           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-brand-50/50 p-8 rounded-[40px] border border-brand-100"
           >
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Nama</label>
                       <input type="text" className="w-full bg-white border border-brand-100 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors text-slate-900" placeholder="Budi Santoso" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Surel</label>
                       <input type="email" className="w-full bg-white border border-brand-100 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors text-slate-900" placeholder="budi@example.com" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Pesan</label>
                    <textarea className="w-full bg-white border border-brand-100 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors text-slate-900 h-32" placeholder="Bagaimana kami bisa membantu?" />
                 </div>
                 <button className="w-full bg-brand-700 text-white font-bold py-4 rounded-xl hover:bg-brand-800 transition-all shadow-lg shadow-brand-100">
                    Kirim Pesan
                 </button>
              </form>
           </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-brand-100 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
              <div className="bg-brand-600 p-1 rounded-lg">
                <Calendar className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-display font-bold text-brand-950">SmartEvent<span className="text-accent-500">Planner</span></span>
           </div>

           <div className="flex gap-6">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-brand-100 flex items-center justify-center text-slate-500 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
           </div>

           <div className="text-slate-500 text-xs text-center md:text-left">
              &copy; 2026 SmartEvent Planner. Hak Cipta Dilindungi Undang-Undang. Dibangun untuk Komunitas.
           </div>
        </div>
      </div>
    </footer>
  );
}
