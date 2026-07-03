import { useState } from "react";
import { Phone, MessageCircle, FileText, ShieldCheck, Zap, Sun, Factory, Warehouse, Home, Users, Award, CheckCircle, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { buildElectricFenceSchemas, pillarPageUrl } from "@/lib/electric-fence-cities";
import { ElectricFenceCityExtras } from "@/components/electric-fence-city-extras";

const faqs = [
  {
    question: "What is electric fencing used for in Nakodar?",
    answer:
      "Electric fencing in Nakodar is widely used to secure agricultural land, warehouses, commercial properties and residential homes. With Nakodar being an agricultural town with significant rural farmland, perimeter security systems are essential for protecting property boundaries from animal intrusions and unauthorized access.",
  },
  {
    question: "Is electric fencing safe for farms?",
    answer:
      "Yes. Professional electric fence systems use short-duration, controlled pulses that deter animals and intruders without causing permanent harm. All farm installations in Nakodar include clearly visible warning signs at regular intervals and comply with safety standards.",
  },
  {
    question: "How much does electric fence installation cost in Nakodar?",
    answer:
      "The cost depends on the size of the property, terrain, type of system (solar or grid-powered) and materials used. We offer free site inspections in Nakodar and provide detailed, transparent quotes with no hidden charges. Contact us to schedule your free consultation.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A standard residential or farm installation in Nakodar typically takes 1–2 days. Larger industrial or warehouse perimeters may require 3–5 days. Our team provides a clear timeline after the site inspection.",
  },
  {
    question: "Do you install solar electric fencing in Nakodar?",
    answer:
      "Yes. We install solar electric fencing systems in Nakodar that operate independently of the electricity grid. Solar systems are ideal for farms and rural properties across the Nakodar area where grid power access may be limited. They operate continuously 24/7.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors" aria-expanded={open}>
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown size={20} className={`text-brand-red flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
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
  { step: "01", title: "Site Inspection in Nakodar", desc: "Our team visits your Nakodar property to assess the perimeter, terrain and security requirements before any work begins." },
  { step: "02", title: "Security Assessment & Fence Design", desc: "We conduct a thorough assessment and prepare a customized fence layout based on your property dimensions and needs." },
  { step: "03", title: "Pole Installation & Wiring Setup", desc: "MS powder coated or SS 304 stainless steel poles are installed and high-tensile insulated wires are strung along the perimeter." },
  { step: "04", title: "Energizer Installation", desc: "High-voltage energizers are connected to deliver consistent, controlled pulses throughout the complete fence system." },
  { step: "05", title: "Final Testing & Activation", desc: "The system is fully tested, safety verified and activated. Warning signs are installed and your team is briefed on safe operation." },
];

const PAGE_URL = "https://kirpalsecurities.in/electric-fence-installation-nakodar";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Electric Fence Installation Punjab", href: pillarPageUrl },
  { label: "Electric Fence Installation Nakodar" },
];

const schemaBreadcrumbs = [
  { name: "Home", item: "https://kirpalsecurities.in/" },
  { name: "Services", item: "https://kirpalsecurities.in/services" },
  { name: "Electric Fence Installation Punjab", item: "https://kirpalsecurities.in/electric-fence-installation-punjab" },
  { name: "Electric Fence Installation Nakodar", item: PAGE_URL },
];

export default function ElectricFenceNakodarPage() {
  const handleQuote = () => {
    const msg = encodeURIComponent("Hello! I would like to request a free site inspection for electric fence installation in Nakodar. Please get back to me. Thanks!");
    window.open(`https://wa.me/917009154711?text=${msg}`, "_blank");
  };

  const structuredData = buildElectricFenceSchemas({
    pageTitle: "Electric Fence Installation in Nakodar | Kirpal Securities",
    pageUrl: PAGE_URL,
    cityName: "Nakodar",
    breadcrumbs: schemaBreadcrumbs,
    faqs,
  });

  return (
    <>
      <SEOHead
        title="Electric Fence Installation in Nakodar | Kirpal Securities - Solar & Agricultural Fencing"
        description="Professional electric fence installation in Nakodar for farms, warehouses and factories. Kirpal Securities provides solar electric fencing solutions across Punjab. Call 7009154711."
        keywords="electric fence installation Nakodar, electric fencing Nakodar, solar electric fence Nakodar, electric fence company Nakodar, agricultural electric fence Nakodar, perimeter fencing Nakodar, farm electric fencing Nakodar, warehouse electric fence Nakodar"
        image="https://kirpalsecurities.in/electric-fence-installation-nakodar.jpg"
        url={PAGE_URL}
        canonicalUrl={PAGE_URL}
        type="website"
        structuredData={structuredData}
      />

      <BreadcrumbNav items={breadcrumbItems} />

      <section className="bg-brand-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-200 text-sm font-medium uppercase tracking-widest mb-4">Kirpal Securities — Nakodar's Trusted Electric Fence Installers</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Electric Fence Installation in Nakodar</h1>
          <p className="text-xl max-w-3xl mx-auto mb-4 text-red-100">Kirpal Securities provides professional electric fence installation services in Nakodar for farms, warehouses, factories and residential properties. We install solar electric fencing systems designed to provide reliable perimeter security.</p>
          <p className="text-sm text-red-200 mb-10">Kirpal Securities is a professional electric fence installation company providing services in Nakodar and across Punjab.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7009154711" data-testid="button-call-now"><Button className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] px-8 flex items-center gap-2"><Phone size={18} />Call Now</Button></a>
            <Button onClick={handleQuote} className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-red font-semibold min-h-[48px] px-8 flex items-center gap-2" data-testid="button-site-inspection"><FileText size={18} />Get Free Site Inspection</Button>
            <a href="https://wa.me/917009154711" target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp"><Button className="bg-green-500 hover:bg-green-600 text-white font-semibold min-h-[48px] px-8 flex items-center gap-2"><MessageCircle size={18} />WhatsApp Consultation</Button></a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Electric Fencing Services in Nakodar</h2>
            <p className="text-lg text-gray-600 mb-4">Electric fencing is widely used in Nakodar to secure agricultural land, warehouses, commercial properties and residential homes. Nakodar's agricultural character and surrounding rural farmland make perimeter security systems particularly important for protecting property boundaries from animal intrusions and unauthorized access.</p>
            <p className="text-lg text-gray-600 mb-4">Kirpal Securities installs professional electric fencing systems in Nakodar designed for durability and reliable perimeter protection. Our systems operate using controlled electrical pulses that deter intruders and animals while remaining safe for farm workers and residents.</p>
            <p className="text-lg text-gray-600">We serve customers across Nakodar and surrounding areas including Jalandhar Road, Phagwara Road, Shahkot, Nurmahal and surrounding rural areas.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Zap size={24} />, title: "Effective Deterrent", desc: "Controlled pulses deter unauthorized entry across Nakodar farms, warehouses and residential properties." },
              { icon: <ShieldCheck size={24} />, title: "Safe & Compliant", desc: "All Nakodar installations meet safety standards with proper warning signage throughout." },
              { icon: <CheckCircle size={24} />, title: "Low Maintenance", desc: "Durable systems built for reliable performance in Nakodar's climate with minimal upkeep." },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 text-center" data-testid={`highlight-nakodar-${i + 1}`}>
                <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">{icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Install Electric Fencing in Nakodar</h2>
            <p className="text-xl text-gray-600">Perimeter security for every property type across Nakodar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Sun size={22} />, title: "Electric Fencing for Farms in Nakodar", desc: "Nakodar's extensive agricultural land surrounding the town requires reliable perimeter protection from animal intrusions. Solar electric fencing systems provide cost-effective, grid-independent security for farm owners in and around Nakodar.", testid: "use-farms-nakodar" },
              { icon: <Warehouse size={22} />, title: "Electric Fencing for Warehouses & Storage Facilities", desc: "Storage facilities and warehouses in Nakodar require strong perimeter security for goods and materials. A professionally installed electric fence provides round-the-clock protection against theft and unauthorized entry.", testid: "use-warehouse-nakodar" },
              { icon: <Factory size={22} />, title: "Electric Fencing for Factories & Industrial Sites", desc: "Industrial and manufacturing premises in Nakodar need robust perimeter protection. Electric fence systems create an effective security barrier that deters unauthorized entry and protects machinery and assets.", testid: "use-industrial-nakodar" },
              { icon: <Home size={22} />, title: "Electric Fencing for Residential Properties", desc: "Homeowners in Nakodar are choosing electric fence systems to enhance home security at property boundaries. These systems provide an effective deterrent while requiring minimal ongoing maintenance.", testid: "use-residential-nakodar" },
            ].map(({ icon, title, desc, testid }) => (
              <div key={testid} className="bg-white rounded-lg shadow p-6 flex gap-4" data-testid={testid}>
                <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">{icon}</div>
                <div><h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3><p className="text-gray-600">{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Electric Fencing We Install in Nakodar</h2>
            <p className="text-xl text-gray-600">Tailored fencing solutions for every property and purpose</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Sun size={24} />, title: "Solar Electric Fencing", desc: "Energy-efficient solar systems for Nakodar farms and rural properties. Operate independently 24/7 without grid power." },
              { icon: <Zap size={24} />, title: "Agricultural Electric Fencing", desc: "Purpose-built for farm perimeters in Nakodar. Protects crops, fields and livestock from intrusions and unauthorized access." },
              { icon: <Factory size={24} />, title: "Industrial Perimeter Fencing", desc: "High-security systems for Nakodar's factories and industrial premises. Secures large perimeters reliably." },
              { icon: <Warehouse size={24} />, title: "Warehouse Security Fencing", desc: "Designed for storage facilities in Nakodar. Efficiently secures large perimeters and protects valuable goods." },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6" data-testid={`type-nakodar-${i}`}>
                <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">{icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Materials Used in Our Nakodar Installations</h2>
              <p className="text-lg text-gray-600 mb-8">Every installation in Nakodar uses high-quality, durable components selected for long-term performance.</p>
              <div className="space-y-4">
                {[
                  { label: "MS Powder Coated Poles", desc: "Corrosion-resistant mild steel poles with powder coating for all weather durability." },
                  { label: "SS 304 Stainless Steel Poles", desc: "Premium stainless steel poles offering superior strength and long service life." },
                  { label: "High Voltage Energizers", desc: "Reliable energizers delivering consistent, controlled pulses across the full perimeter." },
                  { label: "Insulated Tension Wires", desc: "High-tensile insulated wires ensuring efficient conductivity and long-term durability." },
                  { label: "Fence Warning Signage", desc: "Clearly visible warning signs at regular intervals for safety and legal compliance." },
                ].map(({ label, desc }, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm" data-testid={`material-nakodar-${i}`}>
                    <CheckCircle className="text-brand-red flex-shrink-0 mt-1" size={20} />
                    <div><p className="font-semibold text-gray-900">{label}</p><p className="text-gray-600 text-sm">{desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-red text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Get a Free Quote in Nakodar</h3>
              <p className="text-red-100 mb-4">Contact our team for a free site inspection and customized quote. Transparent pricing with no hidden charges.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3"><Phone size={18} className="flex-shrink-0" /><div><p className="text-sm text-red-200">Nikhil</p><a href="tel:7009154711" className="font-semibold hover:underline" data-testid="phone-nikhil-sidebar">7009154711</a></div></div>
                <div className="flex items-center gap-3"><Phone size={18} className="flex-shrink-0" /><div><p className="text-sm text-red-200">Naveen</p><a href="tel:9463687535" className="font-semibold hover:underline" data-testid="phone-naveen-sidebar">9463687535</a></div></div>
              </div>
              <a href="https://wa.me/917009154711" target="_blank" rel="noopener noreferrer"><Button className="bg-white text-brand-red hover:bg-red-50 font-semibold w-full" data-testid="button-whatsapp-sidebar">WhatsApp for Free Quote</Button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process in Nakodar</h2>
            <p className="text-xl text-gray-600">A professional, step-by-step approach from inspection to activation</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {installationSteps.map(({ step, title, desc }, i) => (
              <div key={i} className="text-center" data-testid={`step-nakodar-${i}`}>
                <div className="w-14 h-14 rounded-full bg-brand-red text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">{step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kirpal Securities in Nakodar?</h2>
            <p className="text-xl text-gray-600">Trusted electric fence specialists serving Nakodar and Punjab</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Award size={28} />, stat: "7+", label: "Years Experience", desc: "Over seven years installing electric fence systems across Punjab including Nakodar." },
              { icon: <CheckCircle size={28} />, stat: "3300+", label: "Installations", desc: "Thousands of successful fencing installations for farms, industries and homes." },
              { icon: <Users size={28} />, stat: "Pro", label: "Engineers", desc: "Skilled professional technicians experienced in perimeter security systems." },
              { icon: <ShieldCheck size={28} />, stat: "Top", label: "Materials", desc: "SS 304 poles, MS powder coated supports and high-voltage energizers throughout." },
              { icon: <Zap size={28} />, stat: "24/7", label: "Security", desc: "Reliable perimeter protection operating continuously day and night." },
            ].map(({ icon, stat, label, desc }, i) => (
              <div key={i} className="text-center bg-white rounded-lg shadow p-6" data-testid={`why-nakodar-${i}`}>
                <div className="bg-brand-red text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">{icon}</div>
                <div className="text-3xl font-bold text-brand-red mb-1">{stat}</div>
                <div className="font-semibold text-gray-900 mb-2">{label}</div>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area in Nakodar</h2>
                <p className="text-lg text-gray-600 mb-4">Kirpal Securities provides electric fence installation in Nakodar and surrounding areas including Jalandhar Road, Phagwara Road, Shahkot, Nurmahal and nearby rural areas.</p>
                <p className="text-lg text-gray-600 mb-4">Our team also provides services across Punjab including Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara and Kapurthala.</p>
                <p className="text-lg text-gray-600">Kirpal Securities provides electric fence installation in Nakodar and across Punjab.{" "}
                  <a href={pillarPageUrl} className="text-brand-red hover:underline font-semibold" data-testid="link-pillar-page">Learn more about our electric fencing services across Punjab here.</a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas Covered in Nakodar</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Jalandhar Road", "Phagwara Road", "Shahkot", "Nurmahal", "Lohian Khas", "Mehatpur", "Phillaur", "Surrounding Areas"].map((area) => (
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

      <ElectricFenceCityExtras cityName="Nakodar" citySlug="nakodar" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Electric Fence Installation Nakodar</h2>
            <p className="text-xl text-gray-600">Common questions from our Nakodar customers</p>
          </div>
          <div className="space-y-4" data-testid="faq-nakodar">
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Secure Your Property with Professional Electric Fence Installation in Nakodar</h2>
          <p className="text-xl text-red-100 mb-4">Contact Kirpal Securities today for a free consultation and site inspection in Nakodar.</p>
          <p className="text-red-200 mb-10">Serving farms, warehouses, factories and residential properties across Nakodar and all of Punjab.</p>
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
