import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Video, Home, Phone, Shield, Award, Clock, Users, Star, Quote,
  CheckCircle, ArrowRight, Zap, Eye, MessageCircle, MapPin, Sun,
  Factory, Building, HelpCircle, ChevronDown, ChevronUp, Wrench
} from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import CountUp from "react-countup";
import { cctvPackages } from "@/data/packages";
import { cctvCities } from "@/lib/cctv-cities";
import { electricFenceCities, BUSINESS_INFO } from "@/lib/electric-fence-cities";

// Hero banner slides — only 3 (Electric Fence, CCTV, Free Inspection)
const heroBannerSlides = [
  {
    id: 0,
    title: "KIRPAL SECURITIES",
    subtitle: "ELECTRIC FENCING SPECIALISTS",
    description: "Kirpal Securities provides professional electric fence installation services across all of Punjab. Our expert team installs advanced perimeter security systems in Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda, Pathankot, Hoshiarpur and surrounding areas.",
    backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    ctaText: "Book Free Site Inspection",
    isElectricFencing: true,
  },
  {
    id: 1,
    title: "CCTV Camera Installation Punjab",
    subtitle: "Hikvision • CP Plus • Dahua",
    description: "Professional CCTV installation across 18 Punjab cities. HD and 4K cameras, mobile viewing, NVR/DVR setup and 2-year warranty. Packages from ₹16,000. Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda and more.",
    backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    ctaText: "Get Free CCTV Quote",
    isCCTV: true,
  },
  {
    id: 2,
    title: "Free Site Inspection",
    subtitle: "Call Now: 7009154711",
    description: "Get a free site inspection and custom quote for electric fence or CCTV installation anywhere in Punjab. No hidden charges, professional installation, lifetime support.",
    backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    ctaText: "Book Free Inspection",
  },
];

// Hero Banner Slider Component
function HeroBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Background Image — Ken Burns zoom-out */}
          <motion.div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroBannerSlides[currentSlide].backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6.5, ease: "easeOut" }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white w-full">
              {heroBannerSlides[currentSlide].isElectricFencing && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/15 to-orange-600/15" />
                </motion.div>
              )}

              <motion.h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-display leading-tight ${
                  heroBannerSlides[currentSlide].isElectricFencing
                    ? 'text-yellow-200 drop-shadow-2xl'
                    : ''
                }`}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                {heroBannerSlides[currentSlide].title}
              </motion.h2>

              <motion.p
                className={`text-lg sm:text-xl md:text-2xl mb-3 font-semibold ${
                  heroBannerSlides[currentSlide].isElectricFencing
                    ? 'text-yellow-300 drop-shadow-lg'
                    : 'text-blue-200'
                }`}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center justify-center gap-2">
                  {heroBannerSlides[currentSlide].isElectricFencing && (
                    <>
                      <Zap size={20} className="inline" />
                      <span>{heroBannerSlides[currentSlide].subtitle}</span>
                      <Zap size={20} className="inline" />
                    </>
                  )}
                  {heroBannerSlides[currentSlide].isCCTV && (
                    <>
                      <Video size={20} className="inline" />
                      <span>{heroBannerSlides[currentSlide].subtitle}</span>
                      <Video size={20} className="inline" />
                    </>
                  )}
                  {!heroBannerSlides[currentSlide].isElectricFencing && !heroBannerSlides[currentSlide].isCCTV && (
                    <>
                      <Phone size={20} className="inline" />
                      <span>{heroBannerSlides[currentSlide].subtitle}</span>
                    </>
                  )}
                </span>
              </motion.p>

              <motion.p
                className="text-base sm:text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {heroBannerSlides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
              >
                {heroBannerSlides[currentSlide].isElectricFencing ? (
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('openQueryForm', {
                        detail: {
                          serviceType: 'Electric Fencing Installation',
                          message: 'I am interested in KIRPAL SECURITIES electric fencing installation. Please provide detailed pricing and timeline information.',
                        },
                      }));
                    }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black px-6 sm:px-8 py-3 text-base sm:text-lg font-bold rounded-xl inline-flex items-center group shadow-2xl transform hover:scale-105 transition-all"
                    data-testid="banner-electric-fencing-cta"
                  >
                    <Zap className="mr-2" size={18} />
                    {heroBannerSlides[currentSlide].ctaText}
                    <Zap className="ml-2 transition-transform group-hover:rotate-12" size={18} />
                  </button>
                ) : heroBannerSlides[currentSlide].isCCTV ? (
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('openQueryForm', {
                        detail: {
                          serviceType: 'CCTV Camera Installation',
                          message: 'I am interested in CCTV camera installation. Please share package and pricing details.',
                        },
                      }));
                    }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-bold rounded-xl inline-flex items-center group shadow-2xl transform hover:scale-105 transition-all"
                    data-testid="banner-cctv-cta"
                  >
                    <Video className="mr-2" size={18} />
                    {heroBannerSlides[currentSlide].ctaText}
                    <Video className="ml-2 transition-transform group-hover:scale-110" size={18} />
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    className="btn-modern px-6 sm:px-8 py-3 text-base sm:text-lg font-bold rounded-xl inline-flex items-center group"
                    data-testid="banner-cta-button"
                  >
                    {heroBannerSlides[currentSlide].ctaText}
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroBannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            data-testid={`banner-slide-indicator-${index}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroBannerSlides.length) % heroBannerSlides.length)}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-20"
        data-testid="banner-prev-button"
      >
        <ArrowRight className="rotate-180" size={18} />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroBannerSlides.length)}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-20"
        data-testid="banner-next-button"
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

