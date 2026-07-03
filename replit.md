# Overview

Kirpal Securities is a Punjab-based electric fence and CCTV camera installation company website built with React + TypeScript on the frontend and Express.js on the backend. The site serves as the company's primary lead-generation channel, providing service information, free site survey requests, WhatsApp consultation, and city-specific landing pages optimised for local SEO across all of Punjab.

The business is based in Jalandhar (Urban Estate Phase 2, Plus Code 8H2P+FJ) and serves homes, shops, offices, factories, warehouses, kothis, farms and commercial properties in 18+ Punjab cities.

# Business Information

- **Legal Name**: Kirpal Securities
- **Founded**: 2018 (7+ years experience)
- **Founders / Contact**: Nikhil (7009154711), Naveen (9463687535)
- **Email**: kirpalsecurities@gmail.com
- **Address**: Urban Estate Ph. 2, Road Opp. Hotel Imperia Suites, Jalandhar, Punjab 144022
- **Plus Code**: 8H2P+FJ Jalandhar, Punjab
- **Geo Coordinates**: 31.301145° N, 75.584029° E
- **Google Business Profile**: https://share.google/bklVf9NcFe0X4ovIn
- **Hours**: Mon–Fri 9:00 AM – 7:00 PM · Sat 9:00 AM – 6:00 PM · Sun 10:00 AM – 4:00 PM
- **Payment Accepted**: Cash, UPI, Bank Transfer, Cheque
- **Slogan**: "Punjab's Trusted Electric Fence & CCTV Installation Specialists"

# User Preferences

Preferred communication style: simple, everyday language. The user is non-technical.

Forbidden in UI: emoji characters (⚡, 📷, 📞, etc.) — always use lucide-react icon components instead so the design stays professional and consistent. WhatsApp message templates are also kept emoji-free.

# System Architecture

## Frontend
- **Framework**: React 18 + TypeScript, built with Vite
- **Routing**: Wouter (lightweight client-side router)
- **UI Library**: Radix UI primitives + shadcn/ui
- **Styling**: Tailwind CSS with custom CSS variables for theming and dark mode
- **State / Data**: TanStack Query (React Query) v5
- **Forms**: React Hook Form + Zod validation
- **Animation**: framer-motion
- **Icons**: lucide-react (sole icon system — no emojis anywhere in the UI)

## Backend
- **Runtime**: Node.js + Express.js, TypeScript with ES modules
- **Dev Server**: Vite middleware integration on the same port
- **Build**: esbuild for production bundles
- **Storage Layer**: Abstracted `IStorage` interface in `server/storage.ts` (in-memory implementation; DB-ready)

## Data Storage
- **Database**: PostgreSQL via Drizzle ORM (Neon serverless)
- **Schema**: Centralised in `shared/schema.ts` with Drizzle + Zod
- **Migrations**: Drizzle Kit

## Auth
- User model + Express session ready (PostgreSQL session store)
- Zod validation on all input

# Navigation

## Desktop Megamenu
`client/src/components/layout/navigation.tsx` — smart viewport-aware dropdowns.

- **Electric Fence dropdown**: city grid (3 cols, 9 cities) + footer strip (Near Me / Packages / Free Site Survey)
- **CCTV Camera dropdown**: city grid (3 cols, 18 cities) + Industry Solutions chips (6 industry pages) + footer strip (Near Me / Packages / Free Site Survey)
- **Overflow fix**: each dropdown measures its trigger button's position with `getBoundingClientRect()` on hover and flips to `right-0` alignment if it would overflow the right viewport edge. No dropdown ever goes off screen.

## Mobile Menu
- Accordion sub-menus for Electric Fence and CCTV Camera
- CCTV sub-menu has labelled sections: Industry Solutions (6 pages) → City Pages (18 cities)

# SEO Architecture (God-Tier Local SEO Cluster)

The site uses a **hub-and-spoke landing page model** across three service clusters: Electric Fence, CCTV Camera, and Industry-Specific CCTV. All clusters share the same `BUSINESS_INFO` source of truth in `client/src/lib/electric-fence-cities.ts` (re-exported by `cctv-cities.ts`).

---

## Electric Fence Cluster

### Pillar Page (Hub)
- **Route**: `/electric-fence-installation-punjab`
- **File**: `client/src/pages/electric-fence-installation.tsx`
- **Purpose**: Targets broad Punjab-wide keywords; links to all city pages + near-me page

### City Pages (Spokes) — 24 cities
8 hand-coded pages (Jalandhar, Ludhiana, Amritsar, Pathankot, Hoshiarpur, Phagwara, Kapurthala, Nakodar) + 16 template-driven pages via `electric-fence-city-template.tsx` (Patiala, Mohali, Bathinda, Gurdaspur, Moga, Sangrur, Barnala, Firozpur, Rupnagar, Fatehgarh Sahib, Fazilka, Muktsar, Tarn Taran, Mansa, Nawanshahr, Malerkotla).

### Near-Me Intent Page
- **Route**: `/electric-fence-installation-near-me`
- **File**: `client/src/pages/electric-fence-near-me.tsx`
- **Template**: `client/src/components/near-me-template.tsx` (shared with CCTV near-me pages)
- **Priority**: 0.93 / weekly in sitemap

