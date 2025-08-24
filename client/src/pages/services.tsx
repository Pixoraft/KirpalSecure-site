import { Link } from "wouter";
import { Video, Home, Fingerprint, Network, Phone, Wrench, CheckCircle } from "lucide-react";
import { SEOHead } from "@/components/seo-head";

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Professional Security Services in Jalandhar | CCTV, Biometric, Home Automation | Kirpal Securities"
        description="🎯 Complete Security Services in Jalandhar: CCTV installation, home security systems, biometric devices, networking, video intercom, laptop/printer repair. Expert installation with warranty. Get free quote!"
        keywords="security services Jalandhar, CCTV camera installation Punjab, home security system installation, biometric attendance system, video door phone system, access control system, surveillance camera installation, networking solutions business, laptop repair Jalandhar, printer service center"
        image="https://kirpalsecurities.com/services-security.jpg"
        url="https://kirpalsecurities.com/services"
        type="website"
      />

      {/* Services Header */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Security Services in Jalandhar</h1>
          <p className="text-xl max-w-3xl mx-auto">Complete CCTV installation, home security systems, biometric devices & networking solutions. Expert installation with warranty and 24/7 support in Punjab.</p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* CCTV & Security Cameras */}
          <div className="mb-16" data-testid="section-cctv">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Security camera installation" 
                  className="rounded-lg shadow-lg w-full h-auto" 
                  data-testid="img-cctv"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <Video className="text-brand-red mr-3" size={36} />
                  CCTV & Security Cameras
                </h2>
                <p className="text-lg text-gray-600 mb-6">Complete surveillance solutions with the latest IP and analog camera technology.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    IP Camera Systems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Analog CCTV Cameras
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Night Vision Cameras
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Remote Monitoring Setup
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Professional Installation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Home Security Systems */}
          <div className="mb-16" data-testid="section-home-security">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Home security system control panel" 
                  className="rounded-lg shadow-lg w-full h-auto" 
                  data-testid="img-home-security"
                />
              </div>
              <div className="lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <Home className="text-brand-red mr-3" size={36} />
                  Home Security Systems
                </h2>
                <p className="text-lg text-gray-600 mb-6">Comprehensive home protection with advanced alarm systems and smart monitoring.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Burglar Alarm Systems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Motion Sensors
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Door & Window Sensors
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Smart Home Integration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    24/7 Monitoring Options
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Biometric Devices */}
          <div className="mb-16" data-testid="section-biometric">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Biometric fingerprint scanner" 
                  className="rounded-lg shadow-lg w-full h-auto" 
                  data-testid="img-biometric"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <Fingerprint className="text-brand-red mr-3" size={36} />
                  Biometric Devices
                </h2>
                <p className="text-lg text-gray-600 mb-6">Advanced biometric access control for maximum security and convenience.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Fingerprint Scanners
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Face Recognition Systems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Time Attendance Systems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Access Control Integration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Multi-User Management
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Networking Solutions */}
          <div className="mb-16" data-testid="section-networking">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Network server room with equipment" 
                  className="rounded-lg shadow-lg w-full h-auto" 
                  data-testid="img-networking"
                />
              </div>
              <div className="lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <Network className="text-brand-red mr-3" size={36} />
                  Networking Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-6">Professional networking services for reliable and secure connectivity.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Network Setup & Configuration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Wi-Fi Installation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Network Security
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Router & Switch Configuration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-brand-red mt-1 mr-3" size={16} />
                    Network Maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8" data-testid="section-intercom">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Phone className="text-brand-red mr-3" size={32} />
                Intercom & Video Door Phone
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Audio/Video Intercoms</li>
                <li>• Multi-Unit Systems</li>
                <li>• Wireless Options</li>
                <li>• Integration with Security Systems</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-8" data-testid="section-repair">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Wrench className="text-brand-red mr-3" size={32} />
                Repair Services
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Laptop Repair & Service</li>
                <li>• Printer Repair</li>
                <li>• Hardware Upgrades</li>
                <li>• Software Installation</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Security Solution?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact us today for a free consultation and personalized quote.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-brand-red text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
            data-testid="button-get-free-quote"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
