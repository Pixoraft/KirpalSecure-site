import { NearMeTemplate } from "@/components/near-me-template";

const PAGE_URL = "https://kirpalsecurities.in/cctv-installation-near-me";

const faqs = [
  {
    question: "How much does CCTV installation cost near me?",
    answer: "Our CCTV packages start from ₹16,000 for a 4-camera HD setup with DVR, hard disk and full installation. 8-camera setups start at ₹21,500. Final pricing depends on camera type, brand, cabling distance and accessories. We offer a free site survey and written quote with no hidden charges.",
  },
  {
    question: "How long does CCTV installation take?",
    answer: "A 4-camera home or shop installation typically takes 4–6 hours. An 8-camera setup takes 1 day. Larger 16–32 camera factory or IP installations take 2–3 days including cabling, NVR setup, mobile configuration and customer briefing.",
  },
  {
    question: "Do you provide CCTV installation across all of Punjab?",
    answer: "Yes — Kirpal Securities covers all of Punjab including Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda, Phagwara, Kapurthala, Hoshiarpur, Pathankot, Gurdaspur, Moga, Nakodar, Sangrur, Rupnagar, Firozpur, Tarn Taran and Nawanshahr.",
  },
  {
    question: "Can I view CCTV cameras on my mobile phone?",
    answer: "Yes — every installation includes live mobile viewing on Android and iPhone. You get live view, recording playback and motion alerts from anywhere in the world. Many of our NRI customers monitor their Punjab properties from abroad.",
  },
  {
    question: "Which CCTV brands do you install?",
    answer: "We install Hikvision, CP Plus and Dahua — the three most reliable CCTV brands in India. All hardware comes through authorized channels with full manufacturer warranty and surveillance-grade hard disks built for 24/7 recording.",
  },
  {
    question: "What warranty do you provide on CCTV installations?",
    answer: "All cameras and recording units come with a 2-year manufacturer warranty. We also provide installation workmanship support and a quick service response. Optional AMC (Annual Maintenance Contracts) are available for hotels, factories and larger properties.",
  },
];

export default function CCTVInstallationNearMePage() {
  return (
    <NearMeTemplate
      serviceType="cctv"
      title="CCTV Camera Installation Near Me"
      subTitle="Looking for professional CCTV installation near you?"
      heroDescription="Kirpal Securities provides CCTV camera installation across all of Punjab — for homes, shops, offices, factories, warehouses and kothis. Hikvision, CP Plus and Dahua systems with free site survey and 2-year warranty."
      metaTitle="CCTV Camera Installation Near Me | Kirpal Securities Punjab"
      metaDescription="Looking for CCTV installation near you? Kirpal Securities provides professional CCTV camera installation across Punjab. Hikvision, CP Plus, Dahua. Free site survey. From ₹16,000. Call 7009154711."
      keywords="cctv installation near me, cctv camera installation near me, security camera installation near me, cctv installer near me, camera installation near me, cctv Punjab, security camera Punjab"
      pageUrl={PAGE_URL}
      searchTerms={[
        "CCTV installation near me",
        "Security camera installation near me",
        "CCTV camera installer near me",
        "Home security camera installation near me",
        "CCTV installation for shop near me",
        "Factory CCTV installation near me",
        "Hikvision installation near me",
        "CP Plus installation near me",
      ]}
      faqs={faqs}
    />
  );
}
