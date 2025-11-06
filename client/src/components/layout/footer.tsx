import { Link } from "wouter";
import { Shield, MapPin, Mail, Phone, Clock, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full"></div>
      </div>

      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/kirpal-logo.png" 
                  alt="Kirpal Securities Logo" 
                  className="h-16 w-auto"
                />
              </motion.div>
              
              <motion.p
                className="text-gray-300 mb-8 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Transforming security with cutting-edge technology and professional expertise. 
                Your trusted partner for complete peace of mind in Jalandhar.
              </motion.p>
              
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                  <MapPin className="text-brand-red mt-1 flex-shrink-0" size={18} />
                  <div className="text-gray-300">
                    <p className="font-medium">Urban Estate Ph. 2, Road Opp. Hotel Imperia Suites,</p>
                    <p>Aggarwal Dhaba Road, Jalandhar, Punjab</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                  <Mail className="text-brand-red flex-shrink-0" size={18} />
                  <a 
                    href="mailto:kirpalsecurities@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                    data-testid="footer-email"
                  >
                    kirpalsecurities@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home", testId: "footer-home" },
                  { href: "/services", label: "Services", testId: "footer-services" },
                  { href: "/about", label: "About Us", testId: "footer-about" },
                  { href: "/contact", label: "Contact", testId: "footer-contact" },
                  { href: "/privacy-policy", label: "Privacy Policy", testId: "footer-privacy" },
                  { href: "/terms-conditions", label: "Terms & Conditions", testId: "footer-terms" }
                ].map((link, index) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-brand-red transition-colors duration-300 flex items-center group"
                      data-testid={link.testId}
                    >
                      <span className="w-2 h-2 bg-brand-red rounded-full mr-3 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Contact Experts</h4>
              <div className="space-y-6">
                <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="font-semibold flex items-center mb-2 text-white">
                    <Phone className="text-brand-red mr-2" size={18} />
                    NIKHIL - Technical Lead
                  </div>
                  <a 
                    href="tel:7009154711" 
                    className="text-brand-red font-bold text-lg hover:text-brand-red-light transition-colors"
                    data-testid="footer-phone-nikhil"
                  >
                    7009154711
                  </a>
                </div>
                
                <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="font-semibold flex items-center mb-2 text-white">
                    <Phone className="text-brand-red mr-2" size={18} />
                    NAVEEN - Installation Head
                  </div>
                  <a 
                    href="tel:9463687535" 
                    className="text-brand-red font-bold text-lg hover:text-brand-red-light transition-colors"
                    data-testid="footer-phone-naveen"
                  >
                    9463687535
                  </a>
                </div>
                
                <div className="flex items-center text-sm bg-gradient-primary/20 text-white font-medium p-3 rounded-lg">
                  <Clock className="mr-2 text-brand-red" size={16} />
                  24/7 Emergency Support Available
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              <p>&copy; {currentYear} Kirpal Securities. All rights reserved.</p>
              <p className="text-sm mt-1">Professional Security Solutions • Licensed & Insured • Serving Jalandhar & Surrounding Areas</p>
              <p className="text-sm mt-2">
                by <a 
                  href="https://pixocraft.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-red hover:text-brand-red-light transition-colors font-semibold"
                  data-testid="footer-pixocraft"
                >
                  Pixocraft
                </a>
              </p>
            </div>
            
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-testid="scroll-to-top"
            >
              <ArrowUp className="text-white group-hover:animate-bounce" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary"></div>
    </footer>
  );
}
