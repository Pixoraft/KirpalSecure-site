import { useState } from "react";
import {
  Phone,
  MessageCircle,
  FileText,
  ShieldCheck,
  Zap,
  Sun,
  Factory,
  Warehouse,
  Home,
  Users,
  Award,
  CheckCircle,
  ChevronDown,
  MapPin,
  Star,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import {
  buildElectricFenceSchemas,
  pillarPageUrl,
  electricFenceCities,
} from "@/lib/electric-fence-cities";
import { RelatedContent } from "@/components/related-content";

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityTemplateProps {
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
    farms: string;
    industrial: string;
    warehouse: string;
    residential: string;
  };
  areas: string[];
  serviceAreaParagraph: string;
  faqs: CityFAQ[];
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

export default function ElectricFenceCityTemplate(props: CityTemplateProps) {
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

  const PAGE_URL = `https://kirpalsecurities.in/electric-fence-installation-${citySlug}`;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Electric Fence Installation Punjab", href: pillarPageUrl },
    { label: `Electric Fence Installation ${cityName}` },
  ];

  const schemaBreadcrumbs = [
    { name: "Home", item: "https://kirpalsecurities.in/" },
    { name: "Services", item: "https://kirpalsecurities.in/services" },
    {
      name: "Electric Fence Installation Punjab",
      item: "https://kirpalsecurities.in/electric-fence-installation-punjab",
    },
    { name: `Electric Fence Installation ${cityName}`, item: PAGE_URL },
  ];

  const installationSteps = [
    {
      step: "01",
      title: `Site Inspection in ${cityName}`,
      desc: `Our team visits your property in ${cityName} to assess the perimeter, terrain and specific security requirements before any work begins.`,
    },
    {
      step: "02",
      title: "Fence Design Planning",
      desc: "We prepare a customized fence layout plan based on your property dimensions, access points and security needs.",
    },
    {
      step: "03",
      title: "Pole Installation & Wiring",
      desc: "MS powder coated or SS 304 stainless steel poles are installed and insulated tension wires are strung along the planned perimeter.",
    },
    {
      step: "04",
      title: "Energizer Installation",
      desc: "High-voltage energizers are installed and connected to deliver consistent, controlled pulses throughout the fence system.",
    },
    {
      step: "05",
      title: "Final Testing & Activation",
      desc: "The complete system is tested, safety verified and activated. Warning signs are placed and your team is briefed on safe operation.",
    },
  ];

  const handleQuote = () => {
    const msg = encodeURIComponent(
      `Hello! I would like to request a free site inspection for electric fence installation in ${cityName}. Please get back to me. Thanks!`,
    );
    window.open(`https://wa.me/917009154711?text=${msg}`, "_blank");
  };

  const structuredData = buildElectricFenceSchemas({
    pageTitle: `Electric Fence Installation in ${cityName} | Kirpal Securities`,
    pageUrl: PAGE_URL,
    cityName,
    breadcrumbs: schemaBreadcrumbs,
    faqs,
  });

  // Build "nearby cities" - 3 random other cities (excluding current)
  const nearbyCities = electricFenceCities
    .filter((c) => c.slug !== citySlug)
    .slice(0, 4);

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        image={`https://kirpalsecurities.in/electric-fence-installation-${citySlug}.jpg`}
        url={PAGE_URL}
        canonicalUrl={PAGE_URL}
        type="website"
        structuredData={structuredData}
      />

      <BreadcrumbNav items={breadcrumbItems} />

      {/* Section 1 — Hero */}
      <article itemScope itemType="https://schema.org/Service">
      <meta itemProp="serviceType" content="Electric Fence Installation" />
      <meta itemProp="areaServed" content={`${cityName}, Punjab, India`} />
      <section className="bg-brand-red text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-200 text-xs sm:text-sm font-medium uppercase tracking-widest mb-3 sm:mb-4">
            {heroTagline}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight" itemProp="name">
            Electric Fence Installation in {cityName}
            <span className="block text-base sm:text-lg md:text-xl font-medium text-red-100 mt-2">
              Solar &amp; Grid-Powered Perimeter Security · Free Site Inspection
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-3 sm:mb-4 text-red-100 speakable" itemProp="description">{heroDescription}</p>
          <p className="text-xs sm:text-sm text-red-200 mb-6 sm:mb-8">
            Kirpal Securities — {cityName}'s trusted electric fence installation company. Serving farms, factories,
            warehouses, kothis &amp; residential properties across {cityName} and all of Punjab.
          </p>

          {/* Hero trust strip */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
              <Star size={14} className="fill-yellow-300 text-yellow-300" />
              <strong>4.9/5</strong> · 187+ reviews
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
              <BadgeCheck size={14} /> 7+ years experience
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
              <ShieldCheck size={14} /> 3300+ installations
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
              <Clock size={14} /> Same-day site visit
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
              data-testid="button-site-inspection"
            >
              <FileText size={18} />
              Get Free Site Inspection
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

      {/* Section 2 — Electric Fencing Services in City */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Electric Fencing Services in {cityName}
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
                <Zap size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Strong Deterrent</h3>
              <p className="text-gray-600 text-sm">
                Controlled electric pulses effectively deter unauthorized entry across {cityName}{" "}
                properties.
              </p>
            </div>
            <div
              className="bg-gray-50 rounded-lg p-6 text-center"
              data-testid={`highlight-${citySlug}-2`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safe & Compliant</h3>
              <p className="text-gray-600 text-sm">
                All installations in {cityName} meet safety standards with proper warning signage.
              </p>
            </div>
            <div
              className="bg-gray-50 rounded-lg p-6 text-center"
              data-testid={`highlight-${citySlug}-3`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Low Maintenance</h3>
              <p className="text-gray-600 text-sm">
                Durable systems built to perform reliably in {cityName}'s climate with minimal upkeep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Where Electric Fencing is Used in City */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Where We Install Electric Fencing in {cityName}
            </h2>
            <p className="text-xl text-gray-600">
              Perimeter security for every property type across {cityName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-lg shadow p-6 flex gap-4"
              data-testid={`use-farms-${citySlug}`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Sun size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Electric Fencing for Farms in {cityName}
                </h3>
                <p className="text-gray-600">{localContext.farms}</p>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow p-6 flex gap-4"
              data-testid={`use-industrial-${citySlug}`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Factory size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Electric Fencing for Factories & Industrial Sites
                </h3>
                <p className="text-gray-600">{localContext.industrial}</p>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow p-6 flex gap-4"
              data-testid={`use-warehouse-${citySlug}`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Warehouse size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Electric Fencing for Warehouses
                </h3>
                <p className="text-gray-600">{localContext.warehouse}</p>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow p-6 flex gap-4"
              data-testid={`use-residential-${citySlug}`}
            >
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Home size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Electric Fencing for Residential Properties
                </h3>
                <p className="text-gray-600">{localContext.residential}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Types of Electric Fencing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Electric Fencing We Install in {cityName}
            </h2>
            <p className="text-xl text-gray-600">
              Tailored fencing solutions for every property and purpose
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Sun size={24} />,
                title: "Solar Electric Fencing",
                desc: `Energy-efficient solar-powered systems ideal for farms and rural properties around ${cityName} without reliable grid power. Operate independently 24/7.`,
              },
              {
                icon: <Zap size={24} />,
                title: "Agricultural Electric Fencing",
                desc: `Specifically designed for farm perimeters to protect crops and land from animal intrusions and unauthorized access across ${cityName}'s agricultural areas.`,
              },
              {
                icon: <Factory size={24} />,
                title: "Industrial Perimeter Fencing",
                desc: `High-security systems for factories and industrial estates in ${cityName} requiring strong, reliable perimeter protection for large-scale premises.`,
              },
              {
                icon: <Warehouse size={24} />,
                title: "Warehouse Security Fencing",
                desc: `Purpose-built for storage facilities and logistics centres in ${cityName}. Secures large perimeters efficiently and protects valuable goods from theft.`,
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

      {/* Section 5 — Materials Used */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Materials Used in Our {cityName} Installations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every electric fence installation in {cityName} uses high-quality, durable components
                selected for long-term performance. We use the same premium materials across all
                property types — from small residential installations to large industrial perimeters.
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: "MS Powder Coated Poles",
                    desc: "Corrosion-resistant mild steel poles with powder coating, built for durability in all weather conditions.",
                  },
                  {
                    label: "SS 304 Stainless Steel Poles",
                    desc: "Premium stainless steel poles offering superior strength and an extended service life.",
                  },
                  {
                    label: "High Voltage Energizers",
                    desc: "Reliable energizers delivering consistent, controlled pulses across the full fence perimeter.",
                  },
                  {
                    label: "Insulated Tension Wires",
                    desc: "High-tensile insulated wires for efficient electrical conductivity and long-term durability.",
                  },
                  {
                    label: "Fence Warning Signage",
                    desc: "Clearly visible warning signs installed at regular intervals for safety and legal compliance.",
                  },
                ].map(({ label, desc }, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-white rounded-lg p-4 shadow-sm"
                    data-testid={`material-${citySlug}-${i}`}
                  >
                    <CheckCircle className="text-brand-red flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">{label}</p>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-red text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Get a Free Quote in {cityName}</h3>
              <p className="text-red-100 mb-4">
                Contact our team for a free site inspection and customized quote for electric fence
                installation at your {cityName} property. No hidden charges, transparent pricing.
              </p>
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
              Our Installation Process in {cityName}
            </h2>
            <p className="text-xl text-gray-600">
              A professional, step-by-step approach to every installation
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

      {/* Section 7 — Why Choose Kirpal Securities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Kirpal Securities in {cityName}?
            </h2>
            <p className="text-xl text-gray-600">
              {cityName}'s trusted electric fence installation specialists
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Award size={28} />,
                stat: "7+",
                label: "Years Experience",
                desc: `Over seven years installing electric fence systems across ${cityName} and Punjab.`,
              },
              {
                icon: <CheckCircle size={28} />,
                stat: "3300+",
                label: "Installations",
                desc: "Thousands of successful fencing installations for farms, industries and homes.",
              },
              {
                icon: <Users size={28} />,
                stat: "Pro",
                label: "Engineers",
                desc: "Skilled professional technicians trained in perimeter security systems.",
              },
              {
                icon: <ShieldCheck size={28} />,
                stat: "Top",
                label: "Materials",
                desc: "SS 304 stainless steel poles, powder coated supports and high-voltage energizers.",
              },
              {
                icon: <Zap size={28} />,
                stat: "24/7",
                label: "Security",
                desc: "Reliable perimeter protection that works continuously day and night.",
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

      {/* Section 8 — Service Area Statement */}
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
                  We also provide electric fence installation services across Punjab including
                  Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda and surrounding districts.
                </p>
                <p className="text-lg text-gray-600">
                  Kirpal Securities provides electric fence installation in {cityName} and across
                  Punjab.{" "}
                  <a
                    href={pillarPageUrl}
                    className="text-brand-red hover:underline font-semibold"
                    data-testid="link-pillar-page"
                  >
                    Learn more about our electric fencing services across Punjab here.
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
            <p className="text-gray-600">
              Electric fence installation available across these cities too
            </p>
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
      <section className="py-12 sm:py-16 bg-gray-50" aria-label={`Customer reviews for electric fence installation in ${cityName}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="font-bold text-gray-900 ml-2">4.9 / 5</span>
              <span className="text-gray-600">· 187+ Verified Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              What {cityName} Customers Say About Kirpal Securities
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Real feedback from farms, factories and homes we've secured across Punjab.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              { name: "Harpreet Singh", role: "Farm Owner", text: `Kirpal Securities installed a complete solar electric fence around our 4-acre farm. The team was professional, the SS 304 poles look great, and we have had zero animal intrusions since. Highly recommended for any farm owner around ${cityName}.` },
              { name: "Rajinder Kumar", role: "Warehouse Manager", text: "We needed perimeter security for our warehouse. Nikhil and the Kirpal team did a clean installation with high-voltage energizers and warning signs. Site inspection was free and pricing was transparent." },
              { name: "Simran Kaur", role: "Homeowner", text: "Got electric fencing installed on our kothi boundary. Looks neat, fits our wall design, and the safety signage is properly placed. Naveen explained everything clearly during the free inspection." },
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
      <section className="py-10 sm:py-14 bg-white" aria-label={`Electric fence service snapshot in ${cityName}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Electric Fence Installation in {cityName} — Service Snapshot
            </h2>
            <p className="text-base text-gray-600">
              Quick facts about our {cityName} electric fence service.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm sm:text-base">
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Service", `Electric Fence Installation in ${cityName}`],
                  ["Service Provider", "Kirpal Securities, Jalandhar"],
                  ["Coverage", `${cityName} city + entire ${cityName} district`],
                  ["Property Types", "Farms, Warehouses, Factories, Kothis, Residential, Industrial"],
                  ["Pole Options", "MS Powder Coated · SS 304 Stainless Steel"],
                  ["Power Options", "Solar · Grid-Powered · Hybrid"],
                  ["Energizer", "High-Voltage, Pulse-Controlled"],
                  ["Safety", "Warning signs at regular intervals · Compliance-checked"],
                  ["Site Inspection", "Free · Same-day or next-day"],
                  ["Typical Timeline", "1–2 days residential · 3–5 days industrial"],
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
              Frequently Asked Questions — Electric Fence Installation {cityName}
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
            Secure Your Property with Professional Electric Fence Installation in {cityName}
          </h2>
          <p className="text-xl text-red-100 mb-4">
            Contact Kirpal Securities today for a free consultation and site inspection in {cityName}.
          </p>
          <p className="text-red-200 mb-10">
            Serving farms, warehouses, industrial facilities and residential properties across{" "}
            {cityName} and all of Punjab.
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
              href={pillarPageUrl}
              className="underline hover:text-white"
              data-testid="link-all-areas"
            >
              View all Punjab electric fence installation areas →
            </a>
          </p>
        </div>
      </section>

      <RelatedContent serviceType="electric-fence" citySlug={citySlug} cityName={cityName} />
      </article>
    </>
  );
}
