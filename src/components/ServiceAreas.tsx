import { useState } from "react";
import { MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const missouri = [
  "Plaza, KC", "Brookside, KC", "Waldo, KC", "Westport, KC", 
  "Northland, KC", "Blue Springs", "Independence", "Lee's Summit",
];

const kansas = [
  "Mission Hills", "Prairie Village", "Leawood", "Overland Park", 
  "Olathe", "Lenexa", "Shawnee", "Gardner", "Fairway", "Roeland Park"
];

const ServiceAreas = () => {
  const [activeState, setActiveState] = useState<string | null>("Missouri");

  return (
    <section className="bg-[#0a192f] py-16 md:py-24 overflow-hidden">
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.3);
          border-radius: 10px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
            Our <span className="text-gold">Territory</span>
          </h2>
        </div>

        {/* MOBILE VERSION: THE "SMART ACCORDION" */}
        <div className="md:hidden space-y-4">
          {[
            { name: "Missouri", areas: missouri },
            { name: "Kansas", areas: kansas }
          ].map((state) => (
            <div key={state.name} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
              <button 
                onClick={() => setActiveState(activeState === state.name ? null : state.name)}
                className="w-full flex items-center justify-between p-6 text-white font-bold text-xl"
              >
                <span className={activeState === state.name ? "text-gold" : "text-white"}>{state.name} Metro</span>
                <ChevronDown className={`transition-transform duration-300 ${activeState === state.name ? "rotate-180 text-gold" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeState === state.name && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 grid grid-cols-2 gap-3 border-t border-white/5">
                      {state.areas.map(area => (
                        <div key={area} className="flex items-center gap-2 text-gray-400 text-sm py-1">
                          <div className="w-1 h-1 bg-gold rounded-full" />
                          {area}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <a href="#contact" className="block w-full bg-gold text-navy py-4 rounded-2xl font-bold text-center">Book Local Service</a>
        </div>

        {/* DESKTOP VERSION: BENTO REMAINS (as it works well there) */}
        <div className="hidden md:grid grid-cols-4 gap-4 auto-rows-[100px]">
          {/* Missouri Card */}
          <div className="col-span-2 row-span-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
               <MapPin size={120} className="text-gold" />
             </div>
             <p className="text-white text-3xl font-bold mb-6">Missouri Metro</p>
             <div className="grid grid-cols-2 gap-y-2">
               {missouri.slice(0, 8).map(a => <span key={a} className="text-gray-400 text-sm flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"/>{a}</span>)}
             </div>
          </div>

          {/* Kansas Card with Scroll */}
          <div className="col-span-2 row-span-3 bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col overflow-hidden">
            <p className="text-white text-3xl font-bold mb-4">Kansas Elite</p>
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar mask-gradient">
              <div className="space-y-3">
                {kansas.map(a => (
                  <div key={a} className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-300 text-sm">{a}</span>
                    <ArrowRight size={12} className="text-gold" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & CTA */}
          <div className="col-span-1 row-span-1 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center">
            <span className="text-gold text-2xl font-bold">15+</span>
            <span className="text-white/40 text-[10px] uppercase tracking-widest">Cities</span>
          </div>
          <a href="#contact" className="col-span-1 row-span-1 bg-gold rounded-3xl flex items-center justify-center hover:bg-white transition-colors">
            <p className="text-navy font-bold text-center leading-tight">Book<br/>Local</p>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServiceAreas;
