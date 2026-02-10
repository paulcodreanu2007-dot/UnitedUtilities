import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Clock, CloudRain, Award, Shield, ArrowRight } from "lucide-react";

const benefits = [
  {
    id: 1,
    Icon: Clock,
    headline: "Your Project, On Your Timeline",
    body: "Transparent scheduling means you'll know exactly when we arrive and when your project wraps up—from day-one repairs to luxury remodels.",
    gridClass: "md:col-span-2 md:row-span-3",
  },
  {
    id: 2,
    Icon: CloudRain,
    headline: "Built for KC's Toughest Seasons",
    body: "Get construction and mechanical systems engineered for Kansas City's extremes—no shortcuts, no callbacks.",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 3,
    Icon: Award,
    headline: "Woman-Owned Integrity",
    body: "When Alicia Amos stakes her name on your project, you're getting a handshake promise and a reputation you can trust.",
    gridClass: "md:col-span-2 md:row-span-3",
  },
  {
    id: 4,
    Icon: Shield,
    headline: "Licensed & Accountable",
    body: "We carry full licensing across MO & KS and a track record of passing every single inspection on the first try.",
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
    <section id="why-us" className="py-16 md:py-24 bg-[#0a192f] overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
            The <span className="text-gold">Alicia Amos</span> Difference
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
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
                <b.Icon size={48} className="text-gold mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{b.headline}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{b.body}</p>
                <div className="mt-auto pt-8">
                  <div className="h-1 w-12 bg-gold/30 rounded-full" />
                </div>
              </div>
            ))}
          </div>
          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-8">
            {benefits.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all duration-300 ${activeIdx === i ? "w-8 bg-gold" : "w-2 bg-white/20"}`} />
            ))}
          </div>
        </div>

        {/* DESKTOP: BENTO REVEAL (Centered Hardware Style) */}
        <div className="hidden md:grid grid-cols-4 gap-6 auto-rows-[120px]">
          {benefits.map((b) => (
            <motion.div
              key={b.id}
              whileHover={{ y: -5 }}
              className={`${b.gridClass} bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center group hover:border-gold/50 transition-all duration-500 shadow-2xl`}
            >
              <b.Icon size={52} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{b.headline}</h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 max-w-xs">{b.body}</p>
              <div className="mt-8 h-1 w-12 bg-gold/30 rounded-full group-hover:w-24 group-hover:bg-gold transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
