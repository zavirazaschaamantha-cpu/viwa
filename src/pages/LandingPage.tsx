import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedLogos from '../components/TrustedLogos';
import ProblemSolution from '../components/ProblemSolution';
import Features from '../components/Features';
import TargetMarket from '../components/TargetMarket';
import HowItWorks from '../components/HowItWorks';
import DashboardDemo from '../components/DashboardDemo';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import ContactFooter from '../components/ContactFooter';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden font-sans selection:bg-brand-500 selection:text-white">
      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.05)_0%,transparent_50%)]" />
      </div>
      
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustedLogos />
        <ProblemSolution />
        <Features />
        <TargetMarket />
        <HowItWorks />
        <DashboardDemo />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <ContactFooter />
      </main>
    </div>
  );
}
