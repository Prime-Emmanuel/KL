import { motion } from 'motion/react';
import { MessageCircle, Map as MapIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-60"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-sunset-on-the-beach-4053-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-2/3 text-white mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-kribi-gold"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-kribi-gold">Plus qu'un séjour, une expérience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-serif font-light leading-[1.1] tracking-tight mb-8">
              Votre <br/>
              <span className="italic text-kribi-gold">confort</span>,<br />
              notre priorité.
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl font-light leading-relaxed">
              Découvrez l'élégance de Kribi comme jamais auparavant. Logements premium 
              et conciergerie IA personnelle pour sublimer chaque instant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-kribi-gold hover:bg-kribi-gold-light text-white font-medium py-4 px-8 rounded-none shadow-lg shadow-kribi-gold/20 transition-all duration-300 flex items-center justify-center gap-3 w-max">
                Parler avec Kora
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium py-4 px-8 rounded-none transition-all duration-300 flex items-center justify-center gap-3 w-max">
                Visitez les sites
                <MapIcon className="w-5 h-5" />
              </button>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
