import { useState } from "react";
import { Link } from "wouter";
import {
  Phone, MessageCircle, FileText, ShieldCheck, Camera, Video,
  Eye, Wifi, Sparkles, MapPin, Star, Clock, ChevronDown,
  CheckCircle, Award, BadgeCheck, ArrowRight, Users, Package,
  AlertTriangle, BookOpen, Factory, Warehouse, Building2,
  Heart, Building, Moon, Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BUSINESS_INFO } from "@/lib/electric-fence-cities";
import { cctvCities } from "@/lib/cctv-cities";

export type IndustryKey = "school" | "factory" | "warehouse" | "office" | "hospital" | "commercial";

export interface IndustryPainPoint { title: string; desc: string }
export interface IndustryPlacement { location: string; reason: string }
export interface IndustryFAQ { question: string; answer: string }

export interface IndustryCCTVTemplateProps {
  industryKey: IndustryKey;
  title: string;
  subTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  pageUrl: string;
  productName: string;
  productDescription: string;
  painPoints: IndustryPainPoint[];
  placements: IndustryPlacement[];
  faqs: IndustryFAQ[];
}

const SITE = "https://kirpalsecurities.in";

const INDUSTRIES: Record<IndustryKey, { label: string; href: string; icon: typeof Building }> = {
  school:     { label: "Best CCTV for School",               href: "/best-cctv-camera-for-school",              icon: BookOpen },
  factory:    { label: "Best CCTV for Factory",              href: "/best-cctv-camera-for-factory",             icon: Factory },
  warehouse:  { label: "Best CCTV for Warehouse",            href: "/best-cctv-camera-for-warehouse",           icon: Warehouse },
  office:     { label: "Best CCTV for Office",               href: "/best-cctv-camera-for-office",              icon: Building2 },
  hospital:   { label: "Best CCTV for Hospital",             href: "/best-cctv-camera-for-hospital",            icon: Heart },
  commercial: { label: "Best CCTV for Commercial Buildings", href: "/best-cctv-camera-for-commercial-buildings", icon: Building },
};

const cameraTypes = [
  { icon: Camera, name: "Dome Cameras", desc: "Discreet, vandal-resistant cameras ideal for indoor monitoring — hallways, lobbies, reception and offices.", placement: "Indoor ceilings, corridors, entry areas" },
  { icon: Video, name: "Bullet Cameras", desc: "Long-range outdoor cameras with excellent clarity for perimeter, parking and entrance monitoring.", placement: "Building exterior, gates, parking lots" },
  { icon: Eye, name: "PTZ Cameras", desc: "Pan-Tilt-Zoom cameras that cover large open areas and can track movement automatically.", placement: "Large open areas, production floors, playgrounds" },
  { icon: Wifi, name: "IP Cameras", desc: "High-resolution network cameras for scalable systems with remote access from any device worldwide.", placement: "Any indoor or outdoor location requiring HD clarity" },
  { icon: Moon, name: "Night Vision Cameras", desc: "IR-equipped cameras that record clear footage in complete darkness — ideal for after-hours security.", placement: "Perimeter, parking, storage areas, entrances" },
  { icon: Sparkles, name: "AI Smart Cameras", desc: "Cameras with built-in analytics for motion detection, face recognition, crowd alerts and anomaly detection.", placement: "High-security zones, entrances, monitoring centres" },
];

const benefits = [
  { icon: ShieldCheck, title: "Enhanced Security", desc: "Visible cameras deter criminal activity and create a safer environment for staff, students and visitors." },
  { icon: Eye, title: "24/7 Surveillance", desc: "Round-the-clock recording ensures every incident is captured and available for review at any time." },
  { icon: Phone, title: "Remote Monitoring", desc: "Live view on your mobile or desktop from anywhere in the world — ideal for multi-site management." },
  { icon: CheckCircle, title: "Theft Prevention", desc: "Documented evidence significantly reduces internal theft, inventory shrinkage and equipment loss." },
  { icon: Users, title: "Staff and Customer Safety", desc: "Create accountable, monitored environments where incidents are quickly identified and addressed." },
  { icon: Award, title: "Evidence & Accountability", desc: "HD recordings provide reliable evidence for investigations, insurance claims and legal proceedings." },
];

