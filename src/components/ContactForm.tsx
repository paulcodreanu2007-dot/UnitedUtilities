import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { motion } from " framer-motion";

const schema = z.object({
  name: z.string().trim().min(2, "Required").max(100),
  phone: z.string().trim().regex(/^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Invalid number"),
  email: z.string().trim().email("Invalid email").max(255),
  service_type: z.string().min(1, "Select a service"),
  message: z.string().trim().min(20, "Tell us more (20+ chars)").max(2000),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  "Underground Utilities",
  "Excavation & Grading",
  "Water & Sewer Repair",
  "Site Preparation",
  "Emergency Utility Service",
  "Other Industrial Inquiry",
];

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const { error } = await supabase.from("contact_submissions").insert([data as Required<FormData>]);
      if (error) throw error;
      toast({ title: "Submission Received", description: "A project manager will call you within 24 hours." });
      reset();
    } catch {
      toast({ title: "Submission Failed", description: "Please call our Bloomington office directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/50 text-white placeholder:text-white/20 transition-all outline-none appearance-none";

  const labelClass = "text-[#C8102E] text-[10px] uppercase tracking-[2px] font-bold mb-1.5 block ml-1";

  return (
    <section id="contact" className="relative bg-[#1a1a1a] py-16 md:py-24 overflow-hidden">
      {/* INDUSTRIAL ACCENT LINE */}
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8102E]/40 to-transparent" />
      </div>

      {/* SAFETY RED GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,16,46,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>
            Secure Your <span className="text-[#C8102E]">Project</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg tracking-wide uppercase font-semibold">Response guaranteed within 24 hours.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-[1px] rounded-[2rem] bg-gradient-to-b from-white/20 to-transparent"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative bg-[#1a1a1a]/60 backdrop-blur-3xl rounded-[1.9rem] p-6 md:p-12 shadow-2xl border border-white/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className={labelClass}>Name</label>
                <input type="text" placeholder="Full Name" {...register("name")} className={inputClass} />
                {errors.name && <p className="text-red-500 text-[10px] mt-1 font-bold italic uppercase">{errors.name.message}</p>}
              </div>

              <div>
                <label className={labelClass}>Phone</label>
                <input type="tel" placeholder="(812) 555-0100" {...register("phone")} className={inputClass} />
                {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-bold italic uppercase">{errors.phone.message}</p>}
              </div>

              <div className="md:col-span-1">
                <label className={labelClass}>Email</label>
                <input type="email" placeholder="professional@company.com" {...register("email")} className={inputClass} />
              </div>

              <div className="md:col-span-1">
                <label className={labelClass}>Service Scope</label>
                <div className="relative">
                  <select 
                    {...register("service_type")} 
                    className={`${inputClass} text-white`}
                    defaultValue=""
                    required
                  >
                    <option value="" disabled className="bg-[#1a1a1a]">Select scope...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#1a1a1a] text-white">{opt}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#C8102E]">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className={labelClass}>Project Details</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the site location and required timeline..."
                  {...register("message")}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C8102E] text-white py-4 md:py-5 rounded-xl text-base md:text-lg font-black hover:bg-white hover:text-[#C8102E] transition-all flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(200,16,46,0.3)] active:scale-[0.98]"
              >
                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                <span className="whitespace-nowrap uppercase tracking-widest">Request Field Quote</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
