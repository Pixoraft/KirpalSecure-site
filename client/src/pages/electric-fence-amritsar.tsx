import { useState } from "react";
import { Phone, MessageCircle, FileText, ShieldCheck, Zap, Sun, Factory, Warehouse, Home, Users, Award, CheckCircle, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { buildElectricFenceSchemas, pillarPageUrl } from "@/lib/electric-fence-cities";
import { ElectricFenceCityExtras } from "@/components/electric-fence-city-extras";

const faqs = [
  {
    question: "What is electric fencing used for in Amritsar?",
    answer:
      "Electric fencing in Amritsar is widely used to protect agricultural land, warehouses, commercial properties and industrial facilities. The controlled electric pulse creates a strong deterrent against unauthorized entry and animal intrusions, providing reliable perimeter security around farms, factories and residential properties across the city and surrounding rural areas.",
  },
  {
    question: "Is electric fencing safe for agricultural land?",
    answer:
      "Yes. Professional electric fence systems use short-duration, controlled pulses that deter animals and intruders without causing permanent harm. Agricultural electric fence installations around Amritsar include warning signs at regular intervals and are designed to be safe for farm workers and livestock while providing effective boundary protection.",
  },
  {
    question: "How much does electric fence installation cost in Amritsar?",
    answer:
      "The cost depends on the size of the property perimeter, the type of system selected (solar or grid-powered), terrain conditions and the materials used. We offer free site inspections in Amritsar and provide detailed, transparent quotes with no hidden charges. Contact us to schedule your free consultation.",
  },
  {
    question: "How long does electric fence installation take?",
    answer:
      "A small residential or farm installation in Amritsar typically takes 1–2 days. Larger industrial or warehouse perimeters may require 3–5 days depending on the scope. Our team provides a clear installation timeline after completing the site inspection.",
  },
  {
    question: "Do you install solar electric fencing in Amritsar?",
    answer:
      "Yes. We install solar electric fencing systems across Amritsar and the surrounding region. Solar systems are ideal for farms and rural properties around Majitha Road, Batala Road, Attari Road and other areas where grid power access may be limited. They operate independently 24/7 using renewable solar energy.",
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
  { step: "01", title: "Site Inspection in Amritsar", desc: "Our team visits your Amritsar property to assess the perimeter, terrain and security requirements before any work begins." },
  { step: "02", title: "Security Assessment & Fence Design", desc: "We conduct a thorough security assessment and prepare a customized fence layout based on your property dimensions and specific needs." },
  { step: "03", title: "Pole Installation & Wiring", desc: "MS powder coated or SS 304 stainless steel poles are installed and insulated tension wires are strung along the planned perimeter." },
  { step: "04", title: "Energizer Installation", desc: "High-voltage energizers are connected to deliver consistent, controlled pulses throughout the complete fence system." },
  { step: "05", title: "Final Testing & Activation", desc: "The system is fully tested, safety verified and activated. Warning signs are installed and your team is briefed on safe operation." },
];

const PAGE_URL = "https://kirpalsecurities.in/electric-fence-installation-amritsar";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Electric Fence Installation Punjab", href: pillarPageUrl },
  { label: "Electric Fence Installation Amritsar" },
];

const schemaBreadcrumbs = [
  { name: "Home", item: "https://kirpalsecurities.in/" },
  { name: "Services", item: "https://kirpalsecurities.in/services" },
  { name: "Electric Fence Installation Punjab", item: "https://kirpalsecurities.in/electric-fence-installation-punjab" },
  { name: "Electric Fence Installation Amritsar", item: PAGE_URL },
];

export default function ElectricFenceAmritsarPage() {
  const handleQuote = () => {
    const msg = encodeURIComponent(
      "Hello! I would like to request a free site inspection for electric fence installation in Amritsar. Please get back to me. Thanks!"
    );
    window.open(`https://wa.me/917009154711?text=${msg}`, "_blank");
  };

  const structuredData = buildElectricFenceSchemas({
    pageTitle: "Electric Fence Installation in Amritsar | Kirpal Securities",
    pageUrl: PAGE_URL,
    cityName: "Amritsar",
    breadcrumbs: schemaBreadcrumbs,
    faqs,
  });

  return (
    <>
      <SEOHead
        title="Electric Fence Installation in Amritsar | Kirpal Securities - Solar & Perimeter Fencing"
        description="Professional electric fence installation in Amritsar for farms, warehouses and factories. Kirpal Securities provides solar electric fencing solutions across Punjab. Call 7009154711."
        keywords="electric fence installation Amritsar, electric fencing Amritsar, solar electric fence Amritsar, electric fence company Amritsar, perimeter fencing Amritsar, farm electric fencing Amritsar, warehouse electric fencing Amritsar, industrial electric fence Amritsar"
        image="https://kirpalsecurities.in/electric-fence-installation-amritsar.jpg"
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
            Kirpal Securities — Amritsar's Trusted Electric Fence Installers
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Electric Fence Installation in Amritsar
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-4 text-red-100">
            Kirpal Securities provides professional electric fence installation services in Amritsar
            for farms, warehouses, factories and residential properties. We install solar electric
            fencing systems designed to provide reliable perimeter security.
          </p>
          <p className="text-sm text-red-200 mb-10">
            Kirpal Securities is a professional electric fence installation company providing services
            in Amritsar and across Punjab.
          </p>
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
            <a href="https://wa.me/917009154711" target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <MessageCircle size={18} />
                WhatsApp Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 — Electric Fencing Services in Amritsar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Electric Fencing Services in Amritsar</h2>
            <p className="text-lg text-gray-600 mb-4">
              Electric fencing is widely used in Amritsar to protect agricultural land, warehouses,
              commercial properties and industrial facilities. With large agricultural areas surrounding
              the city and a growing number of storage and logistics facilities, electric fencing
              systems help Amritsar property owners secure their boundaries effectively.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Kirpal Securities installs professional electric fencing systems in Amritsar designed
              for strong and reliable perimeter security. Our systems operate using controlled
              electrical pulses that deter intruders and animals while remaining safe for people
              and livestock.
            </p>
            <p className="text-lg text-gray-600">
              We have served customers across Amritsar's key areas including Ranjit Avenue, Lawrence
              Road, Majitha Road, Batala Road, Chheharta, Airport Road, Verka and Attari Road. Our
              team understands the security needs of both Amritsar's urban properties and its
              surrounding agricultural regions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="highlight-amritsar-1">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Effective Deterrent</h3>
              <p className="text-gray-600 text-sm">Controlled pulses deter unauthorized entry across Amritsar farms, factories and homes.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="highlight-amritsar-2">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safe Installation</h3>
              <p className="text-gray-600 text-sm">All Amritsar installations comply with safety standards with proper warning signage.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="highlight-amritsar-3">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Low Maintenance</h3>
              <p className="text-gray-600 text-sm">Durable materials built to perform reliably in Amritsar's climate with minimal upkeep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Where Electric Fencing is Used in Amritsar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Install Electric Fencing in Amritsar</h2>
            <p className="text-xl text-gray-600">Perimeter security for every property type across Amritsar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid="use-farms-amritsar">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Sun size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Electric Fencing for Farms in Amritsar</h3>
                <p className="text-gray-600">
                  Amritsar's agricultural belt along Majitha Road, Batala Road and Attari Road covers
                  extensive farmland that requires reliable perimeter protection. Solar electric fencing
                  systems provide cost-effective, grid-independent security for farm owners, protecting
                  crops and livestock from animal intrusions and unauthorized access.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid="use-warehouse-amritsar">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Warehouse size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Electric Fencing for Warehouses & Storage Facilities</h3>
                <p className="text-gray-600">
                  Storage facilities and warehouses around Amritsar, particularly near Airport Road and
                  Verka, handle high-value goods and require strong perimeter security. A professionally
                  installed electric fence provides continuous, reliable protection against theft and
                  unauthorized entry at storage facilities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid="use-industrial-amritsar">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Factory size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Electric Fencing for Factories & Industrial Sites</h3>
                <p className="text-gray-600">
                  Industrial and manufacturing premises in Amritsar's commercial zones need robust
                  perimeter protection. Electric fence systems create a highly visible and effective
                  security barrier that deters unauthorized entry and protects machinery, materials
                  and assets at factory sites.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid="use-residential-amritsar">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Home size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Electric Fencing for Residential Properties</h3>
                <p className="text-gray-600">
                  Homeowners in Amritsar's residential areas — including Ranjit Avenue, Lawrence Road
                  and Chheharta — are increasingly choosing electric fence systems to strengthen home
                  security. These systems provide an effective boundary deterrent while requiring
                  minimal ongoing maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Types of Electric Fencing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Electric Fencing We Install in Amritsar</h2>
            <p className="text-xl text-gray-600">Tailored fencing solutions for every property and purpose</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Sun size={24} />,
                title: "Solar Electric Fencing",
                desc: "Energy-efficient solar systems ideal for Amritsar's agricultural areas and rural properties. Operate continuously 24/7 without dependence on grid power.",
              },
              {
                icon: <Zap size={24} />,
                title: "Agricultural Electric Fencing",
                desc: "Designed for farm perimeters around Amritsar to protect crops, fields and livestock from animal intrusions and unauthorized access.",
              },
              {
                icon: <Factory size={24} />,
                title: "Industrial Perimeter Fencing",
                desc: "High-security systems for Amritsar's factories and industrial premises. Built to secure large perimeters reliably in demanding environments.",
              },
              {
                icon: <Warehouse size={24} />,
                title: "Warehouse Security Fencing",
                desc: "Purpose-built for Amritsar's storage facilities and logistics centres. Secures large perimeters efficiently and protects valuable inventory.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6" data-testid={`type-amritsar-${i}`}>
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

      {/* Section 5 — Materials & Technology */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Materials Used in Our Amritsar Installations</h2>
              <p className="text-lg text-gray-600 mb-8">
                Every electric fence installation in Amritsar uses high-quality, durable components
                selected for long-term performance. We use the same premium materials across all
                installations — whether a small residential fence or a large industrial perimeter.
              </p>
              <div className="space-y-4">
                {[
                  { label: "MS Powder Coated Poles", desc: "Corrosion-resistant mild steel poles with powder coating, built for durability in all weather conditions." },
                  { label: "SS 304 Stainless Steel Poles", desc: "Premium stainless steel poles offering superior strength and long service life for demanding installations." },
                  { label: "High Voltage Energizers", desc: "Reliable energizers delivering consistent, controlled pulses across the complete fence perimeter." },
                  { label: "Insulated Tension Wires", desc: "High-tensile insulated wires ensuring efficient electrical conductivity and long-term structural integrity." },
                  { label: "Fence Warning Signage", desc: "Clearly visible warning signs installed at regular intervals for safety compliance and effective deterrence." },
                ].map(({ label, desc }, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm" data-testid={`material-amritsar-${i}`}>
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
              <h3 className="text-2xl font-bold mb-4">Get a Free Quote in Amritsar</h3>
              <p className="text-red-100 mb-4">
                Contact our team for a free site inspection and customized quote for electric fence
                installation at your Amritsar property. Transparent pricing with no hidden charges.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0" />
                  <div>
                    <p className="text-sm text-red-200">Nikhil</p>
                    <a href="tel:7009154711" className="font-semibold hover:underline" data-testid="phone-nikhil-sidebar">7009154711</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0" />
                  <div>
                    <p className="text-sm text-red-200">Naveen</p>
                    <a href="tel:9463687535" className="font-semibold hover:underline" data-testid="phone-naveen-sidebar">9463687535</a>
                  </div>
                </div>
              </div>
              <a href="https://wa.me/917009154711" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-brand-red hover:bg-red-50 font-semibold w-full" data-testid="button-whatsapp-sidebar">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process in Amritsar</h2>
            <p className="text-xl text-gray-600">A professional, step-by-step approach from inspection to activation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {installationSteps.map(({ step, title, desc }, i) => (
              <div key={i} className="text-center" data-testid={`step-amritsar-${i}`}>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kirpal Securities in Amritsar?</h2>
            <p className="text-xl text-gray-600">Trusted electric fence installation specialists serving Amritsar and Punjab</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Award size={28} />, stat: "7+", label: "Years Experience", desc: "Over seven years installing electric fence systems across Amritsar and Punjab." },
              { icon: <CheckCircle size={28} />, stat: "3300+", label: "Installations", desc: "Thousands of successful fencing installations for farms, industries and homes." },
              { icon: <Users size={28} />, stat: "Pro", label: "Engineers", desc: "Skilled professional technicians experienced in all types of perimeter security systems." },
              { icon: <ShieldCheck size={28} />, stat: "Top", label: "Materials", desc: "SS 304 poles, MS powder coated supports and high-voltage energizers on every job." },
              { icon: <Zap size={28} />, stat: "24/7", label: "Security", desc: "Reliable perimeter protection that operates continuously day and night." },
            ].map(({ icon, stat, label, desc }, i) => (
              <div key={i} className="text-center bg-white rounded-lg shadow p-6" data-testid={`why-amritsar-${i}`}>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area in Amritsar</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Kirpal Securities provides electric fence installation in Amritsar and nearby areas
                  including Ranjit Avenue, Lawrence Road, Majitha Road, Chheharta, Airport Road,
                  Verka, Batala Road and Attari Road and surrounding locations.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Our team also provides electric fence installation services across Punjab including
                  Jalandhar, Ludhiana, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar.
                </p>
                <p className="text-lg text-gray-600">
                  Kirpal Securities provides electric fence installation in Amritsar and across Punjab.{" "}
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas Covered in Amritsar</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Ranjit Avenue",
                    "Lawrence Road",
                    "Majitha Road",
                    "Batala Road",
                    "Chheharta",
                    "Airport Road",
                    "Verka",
                    "Attari Road",
                  ].map((area) => (
                    <div key={area} className="flex items-center gap-2 text-gray-700" data-testid={`area-${area.toLowerCase().replace(/\s+/g, "-")}`}>
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

      <ElectricFenceCityExtras cityName="Amritsar" citySlug="amritsar" />

      {/* Section 9 — FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions — Electric Fence Installation Amritsar
            </h2>
            <p className="text-xl text-gray-600">Common questions from our Amritsar customers</p>
          </div>

          <div className="space-y-4" data-testid="faq-amritsar">
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
            Secure Your Property with Professional Electric Fence Installation in Amritsar
          </h2>
          <p className="text-xl text-red-100 mb-4">
            Contact Kirpal Securities today for a free consultation and site inspection in Amritsar.
          </p>
          <p className="text-red-200 mb-10">
            Serving farms, warehouses, factories and residential properties across Amritsar and all of Punjab.
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
            <a href="https://wa.me/917009154711" target="_blank" rel="noopener noreferrer" data-testid="cta-whatsapp">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <MessageCircle size={18} />
                WhatsApp Us
              </Button>
            </a>
          </div>
          <p className="text-red-200 text-sm">
            <a href={pillarPageUrl} className="underline hover:text-white" data-testid="link-all-areas">
              View all Punjab electric fence installation areas →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
