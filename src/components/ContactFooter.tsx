import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook, Calendar } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
           {/* Contact Info & Form */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-4xl font-display font-bold mb-8">Get in Touch</h2>
              <p className="text-slate-400 mb-12 max-w-md">
                Have questions about our plans or need a custom solution for your institution? 
                Our team is ready to help you plan your next success.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                       <Mail size={20} />
                    </div>
                    <span>hello@smartevent.io</span>
                 </div>
                 <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                       <Phone size={20} />
                    </div>
                    <span>+62 812-3456-7890</span>
                 </div>
                 <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                       <MapPin size={20} />
                    </div>
                    <span>Innovation Hub, Tower 3, Jakarta</span>
                 </div>
              </div>
           </motion.div>

           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="glass-card p-8 rounded-[40px]"
           >
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                       <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                       <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white" placeholder="john@example.com" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                    <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white h-32" placeholder="How can we help?" />
                 </div>
                 <button className="w-full bg-white text-slate-950 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors">
                    Send Message
                 </button>
              </form>
           </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1 rounded-lg">
                <Calendar className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-display font-bold">SmartEvent<span className="text-blue-400">Planner</span></span>
           </div>

           <div className="flex gap-6">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                  <Icon size={18} />
                </a>
              ))}
           </div>

           <div className="text-slate-500 text-xs">
              &copy; 2026 SmartEvent Planner. All Rights Reserved. Built for Communities.
           </div>
        </div>
      </div>
    </footer>
  );
}
