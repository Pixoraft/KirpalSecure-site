import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video, Home, Fingerprint, Network, Phone, Wrench,
  CheckCircle, Zap, Shield, Award, MapPin, Sun, Factory,
  Building, TreePine, ChevronDown, ChevronUp, HelpCircle,
  MessageCircle, ArrowRight, Clock, Users, Star
} from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import cctvImage from "@assets/image_1759656714453.png";
import homeSecurityImage from "@assets/image_1759656678518.png";
import biometricImage from "@assets/image_1759656669660.png";
import networkingImage from "@assets/image_1759656662799.png";
import electricFencingImage from "@assets/image_1759656687097.png";

const TARGET_CITIES = [
  "Jalandhar", "Ludhiana", "Amritsar", "Pathankot",
  "Hoshiarpur", "Phagwara", "Kapurthala", "Nakodar"
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3 className="text-base md:text-lg font-bold text-gray-900 pr-4">{question}</h3>
        {open
          ? <ChevronUp className="text-brand-red flex-shrink-0" size={20} />
          : <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <p className="px-5 pb-5 text-gray-600 leading-relaxed text-sm md:text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Electric Fence Installation Punjab | Kirpal Securities | Jalandhar Ludhiana Amritsar"
        description="Kirpal Securities is a professional electric fence installation company serving customers across all of Punjab. Expert solar electric fencing, agricultural, industrial and residential perimeter security. Key cities include Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar. 7+ Years | 3300+ Installations."
        keywords="electric fence installation Punjab, solar electric fence installation, electric fence Jalandhar, electric fencing Ludhiana, electric fence Amritsar, electric fence Pathankot, electric fence Hoshiarpur, electric fence Phagwara, electric fence Kapurthala, electric fence Nakodar, agricultural electric fencing, industrial perimeter fencing, security services Jalandhar, CCTV installation Punjab, biometric systems Jalandhar"
        image="https://kirpalsecurities.in/services-security.jpg"
        url="https://kirpalsecurities.in/services"
        type="website"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Electric Fence Installation",
            "description": "Professional solar electric fence installation services across all of Punjab. Key cities include Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Kirpal Securities",
              "telephone": "+91-7009154711",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jalandhar",
                "addressRegion": "Punjab",
                "addressCountry": "India"
              }
            },
            "areaServed": TARGET_CITIES.map(city => ({ "@type": "City", "name": city })),
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Electric Fence Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Electric Fence Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agricultural Electric Fencing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Perimeter Fencing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse Security Fencing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Electric Fence Systems" } }
              ]
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is electric fencing used for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Electric fencing is used to protect farms, factories, warehouses, and residential properties from unauthorized entry. It delivers a non-lethal high-voltage pulse that deters trespassers and triggers alarms."
                }
              },
              {
                "@type": "Question",
                "name": "Is electric fencing safe for humans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our systems use safe pulse technology — a short, sharp electric pulse that deters without causing serious harm. All installations comply with IS safety standards and include warning signage."
                }
              },
              {
                "@type": "Question",
                "name": "Where do you install electric fencing in Punjab?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kirpal Securities is a professional electric fence installation company serving customers across all of Punjab. Key cities include Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar."
                }
              },
              {
                "@type": "Question",
                "name": "How long does electric fence installation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A standard installation takes 1-3 days depending on the property perimeter size. Large industrial or farm properties may take 3-5 days. We begin with a free site inspection."
                }
              },
              {
                "@type": "Question",
                "name": "How much does electric fence installation cost in Punjab?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cost depends on perimeter length, pole type (MS or SS 304), and fencing type. Contact Kirpal Securities at 7009154711 for a free site inspection and custom quote."
                }
              }
            ]
          }
        ]}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-brand-red text-white py-12 md:py-20 lg:py-28" aria-label="Electric Fence Installation Hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-300">Punjab's Most Trusted Electric Fence Company</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 md:mb-6">
                Electric Fence Installation in <span className="text-yellow-400">Punjab</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Kirpal Securities provides professional solar electric fencing installation services across all of Punjab. Our expert team installs advanced perimeter security systems in major cities including Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar. We also provide installation services across the entire Punjab region.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openQueryForm', {
                    detail: { serviceType: 'Electric Fencing Installation', message: 'I need a free site inspection for electric fence installation.' }
                  }))}
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-bold transition-all shadow-lg"
                >
                  <Shield size={18} />
                  Get Free Site Inspection
                </button>
                <a
                  href="tel:7009154711"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-bold transition-all"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/917009154711?text=Hi, I need a quote for electric fence installation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-bold transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "7+", label: "Years Experience" },
                  { value: "3300+", label: "Fence Installations" },
                  { value: "8+", label: "Cities in Punjab" },
                  { value: "PAN", label: "India Service" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-2xl font-black text-yellow-400">{stat.value}</div>
                    <div className="text-xs text-gray-300 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={electricFencingImage}
                  alt="Professional electric fence installation by Kirpal Securities in Punjab"
                  className="w-full h-[450px] object-cover object-left-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-yellow-400 text-black rounded-xl px-4 py-3 text-center font-bold text-lg inline-flex items-center justify-center gap-2 w-full">
                    <Zap size={20} className="flex-shrink-0" />
                    <span>North India's Biggest Solar Electric Fencing Company</span>
                    <Zap size={20} className="flex-shrink-0" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT IS ELECTRIC FENCING ── */}
      <section className="py-10 md:py-16 bg-white" aria-label="What is Electric Fencing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                What is <span className="text-brand-red">Electric Fencing?</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Electric fencing is a modern perimeter security system designed to protect properties from unauthorized entry. It uses controlled electric pulses to create a strong deterrent barrier while remaining safe for humans and animals through pulse technology.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Kirpal Securities installs solar electric fencing systems using durable, weather-resistant materials and professional installation techniques across Punjab. Our systems are trusted by farms, factories, warehouses, and residential properties across Jalandhar, Ludhiana, Amritsar and beyond.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Farms & Agricultural Land", "Factories & Industrial Units", "Warehouses & Storage", "Residential Properties", "Commercial Campuses", "Government Properties"].map((use, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                    {use}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Star className="text-yellow-500 fill-yellow-500" size={22} />
                Why Electric Fencing is the Best Perimeter Security
              </h3>
              <div className="space-y-4">
                {[
                  { title: "24/7 Active Protection", desc: "Works continuously without human supervision" },
                  { title: "Strong Deterrent Effect", desc: "Deters intruders before they even attempt entry" },
                  { title: "Low Maintenance", desc: "Minimal upkeep required after professional installation" },
                  { title: "Solar Powered Option", desc: "Eco-friendly and works during power cuts" },
                  { title: "Alarm Integration", desc: "Instant alerts when the fence is triggered" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-black" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TYPES OF ELECTRIC FENCING ── */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-yellow-50 to-orange-50" aria-label="Types of Electric Fencing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Types of Electric Fence <span className="text-brand-red">Installation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide custom electric fencing solutions for every type of property across Punjab
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Sun,
                color: "from-yellow-400 to-orange-500",
                title: "Solar Electric Fence Installation",
                description: "Eco-friendly solar-powered fencing systems ideal for farms and remote properties. Our solar energizers ensure 24/7 protection even during power cuts, making them perfect for rural Punjab.",
                benefits: ["Works during power outages", "Zero electricity cost", "Ideal for large farms"]
              },
              {
                icon: TreePine,
                color: "from-green-500 to-emerald-600",
                title: "Agricultural Electric Fencing",
                description: "Protect crops and livestock from wild animals and intruders across Jalandhar, Ludhiana and Amritsar. Specially designed for farms in Punjab with durable field-grade materials.",
                benefits: ["Protects crops & livestock", "Weather-resistant", "Low cost per meter"]
              },
              {
                icon: Factory,
                color: "from-gray-600 to-gray-800",
                title: "Industrial Perimeter Fencing",
                description: "Heavy-duty electric fencing for factories, industrial units and manufacturing plants. High-tension wire systems with alarm integration for complete industrial perimeter security.",
                benefits: ["High voltage deterrent", "Alarm integration", "Heavy-duty materials"]
              },
              {
                icon: Building,
                color: "from-purple-500 to-indigo-600",
                title: "Warehouse Security Fencing",
                description: "Protect valuable goods with electric perimeter fencing for warehouses and storage facilities across Punjab. Instant alarm alerts and remote monitoring available.",
                benefits: ["Protects high-value goods", "Remote monitoring", "24/7 alert system"]
              },
              {
                icon: Home,
                color: "from-blue-500 to-cyan-600",
                title: "Residential Electric Fence Systems",
                description: "Safe, smart residential fencing for homes, villas and housing societies. Safe pulse technology ensures family and pet safety while providing strong deterrence.",
                benefits: ["Safe for family & pets", "Modern design", "Smart home integration"]
              },
              {
                icon: Shield,
                color: "from-brand-red to-red-700",
                title: "Commercial Campus Fencing",
                description: "Secure office campuses, schools and commercial properties with professional electric perimeter fencing. Integrated with CCTV for complete 360° security coverage.",
                benefits: ["CCTV integration", "Access control", "Professional finish"]
              }
            ].map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-red transition-colors">{type.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{type.description}</p>
                <ul className="space-y-1">
                  {type.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={12} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: INSTALLATION PROCESS ── */}
      <section className="py-10 md:py-16 bg-white" aria-label="Electric Fence Installation Process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our <span className="text-brand-red">Installation Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A professional, structured approach to every electric fence installation across Punjab
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-yellow-400 to-brand-red z-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Site Inspection", desc: "Free on-site visit to assess the property and understand security requirements" },
                { step: "02", title: "Design Planning", desc: "Custom fence layout design based on your property size and security needs" },
                { step: "03", title: "Pole Installation", desc: "Professional pole installation and high-tension wire setup with proper insulation" },
                { step: "04", title: "Energizer Setup", desc: "High-voltage energizer installation, wiring connections, and alarm integration" },
                { step: "05", title: "Testing & Handover", desc: "Full system testing, safety checks, and customer training before handover" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 text-center group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex flex-col items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform ring-4 ring-white">
                    <span className="text-xs font-bold text-black/60">STEP</span>
                    <span className="text-2xl font-black text-black">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: MATERIALS & TECHNOLOGY ── */}
      <section className="py-10 md:py-16 bg-gray-900 text-white" aria-label="Electric Fence Materials and Technology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Premium <span className="text-yellow-400">Materials & Technology</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We use only certified, weather-resistant materials for long-lasting perimeter security across Punjab's diverse climate conditions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { title: "MS Powder Coated Poles", desc: "Cost-effective, rust-resistant poles with durable powder coating for outdoor use", detail: "Ideal for agricultural & commercial sites" },
              { title: "SS 304 Stainless Steel Poles", desc: "Premium grade stainless steel poles with maximum corrosion resistance", detail: "Ideal for coastal & humid environments" },
              { title: "High Voltage Energizers", desc: "Certified energizers with pulse safety technology for consistent output", detail: "Solar & mains-powered options available" },
              { title: "Insulated Tension Wire", desc: "UV-resistant, high-tensile wire rated for continuous outdoor use", detail: "Multiple strands for maximum deterrence" },
              { title: "Safety Warning Systems", desc: "Compliant warning signage and safety cut-off mechanisms at all entry points", detail: "IS standard safety compliance" }
            ].map((mat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 hover:border-yellow-400/50 hover:bg-white/10 rounded-xl p-5 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="text-black" size={18} />
                </div>
                <p className="font-bold text-white text-sm mb-2">{mat.title}</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-2">{mat.desc}</p>
                <p className="text-yellow-400/70 text-xs italic">{mat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: BENEFITS ── */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-brand-red to-red-800 text-white" aria-label="Electric Fence Benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Benefits of Electric Fencing
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Why thousands of property owners across Punjab choose electric fencing over traditional security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Strong Perimeter Security", desc: "Creates an impenetrable security barrier that actively deters unauthorized entry 24/7" },
              { icon: Zap, title: "Instant Intruder Deterrent", desc: "Non-lethal electric pulse immediately deters intruders and triggers alerts" },
              { icon: Wrench, title: "Very Low Maintenance", desc: "Minimal upkeep required after installation — just annual inspection and testing" },
              { icon: Clock, title: "Long Lasting Materials", desc: "Premium SS 304 and powder-coated poles last 15+ years in Punjab's climate" },
              { icon: MapPin, title: "Suitable for Any Property", desc: "Scalable for small residential plots to large industrial perimeters" },
              { icon: Sun, title: "Solar Powered Option", desc: "Eco-friendly solar systems reduce electricity costs and work during power cuts" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="text-yellow-400" size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-red-100 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: SERVICE AREAS ── */}
      <section className="py-10 md:py-16 bg-gray-900 text-white" aria-label="Electric Fence Installation Areas in Punjab">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-300">Serving All of Punjab</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Electric Fence Installation <span className="text-yellow-400">Areas in Punjab</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Kirpal Securities installs electric fencing systems across all of Punjab. Our team frequently works in cities such as Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar, but we also provide installation services across the entire Punjab region.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { city: "Jalandhar", desc: "Electric Fence Installation in Jalandhar", highlight: true },
              { city: "Ludhiana", desc: "Electric Fencing in Ludhiana" },
              { city: "Amritsar", desc: "Solar Electric Fence in Amritsar" },
              { city: "Pathankot", desc: "Electric Fence Company in Pathankot" },
              { city: "Hoshiarpur", desc: "Electric Fencing in Hoshiarpur" },
              { city: "Phagwara", desc: "Electric Fence Installation in Phagwara" },
              { city: "Kapurthala", desc: "Electric Fencing in Kapurthala" },
              { city: "Nakodar", desc: "Electric Fence Company in Nakodar" }
            ].map((area, index) => (
              <motion.div
                key={index}
                className={`rounded-xl p-5 text-center border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                  area.highlight
                    ? "bg-yellow-400/20 border-yellow-400"
                    : "bg-white/5 border-white/10 hover:border-yellow-400/50 hover:bg-white/10"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
              >
                <MapPin className={`mx-auto mb-2 ${area.highlight ? "text-yellow-400" : "text-gray-400"}`} size={24} />
                <h3 className={`font-bold text-base mb-1 ${area.highlight ? "text-yellow-300" : "text-white"}`}>{area.city}</h3>
                <p className={`text-xs ${area.highlight ? "text-yellow-200" : "text-gray-500"}`}>{area.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <p className="text-gray-300 mb-4">Also serving surrounding areas of Punjab and providing PAN India installation services.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-bold transition-all">
              <Phone size={16} />
              Check Service Availability in Your Area
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: WHY CHOOSE ── */}
      <section className="py-10 md:py-16 bg-white" aria-label="Why Choose Kirpal Securities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Choose <span className="text-brand-red">Kirpal Securities?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Punjab's most trusted electric fence installation company with a proven track record
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "7+ Years of Experience", desc: "Over 7 years specializing in electric fence installation across Punjab and PAN India with 3300+ successful projects completed." },
              { icon: Users, title: "Professional Installation Team", desc: "Experienced installation engineers and technicians who handle every project with precision and attention to safety standards." },
              { icon: Shield, title: "High-Quality Fencing Materials", desc: "We use only certified MS powder-coated poles, SS 304 stainless steel poles, and high-voltage energizers for maximum durability." },
              { icon: Zap, title: "Fast & Reliable Service", desc: "Quick site inspection, efficient installation, and prompt after-sales support across all cities in Punjab." },
              { icon: MapPin, title: "Serving All of Punjab", desc: "On-ground service teams covering the entire Punjab region. Key cities include Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar." },
              { icon: Clock, title: "Complete After-Sales Support", desc: "Dedicated service network for spare parts and maintenance ensuring your fence operates at peak performance year-round." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-red-50 hover:border-brand-red border border-transparent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-brand-red" size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FAQ ── */}
      <section className="py-10 md:py-16 bg-gray-50" aria-label="Electric Fencing FAQ">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/10 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-4 h-4 text-brand-red" />
              <span className="text-sm font-semibold text-brand-red">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Electric Fencing <span className="text-brand-red">FAQs</span>
            </h2>
            <p className="text-gray-600">Everything you need to know before getting electric fencing installed in Punjab</p>
          </motion.div>

          <div className="space-y-3">
            {[
              {
                question: "What is electric fencing used for?",
                answer: "Electric fencing is used to protect farms, factories, warehouses, and residential properties from unauthorized entry and intruders. It delivers a non-lethal high-voltage pulse that deters trespassers while triggering alarms for immediate response."
              },
              {
                question: "Is electric fencing safe for humans and animals?",
                answer: "Yes. Our systems use safe pulse technology — a short, controlled electric pulse that deters without causing serious harm. All installations comply with IS safety standards, include clearly visible warning signage, and are equipped with automatic safety cut-off mechanisms."
              },
              {
                question: "Where do you install electric fencing in Punjab?",
                answer: "Kirpal Securities provides electric fence installation across all of Punjab. We frequently work in Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar, but we serve the entire Punjab region. PAN India installation is also available on request."
              },
              {
                question: "How long does electric fence installation take?",
                answer: "A standard residential installation takes 1-2 days. Commercial and industrial properties typically take 2-4 days depending on the perimeter size. We begin with a free site inspection to give you an accurate timeline before work begins."
              },
              {
                question: "How much does electric fence installation cost in Punjab?",
                answer: "Cost depends on several factors including perimeter length, pole type (MS Powder Coated or SS 304 Stainless Steel), number of fence strands, and whether solar or mains power is used. Contact Kirpal Securities at 7009154711 for a free site inspection and custom quote."
              }
            ].map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXISTING SERVICES ── */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our Other <span className="text-brand-red">Security Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete security solutions for homes and businesses across Jalandhar and Punjab
            </p>
          </motion.div>

          {/* CCTV */}
          <div className="mb-16" data-testid="section-cctv">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src={cctvImage} alt="CCTV and security camera installation services" className="w-full h-[400px] object-cover object-left-top" data-testid="img-cctv" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <Video className="text-brand-red mr-3" size={36} />
                  CCTV & Security Cameras
                </h2>
                <p className="text-lg text-gray-600 mb-6">Complete surveillance solutions with the latest IP and analog camera technology.</p>
                <ul className="space-y-3 text-gray-700">
                  {["IP Camera Systems", "Analog CCTV Cameras", "Night Vision Cameras", "Remote Monitoring Setup", "Professional Installation"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle className="text-brand-red flex-shrink-0" size={16} />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Home Security */}
          <div className="mb-16" data-testid="section-home-security">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2 overflow-hidden rounded-2xl shadow-lg">
                <img src={homeSecurityImage} alt="Home security system with CCTV cameras" className="w-full h-[400px] object-cover object-left-top" data-testid="img-home-security" />
              </div>
              <div className="lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <Home className="text-brand-red mr-3" size={36} />
                  Home Security Systems
                </h2>
                <p className="text-lg text-gray-600 mb-6">Comprehensive home protection with advanced alarm systems and smart monitoring.</p>
                <ul className="space-y-3 text-gray-700">
                  {["Burglar Alarm Systems", "Motion Sensors", "Door & Window Sensors", "Smart Home Integration", "24/7 Monitoring Options"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle className="text-brand-red flex-shrink-0" size={16} />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Biometric */}
          <div className="mb-16" data-testid="section-biometric">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src={biometricImage} alt="Biometric access control and fingerprint scanner devices" className="w-full h-[400px] object-cover object-left-top" data-testid="img-biometric" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <Fingerprint className="text-brand-red mr-3" size={36} />
                  Biometric Devices
                </h2>
                <p className="text-lg text-gray-600 mb-6">Advanced biometric access control for maximum security and convenience.</p>
                <ul className="space-y-3 text-gray-700">
                  {["Fingerprint Scanners", "Face Recognition Systems", "Time Attendance Systems", "Access Control Integration", "Multi-User Management"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle className="text-brand-red flex-shrink-0" size={16} />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Networking */}
          <div className="mb-16" data-testid="section-networking">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2 overflow-hidden rounded-2xl shadow-lg">
                <img src={networkingImage} alt="Professional networking solutions and equipment installation" className="w-full h-[400px] object-cover object-left-top" data-testid="img-networking" />
              </div>
              <div className="lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <Network className="text-brand-red mr-3" size={36} />
                  Networking Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-6">Professional networking services for reliable and secure connectivity.</p>
                <ul className="space-y-3 text-gray-700">
                  {["Network Setup & Configuration", "Wi-Fi Installation", "Network Security", "Router & Switch Configuration", "Network Maintenance"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle className="text-brand-red flex-shrink-0" size={16} />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8" data-testid="section-intercom">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Phone className="text-brand-red mr-3" size={28} />
                Intercom & Video Door Phones
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {["Intercom Systems", "Video Door Phones", "Multi-Unit Systems", "Wireless Options"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="text-brand-red flex-shrink-0" size={14} />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8" data-testid="section-repair">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Wrench className="text-brand-red mr-3" size={28} />
                Technical Support & Repair
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {["Laptop/Computer Repairing", "Printer Repairing", "Door-to-door Service", "Laptop Accessories"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="text-brand-red flex-shrink-0" size={14} />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8" data-testid="section-fire-electric">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="text-brand-red mr-3" size={28} />
                Fire Alarm & Electric Fence
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {["Fire Alarm Systems", "Electric Fence Installation", "Security Perimeter Solutions", "Emergency Alert Systems"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle className="text-brand-red flex-shrink-0" size={14} />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FINAL CTA ── */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-yellow-400 to-orange-500" aria-label="Contact Kirpal Securities">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4">
              Secure Your Property with Professional Electric Fence Installation
            </h2>
            <p className="text-lg md:text-xl text-gray-900 mb-8 max-w-3xl mx-auto">
              Kirpal Securities provides reliable electric fence installation services across all of Punjab. We serve Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar — and the entire Punjab region. Contact our team for a free consultation and site inspection.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <a
                href="tel:7009154711"
                className="inline-flex items-center justify-center gap-2 bg-black text-white w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-base hover:bg-gray-900 transition-all shadow-xl"
              >
                <Phone size={18} />
                Call NIKHIL: 7009154711
              </a>
              <a
                href="https://wa.me/917009154711?text=Hi, I need a quote for electric fence installation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-base hover:bg-green-700 transition-all shadow-xl"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-base hover:bg-gray-100 transition-all shadow-xl"
                data-testid="button-get-free-quote"
              >
                Get Free Quote
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-900">
              {TARGET_CITIES.map((city, i) => (
                <span key={i} className="bg-black/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                  <MapPin size={14} className="flex-shrink-0" />
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
