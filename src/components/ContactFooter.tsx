import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Facebook, Calendar } from 'lucide-react';

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-white text-slate-900 pt-32 pb-12 relative overflow-hidden">
      <div className="glow-purple -top-40 -left-40 w-[600px] h-[600px] opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
           {/* Branding & Socials */}
           <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-brand-600 p-2 rounded-xl shadow-lg shadow-brand-200">
                  <Calendar className="text-white w-8 h-8" />
                </div>
                <span className="text-3xl font-display font-bold text-slate-900 tracking-tight">SmartEvent<span className="text-accent-500">Planner</span></span>
              </div>
              <p className="text-slate-600 mb-10 max-w-sm text-lg leading-relaxed font-normal">
                Mendiung manajemen event kampus Anda ke level berikutnya dengan platform all-in-one yang modern dan elegan.
              </p>
              <div className="flex gap-4">
                 {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                   <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-200 hover:shadow-lg transition-all">
                     <Icon size={20} />
                   </a>
                 ))}
              </div>
           </div>

           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="premium-card p-12 bg-white relative"
           >
              <h3 className="text-2xl font-display font-bold mb-8 text-slate-900 tracking-tight">Hubungi Tim Kami</h3>
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Nama Lengkap</label>
                       <input type="text" className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium" placeholder="Budi Santoso" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Alamat Surel</label>
                       <input type="email" className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 font-medium" placeholder="budi@example.com" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Pesan</label>
                    <textarea className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-slate-900 h-32 font-medium" placeholder="Bagaimana kami bisa membantu Anda?" />
                 </div>
                 <button className="w-full bg-brand-600 text-white font-bold py-5 rounded-2xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-100 hover:-translate-y-1">
                    Kirim Pesan Sekarang
                 </button>
              </form>
           </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-slate-400 text-xs font-medium">
              &copy; {currentYear} SmartEvent Planner. Hak Cipta Dilindungi. <br /> Built for Communities in Indonesia.
           </div>
           
           <div className="flex gap-10 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
              <a href="#" className="hover:text-brand-600 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-brand-600 transition-colors">Ketentuan Layanan</a>
              <a href="#" className="hover:text-brand-600 transition-colors">Bantuan</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
