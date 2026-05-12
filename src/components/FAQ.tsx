import { motion } from "motion/react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import React, { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Apakah SmartEvent Planner gratis untuk digunakan?",
      a: "Tentu. Kami menyediakan paket gratis selamanya untuk acara skala kecil hingga 100 peserta dengan fitur manajemen dasar."
    },
    {
      q: "Bagaimana cara kerja sistem tiket QR?",
      a: "Setiap peserta akan menerima tiket unik dengan kode QR melalui email. Anda dapat menggunakan aplikasi pemindai kami untuk memproses check-in peserta di lokasi acara secara instan."
    },
    {
      q: "Dapatkah pendaftaran acara disesuaikan?",
      a: "Ya. Formulir pendaftaran kami sangat fleksibel. Anda dapat menambahkan pertanyaan kustom, bidang data spesifik, dan mengatur logika formulir sesuai kebutuhan acara Anda."
    },
    {
      q: "Seberapa aman data peserta di platform ini?",
      a: "Kami memprioritaskan keamanan data dengan enkripsi standar industri. Semua informasi peserta disimpan dengan aman dan hanya dapat diakses oleh penyelenggara acara yang sah."
    },
    {
      q: "Dapatkah saya mengekspor data peserta ke Excel?",
      a: "Sangat bisa. Anda dapat mengekspor seluruh daftar peserta dan data pendaftaran ke format CSV atau Excel kapan saja melalui dashboard admin."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-6"
            >
              <HelpCircle size={18} />
              Bantuan & Dukungan
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
              Pertanyaan yang <span className="text-brand-600">Sering Diajukan</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Temukan jawaban atas pertanyaan umum tentang platform kami. Butuh bantuan lebih lanjut? Tim kami siap membantu.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl border border-brand-100 shadow-xl shadow-brand-50"
            >
               <MessageCircle className="text-brand-600 mb-4" size={40} />
               <h4 className="text-xl font-bold text-slate-900 mb-2">Masih punya pertanyaan?</h4>
               <p className="text-slate-600 text-sm mb-6">Kami di sini untuk membantu Anda menjalankan acara yang sukses tanpa hambatan teknis.</p>
               <button className="px-8 py-3 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-all">
                 Hubungi Kami
               </button>
            </motion.div>
          </div>

          <div className="lg:w-7/12 space-y-4">
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? 'border-brand-200 shadow-xl shadow-brand-50' : 'border-slate-100'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 flex justify-between items-center text-left"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand-600' : 'text-slate-900'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8">
          <p className="text-slate-600 leading-relaxed pt-4 border-t border-slate-50 font-medium">
            {answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
