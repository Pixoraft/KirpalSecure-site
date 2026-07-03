import { BUSINESS_INFO } from "@/lib/electric-fence-cities";

export interface CCTVCity {
  name: string;
  slug: string;
  url: string;
}

export const cctvCities: CCTVCity[] = [
  { name: "Jalandhar", slug: "jalandhar", url: "/cctv-camera-installation-jalandhar" },
  { name: "Ludhiana", slug: "ludhiana", url: "/cctv-camera-installation-ludhiana" },
  { name: "Amritsar", slug: "amritsar", url: "/cctv-camera-installation-amritsar" },
  { name: "Patiala", slug: "patiala", url: "/cctv-camera-installation-patiala" },
  { name: "Mohali", slug: "mohali", url: "/cctv-camera-installation-mohali" },
  { name: "Bathinda", slug: "bathinda", url: "/cctv-camera-installation-bathinda" },
  { name: "Phagwara", slug: "phagwara", url: "/cctv-camera-installation-phagwara" },
  { name: "Kapurthala", slug: "kapurthala", url: "/cctv-camera-installation-kapurthala" },
  { name: "Hoshiarpur", slug: "hoshiarpur", url: "/cctv-camera-installation-hoshiarpur" },
  { name: "Pathankot", slug: "pathankot", url: "/cctv-camera-installation-pathankot" },
  { name: "Gurdaspur", slug: "gurdaspur", url: "/cctv-camera-installation-gurdaspur" },
  { name: "Moga", slug: "moga", url: "/cctv-camera-installation-moga" },
  { name: "Nakodar", slug: "nakodar", url: "/cctv-camera-installation-nakodar" },
  { name: "Sangrur", slug: "sangrur", url: "/cctv-camera-installation-sangrur" },
  { name: "Rupnagar", slug: "rupnagar", url: "/cctv-camera-installation-rupnagar" },
  { name: "Firozpur", slug: "firozpur", url: "/cctv-camera-installation-firozpur" },
  { name: "Tarn Taran", slug: "tarn-taran", url: "/cctv-camera-installation-tarn-taran" },
  { name: "Nawanshahr", slug: "nawanshahr", url: "/cctv-camera-installation-nawanshahr" },
];

export const cctvPillarUrl = "/cctv-camera-installation-punjab";
export const cctvPillarTitle = "CCTV Camera Installation in Punjab";

export { BUSINESS_INFO };

const CCTV_SAMPLE_REVIEWS = [
  {
    author: "Amanpreet Singh",
    rating: 5,
    body: "Got an 8-camera Hikvision setup installed for our showroom. The team did clean cabling, configured mobile app remote viewing and explained the NVR settings. Picture is super sharp even at night.",
    datePublished: "2025-08-22",
  },
  {
    author: "Manjit Kaur",
    rating: 5,
    body: "Kirpal Securities installed CP Plus cameras at our home — 4 outdoor + 2 indoor. Free site visit, fair pricing, and the live view on phone works flawlessly. Highly recommended.",
    datePublished: "2025-09-15",
  },
  {
    author: "Gurpreet Sandhu",
    rating: 5,
    body: "We needed a 16-camera Dahua IP system for our factory. Installation was tidy, hard disk was set up for 30-day recording and the support after install has been great.",
    datePublished: "2025-10-09",
  },
];

