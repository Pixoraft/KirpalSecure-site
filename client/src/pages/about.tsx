import { Award, Clock, Users, DollarSign, MapPin } from "lucide-react";
import { SEOHead } from "@/components/seo-head";

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Kirpal Securities - Trusted Security Solutions Provider in Jalandhar"
        description="Learn about Kirpal Securities, your trusted security solutions provider in Jalandhar. Professional team with years of experience in security systems installation and repair services."
        keywords="about Kirpal Securities, security company Jalandhar, professional security installation, security experts Punjab"
      />

      {/* About Header */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Kirpal Securities</h1>
          <p className="text-xl max-w-3xl mx-auto">Your trusted partner for comprehensive security solutions in Hoshiarpur, Jalandhar</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Kirpal Securities, we specialize in CCTV camera installation, electric fence systems, networking solutions, intercom systems, biometric devices, fire alarm systems, and comprehensive technical support. Located in Hoshiarpur, Jalandhar, we provide professional security solutions with exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We offer door-to-door laptop, PC, and printer repair services, along with complete CCTV packages backed by a 2-year warranty. Our team is committed to providing reliable, professional installations and maintenance services across Punjab.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center" data-testid="stat-projects">
                  <div className="text-3xl font-bold text-brand-red">500+</div>
                  <div className="text-gray-600">Security Systems Installed</div>
                </div>
                <div className="text-center" data-testid="stat-experience">
                  <div className="text-3xl font-bold text-brand-red">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center" data-testid="stat-warranty">
                  <div className="text-3xl font-bold text-brand-red">2 Years</div>
                  <div className="text-gray-600">CCTV Package Warranty</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional security technician at work" 
                className="rounded-lg shadow-lg w-full h-auto" 
                data-testid="img-technician"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kirpal Securities?</h2>
            <p className="text-xl text-gray-600">We stand out through our commitment to quality and customer satisfaction</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="feature-quality">
              <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Service</h3>
              <p className="text-gray-600">We use only the highest quality equipment and provide professional installation services.</p>
            </div>
            
            <div className="text-center" data-testid="feature-support">
              <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support to address any concerns or emergency situations.</p>
            </div>
            
            <div className="text-center" data-testid="feature-team">
              <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">Our certified technicians have extensive experience in security system installation.</p>
            </div>
            
            <div className="text-center" data-testid="feature-pricing">
              <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">Fair and transparent pricing with no hidden costs for all our services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">We proudly serve Hoshiarpur, Jalandhar and surrounding areas in Punjab</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div data-testid="primary-service-area">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Primary Service Area</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <MapPin className="text-brand-red mr-3" size={16} />
                    <span>Hoshiarpur</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-brand-red mr-3" size={16} />
                    <span>Jalandhar City</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-brand-red mr-3" size={16} />
                    <span>Urban Estate Phase 1 & 2</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-brand-red mr-3" size={16} />
                    <span>Model Town</span>
                  </div>
                </div>
              </div>
              <div data-testid="extended-service-area">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Extended Coverage</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <MapPin className="text-brand-red mr-3" size={16} />
                    <span>Phagwara</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-brand-red mr-3" size={16} />
                    <span>Kapurthala</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-brand-red mr-3" size={16} />
                    <span>Nakodar</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-brand-red mr-3" size={16} />
                    <span>Surrounding Areas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
