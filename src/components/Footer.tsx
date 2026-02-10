import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-12 lg:py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Branding */}
          <div className="text-center lg:text-left space-y-4">
            <div>
              <p className="text-[#C8102E] text-2xl font-black tracking-tighter uppercase" style={{ fontFamily: "'Georgia', serif" }}>
                United Utilities
              </p>
              <div className="h-0.5 w-12 bg-[#C8102E]/50 mx-auto lg:mx-0 mt-1" />
            </div>
            <p className="text-[10px] md:text-xs uppercase tracking-[3px] leading-relaxed opacity-60 font-bold">
              Southern Indiana's <br className="hidden lg:block"/> Infrastructure Experts
            </p>
          </div>

          {/* Quick Links & Expertise */}
          <div className="grid grid-cols-2 gap-4 lg:contents">
            <div className="pl-4 lg:pl-0">
              <h4 className="text-white font-bold text-xs uppercase tracking-[2px] mb-6">Navigation</h4>
              <ul className="space-y-4 text-[13px]">
                {["Home", "Services", "About", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => { e.preventDefault(); handleScroll(`#${link.toLowerCase()}`); }}
                      className="hover:text-[#C8102E] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="h-px w-0 bg-[#C8102E] group-hover:w-3 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pl-4 lg:pl-0">
              <h4 className="text-white font-bold text-xs uppercase tracking-[2px] mb-6">Expertise</h4>
              <ul className="space-y-4 text-[13px]">
                {["Excavation", "Utilities", "Site Prep", "Emergency"].map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      onClick={(e) => { e.preventDefault(); handleScroll("#services"); }}
                      className="hover:text-[#C8102E] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="h-px w-0 bg-[#C8102E] group-hover:w-3 transition-all duration-300" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 lg:bg-transparent lg:p-0 lg:border-none lg:rounded-none shadow-xl lg:shadow-none">
            <h4 className="text-white font-bold text-xs uppercase tracking-[2px] mb-8 text-center lg:text-left">Headquarters</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-4 group justify-center lg:justify-start">
                <div className="p-2.5 rounded-xl bg-[#C8102E]/10 text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white transition-all">
                   <Phone size={18} />
                </div>
                <span className="text-gray-300 font-medium">(812) 555-0199</span>
              </li>
              <li className="flex items-center gap-4 group justify-center lg:justify-start">
                <div className="p-2.5 rounded-xl bg-[#C8102E]/10 text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white transition-all">
                   <Mail size={18} />
                </div>
                <span className="text-gray-300 font-medium text-xs">ops@unitedutilities.com</span>
              </li>
              <li className="flex items-start gap-4 group justify-center lg:justify-start">
                <div className="p-2.5 rounded-xl bg-[#C8102E]/10 text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white transition-all shrink-0">
                   <MapPin size={18} />
                </div>
                <span className="text-gray-300 leading-relaxed font-medium">Bloomington, IN <br/>Serving Southern Indiana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-20 pt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="text-[10px] uppercase tracking-[4px] text-[#C8102E]/40 font-black">Built with Grit</p>
              <p className="text-xs opacity-50">© 2026 United Utilities LLC. All rights reserved.</p>
            </div>
            
            {/* Socials */}
            <div className="flex gap-8 order-first lg:order-none">
              {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="text-white/30 hover:text-[#C8102E] transition-all hover:-translate-y-1">
                  <Icon size={22} strokeWidth={1.5} />
                </a>
              ))}
            </div>

            <div className="flex gap-6 text-[10px] uppercase tracking-[2px] font-bold opacity-40">
              <a href="#" className="hover:text-[#C8102E] transition-colors">Privacy</a>
              <span className="opacity-20">|</span>
              <a href="#" className="hover:text-[#C8102E] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
