import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, X, Send } from "lucide-react";

export default function KoraChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-[100px] md:bottom-[104px] right-4 md:right-6 z-[70] w-[calc(100vw-32px)] md:w-96 glowing-border rainbow flex flex-col"
          >
            {/* Header */}
            <div className="bg-white rounded-t-[1.3rem] p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0A1D3A] flex items-center justify-center text-white text-xs font-bold shadow-md shadow-[#0A1D3A]/20">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-gray-900 font-medium">
                    KORA AI
                  </h3>
                  <p className="text-[10px] text-green-500 uppercase tracking-widest font-medium">
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-gray-50 h-80 p-4 pb-0 overflow-y-auto flex flex-col gap-4">
              <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm p-4 text-sm text-gray-700 shadow-sm self-start max-w-[85%]">
                <p className="font-serif italic mb-1 text-[#0A1D3A]">
                  Bonjour !
                </p>
                Je suis KORA, votre concierge. Comment puis-je sublimer votre
                séjour à Kribi aujourd'hui ?
              </div>
            </div>

            {/* Input area */}
            <div className="bg-white rounded-b-[1.3rem] p-4 border-t border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Écrivez un message..."
                  className="w-full bg-gray-50 text-sm border border-gray-200 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-kribi-gold/30 focus:border-kribi-gold"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-kribi-gold text-white rounded-full flex items-center justify-center hover:bg-kribi-gold-light transition-colors">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button – fixed with stopPropagation and higher z-index */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();    // Prevents any parent click handlers from interfering
          e.preventDefault();
          console.log("Toggle clicked, current isOpen:", isOpen); // Helps debugging
          setIsOpen(!isOpen);
        }}
        className="fixed bottom-24 md:bottom-6 right-6 z-[80] bg-gradient-to-tr from-kribi-gold-dark to-kribi-gold-light text-white w-14 h-14 rounded-full shadow-2xl shadow-kribi-gold/40 hover:scale-105 transition-transform flex items-center justify-center group border border-white/20 cursor-pointer"
      >
        <span className="absolute right-full mr-4 bg-white text-gray-900 text-sm font-medium py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100 hidden md:block">
          Discutez avec Kora
        </span>
        <Bot className="w-7 h-7 pointer-events-none" />
      </button>
    </>
  );
}