// Customer reviews — electric fence and CCTV focused, no dates
const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    text: "Got an electric fence installed around our farm in Jalandhar. The Kirpal team did a clean, professional job — solar energizer, SS 304 poles and proper warning signage. Animals stay out and the system has worked flawlessly through monsoon and summer.",
    service: "Electric Fence Installation",
    verified: true,
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    text: "Installed an 8-camera Hikvision CCTV system for our shop in Ludhiana. Crystal clear HD footage, mobile app works perfectly, and the technicians explained the DVR and recording settings clearly. Best CCTV installer in Punjab for retail shops.",
    service: "CCTV Camera Installation",
    verified: true,
  },
  {
    id: 3,
    name: "Manpreet Singh",
    rating: 5,
    text: "Kirpal installed industrial perimeter electric fencing around our factory near Mohali. Heavy-duty MS poles, alarm integration with our security room, and a 2-day turnaround. Very satisfied — the team understood our compliance and safety requirements.",
    service: "Electric Fence Installation",
    verified: true,
  },
  {
    id: 4,
    name: "Sunita Devi",
    rating: 5,
    text: "Got a 4-camera CCTV system installed at our home in Amritsar. Night vision is excellent, mobile viewing is smooth on my iPhone, and the cabling is hidden neatly. Great value for the price and a genuine 2-year warranty.",
    service: "CCTV Camera Installation",
    verified: true,
  },
  {
    id: 5,
    name: "Amit Gupta",
    rating: 5,
    text: "Solar electric fence on our agricultural land in Hoshiarpur — works 24/7 even with no grid power. Kirpal's team was punctual, the quote was transparent and after-sales support has been quick whenever I needed it. Highly recommended for farmers.",
    service: "Electric Fence Installation",
    verified: true,
  },
];

