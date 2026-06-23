import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Kora IA", href: "#kora" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 md:top-4 md:inset-x-4 lg:inset-x-12 md:rounded-3xl ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl py-4 md:py-3 shadow-lg border border-gray-100/50"
          : "bg-transparent py-6 md:bg-white/10 md:backdrop-blur-md md:border md:border-white/20 md:py-3"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo – fallback text always shown if image fails */}
        <a href="#" className="flex flex-col relative z-20">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Kribi Logo"
              className="h-10 w-auto max-w-[120px] object-contain flex-shrink-0"
              onError={(e) => {
                // Hide image and show the fallback text
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) {
                  fallback.classList.remove("hidden");
                  fallback.classList.add("flex");
                }
              }}
            />
            {/* Fallback text (always visible if image fails) */}
            <div className="flex flex-col">
              <span
                className={`text-2xl font-serif tracking-tight leading-none ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                KRiBi.
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.2em] font-medium mt-1 ${
                  isScrolled ? "text-gray-500" : "text-white/80"
                }`}
              >
                Logement
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm tracking-wide font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-600 hover:text-kribi-gold"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`border rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
              isScrolled
                ? "border-kribi-gold text-kribi-gold hover:bg-kribi-gold hover:text-white"
                : "border-white/50 text-white hover:bg-white hover:text-gray-900"
            }`}
          >
            Connexion
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden relative z-20 ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 inset-x-0 bg-white h-screen flex flex-col items-center justify-center z-10"
          >
            <ul className="flex flex-col items-center gap-8 mb-12">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-gray-900 hover:text-kribi-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-kribi-gold text-white px-8 py-3 rounded-full text-lg font-medium w-64 shadow-lg shadow-kribi-gold/30">
              Connexion
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
