import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import KoraAI from './components/KoraAI';
import Footer from './components/Footer';
import KoraChat from './components/KoraChat';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-kribi-gold selection:text-white pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <KoraAI />
      </main>
      <Footer />
      
      <KoraChat />
      <BottomNav />
    </div>
  );
}
