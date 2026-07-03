import { useState } from "react";
import { Phone, MessageCircle, FileText, ShieldCheck, Zap, Sun, Factory, Warehouse, Home, Users, Award, CheckCircle, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { buildElectricFenceSchemas, pillarPageUrl } from "@/lib/electric-fence-cities";
import { ElectricFenceCityExtras } from "@/components/electric-fence-city-extras";

const faqs = [
  {
    question: "What is electric fencing used for in Phagwara?",
    answer:
      "Electric fencing in Phagwara is widely used to secure industrial factories, warehouses, commercial premises and agricultural land. As an important industrial and manufacturing hub in Punjab, Phagwara businesses rely on electric fence systems to prevent unauthorized entry and protect valuable assets and machinery.",
  },
  {
    question: "Is electric fencing safe for factories?",
    answer:
      "Yes. Professional electric fence systems use controlled, short-duration pulses that act as a deterrent without causing permanent harm. All factory and industrial installations in Phagwara include clearly visible warning signs at regular intervals and comply with safety standards.",
  },
  {
    question: "How much does electric fence installation cost in Phagwara?",
    answer:
      "The cost depends on the size of the perimeter, property type, terrain and system selected. We offer free site inspections in Phagwara and provide detailed, transparent quotes with no hidden charges. Contact us to schedule your free consultation.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A standard residential or small farm installation in Phagwara typically takes 1–2 days. Larger industrial or warehouse perimeters may require 3–5 days. Our team provides a clear timeline after the site inspection.",
  },
  {
    question: "Do you install solar electric fencing in Phagwara?",
    answer:
      "Yes. We install solar electric fencing systems in Phagwara that operate independently of the electricity grid. These are ideal for agricultural properties and locations where grid power access is limited. Solar systems provide consistent perimeter protection 24/7.",
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
  { step: "01", title: "Site Inspection in Phagwara", desc: "Our team visits your Phagwara property to assess the perimeter, terrain and security requirements before work begins." },
  { step: "02", title: "Security Assessment & Fence Design", desc: "We conduct a thorough assessment and prepare a customized fence layout based on your property dimensions and needs." },
  { step: "03", title: "Pole Installation & Wiring Setup", desc: "MS powder coated or SS 304 stainless steel poles are installed and high-tensile insulated wires are strung along the perimeter." },
  { step: "04", title: "Energizer Installation", desc: "High-voltage energizers are connected to deliver consistent, controlled pulses throughout the complete fence system." },
  { step: "05", title: "Final Testing & Activation", desc: "The system is fully tested, safety verified and activated. Warning signs are installed and your team is briefed on safe operation." },
];

const PAGE_URL = "https://kirpalsecurities.in/electric-fence-installation-phagwara";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Electric Fence Installation Punjab", href: pillarPageUrl },
  { label: "Electric Fence Installation Phagwara" },
];

const schemaBreadcrumbs = [
  { name: "Home", item: "https://kirpalsecurities.in/" },
  { name: "Services", item: "https://kirpalsecurities.in/services" },
  { name: "Electric Fence Installation Punjab", item: "https://kirpalsecurities.in/electric-fence-installation-punjab" },
  { name: "Electric Fence Installation Phagwara", item: PAGE_URL },
];

export default function ElectricFencePhagwaraPage() {
  const handleQuote = () => {
    const msg = encodeURIComponent("Hello! I would like to request a free site inspection for electric fence installation in Phagwara. Please get back to me. Thanks!");
    window.open(`https://wa.me/917009154711?text=${msg}`, "_blank");
  };

  const structuredData = buildElectricFenceSchemas({
    pageTitle: "Electric Fence Installation in Phagwara | Kirpal Securities",
    pageUrl: PAGE_URL,
    cityName: "Phagwara",
    breadcrumbs: schemaBreadcrumbs,
    faqs,
  });

  return (
    <>
      <SEOHead
        title="Electric Fence Installation in Phagwara | Kirpal Securities - Industrial & Solar Fencing"
        description="Professional electric fence installation in Phagwara for factories, warehouses and farms. Kirpal Securities provides solar electric fencing solutions across Punjab. Call 7009154711."
        keywords="electric fence installation Phagwara, electric fencing Phagwara, solar electric fence Phagwara, electric fence company Phagwara, industrial electric fence Phagwara, perimeter fencing Phagwara, farm electric fencing Phagwara, warehouse electric fence Phagwara"
        image="https://kirpalsecurities.in/electric-fence-installation-phagwara.jpg"
        url={PAGE_URL}
        canonicalUrl={PAGE_URL}
        type="website"
        structuredData={structuredData}
      />

      <BreadcrumbNav items={breadcrumbItems} />

      <section className="bg-brand-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-200 text-sm font-medium uppercase tracking-widest mb-4">Kirpal Securities — Phagwara's Trusted Electric Fence Installers</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Electric Fence Installation in Phagwara</h1>
          <p className="text-xl max-w-3xl mx-auto mb-4 text-red-100">Kirpal Securities provides professional electric fence installation services in Phagwara for factories, warehouses, farms and residential properties. We install solar electric fencing systems designed to provide strong perimeter security.</p>
          <p className="text-sm text-red-200 mb-10">Kirpal Securities is a professional electric fence installation company providing services in Phagwara and across Punjab.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Electric Fencing Services in Phagwara</h2>
            <p className="text-lg text-gray-600 mb-4">Electric fencing is widely used in Phagwara to secure industrial factories, warehouses, commercial premises and agricultural land. As a growing industrial and manufacturing hub in Punjab, Phagwara businesses require reliable perimeter protection to safeguard assets, machinery and stored goods from unauthorized access.</p>
            <p className="text-lg text-gray-600 mb-4">Kirpal Securities installs professional electric fencing systems in Phagwara built for durability and reliable perimeter security. Our systems operate using controlled electrical pulses that deter intruders and animals while remaining safe for workers and residents.</p>
            <p className="text-lg text-gray-600">We serve customers across Phagwara and surrounding areas including GT Road, Nakodar Road, Kapurthala Road, Banga and surrounding industrial zones.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Zap size={24} />, title: "Industrial-Grade Security", desc: "Robust perimeter protection designed for Phagwara's factories and commercial properties." },
              { icon: <ShieldCheck size={24} />, title: "Safe & Compliant", desc: "All Phagwara installations meet safety standards with proper warning signage throughout." },
              { icon: <CheckCircle size={24} />, title: "Durable Performance", desc: "Built for long-term reliability in Phagwara's climate with minimal maintenance requirements." },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 text-center" data-testid={`highlight-phagwara-${i + 1}`}>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Install Electric Fencing in Phagwara</h2>
            <p className="text-xl text-gray-600">Perimeter security for every property type across Phagwara</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Factory size={22} />, title: "Electric Fencing for Factories in Phagwara", desc: "Phagwara's industrial zones house factories and manufacturing units that require strong perimeter protection. Electric fence systems create an effective security barrier around factory perimeters, protecting machinery and assets from unauthorized access.", testid: "use-factories-phagwara" },
              { icon: <Warehouse size={22} />, title: "Electric Fencing for Warehouses & Storage", desc: "Storage facilities and warehouses in Phagwara face significant security challenges. A professionally installed electric fence provides round-the-clock perimeter protection for goods, equipment and logistics operations.", testid: "use-warehouse-phagwara" },
              { icon: <Sun size={22} />, title: "Electric Fencing for Agricultural Land", desc: "Agricultural land on the outskirts of Phagwara requires protection from animal intrusions. Solar electric fencing systems provide cost-effective, grid-independent security for farm owners in and around Phagwara.", testid: "use-agricultural-phagwara" },
              { icon: <Home size={22} />, title: "Electric Fencing for Residential Properties", desc: "Homeowners in Phagwara's residential areas are choosing electric fence systems to enhance home security. These systems provide an effective deterrent at property boundaries while requiring minimal maintenance.", testid: "use-residential-phagwara" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Electric Fencing We Install in Phagwara</h2>
            <p className="text-xl text-gray-600">Tailored fencing solutions for every property and purpose</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Sun size={24} />, title: "Solar Electric Fencing", desc: "Energy-efficient solar systems for Phagwara properties seeking grid-independent security. Operate continuously 24/7." },
              { icon: <Zap size={24} />, title: "Agricultural Electric Fencing", desc: "Purpose-built for farm perimeters around Phagwara to protect crops and land from intrusions." },
              { icon: <Factory size={24} />, title: "Industrial Perimeter Fencing", desc: "High-security systems for Phagwara's factories and industrial estates. Secures large perimeters reliably." },
              { icon: <Warehouse size={24} />, title: "Warehouse Security Fencing", desc: "Designed for storage facilities in Phagwara. Efficiently secures large perimeters and protects valuable goods." },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6" data-testid={`type-phagwara-${i}`}>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Materials Used in Our Phagwara Installations</h2>
              <p className="text-lg text-gray-600 mb-8">Every installation in Phagwara uses high-quality, durable components for long-term performance across all property types.</p>
              <div className="space-y-4">
                {[
                  { label: "MS Powder Coated Poles", desc: "Corrosion-resistant mild steel poles with powder coating for all weather durability." },
                  { label: "SS 304 Stainless Steel Poles", desc: "Premium stainless steel poles offering superior strength and long service life." },
                  { label: "High Voltage Energizers", desc: "Reliable energizers delivering consistent, controlled pulses across the full perimeter." },
                  { label: "Insulated Tension Wires", desc: "High-tensile insulated wires ensuring efficient conductivity and long-term durability." },
                  { label: "Fence Warning Signage", desc: "Clearly visible warning signs at regular intervals for safety and legal compliance." },
                ].map(({ label, desc }, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm" data-testid={`material-phagwara-${i}`}>
                    <CheckCircle className="text-brand-red flex-shrink-0 mt-1" size={20} />
                    <div><p className="font-semibold text-gray-900">{label}</p><p className="text-gray-600 text-sm">{desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-red text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Get a Free Quote in Phagwara</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process in Phagwara</h2>
            <p className="text-xl text-gray-600">A professional, step-by-step approach from inspection to activation</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {installationSteps.map(({ step, title, desc }, i) => (
              <div key={i} className="text-center" data-testid={`step-phagwara-${i}`}>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kirpal Securities in Phagwara?</h2>
            <p className="text-xl text-gray-600">Trusted electric fence installation specialists serving Phagwara and Punjab</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Award size={28} />, stat: "7+", label: "Years Experience", desc: "Over seven years installing electric fence systems across Punjab including Phagwara." },
              { icon: <CheckCircle size={28} />, stat: "3300+", label: "Installations", desc: "Thousands of successful fencing installations for industries, farms and homes." },
              { icon: <Users size={28} />, stat: "Pro", label: "Engineers", desc: "Skilled professional technicians experienced in perimeter security systems." },
              { icon: <ShieldCheck size={28} />, stat: "Top", label: "Materials", desc: "SS 304 poles, MS powder coated supports and high-voltage energizers throughout." },
              { icon: <Zap size={28} />, stat: "24/7", label: "Security", desc: "Reliable perimeter protection operating continuously day and night." },
            ].map(({ icon, stat, label, desc }, i) => (
              <div key={i} className="text-center bg-white rounded-lg shadow p-6" data-testid={`why-phagwara-${i}`}>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area in Phagwara</h2>
                <p className="text-lg text-gray-600 mb-4">Kirpal Securities provides electric fence installation in Phagwara and surrounding areas including GT Road, Nakodar Road, Kapurthala Road, Banga and nearby industrial zones.</p>
                <p className="text-lg text-gray-600 mb-4">Our team also provides services across Punjab including Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Kapurthala and Nakodar.</p>
                <p className="text-lg text-gray-600">Kirpal Securities provides electric fence installation in Phagwara and across Punjab.{" "}
                  <a href={pillarPageUrl} className="text-brand-red hover:underline font-semibold" data-testid="link-pillar-page">Learn more about our electric fencing services across Punjab here.</a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas Covered in Phagwara</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["GT Road", "Nakodar Road", "Kapurthala Road", "Banga", "Goraya", "Rahon Road", "Industrial Area", "Surrounding Areas"].map((area) => (
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

      <ElectricFenceCityExtras cityName="Phagwara" citySlug="phagwara" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions — Electric Fence Installation Phagwara</h2>
            <p className="text-xl text-gray-600">Common questions from our Phagwara customers</p>
          </div>
          <div className="space-y-4" data-testid="faq-phagwara">
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Secure Your Property with Professional Electric Fence Installation in Phagwara</h2>
          <p className="text-xl text-red-100 mb-4">Contact Kirpal Securities today for a free consultation and site inspection in Phagwara.</p>
          <p className="text-red-200 mb-10">Serving factories, warehouses, agricultural land and residential properties across Phagwara and all of Punjab.</p>
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
