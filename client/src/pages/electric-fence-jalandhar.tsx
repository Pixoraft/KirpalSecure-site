import { useState } from "react";
import { Phone, MessageCircle, FileText, ShieldCheck, Zap, Sun, Factory, Warehouse, Home, Users, Award, CheckCircle, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { buildElectricFenceSchemas, pillarPageUrl } from "@/lib/electric-fence-cities";
import { ElectricFenceCityExtras } from "@/components/electric-fence-city-extras";

const faqs = [
  {
    question: "What is electric fencing used for in Jalandhar?",
    answer:
      "Electric fencing in Jalandhar is used to secure agricultural land, industrial factories, warehouses, commercial properties and residential homes. The controlled electric pulse creates a strong deterrent against intruders and animal intrusions, providing reliable perimeter security around the clock.",
  },
  {
    question: "Is electric fencing safe for residential areas?",
    answer:
      "Yes. Professional electric fence systems use short-duration, controlled pulses that are designed to deter rather than cause permanent harm. Our residential installations in Jalandhar include warning signs at regular intervals and comply with safety standards, making them safe for families while providing effective security.",
  },
  {
    question: "How much does electric fence installation cost in Jalandhar?",
    answer:
      "The cost depends on the size of the property, terrain, type of system (solar or grid-powered) and the materials selected. We offer free site inspections in Jalandhar and provide customized quotes with no hidden charges. Contact us to schedule a free consultation.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A standard residential or small farm installation in Jalandhar typically takes 1–2 days. Larger industrial or warehouse perimeters may require 3–5 days. Our team will provide a clear timeline during the site inspection.",
  },
  {
    question: "Do you provide solar electric fencing in Jalandhar?",
    answer:
      "Yes. We install solar electric fencing systems in Jalandhar that are ideal for properties without reliable grid power or for customers looking for an energy-efficient fencing solution. Solar systems work independently of the electricity grid and are popular for farms and rural properties in and around Jalandhar.",
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
  { step: "01", title: "Site Inspection in Jalandhar", desc: "Our team visits your property in Jalandhar to assess the perimeter, terrain and specific security requirements before any work begins." },
  { step: "02", title: "Fence Design Planning", desc: "We prepare a customized fence layout plan based on your property dimensions, access points and security needs." },
  { step: "03", title: "Pole Installation & Wiring", desc: "MS powder coated or SS 304 stainless steel poles are installed and insulated tension wires are strung along the planned perimeter." },
  { step: "04", title: "Energizer Installation", desc: "High-voltage energizers are installed and connected to deliver consistent, controlled pulses throughout the fence system." },
  { step: "05", title: "Final Testing & Activation", desc: "The complete system is tested, safety verified and activated. Warning signs are placed and your team is briefed on safe operation." },
];

const PAGE_URL = "https://kirpalsecurities.in/electric-fence-installation-jalandhar";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Electric Fence Installation Punjab", href: pillarPageUrl },
  { label: "Electric Fence Installation Jalandhar" },
];

const schemaBreadcrumbs = [
  { name: "Home", item: "https://kirpalsecurities.in/" },
  { name: "Services", item: "https://kirpalsecurities.in/services" },
  { name: "Electric Fence Installation Punjab", item: "https://kirpalsecurities.in/electric-fence-installation-punjab" },
  { name: "Electric Fence Installation Jalandhar", item: PAGE_URL },
];

export default function ElectricFenceJalandharPage() {
  const handleQuote = () => {
    const msg = encodeURIComponent(
      "Hello! I would like to request a free site inspection for electric fence installation in Jalandhar. Please get back to me. Thanks!"
    );
    window.open(`https://wa.me/917009154711?text=${msg}`, "_blank");
  };

  const structuredData = buildElectricFenceSchemas({
    pageTitle: "Electric Fence Installation in Jalandhar | Kirpal Securities",
    pageUrl: PAGE_URL,
    cityName: "Jalandhar",
    breadcrumbs: schemaBreadcrumbs,
    faqs,
  });

  return (
    <>
      <SEOHead
        title="Electric Fence Installation in Jalandhar | Kirpal Securities - Solar & Perimeter Fencing"
        description="Professional electric fence installation in Jalandhar for farms, warehouses and factories. Kirpal Securities provides solar electric fencing solutions across Punjab. Call 7009154711."
        keywords="electric fence installation Jalandhar, electric fencing Jalandhar, solar electric fence Jalandhar, electric fence company Jalandhar, perimeter fencing Jalandhar, farm electric fencing Jalandhar, warehouse electric fencing Jalandhar, industrial electric fence Jalandhar"
        image="https://kirpalsecurities.in/electric-fence-installation-jalandhar.jpg"
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
            Kirpal Securities — Jalandhar's Trusted Electric Fence Installers
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Electric Fence Installation in Jalandhar
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-4 text-red-100">
            Kirpal Securities provides professional electric fence installation services in Jalandhar for
            farms, factories, warehouses and residential properties. We install solar electric fencing
            systems designed to provide strong perimeter security.
          </p>
          <p className="text-sm text-red-200 mb-10">
            Kirpal Securities is a professional electric fence installation company providing services in
            Jalandhar and across Punjab.
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

      {/* Section 2 — Electric Fencing Services in Jalandhar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Electric Fencing Services in Jalandhar</h2>
            <p className="text-lg text-gray-600 mb-4">
              Electric fencing is widely used in Jalandhar to secure agricultural land, warehouses,
              factories and commercial properties. These systems create a protective perimeter using
              controlled electrical pulses that deter intruders and animals while remaining safe for
              people and livestock.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              As Jalandhar continues to grow as an industrial and commercial hub in Punjab, the demand
              for professional electric fence installation has increased significantly. Property owners
              across the city — from large industrial estates to residential neighbourhoods — rely on
              electric fencing for consistent, low-maintenance perimeter security.
            </p>
            <p className="text-lg text-gray-600">
              Kirpal Securities has been installing electric fence systems in Jalandhar for over 7 years,
              serving customers across Urban Estate, Model Town, Jalandhar Cantt, Adarsh Nagar,
              Lamba Pind and areas along Phagwara Road and Nakodar Road.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="highlight-jalandhar-1">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Strong Deterrent</h3>
              <p className="text-gray-600 text-sm">Controlled electric pulses effectively deter unauthorized entry across Jalandhar properties.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="highlight-jalandhar-2">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safe & Compliant</h3>
              <p className="text-gray-600 text-sm">All installations in Jalandhar meet safety standards with proper warning signage.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="highlight-jalandhar-3">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Low Maintenance</h3>
              <p className="text-gray-600 text-sm">Durable systems built to perform reliably in Jalandhar's climate with minimal upkeep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Where Electric Fencing is Used in Jalandhar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Install Electric Fencing in Jalandhar</h2>
            <p className="text-xl text-gray-600">Perimeter security for every property type across Jalandhar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid="use-farms-jalandhar">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Sun size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Electric Fencing for Farms in Jalandhar</h3>
                <p className="text-gray-600">
                  Agricultural land on the outskirts of Jalandhar and in areas along Phagwara Road and
                  Nakodar Road require protection from animal intrusions and unauthorized access. Solar
                  electric fencing systems are a popular and cost-effective choice for farm owners in
                  and around Jalandhar.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid="use-industrial-jalandhar">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Factory size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Electric Fencing for Factories & Industrial Sites</h3>
                <p className="text-gray-600">
                  Jalandhar's industrial areas house manufacturing units, factories and commercial
                  premises that require strong perimeter protection. Electric fence systems create a
                  highly visible and effective security barrier that deters unauthorized entry and
                  protects valuable assets.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid="use-warehouse-jalandhar">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Warehouse size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Electric Fencing for Warehouses</h3>
                <p className="text-gray-600">
                  Storage facilities and warehouses in Jalandhar face significant risks from theft and
                  unauthorized access. A professionally installed electric fence perimeter provides
                  round-the-clock protection for goods, machinery and materials stored on site.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid="use-residential-jalandhar">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Home size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Electric Fencing for Residential Properties</h3>
                <p className="text-gray-600">
                  Homeowners in Jalandhar's residential areas — including Urban Estate, Model Town and
                  Adarsh Nagar — are increasingly choosing electric fence systems to enhance home
                  security. These systems provide an effective deterrent at property boundaries
                  without compromising aesthetics.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Electric Fencing We Install in Jalandhar</h2>
            <p className="text-xl text-gray-600">Tailored fencing solutions for every property and purpose</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Sun size={24} />,
                title: "Solar Electric Fencing",
                desc: "Energy-efficient solar-powered systems ideal for farms and rural properties around Jalandhar without reliable grid power. Operate independently 24/7.",
              },
              {
                icon: <Zap size={24} />,
                title: "Agricultural Electric Fencing",
                desc: "Specifically designed for farm perimeters to protect crops and land from animal intrusions and unauthorized access across Jalandhar's agricultural areas.",
              },
              {
                icon: <Factory size={24} />,
                title: "Industrial Perimeter Fencing",
                desc: "High-security systems for factories and industrial estates in Jalandhar requiring strong, reliable perimeter protection for large-scale premises.",
              },
              {
                icon: <Warehouse size={24} />,
                title: "Warehouse Security Fencing",
                desc: "Purpose-built for storage facilities and logistics centres in Jalandhar. Secures large perimeters efficiently and protects valuable goods from theft.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6" data-testid={`type-jalandhar-${i}`}>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Materials Used in Our Jalandhar Installations</h2>
              <p className="text-lg text-gray-600 mb-8">
                Every electric fence installation in Jalandhar uses high-quality, durable components
                selected for long-term performance. We use the same premium materials across all
                property types — from small residential installations to large industrial perimeters.
              </p>
              <div className="space-y-4">
                {[
                  { label: "MS Powder Coated Poles", desc: "Corrosion-resistant mild steel poles with powder coating, built for durability in all weather conditions." },
                  { label: "SS 304 Stainless Steel Poles", desc: "Premium stainless steel poles offering superior strength and an extended service life." },
                  { label: "High Voltage Energizers", desc: "Reliable energizers delivering consistent, controlled pulses across the full fence perimeter." },
                  { label: "Insulated Tension Wires", desc: "High-tensile insulated wires for efficient electrical conductivity and long-term durability." },
                  { label: "Fence Warning Signage", desc: "Clearly visible warning signs installed at regular intervals for safety and legal compliance." },
                ].map(({ label, desc }, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm" data-testid={`material-jalandhar-${i}`}>
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
              <h3 className="text-2xl font-bold mb-4">Get a Free Quote in Jalandhar</h3>
              <p className="text-red-100 mb-4">
                Contact our team for a free site inspection and customized quote for electric fence
                installation at your Jalandhar property. No hidden charges, transparent pricing.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process in Jalandhar</h2>
            <p className="text-xl text-gray-600">A professional, step-by-step approach to every installation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {installationSteps.map(({ step, title, desc }, i) => (
              <div key={i} className="text-center" data-testid={`step-jalandhar-${i}`}>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kirpal Securities in Jalandhar?</h2>
            <p className="text-xl text-gray-600">Jalandhar's trusted electric fence installation specialists</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Award size={28} />, stat: "7+", label: "Years Experience", desc: "Over seven years installing electric fence systems across Jalandhar and Punjab." },
              { icon: <CheckCircle size={28} />, stat: "3300+", label: "Installations", desc: "Thousands of successful fencing installations for farms, industries and homes." },
              { icon: <Users size={28} />, stat: "Pro", label: "Engineers", desc: "Skilled professional technicians trained in perimeter security systems." },
              { icon: <ShieldCheck size={28} />, stat: "Top", label: "Materials", desc: "SS 304 stainless steel poles, powder coated supports and high-voltage energizers." },
              { icon: <Zap size={28} />, stat: "24/7", label: "Security", desc: "Reliable perimeter protection that works continuously day and night." },
            ].map(({ icon, stat, label, desc }, i) => (
              <div key={i} className="text-center bg-white rounded-lg shadow p-6" data-testid={`why-jalandhar-${i}`}>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area in Jalandhar</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Kirpal Securities provides electric fence installation in Jalandhar and surrounding
                  areas. Our team frequently installs fencing systems across Jalandhar including
                  Urban Estate, Model Town, Jalandhar Cantt, Adarsh Nagar, Lamba Pind and areas
                  along Phagwara Road and Nakodar Road.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We also provide electric fence installation services across Punjab including
                  Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar.
                </p>
                <p className="text-lg text-gray-600">
                  Kirpal Securities provides electric fence installation in Jalandhar and across Punjab.{" "}
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas Covered in Jalandhar</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Urban Estate",
                    "Model Town",
                    "Jalandhar Cantt",
                    "Adarsh Nagar",
                    "Lamba Pind",
                    "Phagwara Road",
                    "Nakodar Road",
                    "Surrounding Areas",
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

      <ElectricFenceCityExtras cityName="Jalandhar" citySlug="jalandhar" />

      {/* Section 9 — FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions — Electric Fence Installation Jalandhar
            </h2>
            <p className="text-xl text-gray-600">Common questions from our Jalandhar customers</p>
          </div>

          <div className="space-y-4" data-testid="faq-jalandhar">
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
            Secure Your Property with Professional Electric Fence Installation in Jalandhar
          </h2>
          <p className="text-xl text-red-100 mb-4">
            Contact Kirpal Securities today for a free consultation and site inspection in Jalandhar.
          </p>
          <p className="text-red-200 mb-10">
            Serving farms, warehouses, industrial facilities and residential properties across Jalandhar and all of Punjab.
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