### Shared Infrastructure
- `client/src/lib/electric-fence-cities.ts` — City data, `BUSINESS_INFO`, sample reviews, `buildElectricFenceSchemas()`
- `client/src/components/electric-fence-city-template.tsx` — Reusable city page template
- `client/src/components/electric-fence-city-extras.tsx` — Reviews + Quick Specs sections injected into hand-coded pages
- `client/src/components/breadcrumb-nav.tsx` — Reusable breadcrumb

---

## CCTV Camera Cluster

### Pillar Page (Hub)
- **Route**: `/cctv-camera-installation-punjab`
- **File**: `client/src/pages/cctv-installation-punjab.tsx`
- **Sections added**: Industry Solutions (6 industry page cards) + Popular Searches (near-me links)

### City Pages (Spokes) — 18 cities, all template-driven
Jalandhar, Ludhiana, Amritsar, Patiala, Mohali, Bathinda, Phagwara, Kapurthala, Hoshiarpur, Pathankot, Gurdaspur, Moga, Nakodar, Sangrur, Rupnagar, Firozpur, Tarn Taran, Nawanshahr.

All 18 city pages are 6-line files that render `<CCTVCityTemplate {...cctvCityData[citySlug]} />`.

### Near-Me Intent Pages
| Route | File |
|---|---|
| `/cctv-installation-near-me` | `client/src/pages/cctv-installation-near-me.tsx` |
| `/cctv-camera-service-near-me` | `client/src/pages/cctv-camera-service-near-me.tsx` |

Both render `<NearMeTemplate>` from `client/src/components/near-me-template.tsx`. Priority 0.93/weekly in sitemap.

### Shared Infrastructure
- `client/src/lib/cctv-cities.ts` — City list, `buildCCTVSchemas()`, sample reviews
- `client/src/lib/cctv-city-data.ts` — Per-city content
- `client/src/components/cctv-city-template.tsx` — Shared 11-section page template

---

## Industry-Specific CCTV Cluster

### Pages (6 industry pages, all template-driven)
| Route | File | Industry |
|---|---|---|
| `/best-cctv-camera-for-school` | `cctv-for-school.tsx` | Schools |
| `/best-cctv-camera-for-factory` | `cctv-for-factory.tsx` | Factories |
| `/best-cctv-camera-for-warehouse` | `cctv-for-warehouse.tsx` | Warehouses |
| `/best-cctv-camera-for-office` | `cctv-for-office.tsx` | Offices |
| `/best-cctv-camera-for-hospital` | `cctv-for-hospital.tsx` | Hospitals / Clinics |
| `/best-cctv-camera-for-commercial-buildings` | `cctv-for-commercial.tsx` | Commercial Buildings |

All 6 pages are thin files that pass props to `IndustryCCTVTemplate`. Priority 0.92/weekly in sitemap.

### Shared Infrastructure
- `client/src/components/industry-cctv-template.tsx` — Full shared template with 10 sections:
  1. Hero (H1, sub, AI discoverability paragraph, trust badges, 3 CTAs)
  2. Industry Pain Points (6 cards, passed as props)
  3. Recommended CCTV Systems (6 camera types — shared across all industries)
  4. Camera Placement Guide (6 locations, passed as props)
  5. Benefits (6 cards — shared)
  6. Industry Solutions (other 5 industry pages + CCTV pillar + near-me + packages + city pills)
  7. FAQ (passed as props, renders accordion + FAQPage schema)
  8. Final CTA (both phone numbers + WhatsApp + quote)

### Template Props (`IndustryCCTVTemplateProps`)
```ts
{
  industryKey: "school" | "factory" | "warehouse" | "office" | "hospital" | "commercial";
  title: string;          // H1
  subTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  pageUrl: string;
  productName: string;    // for Product schema
  productDescription: string;
  painPoints: { title: string; desc: string }[];
  placements: { location: string; reason: string }[];
  faqs: { question: string; answer: string }[];
}
```

### Adding a new industry page
1. Create `client/src/pages/cctv-for-[industry].tsx` — pass unique props to `<IndustryCCTVTemplate>`
2. Add `lazy(() => import(...))` and `<Route>` in `client/src/App.tsx`
3. Add URL to `server/routes.ts` sitemap at priority `0.92`, changefreq `weekly`
4. Add to `CCTV_INDUSTRIES` array in `client/src/components/layout/navigation.tsx`
5. Add to `INDUSTRIES` constant inside `industry-cctv-template.tsx`
Everything else (meta, schemas, breadcrumbs, internal links, AI discoverability) inherits automatically.

---

## Near-Me Intent Page Template (`NearMeTemplate`)

File: `client/src/components/near-me-template.tsx`

Accepts `serviceType: "electric-fence" | "cctv-installation" | "cctv-camera-service"` and renders 9 sections with full schema suite (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList 4-level, ItemList, ImageObject, WebPage, WebSite + SearchAction). Priority 0.93/weekly in sitemap.

---

