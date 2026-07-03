import { NearMeTemplate } from "@/components/near-me-template";

const PAGE_URL = "https://kirpalsecurities.in/cctv-camera-service-near-me";

const faqs = [
  {
    question: "How much does CCTV repair and service cost near me?",
    answer: "CCTV service costs depend on the issue — camera replacement, DVR repair, cable faults or software configuration. Kirpal Securities offers a free diagnostic visit and transparent service charges. Contact us to describe the issue and we'll give you a clear estimate.",
  },
  {
    question: "How quickly can you send a technician for CCTV service?",
    answer: "We provide fast response for service calls in Jalandhar and nearby areas. For other Punjab cities we typically schedule a visit within 1–2 working days. WhatsApp us with details and photos of the issue for faster diagnosis.",
  },
  {
    question: "Do you service all CCTV brands?",
    answer: "Yes — we service Hikvision, CP Plus, Dahua and most other major CCTV brands. Whether it's a camera fault, DVR issue, hard disk failure, mobile connectivity problem or cable damage, our team can diagnose and repair it.",
  },
  {
    question: "Can you fix CCTV cameras that are not showing on mobile?",
    answer: "Yes. Mobile connectivity issues are among the most common CCTV service requests. We diagnose router settings, DDNS configuration, app setup and camera firmware to restore your live mobile view quickly.",
  },
  {
    question: "Do you provide AMC for CCTV systems?",
    answer: "Yes. We offer Annual Maintenance Contracts (AMC) for homes, shops, offices, factories and hotels. AMC covers routine checkups, cleaning, firmware updates and priority service response. Contact us for AMC pricing.",
  },
  {
    question: "Do you service CCTV systems you didn't install?",
    answer: "Yes. We service CCTV systems regardless of who installed them. Our technicians are trained across all major brands and can diagnose and repair existing systems as well as upgrade or expand them.",
  },
];

export default function CCTVCameraServiceNearMePage() {
  return (
    <NearMeTemplate
      serviceType="cctv-service"
      title="CCTV Camera Service Near Me"
      subTitle="Looking for professional CCTV repair and maintenance near you?"
      heroDescription="Kirpal Securities provides CCTV camera service, repair and maintenance across all of Punjab. Camera faults, DVR issues, hard disk replacement, mobile connectivity and AMC — all brands covered with fast response."
      metaTitle="CCTV Camera Service Near Me | Kirpal Securities Punjab"
      metaDescription="Looking for CCTV camera service near you? Kirpal Securities provides CCTV repair, maintenance and AMC across Punjab. All brands — Hikvision, CP Plus, Dahua. Fast response. Call 7009154711."
      keywords="cctv camera service near me, cctv repair near me, cctv maintenance near me, security camera repair near me, cctv service Punjab, cctv amc Punjab, cctv technician near me"
      pageUrl={PAGE_URL}
      searchTerms={[
        "CCTV camera service near me",
        "CCTV repair near me",
        "Security camera repair near me",
        "CCTV maintenance near me",
        "CCTV not working repair near me",
        "DVR repair near me",
        "CCTV AMC near me",
        "CCTV technician near me",
      ]}
      faqs={faqs}
    />
  );
}
