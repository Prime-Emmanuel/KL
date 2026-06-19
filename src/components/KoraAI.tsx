import { motion } from 'motion/react';
import { Sparkles, Clock, ShieldCheck, Headphones } from 'lucide-react';

export default function KoraAI() {
  const koraTasks = [
    { title: "Planifier votre séjour", desc: "Organisation sur mesure de vos journées." },
    { title: "Réserver & Assister", desc: "Gestion des logements, transports et activités." },
    { title: "Recommander", desc: "Les meilleures expériences locales à Kribi." },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="kora">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-kribi-gold font-medium mb-4 block">Intelligence Artificielle</span>
              <h2 className="text-gray-900 text-4xl lg:text-6xl font-serif font-light mb-8 leading-[1.2]">
                Votre Concierge <br /> Virtuel <span className="italic text-kribi-gold">Intelligent</span>.
              </h2>
              <div className="w-12 h-px bg-kribi-gold/50 mb-8"></div>
              <p className="text-gray-500 font-light text-lg mb-10 leading-relaxed max-w-xl">
                KORA est l'assistant IA exclusif de KRIBI logement. Disponible 24h/24, 
                ce bijou de technologie organise, personnalise et sublime chaque aspect de votre séjour.
              </p>

              <div className="bg-[#FAFAFA] border border-gray-100 p-8 pt-10 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-kribi-gold"></div>
                <h4 className="text-gray-900 text-lg font-serif mb-8 flex items-center gap-3">
                  <Sparkles className="text-kribi-gold w-5 h-5" />
                  KORA s'occupe de tout
                </h4>
                <div className="space-y-6">
                  {koraTasks.map((task, idx) => (
                    <div key={idx} className="flex flex-col border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                       <span className="font-medium text-gray-900 block mb-1">{task.title}</span>
                       <span className="text-sm font-light text-gray-500">{task.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Visual Representation */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-md aspect-[4/5] bg-gray-50 premium-shadow"
            >
               {/* Minimalist Phone/Interface representation */}
               <div className="absolute inset-4 bg-white border border-gray-100 overflow-hidden flex flex-col justify-end">
                  
                  {/* Subtle robot/AI imagery inside */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1620800888924-1188f58b6c4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="AI Visual" 
                      className="w-full h-full object-cover opacity-10 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white border border-gray-100 p-6 premium-shadow mx-6 mb-12 relative z-10"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#0A1D3A] flex items-center justify-center text-white text-xs font-bold">K</div>
                      <p className="font-serif text-gray-900 text-lg italic">Bonjour !</p>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
                      Je suis KORA, votre concierge personnel. Comment puis-je organiser votre expérience d'exception à Kribi aujourd'hui ?
                    </p>
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-kribi-gold animate-bounce"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-kribi-gold animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-kribi-gold animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </motion.div>
               </div>

                {/* Floating Features */}
                <div className="absolute -left-12 top-1/4 hidden md:flex flex-col gap-4">
                    <div className="bg-white p-4 premium-shadow border border-gray-50 flex items-center justify-center">
                      <Clock className="text-kribi-gold w-5 h-5 mr-3" />
                      <span className="text-xs font-medium text-gray-900">24/7 Disponible</span>
                    </div>
                    <div className="bg-white p-4 premium-shadow border border-gray-50 flex items-center justify-center translate-x-4">
                      <ShieldCheck className="text-kribi-gold w-5 h-5 mr-3" />
                      <span className="text-xs font-medium text-gray-900">100% Sécurisé</span>
                    </div>
                    <div className="bg-white p-4 premium-shadow border border-gray-50 flex items-center justify-center">
                      <Headphones className="text-kribi-gold w-5 h-5 mr-3" />
                      <span className="text-xs font-medium text-gray-900">Service Premium</span>
                    </div>
                </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