const AREA_SERVED = [
  "Jalandhar", "Ludhiana", "Amritsar", "Pathankot", "Hoshiarpur",
  "Phagwara", "Kapurthala", "Nakodar", "Patiala", "Mohali", "Bathinda",
  "Gurdaspur", "Moga", "Sangrur", "Rupnagar", "Firozpur", "Tarn Taran", "Nawanshahr",
];

function buildIndustrySchemas(props: {
  industryKey: IndustryKey;
  industryName: string;
  productName: string;
  productDescription: string;
  pageTitle: string;
  pageUrl: string;
  faqs: IndustryFAQ[];
}) {
  const { industryKey, industryName, productName, productDescription, pageTitle, pageUrl, faqs } = props;
  const bi = BUSINESS_INFO;
  const today = new Date().toISOString().split("T")[0];
  const imageSlug = industryKey === "commercial" ? "commercial-buildings" : industryKey;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: bi.name, legalName: bi.legalName, url: SITE,
      logo: { "@type": "ImageObject", url: bi.logo, width: 512, height: 512 },
      telephone: bi.telephone, email: bi.email,
      address: { "@type": "PostalAddress", ...bi.address },
      sameAs: bi.sameAs, foundingDate: bi.foundingDate, slogan: bi.slogan,
    },
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
      "@id": `${SITE}/#localbusiness`,
      name: bi.name, url: SITE, telephone: bi.telephone, email: bi.email,
      address: { "@type": "PostalAddress", ...bi.address },
      geo: { "@type": "GeoCoordinates", latitude: bi.geo.latitude, longitude: bi.geo.longitude },
      hasMap: bi.hasMap,
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "16:00" },
      ],
      areaServed: AREA_SERVED.map(city => ({
        "@type": "City", name: city,
        containedInPlace: { "@type": "State", name: "Punjab", containedInPlace: { "@type": "Country", name: "India" } },
      })),
      serviceArea: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: bi.geo.latitude, longitude: bi.geo.longitude }, geoRadius: "200000" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "215", bestRating: "5" },
      priceRange: bi.priceRange, sameAs: bi.sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${industryName} CCTV Installation`,
      description: `Professional CCTV camera installation services for ${industryName.toLowerCase()}s across Punjab by Kirpal Securities.`,
      provider: { "@id": `${SITE}/#organization` },
      areaServed: AREA_SERVED.map(city => ({ "@type": "City", name: city })),
      url: pageUrl,
      serviceType: "CCTV Camera Installation",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "215" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: productName,
      brand: { "@type": "Brand", name: "Kirpal Securities" },
      category: "Security System",
      description: productDescription,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "16000",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        seller: { "@id": `${SITE}/#organization` },
      },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "215" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question", name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
        { "@type": "ListItem", position: 3, name: "CCTV Camera Installation Punjab", item: `${SITE}/cctv-camera-installation-punjab` },
        { "@type": "ListItem", position: 4, name: pageTitle, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Industry CCTV Solutions by Kirpal Securities — Punjab",
      description: "Professional CCTV camera installation across multiple industries throughout Punjab.",
      itemListElement: Object.values(INDUSTRIES).map((ind, i) => ({
        "@type": "ListItem", position: i + 1, name: ind.label, url: `${SITE}${ind.href}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": `${pageUrl}#primaryimage`,
      url: `https://kirpalsecurities.in/best-cctv-camera-${imageSlug}.jpg`,
      contentUrl: `https://kirpalsecurities.in/best-cctv-camera-${imageSlug}.jpg`,
      name: pageTitle,
      description: `${productName} in Punjab — Kirpal Securities`,
      encodingFormat: "image/webp",
      author: { "@id": `${SITE}/#organization` },
      copyrightHolder: { "@id": `${SITE}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageTitle,
      url: pageUrl,
      dateModified: today,
      primaryImageOfPage: { "@id": `${pageUrl}#primaryimage` },
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", ".speakable"] },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE, name: bi.name,
      publisher: { "@id": `${SITE}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE}/contact?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ];
}

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
        <ChevronDown size={20} className={`text-brand-red flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white border-t border-gray-100">
          <p className="pt-4 text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function IndustryCCTVTemplate({
  industryKey, title, subTitle, heroDescription,
  metaTitle, metaDescription, keywords, pageUrl,
  productName, productDescription, painPoints, placements, faqs,
}: IndustryCCTVTemplateProps) {
  const industryName = industryKey.charAt(0).toUpperCase() + industryKey.slice(1);
  const IndustryIcon = INDUSTRIES[industryKey].icon;

  const structuredData = buildIndustrySchemas({
    industryKey, industryName, productName, productDescription,
    pageTitle: metaTitle, pageUrl, faqs,
  });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "CCTV Camera Installation Punjab", href: "/cctv-camera-installation-punjab" },
    { label: title },
  ];

  const otherIndustries = (Object.keys(INDUSTRIES) as IndustryKey[])
    .filter(k => k !== industryKey)
    .map(k => INDUSTRIES[k]);

  const relatedCities = cctvCities.slice(0, 6);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hello! I need CCTV camera installation for my ${industryName}. Please get back to me. Thanks!`);
    window.open(`https://wa.me/917009154711?text=${msg}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        image={`https://kirpalsecurities.in/og-image.jpg`}
        url={pageUrl}
        canonicalUrl={pageUrl}
        type="website"
        structuredData={structuredData}
      />

      <BreadcrumbNav items={breadcrumbItems} />

      <article itemScope itemType="https://schema.org/Service">

      {/* Hero */}
      <section className="bg-brand-red text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            <IndustryIcon size={13} />
            Kirpal Securities — Punjab's Trusted CCTV Installation Specialists
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight speakable">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-red-100 mb-3 font-medium">{subTitle}</p>
          <p className="text-red-200 mb-4 max-w-3xl mx-auto speakable">{heroDescription}</p>
          <p className="text-red-200 text-sm mb-8 max-w-2xl mx-auto">
            Kirpal Securities provides professional CCTV camera solutions across Punjab for schools,
            factories, warehouses, hospitals, offices and commercial properties — including Jalandhar,
            Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["7+ Years Experience","3300+ Installations","Free Site Survey","2-Year Warranty"].map(badge => (
              <span key={badge} className="inline-flex items-center gap-1.5 bg-white/15 border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <BadgeCheck size={12} />{badge}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7009154711" data-testid="hero-call-button">
              <Button className="bg-white text-brand-red hover:bg-red-50 font-bold min-h-[48px] px-8 flex items-center gap-2 w-full sm:w-auto">
                <Phone size={18} />Call Now: 7009154711
              </Button>
            </a>
            <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600 text-white font-bold min-h-[48px] px-8 flex items-center gap-2" data-testid="hero-whatsapp-button">
              <MessageCircle size={18} />WhatsApp Us
            </Button>
            <Link href="/contact" data-testid="hero-quote-button">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-red font-bold min-h-[48px] px-8 flex items-center gap-2 w-full sm:w-auto">
                <FileText size={18} />Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Pain Points */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 speakable">
              Security Challenges for {industryName}s
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Common security problems that a professional CCTV system solves for your {industryName.toLowerCase()}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {painPoints.map(({ title: pt, desc }) => (
              <div key={pt} className="flex gap-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl hover:border-brand-red transition-colors">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-brand-red/10 flex items-center justify-center mt-0.5">
                  <AlertTriangle size={18} className="text-brand-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{pt}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended CCTV Systems */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 speakable">
              Recommended CCTV Systems
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Professional camera types installed by Kirpal Securities — selected to match your security needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cameraTypes.map(({ icon: Icon, name, desc, placement }) => (
              <div key={name} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-red" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{desc}</p>
                <p className="text-xs font-semibold text-brand-red border-t border-gray-100 pt-3">
                  Best for: {placement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camera Placement Guide */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 speakable">
              Camera Placement Guide
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Optimal camera positions for maximum coverage in your {industryName.toLowerCase()}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {placements.map(({ location, reason }, i) => (
              <div key={location} className="flex gap-4 p-5 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-brand-red text-white flex items-center justify-center font-black text-xs">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{location}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 speakable">
              Benefits of Professional CCTV Installation
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Why 3,300+ properties across Punjab trust Kirpal Securities for their security systems.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title: bt, desc }) => (
              <div key={bt} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-red" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{bt}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industry Pages + Internal Links */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">Industry Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {otherIndustries.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href} className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-brand-red hover:text-brand-red hover:bg-red-50 transition-all group shadow-sm" data-testid={`related-industry-${href.replace(/\//g, "-")}`}>
                <Icon size={15} className="text-brand-red flex-shrink-0" />
                <span className="flex-1">{label}</span>
                <ArrowRight size={12} className="text-gray-300 group-hover:text-brand-red flex-shrink-0" />
              </Link>
            ))}
            <Link href="/cctv-camera-installation-punjab" className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-brand-red hover:text-brand-red hover:bg-red-50 transition-all group shadow-sm" data-testid="related-cctv-punjab">
              <Camera size={15} className="text-brand-red flex-shrink-0" />
              <span className="flex-1">CCTV Camera Installation Punjab</span>
              <ArrowRight size={12} className="text-gray-300 group-hover:text-brand-red flex-shrink-0" />
            </Link>
            <Link href="/cctv-installation-near-me" className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-brand-red hover:text-brand-red hover:bg-red-50 transition-all group shadow-sm" data-testid="related-cctv-near-me">
              <Search size={15} className="text-brand-red flex-shrink-0" />
              <span className="flex-1">CCTV Installation Near Me</span>
              <ArrowRight size={12} className="text-gray-300 group-hover:text-brand-red flex-shrink-0" />
            </Link>
            <Link href="/packages" className="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-brand-red hover:text-brand-red hover:bg-red-50 transition-all group shadow-sm" data-testid="related-packages">
              <Package size={15} className="text-brand-red flex-shrink-0" />
              <span className="flex-1">View CCTV Packages</span>
              <ArrowRight size={12} className="text-gray-300 group-hover:text-brand-red flex-shrink-0" />
            </Link>
          </div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Top Cities</p>
          <div className="flex flex-wrap gap-2">
            {relatedCities.map(city => (
              <Link key={city.slug} href={city.url} className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-brand-red hover:text-brand-red transition-all" data-testid={`related-city-${city.slug}`}>
                <MapPin size={10} />CCTV {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Common questions about CCTV camera installation for {industryName.toLowerCase()}s in Punjab.
            </p>
          </div>
          <div className="space-y-4" data-testid="faq-section">
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Professional CCTV Installation for Your {industryName}
          </h2>
          <p className="text-xl text-red-100 mb-3">
            Free site survey across all of Punjab — no commitment required.
          </p>
          <p className="text-red-200 text-sm mb-10">
            Hikvision, CP Plus and Dahua systems. 2-year warranty. Installations from ₹16,000.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7009154711" data-testid="final-cta-call-nikhil">
              <Button className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <Phone size={18} />Call Nikhil: 7009154711
              </Button>
            </a>
            <a href="tel:9463687535" data-testid="final-cta-call-naveen">
              <Button className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <Phone size={18} />Call Naveen: 9463687535
              </Button>
            </a>
            <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600 text-white font-semibold min-h-[48px] px-8 flex items-center gap-2" data-testid="final-cta-whatsapp">
              <MessageCircle size={18} />WhatsApp Us
            </Button>
            <Link href="/contact" data-testid="final-cta-quote">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-red font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <FileText size={18} />Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      </article>
    </>
  );
}
