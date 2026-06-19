import { MapPin, Instagram, Facebook, Phone, QrCode } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A1D3A] pt-24 pb-12 relative z-10 text-white/80">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <h2 className="flex flex-col mb-8">
              <span className="text-3xl font-serif tracking-tight text-white leading-none">KRiBi.</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-kribi-gold mt-2 text-left">Logement</span>
            </h2>
            <p className="font-light leading-relaxed mb-8 max-w-sm">
              L'alliance parfaite entre le prestige, le confort absolu et l'innovation au cœur de la magnifique ville de Kribi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center hover:bg-kribi-gold hover:border-kribi-gold transition-colors text-white">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center hover:bg-kribi-gold hover:border-kribi-gold transition-colors text-white">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-kribi-gold transition-colors font-light text-sm">Accueil</a></li>
              <li><a href="#services" className="hover:text-kribi-gold transition-colors font-light text-sm">Nos Services</a></li>
              <li><a href="#kora" className="hover:text-kribi-gold transition-colors font-light text-sm">Concierge Kora AI</a></li>
              <li><a href="#" className="hover:text-kribi-gold transition-colors font-light text-sm">Réserver</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium text-white mb-6">Contact & Réservation</h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                 <Phone className="w-5 h-5 text-kribi-gold shrink-0 mt-1" />
                 <div className="flex flex-col">
                   <p className="text-xl font-light text-white tracking-wide">656 335 789</p>
                   <p className="text-xl font-light text-white tracking-wide">699 488 795</p>
                 </div>
              </div>
              
              <div className="flex items-center gap-4">
                 <MapPin className="w-5 h-5 text-kribi-gold shrink-0" />
                 <span className="font-light">Kribi, Cameroun</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-5">
               <div className="bg-white p-2 border border-white/20">
                  <QrCode className="w-10 h-10 text-[#0A1D3A]" />
               </div>
               <div className="flex flex-col">
                 <span className="text-xs uppercase tracking-wider text-kribi-gold font-medium">Scannez-moi</span>
                 <span className="text-sm font-light mt-1">Échangez avec KORA</span>
               </div>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-light text-white/50">
          <p>© {new Date().getFullYear()} Kribi Logement. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
             <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
