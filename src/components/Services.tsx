import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Wrench, Cable, Droplets, Truck, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    Icon: Wrench,
    headline: "Utility Infrastructure",
    h3: "Built to Last",
    body: "Expert installation of water, sewer, and gas lines. You get infrastructure that passes inspection and performs flawlessly for decades.",
    bullets: ["Water, Sewer & Gas Lines", "Municipal Permit Coordination", "Inspection-Ready"],
    cta: "Request Quote",
  },
  {
    id: 2,
    Icon: Cable,
    headline: "Fiber Optic & Telecom",
    h3: "Precision Trenching",
    body: "Specialized trenching that protects delicate fiber cable. Your community gets high-speed connectivity installed on schedule and on spec.",
    bullets: ["Directional Boring", "Fiber Placement", "GPS Mapping"],
    cta: "View Tech",
  },
  {
    id: 3,
    Icon: Droplets,
    headline: "Drainage Solutions",
    h3: "Water Management",
    body: "Engineered drainage that eliminates standing water and protects your foundation. French drains, catch basins, and complete regrading.",
    bullets: ["Site Evaluation", "French Drain Install", "Erosion Control"],
    cta: "Fix Drainage",
  },
  {
    id: 4,
    Icon: Truck,
    headline: "Site Prep & Excavation",
    h3: "Job-Ready Sites",
    body: "Professional excavation, grading, and trenching. You get a site that's ready for the next phase on day one.",
    bullets: ["Land Clearing", "Foundation Trenching", "Compaction Testing"],
    cta: "Prep Site",
  },
];

const Services = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // REPAIRED BUTTON LOGIC: Single-click scroll
  const handleCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollLeft / (container.offsetWidth * 0.8));
    if (index !== activeIdx && index >= 0 && index < services.length) setActiveIdx(index);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-[#1a1a1a] overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter" style={{ fontFamily: "'Georgia', serif" }}>
            Underground Expertise for <span className="text-[#C8102E]">Every Project</span>
          </h2>
          <div className="w-24 h-1 bg-[#C8102E] mx-auto rounded-full" />
        </div>

        {/* MOBILE: LUXURY SCROLL */}
        <div className="md:hidden relative">
          <div 
            ref={scrollRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto gap-5 pb-4 no-scrollbar snap-x snap-mandatory px-[10vw]"
          >
            {services.map((s) => (
              <div key={s.id} className="min-w-[80vw] snap-center bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] flex flex-col shadow-2xl">
                <s.Icon size={48} className="text-[#C8102E] mb-6" />
                <p className="text-2xl font-bold text-white mb-1">{s.headline}</p>
                <h3 className="text-white/60 text-[10px] uppercase tracking-[2px] font-bold mb-4">{s.h3}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed h-[60px] line-clamp-3">{s.body}</p>
                <ul className="space-y-3 mb-8">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-center gap-2 text-white/70 text-xs font-medium">
                      <CheckCircle size={14} className="text-[#C8102E]" /> {b}
                    </li>
                  ))}
                </ul>
                <button onClick={handleCTA} className="mt-auto w-full bg-[#C8102E] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                  {s.cta} <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {services.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all duration-300 ${activeIdx === i ? "w-8 bg-[#C8102E]" : "w-2 bg-white/20"}`} />
            ))}
          </div>
        </div>

        {/* DESKTOP: BALANCED GRID */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.id}
              whileHover={{ y: -5 }}
              className="col-span-1 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 flex flex-col items-center justify-between text-center group hover:border-[#C8102E]/50 transition-all duration-500 shadow-2xl h-full min-h-[480px]"
            >
              <div className="flex flex-col items-center">
                <s.Icon size={52} className="text-[#C8102E] mb-6 group-hover:scale-110 transition-transform duration-500" />
                <p className="text-2xl font-bold text-white mb-2 tracking-tight">{s.headline}</p>
                <h3 className="text-white/60 text-[10px] uppercase tracking-[3px] font-bold mb-6">{s.h3}</h3>
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300 text-sm">{s.body}</p>
              </div>

              <div className="w-full">
                <ul className="space-y-3 mb-8 text-left inline-block">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-center gap-2 text-white/50 text-[11px] font-medium">
                      <CheckCircle size={12} className="text-[#C8102E]" /> {b}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={handleCTA} 
                  className="w-full py-3 bg-transparent border border-[#C8102E]/50 text-[#C8102E] rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-[#C8102E] group-hover:text-white transition-all duration-300"
                >
                  {s.cta} <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
