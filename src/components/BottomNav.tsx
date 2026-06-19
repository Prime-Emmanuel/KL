import { useState } from "react";
import { motion } from "motion/react";
import { Home, Compass, Map, User } from "lucide-react";

export default function BottomNav() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Accueil", href: "#" },
    { id: "explore", icon: Compass, label: "Explorer", href: "#services" },
    { id: "map", icon: Map, label: "Sites", href: "#" },
    { id: "profile", icon: User, label: "Profil", href: "#" },
  ];

  return (
    <div className="fixed bottom-4 inset-x-4 bg-white/90 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-[2rem] z-40 md:hidden pb-safe">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = active === item.id;
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.id)}
              className="relative flex flex-col items-center justify-center w-16 h-12"
            >
              {isActive && (
                <motion.div
                  layoutId="bottom-nav-active"
                  className="absolute -top-1 w-10 h-10 bg-kribi-gold/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <motion.div
                animate={{
                  y: isActive ? -4 : 0,
                  color: isActive ? "#C28B46" : "#9CA3AF",
                }}
                className="relative z-10"
              >
                <Icon className="w-5 h-5 mx-auto" />
              </motion.div>

              <motion.span
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 4,
                  scale: isActive ? 1 : 0.8,
                }}
                className="text-[10px] font-medium text-kribi-gold absolute bottom-0 font-sans"
              >
                {item.label}
              </motion.span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
