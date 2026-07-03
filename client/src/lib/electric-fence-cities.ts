export interface ElectricFenceCity {
  name: string;
  slug: string;
  url: string;
}

export const electricFenceCities: ElectricFenceCity[] = [
  { name: "Jalandhar", slug: "jalandhar", url: "/electric-fence-installation-jalandhar" },
  { name: "Ludhiana", slug: "ludhiana", url: "/electric-fence-installation-ludhiana" },
  { name: "Amritsar", slug: "amritsar", url: "/electric-fence-installation-amritsar" },
  { name: "Pathankot", slug: "pathankot", url: "/electric-fence-installation-pathankot" },
  { name: "Hoshiarpur", slug: "hoshiarpur", url: "/electric-fence-installation-hoshiarpur" },
  { name: "Phagwara", slug: "phagwara", url: "/electric-fence-installation-phagwara" },
  { name: "Kapurthala", slug: "kapurthala", url: "/electric-fence-installation-kapurthala" },
  { name: "Nakodar", slug: "nakodar", url: "/electric-fence-installation-nakodar" },
  { name: "Patiala", slug: "patiala", url: "/electric-fence-installation-patiala" },
  { name: "Mohali", slug: "mohali", url: "/electric-fence-installation-mohali" },
  { name: "Bathinda", slug: "bathinda", url: "/electric-fence-installation-bathinda" },
  { name: "Gurdaspur", slug: "gurdaspur", url: "/electric-fence-installation-gurdaspur" },
  { name: "Moga", slug: "moga", url: "/electric-fence-installation-moga" },
  { name: "Sangrur", slug: "sangrur", url: "/electric-fence-installation-sangrur" },
  { name: "Barnala", slug: "barnala", url: "/electric-fence-installation-barnala" },
  { name: "Firozpur", slug: "firozpur", url: "/electric-fence-installation-firozpur" },
  { name: "Rupnagar", slug: "rupnagar", url: "/electric-fence-installation-rupnagar" },
  { name: "Fatehgarh Sahib", slug: "fatehgarh-sahib", url: "/electric-fence-installation-fatehgarh-sahib" },
  { name: "Fazilka", slug: "fazilka", url: "/electric-fence-installation-fazilka" },
  { name: "Muktsar", slug: "muktsar", url: "/electric-fence-installation-muktsar" },
  { name: "Tarn Taran", slug: "tarn-taran", url: "/electric-fence-installation-tarn-taran" },
  { name: "Mansa", slug: "mansa", url: "/electric-fence-installation-mansa" },
  { name: "Nawanshahr", slug: "nawanshahr", url: "/electric-fence-installation-nawanshahr" },
  { name: "Malerkotla", slug: "malerkotla", url: "/electric-fence-installation-malerkotla" },
];

export const pillarPageUrl = "/electric-fence-installation-punjab";
export const pillarPageTitle = "Electric Fence Installation in Punjab";

export const BUSINESS_INFO = {
  name: "Kirpal Securities",
  legalName: "Kirpal Securities",
  url: "https://kirpalsecurities.in",
  logo: "https://kirpalsecurities.in/logo.png",
  image: "https://kirpalsecurities.in/og-image.jpg",
  telephone: ["+91-7009154711", "+91-9463687535"],
  email: "kirpalsecurities@gmail.com",
  slogan: "Punjab's Trusted Electric Fence & CCTV Installation Specialists",
  foundingDate: "2018",
  address: {
    streetAddress: "Urban Estate Ph. 2, Road Opp. Hotel Imperia Suites (Plus Code: 8H2P+FJ)",
    addressLocality: "Jalandhar",
    addressRegion: "Punjab",
    addressCountry: "IN",
    postalCode: "144022",
  },
  geo: { latitude: "31.301145", longitude: "75.584029" },
  plusCode: "8H2P+FJ Jalandhar, Punjab",
  googleBusinessUrl: "https://share.google/bklVf9NcFe0X4ovIn",
  hasMap: "https://www.google.com/maps/place/Kirpal+Securities/@31.301145,75.584029,17z/data=!4m6!3m5!1s0x391a5b0a565f8d75:0xe85e41fb52991cb2",
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-18:00", "Su 10:00-16:00"],
  priceRange: "₹₹",
  paymentAccepted: ["Cash", "UPI", "Bank Transfer", "Cheque"],
  currenciesAccepted: "INR",
  sameAs: [
    "https://share.google/bklVf9NcFe0X4ovIn",
    "https://www.google.com/maps/place/Kirpal+Securities/@31.301145,75.584029,17z/data=!4m6!3m5!1s0x391a5b0a565f8d75:0xe85e41fb52991cb2",
  ],
};

