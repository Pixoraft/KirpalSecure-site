import { Award, Clock, Users, ShieldCheck, MapPin, Zap, Sun, Factory, Home, Warehouse } from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import officeImage from "@assets/image_1759655122560.png";

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Kirpal Securities - Electric Fence Installation Company Punjab"
        description="Kirpal Securities is a professional electric fence installation company serving Punjab. 7+ years of experience, 3300+ installations completed across Jalandhar, Ludhiana, Amritsar, Pathankot and more."
        keywords="Kirpal Securities Punjab, electric fence installation Punjab, electric fencing company Jalandhar, perimeter security Punjab, solar electric fence Punjab, agricultural fencing Punjab, electric fence Ludhiana, electric fence Amritsar"
        image="https://kirpalsecurities.in/about-team.jpg"
        url="https://kirpalsecurities.in/about"
        type="website"
      />

      {/* Section 1 — Page Intro */}
      <section className="bg-brand-red text-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">About Kirpal Securities</h1>
          <p className="text-base md:text-xl max-w-4xl mx-auto">
            Kirpal Securities is a professional security solutions company specializing in electric fence installation
            and perimeter security systems across Punjab. Our team provides reliable fencing solutions designed to
            protect farms, warehouses, factories and residential properties from unauthorized access.
          </p>
          <p className="text-lg max-w-4xl mx-auto mt-4 text-red-100">
            We serve customers throughout Punjab including major cities such as Jalandhar, Ludhiana, Amritsar,
            Pathankot, Hoshiarpur, Phagwara, Kapurthala and Nakodar.
          </p>
        </div>
      </section>

      {/* Section 2 — Our Mission */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                Our mission is to provide reliable and professional perimeter security solutions that help property
                owners protect their land, assets and businesses. We focus on high-quality installation, durable
                materials and dependable service across Punjab.
              </p>
              <p className="text-lg text-gray-600">
                Every installation we complete is backed by our commitment to precision craftsmanship and long-term
                reliability. From agricultural fields to industrial facilities, we tailor each electric fence system
                to meet the specific security needs of the property.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={officeImage}
                alt="Kirpal Securities - Professional Electric Fence Installation Team Punjab"
                className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm mx-auto h-64 md:h-80 object-cover"
                data-testid="img-office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Our Experience */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Our Experience in Security Installations</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              With over seven years of hands-on experience, Kirpal Securities has built a strong reputation as
              a trusted electric fence installation company across Punjab. Our team has successfully completed
              thousands of installations for farms, warehouses, industrial properties and residential locations.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
            <div className="text-center bg-white rounded-lg shadow p-4 md:p-6" data-testid="stat-experience">
              <div className="text-3xl md:text-4xl font-bold text-brand-red mb-1 md:mb-2">7+</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Years of Industry Experience</div>
            </div>
            <div className="text-center bg-white rounded-lg shadow p-4 md:p-6" data-testid="stat-installations">
              <div className="text-3xl md:text-4xl font-bold text-brand-red mb-1 md:mb-2">3300+</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Installations Completed</div>
            </div>
            <div className="text-center bg-white rounded-lg shadow p-4 md:p-6" data-testid="stat-technicians">
              <div className="text-3xl md:text-4xl font-bold text-brand-red mb-1 md:mb-2">Pro</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Installation Technicians</div>
            </div>
            <div className="text-center bg-white rounded-lg shadow p-4 md:p-6" data-testid="stat-solutions">
              <div className="text-3xl md:text-4xl font-bold text-brand-red mb-1 md:mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Reliable Security Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Our Expertise */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Expertise in Electric Fence Installation</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in a wide range of electric fencing solutions tailored to the unique requirements
              of each property type. All our systems use high-quality, durable materials for long-lasting
              perimeter protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-8 md:mb-12">
            <div className="bg-gray-50 rounded-lg p-6" data-testid="expertise-solar">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sun size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Solar Electric Fencing Systems</h3>
              <p className="text-gray-600">
                Energy-efficient solar-powered electric fence systems ideal for remote agricultural and rural
                properties across Punjab where grid power may not be accessible.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6" data-testid="expertise-agricultural">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Agricultural Perimeter Fencing</h3>
              <p className="text-gray-600">
                Protect farmland and crops from animal intrusions and unauthorized access with durable
                agricultural electric fence installations designed for Punjab's farming community.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6" data-testid="expertise-industrial">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Factory size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industrial Security Fencing</h3>
              <p className="text-gray-600">
                High-security electric fence systems for industrial premises, factories and manufacturing
                units requiring robust perimeter protection.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6" data-testid="expertise-warehouse">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Warehouse size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warehouse Perimeter Protection</h3>
              <p className="text-gray-600">
                Secure storage facilities and warehouses with electric fence systems that deter theft
                and unauthorized entry, protecting valuable goods and assets.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6" data-testid="expertise-residential">
              <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Home size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Residential Electric Fence Systems</h3>
              <p className="text-gray-600">
                Reliable residential electric fencing to enhance home security, providing peace of mind
                for families across Punjab's cities and rural communities.
              </p>
            </div>

            <div className="bg-brand-red text-white rounded-lg p-6" data-testid="expertise-materials">
              <h3 className="text-xl font-semibold mb-3">High-Quality Materials Used</h3>
              <ul className="space-y-2 text-red-100">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  MS powder coated poles
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  SS 304 stainless steel poles
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  High voltage energizers
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  Durable insulated wires
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Service Areas */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Areas We Serve</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Kirpal Securities provides electric fence installation services across the entire Punjab region.
              Our team frequently works in major cities and also serves surrounding towns and rural areas throughout Punjab.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-4 md:mb-6">
              <div data-testid="primary-service-area">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Major Cities</h3>
                <div className="space-y-3 text-gray-700">
                  {["Jalandhar", "Ludhiana", "Amritsar", "Pathankot"].map((city) => (
                    <div key={city} className="flex items-center">
                      <MapPin className="text-brand-red mr-3 flex-shrink-0" size={16} />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div data-testid="extended-service-area">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Additional Areas</h3>
                <div className="space-y-3 text-gray-700">
                  {["Hoshiarpur", "Phagwara", "Kapurthala", "Nakodar"].map((city) => (
                    <div key={city} className="flex items-center">
                      <MapPin className="text-brand-red mr-3 flex-shrink-0" size={16} />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-center border-t pt-6" data-testid="text-coverage-note">
              Installations are not limited to these cities — we serve all towns and rural areas across Punjab.
              Contact us to confirm availability in your location.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — Why Customers Trust Us */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Why Customers Trust Kirpal Securities</h2>
            <p className="text-base md:text-xl text-gray-600">We stand out through our commitment to quality, reliability and professional service</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
            <div className="text-center" data-testid="trust-engineers">
              <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Experienced Engineers</h3>
              <p className="text-gray-600 text-sm">Skilled installation engineers with deep expertise in electric fence systems.</p>
            </div>

            <div className="text-center" data-testid="trust-service">
              <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Service</h3>
              <p className="text-gray-600 text-sm">Reliable and professional service from consultation through to installation.</p>
            </div>

            <div className="text-center" data-testid="trust-materials">
              <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Durable Materials</h3>
              <p className="text-gray-600 text-sm">Only high-quality, weather-resistant materials used in every installation.</p>
            </div>

            <div className="text-center" data-testid="trust-security">
              <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Strong Perimeter Security</h3>
              <p className="text-gray-600 text-sm">Effective perimeter protection solutions proven across thousands of installations.</p>
            </div>

            <div className="text-center" data-testid="trust-support">
              <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Responsive Support</h3>
              <p className="text-gray-600 text-sm">Prompt after-installation support and service whenever you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Final Brand Message */}
      <section className="py-10 md:py-16 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Protecting Properties Across Punjab</h2>
          <p className="text-base md:text-xl text-red-100 mb-4">
            Kirpal Securities is committed to providing dependable electric fence installation services that help
            protect properties across Punjab. Whether securing agricultural land, industrial facilities or
            residential areas, our goal is to deliver reliable perimeter protection with professional
            installation and support.
          </p>
          <p className="text-lg text-red-100">
            With 7+ years of experience and 3300+ successful installations, we are Punjab's trusted name in
            electric fence security systems.
          </p>
        </div>
      </section>
    </>
  );
}
