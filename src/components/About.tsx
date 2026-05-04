import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1"
           >
              <div className="relative rounded-[60px] overflow-hidden glass-card p-2">
                <img 
                  src="https://picsum.photos/seed/university-team/1000/1000" 
                  alt="Our mission team" 
                  className="rounded-[52px] opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
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
              <h2 className="text-4xl font-display font-bold text-white mb-8">Empowering Campus Connections</h2>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                 <p>
                    SmartEvent Planner was born out of a simple observation: student organizations have incredible energy but are often hindered by outdated manual processes.
                 </p>
                 <p>
                    Our mission is to provide university communities with professional-grade tools that are easy to use, accessible, and affordable. We believe that better organized events lead to stronger communities and more impactful student experiences.
                 </p>
                 <div className="pt-8 flex gap-12">
                    <div>
                       <div className="text-4xl font-bold text-blue-400">5k+</div>
                       <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Events Organized</div>
                    </div>
                    <div>
                       <div className="text-4xl font-bold text-blue-400">100k+</div>
                       <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Tickets Scanned</div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
