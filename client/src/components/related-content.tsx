import { Link } from "wouter";
import { MapPin, ArrowRight, Zap, Camera, Package, Wrench } from "lucide-react";
import { electricFenceCities } from "@/lib/electric-fence-cities";
import { cctvCities } from "@/lib/cctv-cities";

interface RelatedContentProps {
  serviceType: "electric-fence" | "cctv";
  citySlug: string;
  cityName: string;
}

export function RelatedContent({ serviceType, citySlug, cityName }: RelatedContentProps) {
  const isElectric = serviceType === "electric-fence";
  const cities = isElectric ? electricFenceCities : cctvCities;

  const currentIndex = cities.findIndex((c) => c.slug === citySlug);
  const nearbyCities = Array.from({ length: 4 }, (_, i) => {
    const idx = (currentIndex + i + 1) % cities.length;
    return cities[idx];
  });

  const crossService = isElectric
    ? { href: "/cctv-camera-installation-punjab", label: "CCTV Camera Installation — All Punjab", Icon: Camera }
    : { href: "/electric-fence-installation-punjab", label: "Electric Fence Installation — All Punjab", Icon: Zap };

  const relatedLinks = [
    crossService,
    { href: "/packages", label: "View Our Packages & Pricing", Icon: Package },
    { href: "/services", label: "All Security Services", Icon: Wrench },
  ];

  return (
    <section
      className="py-14 bg-gray-50 border-t border-gray-200"
      aria-label="Related content"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          You May Also Be Interested In
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          Explore more{" "}
          {isElectric ? "electric fence installation" : "CCTV camera installation"} cities
          and related services across Punjab.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Nearby city pages — same service */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <MapPin size={13} />
              More {isElectric ? "Electric Fence" : "CCTV Camera"} Cities
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {nearbyCities.map((city) => (
                <Link
                  key={city.slug}
                  href={city.url}
                  className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-brand-red hover:text-brand-red hover:bg-red-50 transition-all duration-200 group shadow-sm"
                  data-testid={`related-city-${city.slug}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red/50 flex-shrink-0" />
                    {city.name}
                  </span>
                  <ArrowRight
                    size={13}
                    className="text-gray-300 group-hover:text-brand-red transition-colors flex-shrink-0"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Cross-service + utility links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Wrench size={13} />
              Related Services
            </h3>
            <div className="flex flex-col gap-3">
              {relatedLinks.map(({ href, label, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-brand-red hover:text-brand-red hover:bg-red-50 transition-all duration-200 group shadow-sm"
                  data-testid={`related-link-${href.replace(/\//g, "-").replace(/^-/, "")}`}
                >
                  <Icon size={16} className="text-brand-red flex-shrink-0" />
                  <span className="flex-1">{label}</span>
                  <ArrowRight
                    size={13}
                    className="text-gray-300 group-hover:text-brand-red transition-colors flex-shrink-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
