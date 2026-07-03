import { IndustryCCTVTemplate } from "@/components/industry-cctv-template";

const PAGE_URL = "https://kirpalsecurities.in/best-cctv-camera-for-factory";

export default function CCTVForFactoryPage() {
  return (
    <IndustryCCTVTemplate
      industryKey="factory"
      title="Best CCTV Camera for Factory Security"
      subTitle="Industrial-grade CCTV surveillance for production monitoring, perimeter security and worker safety"
      heroDescription="Kirpal Securities provides complete factory CCTV systems across Punjab — production floors, entry gates, loading docks, storage areas and perimeter. Wide-area PTZ and IP camera systems built for 24/7 industrial environments."
      metaTitle="Best CCTV Camera For Factory Security | Kirpal Securities Punjab"
      metaDescription="Best CCTV cameras for factories in Punjab. Industrial-grade surveillance for production monitoring, gate security and worker safety. Free site survey. Call 7009154711."
      keywords="best cctv for factory, factory security camera system, industrial cctv Punjab, factory surveillance cameras, production floor cctv, factory gate security camera, industrial cctv installation Jalandhar"
      pageUrl={PAGE_URL}
      productName="Factory CCTV Security and Monitoring System"
      productDescription="Industrial-grade CCTV surveillance system for factories covering production floors, gates, loading docks and perimeter — designed for 24/7 monitoring and worker safety across Punjab."
      painPoints={[
        { title: "Unauthorized Entry", desc: "Factory premises with multiple access points are vulnerable — cameras and gate monitoring prevent unauthorized personnel from entering restricted zones." },
        { title: "Production Floor Monitoring", desc: "Track workflow, identify bottlenecks and ensure process compliance on production lines with wide-area camera coverage." },
        { title: "Equipment Theft and Damage", desc: "High-value machinery and raw materials are targets — recorded surveillance deters theft and provides evidence when incidents occur." },
        { title: "Worker Safety Compliance", desc: "Monitor PPE usage, hazardous zone compliance and emergency response readiness across all factory areas." },
        { title: "Loading Bay and Dispatch", desc: "Track inbound and outbound inventory at loading docks to prevent pilferage and resolve delivery disputes." },
        { title: "Night and Shift Security", desc: "After-hours and night-shift periods increase vulnerability — IR cameras ensure continuous coverage regardless of lighting." },
      ]}
      placements={[
        { location: "Factory Main Gate and Entry", reason: "Record all vehicle and personnel movement — the first line of perimeter security." },
        { location: "Production Floor", reason: "Wide-angle PTZ cameras provide comprehensive coverage of machinery, workflows and worker activity." },
        { location: "Raw Material and Finished Goods Storage", reason: "Prevent inventory theft and verify stock movements with continuous recording." },
        { location: "Loading and Unloading Docks", reason: "Monitor all dispatch and receiving activity to eliminate pilferage and resolve disputes." },
        { location: "Perimeter Fencing and Boundary", reason: "Bullet cameras along the perimeter detect intrusion attempts before they reach the factory floor." },
        { location: "Control Room and Server Areas", reason: "Protect critical infrastructure, sensitive data and control systems from unauthorized access." },
      ]}
      faqs={[
        { question: "Which CCTV cameras are best for factories?", answer: "For factories we recommend PTZ cameras for wide production floor coverage, bullet cameras for gates and perimeter, dome cameras for internal corridors and IP cameras for high-resolution zone monitoring. Hikvision and Dahua offer industrial-grade cameras rated for harsh environments." },
        { question: "How many cameras does a factory need?", answer: "Factory camera count depends on production floor area, number of entry points and storage zones. A medium-sized factory typically needs 16–32 cameras. We assess your layout during a free site survey and design an optimal coverage plan." },
        { question: "Can factory CCTV cameras handle dust and heat?", answer: "Yes — we install IP66-rated weatherproof cameras for outdoor and harsh indoor environments. Industrial dome cameras with anti-vibration mounts are available for production areas with heavy machinery." },
        { question: "Can I monitor the factory remotely from my phone?", answer: "Yes. Every installation includes live mobile monitoring on Android and iPhone. Factory owners and managers in Jalandhar, Ludhiana and across Punjab routinely monitor multiple factory locations from a single mobile app." },
        { question: "How much does CCTV installation cost for a factory?", answer: "Factory CCTV systems start from ₹35,000 for a 16-camera setup with NVR, surveillance hard disk and installation. Large IP camera systems for bigger factories are priced after a free site survey. We provide written quotes with no hidden charges." },
        { question: "Do you provide AMC for factory CCTV systems?", answer: "Yes. We offer Annual Maintenance Contracts (AMC) for factories covering regular system checks, camera cleaning, firmware updates and priority service response. AMC ensures your system remains reliable year-round." },
      ]}
    />
  );
}
