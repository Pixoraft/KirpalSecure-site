import { IndustryCCTVTemplate } from "@/components/industry-cctv-template";

const PAGE_URL = "https://kirpalsecurities.in/best-cctv-camera-for-school";

export default function CCTVForSchoolPage() {
  return (
    <IndustryCCTVTemplate
      industryKey="school"
      title="Best CCTV Camera for School Security"
      subTitle="Professional CCTV surveillance systems designed for school safety and monitoring"
      heroDescription="Kirpal Securities provides complete school CCTV camera systems across Punjab — covering entrances, hallways, playgrounds, classrooms, bus bays and parking. Hikvision, CP Plus and Dahua systems with free site survey."
      metaTitle="Best CCTV Camera For School Security | Kirpal Securities Punjab"
      metaDescription="Best CCTV camera systems for schools in Punjab. Kirpal Securities provides professional school surveillance with dome, bullet and IP cameras. Free site survey. Call 7009154711."
      keywords="best cctv for school, school security camera system, school surveillance cameras Punjab, school cctv installation Jalandhar, school monitoring system, cctv camera for school entrance, school campus security cameras"
      pageUrl={PAGE_URL}
      productName="School CCTV Camera Security System"
      productDescription="Professional CCTV surveillance system for schools covering entrances, hallways, playgrounds and parking — designed for student safety and campus security across Punjab."
      painPoints={[
        { title: "Student Safety", desc: "Monitor all areas where students gather to detect incidents and respond quickly before situations escalate." },
        { title: "Unauthorized Access", desc: "Control and record who enters the campus — preventing intruders from reaching students or staff areas." },
        { title: "Playground Monitoring", desc: "Playgrounds and open areas are common blind spots — cameras provide continuous oversight with no gaps." },
        { title: "Classroom Discipline", desc: "Corridor and lobby cameras support administration in reviewing reported incidents accurately." },
        { title: "Bus Bay and Parking", desc: "Monitor student arrival, departure, bus loading and parent pickup to prevent congestion and incidents." },
        { title: "After-Hours Security", desc: "Protect school property from vandalism, theft and break-ins during evenings, weekends and holidays." },
      ]}
      placements={[
        { location: "Main Entrance and Gate", reason: "Record all entry and exit of students, staff and visitors — foundation of any school security system." },
        { location: "Corridors and Hallways", reason: "Monitor student movement between classes and detect incidents quickly before they escalate." },
        { location: "Playground and Sports Areas", reason: "Wide-angle dome cameras provide continuous coverage of open recreational areas." },
        { location: "Staff Room and Administration", reason: "Protect sensitive documents, records and staff workspaces during and after school hours." },
        { location: "Parking and Bus Bay", reason: "Manage vehicle security, monitor bus loading/unloading and track parent pickup zones." },
        { location: "Library, Labs and Computer Rooms", reason: "Protect valuable equipment and monitor usage of high-value academic resources." },
      ]}
      faqs={[
        { question: "Which CCTV cameras are best for schools?", answer: "For schools we recommend dome cameras for indoor corridors and hallways (vandal-resistant, discreet), bullet cameras for entrances and parking, and wide-angle IP cameras for playgrounds. Hikvision and CP Plus both offer school-specific packages with remote monitoring and motion alerts." },
        { question: "How many CCTV cameras does a school need?", answer: "Camera count depends on school size. A typical school with 5–10 classrooms requires 8–16 cameras covering main entrance, corridors, playground, parking and staff areas. We assess your campus during a free site survey and recommend the optimal number." },
        { question: "Do school CCTV cameras work at night?", answer: "Yes — all our cameras include IR night vision that captures clear footage in complete darkness. Outdoor cameras at gates, parking and perimeter are equipped with night vision for 24/7 coverage." },
        { question: "Can school CCTV cameras be monitored remotely?", answer: "Yes. Every installation includes live mobile viewing for principals and administrators on Android and iPhone. You can view all cameras live, playback recordings and receive motion alerts from anywhere." },
        { question: "How much does CCTV installation cost for a school?", answer: "School CCTV packages start from ₹21,500 for an 8-camera system with DVR, hard disk and installation. Larger IP camera systems for bigger campuses are priced per site after a free survey. We provide transparent written quotes with no hidden charges." },
        { question: "Are there privacy considerations for CCTV in schools?", answer: "Yes. Cameras should not be placed inside classrooms or restrooms. Corridors, entrances, playgrounds and parking are appropriate locations. We follow standard privacy guidelines and can advise on proper placement and signage during the site survey." },
      ]}
    />
  );
}
