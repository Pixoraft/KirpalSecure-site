import { Link } from "wouter";
import { Shield, MapPin, Mail, Phone, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="text-brand-red text-2xl mr-3" size={32} />
              <h3 className="text-2xl font-bold">KIRPAL SECURITIES</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Professional security solutions for homes and businesses in Jalandhar. 
              We provide comprehensive security systems, installation, and repair services.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="text-brand-red mr-2" size={16} />
                Urban Estate Ph. 2, Road Opp. Hotel Imperia Suites, Jalandhar
              </div>
              <div className="flex items-center">
                <Mail className="text-brand-red mr-2" size={16} />
                <a 
                  href="mailto:kirpalsecurities@gmail.com" 
                  className="hover:text-white"
                  data-testid="footer-email"
                >
                  kirpalsecurities@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-white transition-colors"
                  data-testid="footer-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-white transition-colors"
                  data-testid="footer-services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-white transition-colors"
                  data-testid="footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:text-white transition-colors"
                  data-testid="footer-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-medium flex items-center">
                  <Phone className="text-brand-red mr-2" size={16} />
                  NIKHIL
                </div>
                <a 
                  href="tel:7009154711" 
                  className="hover:text-white ml-6"
                  data-testid="footer-phone-nikhil"
                >
                  7009154711
                </a>
              </div>
              <div>
                <div className="font-medium flex items-center">
                  <Phone className="text-brand-red mr-2" size={16} />
                  NAVEEN
                </div>
                <a 
                  href="tel:9463687535" 
                  className="hover:text-white ml-6"
                  data-testid="footer-phone-naveen"
                >
                  9463687535
                </a>
              </div>
              <div className="text-sm text-brand-red font-medium flex items-center">
                <Clock className="mr-2" size={16} />
                24/7 Emergency Support
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Kirpal Securities. All rights reserved. | Professional Security Solutions in Jalandhar</p>
        </div>
      </div>
    </footer>
  );
}
