import {
  Phone,
  MessageCircle,
  FileText,
  ShieldCheck,
  Camera,
  Video,
  Eye,
  HardDrive,
  Wifi,
  Building2,
  Factory,
  Home,
  Store,
  Users,
  Award,
  CheckCircle,
  ChevronDown,
  MapPin,
  ChevronRight,
  Sparkles,
  Star,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { cctvCities, buildCCTVSchemas } from "@/lib/cctv-cities";

const faqs = [
  {
    question: "How much does CCTV camera installation cost in Punjab?",
    answer:
      "Our complete CCTV packages in Punjab start from ₹16,000 for a 4-camera HD setup with DVR, 500GB hard disk and full installation. 8-camera packages start at ₹21,500 and IP camera setups from ₹20,000. Final pricing depends on camera type, brand, cabling distance and accessories. We provide a free site survey and written quote — no hidden charges.",
  },
  {
    question: "Which CCTV brands do you install?",
    answer:
      "We install Hikvision, CP Plus and Dahua — the three most reliable CCTV brands in India. All hardware is sourced through authorized channels with full manufacturer warranty. We also use surveillance-grade hard disks (WD Purple / Seagate Skyhawk) built for 24/7 recording — never consumer drives.",
  },
  {
    question: "Where in Punjab do you provide CCTV installation?",
    answer:
      "Kirpal Securities provides CCTV camera installation across all of Punjab. Our regular service cities include Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda, Phagwara, Kapurthala, Hoshiarpur, Pathankot, Gurdaspur, Moga, Nakodar, Sangrur, Rupnagar, Firozpur, Tarn Taran and Nawanshahr — plus surrounding towns and villages.",
  },
  {
    question: "Can I view my CCTV cameras from my mobile?",
    answer:
      "Yes — every installation includes live mobile viewing on Android and iPhone. You get live view of all cameras, recording playback and motion alerts from anywhere. Many of our NRI customers in Hoshiarpur, Nawanshahr, Phagwara and Nakodar monitor their Punjab properties from Canada, UK, USA and Australia.",
  },
  {
    question: "How long does CCTV installation take?",
    answer:
      "A 4-camera home or shop installation typically takes 4–6 hours. An 8-camera setup takes 1 day. Larger 16–32 camera factory and IP installations take 2–3 days, including cabling, NVR setup, mobile configuration and customer briefing.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "All cameras and recording units come with 2-year manufacturer warranty. We also provide installation workmanship support and quick service response. Optional Annual Maintenance Contracts (AMC) are available for hotels, factories and large commercial properties needing priority service.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-brand-red flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 bg-white border-t border-gray-100">
          <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

const installationSteps = [
  { step: "01", title: "Site Survey", desc: "Our team visits your property to assess camera placement, cable routing and recording requirements." },
  { step: "02", title: "System Design & Quote", desc: "Customised camera layout with the right mix of dome, bullet, PTZ and IP cameras plus NVR/DVR sized for your needs." },
  { step: "03", title: "Cabling & Mounting", desc: "CAT6 / coaxial cabling routed and concealed where possible. Cameras mounted at optimal heights and angles." },
  { step: "04", title: "NVR/DVR & Storage", desc: "Recording unit installed and configured with surveillance hard disk, channels mapped and recording schedules set." },
  { step: "05", title: "Mobile App & Handover", desc: "Live remote viewing set up on your phone, full system tested and your team briefed on day-to-day operation." },
];

const PAGE_URL = "https://kirpalsecurities.in/cctv-camera-installation-punjab";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "CCTV Camera Installation Punjab" },
];

const schemaBreadcrumbs = [
  { name: "Home", item: "https://kirpalsecurities.in/" },
  { name: "Services", item: "https://kirpalsecurities.in/services" },
  { name: "CCTV Camera Installation Punjab", item: PAGE_URL },
];

export default function CCTVInstallationPunjabPage() {
  const handleQuote = () => {
    const msg = encodeURIComponent(
      "Hello! I would like to request a free quote for CCTV camera installation in Punjab. Please get back to me. Thanks!",
    );
    window.open(`https://wa.me/917009154711?text=${msg}`, "_blank");
  };

  const structuredData = buildCCTVSchemas({
    pageTitle: "CCTV Camera Installation in Punjab | Kirpal Securities",
    pageUrl: PAGE_URL,
    breadcrumbs: schemaBreadcrumbs,
    faqs,
  });

  return (
    <>
      <SEOHead
        title="CCTV Camera Installation in Punjab | Hikvision, CP Plus, Dahua | Kirpal Securities"
        description="Professional CCTV camera installation across Punjab. Hikvision, CP Plus & Dahua systems for homes, shops, factories and offices. Packages from ₹16,000 with 2-year warranty. Serving Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda and all Punjab cities. Call 7009154711."
        keywords="CCTV installation Punjab, CCTV camera Punjab, Hikvision Punjab, CP Plus Punjab, Dahua CCTV Punjab, IP camera installation Punjab, security camera Punjab, CCTV Jalandhar, CCTV Ludhiana, CCTV Amritsar, CCTV Patiala, CCTV Mohali, CCTV Bathinda, CCTV factory Punjab, CCTV shop Punjab, NRI kothi CCTV Punjab"
        image="https://kirpalsecurities.in/cctv-installation-punjab.jpg"
        url={PAGE_URL}
        canonicalUrl={PAGE_URL}
        type="website"
        structuredData={structuredData}
      />

      <BreadcrumbNav items={breadcrumbItems} />

      {/* Section 1 — Hero */}
      <section className="bg-brand-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-200 text-sm font-medium uppercase tracking-widest mb-4">
            Kirpal Securities — Professional CCTV Installers Punjab
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            CCTV Camera Installation in Punjab
            <span className="block text-base sm:text-lg md:text-xl font-medium text-red-100 mt-2">
              Hikvision · CP Plus · Dahua · HD &amp; IP Cameras · Free Site Survey
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-3 sm:mb-4 text-red-100 speakable">
            Kirpal Securities installs Hikvision, CP Plus and Dahua CCTV systems for homes, shops,
            factories and offices across Punjab. Complete packages from ₹16,000 with 2-year
            warranty.
          </p>
          <p className="text-xs sm:text-sm text-red-200 mb-6 sm:mb-8">
            Serving Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda and 18+ cities across
            Punjab.
          </p>

          {/* Hero trust strip */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
              <Star size={14} className="fill-yellow-300 text-yellow-300" />
              <strong>4.9/5</strong> · 215+ reviews
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
              <BadgeCheck size={14} /> 7+ years experience
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
              <ShieldCheck size={14} /> 2-year warranty
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
              <Clock size={14} /> Same-day site survey
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleQuote}
              className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] px-8 flex items-center gap-2"
              data-testid="button-get-quote"
            >
              <FileText size={18} />
              Get Free Quote
            </Button>
            <a href="tel:7009154711" data-testid="button-call-now">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-red font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </Button>
            </a>
            <a
              href="https://wa.me/917009154711"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <MessageCircle size={18} />
                WhatsApp Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 — Why CCTV */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Punjab Properties Need Professional CCTV
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Whether it's a Ludhiana hosiery factory, an Amritsar jewellery shop, a Hoshiarpur NRI
              kothi or a Mohali IT-park office — modern security needs round-the-clock surveillance
              with HD recording and live mobile viewing.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Kirpal Securities is a Jalandhar-based CCTV installation company with over 7 years of
              experience and 3,300+ installations across Punjab. We supply only genuine Hikvision,
              CP Plus and Dahua hardware — never grey-market imports — and provide full
              installation, mobile setup and 2-year warranty.
            </p>
            <p className="text-lg text-gray-600">
              From a single 4-camera shop installation to a 32-camera IP system across an industrial
              campus — we size and install the right system for your property and your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="highlight-1">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">HD &amp; 4K Clarity</h3>
              <p className="text-gray-600 text-sm">
                Crystal-clear day &amp; night colour footage from 5MP and 4K cameras across every
                installation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="highlight-2">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wifi size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Mobile View</h3>
              <p className="text-gray-600 text-sm">
                Watch your property live from any phone, anywhere — Android and iOS supported.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="highlight-3">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2-Year Warranty</h3>
              <p className="text-gray-600 text-sm">
                Genuine brand warranty on cameras and recorders, plus our own service support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Where We Install */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Where We Install CCTV Across Punjab
            </h2>
            <p className="text-xl text-gray-600">
              Surveillance for every property type — homes, shops, factories, offices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Home size={22} />,
                title: "CCTV for Homes & Kothis",
                desc: "Multi-camera setups for kothis and apartments across Punjab covering main gate, perimeter, drive-way, terrace and main entries with mobile alerts and overseas viewing for NRI families.",
              },
              {
                icon: <Store size={22} />,
                title: "CCTV for Shops & Showrooms",
                desc: "High-resolution dome and bullet cameras for retail, jewellery shops and showrooms with continuous recording, billing-counter coverage and remote monitoring on phone.",
              },
              {
                icon: <Factory size={22} />,
                title: "CCTV for Factories & Warehouses",
                desc: "8–32 camera IP setups for hosiery, cycle, sports goods, hand-tool, dairy and food-processing units across Punjab. PTZ cameras for yards, NVRs sized for 30–60 day recording.",
              },
              {
                icon: <Building2 size={22} />,
                title: "CCTV for Offices & Commercial Spaces",
                desc: "Multi-floor coverage for IT parks, banks, hotels, schools and corporate offices with rack-mounted NVR, structured cabling and integrated mobile / browser access.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-6 flex gap-4"
                data-testid={`use-${i}`}
              >
                <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Camera Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of CCTV Cameras We Install</h2>
            <p className="text-xl text-gray-600">Right camera for every space and security requirement</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Camera size={24} />, title: "Dome Cameras", desc: "Discreet indoor coverage for shops, lobbies and offices. Wide viewing angle with vandal-resistant housings." },
              { icon: <Video size={24} />, title: "Bullet Cameras", desc: "Outdoor weatherproof cameras for gates, parking and perimeter walls with strong infrared night vision." },
              { icon: <Eye size={24} />, title: "PTZ Cameras", desc: "Pan-Tilt-Zoom cameras for large premises — yards, godowns and industrial areas needing active monitoring." },
              { icon: <Wifi size={24} />, title: "IP / 4K Cameras", desc: "Network IP cameras with 4MP–8MP resolution and PoE for crystal-clear footage and easy expansion." },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6" data-testid={`type-${i}`}>
                <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Brands & Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Trusted CCTV Brands We Install</h2>
              <p className="text-lg text-gray-600 mb-8">
                We install only proven, reliable brands trusted by businesses and homes across
                Punjab. All hardware is sourced through authorized channels with manufacturer
                warranty.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Hikvision", desc: "Global leader in HD and IP surveillance. ColorVu day-night colour, AcuSense smart detection and 4K clarity." },
                  { label: "CP Plus", desc: "India's most-used CCTV brand. Excellent value, wide product range and strong service network across Punjab." },
                  { label: "Dahua", desc: "Premium IP cameras and NVRs with advanced AI features, low-light performance and rock-solid reliability." },
                  { label: "Surveillance Hard Disks", desc: "WD Purple / Seagate Skyhawk drives built specifically for 24/7 CCTV recording — no consumer drives." },
                  { label: "PoE Switches & CAT6", desc: "Quality networking gear and copper CAT6 cabling for stable, long-distance IP camera runs." },
                ].map(({ label, desc }, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-white rounded-lg p-4 shadow-sm"
                    data-testid={`brand-${i}`}
                  >
                    <Sparkles className="text-brand-red flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">{label}</p>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-red text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">CCTV Packages — Punjab</h3>
              <p className="text-red-100 mb-6 text-sm">
                Complete packages — cameras, NVR/DVR, hard disk, wiring, PoE switch and full
                installation. 2-year warranty included.
              </p>

              <div className="space-y-3 mb-6">
                <div className="bg-white/10 rounded-lg p-4" data-testid="pkg-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="font-semibold">4 Camera Setup</p>
                    <p className="text-xl font-bold">From ₹16,000</p>
                  </div>
                  <p className="text-red-100 text-sm">
                    5MP HD cameras, 4ch DVR, 500GB HDD, full installation.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4" data-testid="pkg-8">
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="font-semibold">8 Camera Setup</p>
                    <p className="text-xl font-bold">From ₹21,500</p>
                  </div>
                  <p className="text-red-100 text-sm">
                    8 × 5MP cameras, 8ch DVR, 500GB HDD, complete installation.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4" data-testid="pkg-ip">
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="font-semibold">Premium IP Series</p>
                    <p className="text-xl font-bold">From ₹20,000</p>
                  </div>
                  <p className="text-red-100 text-sm">
                    5MP IP cameras, 4K NVR, PoE switch, CAT6 wiring.
                  </p>
                </div>
              </div>

              <a href="/packages" data-testid="link-packages">
                <Button className="bg-white text-brand-red hover:bg-red-50 font-semibold w-full mb-3">
                  View All CCTV Packages
                </Button>
              </a>
              <a href="https://wa.me/917009154711" target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold w-full"
                  data-testid="button-whatsapp-quote"
                >
                  WhatsApp for Free Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Installation Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our CCTV Installation Process</h2>
            <p className="text-xl text-gray-600">From site survey to handover — clean, professional installations</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {installationSteps.map(({ step, title, desc }, i) => (
              <div key={i} className="text-center" data-testid={`step-${i}`}>
                <div className="w-14 h-14 rounded-full bg-brand-red text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — All Punjab Cities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CCTV Installation Across Punjab Cities</h2>
            <p className="text-xl text-gray-600">
              Choose your city for local CCTV installation services
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cctvCities.map((city) => (
              <a
                key={city.slug}
                href={city.url}
                className="flex items-center justify-between gap-2 p-4 bg-white rounded-lg hover:bg-red-50 hover:border-brand-red border border-gray-200 transition-all group"
                data-testid={`city-${city.slug}`}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="text-brand-red flex-shrink-0" size={16} />
                  <span className="font-semibold text-gray-900">{city.name}</span>
                </div>
                <ChevronRight
                  size={16}
                  className="text-gray-400 group-hover:text-brand-red transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Why Choose Kirpal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kirpal Securities</h2>
            <p className="text-xl text-gray-600">Punjab's trusted CCTV camera installation specialists</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Award size={28} />, stat: "7+", label: "Years Experience", desc: "Over seven years installing CCTV across Punjab." },
              { icon: <CheckCircle size={28} />, stat: "3300+", label: "Installations", desc: "Thousands of CCTV setups for homes, shops, factories and offices." },
              { icon: <Users size={28} />, stat: "Pro", label: "Engineers", desc: "Trained CCTV technicians handling cabling, mounting and config in-house." },
              { icon: <ShieldCheck size={28} />, stat: "2 Yr", label: "Warranty", desc: "Genuine brand warranty on cameras and recorders, plus our service support." },
              { icon: <HardDrive size={28} />, stat: "24/7", label: "Recording", desc: "Continuous recording with surveillance-grade hard disks for non-stop coverage." },
            ].map(({ icon, stat, label, desc }, i) => (
              <div
                key={i}
                className="text-center bg-gray-50 rounded-lg p-6"
                data-testid={`why-${i}`}
              >
                <div className="bg-brand-red text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  {icon}
                </div>
                <div className="text-3xl font-bold text-brand-red mb-1">{stat}</div>
                <div className="font-semibold text-gray-900 mb-2">{label}</div>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Industry-Specific CCTV Solutions
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Tailored CCTV camera systems for every industry — with camera placement guides, recommended systems and industry FAQs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/best-cctv-camera-for-school", label: "Best CCTV Camera for School", desc: "Student safety, entrance control and campus surveillance." },
              { href: "/best-cctv-camera-for-factory", label: "Best CCTV Camera for Factory", desc: "Production monitoring, gate security and worker safety." },
              { href: "/best-cctv-camera-for-warehouse", label: "Best CCTV Camera for Warehouse", desc: "Inventory protection, loading dock and perimeter monitoring." },
              { href: "/best-cctv-camera-for-office", label: "Best CCTV Camera for Office", desc: "Access control, employee safety and data protection." },
              { href: "/best-cctv-camera-for-hospital", label: "Best CCTV Camera for Hospital", desc: "Patient safety, pharmacy security and emergency monitoring." },
              { href: "/best-cctv-camera-for-commercial-buildings", label: "Best CCTV for Commercial Buildings", desc: "Multi-floor lobbies, parking and tenant surveillance systems." },
            ].map(({ href, label, desc }) => (
              <a
                key={href}
                href={href}
                className="flex flex-col gap-1.5 p-5 bg-gray-50 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-red-50 transition-all group shadow-sm"
                data-testid={`industry-${href.replace(/\//g, "-")}`}
              >
                <span className="text-sm font-bold text-gray-800 group-hover:text-brand-red">{label}</span>
                <span className="text-xs text-gray-500 leading-relaxed">{desc}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Searches */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">Popular Searches</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/cctv-installation-near-me", label: "CCTV Installation Near Me", desc: "Professional CCTV camera installation near you anywhere in Punjab." },
              { href: "/cctv-camera-service-near-me", label: "CCTV Camera Service Near Me", desc: "CCTV repair, maintenance and AMC near you across Punjab." },
              { href: "/electric-fence-installation-near-me", label: "Electric Fence Installation Near Me", desc: "Find electric fence installers near your location across Punjab." },
            ].map(({ href, label, desc }) => (
              <a
                key={href}
                href={href}
                className="flex flex-col gap-1 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-red-50 transition-all group"
                data-testid={`popular-search-${href.replace(/\//g, "-")}`}
              >
                <span className="text-sm font-semibold text-gray-800 group-hover:text-brand-red">{label}</span>
                <span className="text-xs text-gray-500">{desc}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 — FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions — CCTV Installation Punjab
            </h2>
            <p className="text-xl text-gray-600">Common questions from our customers</p>
          </div>

          <div className="space-y-4" data-testid="faq-list">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 — Final CTA */}
      <section className="py-16 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Secure Your Punjab Property with Professional CCTV Installation
          </h2>
          <p className="text-xl text-red-100 mb-4">
            Contact Kirpal Securities today for a free site survey and quote anywhere in Punjab.
          </p>
          <p className="text-red-200 mb-10">
            Hikvision, CP Plus and Dahua systems for homes, shops, factories and offices —
            installations from ₹16,000 with 2-year warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:7009154711" data-testid="cta-call-nikhil">
              <Button className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <Phone size={18} />
                Call Nikhil: 7009154711
              </Button>
            </a>
            <a href="tel:9463687535" data-testid="cta-call-naveen">
              <Button className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <Phone size={18} />
                Call Naveen: 9463687535
              </Button>
            </a>
            <a
              href="https://wa.me/917009154711"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-whatsapp"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <MessageCircle size={18} />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
