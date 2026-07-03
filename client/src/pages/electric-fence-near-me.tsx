import { NearMeTemplate } from "@/components/near-me-template";

const PAGE_URL = "https://kirpalsecurities.in/electric-fence-installation-near-me";

const faqs = [
  {
    question: "How much does electric fence installation cost near me?",
    answer: "The cost depends on your property size, perimeter length, terrain, and whether you choose a solar or grid-powered system. Kirpal Securities provides a free site inspection and transparent written quote with no hidden charges. Contact us to schedule a free visit.",
  },
  {
    question: "How long does electric fence installation take?",
    answer: "A standard residential or small farm installation takes 1–2 days. Larger industrial or warehouse perimeters may require 3–5 days. We provide a clear timeline during the free site inspection.",
  },
  {
    question: "Do you provide electric fence installation services across Punjab?",
    answer: "Yes — Kirpal Securities covers all of Punjab including Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala, Nakodar, Patiala, Mohali, Bathinda, Gurdaspur, Moga, Sangrur, Rupnagar, Firozpur, Tarn Taran and Nawanshahr.",
  },
  {
    question: "Is electric fencing safe for homes and farms?",
    answer: "Yes. Professional electric fence systems use controlled short-duration pulses designed to deter rather than cause serious injury. Our installations include proper warning signs and comply with safety standards. The system is safe for humans and animals while remaining highly effective as a deterrent.",
  },
  {
    question: "Do you provide maintenance for electric fences?",
    answer: "Yes. We offer post-installation support and maintenance services. If your fence system has any issues, you can reach us directly on call or WhatsApp. We also offer Annual Maintenance Contracts (AMC) for larger properties.",
  },
  {
    question: "What types of electric fence systems do you install?",
    answer: "We install solar electric fencing, grid-powered agricultural fencing, industrial perimeter fencing, warehouse security fencing, and residential electric fence systems. Each system is customised using high-quality materials matched to your property requirements.",
  },
];

export default function ElectricFenceNearMePage() {
  return (
    <NearMeTemplate
      serviceType="electric-fence"
      title="Electric Fence Installation Near Me"
      subTitle="Looking for professional electric fence installation near you?"
      heroDescription="Kirpal Securities provides electric fence installation services across all of Punjab — for farms, warehouses, factories, residential properties and kothis. Solar electric fencing and grid-powered systems with free site inspection."
      metaTitle="Electric Fence Installation Near Me | Kirpal Securities Punjab"
      metaDescription="Looking for electric fence installation near you? Kirpal Securities provides professional electric fencing services across Punjab — farms, warehouses, factories and homes. Free site survey. Call 7009154711."
      keywords="electric fence installation near me, electric fencing near me, electric fence installer near me, fence contractor near me, solar electric fencing near me, electric fence Punjab, perimeter fencing near me"
      pageUrl={PAGE_URL}
      searchTerms={[
        "Electric fencing near me",
        "Electric fence installer near me",
        "Fence contractor near me",
        "Solar electric fencing near me",
        "Professional fence installation near me",
        "Agricultural electric fence near me",
        "Industrial perimeter fencing near me",
        "Residential electric fence near me",
      ]}
      faqs={faqs}
    />
  );
}
