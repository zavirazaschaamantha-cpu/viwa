import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedLogos from '../components/TrustedLogos';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import DashboardDemo from '../components/DashboardDemo';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import ContactFooter from '../components/ContactFooter';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Dynamic Background Glows */}
      <div className="glow-purple -top-24 -left-24 w-96 h-96" />
      <div className="glow-pink top-1/2 -right-24 w-80 h-80" />
      <div className="glow-purple -bottom-24 left-1/3 w-96 h-96" />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustedLogos />
        <Features />
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
