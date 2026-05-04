import { motion } from 'motion/react';
import { GraduationCap, Users, Building2 } from 'lucide-react';

export default function TargetMarket() {
  const targets = [
    { icon: <GraduationCap size={40} className="text-blue-400" />, title: "Students & Universities", desc: "Manage campus-wide student organizations and departmental events with one unified account." },
    { icon: <Users size={40} className="text-blue-400" />, title: "Communities", desc: "Scale your reach and volunteer coordination within interest groups or public communities." },
    { icon: <Building2 size={40} className="text-blue-400" />, title: "Companies", desc: "Professional corporate training, seminars, and networking event management simplified." },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Built for Everyone</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From local student clubs to large-scale institutional summits, 
            SmartEvent Planner adapts to your unique workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="mx-auto w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all duration-300 backdrop-blur-xl">
                {target.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{target.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{target.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-white/5 text-center">
           <img 
             src="https://picsum.photos/seed/team/1200/400" 
             alt="Collaborative team" 
             className="rounded-[40px] w-full max-w-4xl mx-auto shadow-2xl opacity-40 mix-blend-screen"
             referrerPolicy="no-referrer"
           />
        </div>
      </div>
    </section>
  );
}
