import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Apakah SmartEvent Planner gratis untuk digunakan?",
      a: "Ya! Kami memiliki paket gratis untuk event kecil hingga 50 peserta dengan fitur pendaftaran standar."
    },
    {
      q: "Bagaimana cara kerja sistem tiket QR?",
      a: "Setelah peserta mendaftar, mereka akan menerima email berisi tiket PDF dengan kode QR unik. Panitia bisa memindai kode ini menggunakan aplikasi kami di lokasi acara."
    },
    {
      q: "Dapatkah saya menyesuaikan formulir pendaftaran?",
      a: "Tentu saja! Anda bisa menambahkan kolom kustom seperti ukuran kaos, pilihan makanan, atau pertanyaan khusus lainnya sesuai kebutuhan event Anda."
    },
    {
      q: "Apakah data saya aman di platform ini?",
      a: "Keamanan data adalah prioritas kami. Semua data pendaftar disimpan secara aman dan hanya dapat diakses oleh panitia yang sah."
    },
    {
      q: "Bagaimana jika kouta peserta saya melebihi paket yang ada?",
      a: "Anda bisa melakukan upgrade paket kapan saja dengan mudah melalui dasbor admin Anda."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-slate-50/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h4 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">FAQ</h4>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Pertanyaan yang Sering <span className="text-brand-600">Diajukan</span>
            </h2>
            <p className="text-slate-600">
              Temukan jawaban cepat untuk pertanyaan umum mengenai SmartEvent Planner. Masih butuh bantuan? Hubungi tim kami.
            </p>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  key?: any;
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-brand-50 overflow-hidden shadow-sm transition-all hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left"
      >
        <span className="font-bold text-slate-900 pr-8">{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}
