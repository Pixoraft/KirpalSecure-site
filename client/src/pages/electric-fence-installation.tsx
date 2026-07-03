import { Phone, MessageCircle, FileText, ShieldCheck, Zap, Sun, Factory, Warehouse, Home, Users, Award, CheckCircle, ChevronDown, MapPin, ChevronRight, Star, Clock, BadgeCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { electricFenceCities, buildElectricFenceSchemas } from "@/lib/electric-fence-cities";

const faqs = [
  {
    question: "What is electric fencing used for?",
    answer:
      "Electric fencing is used to secure and protect property boundaries. It is commonly installed for agricultural land to prevent animal intrusions, industrial and factory perimeters to deter unauthorized entry, warehouse perimeter protection, and residential properties requiring enhanced security. The controlled electric pulse acts as a strong deterrent without causing permanent harm.",
  },
  {
    question: "Is electric fencing safe?",
    answer:
      "Yes. Professional electric fence systems use controlled, short-duration pulses that are designed to deter rather than cause serious injury. Our installations comply with safety standards and include warning signs at regular intervals. The systems are designed to be safe for humans and animals while remaining effective as a security deterrent.",
  },
  {
    question: "How much does electric fence installation cost?",
    answer:
      "The cost depends on the size of the property, type of fencing system (solar or grid-powered), terrain, and the materials selected. We offer free site inspections and customized quotes tailored to your specific requirements. Contact us to schedule a free consultation.",
  },
  {
    question: "Where do you provide electric fencing services?",
    answer:
      "Kirpal Securities provides electric fence installation services across the entire Punjab region. We frequently serve Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar. We also serve surrounding towns and rural areas throughout Punjab — contact us to confirm availability in your area.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation time depends on the size and complexity of the property. A standard residential or small farm installation typically takes 1–2 days. Larger industrial or warehouse perimeters may require 3–5 days. Our team will provide a clear timeline during the site inspection.",
  },
  {
    question: "What types of electric fence systems do you install?",
    answer:
      "We install solar electric fencing systems, grid-powered agricultural fencing, industrial perimeter fencing, warehouse security fencing, and residential electric fence systems. Each system is tailored to the property's specific security needs using high-quality materials.",
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
  { step: "01", title: "Site Inspection", desc: "Our team visits your property to assess the perimeter, terrain and security requirements." },
  { step: "02", title: "Fence Layout Design", desc: "We design a customized fencing plan tailored to your property boundaries and security needs." },
  { step: "03", title: "Pole Installation", desc: "MS powder coated or SS 304 stainless steel poles are installed at precise intervals along the perimeter." },
  { step: "04", title: "Wiring & Energizer Setup", desc: "Insulated tension wires are strung and connected to high-voltage energizers for consistent output." },
  { step: "05", title: "Final Safety Testing", desc: "The complete system is tested and verified. Warning signs are installed and your team is briefed on safe operation." },
];

const PAGE_URL = "https://kirpalsecurities.in/electric-fence-installation-punjab";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Electric Fence Installation Punjab" },
];

const schemaBreadcrumbs = [
  { name: "Home", item: "https://kirpalsecurities.in/" },
  { name: "Services", item: "https://kirpalsecurities.in/services" },
  { name: "Electric Fence Installation Punjab", item: PAGE_URL },
];

export default function ElectricFenceInstallationPage() {
  const handleQuote = () => {
    const msg = encodeURIComponent("Hello! I would like to request a free quote for electric fence installation in Punjab. Please get back to me. Thanks!");
    window.open(`https://wa.me/917009154711?text=${msg}`, "_blank");
  };

  const structuredData = buildElectricFenceSchemas({
    pageTitle: "Electric Fence Installation in Punjab | Kirpal Securities",
    pageUrl: PAGE_URL,
    breadcrumbs: schemaBreadcrumbs,
    faqs,
  });

  return (
    <>
      <SEOHead
        title="Electric Fence Installation in Punjab | Kirpal Securities - Solar & Perimeter Fencing"
        description="Kirpal Securities provides professional electric fence installation across Punjab. Solar electric fencing, agricultural, industrial & residential perimeter systems. Serving Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur and all of Punjab. Call 7009154711."
        keywords="electric fence installation Punjab, solar electric fencing Punjab, electric fence Jalandhar, electric fencing Ludhiana, electric fence Amritsar, electric fence Pathankot, electric fencing Hoshiarpur, electric fence Phagwara, electric fence Kapurthala, electric fence Nakodar, perimeter electric fencing Punjab, agricultural electric fence Punjab"
        image="https://kirpalsecurities.in/electric-fence-punjab.jpg"
        url={PAGE_URL}
        canonicalUrl={PAGE_URL}
        type="website"
        structuredData={structuredData}
      />

      <BreadcrumbNav items={breadcrumbItems} />

      {/* Section 1 — Hero */}
      <section className="bg-brand-red text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-200 text-xs sm:text-sm font-medium uppercase tracking-widest mb-3 sm:mb-4">
            Kirpal Securities — Professional Electric Fence Installers Punjab
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Electric Fence Installation in Punjab
            <span className="block text-base sm:text-lg md:text-xl font-medium text-red-100 mt-2">
              Solar &amp; Grid-Powered Perimeter Security · Free Site Inspection
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-3 sm:mb-4 text-red-100 speakable">
            Kirpal Securities provides professional electric fence installation services across Punjab. Our expert
            team installs solar electric fencing systems for farms, factories, warehouses and residential properties.
          </p>
          <p className="text-xs sm:text-sm text-red-200 mb-6 sm:mb-8">
            Kirpal Securities is a professional electric fence installation company serving customers across all 24+ districts of Punjab.
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
            <a href="https://wa.me/917009154711" target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <MessageCircle size={18} />
                WhatsApp Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 — What is Electric Fencing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Electric Fencing?</h2>
            <p className="text-lg text-gray-600 mb-4">
              Electric fencing is a modern perimeter security system designed to protect property boundaries
              using controlled electric pulses. When an intruder or animal contacts the fence wire, a brief,
              safe electric pulse acts as a strong deterrent, discouraging further contact without causing
              permanent harm.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              These systems are widely used across Punjab for farms, warehouses, factories and residential
              properties. Electric fence systems can be powered by the electricity grid or by solar panels,
              making them suitable even for remote agricultural land and rural areas where grid power is
              not accessible.
            </p>
            <p className="text-lg text-gray-600">
              Professional electric fence installations include high-voltage energizers, insulated tension
              wires, warning signs and reliable support structures — all working together to deliver
              dependable perimeter security around the clock.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="highlight-effective">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Highly Effective</h3>
              <p className="text-gray-600 text-sm">Controlled electric pulses act as a strong deterrent against intrusions.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="highlight-safe">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safe by Design</h3>
              <p className="text-gray-600 text-sm">Short-duration pulses designed to deter, not to cause permanent injury.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="highlight-reliable">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Protection</h3>
              <p className="text-gray-600 text-sm">Continuous perimeter security day and night with minimal maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Where Electric Fencing is Used */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where Electric Fencing is Used</h2>
            <p className="text-xl text-gray-600">Versatile perimeter security for every property type across Punjab</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid="use-agricultural">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Sun size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Agricultural Land Protection</h3>
                <p className="text-gray-600">
                  Protect farmland, crops and livestock from animal intrusions and unauthorized access. Solar-powered
                  electric fencing is especially popular across Punjab's agricultural regions as it operates
                  independently of grid power.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid="use-industrial">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Factory size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Factory & Industrial Perimeter Security</h3>
                <p className="text-gray-600">
                  Industrial premises require robust perimeter protection. Electric fence systems create a strong
                  security barrier around factories and manufacturing units, deterring unauthorized entry and
                  protecting valuable equipment and assets.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid="use-warehouse">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Warehouse size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Warehouse & Storage Facility Protection</h3>
                <p className="text-gray-600">
                  Warehouses storing goods and materials are high-value targets for theft. A professionally installed
                  electric fence perimeter significantly reduces security risk and provides round-the-clock protection
                  for storage facilities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid="use-residential">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Home size={22} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Residential Property Security</h3>
                <p className="text-gray-600">
                  Homeowners across Punjab are increasingly choosing electric fence systems to enhance residential
                  security. These systems provide an effective deterrent at property boundaries, giving families
                  greater peace of mind.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Electric Fencing Systems</h2>
            <p className="text-xl text-gray-600">We install a full range of electric fence systems across Punjab</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Sun size={24} />, title: "Solar Electric Fencing Systems", desc: "Ideal for remote farms and rural areas without reliable grid power. Solar energizers provide consistent power from sunlight, making them a cost-effective solution for agricultural land across Punjab." },
              { icon: <Zap size={24} />, title: "Agricultural Electric Fencing", desc: "Designed specifically for farm perimeters, these systems protect crops, livestock and agricultural land from animal intrusions and trespassers across Punjab's farming communities." },
              { icon: <Factory size={24} />, title: "Industrial Perimeter Fencing", desc: "High-security electric fence systems for factories, manufacturing units and industrial estates requiring strong perimeter protection and unauthorized entry deterrence." },
              { icon: <Warehouse size={24} />, title: "Warehouse Security Fencing", desc: "Purpose-built for storage facilities and logistics centres, these systems secure large perimeters efficiently and protect valuable goods from theft." },
              { icon: <Home size={24} />, title: "Residential Electric Fence Systems", desc: "Compact and effective residential electric fencing for homes, farmhouses and gated properties across Punjab's cities and rural communities." },
              { icon: <ShieldCheck size={24} />, title: "Custom Perimeter Solutions", desc: "Every property is different. We design and install custom electric fence systems tailored to the exact dimensions, terrain and security requirements of your property." },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6" data-testid={`type-fence-${i}`}>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Materials & Technology We Use</h2>
              <p className="text-lg text-gray-600 mb-8">
                Every electric fence installation by Kirpal Securities uses high-quality, durable materials
                selected for long-term performance in Punjab's climate conditions. We do not compromise on
                materials — your perimeter security depends on it.
              </p>
              <div className="space-y-4">
                {[
                  { label: "MS Powder Coated Poles", desc: "Corrosion-resistant mild steel poles with powder coating for durability in all weather conditions." },
                  { label: "SS 304 Stainless Steel Poles", desc: "Premium grade stainless steel poles offering superior strength and long service life." },
                  { label: "High Voltage Energizers", desc: "Reliable energizers that deliver consistent, controlled pulses across the full fence perimeter." },
                  { label: "Insulated Tension Wires", desc: "High-tensile insulated wires designed for durability and efficient electrical conductivity." },
                  { label: "Fence Warning Systems", desc: "Clearly visible warning signs installed at regular intervals for safety and legal compliance." },
                ].map(({ label, desc }, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm" data-testid={`material-${i}`}>
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
              <h3 className="text-2xl font-bold mb-6">Why Material Quality Matters</h3>
              <p className="text-red-100 mb-4">
                Low-quality materials lead to frequent maintenance issues, reduced effectiveness and higher
                long-term costs. Kirpal Securities uses only proven, industry-grade materials to ensure
                your electric fence system performs reliably for years.
              </p>
              <p className="text-red-100 mb-6">
                All our installations across Punjab use the same high-quality materials regardless of
                property size or location.
              </p>
              <Button
                onClick={handleQuote}
                className="bg-white text-brand-red hover:bg-red-50 font-semibold"
                data-testid="button-quote-materials"
              >
                Request Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Installation Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-600">A professional, structured approach to every electric fence installation</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
            <div className="space-y-8">
              {installationSteps.map(({ step, title, desc }, i) => (
                <div
                  key={i}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  data-testid={`step-${i}`}
                >
                  <div className="lg:w-5/12">
                    <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 border-brand-red ${i % 2 === 1 ? "lg:border-l-0 lg:border-r-4" : ""}`}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                      <p className="text-gray-600">{desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-red text-white font-bold text-lg flex-shrink-0 z-10">
                    {step}
                  </div>
                  <div className="lg:w-5/12 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Service Areas with Internal Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Electric Fence Installation Service Areas in Punjab
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kirpal Securities installs electric fencing systems across the entire Punjab region. Our team
              is experienced in working across diverse terrains — from urban industrial sites to remote
              agricultural land.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {electricFenceCities.map((city) => (
                <a
                  key={city.slug}
                  href={city.url}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-red-50 hover:border-brand-red border border-transparent transition-all group"
                  data-testid={`city-link-${city.slug}`}
                >
                  <MapPin className="text-brand-red flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-brand-red transition-colors">
                      Electric Fence Installation
                    </p>
                    <p className="text-brand-red font-bold">{city.name}</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-400 ml-auto group-hover:text-brand-red transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-center border-t pt-5" data-testid="text-coverage">
              Installations are not limited to these cities. We serve all towns and rural areas across Punjab.{" "}
              <a href="/contact" className="text-brand-red hover:underline font-medium">
                Contact us
              </a>{" "}
              to confirm availability in your location.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 — Why Choose Kirpal Securities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kirpal Securities?</h2>
            <p className="text-xl text-gray-600">Punjab's trusted electric fence installation specialists</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Award size={28} />, stat: "7+", label: "Years Experience", desc: "Over seven years of hands-on electric fence installation experience across Punjab." },
              { icon: <CheckCircle size={28} />, stat: "3300+", label: "Installations Completed", desc: "Thousands of successful installations for farms, industries and homes." },
              { icon: <Users size={28} />, stat: "Pro", label: "Installation Engineers", desc: "Skilled professional technicians trained in perimeter security systems." },
              { icon: <ShieldCheck size={28} />, stat: "Top", label: "Quality Materials", desc: "High-grade materials including SS 304 poles and high-voltage energizers." },
              { icon: <Zap size={28} />, stat: "24/7", label: "Reliable Security", desc: "Dependable perimeter protection that works day and night." },
            ].map(({ icon, stat, label, desc }, i) => (
              <div key={i} className="text-center bg-gray-50 rounded-lg p-6" data-testid={`why-${i}`}>
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

      {/* Popular Searches */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">Popular Searches</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/electric-fence-installation-near-me", label: "Electric Fence Installation Near Me", desc: "Find electric fence installers near your location across Punjab." },
              { href: "/cctv-installation-near-me", label: "CCTV Installation Near Me", desc: "Professional CCTV camera installation near you anywhere in Punjab." },
              { href: "/cctv-camera-service-near-me", label: "CCTV Camera Service Near Me", desc: "CCTV repair, maintenance and AMC near you across Punjab." },
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
              Frequently Asked Questions — Electric Fence Installation Punjab
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about electric fence installation across Punjab
            </p>
          </div>

          <div className="space-y-4" data-testid="faq-section">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 — Final Call to Action */}
      <section className="py-16 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Secure Your Property with Professional Electric Fence Installation
          </h2>
          <p className="text-xl text-red-100 mb-4">
            Our team provides reliable electric fencing solutions across Punjab including Jalandhar, Ludhiana,
            Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar.
          </p>
          <p className="text-red-200 mb-10">
            Contact us today for a free consultation and site inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleQuote}
              className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] px-8 flex items-center gap-2"
              data-testid="cta-quote"
            >
              <FileText size={18} />
              Request Free Quote
            </Button>
            <a href="tel:7009154711" data-testid="cta-call">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-red font-semibold min-h-[48px] px-8 flex items-center gap-2">
                <Phone size={18} />
                Call: 7009154711
              </Button>
            </a>
            <a href="https://wa.me/917009154711" target="_blank" rel="noopener noreferrer" data-testid="cta-whatsapp">
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
