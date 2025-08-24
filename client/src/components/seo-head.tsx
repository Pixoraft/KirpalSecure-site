import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function SEOHead({ 
  title, 
  description, 
  keywords,
  image = "https://kirpalsecurities.com/og-image.jpg",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Kirpal Securities",
  section,
  tags = []
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
    updateLinkTag('canonical', currentUrl);
    
    // Open Graph tags
    updateMetaTag('og:type', type, true);
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

    // Structured data for local business
    let structuredData = document.querySelector('#structured-data') as HTMLScriptElement;
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'structured-data';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Kirpal Securities",
      "description": "Professional security solutions provider in Jalandhar offering CCTV installation, home security systems, biometric devices, networking solutions, and repair services.",
      "url": "https://kirpalsecurities.com",
      "telephone": ["+91-7009154711", "+91-9463687535"],
      "email": "kirpalsecurities@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Urban Estate Ph. 2, Road Opp. Hotel Imperia Suites",
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
      "areaServed": ["Jalandhar", "Punjab"],
      "priceRange": "₹₹",
      "openingHours": ["Mo-Fr 09:00-19:00", "Sa 09:00-18:00", "Su 10:00-16:00"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Security Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CCTV Installation & Security Cameras"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Home Security Systems"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Biometric Access Control"
            }
          }
        ]
      }
    };
    
    structuredData.textContent = JSON.stringify(schema);

  }, [title, description, keywords, image, url, type, publishedTime, modifiedTime, author, section]);

  return null;
}