## God-Tier SEO Features (on every city + pillar + near-me + industry page)

Each page emits 8–10 rich JSON-LD schemas:

1. **Organization** — logo (ImageObject 512×512), legalName, foundingDate, slogan, contactPoint, sameAs (Google Business + Maps), areaServed array
2. **LocalBusiness** (multi-type: `LocalBusiness` + `ProfessionalService` + `HomeAndConstructionBusiness`) — full address, geo coordinates (31.301145° N, 75.584029° E), hasMap, openingHoursSpecification (per-day), serviceArea (GeoCircle 200km), aggregateRating (4.9 / 5, 215+ reviews)
3. **WebSite** — with `SearchAction` for sitelinks search box
4. **Service** — with aggregateRating, OfferCatalog (3 packages with INR prices), audience targeting
5. **Product** (industry pages only) — industry-specific CCTV solution with INR pricing
6. **HowTo** — 5-step installation process (city/pillar pages)
7. **FAQPage** — all page-specific FAQs
8. **BreadcrumbList** — 4 levels
9. **WebPage** — with `speakable` (h1, h2, .speakable) and `dateModified` (auto-updated)
10. **ItemList** — links all related pages (cities / industries)
11. **ImageObject** — for page primary image

### On-page SEO elements
- Canonical URL on every page (`SEOHead` component)
- 4-level visual breadcrumb (Home → Services → Pillar → City/Industry)
- H1 with descriptive sub-line under it
- 4-pill trust strip in hero (4.9/5 stars · 7+ years · 3300+ installations / 2-year warranty · free site visit)
- Visible Customer Reviews section (city pages)
- Service Snapshot quick-specs table (city pages)
- City-specific / industry-specific FAQs
- Internal links: page → pillar + related pages cross-links
- AI discoverability paragraph ("Kirpal Securities provides professional … in {city/industry} …")
- `<article itemScope itemType="Service">` microdata wrapper

### Infrastructure
- `server/routes.ts` — dynamic sitemap at `/sitemap.xml` (auto-includes live blog posts + all static pages)
- `client/public/robots.txt` — allows full SEO cluster; explicitly disallows `/admin`, `/api/`, 2 old static HTML stubs; blocks AhrefsBot/SemrushBot/MJ12bot/DotBot
- `client/index.html` — base `<title>` + `<meta description>` updated; `<link rel="sitemap">` present
- Google Maps embed on `/contact` uses verified Kirpal Securities place ID (`0x391a5b0a565f8d75:0xe85e41fb52991cb2`)
- Google Business Profile linked in `BUSINESS_INFO.sameAs` and `hasMap` for entity consolidation

### Sitemap priority table
| Page type | Priority | Changefreq |
|---|---|---|
| Homepage | 1.0 | weekly |
| Electric Fence pillar | 0.95 | weekly |
| CCTV Camera pillar | 0.95 | weekly |
| Near-me intent pages (3) | 0.93 | weekly |
| Industry CCTV pages (6) | 0.92 | weekly |
| Electric Fence city pages (24) | 0.9 | weekly |
| CCTV city pages (18) | 0.9 | weekly |
| Services / Packages / Contact | 0.8–0.9 | monthly |
| Blog posts | 0.7 | monthly |
| Privacy / Terms | 0.3 | yearly |

---

# Notable Conventions

- **No emojis anywhere in the UI** — all visual symbols use `lucide-react` icons. WhatsApp message templates use plain bracketed labels (`*Customer Details:*`) instead of emojis.
- **`BUSINESS_INFO` is the single source of truth** for company name, address, geo, hours, payment, sameAs, etc. Both Electric Fence and CCTV schema builders import it from `client/src/lib/electric-fence-cities.ts`.
- **`SEOHead` component** (`client/src/components/seo-head.tsx`) handles `<title>`, meta description, canonical, Open Graph, Twitter Card, geo meta, robots directives, and JSON-LD injection on every page. Fallback LocalBusiness schema (used on pages without custom structuredData) uses 4.9/215 aggregateRating and lists all 18 Punjab cities in areaServed.
- **Forbidden edits**: `package.json`, `vite.config.ts`, `server/vite.ts`, `drizzle.config.ts`.
- **PC desktop layout must not change** — only safe responsive additions allowed; hero spacing was reduced from `py-20` to `py-12 sm:py-16 md:py-20` so trust pills don't push CTAs below the fold on mobile.
- **Aggregated rating values**: always `4.9 / 5` with `215+` reviews across all schemas. Do not use 4.8 or 150.
- **Geo coordinates**: always `31.301145, 75.584029` — these are the verified coordinates from the Google Business Profile. Do not use the approximate `31.3260, 75.5762`.

# External Dependencies

- **Database**: Neon serverless PostgreSQL
- **UI Primitives**: Radix UI
- **Fonts**: Google Fonts (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)
- **Icons**: lucide-react (exclusive icon system)
- **Image Hosting**: Unsplash for stock service photography; local `attached_assets/` for branded photos
- **Maps**: Google Maps embed (verified place ID for Kirpal Securities)
- **Google Business Profile**: https://share.google/bklVf9NcFe0X4ovIn
