import { motion } from 'motion/react';
import { Shield, Target, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1 relative"
           >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200">
                <img 
                   src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" 
                   alt="Smartevent Team" 
                   className="w-full aspect-square object-cover"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white shadow-xl">
                   <div className="flex items-center gap-3 text-brand-600 font-bold text-sm">
                      <Shield size={20} /> Data Terproteksi
                   </div>
                </div>
              </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1"
           >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-bold mb-6"
              >
                <Target size={16} /> Visi Kami
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                Memberdayakan <span className="text-brand-600">Event Organizer</span> Kampus
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
                 <p>
                    SmartEvent lahir dari keinginan untuk menyederhanakan manajemen acara di lingkungan pendidikan dan organisasi. Kami memahami betapa kompleksnya koordinasi pendaftaran peserta secara manual.
                 </p>
                 <p>
                    Misi kami adalah menyediakan alat yang handal agar Anda dapat fokus memberikan pengalaman acara yang berkesan, tanpa harus pusing dengan urusan administrasi yang memakan waktu.
                 </p>
                 <div className="pt-8 flex gap-12">
                    <div>
                       <div className="text-4xl font-bold text-slate-900 mb-1">500+</div>
                       <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Organisasi Terdaftar</div>
                    </div>
                    <div>
                       <div className="text-4xl font-bold text-slate-900 mb-1">100k+</div>
                       <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Tiket Terbit</div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
