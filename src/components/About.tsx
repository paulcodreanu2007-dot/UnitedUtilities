import { motion } from "framer-motion";
import { CheckCircle, Shield, HardHat, Construction } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

// --- THE FIX: Importing your local file from assets ---
import ownerPortrait from "@/assets/owner-portrait.jpg"; 

const badges = [
  { Icon: CheckCircle, text: "Licensed", hasCounter: false },
  { Icon: Shield, text: "Insured", hasCounter: false },
  { Icon: HardHat, text: "OSHA Certified", hasCounter: false },
  { Icon: Construction, text: "Projects Done", hasCounter: true, count: 250 },
];

const CounterBadge = ({ Icon, text, count }: { Icon: any; text: string; count: number }) => {
  const { count: animatedCount, ref } = useCountUp({ end: count, duration: 1500 });
  return (
    <div ref={ref} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
      <Icon size={14} className="text-[#C8102E]" />
      <span className="text-white font-medium text-[10px] uppercase tracking-wider">{animatedCount}+ {text}</span>
    </div>
  );
};

const About = () => (
  <section id="about" className="relative bg-[#1a1a1a] overflow-hidden py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="relative flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-12 items-center">
        
        {/* IMAGE LAYER */}
        <div className="relative w-full lg:col-span-5 mb-[-60px] lg:mb-0 z-0 lg:z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src={ownerPortrait}
              alt="United Utilities Professional Excavation"
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Mobile Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent lg:hidden" />
          </motion.div>
        </div>

        {/* CONTENT LAYER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative lg:col-span-7 z-10"
        >
          <div className="bg-white/5 lg:bg-transparent backdrop-blur-2xl lg:backdrop-blur-none p-8 lg:p-0 rounded-[2.5rem] border border-white/10 lg:border-none shadow-2xl lg:shadow-none">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              United Utilities:<br/> <span className="text-[#C8102E]">The Foundation of Bloomington</span>
            </h2>
            
            <div className="text-sm md:text-lg text-gray-300 leading-relaxed space-y-4 max-w-xl">
              <p>
                Bloomington businesses and municipalities need infrastructure that is built to last. We prioritize technical precision, site safety, and long-term durability in every trench we dig.
              </p>
              <p className="hidden md:block">
                From fiber optic networks to complex water management systems, we bring a level of grit and professionalism that ensures your project stays on track and under budget.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {badges.map(({ Icon, text, hasCounter, count }) => (
                hasCounter ? (
                  <CounterBadge key={text} Icon={Icon} text={text} count={count!} />
                ) : (
                  <div key={text} className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Icon size={14} className="text-[#C8102E]" />
                    <span className="text-white/90 font-medium text-[10px] uppercase tracking-wider">{text}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default About;
