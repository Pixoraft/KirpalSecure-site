import { IndustryCCTVTemplate } from "@/components/industry-cctv-template";

const PAGE_URL = "https://kirpalsecurities.in/best-cctv-camera-for-office";

export default function CCTVForOfficePage() {
  return (
    <IndustryCCTVTemplate
      industryKey="office"
      title="Best CCTV Camera for Office Security"
      subTitle="Professional office surveillance for access control, employee safety and asset protection"
      heroDescription="Kirpal Securities provides complete office CCTV camera systems across Punjab — reception, entrances, corridors, server rooms, parking and common areas. Discreet dome cameras with HD quality and full mobile monitoring."
      metaTitle="Best CCTV Camera For Office Security | Kirpal Securities Punjab"
      metaDescription="Best CCTV cameras for offices in Punjab. Professional office surveillance for access control, employee safety and data protection. Free site survey. Call 7009154711."
      keywords="best cctv for office, office security camera system, office surveillance cameras Punjab, office cctv installation, workplace security cameras, office entry camera, cctv for corporate office Punjab"
      pageUrl={PAGE_URL}
      productName="Office CCTV Security and Surveillance System"
      productDescription="Professional CCTV surveillance system for offices covering reception, corridors, server rooms and parking — designed for access control, data protection and employee safety across Punjab."
      painPoints={[
        { title: "Unauthorized Access", desc: "Offices with multiple floors and departments need controlled entry — cameras at access points track and verify everyone entering restricted areas." },
        { title: "Data and Asset Theft", desc: "Laptops, documents and digital assets are high-value targets — server room and workstation camera coverage creates accountability." },
        { title: "Visitor Management", desc: "Track visitor movements within the office and ensure they remain within permitted areas throughout their visit." },
        { title: "Employee Safety", desc: "Cameras in parking areas, stairwells and basement levels protect staff during early morning and late evening hours." },
        { title: "After-Hours Security", desc: "Office break-ins typically occur after working hours — cameras with motion alerts notify management of any activity instantly." },
        { title: "Dispute Resolution", desc: "Workplace incidents, harassment claims and theft accusations can be resolved quickly with objective recorded footage." },
      ]}
      placements={[
        { location: "Reception and Main Entrance", reason: "First point of contact — record all visitors, monitor access control and verify identities." },
        { location: "Server Room and IT Infrastructure", reason: "Protect critical data, servers and network hardware from unauthorized access." },
        { location: "Corridors and Common Areas", reason: "Monitor movement between departments, meeting rooms and shared facilities." },
        { location: "Parking Lot and Basement", reason: "Protect staff vehicles and prevent break-ins in parking areas during evenings." },
        { location: "Finance and Accounts Department", reason: "High-value documents and cash handling areas require dedicated camera coverage." },
        { location: "Stairwells and Emergency Exits", reason: "Monitor secondary access routes that are common entry points for unauthorized individuals." },
      ]}
      faqs={[
        { question: "Which CCTV cameras are best for offices?", answer: "For offices we recommend discreet dome cameras for indoor monitoring (minimal visual intrusion), bullet cameras for parking and entrances, and high-resolution IP cameras for server rooms and finance departments. Hikvision and CP Plus offer office-specific compact dome cameras with excellent HD quality." },
        { question: "Are there privacy rules for CCTV in offices?", answer: "Cameras should not be placed in restrooms, changing areas or private offices without consent. Common areas, corridors, entrances and parking are appropriate locations. We advise on placement and required signage during the free site survey to ensure compliance." },
        { question: "Can I restrict which cameras different employees can see?", answer: "Yes. Our NVR and IP camera systems support user-level access control — managers can see all cameras while reception staff may only see lobby cameras. We configure this during installation." },
        { question: "Can office CCTV be viewed remotely by management?", answer: "Yes. Management can view live cameras and playback recordings from any location via the mobile app or desktop browser. Ideal for business owners with multiple office locations across Punjab." },
        { question: "How much does CCTV installation cost for an office?", answer: "Office CCTV systems start from ₹16,000 for a 4-camera reception and entrance setup. Larger offices with multiple floors typically require 8–16 cameras priced from ₹25,000–₹60,000 depending on camera type and cabling. Free site survey before any commitment." },
        { question: "Do you provide CCTV for corporate offices with multiple floors?", answer: "Yes. We design and install multi-floor CCTV systems using centralised NVR recording with cameras across all floors. IP cameras allow flexible network-based installation without running long cables to every floor." },
      ]}
    />
  );
}
