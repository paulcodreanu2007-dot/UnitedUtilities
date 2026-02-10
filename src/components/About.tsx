import { motion } from "framer-motion";
import { CheckCircle, Shield, Award, TrendingUp } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import aliciaPortrait from "@/assets/alicia-portrait.jpg";

const badges = [
  { Icon: CheckCircle, text: "Licensed", hasCounter: false },
  { Icon: Shield, text: "Insured", hasCounter: false },
  { Icon: Award, text: "WBE Owned", hasCounter: false },
  { Icon: TrendingUp, text: "Projects", hasCounter: true, count: 500 },
];

const CounterBadge = ({ Icon, text, count }: { Icon: any; text: string; count: number }) => {
  const { count: animatedCount, ref } = useCountUp({ end: count, duration: 1500 });
  return (
    <div ref={ref} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
      <Icon size={14} className="text-gold" />
      <span className="text-white font-medium text-[10px] uppercase tracking-wider">{animatedCount}+ {text}</span>
    </div>
  );
};

const About = () => (
  <section id="about" className="relative bg-[#0a192f] overflow-hidden py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="relative flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-12 items-center">
        
        {/* IMAGE LAYER */}
        <div className="relative w-full lg:col-span-5 mb-[-60px] lg:mb-0 z-0 lg:z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-3xl"
          >
            <img
              src={aliciaPortrait}
              alt="Alicia Amos"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Mobile Gradient Overlay: Fades the bottom of the image into the navy background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent lg:hidden" />
          </motion.div>
        </div>

        {/* CONTENT LAYER - Floating Glass Card on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative lg:col-span-7 z-10"
        >
          {/* Mobile: Glass Card Look | Desktop: Clean Typography */}
          <div className="bg-white/5 lg:bg-transparent backdrop-blur-2xl lg:backdrop-blur-none p-8 lg:p-0 rounded-[2.5rem] border border-white/10 lg:border-none shadow-2xl lg:shadow-none">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              Meet Alicia Amos: <br/> <span className="text-gold">Building Better</span>
            </h2>
            
            <div className="text-sm md:text-lg text-gray-300 leading-relaxed space-y-4 max-w-xl">
              <p>
                Kansas City families and businesses need a contractor who listens first, then delivers exceptional work without excuses. 
              </p>
              <p className="hidden md:block">
                Alicia built her reputation one meticulous project at a time—earning respect through craftsmanship, not cutting corners.
              </p>
            </div>

            {/* Badges as "Floating Pills" */}
            <div className="flex flex-wrap gap-2 mt-8">
              {badges.map(({ Icon, text, hasCounter, count }) => (
                hasCounter ? (
                  <CounterBadge key={text} Icon={Icon} text={text} count={count!} />
                ) : (
                  <div key={text} className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Icon size={14} className="text-gold" />
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
