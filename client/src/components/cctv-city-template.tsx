import { useState } from "react";
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
  Warehouse,
  Home,
  Store,
  Users,
  Award,
  CheckCircle,
  ChevronDown,
  MapPin,
  Sparkles,
  Star,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import {
  buildCCTVSchemas,
  cctvPillarUrl,
  cctvCities,
} from "@/lib/cctv-cities";
import { RelatedContent } from "@/components/related-content";

export interface CCTVCityFAQ {
  question: string;
  answer: string;
}

export interface CCTVCityTemplateProps {
  cityName: string;
  citySlug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroTagline: string;
  heroDescription: string;
  introParagraph1: string;
  introParagraph2: string;
  introParagraph3: string;
  localContext: {
    homes: string;
    shops: string;
    factories: string;
    offices: string;
  };
  areas: string[];
  serviceAreaParagraph: string;
  faqs: CCTVCityFAQ[];
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

export default function CCTVCityTemplate(props: CCTVCityTemplateProps) {
  const {
    cityName,
    citySlug,
    metaTitle,
    metaDescription,
    keywords,
    heroTagline,
    heroDescription,
    introParagraph1,
    introParagraph2,
    introParagraph3,
    localContext,
    areas,
    serviceAreaParagraph,
    faqs,
  } = props;

  const PAGE_URL = `https://kirpalsecurities.in/cctv-camera-installation-${citySlug}`;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "CCTV Camera Installation Punjab", href: cctvPillarUrl },
    { label: `CCTV Camera Installation ${cityName}` },
  ];

  const schemaBreadcrumbs = [
    { name: "Home", item: "https://kirpalsecurities.in/" },
    { name: "Services", item: "https://kirpalsecurities.in/services" },
    {
      name: "CCTV Camera Installation Punjab",
      item: "https://kirpalsecurities.in/cctv-camera-installation-punjab",
    },
    { name: `CCTV Camera Installation ${cityName}`, item: PAGE_URL },
  ];

  const installationSteps = [
    {
      step: "01",
      title: `Site Survey in ${cityName}`,
      desc: `Our team visits your ${cityName} property to assess camera placement, cable routing and recording requirements before any installation begins.`,
    },
    {
      step: "02",
      title: "System Design & Quote",
      desc: "We prepare a customised camera layout with the right mix of dome, bullet and PTZ cameras plus NVR/DVR storage sized for your needs.",
    },
    {
      step: "03",
      title: "Cabling & Mounting",
      desc: "CAT6 / coaxial cabling is professionally routed and concealed where possible. Cameras are mounted at optimal heights and angles.",
    },
    {
      step: "04",
      title: "NVR / DVR & Storage Setup",
      desc: "Recording unit is installed and configured with the surveillance hard disk, channels mapped and recording schedules set.",
    },
    {
      step: "05",
      title: "Mobile App & Handover",
      desc: "Live remote viewing is set up on your phone, the system is tested end-to-end and your team is briefed on day-to-day operation.",
    },
  ];

  const handleQuote = () => {
    const msg = encodeURIComponent(
      `Hello! I would like to request a free site survey for CCTV camera installation in ${cityName}. Please get back to me. Thanks!`,
    );
    window.open(`https://wa.me/917009154711?text=${msg}`, "_blank");
  };

  const structuredData = buildCCTVSchemas({
    pageTitle: `CCTV Camera Installation in ${cityName} | Kirpal Securities`,
    pageUrl: PAGE_URL,
    cityName,
    breadcrumbs: schemaBreadcrumbs,
    faqs,
  });

  const nearbyCities = cctvCities.filter((c) => c.slug !== citySlug).slice(0, 4);

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        image={`https://kirpalsecurities.in/cctv-camera-installation-${citySlug}.jpg`}
        url={PAGE_URL}
        canonicalUrl={PAGE_URL}
        type="website"
        structuredData={structuredData}
      />

      <BreadcrumbNav items={breadcrumbItems} />

      {/* Section 1 — Hero */}
      <article itemScope itemType="https://schema.org/Service">
      <meta itemProp="serviceType" content="CCTV Camera Installation" />
      <meta itemProp="areaServed" content={`${cityName}, Punjab, India`} />
      <section className="bg-brand-red text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-200 text-xs sm:text-sm font-medium uppercase tracking-widest mb-3 sm:mb-4">
            {heroTagline}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight" itemProp="name">
            CCTV Camera Installation in {cityName}
            <span className="block text-base sm:text-lg md:text-xl font-medium text-red-100 mt-2">
              Hikvision · CP Plus · Dahua · HD &amp; IP Cameras · Free Site Survey
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-3 sm:mb-4 text-red-100 speakable" itemProp="description">{heroDescription}</p>
          <p className="text-xs sm:text-sm text-red-200 mb-6 sm:mb-8">
            Hikvision, CP Plus and Dahua camera systems installed by Kirpal Securities — serving{" "}
            {cityName} and all of Punjab. Packages from ₹16,000 with 2-year warranty.
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
            <a href="tel:7009154711" data-testid="button-call-now">
              <Button className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </Button>
            </a>
            <Button
              onClick={handleQuote}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-red font-semibold min-h-[48px] px-8 flex items-center gap-2"
              data-testid="button-site-survey"
            >
              <FileText size={18} />
              Get Free Site Survey
            </Button>
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

      {/* Section 2 — Services intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              CCTV Camera Services in {cityName}
            </h2>
            <p className="text-lg text-gray-600 mb-4">{introParagraph1}</p>
            <p className="text-lg text-gray-600 mb-4">{introParagraph2}</p>
            <p className="text-lg text-gray-600">{introParagraph3}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div
              className="bg-gray-50 rounded-lg p-6 text-center"
              data-testid={`highlight-${citySlug}-1`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">HD &amp; 4K Clarity</h3>
              <p className="text-gray-600 text-sm">
                Crystal-clear day &amp; night colour footage from 5MP and 4K cameras across {cityName}{" "}
                properties.
              </p>
            </div>
            <div
              className="bg-gray-50 rounded-lg p-6 text-center"
              data-testid={`highlight-${citySlug}-2`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wifi size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Mobile View</h3>
              <p className="text-gray-600 text-sm">
                Watch your {cityName} property live from any phone, anywhere — both Android and iOS
                supported.
              </p>
            </div>
            <div
              className="bg-gray-50 rounded-lg p-6 text-center"
              data-testid={`highlight-${citySlug}-3`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2-Year Warranty</h3>
              <p className="text-gray-600 text-sm">
                Every CCTV installation in {cityName} comes with a 2-year warranty and on-call
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Where We Install in City */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Where We Install CCTV Cameras in {cityName}
            </h2>
            <p className="text-xl text-gray-600">
              Surveillance for every property type across {cityName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-lg shadow p-6 flex gap-4"
              data-testid={`use-homes-${citySlug}`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Home size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  CCTV for Homes &amp; Kothis in {cityName}
                </h3>
                <p className="text-gray-600">{localContext.homes}</p>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow p-6 flex gap-4"
              data-testid={`use-shops-${citySlug}`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Store size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  CCTV for Shops &amp; Showrooms
                </h3>
                <p className="text-gray-600">{localContext.shops}</p>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow p-6 flex gap-4"
              data-testid={`use-factories-${citySlug}`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Factory size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  CCTV for Factories &amp; Warehouses
                </h3>
                <p className="text-gray-600">{localContext.factories}</p>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow p-6 flex gap-4"
              data-testid={`use-offices-${citySlug}`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  CCTV for Offices &amp; Commercial Spaces
                </h3>
                <p className="text-gray-600">{localContext.offices}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Camera Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of CCTV Cameras We Install in {cityName}
            </h2>
            <p className="text-xl text-gray-600">
              Right camera for every space and security requirement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Camera size={24} />,
                title: "Dome Cameras",
                desc: `Discreet indoor coverage for shops, lobbies and offices in ${cityName}. Wide viewing angle with vandal-resistant housings.`,
              },
              {
                icon: <Video size={24} />,
                title: "Bullet Cameras",
                desc: `Outdoor weatherproof cameras ideal for ${cityName} gates, parking and perimeter walls with strong night vision.`,
              },
              {
                icon: <Eye size={24} />,
                title: "PTZ Cameras",
                desc: `Pan-Tilt-Zoom cameras for large premises in ${cityName} — yards, godowns and industrial areas needing active monitoring.`,
              },
              {
                icon: <Wifi size={24} />,
                title: "IP / 4K Cameras",
                desc: `Network IP cameras with 4MP–8MP resolution and PoE for crystal-clear footage and easy expansion in ${cityName}.`,
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg p-6"
                data-testid={`type-${citySlug}-${i}`}
              >
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Trusted CCTV Brands We Install in {cityName}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We install only proven, reliable brands trusted by businesses and homes across{" "}
                {cityName} and Punjab. All hardware is sourced through authorized channels and
                supplied with manufacturer warranty.
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: "Hikvision",
                    desc: "Global leader in HD and IP surveillance. ColorVu day-night colour, AcuSense smart detection and 4K clarity.",
                  },
                  {
                    label: "CP Plus",
                    desc: "India's most-used CCTV brand. Excellent value, wide product range and strong service network across Punjab.",
                  },
                  {
                    label: "Dahua",
                    desc: "Premium IP cameras and NVRs with advanced AI features, low-light performance and rock-solid reliability.",
                  },
                  {
                    label: "Surveillance Hard Disks",
                    desc: "WD Purple / Seagate Skyhawk drives built specifically for 24/7 CCTV recording — no consumer drives.",
                  },
                  {
                    label: "PoE Switches & CAT6",
                    desc: "Quality networking gear and copper CAT6 cabling for stable, long-distance IP camera runs.",
                  },
                ].map(({ label, desc }, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-white rounded-lg p-4 shadow-sm"
                    data-testid={`brand-${citySlug}-${i}`}
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
              <h3 className="text-2xl font-bold mb-2">CCTV Packages in {cityName}</h3>
              <p className="text-red-100 mb-6 text-sm">
                Complete packages — cameras, NVR/DVR, hard disk, wiring, PoE switch and full
                installation. 2-year warranty included.
              </p>

              <div className="space-y-3 mb-6">
                <div
                  className="bg-white/10 rounded-lg p-4"
                  data-testid={`pkg-${citySlug}-4`}
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="font-semibold">4 Camera Setup</p>
                    <p className="text-xl font-bold">From ₹16,000</p>
                  </div>
                  <p className="text-red-100 text-sm">
                    5MP HD cameras, 4ch DVR, 500GB HDD, full installation.
                  </p>
                </div>
                <div
                  className="bg-white/10 rounded-lg p-4"
                  data-testid={`pkg-${citySlug}-8`}
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="font-semibold">8 Camera Setup</p>
                    <p className="text-xl font-bold">From ₹21,500</p>
                  </div>
                  <p className="text-red-100 text-sm">
                    8 × 5MP cameras, 8ch DVR, 500GB HDD, complete installation.
                  </p>
                </div>
                <div
                  className="bg-white/10 rounded-lg p-4"
                  data-testid={`pkg-${citySlug}-ip`}
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="font-semibold">Premium IP Series</p>
                    <p className="text-xl font-bold">From ₹20,000</p>
                  </div>
                  <p className="text-red-100 text-sm">
                    5MP IP cameras, 4K NVR, PoE switch, CAT6 wiring.
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0" />
                  <div>
                    <p className="text-sm text-red-200">Nikhil</p>
                    <a
                      href="tel:7009154711"
                      className="font-semibold hover:underline"
                      data-testid="phone-nikhil-sidebar"
                    >
                      7009154711
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0" />
                  <div>
                    <p className="text-sm text-red-200">Naveen</p>
                    <a
                      href="tel:9463687535"
                      className="font-semibold hover:underline"
                      data-testid="phone-naveen-sidebar"
                    >
                      9463687535
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/917009154711"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-white text-brand-red hover:bg-red-50 font-semibold w-full"
                  data-testid="button-whatsapp-sidebar"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our CCTV Installation Process in {cityName}
            </h2>
            <p className="text-xl text-gray-600">
              A clean, professional installation from survey to handover
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {installationSteps.map(({ step, title, desc }, i) => (
              <div key={i} className="text-center" data-testid={`step-${citySlug}-${i}`}>
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

      {/* Section 7 — Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Kirpal Securities for CCTV in {cityName}?
            </h2>
            <p className="text-xl text-gray-600">
              {cityName}'s trusted CCTV camera installation specialists
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Award size={28} />,
                stat: "7+",
                label: "Years Experience",
                desc: `Over seven years installing CCTV systems across ${cityName} and Punjab.`,
              },
              {
                icon: <CheckCircle size={28} />,
                stat: "3300+",
                label: "Installations",
                desc: "Thousands of CCTV setups delivered for homes, shops, factories and offices.",
              },
              {
                icon: <Users size={28} />,
                stat: "Pro",
                label: "Engineers",
                desc: "Trained CCTV technicians who handle cabling, mounting and configuration in-house.",
              },
              {
                icon: <ShieldCheck size={28} />,
                stat: "2 Yr",
                label: "Warranty",
                desc: "Genuine brand warranty on cameras and recorders, plus our own service support.",
              },
              {
                icon: <HardDrive size={28} />,
                stat: "24/7",
                label: "Recording",
                desc: "Continuous recording with surveillance-grade hard disks for non-stop coverage.",
              },
            ].map(({ icon, stat, label, desc }, i) => (
              <div
                key={i}
                className="text-center bg-white rounded-lg shadow p-6"
                data-testid={`why-${citySlug}-${i}`}
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

      {/* Section 8 — Service Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Service Area in {cityName}
                </h2>
                <p className="text-lg text-gray-600 mb-4">{serviceAreaParagraph}</p>
                <p className="text-lg text-gray-600 mb-4">
                  We also provide CCTV camera installation across Punjab including Jalandhar,
                  Ludhiana, Amritsar, Patiala, Mohali, Bathinda and surrounding districts.
                </p>
                <p className="text-lg text-gray-600">
                  Kirpal Securities provides CCTV camera installation in {cityName} and across
                  Punjab.{" "}
                  <a
                    href={cctvPillarUrl}
                    className="text-brand-red hover:underline font-semibold"
                    data-testid="link-pillar-page"
                  >
                    Learn more about our CCTV installation services across Punjab here.
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Areas Covered in {cityName}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {areas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 text-gray-700"
                      data-testid={`area-${area.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <MapPin className="text-brand-red flex-shrink-0" size={16} />
                      <span className="text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — Nearby Cities */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Also Serving Nearby Punjab Cities
            </h2>
            <p className="text-gray-600">CCTV installation available across these cities too</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {nearbyCities.map((city) => (
              <a
                key={city.slug}
                href={city.url}
                className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-red-50 hover:border-brand-red border border-transparent transition-all"
                data-testid={`nearby-${city.slug}`}
              >
                <MapPin className="text-brand-red flex-shrink-0" size={16} />
                <span className="text-sm font-semibold text-gray-900">{city.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9b — Customer Reviews (visible, matches schema reviews) */}
      <section className="py-12 sm:py-16 bg-gray-50" aria-label={`Customer reviews for CCTV installation in ${cityName}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="font-bold text-gray-900 ml-2">4.9 / 5</span>
              <span className="text-gray-600">· 215+ Verified Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              What {cityName} Customers Say About Kirpal Securities
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Real feedback from homes, shops, factories and offices we've secured across Punjab.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              { name: "Amanpreet Singh", role: "Showroom Owner", text: `Got an 8-camera Hikvision setup installed for our showroom in ${cityName}. The team did clean cabling, configured mobile app remote viewing and explained the NVR settings. Picture is super sharp even at night.` },
              { name: "Manjit Kaur", role: "Homeowner", text: "Kirpal Securities installed CP Plus cameras at our home — 4 outdoor + 2 indoor. Free site visit, fair pricing, and the live view on phone works flawlessly. Highly recommended." },
              { name: "Gurpreet Sandhu", role: "Factory Owner", text: "We needed a 16-camera Dahua IP system for our factory. Installation was tidy, hard disk was set up for 30-day recording and the support after install has been great." },
            ].map((r, i) => (
              <article key={i} className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100" data-testid={`review-${citySlug}-${i}`}>
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">"{r.text}"</p>
                <div className="border-t border-gray-100 pt-3">
                  <p className="font-semibold text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9c — Quick Specs / Service Snapshot Table */}
      <section className="py-10 sm:py-14 bg-white" aria-label={`CCTV installation service snapshot in ${cityName}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              CCTV Installation in {cityName} — Service Snapshot
            </h2>
            <p className="text-base text-gray-600">
              Quick facts about our {cityName} CCTV camera service.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm sm:text-base">
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Service", `CCTV Camera Installation in ${cityName}`],
                  ["Service Provider", "Kirpal Securities, Jalandhar"],
                  ["Coverage", `${cityName} city + entire ${cityName} district`],
                  ["Property Types", "Homes, Shops, Offices, Factories, Warehouses, Showrooms"],
                  ["Brands", "Hikvision · CP Plus · Dahua"],
                  ["Camera Types", "HD Analog · IP · Bullet · Dome · PTZ · WiFi · 4G SIM"],
                  ["Recorder Options", "DVR (Analog) · NVR (IP)"],
                  ["Storage", "1TB · 2TB · 4TB Surveillance Hard Disk"],
                  ["Mobile App", "Yes — live view + playback on phone (iOS & Android)"],
                  ["Starting Package", "₹16,000 — 4 HD cameras + DVR + 1TB HDD + installation"],
                  ["Warranty", "2-year manufacturer warranty"],
                  ["Site Survey", "Free · Same-day or next-day"],
                  ["Typical Timeline", "Same day for 4–8 cameras · 1–2 days for 16+"],
                  ["Service Hours", "Mon–Sat 9:00 AM – 7:00 PM · Sun 10:00 AM – 4:00 PM"],
                  ["Contact", "Nikhil 7009154711 · Naveen 9463687535"],
                ].map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <th scope="row" className="text-left font-semibold text-gray-900 px-4 sm:px-6 py-3 align-top w-2/5">{k}</th>
                    <td className="text-gray-700 px-4 sm:px-6 py-3">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 10 — FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions — CCTV Installation {cityName}
            </h2>
            <p className="text-xl text-gray-600">Common questions from our {cityName} customers</p>
          </div>

          <div className="space-y-4" data-testid={`faq-${citySlug}`}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 11 — Final CTA */}
      <section className="py-16 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Secure Your Property with Professional CCTV Installation in {cityName}
          </h2>
          <p className="text-xl text-red-100 mb-4">
            Contact Kirpal Securities today for a free site survey and quote in {cityName}.
          </p>
          <p className="text-red-200 mb-10">
            Serving homes, shops, factories, warehouses and offices across {cityName} and all of
            Punjab.
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
          <p className="text-red-200 text-sm">
            <a
              href={cctvPillarUrl}
              className="underline hover:text-white"
              data-testid="link-all-areas"
            >
              View all Punjab CCTV installation areas →
            </a>
          </p>
        </div>
      </section>

      <RelatedContent serviceType="cctv" citySlug={citySlug} cityName={cityName} />
      </article>
    </>
  );
}
