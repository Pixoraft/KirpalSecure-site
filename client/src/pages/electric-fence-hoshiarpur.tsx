import { useState } from "react";
import { Phone, MessageCircle, FileText, ShieldCheck, Zap, Sun, Factory, Warehouse, Home, Users, Award, CheckCircle, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { buildElectricFenceSchemas, pillarPageUrl } from "@/lib/electric-fence-cities";
import { ElectricFenceCityExtras } from "@/components/electric-fence-city-extras";

const faqs = [
  {
    question: "What is electric fencing used for in Hoshiarpur?",
    answer:
      "Electric fencing in Hoshiarpur is widely used to secure agricultural land, orchards, warehouses and industrial properties. The region's strong agricultural base and growing commercial sector make perimeter security essential for protecting property boundaries from animal intrusions and unauthorized access.",
  },
  {
    question: "Is electric fencing safe for farms and orchards?",
    answer:
      "Yes. Professional electric fence systems use short-duration, controlled pulses that deter animals and intruders without causing permanent harm. Farm and orchard installations in Hoshiarpur include warning signs at regular intervals and comply with safety standards, making them safe for farm workers and livestock.",
  },
  {
    question: "How much does electric fence installation cost in Hoshiarpur?",
    answer:
      "The cost depends on the size of the property perimeter, terrain, the type of system (solar or grid-powered) and the materials used. We offer free site inspections in Hoshiarpur and provide detailed, transparent quotes with no hidden charges. Contact us to schedule your free consultation.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A standard residential or small farm installation in Hoshiarpur typically takes 1–2 days. Larger industrial or warehouse perimeters may require 3–5 days. Our team provides a clear installation timeline after completing the site inspection.",
  },
  {
    question: "Do you install solar electric fencing in Hoshiarpur?",
    answer:
      "Yes. We install solar electric fencing systems in Hoshiarpur that operate independently of the electricity grid. Solar systems are ideal for farms, orchards and rural properties where grid power access may be limited. They operate continuously 24/7 using renewable solar energy.",
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
  { step: "01", title: "Site Inspection in Hoshiarpur", desc: "Our team visits your Hoshiarpur property to assess the perimeter, terrain and security requirements before any work begins." },
  { step: "02", title: "Security Assessment & Fence Design", desc: "We conduct a thorough security assessment and prepare a customized fence layout based on your property dimensions and specific needs." },
  { step: "03", title: "Pole Installation & Wiring Setup", desc: "MS powder coated or SS 304 stainless steel poles are installed and high-tensile insulated wires are strung along the planned perimeter." },
  { step: "04", title: "Energizer Installation", desc: "High-voltage energizers are connected to deliver consistent, controlled pulses throughout the complete fence system." },
  { step: "05", title: "Final Testing & Activation", desc: "The system is fully tested, safety verified and activated. Warning signs are installed and your team is briefed on safe operation." },
];

const PAGE_URL = "https://kirpalsecurities.in/electric-fence-installation-hoshiarpur";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Electric Fence Installation Punjab", href: pillarPageUrl },
  { label: "Electric Fence Installation Hoshiarpur" },
];

const schemaBreadcrumbs = [
  { name: "Home", item: "https://kirpalsecurities.in/" },
  { name: "Services", item: "https://kirpalsecurities.in/services" },
  { name: "Electric Fence Installation Punjab", item: "https://kirpalsecurities.in/electric-fence-installation-punjab" },
  { name: "Electric Fence Installation Hoshiarpur", item: PAGE_URL },
];

export default function ElectricFenceHoshiarpurPage() {
  const handleQuote = () => {
    const msg = encodeURIComponent(
      "Hello! I would like to request a free site inspection for electric fence installation in Hoshiarpur. Please get back to me. Thanks!"
    );
    window.open(`https://wa.me/917009154711?text=${msg}`, "_blank");
  };

  const structuredData = buildElectricFenceSchemas({
    pageTitle: "Electric Fence Installation in Hoshiarpur | Kirpal Securities",
    pageUrl: PAGE_URL,
    cityName: "Hoshiarpur",
    breadcrumbs: schemaBreadcrumbs,
    faqs,
  });

  return (
    <>
      <SEOHead
        title="Electric Fence Installation in Hoshiarpur | Kirpal Securities - Solar & Agricultural Fencing"
        description="Professional electric fence installation in Hoshiarpur for farms, warehouses and factories. Kirpal Securities provides solar electric fencing solutions across Punjab. Call 7009154711."
        keywords="electric fence installation Hoshiarpur, electric fencing Hoshiarpur, solar electric fence Hoshiarpur, electric fence company Hoshiarpur, agricultural electric fence Hoshiarpur, perimeter fencing Hoshiarpur, farm electric fencing Hoshiarpur, warehouse electric fence Hoshiarpur"
        image="https://kirpalsecurities.in/electric-fence-installation-hoshiarpur.jpg"
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
            Kirpal Securities — Hoshiarpur's Trusted Electric Fence Installers
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Electric Fence Installation in Hoshiarpur
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-4 text-red-100">
            Kirpal Securities provides professional electric fence installation services in Hoshiarpur for
            farms, orchards, warehouses, factories and residential properties. We install solar electric
            fencing systems designed to provide reliable perimeter security.
          </p>
          <p className="text-sm text-red-200 mb-10">
            Kirpal Securities is a professional electric fence installation company providing services in
            Hoshiarpur and across Punjab.
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

      {/* Section 2 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Electric Fencing Services in Hoshiarpur</h2>
            <p className="text-lg text-gray-600 mb-4">
              Electric fencing is widely used in Hoshiarpur to secure agricultural land, orchards,
              warehouses and industrial properties. With Hoshiarpur being known for its strong
              agricultural heritage and fertile farmland, perimeter security systems are essential
              for protecting crops, livestock and property boundaries.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Kirpal Securities installs professional electric fencing systems in Hoshiarpur designed
              for durability and reliable perimeter protection. Our systems use controlled electrical
              pulses that deter intruders and animals while remaining safe for farm workers and residents.
            </p>
            <p className="text-lg text-gray-600">
              We serve customers across Hoshiarpur and surrounding areas including Tanda Road,
              Mukerian Road, Una Road, Garhshankar and surrounding rural areas. Our team understands
              the specific perimeter security needs of Hoshiarpur's agricultural and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Zap size={24} />, title: "Strong Deterrent", desc: "Controlled pulses deter unauthorized entry across Hoshiarpur farms, orchards and properties." },
              { icon: <ShieldCheck size={24} />, title: "Safe & Compliant", desc: "All Hoshiarpur installations meet safety standards with proper warning signage throughout." },
              { icon: <CheckCircle size={24} />, title: "Low Maintenance", desc: "Durable systems built for reliable performance in Hoshiarpur's climate with minimal upkeep." },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 text-center" data-testid={`highlight-hoshiarpur-${i + 1}`}>
                <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">{icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Install Electric Fencing in Hoshiarpur</h2>
            <p className="text-xl text-gray-600">Perimeter security for every property type across Hoshiarpur</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Sun size={22} />, title: "Electric Fencing for Farms & Orchards in Hoshiarpur", desc: "Hoshiarpur's fertile agricultural land and orchards require reliable perimeter protection from animal intrusions. Solar electric fencing provides cost-effective, grid-independent security for farm and orchard owners across the Hoshiarpur district.", testid: "use-farms-hoshiarpur" },
              { icon: <Warehouse size={22} />, title: "Electric Fencing for Warehouses & Storage Facilities", desc: "Storage facilities and warehouses in Hoshiarpur require strong perimeter protection for goods and materials. A professionally installed electric fence provides round-the-clock security against theft and unauthorized access at storage sites.", testid: "use-warehouse-hoshiarpur" },
              { icon: <Factory size={22} />, title: "Electric Fencing for Factories & Industrial Sites", desc: "Industrial and manufacturing premises in Hoshiarpur need robust perimeter protection. Electric fence systems create an effective security barrier that protects machinery, raw materials and assets from unauthorized entry.", testid: "use-industrial-hoshiarpur" },
              { icon: <Home size={22} />, title: "Electric Fencing for Residential Properties", desc: "Homeowners across Hoshiarpur are choosing electric fence systems to strengthen home security. These systems provide an effective boundary deterrent at property perimeters while requiring minimal ongoing maintenance.", testid: "use-residential-hoshiarpur" },
            ].map(({ icon, title, desc, testid }) => (
              <div key={testid} className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid={testid}>
                <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Electric Fencing We Install in Hoshiarpur</h2>
            <p className="text-xl text-gray-600">Tailored fencing solutions for every property and purpose</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Sun size={24} />, title: "Solar Electric Fencing", desc: "Energy-efficient solar systems ideal for Hoshiarpur's farms and orchards. Operate independently 24/7 without grid power dependence." },
              { icon: <Zap size={24} />, title: "Agricultural Electric Fencing", desc: "Purpose-built for farm and orchard perimeters in Hoshiarpur. Protects crops, fields and livestock from animal intrusions and unauthorized access." },
              { icon: <Factory size={24} />, title: "Industrial Perimeter Fencing", desc: "High-security systems for Hoshiarpur's factories and industrial premises. Built to secure large perimeters reliably and effectively." },
              { icon: <Warehouse size={24} />, title: "Warehouse Security Fencing", desc: "Designed for storage facilities in Hoshiarpur. Efficiently secures large perimeters and protects valuable goods from theft." },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6" data-testid={`type-hoshiarpur-${i}`}>
                <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">{icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Materials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Materials Used in Our Hoshiarpur Installations</h2>
              <p className="text-lg text-gray-600 mb-8">Every electric fence installation in Hoshiarpur uses high-quality, durable components selected for long-term performance across all property types.</p>
              <div className="space-y-4">
                {[
                  { label: "MS Powder Coated Poles", desc: "Corrosion-resistant mild steel poles with powder coating, built for durability in all weather conditions." },
                  { label: "SS 304 Stainless Steel Poles", desc: "Premium stainless steel poles offering superior strength and a long service life." },
                  { label: "High Voltage Energizers", desc: "Reliable energizers delivering consistent, controlled pulses across the full fence perimeter." },
                  { label: "Insulated Tension Wires", desc: "High-tensile insulated wires ensuring efficient electrical conductivity and long-term durability." },
                  { label: "Fence Warning Signage", desc: "Clearly visible warning signs installed at regular intervals for safety compliance and deterrence." },
                ].map(({ label, desc }, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm" data-testid={`material-hoshiarpur-${i}`}>
                    <CheckCircle className="text-brand-red flex-shrink-0 mt-1" size={20} />
                    <div><p className="font-semibold text-gray-900">{label}</p><p className="text-gray-600 text-sm">{desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-red text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Get a Free Quote in Hoshiarpur</h3>
              <p className="text-red-100 mb-4">Contact our team for a free site inspection and customized quote. Transparent pricing with no hidden charges.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0" />
                  <div><p className="text-sm text-red-200">Nikhil</p><a href="tel:7009154711" className="font-semibold hover:underline" data-testid="phone-nikhil-sidebar">7009154711</a></div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0" />
                  <div><p className="text-sm text-red-200">Naveen</p><a href="tel:9463687535" className="font-semibold hover:underline" data-testid="phone-naveen-sidebar">9463687535</a></div>
                </div>
              </div>
              <a href="https://wa.me/917009154711" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-brand-red hover:bg-red-50 font-semibold w-full" data-testid="button-whatsapp-sidebar">WhatsApp for Free Quote</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process in Hoshiarpur</h2>
            <p className="text-xl text-gray-600">A professional, step-by-step approach from inspection to activation</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {installationSteps.map(({ step, title, desc }, i) => (
              <div key={i} className="text-center" data-testid={`step-hoshiarpur-${i}`}>
                <div className="w-14 h-14 rounded-full bg-brand-red text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">{step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Why */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kirpal Securities in Hoshiarpur?</h2>
            <p className="text-xl text-gray-600">Trusted electric fence installation specialists serving Hoshiarpur and Punjab</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Award size={28} />, stat: "7+", label: "Years Experience", desc: "Over seven years installing electric fence systems across Punjab including Hoshiarpur." },
              { icon: <CheckCircle size={28} />, stat: "3300+", label: "Installations", desc: "Thousands of successful fencing installations for farms, industries and homes." },
              { icon: <Users size={28} />, stat: "Pro", label: "Engineers", desc: "Skilled professional technicians experienced in perimeter security systems." },
              { icon: <ShieldCheck size={28} />, stat: "Top", label: "Materials", desc: "SS 304 poles, MS powder coated supports and high-voltage energizers on every job." },
              { icon: <Zap size={28} />, stat: "24/7", label: "Security", desc: "Reliable perimeter protection operating continuously day and night." },
            ].map(({ icon, stat, label, desc }, i) => (
              <div key={i} className="text-center bg-white rounded-lg shadow p-6" data-testid={`why-hoshiarpur-${i}`}>
                <div className="bg-brand-red text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">{icon}</div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area in Hoshiarpur</h2>
                <p className="text-lg text-gray-600 mb-4">Kirpal Securities provides electric fence installation in Hoshiarpur and surrounding areas including Tanda Road, Mukerian Road, Una Road, Garhshankar and surrounding rural areas.</p>
                <p className="text-lg text-gray-600 mb-4">Our team also provides electric fence installation services across Punjab including Jalandhar, Ludhiana, Amritsar, Pathankot, Phagwara, Kapurthala and Nakodar.</p>
                <p className="text-lg text-gray-600">Kirpal Securities provides electric fence installation in Hoshiarpur and across Punjab.{" "}
                  <a href={pillarPageUrl} className="text-brand-red hover:underline font-semibold" data-testid="link-pillar-page">Learn more about our electric fencing services across Punjab here.</a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas Covered in Hoshiarpur</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Tanda Road", "Mukerian Road", "Una Road", "Garhshankar", "Hajipur", "Mahilpur", "Dasuya", "Surrounding Areas"].map((area) => (
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

      <ElectricFenceCityExtras cityName="Hoshiarpur" citySlug="hoshiarpur" />

      {/* Section 9 — FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Electric Fence Installation Hoshiarpur</h2>
            <p className="text-xl text-gray-600">Common questions from our Hoshiarpur customers</p>
          </div>
          <div className="space-y-4" data-testid="faq-hoshiarpur">
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
          </div>
        </div>
      </section>

      {/* Section 10 — CTA */}
      <section className="py-16 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Secure Your Property with Professional Electric Fence Installation in Hoshiarpur</h2>
          <p className="text-xl text-red-100 mb-4">Contact Kirpal Securities today for a free consultation and site inspection in Hoshiarpur.</p>
          <p className="text-red-200 mb-10">Serving farms, orchards, warehouses and residential properties across Hoshiarpur and all of Punjab.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:7009154711" data-testid="cta-call-nikhil"><Button className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] px-8 flex items-center gap-2"><Phone size={18} />Call Nikhil: 7009154711</Button></a>
            <a href="tel:9463687535" data-testid="cta-call-naveen"><Button className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] px-8 flex items-center gap-2"><Phone size={18} />Call Naveen: 9463687535</Button></a>
            <a href="https://wa.me/917009154711" target="_blank" rel="noopener noreferrer" data-testid="cta-whatsapp"><Button className="bg-green-500 hover:bg-green-600 text-white font-semibold min-h-[48px] px-8 flex items-center gap-2"><MessageCircle size={18} />WhatsApp Us</Button></a>
          </div>
          <p className="text-red-200 text-sm"><a href={pillarPageUrl} className="underline hover:text-white" data-testid="link-all-areas">View all Punjab electric fence installation areas →</a></p>
        </div>
      </section>
    </>
  );
}