export function buildCCTVSchemas({
  pageTitle,
  pageUrl,
  cityName,
  breadcrumbs,
  faqs,
}: {
  pageTitle: string;
  pageUrl: string;
  cityName?: string;
  breadcrumbs: { name: string; item: string }[];
  faqs: { question: string; answer: string }[];
}) {
  const allCityNames = cctvCities.map((c) => c.name);
  const orgId = `${BUSINESS_INFO.url}/#organization`;
  const localBusinessId = `${BUSINESS_INFO.url}/#localbusiness`;
  const websiteId = `${BUSINESS_INFO.url}/#website`;
  const todayISO = new Date().toISOString().split("T")[0];

  const openingHoursSpecification = [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "16:00" },
  ];

  const contactPoint = [
    { "@type": "ContactPoint", telephone: "+91-7009154711", contactType: "sales", areaServed: "IN-PB", availableLanguage: ["English", "Hindi", "Punjabi"], name: "Nikhil" },
    { "@type": "ContactPoint", telephone: "+91-9463687535", contactType: "customer support", areaServed: "IN-PB", availableLanguage: ["English", "Hindi", "Punjabi"], name: "Naveen" },
  ];

  const aggregateRating = {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "215",
    ratingCount: "215",
  };

  const reviews = CCTV_SAMPLE_REVIEWS.map((r) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: r.rating.toString(), bestRating: "5" },
    author: { "@type": "Person", name: r.author },
    reviewBody: r.body,
    datePublished: r.datePublished,
    itemReviewed: { "@id": localBusinessId },
  }));

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.url,
    logo: { "@type": "ImageObject", url: BUSINESS_INFO.logo, width: "512", height: "512" },
    image: BUSINESS_INFO.image,
    slogan: BUSINESS_INFO.slogan,
    foundingDate: BUSINESS_INFO.foundingDate,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    description:
      "Kirpal Securities is a professional CCTV camera installation company serving customers across Punjab since 2018. Authorized installers of Hikvision, CP Plus and Dahua HD/IP CCTV systems for homes, offices, factories, warehouses and commercial properties.",
    address: { "@type": "PostalAddress", ...BUSINESS_INFO.address },
    contactPoint,
    sameAs: BUSINESS_INFO.sameAs,
    areaServed: ["Punjab", ...allCityNames].map((name) => ({ "@type": "AdministrativeArea", name })),
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
    "@id": localBusinessId,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    description:
      "Punjab's trusted CCTV camera installation company. Hikvision, CP Plus and Dahua HD and IP camera systems with NVR/DVR, hard disk, full installation and mobile app setup. Free site survey across all districts. 7+ years experience, thousands of cameras installed.",
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: [BUSINESS_INFO.image, BUSINESS_INFO.logo],
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    slogan: BUSINESS_INFO.slogan,
    foundingDate: BUSINESS_INFO.foundingDate,
    address: { "@type": "PostalAddress", ...BUSINESS_INFO.address },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    hasMap: BUSINESS_INFO.hasMap,
    sameAs: BUSINESS_INFO.sameAs,
    contactPoint,
    areaServed: allCityNames.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Punjab", containedInPlace: { "@type": "Country", name: "India" } },
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: BUSINESS_INFO.geo.latitude, longitude: BUSINESS_INFO.geo.longitude },
      geoRadius: "200000",
    },
    priceRange: BUSINESS_INFO.priceRange,
    paymentAccepted: BUSINESS_INFO.paymentAccepted,
    currenciesAccepted: BUSINESS_INFO.currenciesAccepted,
    openingHours: BUSINESS_INFO.openingHours,
    openingHoursSpecification,
    aggregateRating,
    review: reviews,
    knowsAbout: [
      "CCTV Camera Installation",
      "Hikvision CCTV Cameras",
      "CP Plus CCTV Cameras",
      "Dahua IP Camera Systems",
      "HD Analog Camera Installation",
      "IP Camera Networks",
      "NVR DVR Installation",
      "Bullet & Dome Cameras",
      "PTZ Camera Installation",
      "WiFi Wireless CCTV",
      "4G SIM Camera Installation",
      "Mobile App Live View Setup",
      "Hard Disk Recording (1TB / 2TB / 4TB)",
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "4-Camera CCTV Installation Package" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "8-Camera CCTV Installation Package" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "16-Camera CCTV Installation Package" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hikvision CCTV Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CP Plus CCTV Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dahua CCTV Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Site Survey" } },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: cityName
      ? `CCTV Camera Installation in ${cityName}`
      : "CCTV Camera Installation across Punjab",
    description: cityName
      ? `Professional CCTV camera installation in ${cityName} for homes, offices, shops, factories and warehouses. Hikvision, CP Plus and Dahua HD and IP camera systems with NVR/DVR setup, hard disk and mobile app live view. Free site survey across ${cityName} district.`
      : "Professional CCTV camera installation across Punjab. Hikvision, CP Plus and Dahua HD/IP camera systems with NVR/DVR, hard disk and mobile live view. Free site survey across all 18+ Punjab districts.",
    provider: { "@id": localBusinessId },
    brand: { "@id": orgId },
    image: BUSINESS_INFO.image,
    areaServed: cityName
      ? {
          "@type": "City",
          name: cityName,
          containedInPlace: { "@type": "State", name: "Punjab", containedInPlace: { "@type": "Country", name: "India" } },
        }
      : { "@type": "State", name: "Punjab", containedInPlace: { "@type": "Country", name: "India" } },
    serviceType: "CCTV Camera Installation",
    category: "Security Camera Installation",
    audience: {
      "@type": "Audience",
      audienceType: "Homeowners, Shop Owners, Office Managers, Factory Owners, Warehouse Managers",
      geographicArea: { "@type": "State", name: "Punjab" },
    },
    aggregateRating,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: cityName ?? "Punjab",
      priceCurrency: "INR",
      price: "16000",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        description:
          "Starting at ₹16,000 for a 4-camera Hikvision/CP Plus HD package with DVR, hard disk and full installation. Final price depends on camera count, brand, resolution and cabling.",
      },
      seller: { "@id": localBusinessId },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "CCTV Installation Packages",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "4-Camera CCTV Installation Package", description: "4 HD bullet/dome cameras + DVR + 1TB HDD + full installation + mobile app setup." }, price: "16000", priceCurrency: "INR" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "8-Camera CCTV Installation Package", description: "8 HD cameras + DVR + 2TB HDD + full installation + mobile app setup." }, price: "21500", priceCurrency: "INR" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "16-Camera CCTV Installation Package", description: "16 HD/IP cameras + DVR/NVR + 4TB HDD + full installation + mobile app setup." }, price: "40000", priceCurrency: "INR" },
      ],
    },
    termsOfService: `${BUSINESS_INFO.url}/terms-conditions`,
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: cityName
      ? `How Kirpal Securities Installs CCTV Cameras in ${cityName}`
      : "How Kirpal Securities Installs CCTV Cameras",
    description:
      "Our 5-step professional CCTV camera installation process — from free site survey to mobile app setup and customer training.",
    totalTime: "P1D",
    estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "16000" },
    supply: [
      { "@type": "HowToSupply", name: "Hikvision / CP Plus / Dahua HD or IP Cameras" },
      { "@type": "HowToSupply", name: "DVR or NVR Recorder" },
      { "@type": "HowToSupply", name: "Surveillance-grade Hard Disk (1TB / 2TB / 4TB)" },
      { "@type": "HowToSupply", name: "CCTV Cabling, Power Adapters & Connectors" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Camera mounting equipment" },
      { "@type": "HowToTool", name: "Cabling & crimping tools" },
      { "@type": "HowToTool", name: "DVR/NVR configuration tools" },
    ],
    step: [
      { "@type": "HowToStep", position: 1, name: cityName ? `Free Site Survey in ${cityName}` : "Free Site Survey", text: `Our team visits your property${cityName ? ` in ${cityName}` : ""} to assess camera positions, blind spots, cable routing and the right brand/resolution for your needs.` },
      { "@type": "HowToStep", position: 2, name: "Camera & Package Selection", text: "We recommend the optimal camera count, type (bullet/dome/PTZ/IP) and package (Hikvision, CP Plus or Dahua) based on your budget and coverage requirements." },
      { "@type": "HowToStep", position: 3, name: "Cabling & Camera Mounting", text: "We do clean concealed cabling wherever possible, mount cameras at the right height and angle, and set up power supply." },
      { "@type": "HowToStep", position: 4, name: "DVR/NVR Configuration & Recording", text: "DVR/NVR is configured with the hard disk, recording schedule, motion detection and storage retention as per your requirements." },
      { "@type": "HowToStep", position: 5, name: "Mobile App Setup & Customer Training", text: "We set up live view on your phone, configure remote access and train you & your team on viewing footage and basic operation." },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "en-IN",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: breadcrumbs.map(({ name, item }, position) => ({
      "@type": "ListItem",
      position: position + 1,
      name,
      item,
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: BUSINESS_INFO.url,
    name: BUSINESS_INFO.name,
    description:
      "Kirpal Securities — professional CCTV camera and electric fence installation across Punjab. Hikvision, CP Plus, Dahua. Free site survey.",
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BUSINESS_INFO.url}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    name: pageTitle,
    url: pageUrl,
    inLanguage: "en-IN",
    isPartOf: { "@id": websiteId },
    about: { "@id": localBusinessId },
    primaryImageOfPage: { "@type": "ImageObject", url: BUSINESS_INFO.image },
    datePublished: "2024-01-15",
    dateModified: todayISO,
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    mainEntity: { "@id": `${pageUrl}#service` },
    description: cityName
      ? `Professional CCTV camera installation in ${cityName} by Kirpal Securities. Hikvision, CP Plus, Dahua HD/IP cameras with NVR/DVR & mobile app. Free site survey. Call 7009154711.`
      : "Professional CCTV camera installation across Punjab by Kirpal Securities. Hikvision, CP Plus, Dahua HD/IP cameras with NVR/DVR & mobile app. Free site survey.",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
    significantLink: [BUSINESS_INFO.url, `${BUSINESS_INFO.url}${cctvPillarUrl}`],
  };

  const itemList = cityName
    ? null
    : {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${pageUrl}#cities`,
        name: "CCTV Camera Installation Service Areas in Punjab",
        numberOfItems: cctvCities.length,
        itemListElement: cctvCities.map((city, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `CCTV Camera Installation in ${city.name}`,
          url: `${BUSINESS_INFO.url}${city.url}`,
        })),
      };

  const schemas: any[] = [
    organization,
    localBusiness,
    website,
    service,
    howTo,
    faqPage,
    breadcrumbList,
    webPage,
  ];
  if (itemList) schemas.push(itemList);
  return schemas;
}
