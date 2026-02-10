import { useState, useEffect, useRef } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const scrollProgress = useScrollProgress();
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Reveal row 2 only if scrolling up AND not at the very top
      if (currentScrollY < lastScrollY.current && currentScrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a1a1a]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" role="navigation">
      
      {/* LOADING BAR */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-[#C8102E] transition-all duration-150 shadow-[0_0_8px_#C8102E] z-[60]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center min-h-[70px] md:min-h-[80px]">
        
        {/* ROW 1: ALWAYS VISIBLE */}
        <div className="flex items-center justify-between w-full z-[55] bg-[#1a1a1a] py-4">
          <a href="#home" 
             className="text-[#C8102E] text-xl md:text-2xl font-bold tracking-tighter" 
             style={{ 
               fontFamily: "'Georgia', serif",
               textShadow: "0.5px 0.5px 0px rgba(0,0,0,1), 1.5px 1.5px 2px rgba(0,0,0,0.8)"
             }}
             onClick={() => handleClick("#home")}>
            United Utilities
          </a>
          
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleClick("#contact"); }}
            className="bg-[#C8102E] text-white px-4 py-2 rounded-full text-[10px] md:text-sm font-bold hover:bg-[#A00D24] transition-all shadow-lg active:scale-95"
          >
            Get Quote
          </a>
        </div>

        {/* ROW 2: CONDITIONAL REVEAL */}
        <AnimatePresence>
          {isVisible && (
            <motion.div 
              initial={{ height: 0, opacity: 0, y: -20 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center justify-center md:justify-start gap-8 pb-4 overflow-hidden"
            >
              {navLinks.map((link) => (
                
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  className="text-white/70 hover:text-[#C8102E] text-[10px] md:text-xs uppercase tracking-[2px] font-bold transition-all duration-300 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
