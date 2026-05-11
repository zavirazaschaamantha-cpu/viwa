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
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 text-slate-900">
           <h2 className="text-4xl font-display font-bold mb-4">Pricing Plans</h2>
           <p className="text-slate-600">Choose the perfect plan for your community size and event needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {plans.map((plan, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className={`p-8 rounded-[40px] flex flex-col transition-all duration-500 border ${plan.highlighted ? "bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-2xl shadow-brand-200 scale-105 border-transparent z-10" : "bg-white text-slate-900 border-brand-100 hover:border-brand-300 shadow-xl shadow-brand-50"}`}
             >
                <div className="mb-8">
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-brand-900"}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    <span className={plan.highlighted ? "text-brand-100" : "text-slate-500"}>/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                   {plan.features.map((feature, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm">
                       <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlighted ? "bg-white/20" : "bg-brand-50"}`}>
                         <Check size={12} className={plan.highlighted ? "text-white" : "text-brand-600"} />
                       </div>
                       <span className={plan.highlighted ? "text-brand-50" : "text-slate-600"}>{feature}</span>
                     </li>
                   ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlighted ? "bg-white text-brand-700 hover:bg-brand-50" : "bg-brand-700 text-white hover:bg-brand-800 shadow-lg shadow-brand-100"}`}>
                   {plan.cta}
                </button>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
