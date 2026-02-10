import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg"; 

const CountingNumber = ({ value, duration = 1.5 }: { value: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const numericPart = value.replace(/\D/g, '');
    const target = parseInt(numericPart) || 0; 
    if (target === 0) { setDisplayValue(0); return; }

    let start = 0;
    const end = target;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(totalMiliseconds / end, 10); 

    const timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  const suffix = value.replace(/[0-9]/g, '');
  const isPrefix = /^\D/.test(value);

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

  // REPAIRED BUTTON LOGIC: Single-click scroll
  const handleCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1a1a] pt-28 pb-20 lg:py-0">
      
      {/* Background Image */}
      <motion.div className="absolute inset-0 w-full h-[130%] -top-[15%]" style={{ y: backgroundY }}>
        <img 
            src={heroBg} 
            alt="Heavy excavation equipment preparing a commercial site in Bloomington Indiana" 
            className="w-full h-full object-cover" 
            width={1920} 
            height={1088} 
            loading="eager" 
        />
      </motion.div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 lg:via-[#1a1a1a]/85 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-3 text-center lg:text-left text-white mt-4 lg:mt-0">
            <div className="inline-flex items-center gap-2 bg-[#C8102E]/10 backdrop-blur-md border border-[#C8102E]/30 px-4 py-2 rounded-full mb-6">
              <CheckCircle size={16} className="text-[#C8102E]" />
              <span className="text-xs md:text-sm font-semibold text-[#C8102E] uppercase tracking-wider">Bonded & Insured Indiana Contractor</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
              <span className="text-[#C8102E]" style={{ fontFamily: "'Georgia', serif" }}>Precision</span> Below.<br/>
              <span className="text-white">Excellence</span> Above.
            </h1>
            
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Southern Indiana's specialists in underground utilities, commercial site prep, and professional excavation.
            </p>
            
            <button onClick={handleCTA} className="w-full sm:w-auto bg-[#C8102E] text-white px-10 py-4 rounded-xl font-bold shadow-2xl hover:bg-[#A00D24] transition-all active:scale-95">
              Get Your Project Quote
            </button>
          </div>

          {/* Right Content - UPDATED GLASS CARD (Mainline Utility Project) */}
          <div className="w-full lg:col-span-2 max-w-md lg:max-w-none mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative p-[1px] rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-b from-white/40 via-white/10 to-transparent shadow-2xl"
            >
              <div className="relative bg-[#1a1a1a]/40 backdrop-blur-[30px] rounded-[1.4rem] lg:rounded-[2.4rem] p-5 lg:p-10 overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                
                <div className="relative z-10 text-center">
                  <h3 className="text-white/80 font-medium text-xs lg:text-lg mb-4 lg:mb-8 tracking-widest uppercase">Mainline Water & Sewer</h3>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-4 lg:grid-cols-2 gap-2 lg:gap-10 divide-x divide-white/10 lg:divide-none">
                    
                    <div className="space-y-1 px-1 lg:px-0">
                      <div className="text-xl lg:text-4xl font-bold text-[#C8102E]"><CountingNumber value="18" /></div>
                      <div className="text-[8px] lg:text-[10px] text-white/40 uppercase tracking-widest">Feet Deep</div>
                    </div>
                    
                    <div className="space-y-1 px-1 lg:px-0">
                      <div className="text-xl lg:text-4xl font-bold text-[#C8102E]"><CountingNumber value="450" /></div>
                      <div className="text-[8px] lg:text-[10px] text-white/40 uppercase tracking-widest">Linear Ft</div>
                    </div>
                    
                    <div className="space-y-1 px-1 lg:px-0">
                      <div className="text-xl lg:text-4xl font-bold text-[#C8102E]"><CountingNumber value="0" /></div>
                      <div className="text-[8px] lg:text-[10px] text-white/40 uppercase tracking-widest">Incidents</div>
                    </div>
                    
                    <div className="space-y-1 px-1 lg:px-0">
                      <div className="text-xl lg:text-4xl font-bold text-[#C8102E]"><CountingNumber value="100%" /></div>
                      <div className="text-[8px] lg:text-[10px] text-white/40 uppercase tracking-widest">Pressure Test</div>
                    </div>
                  
                  </div>

                  {/* Testimonial Section */}
                  <div className="mt-4 lg:mt-10 pt-4 lg:pt-8 border-t border-white/10">
                    <p className="text-xs lg:text-sm text-white/60 italic leading-relaxed">
                      "Clean trenches, expert pipe laying, and they hit their depth specs every time. United is our go-to for site prep."
                    </p>
                    <p className="text-[10px] lg:text-[11px] text-[#C8102E] mt-2 lg:mt-4 font-bold tracking-widest uppercase">— Regional Development Group</p>
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
