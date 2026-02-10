import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg"; // <--- RESTORED YOUR IMAGE

// --- SAFE COUNTING COMPONENT (Prevents the White Screen Crash) ---
const CountingNumber = ({ value, duration = 1.5 }: { value: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // 1. Extract number safely
    const numericPart = value.replace(/\D/g, '');
    const target = parseInt(numericPart) || 0; 

    // 2. Prevent crash if target is 0 or invalid
    if (target === 0) {
      setDisplayValue(0);
      return;
    }

    let start = 0;
    const end = target;
    const totalMiliseconds = duration * 1000;
    // 3. Math.max prevents "Infinity" crash if end is 0
    const incrementTime = Math.max(totalMiliseconds / end, 10); 

    const timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  // Re-attach non-numeric characters for display (e.g. "k", "+", "%")
  const suffix = value.replace(/[0-9]/g, '');
  const isPrefix = /^\D/.test(value); // Detect if symbol is at start (like $)

  return (
    <span>
      {isPrefix ? suffix : ""}{displayValue}{!isPrefix ? suffix : ""}
    </span>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const handleCTA = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a192f] pt-28 pb-20 lg:py-0">
      
      {/* Background Image - RESTORED */}
      <motion.div className="absolute inset-0 w-full h-[130%] -top-[15%]" style={{ y: backgroundY }}>
        <img 
            src={heroBg} 
            alt="Luxury home" 
            className="w-full h-full object-cover" 
            width={1920} 
            height={1088} 
            loading="eager" 
        />
      </motion.div>

      {/* Navy Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#0a192f] via-[#0a192f]/90 lg:via-[#0a192f]/80 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          
          {/* Left Content (Desktop: Unchanged / Mobile: Center Aligned) */}
          <div className="lg:col-span-3 text-center lg:text-left text-white mt-4 lg:mt-0">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-md border border-gold/30 px-4 py-2 rounded-full mb-6">
              <CheckCircle size={16} className="text-gold" />
              <span className="text-xs md:text-sm font-semibold text-gold uppercase tracking-wider">Licensed & Insured</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
              <span className="text-gold" style={{ fontFamily: "'Georgia', serif" }}>Craftsmanship</span><br/>That Lasts
            </h1>
            
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Luxury remodels and emergency repairs built to last a lifetime.
            </p>
            
            <button onClick={handleCTA} className="w-full sm:w-auto bg-gold text-navy px-10 py-4 rounded-xl font-bold shadow-2xl hover:bg-white transition-all active:scale-95">
              Get Your Free Consultation
            </button>
          </div>

          {/* Right Content - THE GLASS CARD */}
          <div className="w-full lg:col-span-2 max-w-md lg:max-w-none mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative p-[1px] rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-b from-white/40 via-white/10 to-transparent shadow-2xl"
            >
              {/* THE GLASS BODY */}
              {/* Mobile: Reduced padding (p-5), Desktop: Original padding (lg:p-10) */}
              <div className="relative bg-[#0a192f]/40 backdrop-blur-[30px] rounded-[1.4rem] lg:rounded-[2.4rem] p-5 lg:p-10 overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                
                <div className="relative z-10 text-center">
                  <h3 className="text-white/80 font-medium text-xs lg:text-lg mb-4 lg:mb-8 tracking-widest uppercase">Project Highlight</h3>
                  
                  {/* Stats Grid - MOBILE REFACTOR */}
                  {/* Mobile: grid-cols-4 (horizontal strip) + dividers */}
                  {/* Desktop: grid-cols-2 (square) + no dividers */}
                  <div className="grid grid-cols-4 lg:grid-cols-2 gap-2 lg:gap-10 divide-x divide-white/10 lg:divide-none">
                    
                    <div className="space-y-1 px-1 lg:px-0">
                      <div className="text-xl lg:text-4xl font-bold text-gold"><CountingNumber value="6" /></div>
                      <div className="text-[8px] lg:text-[10px] text-white/40 uppercase tracking-widest">Weeks</div>
                    </div>
                    
                    <div className="space-y-1 px-1 lg:px-0">
                      <div className="text-xl lg:text-4xl font-bold text-gold"><CountingNumber value="20k" /></div>
                      <div className="text-[8px] lg:text-[10px] text-white/40 uppercase tracking-widest">Budget</div>
                    </div>
                    
                    <div className="space-y-1 px-1 lg:px-0">
                      <div className="text-xl lg:text-4xl font-bold text-gold"><CountingNumber value="5★" /></div>
                      <div className="text-[8px] lg:text-[10px] text-white/40 uppercase tracking-widest">Rating</div>
                    </div>
                    
                    <div className="space-y-1 px-1 lg:px-0">
                      <div className="text-xl lg:text-4xl font-bold text-gold"><CountingNumber value="+35%" /></div>
                      <div className="text-[8px] lg:text-[10px] text-white/40 uppercase tracking-widest">Value</div>
                    </div>
                  
                  </div>

                  {/* Testimonial Section */}
                  <div className="mt-4 lg:mt-10 pt-4 lg:pt-8 border-t border-white/10">
                    <p className="text-xs lg:text-sm text-white/60 italic leading-relaxed">
                      "They finished early and exceeded every expectation."
                    </p>
                    <p className="text-[10px] lg:text-[11px] text-gold mt-2 lg:mt-4 font-bold tracking-widest uppercase">— The Martinez Family</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
