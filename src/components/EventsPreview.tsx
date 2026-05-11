import { motion } from 'motion/react';
import { Calendar as CalendarIcon, MapPin } from 'lucide-react';

export default function EventsPreview() {
  const events = [
    { title: "National Seminar: Future of AI", date: "Oct 24, 2026", loc: "Main Auditorium", type: "Seminar", img: "https://picsum.photos/seed/seminar/600/400" },
    { title: "UI/UX Design Workshop", date: "Nov 05, 2026", loc: "Design Lab B", type: "Workshop", img: "https://picsum.photos/seed/workshop/600/400" },
    { title: "Public Speaking Boot Camp", date: "Dec 12, 2026", loc: "Hall C", type: "Training", img: "https://picsum.photos/seed/training/600/400" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Sample Events</h2>
            <p className="text-slate-600">
              Check out how events look on our public discovery page. 
              Clean, informative, and ready to convert visitors into participants.
            </p>
          </div>
          <button className="px-8 py-3 bg-brand-700 text-white font-bold rounded-xl hover:bg-brand-800 transition-all shadow-lg shadow-brand-100">
            See All Public Events
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-[32px] overflow-hidden group hover:border-brand-300 transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={event.img} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-700 border border-brand-100">
                  {event.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{event.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <CalendarIcon size={16} /> {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin size={16} /> {event.loc}
                  </div>
                </div>
                <button className="w-full py-2 border border-brand-100 bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-700 hover:text-white transition-colors">
                  Join Event
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
