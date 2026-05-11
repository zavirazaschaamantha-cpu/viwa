import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Facebook, Calendar, Mail, Phone, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-slate-50 text-slate-900 pt-32 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
           {/* Branding & Socials */}
           <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-10 group">
                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="bg-gradient-premium p-2 rounded-xl shadow-lg"
                >
                  <Calendar className="text-white w-8 h-8" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-2xl font-display font-black text-slate-900 tracking-tight leading-none uppercase">
                    SmartEvent<span className="text-pink-custom">.</span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Premium Hub</span>
                </div>
              </div>
              
              <p className="text-slate-500 mb-10 max-w-sm text-lg leading-relaxed font-medium">
                Mendiung manajemen event kampus Anda ke level berikutnya dengan platform all-in-one yang modern, elegan, dan estetik.
              </p>
              
              <div className="flex gap-4">
                 {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                   <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-200 hover:shadow-xl transition-all active:scale-90">
                     <Icon size={20} />
                   </a>
                 ))}
              </div>
           </div>

           {/* Quick Links */}
           <div className="lg:col-span-2">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900 mb-10">Navigasi</h4>
              <ul className="space-y-6">
                 {['Fitur', 'Cara Kerja', 'Ulasan', 'Investasi'].map(link => (
                   <li key={link}>
                      <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-500 font-bold hover:text-brand-600 transition-colors uppercase tracking-widest text-[10px]">
                        {link}
                      </a>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Contact Info */}
           <div className="lg:col-span-3">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900 mb-10">Hubungi Kami</h4>
              <ul className="space-y-8">
                 <li className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
                       <Mail size={18} />
                    </div>
                    <div>
                       <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Email</div>
                       <div className="text-sm font-bold text-slate-900 group-hover:text-brand-600">hello@smartevent.com</div>
                    </div>
                 </li>
                 <li className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-accent-600 group-hover:bg-accent-600 group-hover:text-white transition-all">
                       <Phone size={18} />
                    </div>
                    <div>
                       <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Telepon</div>
                       <div className="text-sm font-bold text-slate-900 group-hover:text-accent-600">+62 812 3456 7890</div>
                    </div>
                 </li>
                 <li className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-pink-custom group-hover:bg-pink-custom group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    <div>
                       <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Lokasi</div>
                       <div className="text-sm font-bold text-slate-900 group-hover:text-pink-custom">Jakarta, Indonesia</div>
                    </div>
                 </li>
              </ul>
           </div>

           {/* Newsletter */}
           <div className="lg:col-span-3">
              <div className="p-10 rounded-[40px] bg-slate-950 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles size={40} className="text-brand-400" />
                 </div>
                 <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-400 mb-6 font-display">Berlangganan</h4>
                 <p className="text-slate-400 text-xs font-medium leading-relaxed mb-8">
                    Dapatkan wawasan event terbaru langsung di katalog digital Anda.
                 </p>
                 <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Email Anda" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs font-bold focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all text-white placeholder:text-slate-600" 
                    />
                    <button className="absolute right-2 top-2 p-2 bg-brand-600 rounded-xl hover:bg-brand-500 transition-colors">
                       <ArrowRight size={18} className="text-white" />
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-slate-200">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] text-center md:text-left">
                 &copy; {currentYear} SmartEvent Premium. SELURUH HAK CIPTA DILINDUNGI. <br /> 
                 <span className="text-slate-300">DIRANCANG UNTUK EKSKLUSIVITAS DI INDONESIA.</span>
              </div>
              
              <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                 <Link to="/" className="hover:text-brand-600 transition-colors">Kebijakan</Link>
                 <Link to="/" className="hover:text-brand-600 transition-colors">Ketentuan</Link>
                 <Link to="/" className="hover:text-brand-600 transition-colors">Keamanan</Link>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
