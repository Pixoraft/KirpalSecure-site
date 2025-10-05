import { Link } from "wouter";
import { Video, Home, Fingerprint, Network, Phone, Wrench, CheckCircle, Zap, Shield, Award } from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import cctvImage from "@assets/image_1759656714453.png";
import homeSecurityImage from "@assets/image_1759656678518.png";
import biometricImage from "@assets/image_1759656669660.png";
import networkingImage from "@assets/image_1759656662799.png";
import electricFencingImage from "@assets/image_1759656687097.png";

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Security Services Jalandhar | Kirpal Securities"
        description="Complete security services in Jalandhar: CCTV installation, electric fencing, biometric systems, networking and intercom. Professional installation with warranty."
        keywords="security services Jalandhar, CCTV installation Punjab, electric fence installation, biometric systems, video door phone, intercom systems, networking solutions, fire alarm installation"
        image="https://kirpalsecurities.com/services-security.jpg"
        url="https://kirpalsecurities.com/services"
        type="website"
      />

      {/* Services Header */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Security Services in Hoshiarpur, Jalandhar</h1>
          <p className="text-xl max-w-3xl mx-auto">Complete CCTV camera installation, electric fence, networking, intercom, biometric devices, fire alarm systems, and technical support. Laptop/PC/Printer repair with door-to-door service.</p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* CCTV & Security Cameras */}
          <div className="mb-16" data-testid="section-cctv">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={cctvImage} 
                  alt="CCTV and security camera installation services" 
                  className="w-full h-[500px] object-cover object-left-top" 
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
              <div className="lg:order-2 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={homeSecurityImage} 
                  alt="Home security system with CCTV cameras" 
                  className="w-full h-[500px] object-cover object-left-top" 
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
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={biometricImage} 
                  alt="Biometric access control and fingerprint scanner devices" 
                  className="w-full h-[500px] object-cover object-left-top" 
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
              <div className="lg:order-2 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={networkingImage} 
                  alt="Professional networking solutions and equipment installation" 
                  className="w-full h-[500px] object-cover object-left-top" 
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

          {/* KIRPAL SECURITIES Electric Fencing - Highlighted Section */}
          <div className="mb-16 bg-gradient-to-r from-brand-red to-red-700 rounded-2xl p-8 text-white" data-testid="section-electric-fencing">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-white/20 rounded-lg p-6 mb-6">
                  <h2 className="text-4xl font-bold mb-4 flex items-center">
                    <Zap className="text-yellow-300 mr-3" size={48} />
                    KIRPAL SECURITIES
                  </h2>
                  <p className="text-2xl font-semibold mb-2">Get Electric Fencing Installed By Most Trusted Company</p>
                  <div className="flex items-center text-lg">
                    <Shield className="text-yellow-300 mr-2" size={20} />
                    <span className="font-semibold">7+ Years Experience • 3300+ Installations • PAN INDIA</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-lg mb-3 text-yellow-300">Commercial Sites</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-2" size={14} />
                        MS Powder Coating Pole
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-2" size={14} />
                        S.S 304 Grade Pole
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-lg mb-3 text-yellow-300">Residential Sites</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-2" size={14} />
                        S.S 304 Grade Pole
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-2" size={14} />
                        MS Powder Coating Pole
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h5 className="font-semibold text-yellow-300 mb-3 flex items-center">
                      <CheckCircle className="text-yellow-300 mr-2" size={16} />
                      Fencing Types Available
                    </h5>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-0.5 mr-2" size={12} />
                        <span>Openable Gate Fencing - Perfect for vehicle access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-0.5 mr-2" size={12} />
                        <span>Straight Fencing - Continuous perimeter protection</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h5 className="font-semibold text-yellow-300 mb-3 flex items-center">
                      <Shield className="text-yellow-300 mr-2" size={16} />
                      Pole Material Options
                    </h5>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-0.5 mr-2" size={12} />
                        <span>MS Powder Coating Pole - Durable & cost-effective</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-0.5 mr-2" size={12} />
                        <span>S.S 304 Grade Pole - Premium corrosion resistance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-bold text-xl mb-4 text-yellow-300 flex items-center">
                    <Shield className="text-yellow-300 mr-3" size={24} />
                    Why Choose KIRPAL SECURITIES?
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-3 flex-shrink-0" size={16} />
                        <div>
                          <span className="font-semibold text-white">Leading Manufacturer</span>
                          <p className="text-xs text-gray-300">North India's biggest solar electric fencing company</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-3 flex-shrink-0" size={16} />
                        <div>
                          <span className="font-semibold text-white">Expert Team</span>
                          <p className="text-xs text-gray-300">Experienced engineers, technicians and after sales executives</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-3 flex-shrink-0" size={16} />
                        <div>
                          <span className="font-semibold text-white">Service Network</span>
                          <p className="text-xs text-gray-300">Complete spare and service network for quick service</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-3 flex-shrink-0" size={16} />
                        <div>
                          <span className="font-semibold text-white">PAN INDIA Reach</span>
                          <p className="text-xs text-gray-300">Based in Jalandhar, Punjab with installations across India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src={electricFencingImage} 
                  alt="Electric fencing installation by KIRPAL SECURITIES" 
                  className="w-full h-[500px] object-cover object-left-top" 
                  data-testid="img-electric-fencing"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <button 
                    className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg w-full"
                    data-testid="button-get-electric-fencing-quote"
                    onClick={() => {
                      // Trigger custom event to open query form with electric fencing pre-selected
                      window.dispatchEvent(new CustomEvent('openQueryForm', {
                        detail: {
                          serviceType: 'Electric Fencing Installation',
                          message: 'I am interested in KIRPAL SECURITIES electric fencing installation. Please provide detailed pricing for:'
                        }
                      }));
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8" data-testid="section-intercom">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Phone className="text-brand-red mr-3" size={32} />
                Intercom & Video Door Phones
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Intercom Systems</li>
                <li>• Video Door Phones</li>
                <li>• Multi-Unit Systems</li>
                <li>• Wireless Options</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-8" data-testid="section-repair">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Wrench className="text-brand-red mr-3" size={32} />
                Technical Support & Repair
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Laptop/Computer Repairing</li>
                <li>• Printer Repairing</li>
                <li>• Door-to-door Service</li>
                <li>• Laptop Accessories</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-8" data-testid="section-fire-electric">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="text-brand-red mr-3" size={32} />
                Fire Alarm & Electric Fence
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fire Alarm Systems</li>
                <li>• Electric Fence Installation</li>
                <li>• Security Perimeter Solutions</li>
                <li>• Emergency Alert Systems</li>
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
