import { Link } from "wouter";
import { Video, Home, Fingerprint, Network, Phone, Wrench } from "lucide-react";
import { SEOHead } from "@/components/seo-head";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Kirpal Securities - Professional Security Solutions in Jalandhar"
        description="Kirpal Securities provides professional security solutions including CCTV cameras, home security systems, biometric devices, networking, and repair services in Jalandhar."
        keywords="security cameras, home security, biometric devices, networking, CCTV installation, Jalandhar security services"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-red to-brand-red-light text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Security Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Complete security systems, CCTV installation, biometric devices, and networking solutions for your home and business in Jalandhar.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link 
                href="/services" 
                className="inline-block bg-white text-brand-red px-8 py-3 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                data-testid="button-our-services"
              >
                Our Services
              </Link>
              <Link 
                href="/contact" 
                className="inline-block border-2 border-white text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-white hover:text-brand-red transition-colors"
                data-testid="button-get-quote"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive security solutions for all your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow" data-testid="card-service-cctv">
              <div className="text-brand-red text-4xl mb-4">
                <Video size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3">CCTV & Security Cameras</h3>
              <p className="text-gray-600 mb-4">IP cameras, analog cameras, and complete surveillance systems for comprehensive security monitoring.</p>
              <Link 
                href="/services" 
                className="text-brand-red font-medium hover:text-brand-red-dark"
                data-testid="link-service-cctv"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow" data-testid="card-service-home">
              <div className="text-brand-red text-4xl mb-4">
                <Home size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Home Security Systems</h3>
              <p className="text-gray-600 mb-4">Complete home security solutions with alarms, sensors, and monitoring systems.</p>
              <Link 
                href="/services" 
                className="text-brand-red font-medium hover:text-brand-red-dark"
                data-testid="link-service-home"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow" data-testid="card-service-biometric">
              <div className="text-brand-red text-4xl mb-4">
                <Fingerprint size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Biometric Devices</h3>
              <p className="text-gray-600 mb-4">Advanced biometric access control systems for secure authentication and entry management.</p>
              <Link 
                href="/services" 
                className="text-brand-red font-medium hover:text-brand-red-dark"
                data-testid="link-service-biometric"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow" data-testid="card-service-networking">
              <div className="text-brand-red text-4xl mb-4">
                <Network size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Networking Solutions</h3>
              <p className="text-gray-600 mb-4">Professional networking setup, configuration, and maintenance for reliable connectivity.</p>
              <Link 
                href="/services" 
                className="text-brand-red font-medium hover:text-brand-red-dark"
                data-testid="link-service-networking"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow" data-testid="card-service-intercom">
              <div className="text-brand-red text-4xl mb-4">
                <Phone size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intercom & Video Door Phone</h3>
              <p className="text-gray-600 mb-4">Modern intercom systems and video door phones for enhanced communication and security.</p>
              <Link 
                href="/services" 
                className="text-brand-red font-medium hover:text-brand-red-dark"
                data-testid="link-service-intercom"
              >
                Learn More →
              </Link>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow" data-testid="card-service-repair">
              <div className="text-brand-red text-4xl mb-4">
                <Wrench size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Repair Services</h3>
              <p className="text-gray-600 mb-4">Professional repair services for laptops, printers, and other electronic devices.</p>
              <Link 
                href="/services" 
                className="text-brand-red font-medium hover:text-brand-red-dark"
                data-testid="link-service-repair"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-brand-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Secure Your Property?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 rounded-lg p-6" data-testid="contact-phones">
                <div className="text-2xl mb-4">
                  <Phone size={32} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us Now</h3>
                <p className="mb-2">
                  NIKHIL: <a 
                    href="tel:7009154711" 
                    className="font-semibold hover:text-gray-200"
                    data-testid="phone-nikhil"
                  >
                    7009154711
                  </a>
                </p>
                <p>
                  NAVEEN: <a 
                    href="tel:9463687535" 
                    className="font-semibold hover:text-gray-200"
                    data-testid="phone-naveen"
                  >
                    9463687535
                  </a>
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6" data-testid="contact-email">
                <div className="text-2xl mb-4">
                  <Wrench size={32} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p>
                  <a 
                    href="mailto:kirpalsecurities@gmail.com" 
                    className="font-semibold hover:text-gray-200"
                    data-testid="email-contact"
                  >
                    kirpalsecurities@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
