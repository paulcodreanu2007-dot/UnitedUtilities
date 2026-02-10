import { useState } from "react";
import { MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const indianaPrimary = [
  "Bloomington", "Ellettsville", "Bedford", "Martinsville", 
  "Columbus", "Nashville", "Spencer", "Mitchell",
];

const indianaExtended = [
  "Greenwood", "Franklin", "Mooresville", "Seymour", 
  "Paoli", "Bloomfield", "Linton", "Clear Creek", "Smithville", "Unionville"
];

const ServiceAreas = () => {
  const [activeState, setActiveState] = useState<string | null>("Primary");

  return (
    <section id="territory" className="bg-[#1a1a1a] py-16 md:py-24 overflow-hidden">
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(200, 16, 46, 0.3);
          border-radius: 10px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
            Our <span className="text-[#C8102E]">Territory</span>
          </h2>
          <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Service across Southern Indiana</p>
        </div>

        {/* MOBILE VERSION: THE "SMART ACCORDION" */}
        <div className="md:hidden space-y-4">
          {[
            { name: "Primary", label: "Core Bloomington Area", areas: indianaPrimary },
            { name: "Extended", label: "Regional Coverage", areas: indianaExtended }
          ].map((region) => (
            <div key={region.name} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
              <button 
                onClick={() => setActiveState(activeState === region.name ? null : region.name)}
                className="w-full flex items-center justify-between p-6 text-white font-bold text-xl"
              >
                <span className={activeState === region.name ? "text-[#C8102E]" : "text-white"}>{region.label}</span>
                <ChevronDown className={`transition-transform duration-300 ${activeState === region.name ? "rotate-180 text-[#C8102E]" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeState === region.name && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 grid grid-cols-2 gap-3 border-t border-white/5">
                      {region.areas.map(area => (
                        <div key={area} className="flex items-center gap-2 text-gray-400 text-sm py-1">
                          <div className="w-1 h-1 bg-[#C8102E] rounded-full" />
                          {area}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <a href="#contact" className="block w-full bg-[#C8102E] text-white py-4 rounded-2xl font-bold text-center uppercase tracking-wider">Book Field Service</a>
        </div>

        {/* DESKTOP VERSION: BENTO REMAINS */}
        <div className="hidden md:grid grid-cols-4 gap-4 auto-rows-[100px]">
          {/* Primary Hub Card */}
          <div className="col-span-2 row-span-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
               <MapPin size={120} className="text-[#C8102E]" />
             </div>
             <p className="text-white text-3xl font-bold mb-6 italic">Bloomington Hub</p>
             <div className="grid grid-cols-2 gap-y-2">
               {indianaPrimary.map(a => <span key={a} className="text-gray-400 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-[#C8102E] rounded-full"/>{a}</span>)}
             </div>
          </div>

          {/* Extended Coverage Card with Scroll */}
          <div className="col-span-2 row-span-3 bg-gradient-to-br from-[#C8102E]/10 to-transparent border border-[#C8102E]/30 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col overflow-hidden">
            <p className="text-white text-3xl font-bold mb-4">Regional Coverage</p>
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar mask-gradient">
              <div className="space-y-3">
                {indianaExtended.map(a => (
                  <div key={a} className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-300 text-sm">{a}</span>
                    <ArrowRight size={12} className="text-[#C8102E]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & CTA */}
          <div className="col-span-1 row-span-1 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center">
            <span className="text-[#C8102E] text-2xl font-bold italic">20+</span>
            <span className="text-white/40 text-[10px] uppercase tracking-widest font-black">Districts</span>
          </div>
          <a href="#contact" className="col-span-1 row-span-1 bg-[#C8102E] rounded-3xl flex items-center justify-center hover:bg-white group transition-all duration-300">
            <p className="text-white group-hover:text-[#C8102E] font-black text-center leading-tight uppercase tracking-tighter">Request<br/>Dispatch</p>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServiceAreas;
