import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  ogType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: any | any[];
}

export function SEOHead({ 
  title, 
  description, 
  keywords,
  image = "https://kirpalsecurities.in/og-image.jpg",
  url,
  canonicalUrl,
  type = "website",
  ogType,
  publishedTime,
  modifiedTime,
  author = "Kirpal Securities",
  section,
  tags = [],
  structuredData
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Helper function to create or update meta tag
    const updateMetaTag = (selector: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      const attributeValue = property ? selector : selector;
      let meta = document.querySelector(`meta[${attribute}="${attributeValue}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, attributeValue);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Helper function to create or update link tag
    const updateLinkTag = (rel: string, href: string, type?: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
      if (type) link.type = type;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('bingbot', 'index, follow');
    
    if (keywords) updateMetaTag('keywords', keywords);
    
    // Canonical URL
    const currentUrl = url || window.location.href;
    const canonicalLink = canonicalUrl || currentUrl;
    updateLinkTag('canonical', canonicalLink);
    
    // Open Graph tags
    updateMetaTag('og:type', ogType || type, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:alt', title, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:site_name', 'Kirpal Securities - Professional Security Solutions Jalandhar', true);
    updateMetaTag('og:locale', 'en_IN', true);
    
    if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
    if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
    if (section) updateMetaTag('article:section', section, true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', '@kirpalsecurities');
    updateMetaTag('twitter:creator', '@kirpalsecurities');
    
    // Local SEO meta tags
    updateMetaTag('geo.region', 'IN-PB');
    updateMetaTag('geo.placename', 'Jalandhar');
    updateMetaTag('geo.position', '31.3260;75.5762');
    updateMetaTag('ICBM', '31.3260, 75.5762');
    
    // Business contact info
    updateMetaTag('contact', 'kirpalsecurities@gmail.com');
    updateMetaTag('phone', '+91-7009154711');
    updateMetaTag('address', 'Urban Estate Ph. 2, Jalandhar, Punjab, India');
    
    // Theme and app meta tags
    updateMetaTag('theme-color', '#dc2626');
    updateMetaTag('msapplication-TileColor', '#dc2626');
    updateMetaTag('application-name', 'Kirpal Securities');
    updateMetaTag('apple-mobile-web-app-title', 'Kirpal Securities');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('mobile-web-app-capable', 'yes');

    // Structured data - clean up and recreate on every render
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    if (structuredData) {
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      dataArray.forEach((data, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = `structured-data-${index}`;
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    } else {
      const defaultScript = document.createElement('script');
      defaultScript.type = 'application/ld+json';
      defaultScript.id = 'structured-data-default';
      
      const schema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
        "@id": "https://kirpalsecurities.in/#localbusiness",
        "name": "Kirpal Securities",
        "legalName": "Kirpal Securities",
        "description": "Punjab's trusted electric fence and CCTV camera installation specialists. Serving homes, factories, schools, warehouses, offices and commercial properties across 18+ Punjab cities since 2018.",
        "slogan": "Punjab's Trusted Electric Fence & CCTV Installation Specialists",
        "foundingDate": "2018",
        "url": "https://kirpalsecurities.in",
        "telephone": ["+91-7009154711", "+91-9463687535"],
        "email": "kirpalsecurities@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Urban Estate Ph. 2, Road Opp. Hotel Imperia Suites",
          "addressLocality": "Jalandhar",
          "addressRegion": "Punjab",
          "addressCountry": "IN",
          "postalCode": "144022"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "31.301145",
          "longitude": "75.584029"
        },
        "hasMap": "https://www.google.com/maps/place/Kirpal+Securities/@31.301145,75.584029,17z/data=!4m6!3m5!1s0x391a5b0a565f8d75:0xe85e41fb52991cb2",
        "areaServed": [
          "Jalandhar","Ludhiana","Amritsar","Pathankot","Hoshiarpur","Phagwara",
          "Kapurthala","Nakodar","Patiala","Mohali","Bathinda","Gurdaspur",
          "Moga","Sangrur","Rupnagar","Firozpur","Tarn Taran","Nawanshahr"
        ],
        "priceRange": "₹₹",
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "19:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "09:00", "closes": "18:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "10:00", "closes": "16:00" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "215",
          "bestRating": "5"
        },
        "sameAs": [
          "https://share.google/bklVf9NcFe0X4ovIn",
          "https://www.google.com/maps/place/Kirpal+Securities/@31.301145,75.584029,17z/data=!4m6!3m5!1s0x391a5b0a565f8d75:0xe85e41fb52991cb2"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Security Installation Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electric Fence Installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV Camera Installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IP Camera Systems" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security System AMC" } }
          ]
        }
      };
      
      defaultScript.textContent = JSON.stringify(schema);
      document.head.appendChild(defaultScript);
    }

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };

  }, [title, description, keywords, image, url, canonicalUrl, type, ogType, publishedTime, modifiedTime, author, section, structuredData]);

  return null;
}
