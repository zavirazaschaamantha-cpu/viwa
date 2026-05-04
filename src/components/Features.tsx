import { motion } from 'motion/react';
import { UserCheck, Ticket, Search, BarChart, Smartphone, Globe } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Globe className="text-blue-400" />, title: "Registration System", desc: "Fully customizable online forms that handle payments and group signups seamlessly." },
    { icon: <UserCheck className="text-blue-400" />, title: "Participant Management", desc: "Filter, sort and manage your attendee database from a central dashboard." },
    { icon: <Ticket className="text-blue-400" />, title: "Digital Ticketing", desc: "Automated PDF tickets with secure QR codes sent immediately upon registration." },
    { icon: <Search className="text-blue-400" />, title: "Attendance Scanner", desc: "Turn any smartphone into a professional check-in device with our mobile scanner app." },
    { icon: <BarChart className="text-blue-400" />, title: "Dashboard & Reports", desc: "Insightful analytics on attendance rates, marketing performance, and demographics." },
    { icon: <Smartphone className="text-blue-400" />, title: "Mobile Friendly", desc: "A responsive experience for both event organizers and participants on any device." },
  ];

  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 text-white">
          <h2 className="text-4xl font-display font-bold mb-4">Powerful Features</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to run successful campus events without the stress. 
            Automate the boring stuff so you can focus on the experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 glass-card rounded-3xl hover:border-blue-500/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Dashboard Preview Section */}
        <div className="mt-32">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl glass-card p-1"
           >
              <div className="p-4 border-b border-white/5 flex items-center justify-between">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                    <div className="w-3 h-3 rounded-full bg-green-400/50" />
                 </div>
                 <div className="text-[10px] text-slate-500 font-mono">dashboard.smartevent.io/analytics</div>
                 <div className="w-12 h-4" />
              </div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/dashboard/1200/800" 
                  alt="Dashboard Mockup Preview" 
                  className="w-full opacity-70"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
              </div>
              
              <div className="absolute bottom-10 left-10 text-white">
                 <div className="text-3xl font-display font-bold">Real-time Analytics</div>
                 <p className="text-slate-400">See who's coming, who's checked in, and how your event is growing.</p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
