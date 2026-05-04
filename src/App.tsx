import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import EventsPreview from './components/EventsPreview';
import TargetMarket from './components/TargetMarket';
import Pricing from './components/Pricing';
import SWOT from './components/SWOT';
import About from './components/About';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden font-sans">
      {/* Dynamic Background Glows */}
      <div className="glow-blue -top-24 -left-24 w-96 h-96" />
      <div className="glow-indigo top-1/2 -right-24 w-80 h-80" />
      <div className="glow-cyan -bottom-24 left-1/3 w-96 h-96" />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProblemSolution />
        <Features />
        <EventsPreview />
        <TargetMarket />
        <Pricing />
        <SWOT />
        <About />
        <ContactFooter />
      </main>
    </div>
  );
}
