import { motion } from 'motion/react';
import { ShieldCheck, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

export default function SWOT() {
  const items = [
    { 
      label: "Strength", 
      icon: <ShieldCheck className="text-green-400" />, 
      color: "border-green-500/20 bg-green-500/5",
      desc: "Robust QR-based validation and real-time synchronization across devices." 
    },
    { 
      label: "Weakness", 
      icon: <AlertTriangle className="text-amber-400" />, 
      color: "border-amber-500/20 bg-amber-500/5",
      desc: "High dependency on stable internet connectivity for real-time cloud data sync." 
    },
    { 
      label: "Opportunity", 
      icon: <Zap className="text-blue-400" />, 
      color: "border-blue-500/20 bg-blue-500/5",
      desc: "Growing demand for digital transformation in educational institutions post-pandemic." 
    },
    { 
      label: "Threat", 
      icon: <TrendingUp className="text-red-400" />, 
      color: "border-red-500/20 bg-red-500/5",
      desc: "Competition from established global event platforms and niche campus solutions." 
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl font-display font-bold mb-4">Strategic Overview</h2>
          <p className="text-slate-400">A SWOT analysis of the SmartEvent Planner ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {items.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className={`p-8 rounded-[32px] border ${item.color} backdrop-blur-md flex flex-col items-center text-center hover:scale-105 transition-transform`}
             >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                   {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.label}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
