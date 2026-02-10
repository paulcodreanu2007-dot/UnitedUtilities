import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Clock, Drill, Users, Shield } from "lucide-react";

const benefits = [
  {
    id: 1,
    Icon: Clock,
    headline: "On Schedule, Every Time",
    body: "Transparent scheduling means you'll know exactly when trenching starts, when utilities go live, and when final restoration is complete.",
    gridClass: "md:col-span-2 md:row-span-3",
  },
  {
    id: 2,
    Icon: Drill,
    headline: "Built to Last Underground",
    body: "Your infrastructure faces shifting soil and freeze-thaw cycles. You get utility installations engineered for Indiana's geology—proper depth, correct bedding, zero shortcuts.",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 3,
    Icon: Users,
    headline: "Locally Operated, Community-Focused",
    body: "You're not getting a corporate subcontractor—you're getting a Bloomington-based team that answers your calls directly.",
    gridClass: "md:col-span-2 md:row-span-3",
  },
  {
    id: 4,
    Icon: Shield,
    headline: "Licensed & Safety-Certified",
    body: "Full excavation licensing, comprehensive liability coverage, and OSHA compliance on every job site. We pass utility inspections on the first call.",
    gridClass: "md:col-span-2 md:row-span-2",
  },
];

const WhyChooseUs = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const index = Math.round(container.scrollLeft / (container.offsetWidth * 0.8));
    if (index !== activeIdx && index >= 0 && index < benefits.length) setActiveIdx(index);
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#1a1a1a] overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
            Why Bloomington Projects Start with <span className="text-[#C8102E]">United Utilities</span>
          </h2>
          <div className="w-24 h-1 bg-[#C8102E] mx-auto rounded-full" />
        </div>

        {/* MOBILE: LUXURY SCROLL (80vw, Centered, No Fade) */}
        <div className="md:hidden relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-5 pb-4 no-scrollbar snap-x snap-mandatory px-[10vw]"
          >
            {benefits.map((b) => (
              <div key={b.id} className="min-w-[80vw] snap-center bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] flex flex-col shadow-2xl">
                <b.Icon size={48} className="text-[#C8102E] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{b.headline}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{b.body}</p>
                <div className="mt-auto pt-8">
                  <div className="h-1 w-12 bg-[#C8102E]/30 rounded-full" />
                </div>
              </div>
            ))}
          </div>
          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-8">
            {benefits.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all duration-300 ${activeIdx === i ? "w-8 bg-[#C8102E]" : "w-2 bg-white/20"}`} />
            ))}
          </div>
        </div>

        {/* DESKTOP: BENTO REVEAL (Centered Hardware Style) */}
        <div className="hidden md:grid grid-cols-4 gap-6 auto-rows-[120px]">
          {benefits.map((b) => (
            <motion.div
              key={b.id}
              whileHover={{ y: -5 }}
              className={`${b.gridClass} bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center group hover:border-[#C8102E]/50 transition-all duration-500 shadow-2xl`}
            >
              <b.Icon size={52} className="text-[#C8102E] mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{b.headline}</h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 max-w-xs">{b.body}</p>
              <div className="mt-8 h-1 w-12 bg-[#C8102E]/30 rounded-full group-hover:w-24 group-hover:bg-[#C8102E] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
