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
    bullets: ["Water, Sewer & Gas Lines", "Municipal Permit Coordination", "Pressure Testing & Inspection-Ready"],
    cta: "Request Quote",
    gridClass: "col-span-2 row-span-3",
  },
  {
    id: 2,
    Icon: Cable,
    headline: "Fiber Optic & Telecom",
    h3: "Precision Trenching",
    body: "Specialized trenching that protects delicate fiber cable. Your community gets high-speed connectivity installed on schedule and on spec.",
    bullets: ["Directional Boring & Open-Cut", "Fiber Cable Placement", "GPS Mapping & As-Builts"],
    cta: "",
    gridClass: "col-span-2 row-span-2",
  },
  {
    id: 3,
    Icon: Droplets,
    headline: "Drainage Solutions",
    h3: "Water Management",
    body: "Engineered drainage that eliminates standing water and protects your foundation. French drains, catch basins, and complete regrading.",
    bullets: ["Site Evaluation & Planning", "French Drain Installation", "Grading & Erosion Control"],
    cta: "Fix Drainage",
    gridClass: "col-span-2 row-span-3",
  },
  {
    id: 4,
    Icon: Truck,
    headline: "Site Prep & Excavation",
    h3: "Job-Ready Sites",
    body: "Professional excavation, grading, and trenching. You get a site that's ready for the next phase on day one.",
    bullets: ["Land Clearing & Grading", "Foundation Trenching", "Compaction Testing"],
    cta: "",
    gridClass: "col-span-2 row-span-2",
  },
];

const Services = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollLeft / (container.offsetWidth * 0.8)); 
    if (index !== activeIdx && index >= 0 && index < services.length) setActiveIdx(index);
  };

  const handleCTA = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
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
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-5 pb-4 no-scrollbar snap-x snap-mandatory px-[10vw]"
          >
            {services.map((s) => (
              <div key={s.id} className="min-w-[80vw] snap-center bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] flex flex-col shadow-2xl">
                <s.Icon size={48} className="text-[#C8102E] mb-6" />
                <p className="text-2xl font-bold text-white mb-1">{s.headline}</p>
                <h3 className="text-white/60 text-[10px] uppercase tracking-[2px] font-bold mb-4">{s.h3}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{s.body}</p>
                <ul className="space-y-3 mb-8">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-center gap-2 text-white/70 text-xs font-medium">
                      <CheckCircle size={14} className="text-[#C8102E]" /> {b}
                    </li>
                  ))}
                </ul>
                <button onClick={handleCTA} className="mt-auto w-full bg-[#C8102E] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#A00D24] transition-all">
                  {s.cta || "Get Quote"} <ArrowRight size={18} />
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

        {/* DESKTOP: BENTO REVEAL (CENTERED) */}
        <div className="hidden md:grid grid-cols-4 gap-6 auto-rows-[120px]">
          {services.map((s) => (
            <motion.div
              key={s.id}
              whileHover={{ y: -5 }}
              className={`${s.gridClass} bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center group hover:border-[#C8102E]/50 transition-all duration-500 shadow-2xl`}
            >
              <s.Icon size={52} className="text-[#C8102E] mb-6 group-hover:scale-110 transition-transform duration-500" />
              
              <p className="text-3xl font-bold text-white mb-2 tracking-tight">{s.headline}</p>
              <h3 className="text-white/60 text-xs uppercase tracking-[3px] font-bold mb-4">{s.h3}</h3>
              <p className="text-gray-300 leading-relaxed mb-8 group-hover:text-white transition-colors duration-300 max-w-xs">{s.body}</p>
              
              {s.cta ? (
                <button onClick={handleCTA} className="text-[#C8102E] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  {s.cta} <ArrowRight size={20} />
                </button>
              ) : (
                <div className="h-1 w-12 bg-[#C8102E]/30 rounded-full group-hover:w-24 group-hover:bg-[#C8102E] transition-all duration-500" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
