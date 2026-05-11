import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1"
           >
              <div className="relative rounded-[60px] overflow-hidden bg-white shadow-2xl p-2 border border-brand-100">
                <img 
                  src="https://picsum.photos/seed/university-team/1000/1000" 
                  alt="Our mission team" 
                  className="rounded-[52px] opacity-90 transition-all duration-700 grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1"
           >
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-8">Memberdayakan Koneksi Kampus</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                 <p>
                    SmartEvent Planner lahir dari pengamatan sederhana: organisasi mahasiswa memiliki energi luar biasa tetapi sering terhambat oleh proses manual yang ketinggalan zaman.
                 </p>
                 <p>
                    Misi kami adalah menyediakan komunitas universitas dengan alat kelas profesional yang mudah digunakan, dapat diakses, dan terjangkau. Kami percaya bahwa acara yang terorganisir dengan lebih baik akan mengarah pada komunitas yang lebih kuat dan pengalaman mahasiswa yang lebih berdampak.
                 </p>
                 <div className="pt-8 flex gap-12">
                    <div>
                       <div className="text-4xl font-bold text-brand-600">5k+</div>
                       <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Acara Terorganisir</div>
                    </div>
                    <div>
                       <div className="text-4xl font-bold text-accent-500">100k+</div>
                       <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Tiket Terpindai</div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
