import { useState } from "react";
import { Link } from "wouter";
import {
  Phone, MessageCircle, FileText, ShieldCheck, Zap, Camera,
  MapPin, Star, Clock, ChevronDown, CheckCircle, Award,
  ArrowRight, Users, BadgeCheck, Wrench, Package, Search,
  Building2, Warehouse, Home, Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { electricFenceCities, BUSINESS_INFO } from "@/lib/electric-fence-cities";
import { cctvCities } from "@/lib/cctv-cities";

export interface NearMeFAQ {
  question: string;
  answer: string;
}

export interface NearMeTemplateProps {
  serviceType: "electric-fence" | "cctv" | "cctv-service";
  title: string;
  subTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  pageUrl: string;
  searchTerms: string[];
  faqs: NearMeFAQ[];
}

const SITE = "https://kirpalsecurities.in";

function buildNearMeSchemas(props: {
  serviceName: string;
  pageTitle: string;
  pageUrl: string;
  faqs: NearMeFAQ[];
  pillarLabel: string;
  pillarUrl: string;
}) {
  const { serviceName, pageTitle, pageUrl, faqs, pillarLabel, pillarUrl } = props;
  const bi = BUSINESS_INFO;
  const today = new Date().toISOString().split("T")[0];
  const areaServed = [
    "Jalandhar", "Ludhiana", "Amritsar", "Pathankot", "Hoshiarpur",
    "Phagwara", "Kapurthala", "Nakodar", "Patiala", "Mohali", "Bathinda",
    "Gurdaspur", "Moga", "Sangrur", "Rupnagar", "Firozpur", "Tarn Taran", "Nawanshahr",
  ];

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: bi.name,
      legalName: bi.legalName,
      url: SITE,
      logo: { "@type": "ImageObject", url: bi.logo, width: 512, height: 512 },
      telephone: bi.telephone,
      email: bi.email,
      address: { "@type": "PostalAddress", ...bi.address },
      sameAs: bi.sameAs,
      foundingDate: bi.foundingDate,
      slogan: bi.slogan,
    },
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
      "@id": `${SITE}/#localbusiness`,
      name: bi.name,
      url: SITE,
      telephone: bi.telephone,
      email: bi.email,
      address: { "@type": "PostalAddress", ...bi.address },
      geo: { "@type": "GeoCoordinates", latitude: bi.geo.latitude, longitude: bi.geo.longitude },
      hasMap: bi.hasMap,
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "16:00" },
      ],
      areaServed: areaServed.map(city => ({
        "@type": "City", name: city,
        containedInPlace: { "@type": "State", name: "Punjab", containedInPlace: { "@type": "Country", name: "India" } },
      })),
      serviceArea: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: bi.geo.latitude, longitude: bi.geo.longitude }, geoRadius: "200000" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "187", bestRating: "5" },
      priceRange: bi.priceRange,
      paymentAccepted: bi.paymentAccepted.join(", "),
      sameAs: bi.sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      description: `Professional ${serviceName.toLowerCase()} services across Punjab by Kirpal Securities.`,
      provider: { "@id": `${SITE}/#organization` },
      areaServed: areaServed.map(city => ({ "@type": "City", name: city })),
      url: pageUrl,
      serviceType: serviceName,
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "187" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": `${pageUrl}#primaryimage`,
      url: "https://kirpalsecurities.in/og-image.jpg",
      contentUrl: "https://kirpalsecurities.in/og-image.jpg",
      width: 1200,
      height: 630,
      name: pageTitle,
      description: `${serviceName} in Punjab — Kirpal Securities`,
      encodingFormat: "image/jpeg",
      author: { "@id": `${SITE}/#organization` },
      copyrightHolder: { "@id": `${SITE}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
        { "@type": "ListItem", position: 3, name: pillarLabel, item: `${SITE}${pillarUrl}` },
        { "@type": "ListItem", position: 4, name: pageTitle, item: pageUrl },
      ],
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
      url: SITE,
      name: bi.name,
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

const trustStats = [
  { icon: Clock, label: "7+ Years Experience" },
  { icon: CheckCircle, label: "3300+ Installations" },
  { icon: Users, label: "Professional Engineers" },
  { icon: BadgeCheck, label: "Fast Response" },
  { icon: MapPin, label: "All Punjab Coverage" },
  { icon: Star, label: "4.9/5 Customer Rating" },
];

const whyChooseUs = [
  { icon: ShieldCheck, title: "Professional Installation", desc: "Certified technicians with 7+ years of installation experience across Punjab." },
  { icon: Award, title: "Quality Materials", desc: "Only branded hardware — Hikvision, CP Plus, Dahua, SS 304 poles and certified energizers." },
  { icon: Clock, title: "Quick Support", desc: "Fast response for site surveys, installations and post-installation service calls." },
  { icon: CheckCircle, title: "Affordable Pricing", desc: "Transparent quotes with no hidden charges. Free site inspection before any commitment." },
  { icon: ShieldCheck, title: "Reliable Protection", desc: "Proven perimeter security systems trusted by farms, factories, homes and kothis." },
  { icon: Phone, title: "Emergency Assistance", desc: "Reach us on call or WhatsApp for urgent security needs anywhere in Punjab." },
];

const processSteps = [
  { step: "01", title: "Request Inspection", desc: "Call or WhatsApp us to schedule a free site visit at your convenience." },
  { step: "02", title: "Site Analysis", desc: "Our engineer visits your property, assesses requirements and identifies optimal coverage." },
  { step: "03", title: "Custom Security Plan", desc: "We design a tailored solution with the right products, layout and budget." },
  { step: "04", title: "Installation", desc: "Professional installation by our certified team — clean, fast and thorough." },
  { step: "05", title: "Testing & Activation", desc: "Full system test, mobile app setup, and a complete handover briefing for your team." },
];

const useTypeIcons: Record<string, typeof Home> = {
  "electric-fence": Factory,
  "cctv": Home,
  "cctv-service": Wrench,
};

export function NearMeTemplate({
  serviceType,
  title,
  subTitle,
  heroDescription,
  metaTitle,
  metaDescription,
  keywords,
  pageUrl,
  searchTerms,
  faqs,
}: NearMeTemplateProps) {
  const isElectric = serviceType === "electric-fence";
  const isCCTVService = serviceType === "cctv-service";
  const cities = isElectric ? electricFenceCities : cctvCities;
  const ServiceIcon = useTypeIcons[serviceType];

  const pillarHref = isElectric
    ? "/electric-fence-installation-punjab"
    : "/cctv-camera-installation-punjab";
  const pillarLabel = isElectric
    ? "Electric Fence Installation Punjab"
    : "CCTV Camera Installation Punjab";

  const serviceName = isElectric
    ? "Electric Fence Installation"
    : isCCTVService
    ? "CCTV Camera Service"
    : "CCTV Camera Installation";

  const structuredData = buildNearMeSchemas({
    serviceName,
    pageTitle: metaTitle,
    pageUrl,
    faqs,
    pillarLabel,
    pillarUrl: pillarHref,
  });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: pillarLabel, href: pillarHref },
    { label: title },
  ];

  const relatedSearchTerms: Record<string, string[]> = {
    "electric-fence": [
      "Electric fence installer near me",
      "Solar fencing near me",
      "Agricultural electric fence near me",
      "Perimeter fencing near me",
      "Farm security fencing near me",
      "Wire fencing near me",
      "Security fencing contractor near me",
    ],
    "cctv": [
      "Security camera installer near me",
      "CCTV for home near me",
      "CCTV for shop near me",
      "IP camera installation near me",
      "DVR installation near me",
      "NVR setup near me",
      "Hikvision installer near me",
    ],
    "cctv-service": [
      "Camera repair near me",
      "CCTV not working fix near me",
      "DVR repair near me",
      "CCTV AMC near me",
      "Security camera maintenance near me",
      "CCTV technician near me",
      "Hard disk replacement near me",
    ],
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello! I am looking for ${serviceName} near me. Please get back to me. Thanks!`
    );
    window.open(`https://wa.me/917009154711?text=${msg}`, "_blank");
  };

  const relatedCities = cities.slice(0, 6);
  const crossServiceHref = isElectric ? "/cctv-camera-installation-near-me" : "/electric-fence-installation-near-me";
  const crossServiceLabel = isElectric ? "CCTV Installation Near Me" : "Electric Fence Installation Near Me";

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        image="https://kirpalsecurities.in/og-image.jpg"
        url={pageUrl}
        canonicalUrl={pageUrl}
        type="website"
        structuredData={structuredData}
      />

      <BreadcrumbNav items={breadcrumbItems} />

      {/* Section 1 — Hero */}
      <section className="bg-brand-red text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-200 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
            Kirpal Securities — Punjab's Trusted {serviceName} Specialists
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight speakable">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-red-100 mb-3 font-medium">{subTitle}</p>
          <p className="text-red-200 mb-4 max-w-3xl mx-auto speakable">{heroDescription}</p>

          {/* AI discoverability paragraph */}
          <p className="text-red-200 text-sm mb-8 max-w-2xl mx-auto">
            Kirpal Securities is a professional electric fence installation and CCTV camera installation
            company serving customers across Punjab — including Jalandhar, Ludhiana, Amritsar, Pathankot,
            Hoshiarpur, Phagwara, Kapurthala and Nakodar.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "7+ Years Experience",
              "3300+ Installations",
              "Free Site Survey",
              "Same-Day Response",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-white/15 border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                <BadgeCheck size={12} />
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7009154711" data-testid="hero-call-button">
              <Button className="bg-white text-brand-red hover:bg-red-50 font-bold min-h-[48px] px-8 flex items-center gap-2 w-full sm:w-auto">
                <Phone size={18} />
                Call Now: 7009154711
              </Button>
            </a>
            <Button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-bold min-h-[48px] px-8 flex items-center gap-2 w-full sm:w-auto"
              data-testid="hero-whatsapp-button"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </Button>
            <Link href="/contact" data-testid="hero-quote-button">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-red font-bold min-h-[48px] px-8 flex items-center gap-2 w-full sm:w-auto">
                <FileText size={18} />
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <article itemScope itemType="https://schema.org/Service">

      {/* Section 2 — Search Intent Matching */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Search size={20} className="text-brand-red" />
                <h2 className="text-xl font-bold text-gray-900">Searching for…</h2>
              </div>
              <ul className="space-y-2">
                {searchTerms.map((term) => (
                  <li key={term} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle size={15} className="text-brand-red flex-shrink-0" />
                    {term}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                You've found the right team.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kirpal Securities provides reliable <strong>{serviceName.toLowerCase()}</strong> services
                throughout Punjab. With 7+ years of experience and 3,300+ completed installations, we are
                the trusted local choice for farms, factories, warehouses, homes and commercial properties
                across all of Punjab.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href="tel:7009154711" className="text-brand-red font-bold text-sm hover:underline flex items-center gap-1">
                  <Phone size={14} />
                  Call us now: 7009154711
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People Also Search For */}
      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            People also search for
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedSearchTerms[serviceType].map((term) => (
              <a
                key={term}
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-brand-red hover:text-brand-red hover:bg-red-50 transition-all shadow-sm"
                data-testid={`related-search-${term.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Search size={10} className="flex-shrink-0" />
                {term}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — City Coverage Cards */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 speakable">
              Areas We Frequently Serve
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              We cover all of Punjab. Click your city to see specific service details, pricing and local FAQs.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={city.url}
                className="group flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-xl hover:border-brand-red hover:shadow-md transition-all duration-200"
                data-testid={`city-card-${city.slug}`}
              >
                <div className="w-9 h-9 rounded-lg bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all">
                  <MapPin size={16} className="text-brand-red group-hover:text-white" />
                </div>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-brand-red text-center leading-tight">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            Don't see your city?{" "}
            <a href="tel:7009154711" className="text-brand-red font-semibold hover:underline">
              Call us — we cover all of Punjab.
            </a>
          </p>
        </div>
      </section>

      {/* Section 4 — Trust Stats */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {trustStats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center">
                  <Icon size={22} className="text-brand-red" />
                </div>
                <span className="text-sm font-semibold text-gray-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Why Choose Kirpal Securities?
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Trusted by 3,300+ customers across Punjab for professional security installations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-red" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Process */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              How It Works
            </h2>
            <p className="text-gray-500 text-sm">Simple, professional and hassle-free from first call to handover.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {processSteps.map(({ step, title: stepTitle, desc }, idx) => (
              <div key={step} className="relative flex sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-3 p-4 sm:p-5 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-brand-red text-white font-black text-sm flex items-center justify-center">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{stepTitle}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden sm:block absolute top-9 -right-2 w-4 h-0.5 bg-brand-red/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Related Pages */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: pillarHref, label: pillarLabel, icon: ServiceIcon },
              { href: crossServiceHref, label: crossServiceLabel, icon: isElectric ? Camera : Zap },
              { href: "/cctv-camera-service-near-me", label: "CCTV Camera Service Near Me", icon: Wrench },
              { href: "/packages", label: "View Our Packages", icon: Package },
            ].filter(l => l.href !== pageUrl).slice(0, 4).map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-brand-red hover:text-brand-red hover:bg-red-50 transition-all group shadow-sm"
                data-testid={`related-${href.replace(/\//g, "-")}`}
              >
                <Icon size={16} className="text-brand-red flex-shrink-0" />
                <span className="flex-1">{label}</span>
                <ArrowRight size={13} className="text-gray-300 group-hover:text-brand-red transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>

          {/* Top city links */}
          <div className="mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Top Cities</p>
            <div className="flex flex-wrap gap-2">
              {relatedCities.map((city) => (
                <Link
                  key={city.slug}
                  href={city.url}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 hover:border-brand-red hover:text-brand-red transition-all"
                  data-testid={`related-city-pill-${city.slug}`}
                >
                  <MapPin size={10} />
                  {serviceName} {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Common questions about {serviceName.toLowerCase()} near you in Punjab.
            </p>
          </div>
          <div className="space-y-4" data-testid="faq-section">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 — Final CTA */}
      <section className="py-16 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Professional {serviceName} Near You?
          </h2>
          <p className="text-xl text-red-100 mb-3">
            Get a free consultation today — no commitment required.
          </p>
          <p className="text-red-200 text-sm mb-10">
            Serving farms, warehouses, factories, homes and offices across all of Punjab since 2018.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7009154711" data-testid="final-cta-call-nikhil">
              <Button className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <Phone size={18} />
                Call Nikhil: 7009154711
              </Button>
            </a>
            <a href="tel:9463687535" data-testid="final-cta-call-naveen">
              <Button className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <Phone size={18} />
                Call Naveen: 9463687535
              </Button>
            </a>
            <Button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold min-h-[48px] px-8 flex items-center gap-2"
              data-testid="final-cta-whatsapp"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </Button>
            <Link href="/contact" data-testid="final-cta-quote">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-red font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <FileText size={18} />
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      </article>
    </>
  );
}
