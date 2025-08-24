import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
}

export function SEOHead({ title, description, keywords }: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
    
    // Update meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;

    let ogDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = description;

  }, [title, description, keywords]);

  return null;
}
