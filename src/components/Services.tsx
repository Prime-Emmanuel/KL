import { motion } from 'motion/react';
import { Home, Map, Car, Palmtree } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Logement Premium",
    description: "Des villas, appartements et suites de luxe minutieusement sélectionnés pour un confort absolu."
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Guide Touristique",
    description: "Explorez les merveilles de Kribi avec nos experts locaux pour des souvenirs inoubliables."
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Location Auto",
    description: "Déplacez-vous en toute liberté avec notre flotte de véhicules récents et sécurisés."
  },
  {
    icon: <Palmtree className="w-6 h-6" />,
    title: "Loisirs & Découverte",
    description: "Des activités sur mesure : balades en bateau, chutes de la Lobé, soirées gastronomiques."
  }
];

export default function Services() {
  return (
    <section className="py-32 bg-[#FAFAFA] relative" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.2em] text-kribi-gold font-medium mb-4">L'Excellence à Kribi</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-900 text-4xl md:text-5xl font-serif font-light mb-6"
          >
            Nos <span className="italic text-kribi-gold">Services</span>
          </motion.h2>
          <div className="w-12 h-px bg-kribi-gold/50 mb-6"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-light text-lg"
          >
            Nous nous occupons de chaque détail pour que vous n'ayez qu'à profiter de l'instant présent.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-100 p-10 premium-shadow group hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-kribi-gold mb-8 group-hover:bg-kribi-gold group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
