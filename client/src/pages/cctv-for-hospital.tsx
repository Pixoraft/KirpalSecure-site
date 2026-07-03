import { IndustryCCTVTemplate } from "@/components/industry-cctv-template";

const PAGE_URL = "https://kirpalsecurities.in/best-cctv-camera-for-hospital";

export default function CCTVForHospitalPage() {
  return (
    <IndustryCCTVTemplate
      industryKey="hospital"
      title="Best CCTV Camera for Hospital Security"
      subTitle="Professional hospital surveillance for patient safety, medication security and emergency monitoring"
      heroDescription="Kirpal Securities provides complete hospital and clinic CCTV systems across Punjab — emergency departments, wards, pharmacy, ICU corridors, parking and entrances. Sensitive, reliable systems with 24/7 monitoring and remote access."
      metaTitle="Best CCTV Camera For Hospital Security | Kirpal Securities Punjab"
      metaDescription="Best CCTV cameras for hospitals and clinics in Punjab. Patient safety monitoring, pharmacy security and emergency department surveillance. Free site survey. Call 7009154711."
      keywords="best cctv for hospital, hospital security camera system, hospital surveillance Punjab, clinic cctv installation, patient safety monitoring, hospital pharmacy security camera, hospital cctv Jalandhar"
      pageUrl={PAGE_URL}
      productName="Hospital CCTV Patient Safety Monitoring System"
      productDescription="Professional CCTV surveillance system for hospitals covering emergency, wards, pharmacy, ICU and parking — designed for patient safety, medication security and 24/7 monitoring across Punjab."
      painPoints={[
        { title: "Patient Safety and Monitoring", desc: "Corridors and ward entry points need camera coverage to ensure patient movement is monitored and safety incidents are quickly addressed." },
        { title: "Medication and Pharmacy Security", desc: "Pharmacies and medication storage areas are high-risk zones for theft — dedicated cameras create accountability and deter diversion." },
        { title: "Visitor Access Control", desc: "Controlling who enters sensitive wards, ICU and operating areas protects vulnerable patients from unauthorized visitors." },
        { title: "Emergency Department Monitoring", desc: "Emergency departments see high volumes of distressed patients and visitors — camera coverage helps staff manage situations safely." },
        { title: "Staff Safety", desc: "Healthcare workers face verbal and physical confrontations — cameras in high-tension areas protect staff and provide evidence." },
        { title: "Infant and Paediatric Ward Security", desc: "Maternity and children's wards require strict access control backed by camera surveillance to prevent unauthorized removal of infants." },
      ]}
      placements={[
        { location: "Main Entrance and Emergency Department", reason: "Monitor all patient, visitor and ambulance arrivals — the most critical access point in any hospital." },
        { location: "Pharmacy and Medication Storage", reason: "Prevent medication theft and diversion with dedicated camera coverage and access logs." },
        { location: "Ward and Patient Corridor Entrances", reason: "Control visitor access to wards and monitor patient movement in corridors." },
        { location: "ICU and Critical Care Corridors", reason: "Monitor access to high-dependency areas without intruding into patient privacy zones." },
        { location: "Parking and Ambulance Bay", reason: "Secure hospital parking, ambulance loading areas and outdoor perimeter during all hours." },
        { location: "Stairwells and Service Areas", reason: "Secondary access routes and service corridors are common security gaps that need camera coverage." },
      ]}
      faqs={[
        { question: "Which CCTV cameras are best for hospitals?", answer: "For hospitals we recommend discreet dome cameras for corridors and ward entrances, IP cameras for pharmacy and high-security areas, bullet cameras for external entrances and parking, and PTZ cameras for large waiting areas and emergency departments. Hikvision offers hospital-specific low-light cameras." },
        { question: "Do hospital CCTV cameras violate patient privacy?", answer: "Cameras are placed in public areas — corridors, entrances, waiting rooms, pharmacy and parking. They are not placed inside patient rooms, operating theatres or restrooms. We advise on privacy-compliant placement during the free site survey and recommend appropriate signage." },
        { question: "Can hospital CCTV be monitored by security staff in real time?", answer: "Yes. We can set up a dedicated security monitoring station displaying all camera feeds on a monitor wall. Simultaneously, administrators and owners can view cameras remotely on mobile devices." },
        { question: "How do hospital CCTV systems work at night?", answer: "All our cameras include IR night vision for clear footage in complete darkness. Hospital corridors and entrances remain well-lit, but parking areas and external perimeters benefit from IR cameras with excellent low-light performance." },
        { question: "How much does CCTV installation cost for a hospital?", answer: "Hospital CCTV systems are quoted based on the number of floors, departments and entry points. A medium-sized clinic typically requires 8–16 cameras from ₹21,500. Larger hospitals with multiple wards are quoted after a free site survey. Transparent pricing with no hidden charges." },
        { question: "Do you provide AMC for hospital CCTV systems?", answer: "Yes. AMC plans are available for hospitals ensuring priority response, quarterly system checks and immediate support for any camera or recording issue. Hospitals require maximum uptime — our AMC guarantees fast resolution." },
      ]}
    />
  );
}
