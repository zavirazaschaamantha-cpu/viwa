import { motion } from "motion/react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import React, { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Apakah SmartEvent Planner gratis untuk digunakan?",
      a: "Tentu. Kami menyediakan akses gratis selamanya untuk event skala kecil hingga 100 peserta dengan fitur pendaftaran standar dan manajemen dasar."
    },
    {
      q: "Bagaimana cara kerja sistem tiket QR unik?",
      a: "Setiap pendaftar akan menerima tiket digital eksklusif dengan kode QR terenkripsi. Panitia dapat menggunakan aplikasi pemindai khusus kami yang tersedia di Android & iOS untuk proses check-in kilat."
    },
    {
      q: "Dapatkah pendaftaran disesuaikan total?",
      a: "Ya. Antarmuka kustomisasi kami memungkinkan Anda mendesain formulir dengan field tak terbatas, mulai dari pemilihan ukuran merchandise hingga persyaratan dokumen khusus."
    },
    {
      q: "Seberapa aman data peserta saya?",
      a: "Kami menggunakan infrastruktur keamanan berlapis dengan enkripsi AES-256. Data Anda adalah aset privasi yang kami lindungi dengan standar kepatuhan hukum data nasional."
    },
    {
      q: "Bagaimana jika event saya bertaraf internasional?",
      a: "SmartEvent mendukung pendaftaran dari berbagai negara dengan konversi mata uang otomatis (tersedia pada paket Premium & Elite)."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm"
            >
              <HelpCircle size={14} className="text-brand-500" /> Pusat Bantuan
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-8 leading-tight tracking-tighter"
            >
              Jawaban Dari <br />
              <span className="text-gradient">Kebingungan Anda</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg font-medium leading-relaxed mb-12"
            >
              Kami merancang platform ini agar seintuitif mungkin, namun tim kami selalu siap membantu jika Anda memiliki pertanyaan spesifik.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-10 rounded-[40px] bg-slate-950 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-brand-500/20 transition-all"
            >
               <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:scale-110 transition-transform">
                  <MessageCircle size={48} className="text-brand-400" />
               </div>
               <div className="relative z-10">
                  <h4 className="text-xl font-black mb-4 uppercase tracking-tight">Butuh Respon Cepat?</h4>
                  <p className="text-slate-400 text-sm mb-8">Tim spesialis kami siap menjawab pertanyaan teknis Anda dalam hitungan menit.</p>
                  <button className="px-8 py-4 bg-brand-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/20 active:scale-95">
                     Hubungi Support
                  </button>
               </div>
            </motion.div>
          </div>

          <div className="lg:w-7/12 space-y-6">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className={`rounded-[32px] overflow-hidden transition-all duration-500 border ${isOpen ? 'bg-slate-50 border-brand-100 shadow-xl' : 'bg-white border-slate-100 group hover:border-brand-200'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 md:p-10 flex justify-between items-center text-left gap-8"
      >
        <span className={`text-lg md:text-xl font-black tracking-tight transition-colors ${isOpen ? 'text-brand-600' : 'text-slate-900'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-brand-600 text-white rotate-90 shadow-lg shadow-brand-500/30' : 'bg-slate-50 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "circOut" }}
        className="overflow-hidden"
      >
        <div className="px-8 md:px-10 pb-10">
          <div className="h-px w-full bg-slate-200 mb-8 opacity-50" />
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
