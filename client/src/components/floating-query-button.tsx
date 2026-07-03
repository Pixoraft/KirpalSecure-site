import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Phone, Mail, Send, Zap, Camera, Shield, Wifi,
  Fingerprint, Monitor, Bell, MessageCircle, MapPin, User, Check
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface FloatingQueryButtonProps {
  preSelectedService?: string;
}

const SERVICES = [
  { label: "Electric Fence", value: "Electric Fencing Installation", icon: Zap },
  { label: "CCTV Camera",    value: "CCTV Installation",             icon: Camera },
  { label: "Smart Security", value: "Smart Home Security",           icon: Shield },
  { label: "Network Setup",  value: "Network Setup",                 icon: Wifi },
  { label: "Biometric",      value: "Biometric Systems",             icon: Fingerprint },
  { label: "Video Intercom", value: "Video Intercom",                icon: Monitor },
  { label: "Alarm System",   value: "Alarm System",                  icon: Bell },
  { label: "Other",          value: "General Inquiry",               icon: MessageCircle },
];

const SITE_TYPES   = ["Residential", "Commercial", "Industrial", "Agricultural"];
const FENCING_TYPES = ["Straight", "Gate Fencing", "Mixed"];

export function FloatingQueryButton({ preSelectedService }: FloatingQueryButtonProps = {}) {
  const [isOpen,      setIsOpen]      = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name,        setName]        = useState("");
  const [address,     setAddress]     = useState("");
  const [contactMethod, setContactMethod] = useState<"phone" | "email">("phone");
  const [email,       setEmail]       = useState("");
  const [services,    setServices]    = useState<string[]>(preSelectedService ? [preSelectedService] : []);
  const [area,        setArea]        = useState("");
  const [siteType,    setSiteType]    = useState("");
  const [fencingType, setFencingType] = useState("");

  const hasEF = services.includes("Electric Fencing Installation");
  const canSubmit = name.trim() && address.trim() && services.length > 0;

  // Open via custom event (from hero / city page CTAs)
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      const sv = e.detail?.serviceType;
      if (sv) setServices([sv]);
      setIsOpen(true);
    };
    window.addEventListener("openQueryForm", handler as EventListener);
    return () => window.removeEventListener("openQueryForm", handler as EventListener);
  }, []);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleService = (val: string) =>
    setServices(prev =>
      prev.includes(val) ? prev.filter(s => s !== val) : [...prev, val]
    );

  const resetForm = () => {
    setName(""); setAddress(""); setEmail("");
    setServices([]); setArea(""); setSiteType(""); setFencingType("");
    setContactMethod("phone");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setIsSubmitting(true);

    const serviceList = services.join(", ");
    const efLine = hasEF
      ? `\n*Electric Fence Details:*\n${area ? `Area: ${area}\n` : ""}${siteType ? `Site: ${siteType}\n` : ""}${fencingType ? `Type: ${fencingType}\n` : ""}`
      : "";

    const msg = `*KIRPAL SECURITIES — INQUIRY*

*Name:* ${name}
*Address:* ${address}
*Services:* ${serviceList}
*Contact via:* ${contactMethod === "phone" ? "Phone Call" : `Email – ${email}`}${efLine}
Please provide a quotation. Thank you!`;

    const url = `https://wa.me/917009154711?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      window.open(url, "_blank");
      resetForm();
      setIsSubmitting(false);
      setIsOpen(false);
    }, 900);
  };

  return (
    <>
      {/* ── Floating trigger ── */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 bg-gradient-primary rounded-full shadow-2xl flex items-center gap-2 px-4 py-3 text-white overflow-hidden"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        data-testid="floating-query-button"
      >
        <MessageCircle size={18} />
        <span className="text-sm font-semibold">Contact</span>
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping pointer-events-none" />
      </motion.button>

      {/* ── Modal ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/65 backdrop-blur-sm z-[110]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Centered card */}
            <motion.div
              className="fixed inset-0 z-[120] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden"
                initial={{ scale: 0.88, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 10 }}
                transition={{ type: "spring", damping: 28, stiffness: 340 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* ── Header ── */}
                <div className="bg-gradient-to-r from-gray-900 to-brand-red text-white px-5 pt-5 pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Kirpal Securities</p>
                      <h3 className="text-lg font-black mt-0.5 leading-tight">Get a Free Quote</h3>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white/15 transition-colors mt-0.5"
                      data-testid="close-query-form"
                    >
                      <X size={17} />
                    </button>
                  </div>
                  {/* Quick call */}
                  <div className="flex gap-2 mt-3">
                    <a href="tel:+917009154711" className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 transition-colors rounded-lg px-3 py-1.5 text-xs font-semibold">
                      <Phone size={11} /> Nikhil
                    </a>
                    <a href="tel:+919463687535" className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 transition-colors rounded-lg px-3 py-1.5 text-xs font-semibold">
                      <Phone size={11} /> Naveen
                    </a>
                    <span className="ml-auto text-[10px] text-white/50 self-end">Reply in 30 min</span>
                  </div>
                </div>

                {/* ── Form body (scrollable only if needed) ── */}
                <div className="overflow-y-auto max-h-[60dvh] overscroll-contain">
                  <form onSubmit={handleSubmit} className="px-5 pt-4 pb-5 space-y-4">

                    {/* Services — multi-select chips */}
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Select services <span className="font-normal normal-case text-gray-400">(pick one or more)</span>
                      </p>
                      <div className="grid grid-cols-4 gap-1.5">
                        {SERVICES.map(({ label, value, icon: Icon }) => {
                          const on = services.includes(value);
                          return (
                            <button
                              key={value}
                              type="button"
                              onClick={() => toggleService(value)}
                              className={[
                                "relative flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl border-2 transition-all text-center",
                                on
                                  ? "border-brand-red bg-red-50"
                                  : "border-gray-100 bg-gray-50 hover:border-gray-200",
                              ].join(" ")}
                              data-testid={`service-chip-${value.replace(/\s+/g, "-").toLowerCase()}`}
                            >
                              {on && (
                                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-brand-red rounded-full flex items-center justify-center">
                                  <Check size={8} className="text-white" strokeWidth={3} />
                                </span>
                              )}
                              <Icon size={16} className={on ? "text-brand-red" : "text-gray-400"} />
                              <span className={`text-[9px] font-semibold leading-tight ${on ? "text-brand-red" : "text-gray-500"}`}>
                                {label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Electric fence extras */}
                    <AnimatePresence>
                      {hasEF && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-3 space-y-2.5">
                            <p className="text-[10px] font-bold text-yellow-700 uppercase tracking-wider flex items-center gap-1">
                              <Zap size={11} /> Electric Fence Details
                            </p>
                            <Input
                              value={area}
                              onChange={e => setArea(e.target.value)}
                              placeholder="Area — e.g. 5000 sq ft, 2 acres"
                              className="h-9 text-xs rounded-xl border-yellow-300 bg-white"
                              data-testid="electric-fencing-area-input"
                            />
                            <div className="grid grid-cols-2 gap-1.5">
                              {SITE_TYPES.map(st => (
                                <button key={st} type="button" onClick={() => setSiteType(siteType === st ? "" : st)}
                                  className={`py-1.5 px-2 rounded-lg text-[10px] font-semibold border transition-all text-center ${siteType === st ? "bg-yellow-500 text-white border-yellow-500" : "bg-white text-gray-600 border-yellow-200"}`}>
                                  {st}
                                </button>
                              ))}
                            </div>
                            <div className="grid grid-cols-3 gap-1.5">
                              {FENCING_TYPES.map(ft => (
                                <button key={ft} type="button" onClick={() => setFencingType(fencingType === ft ? "" : ft)}
                                  className={`py-1.5 rounded-lg text-[10px] font-semibold border transition-all ${fencingType === ft ? "bg-yellow-500 text-white border-yellow-500" : "bg-white text-gray-600 border-yellow-200"}`}>
                                  {ft}
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Name + Address */}
                    <div className="space-y-2.5">
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <Input
                          value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder="Your name"
                          required
                          className="h-11 pl-9 text-sm rounded-xl border-gray-200 focus:border-brand-red"
                          data-testid="query-name-input"
                        />
                      </div>
                      <div className="relative">
                        <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <Input
                          value={address}
                          onChange={e => setAddress(e.target.value)}
                          placeholder="Your city / address"
                          required
                          className="h-11 pl-9 text-sm rounded-xl border-gray-200 focus:border-brand-red"
                          data-testid="query-address-input"
                        />
                      </div>
                    </div>

                    {/* Contact method */}
                    <div className="flex gap-2">
                      {([
                        { value: "phone", icon: Phone, label: "Phone Call" },
                        { value: "email", icon: Mail,  label: "Email" },
                      ] as const).map(({ value, icon: Icon, label }) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setContactMethod(value)}
                          className={[
                            "flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border-2 text-xs font-semibold transition-all",
                            contactMethod === value
                              ? "border-brand-red bg-red-50 text-brand-red"
                              : "border-gray-200 text-gray-500 hover:border-gray-300",
                          ].join(" ")}
                          data-testid={`contact-method-${value}`}
                        >
                          <Icon size={13} /> {label}
                        </button>
                      ))}
                    </div>

                    <AnimatePresence>
                      {contactMethod === "email" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.18 }}
                          className="overflow-hidden"
                        >
                          <Input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Your email address"
                            required
                            className="h-11 text-sm rounded-xl border-gray-200 focus:border-brand-red"
                            data-testid="query-email-input"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !canSubmit}
                      className={[
                        "w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all",
                        canSubmit && !isSubmitting
                          ? "bg-[#25D366] hover:bg-[#1fbd5c] active:bg-[#19a34f] text-white shadow-lg shadow-green-200"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed",
                      ].join(" ")}
                      data-testid="submit-query-button"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Opening WhatsApp...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send via WhatsApp
                        </>
                      )}
                    </button>

                  </form>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
