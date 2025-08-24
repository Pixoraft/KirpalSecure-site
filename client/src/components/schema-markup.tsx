import { Helmet } from "react-helmet-async";

interface LocalBusinessSchemaProps {
  page?: 'home' | 'services' | 'contact' | 'about' | 'blogs';
  service?: string;
  blogTitle?: string;
  blogDescription?: string;
  blogImage?: string;
  publishDate?: string;
  author?: string;
}

export function SchemaMarkup({ 
  page = 'home', 
  service,
  blogTitle,
  blogDescription,
  blogImage,
  publishDate,
  author 
}: LocalBusinessSchemaProps) {
  
  // Local Business Schema for all pages
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://kirpalsecurities.com/#organization",
    "name": "Kirpal Securities",
    "alternateName": "Kirpal Security Services",
    "description": "Professional security solutions provider in Jalandhar offering CCTV installation, home security systems, biometric devices, networking solutions, and repair services. Expert security consultants with 24/7 support.",
    "url": "https://kirpalsecurities.com",
    "logo": "https://kirpalsecurities.com/logo.png",
    "image": "https://kirpalsecurities.com/kirpal-securities-team.jpg",
    "telephone": ["+91-7009154711", "+91-9463687535"],
    "email": "kirpalsecurities@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Urban Estate Ph. 2, Road Opp. Hotel Imperia Suites, Aggarwal Dhaba Road",
      "addressLocality": "Jalandhar",
      "addressRegion": "Punjab",
      "addressCountry": "India",
      "postalCode": "144022"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.3260",
      "longitude": "75.5762"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Jalandhar"
      },
      {
        "@type": "State", 
        "name": "Punjab"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CCTV Installation & Security Cameras",
            "description": "Professional CCTV camera installation and surveillance systems for homes and businesses in Jalandhar"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Home Security Systems",
            "description": "Complete home security solutions including alarm systems, motion detectors, and smart home integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Biometric Access Control",
            "description": "Fingerprint and facial recognition systems for secure access control in offices and residential complexes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Networking Solutions", 
            "description": "Network setup, configuration, and security for businesses and smart home systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Intercom Systems",
            "description": "Video door phones and intercom installation for residential and commercial properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laptop & Printer Repair",
            "description": "Professional laptop and printer repair services with quick turnaround time"
          }
        }
      ]
    },
    "openingHours": [
      "Mo-Fr 09:00-19:00",
      "Sa 09:00-18:00", 
      "Su 10:00-16:00"
    ],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewRating": {
          "@type": "Rating", 
          "ratingValue": "5"
        },
        "reviewBody": "Excellent CCTV installation service. Professional team, quality equipment, and great after-sales support."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya Sharma"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5" 
        },
        "reviewBody": "Best security solution provider in Jalandhar. Installed complete home security system. Highly recommended!"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/kirpalsecurities",
      "https://www.instagram.com/kirpalsecurities", 
      "https://www.linkedin.com/company/kirpalsecurities"
    ]
  };

  // Service-specific schema
  const serviceSchema = service ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service,
    "provider": {
      "@id": "https://kirpalsecurities.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Jalandhar, Punjab, India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "description": `Professional ${service.toLowerCase()} services in Jalandhar area`
        }
      ]
    }
  } : null;

  // Blog article schema
  const blogSchema = blogTitle ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogTitle,
    "description": blogDescription,
    "image": blogImage,
    "author": {
      "@type": "Person",
      "name": author || "Security Expert Team"
    },
    "publisher": {
      "@id": "https://kirpalsecurities.com/#organization"
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://kirpalsecurities.com/blog/${blogTitle?.toLowerCase().replace(/\s+/g, '-')}`
    }
  } : null;

  // WebSite schema for search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://kirpalsecurities.com/#website",
    "name": "Kirpal Securities - Professional Security Solutions Jalandhar",
    "url": "https://kirpalsecurities.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kirpalsecurities.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@id": "https://kirpalsecurities.com/#organization"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      {blogSchema && (
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      )}
    </Helmet>
  );
}