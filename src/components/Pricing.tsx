import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Free Plan",
      price: "Rp0",
      features: ["Up to 50 participants", "Standard registration form", "Email notifications", "Community support"],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Basic Plan",
      price: "Rp49.000",
      features: ["Up to 500 participants", "Custom registration fields", "QR Ticketing system", "Attendance scanner app", "Priority support"],
      cta: "Go Basic",
      highlighted: false
    },
    {
      name: "Pro Plan",
      price: "Rp99.000",
      features: ["Unlimited participants", "Advanced dashboard & analytics", "Unlimited certificates", "Team collaboration tools", "24/7 Premium support", "Custom domain ready"],
      cta: "Get Pro Now",
      highlighted: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 text-white">
           <h2 className="text-4xl font-display font-bold mb-4">Pricing Plans</h2>
           <p className="text-slate-400">Choose the perfect plan for your community size and event needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {plans.map((plan, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className={`p-8 rounded-[40px] flex flex-col transition-all duration-500 ${plan.highlighted ? "bg-blue-600 text-white shadow-2xl shadow-blue-600/20 scale-105 border border-white/20 z-10" : "glass-card text-white hover:border-white/20"}`}
             >
                <div className="mb-8">
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-white"}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    <span className={plan.highlighted ? "text-blue-100/60" : "text-slate-500"}>/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                   {plan.features.map((feature, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm">
                       <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlighted ? "bg-white/20" : "bg-white/5"}`}>
                         <Check size={12} className={plan.highlighted ? "text-white" : "text-blue-400"} />
                       </div>
                       <span className={plan.highlighted ? "text-blue-50" : "text-slate-300"}>{feature}</span>
                     </li>
                   ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlighted ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-white/5 border border-white/10 text-white hover:bg-white/10"}`}>
                   {plan.cta}
                </button>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