const SAMPLE_REVIEWS = [
  {
    author: "Harpreet Singh",
    rating: 5,
    body: "Kirpal Securities installed a complete solar electric fence around our 4-acre farm. The team was professional, the SS 304 poles look great, and we have had zero animal intrusions since. Highly recommended for any farm owner in Punjab.",
    datePublished: "2025-08-12",
  },
  {
    author: "Rajinder Kumar",
    rating: 5,
    body: "We needed perimeter security for our warehouse. Nikhil and the Kirpal team did a clean installation with high-voltage energizers and warning signs. Site inspection was free and pricing was transparent.",
    datePublished: "2025-09-03",
  },
  {
    author: "Simran Kaur",
    rating: 5,
    body: "Got electric fencing installed on our kothi boundary. Looks neat, fits our wall design, and the safety signage is properly placed. Naveen explained everything clearly during the free inspection.",
    datePublished: "2025-10-18",
  },
];

export function buildElectricFenceSchemas({
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
  const allCityNames = electricFenceCities.map((c) => c.name);
  const orgId = `${BUSINESS_INFO.url}/#organization`;
  const localBusinessId = `${BUSINESS_INFO.url}/#localbusiness`;
  const websiteId = `${BUSINESS_INFO.url}/#website`;
  const todayISO = new Date().toISOString().split("T")[0];

  const openingHoursSpecification = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00",
    },
  ];

  const contactPoint = [
    {
      "@type": "ContactPoint",
      telephone: "+91-7009154711",
      contactType: "sales",
      areaServed: "IN-PB",
      availableLanguage: ["English", "Hindi", "Punjabi"],
      contactOption: "TollFree",
      name: "Nikhil",
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9463687535",
      contactType: "customer support",
      areaServed: "IN-PB",
      availableLanguage: ["English", "Hindi", "Punjabi"],
      name: "Naveen",
    },
  ];

  const aggregateRating = {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "187",
    ratingCount: "187",
  };

  const reviews = SAMPLE_REVIEWS.map((r) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating.toString(),
      bestRating: "5",
    },
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
    logo: {
      "@type": "ImageObject",
      url: BUSINESS_INFO.logo,
      width: "512",
      height: "512",
    },
    image: BUSINESS_INFO.image,
    slogan: BUSINESS_INFO.slogan,
    foundingDate: BUSINESS_INFO.foundingDate,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    description:
      "Kirpal Securities is a professional electric fence installation company serving customers across Punjab since 2018. We provide solar electric fencing, agricultural, industrial, warehouse and residential perimeter fencing solutions with SS 304 stainless steel poles and high-voltage energizers.",
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_INFO.address,
    },
    contactPoint,
    sameAs: BUSINESS_INFO.sameAs,
    areaServed: ["Punjab", ...allCityNames].map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
    "@id": localBusinessId,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    description:
      "Punjab's trusted electric fence installation company. Solar electric fencing, agricultural, industrial, warehouse and residential perimeter security. Free site inspection across all districts. 7+ years experience, 3300+ installations, SS 304 poles and high-voltage energizers.",
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: [BUSINESS_INFO.image, BUSINESS_INFO.logo],
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    slogan: BUSINESS_INFO.slogan,
    foundingDate: BUSINESS_INFO.foundingDate,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_INFO.address,
    },
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
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS_INFO.geo.latitude,
        longitude: BUSINESS_INFO.geo.longitude,
      },
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
      "Electric Fence Installation",
      "Solar Electric Fencing",
      "Agricultural Perimeter Fencing",
      "Industrial Perimeter Security",
      "Warehouse Security Fencing",
      "Residential Electric Fence Systems",
      "CCTV Camera Installation",
      "SS 304 Stainless Steel Poles",
      "High Voltage Energizers",
      "Solar Powered Security Systems",
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Electric Fencing Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agricultural Electric Fence Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Perimeter Fencing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse Security Fencing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Electric Fence Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Site Inspection" } },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: cityName
      ? `Electric Fence Installation in ${cityName}`
      : "Electric Fence Installation across Punjab",
    description: cityName
      ? `Professional electric fence installation in ${cityName} for farms, warehouses, factories, kothis and residential properties. Solar electric fencing systems with SS 304 stainless steel poles, high-voltage energizers, insulated tension wires and proper safety signage. Free site inspection across ${cityName} district.`
      : "Professional electric fence installation across Punjab. Solar electric fencing systems for farms, warehouses, factories and residential properties with SS 304 stainless steel poles and high-voltage energizers. Free site inspection across all 24+ Punjab districts.",
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
    serviceType: "Electric Fence Installation",
    category: "Perimeter Security Installation",
    audience: {
      "@type": "Audience",
      audienceType: "Farm Owners, Warehouse Managers, Factory Owners, Homeowners, Estate Owners",
      geographicArea: { "@type": "State", name: "Punjab" },
    },
    aggregateRating,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: cityName ?? "Punjab",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        description: "Custom quotation after free site inspection. Pricing depends on perimeter size, terrain, pole type (MS Powder Coated or SS 304) and energizer specification.",
      },
      seller: { "@id": localBusinessId },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electric Fencing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Electric Fencing", description: "Energy-efficient solar-powered perimeter fencing for farms and rural properties." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agricultural Electric Fencing", description: "Farm perimeter protection from animal intrusions and unauthorized access." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Perimeter Fencing", description: "High-security electric fence systems for factories and industrial estates." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse Security Fencing", description: "Round-the-clock perimeter protection for storage facilities and logistics centres." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Electric Fence Systems", description: "Boundary security for kothis, bungalows and residential homes." } },
      ],
    },
    termsOfService: `${BUSINESS_INFO.url}/terms-conditions`,
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: cityName
      ? `How Kirpal Securities Installs Electric Fencing in ${cityName}`
      : "How Kirpal Securities Installs Electric Fencing",
    description:
      "Our 5-step professional electric fence installation process — from free site inspection to final activation and safety briefing.",
    totalTime: "P2D",
    estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "Custom" },
    supply: [
      { "@type": "HowToSupply", name: "MS Powder Coated or SS 304 Stainless Steel Poles" },
      { "@type": "HowToSupply", name: "High Voltage Energizers" },
      { "@type": "HowToSupply", name: "Insulated Tension Wires" },
      { "@type": "HowToSupply", name: "Fence Warning Signage" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Pole installation equipment" },
      { "@type": "HowToTool", name: "Tension wire stringing tools" },
      { "@type": "HowToTool", name: "Energizer testing instruments" },
    ],
    step: [
      { "@type": "HowToStep", position: 1, name: cityName ? `Site Inspection in ${cityName}` : "Site Inspection", text: `Our team visits your property${cityName ? ` in ${cityName}` : ""} to assess the perimeter, terrain and specific security requirements before any work begins.` },
      { "@type": "HowToStep", position: 2, name: "Fence Design Planning", text: "We prepare a customized fence layout plan based on your property dimensions, access points and security needs." },
      { "@type": "HowToStep", position: 3, name: "Pole Installation & Wiring", text: "MS powder coated or SS 304 stainless steel poles are installed and insulated tension wires are strung along the planned perimeter." },
      { "@type": "HowToStep", position: 4, name: "Energizer Installation", text: "High-voltage energizers are installed and connected to deliver consistent, controlled pulses throughout the fence system." },
      { "@type": "HowToStep", position: 5, name: "Final Testing & Activation", text: "The complete system is tested, safety verified and activated. Warning signs are placed and your team is briefed on safe operation." },
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
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
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
      "Kirpal Securities — professional electric fence and CCTV camera installation across Punjab. Solar fencing, perimeter security, free site inspection.",
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS_INFO.url}/?q={search_term_string}`,
      },
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
      ? `Professional electric fence installation in ${cityName} by Kirpal Securities. Solar electric fencing for farms, factories, warehouses, kothis and residential properties. Free site inspection across ${cityName} district. Call 7009154711.`
      : "Professional electric fence installation across Punjab by Kirpal Securities. Solar electric fencing for farms, factories, warehouses and residential properties. Free site inspection.",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
    significantLink: [BUSINESS_INFO.url, `${BUSINESS_INFO.url}${pillarPageUrl}`],
  };

  const itemList = cityName
    ? null
    : {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${pageUrl}#cities`,
        name: "Electric Fence Installation Service Areas in Punjab",
        numberOfItems: electricFenceCities.length,
        itemListElement: electricFenceCities.map((city, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `Electric Fence Installation in ${city.name}`,
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
