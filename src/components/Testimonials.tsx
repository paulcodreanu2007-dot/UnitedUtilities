import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Remodeled our kitchen in 6 weeks—on time and under budget. Incredible attention to detail.",
    attribution: "Jennifer M.",
    location: "Kansas City, MO"
  },
  {
    quote: "Emergency plumbing arrived in 90 minutes at midnight. Reliability you can't price.",
    attribution: "Robert T.",
    location: "Overland Park, KS"
  },
  {
    quote: "The only contractor who asked about OUR vision first. The result exceeded all expectations.",
    attribution: "The Nguyen Family",
    location: "Leawood, KS"
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    // Auto-rotate every 6 seconds
    const interval = setInterval(() => emblaApi.scrollNext(), 6000);
    const pause = () => clearInterval(interval);
    const el = emblaApi.rootNode();
    el.addEventListener("mouseenter", pause);
    el.addEventListener("touchstart", pause, { passive: true });

    return () => {
      clearInterval(interval);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("touchstart", pause);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-[#0a192f] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
            Trusted by <span className="text-gold">Your Neighbors</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full opacity-80" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* CAROUSEL TRACK */}
          <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                  {/* GLASS CARD */}
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-16 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center transition-all duration-500 hover:border-gold/30">
                    
                    {/* ICON BENTO STYLE */}
                    <div className="bg-gold/10 p-4 rounded-full mb-6 md:mb-10">
                      <Quote size={32} className="text-gold md:w-10 md:h-10" />
                    </div>
                    
                    {/* QUOTE TEXT */}
                    <p className="text-lg md:text-3xl text-gray-200 leading-snug md:leading-relaxed mb-8 md:mb-12 italic font-light max-w-3xl">
                      "{t.quote}"
                    </p>
                    
                    {/* ATTRIBUTION */}
                    <div className="flex flex-col items-center">
                      <p className="text-white font-bold text-lg md:text-xl tracking-wide">
                        {t.attribution}
                      </p>
                      <p className="text-gold/80 text-[10px] md:text-sm uppercase tracking-[3px] mt-2 font-bold">
                        {t.location}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP NAVIGATION ARROWS */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 text-white/20 hover:text-gold transition-all hidden lg:block"
            aria-label="Previous slide"
          >
            <ChevronLeft size={56} strokeWidth={1} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 text-white/20 hover:text-gold transition-all hidden lg:block"
            aria-label="Next slide"
          >
            <ChevronRight size={56} strokeWidth={1} />
          </button>

          {/* LUXURY PILL INDICATORS */}
          <div className="flex justify-center gap-3 mt-10 md:mt-14">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === selectedIndex ? "w-10 bg-gold" : "w-3 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
