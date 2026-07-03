import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-100 border-b border-gray-200"
      data-testid="breadcrumb-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />}
              {item.href && i < items.length - 1 ? (
                <a
                  href={item.href}
                  className="hover:text-brand-red hover:underline transition-colors"
                  data-testid={`breadcrumb-link-${i}`}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={i === items.length - 1 ? "text-brand-red font-medium" : ""}
                  data-testid={`breadcrumb-item-${i}`}
                  aria-current={i === items.length - 1 ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
