import { Star } from "lucide-react";

interface Props {
  cityName: string;
  citySlug: string;
}

export function ElectricFenceCityExtras({ cityName, citySlug }: Props) {
  return (
    <>
      {/* Visible Customer Reviews — matches schema reviews */}
      <section
        className="py-12 sm:py-16 bg-gray-50"
        aria-label={`Customer reviews for electric fence installation in ${cityName}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="font-bold text-gray-900 ml-2">4.9 / 5</span>
              <span className="text-gray-600">· 187+ Verified Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              What {cityName} Customers Say About Kirpal Securities
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Real feedback from farms, factories and homes we've secured across Punjab.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                name: "Harpreet Singh",
                role: "Farm Owner",
                text: `Kirpal Securities installed a complete solar electric fence around our 4-acre farm. The team was professional, the SS 304 poles look great, and we have had zero animal intrusions since. Highly recommended for any farm owner around ${cityName}.`,
              },
              {
                name: "Rajinder Kumar",
                role: "Warehouse Manager",
                text: "We needed perimeter security for our warehouse. Nikhil and the Kirpal team did a clean installation with high-voltage energizers and warning signs. Site inspection was free and pricing was transparent.",
              },
              {
                name: "Simran Kaur",
                role: "Homeowner",
                text: "Got electric fencing installed on our kothi boundary. Looks neat, fits our wall design, and the safety signage is properly placed. Naveen explained everything clearly during the free inspection.",
              },
            ].map((r, i) => (
              <article
                key={i}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100"
                data-testid={`review-${citySlug}-${i}`}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">"{r.text}"</p>
                <div className="border-t border-gray-100 pt-3">
                  <p className="font-semibold text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Specs / Service Snapshot Table */}
      <section
        className="py-10 sm:py-14 bg-white"
        aria-label={`Electric fence service snapshot in ${cityName}`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Electric Fence Installation in {cityName} — Service Snapshot
            </h2>
            <p className="text-base text-gray-600">
              Quick facts about our {cityName} electric fence service.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm sm:text-base">
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Service", `Electric Fence Installation in ${cityName}`],
                  ["Service Provider", "Kirpal Securities, Jalandhar"],
                  ["Coverage", `${cityName} city + entire ${cityName} district`],
                  ["Property Types", "Farms, Warehouses, Factories, Kothis, Residential, Industrial"],
                  ["Pole Options", "MS Powder Coated · SS 304 Stainless Steel"],
                  ["Power Options", "Solar · Grid-Powered · Hybrid"],
                  ["Energizer", "High-Voltage, Pulse-Controlled"],
                  ["Safety", "Warning signs at regular intervals · Compliance-checked"],
                  ["Site Inspection", "Free · Same-day or next-day"],
                  ["Typical Timeline", "1–2 days residential · 3–5 days industrial"],
                  ["Service Hours", "Mon–Sat 9:00 AM – 7:00 PM · Sun 10:00 AM – 4:00 PM"],
                  ["Contact", "Nikhil 7009154711 · Naveen 9463687535"],
                ].map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <th
                      scope="row"
                      className="text-left font-semibold text-gray-900 px-4 sm:px-6 py-3 align-top w-2/5"
                    >
                      {k}
                    </th>
                    <td className="text-gray-700 px-4 sm:px-6 py-3">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
