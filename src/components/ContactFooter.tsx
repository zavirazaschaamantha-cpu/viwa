import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Facebook, Calendar, Mail, Phone, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
           {/* Branding & Socials */}
           <div className="lg:col-span-4">
              <Link to="/" className="flex items-center gap-2 mb-8 group">
                <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
                  <Calendar className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-display font-bold tracking-tight">
                  SmartEvent<span className="text-brand-500">.</span>
                </span>
              </Link>
              
              <p className="text-slate-400 mb-8 max-w-sm text-lg leading-relaxed font-medium">
                Solusi cerdas manajemen acara kampus untuk panitia dan mahasiswa. Mempersingkat proses, mempererat kolaborasi.
              </p>
              
              <div className="flex gap-4">
                 {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                   <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
                     <Icon size={20} />
                   </a>
                 ))}
              </div>
           </div>

           {/* Quick Links */}
           <div className="lg:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-8">Navigasi</h4>
              <ul className="space-y-4">
                 {['Fitur', 'Cara Kerja', 'Testimoni', 'Harga'].map(link => (
                   <li key={link}>
                      <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-brand-400 transition-colors font-medium">
                        {link}
                      </a>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Contact Info */}
           <div className="lg:col-span-3">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-8">Kontak</h4>
              <ul className="space-y-6">
                 <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-600/10 flex items-center justify-center text-brand-400 border border-brand-600/20">
                       <Mail size={18} />
                    </div>
                    <div>
                       <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Email kami</div>
                       <div className="text-sm font-semibold text-slate-200">halo@smartevent.id</div>
                    </div>
                 </li>
                 <li className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-600/10 flex items-center justify-center text-brand-400 border border-brand-600/20">
                       <Phone size={18} />
                    </div>
                    <div>
                       <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Telepon</div>
                       <div className="text-sm font-semibold text-slate-200">+62 812 3456 7890</div>
                    </div>
                 </li>
              </ul>
           </div>

           {/* Newsletter */}
           <div className="lg:col-span-3">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group">
                 <h4 className="text-sm font-bold uppercase tracking-widest text-brand-400 mb-4 font-display">Buletin Acara</h4>
                 <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    Dapatkan tips terbaru seputar manajemen acara dan update fitur platform kami.
                 </p>
                 <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Email Anda" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-brand-500 transition-all text-white placeholder:text-slate-600 tracking-tight" 
                    />
                    <button className="absolute right-2 top-2 p-2 bg-brand-600 rounded-lg hover:bg-brand-500 transition-all">
                       <ArrowRight size={20} className="text-white" />
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
           <div className="text-slate-500 text-sm font-medium">
              &copy; {currentYear} SmartEvent Planner. Seluruh Hak Cipta Dilindungi.
           </div>
           
           <div className="flex gap-8 text-sm font-medium text-slate-500">
              <Link to="/" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
              <Link to="/" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