// Combined FAQs — match the schema exactly (5 electric fence + 5 CCTV)
const allFaqs = [
  {
    question: "What is the cost of electric fence installation in Punjab?",
    answer: "The cost depends on perimeter length, pole type (MS Powder Coated or SS 304 Stainless Steel) and whether solar or grid-powered. Kirpal Securities offers free site inspections and custom quotes across all Punjab cities. Call 7009154711 for a free estimate.",
  },
  {
    question: "Is electric fencing legal in Punjab?",
    answer: "Yes, electric fencing is legal in India for property protection when installed professionally with proper warning signage, safe pulse technology, and compliance with IS 69 safety standards. Kirpal Securities ensures all installations are fully compliant.",
  },
  {
    question: "Which areas in Punjab do you cover for electric fence installation?",
    answer: "Kirpal Securities covers all of Punjab including Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda, Phagwara, Kapurthala, Hoshiarpur, Pathankot, Gurdaspur, Moga, Sangrur, Barnala, Firozpur, Rupnagar, Tarn Taran, Mansa, Nawanshahr and Malerkotla.",
  },
  {
    question: "How long does electric fence installation take?",
    answer: "A standard residential or small farm installation takes 1-2 days. Larger industrial or warehouse perimeters take 3-5 days. Our team provides a clear timeline during the free site inspection.",
  },
  {
    question: "Do you provide solar electric fencing in Punjab?",
    answer: "Yes. Kirpal Securities installs solar electric fence systems across Punjab. Solar systems are ideal for farms and rural properties without reliable grid power and work 24/7 independently of the electricity grid.",
  },
  {
    question: "How much does CCTV camera installation cost in Punjab?",
    answer: "Kirpal Securities offers CCTV packages from Rs 16,000 for a 4-camera HD system including installation, DVR/NVR, cabling and mobile app setup. 8-camera packages start from Rs 21,500. Contact us for a free quote.",
  },
  {
    question: "Which CCTV brands do you install in Punjab?",
    answer: "We install Hikvision, CP Plus and Dahua CCTV cameras — all with genuine warranty. Our technicians are trained and certified for all three brands. We recommend the best brand based on your budget and requirements.",
  },
  {
    question: "Do you provide CCTV installation near me in Punjab?",
    answer: "Yes. Kirpal Securities provides CCTV installation across 18+ Punjab cities including Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda, Phagwara, Kapurthala, Hoshiarpur, Pathankot, Nakodar, Gurdaspur, Moga, Sangrur, Rupnagar, Firozpur, Tarn Taran and Nawanshahr.",
  },
  {
    question: "Can I view CCTV cameras on my mobile phone?",
    answer: "Yes. All our CCTV systems support live mobile viewing on iOS and Android. Our technicians set up the mobile app during installation and provide full training so you can monitor your property from anywhere.",
  },
  {
    question: "Do you provide CCTV maintenance and AMC services?",
    answer: "Yes. Kirpal Securities provides Annual Maintenance Contracts (AMC), camera repairs and replacements, DVR/NVR servicing, and remote support across Punjab. We service systems we installed as well as systems installed by other companies.",
  },
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        data-testid={`faq-toggle-${index}`}
      >
        <h3 className="text-base md:text-lg font-bold text-gray-900 pr-4">{question}</h3>
        {open ? <ChevronUp className="text-brand-red flex-shrink-0" size={22} /> : <ChevronDown className="text-gray-400 flex-shrink-0" size={22} />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HomePage() {
  const [currentReview, setCurrentReview] = useState(0);
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [cityTab, setCityTab] = useState<"electric" | "cctv">("electric");

  // Rotate reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const electricFenceFaqs = allFaqs.slice(0, 5);
  const cctvFaqs = allFaqs.slice(5, 10);

  return (
    <>
      <SEOHead
        title="Electric Fence & CCTV Installation in Punjab | Kirpal Securities | Jalandhar Ludhiana Amritsar Patiala"
        description="Kirpal Securities — Punjab's #1 electric fence & CCTV installation company. 7+ years, 3300+ installs, 24 cities. Free site inspection. Call 7009154711."
        keywords="electric fence installation near me, CCTV installation near me, electric fence Patiala, electric fence Mohali, electric fence Bathinda, CCTV camera installation Punjab, CCTV camera Ludhiana, CCTV camera Amritsar, security camera installation Punjab, electric fencing company near me, CCTV installer near me, solar electric fence Punjab, electric fence installation Jalandhar, electric fencing Ludhiana, Hikvision CCTV Punjab, CP Plus CCTV installation, Kirpal Securities"
        image="https://kirpalsecurities.in/hero-security-team.jpg"
        url="https://kirpalsecurities.in"
        type="website"
        structuredData={[
          // Schema 1 — LocalBusiness
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://kirpalsecurities.in/#localbusiness",
            "name": "Kirpal Securities",
            "description": "Kirpal Securities is Punjab's leading electric fence installation and CCTV camera installation company. We serve 24+ cities across Punjab including Jalandhar, Ludhiana, Amritsar, Patiala, Mohali and Bathinda. 7+ years experience, 3300+ installations.",
            "url": "https://kirpalsecurities.in",
            "telephone": ["+91-7009154711", "+91-9463687535"],
            "email": "kirpalsecurities@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Urban Estate Ph. 2, Road Opp. Hotel Imperia Suites",
              "addressLocality": "Jalandhar",
              "addressRegion": "Punjab",
              "addressCountry": "IN",
              "postalCode": "144022",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "31.3260",
              "longitude": "75.5762",
            },
            "hasMap": BUSINESS_INFO.googleBusinessUrl,
            "areaServed": [
              "Jalandhar", "Ludhiana", "Amritsar", "Patiala",
              "Mohali", "Bathinda", "Phagwara", "Kapurthala",
              "Hoshiarpur", "Pathankot", "Gurdaspur", "Moga",
              "Nakodar", "Sangrur", "Barnala", "Firozpur",
              "Rupnagar", "Fatehgarh Sahib", "Fazilka", "Muktsar",
              "Tarn Taran", "Mansa", "Nawanshahr", "Malerkotla",
              "Punjab",
            ].map((name) => ({ "@type": "City", "name": name })),
            "priceRange": "₹₹",
            "openingHours": [
              "Mo-Fr 09:00-19:00",
              "Sa 09:00-18:00",
              "Su 10:00-16:00",
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "312",
              "bestRating": "5",
              "worstRating": "1",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Security Services Punjab",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Electric Fence Installation", "areaServed": "Punjab" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agricultural Electric Fencing", "areaServed": "Punjab" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Perimeter Fencing", "areaServed": "Punjab" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Electric Fence Installation", "areaServed": "Punjab" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV Camera Installation", "areaServed": "Punjab" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hikvision CCTV Installation", "areaServed": "Punjab" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CP Plus CCTV Installation", "areaServed": "Punjab" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV AMC & Maintenance", "areaServed": "Punjab" } },
              ],
            },
            "sameAs": [BUSINESS_INFO.googleBusinessUrl],
          },
          // Schema 2 — WebSite with SearchAction
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://kirpalsecurities.in/#website",
            "name": "Kirpal Securities",
            "url": "https://kirpalsecurities.in",
            "description": "Punjab's #1 electric fence and CCTV installation company",
            "publisher": { "@id": "https://kirpalsecurities.in/#localbusiness" },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://kirpalsecurities.in/contact?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          },
          // Schema 3 — Service (Electric Fence)
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Electric Fence Installation in Punjab",
            "serviceType": "Electric Fence Installation",
            "description": "Professional electric fence installation for farms, factories, warehouses and homes across Punjab. Solar and grid-powered systems. Free site inspection.",
            "provider": { "@id": "https://kirpalsecurities.in/#localbusiness" },
            "areaServed": { "@type": "State", "name": "Punjab" },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "areaServed": "Punjab",
            },
          },
          // Schema 4 — Service (CCTV)
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "CCTV Camera Installation in Punjab",
            "serviceType": "CCTV Camera Installation",
            "description": "Hikvision, CP Plus and Dahua CCTV installation for homes, shops, offices and factories across Punjab. Packages from Rs 16000 with 2-year warranty.",
            "provider": { "@id": "https://kirpalsecurities.in/#localbusiness" },
            "areaServed": { "@type": "State", "name": "Punjab" },
            "offers": {
              "@type": "Offer",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "16000",
                "priceCurrency": "INR",
              },
              "availability": "https://schema.org/InStock",
            },
          },
          // Schema 5 — FAQPage (10 Q&A — matches visible FAQ)
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFaqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            })),
          },
        ]}
      />

      {/* Visually-hidden H1 for SEO */}
      <h1 className="sr-only">
        Electric Fence Installation & CCTV Camera Installation in Punjab | Kirpal Securities — Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda
      </h1>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden max-w-full -mt-16 sm:-mt-20 pt-16 sm:pt-20">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-red-dark to-gray-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-20 sm:h-20 border border-white/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white/20 rounded-lg"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-8 sm:left-16 w-8 h-8 sm:w-12 sm:h-12 bg-white/5 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ transformOrigin: 'center' }}
          />
        </div>

        {/* Hero Banner Slider */}
        <HeroBannerSlider />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 7, 0] }}
          transition={{ opacity: { delay: 1, duration: 0.6 }, y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
        >
          <div className="w-6 h-10 border-2 border-white/25 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { icon: Zap, value: <>{statsInView && <CountUp end={3300} duration={2.2} />}+</>, label: "Installations Across India", testid: "stat-installations" },
              { icon: MapPin, value: <>{statsInView && <CountUp end={24} duration={1.8} />}+</>, label: "Cities Across Punjab", testid: "stat-cities" },
              { icon: Award, value: <>{statsInView && <CountUp end={7} duration={2} />}+</>, label: "Years Experience", testid: "stat-years" },
              { icon: Clock, value: "24/7", label: "Support Available", testid: "stat-support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 24 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-xl sm:rounded-2xl shadow-glow flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-red mb-1 sm:mb-2" data-testid={stat.testid}>
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fence Wiring Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-red to-red-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
                    <Zap className="text-yellow-300 mr-3" size={40} />
                    Electric Fence Installation
                  </h2>
                  <p className="text-xl md:text-2xl font-semibold mb-3">Professional Perimeter Security Solutions</p>
                  <div className="flex items-center text-base md:text-lg">
                    <Shield className="text-yellow-300 mr-2" size={20} />
                    <span className="font-semibold">7+ Years Experience • 3300+ Installations • PAN INDIA</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                    <h4 className="font-bold text-lg mb-3 text-yellow-300">Pole Material Options</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-2 flex-shrink-0" size={14} />
                        <span>MS Powder Coating Pole - Durable & cost-effective</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-2 flex-shrink-0" size={14} />
                        <span>S.S 304 Grade Pole - Premium corrosion resistance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                    <h4 className="font-bold text-lg mb-3 text-yellow-300">Fencing Types</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-2 flex-shrink-0" size={14} />
                        <span>Openable Gate Fencing - Vehicle access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-2 flex-shrink-0" size={14} />
                        <span>Straight Fencing - Continuous protection</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/electric-fence-installation-punjab"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-red font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
                    data-testid="button-fence-learn-more"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('openQueryForm', {
                        detail: {
                          serviceType: 'Electric Fencing Installation',
                          message: 'I am interested in KIRPAL SECURITIES electric fencing installation. Please provide detailed pricing and timeline information.',
                        },
                      }));
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
                    data-testid="button-fence-contact"
                  >
                    Book Free Site Inspection
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="font-bold text-2xl mb-4 text-yellow-300">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-yellow-300 mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-white">Leading Manufacturer</p>
                        <p className="text-sm text-gray-200">North India's biggest solar electric fencing company</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-yellow-300 mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-white">Expert Team</p>
                        <p className="text-sm text-gray-200">Experienced engineers and technicians</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-yellow-300 mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-white">Complete Service Network</p>
                        <p className="text-sm text-gray-200">Spare parts and after-sales support</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-yellow-300 mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-white">PAN INDIA Reach</p>
                        <p className="text-sm text-gray-200">Based in Jalandhar with installations across India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electric Fence Services Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-br from-yellow-50 to-orange-50" aria-label="Electric Fence Services in Punjab">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
              <Zap className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-900">Punjab's #1 Electric Fence Company</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Electric Fence <span className="text-gradient">Installation Services</span> in Punjab
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Kirpal Securities is a professional electric fence installation company serving customers across all of Punjab. Our team frequently works in cities such as Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar — and we serve the entire Punjab region.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Sun,
                title: "Solar Electric Fence Installation",
                description: "Eco-friendly solar-powered fencing systems ideal for farms and remote properties across Punjab. Our solar energizers ensure 24/7 protection even during power cuts.",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: Factory,
                title: "Industrial Perimeter Fencing",
                description: "Heavy-duty industrial electric fencing for factories, warehouses, and industrial units. High-tension wire systems with alarm integration for complete perimeter security.",
                color: "from-gray-600 to-gray-800",
              },
              {
                icon: Home,
                title: "Residential Electric Fence Systems",
                description: "Safe, smart residential electric fencing for homes, villas, and housing societies in Punjab. Safe pulse technology ensures family and pet safety.",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: Building,
                title: "Warehouse Security Fencing",
                description: "Protect valuable goods with perimeter electric fencing for warehouses and storage facilities. Instant alarm alerts and remote monitoring available.",
                color: "from-purple-500 to-indigo-600",
              },
              {
                icon: Shield,
                title: "Commercial Campus Fencing",
                description: "Secure office campuses, schools, and commercial properties with professional electric perimeter fencing. Integrated with CCTV for complete security coverage.",
                color: "from-brand-red to-red-700",
              },
              {
                icon: Zap,
                title: "Agricultural Electric Fencing",
                description: "Protect crops and livestock from wild animals and intruders. Specially designed agricultural fencing for farms in Jalandhar, Ludhiana, Amritsar and surrounding areas.",
                color: "from-green-500 to-emerald-600",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <service.icon className="text-white" size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-red transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openQueryForm', {
                    detail: {
                      serviceType: 'Electric Fencing Installation',
                      message: 'I need a quote for electric fence installation. Please provide pricing details.',
                    },
                  }));
                }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black px-10 py-4 text-lg font-bold rounded-xl inline-flex items-center gap-3 shadow-xl transform hover:scale-105 transition-all"
                data-testid="button-electric-fence-quote"
              >
                <Zap size={22} />
                Get Free Electric Fence Quote
              </button>
              <Link
                href="/electric-fence-installation-punjab"
                className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-yellow-500 px-8 py-4 text-lg font-bold rounded-xl inline-flex items-center gap-3 shadow-md transform hover:scale-105 transition-all"
                data-testid="link-electric-fence-pillar"
              >
                <ArrowRight size={20} />
                Explore All Punjab Cities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CCTV Camera Installation Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" aria-label="CCTV Camera Installation Services in Punjab">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Video className="w-5 h-5 text-blue-700" />
              <span className="text-sm font-semibold text-blue-900">Trusted CCTV Installers Across Punjab</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              CCTV Camera <span className="text-gradient">Installation Services</span> in Punjab
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Kirpal Securities installs Hikvision, CP Plus and Dahua CCTV camera systems for homes, shops, factories and offices across Punjab. Complete packages from ₹16,000 with HD or 4K cameras, mobile viewing, NVR/DVR setup and a 2-year warranty — serving Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda and 12 more cities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Home,
                title: "Home & Villa CCTV Installation",
                description: "4-camera and 8-camera HD/4K systems for kothis, villas and apartments. Mobile app viewing on iOS and Android, night vision and cloud backup. Installed across Punjab.",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: Building,
                title: "Shop & Showroom CCTV",
                description: "Theft-deterrent CCTV for retail shops, jewellery stores, showrooms and restaurants. Counter cameras, entrance domes and DVR storage with audio recording where permitted.",
                color: "from-cyan-500 to-blue-600",
              },
              {
                icon: Factory,
                title: "Factory & Warehouse CCTV",
                description: "Heavy-duty IP camera systems for industrial units, warehouses and factories. PoE switches, NVR storage, and gate-to-loading-bay coverage with remote monitoring.",
                color: "from-slate-600 to-slate-800",
              },
              {
                icon: Eye,
                title: "Office & Commercial CCTV",
                description: "Multi-floor CCTV networks for offices, hospitals, schools and commercial buildings. Centralised NVR, role-based access and integration with access control systems.",
                color: "from-indigo-500 to-blue-700",
              },
              {
                icon: Video,
                title: "4K & IP Camera Systems",
                description: "Premium IP cameras with motion alerts, two-way audio, smart detection and 4MP/8MP resolution. Hikvision and CP Plus IP series with full Kirpal installation support.",
                color: "from-blue-600 to-indigo-700",
              },
              {
                icon: Wrench,
                title: "AMC & CCTV Maintenance",
                description: "Annual maintenance contracts, repairs, camera replacements and remote support across Punjab. We service systems we installed and systems installed by others.",
                color: "from-brand-red to-red-700",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <service.icon className="text-white" size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-red transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CCTV City Quick Links */}
          <motion.div
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              CCTV Camera Installation — Choose Your City
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {cctvCities.map((city) => (
                <Link
                  key={city.slug}
                  href={city.url}
                  className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors text-center border border-gray-100 hover:border-blue-200"
                  data-testid={`home-link-cctv-${city.slug}`}
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openQueryForm', {
                    detail: {
                      serviceType: 'CCTV Camera Installation',
                      message: 'I need a quote for CCTV camera installation. Please share package and pricing details.',
                    },
                  }));
                }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-10 py-4 text-lg font-bold rounded-xl inline-flex items-center gap-3 shadow-xl transform hover:scale-105 transition-all"
                data-testid="button-cctv-quote"
              >
                <Video size={22} />
                Get Free CCTV Quote
              </button>
              <Link
                href="/cctv-camera-installation-punjab"
                className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-blue-500 px-8 py-4 text-lg font-bold rounded-xl inline-flex items-center gap-3 shadow-md transform hover:scale-105 transition-all"
                data-testid="link-cctv-pillar"
              >
                <ArrowRight size={20} />
                Explore All Punjab Cities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Materials & Technology Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-white" aria-label="Electric Fence Materials and Technology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Premium <span className="text-gradient">Materials & Technology</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use only high-grade, weather-resistant materials and certified energizers for long-lasting perimeter security across Punjab.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { label: "MS Powder Coated Poles", desc: "Durable & cost-effective, rust-resistant coating" },
              { label: "SS 304 Stainless Steel Poles", desc: "Premium grade, ideal for harsh weather conditions" },
              { label: "High Voltage Energizers", desc: "Certified energizers with pulse safety technology" },
              { label: "Insulated High-Tension Wire", desc: "UV-resistant wire rated for outdoor use" },
              { label: "Safe Pulse Technology", desc: "Non-lethal short pulses — safe for humans and animals" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ backgroundColor: "#fefce8", borderColor: "#fde68a", y: -3 }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <p className="font-bold text-gray-900 text-sm mb-1">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services — Focused 4 Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 16 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 text-display px-4">
              Our <span className="text-gradient">Core Services</span> in Punjab
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Professional installation across Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda and 18 more cities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                title: "Electric Fence Installation",
                description: "Professional perimeter electric fencing for farms, factories, warehouses and homes across Punjab. MS and SS 304 poles with safe pulse energizers.",
                features: ["Free Site Inspection", "MS / SS 304 Poles", "Pulse Energizer", "Punjab-wide Service"],
                color: "from-yellow-400 to-orange-500",
                href: "/electric-fence-installation-punjab",
                testid: "core-service-electric-fence",
              },
              {
                icon: Sun,
                title: "Solar Electric Fencing",
                description: "Eco-friendly solar-powered electric fence systems ideal for farms and remote properties — works 24/7 without grid power.",
                features: ["Solar Energizer", "24/7 Operation", "Off-Grid Ready", "Low Maintenance"],
                color: "from-amber-400 to-yellow-500",
                href: "/electric-fence-installation-punjab",
                testid: "core-service-solar-fence",
              },
              {
                icon: Video,
                title: "CCTV Camera Installation",
                description: "Hikvision, CP Plus and Dahua CCTV systems for homes, shops, factories and offices. Packages from ₹16,000 with mobile app and warranty.",
                features: ["HD / 4K Cameras", "Mobile Viewing", "NVR / DVR Setup", "2-Year Warranty"],
                color: "from-blue-500 to-cyan-500",
                href: "/cctv-camera-installation-punjab",
                testid: "core-service-cctv",
              },
              {
                icon: Wrench,
                title: "CCTV AMC & Maintenance",
                description: "Annual maintenance contracts, camera repairs and replacements, DVR/NVR servicing, and remote support across Punjab.",
                features: ["AMC Contracts", "Camera Repair", "DVR Servicing", "Remote Support"],
                color: "from-indigo-500 to-purple-600",
                href: "/cctv-camera-installation-punjab",
                testid: "core-service-amc",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="card-modern p-4 sm:p-6 lg:p-8 group flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`card-${service.testid}`}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={20} />
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="mt-auto inline-flex items-center text-brand-red font-semibold hover:text-brand-red-dark group/link text-sm sm:text-base"
                  data-testid={`link-${service.testid}`}
                >
                  Learn More
                  <ArrowRight className="ml-2 transition-transform group-hover/link:translate-x-1" size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 text-display px-4">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Real testimonials from satisfied customers across Punjab who trust us for electric fence and CCTV installation
            </p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-modern p-8 md:p-12 text-center" data-testid={`review-${reviews[currentReview].id}`}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                    <Quote className="text-white" size={24} />
                  </div>

                  <div className="flex justify-center mb-6">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={24} />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
                    "{reviews[currentReview].text}"
                  </blockquote>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="text-white" size={20} />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 flex items-center">
                        {reviews[currentReview].name}
                        {reviews[currentReview].verified && (
                          <CheckCircle className="text-green-500 ml-2" size={16} />
                        )}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {reviews[currentReview].service}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Review indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentReview ? 'bg-brand-red scale-125' : 'bg-gray-300'
                  }`}
                  data-testid={`review-indicator-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas — We Serve All of Punjab (Tabs) */}
      <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white" aria-label="Electric Fence and CCTV Service Areas in Punjab">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full mb-4">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-300">Serving All of Punjab</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              We Serve <span className="text-yellow-400">All of Punjab</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Click your city to see local service details, pricing and installation info
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 bg-white/10 rounded-2xl border border-white/10">
              <button
                onClick={() => setCityTab("electric")}
                className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all ${
                  cityTab === "electric"
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : 'text-gray-200 hover:text-white'
                }`}
                data-testid="tab-electric-fence-cities"
              >
                <Zap className="inline-block mr-2 -mt-0.5" size={18} />
                Electric Fence Cities
              </button>
              <button
                onClick={() => setCityTab("cctv")}
                className={`px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all ${
                  cityTab === "cctv"
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-200 hover:text-white'
                }`}
                data-testid="tab-cctv-cities"
              >
                <Video className="inline-block mr-2 -mt-0.5" size={18} />
                CCTV Cities
              </button>
            </div>
          </div>

          {/* City grids */}
          <AnimatePresence mode="wait">
            {cityTab === "electric" ? (
              <motion.div
                key="electric-grid"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {electricFenceCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={city.url}
                    className="group bg-white/5 hover:bg-yellow-400/10 border-2 border-white/10 hover:border-yellow-400 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
                    data-testid={`city-electric-${city.slug}`}
                  >
                    <Zap className="text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" size={22} />
                    <p className="font-bold text-white text-sm sm:text-base mb-1">{city.name}</p>
                    <p className="text-xs text-gray-400 group-hover:text-yellow-300">Electric Fence</p>
                  </Link>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="cctv-grid"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {cctvCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={city.url}
                    className="group bg-white/5 hover:bg-blue-500/10 border-2 border-white/10 hover:border-blue-400 rounded-xl p-4 text-center transition-all duration-300 hover:scale-105"
                    data-testid={`city-cctv-${city.slug}`}
                  >
                    <Video className="text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" size={22} />
                    <p className="font-bold text-white text-sm sm:text-base mb-1">{city.name}</p>
                    <p className="text-xs text-gray-400 group-hover:text-blue-300">CCTV Installation</p>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg mb-4">
              We provide installation services across the entire Punjab region. Contact us to confirm availability in your area.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-xl font-bold transition-all shadow-lg"
              data-testid="link-check-availability"
            >
              <Phone size={18} />
              Check Service Availability in Your Area
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-brand-red to-brand-red-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-display px-2">
              Why Choose Kirpal Securities?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto px-2">
              Experience the difference with our premium electric fence and CCTV installation services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Award,
                title: "Experienced Installation Engineers",
                description: "7+ years of expertise in electric fence and CCTV installation across Punjab with 3300+ successful projects",
              },
              {
                icon: Shield,
                title: "Premium Materials & Brands",
                description: "MS Powder Coated and SS 304 poles, certified energizers, plus genuine Hikvision, CP Plus and Dahua CCTV systems",
              },
              {
                icon: Zap,
                title: "Fast Installation & Support",
                description: "Quick site inspection, professional installation, and reliable after-sales support across all Punjab cities",
              },
              {
                icon: MapPin,
                title: "Serving All of Punjab",
                description: "Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda, Phagwara, Kapurthala, Hoshiarpur, Pathankot and 14 more Punjab cities",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-200">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Offers Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 text-display px-4">
              Special <span className="text-gradient">Package Offers</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choose from our exclusive security packages designed for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {cctvPackages.slice(0, 3).map((pkg, index) => {
              const savings = pkg.originalPrice - pkg.discountedPrice;
              const savingsPercent = Math.round((savings / pkg.originalPrice) * 100);
              const colors = ["from-blue-500 to-cyan-500", "from-green-500 to-emerald-500", "from-purple-500 to-pink-500"];
              const isPopular = index === 1;

              return (
                <motion.div
                  key={pkg.id}
                  className={`card-modern p-4 sm:p-6 lg:p-8 relative group hover-lift h-full flex flex-col ${
                    isPopular ? 'ring-2 ring-brand-red sm:scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  data-testid={`package-${pkg.id}`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 w-max">
                      <span className="bg-gradient-primary text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${colors[index]} rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    {index === 0 && <Video className="text-white" size={24} />}
                    {index === 1 && <Home className="text-white" size={24} />}
                    {index === 2 && <Shield className="text-white" size={24} />}
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-3 sm:mb-4">{pkg.name}</h3>

                  <div className="text-center mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-red">₹{pkg.discountedPrice.toLocaleString()}</span>
                      <div className="flex flex-col items-center sm:items-start">
                        <span className="text-sm sm:text-base lg:text-lg text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm text-green-600 font-semibold">Save ₹{savings.toLocaleString()}</span>
                          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-bold">{savingsPercent}% OFF</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" size={14} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className={`block w-full text-center py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all shadow-lg ${
                        isPopular
                          ? 'bg-gradient-primary text-white hover:bg-gradient-secondary hover:shadow-xl'
                          : 'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white hover:shadow-xl'
                      }`}
                      data-testid={`package-button-${index}`}
                    >
                      Choose Package
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <Link
              href="/packages"
              className="btn-modern px-8 py-4 text-lg font-bold rounded-xl inline-flex items-center group shadow-lg hover:shadow-xl"
              data-testid="button-view-more-packages"
            >
              View All Package Deals
              <ArrowRight className="ml-3 transition-transform group-hover:translate-x-1" size={20} />
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              Explore our complete range of CCTV packages and security solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section — 10 Questions matching schema exactly */}
      <section className="py-10 sm:py-14 md:py-16 bg-gray-50" aria-label="Electric Fence and CCTV Installation FAQs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/10 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-5 h-5 text-brand-red" />
              <span className="text-sm font-semibold text-brand-red">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Electric Fence & CCTV Installation — <span className="text-gradient">FAQs</span>
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our services across Punjab
            </p>
          </motion.div>

          {/* Electric Fence FAQs */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              Electric Fence Installation
            </h3>
            <div className="space-y-4">
              {electricFenceFaqs.map((faq, index) => (
                <FaqItem key={`ef-${index}`} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </div>

          {/* CCTV FAQs */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Video className="w-5 h-5 text-blue-500" />
              CCTV Camera Installation
            </h3>
            <div className="space-y-4">
              {cctvFaqs.map((faq, index) => (
                <FaqItem key={`cctv-${index}`} question={faq.question} answer={faq.answer} index={index + 5} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Near Me — Local SEO Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-white" aria-label="Electric Fence and CCTV Installation Near Me in Punjab">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/10 px-4 py-2 rounded-full mb-4">
              <MapPin className="w-5 h-5 text-brand-red" />
              <span className="text-sm font-semibold text-brand-red">Local Service — Punjab Wide</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Looking for Electric Fence or CCTV Installation Near You?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kirpal Securities provides electric fence installation and CCTV camera installation near you across all of Punjab. Whether you are in Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda, Phagwara, Kapurthala, Hoshiarpur, Pathankot or any other Punjab city — our installation team is near you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Electric Fence Near Me Card */}
            <motion.button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('openQueryForm', {
                  detail: {
                    serviceType: 'Electric Fencing Installation',
                    message: 'I am looking for electric fence installation near me in Punjab. Please contact me for a free site inspection.',
                  },
                }));
              }}
              className="group text-left bg-gradient-to-br from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 border-2 border-yellow-300 hover:border-yellow-500 rounded-2xl p-8 transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              data-testid="button-electric-fence-near-me"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={26} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Electric Fence Near Me</h3>
              <p className="text-gray-700 mb-4">
                Free site inspection across Punjab. Solar, agricultural, industrial and residential electric fencing.
              </p>
              <div className="inline-flex items-center font-bold text-orange-600 group-hover:text-orange-700">
                Get Free Quote
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </div>
            </motion.button>

            {/* CCTV Near Me Card */}
            <motion.button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('openQueryForm', {
                  detail: {
                    serviceType: 'CCTV Camera Installation',
                    message: 'I am looking for CCTV camera installation near me in Punjab. Please share package and pricing details.',
                  },
                }));
              }}
              className="group text-left bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border-2 border-blue-300 hover:border-blue-500 rounded-2xl p-8 transition-all hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              data-testid="button-cctv-near-me"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Video className="text-white" size={26} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">CCTV Installation Near Me</h3>
              <p className="text-gray-700 mb-4">
                Hikvision, CP Plus and Dahua CCTV packages from ₹16,000 with mobile viewing and 2-year warranty.
              </p>
              <div className="inline-flex items-center font-bold text-blue-600 group-hover:text-blue-700">
                Get Free Quote
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </div>
            </motion.button>
          </div>

          <motion.p
            className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our teams operate from Jalandhar (Plus Code: 8H2P+FJ) and cover the entire Punjab state. Typical response time for site inspection booking: 24 hours. Call <a href="tel:7009154711" className="font-bold text-brand-red hover:underline" data-testid="link-near-me-nikhil">Nikhil: 7009154711</a> | <a href="tel:9463687535" className="font-bold text-brand-red hover:underline" data-testid="link-near-me-naveen">Naveen: 9463687535</a>
          </motion.p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-br from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4">
              Secure Your Property with Professional Electric Fence & CCTV Installation
            </h2>
            <p className="text-lg md:text-xl text-gray-900 mb-8 max-w-3xl mx-auto">
              Kirpal Securities provides reliable electric fence installation and CCTV camera installation services across all of Punjab — including Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda, Pathankot, Hoshiarpur and 16 more cities. Contact us for a free consultation and site inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7009154711"
                className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-all shadow-xl"
                data-testid="link-final-call-nikhil"
              >
                <Phone size={22} />
                Call NIKHIL: 7009154711
              </a>
              <a
                href="https://wa.me/917009154711?text=Hi, I need a quote for electric fence or CCTV installation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl"
                data-testid="link-final-whatsapp"
              >
                <MessageCircle size={22} />
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
                data-testid="link-final-quote"
              >
                Get Free Quote
                <ArrowRight size={22} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 text-display px-4">
              Ready to Secure Your <span className="text-gradient">Future</span>?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed px-4">
              Get a free security consultation and customized quote within 24 hours
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="card-modern p-8 text-center hover-lift" data-testid="contact-phones">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Call Our Experts</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <strong>NIKHIL:</strong>{' '}
                    <a
                      href="tel:7009154711"
                      className="text-brand-red font-bold hover:text-brand-red-dark transition-colors"
                      data-testid="phone-nikhil"
                    >
                      7009154711
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <strong>NAVEEN:</strong>{' '}
                    <a
                      href="tel:9463687535"
                      className="text-brand-red font-bold hover:text-brand-red-dark transition-colors"
                      data-testid="phone-naveen"
                    >
                      9463687535
                    </a>
                  </p>
                </div>
              </div>

              <div className="card-modern p-8 text-center hover-lift" data-testid="contact-email">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Email Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Get detailed quotes and technical specifications
                </p>
                <a
                  href="mailto:kirpalsecurities@gmail.com"
                  className="text-brand-red font-bold hover:text-brand-red-dark transition-colors"
                  data-testid="email-contact"
                >
                  kirpalsecurities@gmail.com
                </a>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-brand-red hover:bg-red-700 text-white px-12 py-4 text-xl font-bold rounded-xl inline-flex items-center group shadow-lg hover:shadow-xl transition-all"
              data-testid="button-get-free-quote"
            >
              Book Free Site Inspection
              <Phone className="ml-3 transition-transform group-hover:translate-x-1" size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
