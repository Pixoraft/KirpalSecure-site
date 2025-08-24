import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Video, Home, Fingerprint, Network, Phone, Wrench, 
  Shield, Award, Clock, Users, Star, Quote, 
  CheckCircle, ArrowRight, Play, Zap, Eye, Lock
} from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { FloatingQueryButton } from "@/components/floating-query-button";
import CountUp from "react-countup";

// Hero banner slides data
const heroBannerSlides = [
  {
    id: 1,
    title: "Advanced CCTV Systems",
    subtitle: "Professional Security Solutions",
    description: "High-definition surveillance with AI-powered monitoring and mobile app access",
    backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    ctaText: "View CCTV Services"
  },
  {
    id: 2,
    title: "Smart Home Automation",
    subtitle: "Control Your World",
    description: "Integrated smart locks, sensors, and automated security systems for modern homes",
    backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    ctaText: "Explore Smart Home"
  },
  {
    id: 3,
    title: "Biometric Access Control",
    subtitle: "Future-Ready Security",
    description: "Fingerprint and facial recognition systems for secure access management",
    backgroundImage: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    ctaText: "Learn More"
  },
  {
    id: 4,
    title: "24/7 Professional Support",
    subtitle: "Expert Installation & Service",
    description: "Certified technicians providing installation, maintenance, and repair services",
    backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    ctaText: "Contact Support"
  }
];

// Hero Banner Slider Component
function HeroBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${heroBannerSlides[currentSlide].backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white w-full">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-display leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {heroBannerSlides[currentSlide].title}
              </motion.h2>
              
              <motion.p
                className="text-lg sm:text-xl md:text-2xl mb-3 font-semibold text-blue-200"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {heroBannerSlides[currentSlide].subtitle}
              </motion.p>
              
              <motion.p
                className="text-base sm:text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {heroBannerSlides[currentSlide].description}
              </motion.p>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link 
                  href="/services"
                  className="btn-modern px-6 sm:px-8 py-3 text-base sm:text-lg font-bold rounded-xl inline-flex items-center group"
                  data-testid="banner-cta-button"
                >
                  {heroBannerSlides[currentSlide].ctaText}
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroBannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            data-testid={`banner-slide-indicator-${index}`}
          />
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroBannerSlides.length) % heroBannerSlides.length)}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-20"
        data-testid="banner-prev-button"
      >
        <ArrowRight className="rotate-180" size={18} />
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroBannerSlides.length)}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-20"
        data-testid="banner-next-button"
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

// Mock reviews data - changes daily
const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    text: "Excellent CCTV installation service! The team was professional and the quality is outstanding. Highly recommended for anyone in Jalandhar.",
    service: "CCTV Installation",
    date: "2025-01-20",
    verified: true
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    text: "Amazing biometric system installation. The face recognition works perfectly and the team explained everything clearly.",
    service: "Biometric Systems",
    date: "2025-01-18",
    verified: true
  },
  {
    id: 3,
    name: "Manpreet Singh",
    rating: 5,
    text: "Best security service in Jalandhar! Quick response, professional work, and great after-sales support. Very satisfied with home security system.",
    service: "Home Security",
    date: "2025-01-15",
    verified: true
  },
  {
    id: 4,
    name: "Sunita Devi",
    rating: 5,
    text: "The networking solution provided by Kirpal Securities is excellent. Internet connectivity is now stable throughout our office.",
    service: "Network Setup",
    date: "2025-01-12",
    verified: true
  },
  {
    id: 5,
    name: "Amit Gupta",
    rating: 5,
    text: "Professional laptop repair service. Fixed my laptop within 24 hours and the price was very reasonable. Thank you!",
    service: "Laptop Repair",
    date: "2025-01-10",
    verified: true
  }
];

export default function HomePage() {
  const [currentReview, setCurrentReview] = useState(0);
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Rotate reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEOHead
        title="Kirpal Securities - Professional Security Solutions in Jalandhar"
        description="Kirpal Securities provides professional security solutions including CCTV cameras, home security systems, biometric devices, networking, and repair services in Jalandhar."
        keywords="security cameras, home security, biometric devices, networking, CCTV installation, Jalandhar security services"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden max-w-full">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-red-dark to-gray-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements - properly contained */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-20 sm:h-20 border border-white/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white/20 rounded-lg"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-8 sm:left-16 w-8 h-8 sm:w-12 sm:h-12 bg-white/5 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ transformOrigin: 'center' }}
          />
        </div>

        
        {/* Hero Banner Slider */}
        <HeroBannerSlider />
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>
      
      {/* Floating Query Button */}
      <FloatingQueryButton />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl shadow-glow flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <div className="text-4xl font-black text-brand-red mb-2">
                {statsInView && <CountUp end={500} duration={2.5} />}+
              </div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl shadow-glow flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <div className="text-4xl font-black text-brand-red mb-2">
                {statsInView && <CountUp end={1200} duration={2.5} />}+
              </div>
              <div className="text-gray-600 font-medium">Security Systems Installed</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl shadow-glow flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <div className="text-4xl font-black text-brand-red mb-2">
                {statsInView && <CountUp end={5} duration={2.5} />}+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl shadow-glow flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <div className="text-4xl font-black text-brand-red mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-display">
              Premium Security <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge technology meets professional expertise to deliver unparalleled security solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: "AI-Powered CCTV Systems",
                description: "Smart surveillance with facial recognition, motion detection, and cloud storage for 24/7 monitoring.",
                features: ["4K Ultra HD Quality", "Night Vision", "Mobile App Access", "AI Detection"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Home,
                title: "Smart Home Security",
                description: "Integrated home automation with smart locks, sensors, and alarm systems.",
                features: ["Smart Locks", "Motion Sensors", "Mobile Alerts", "Voice Control"],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Fingerprint,
                title: "Biometric Access Control",
                description: "Advanced fingerprint and facial recognition for secure access management.",
                features: ["Fingerprint Scanner", "Face Recognition", "Time Attendance", "Multi-User Support"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Network,
                title: "Enterprise Networking",
                description: "Professional network setup with advanced security and monitoring capabilities.",
                features: ["High-Speed Setup", "Security Firewall", "24/7 Monitoring", "Scalable Solutions"],
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Phone,
                title: "Video Intercom Systems",
                description: "Modern video door phones with smartphone integration and cloud recording.",
                features: ["HD Video Quality", "Two-Way Audio", "Mobile Integration", "Cloud Storage"],
                color: "from-teal-500 to-blue-500"
              },
              {
                icon: Wrench,
                title: "Technical Support & Repair",
                description: "Expert repair services for laptops, printers, and all security equipment.",
                features: ["Quick Diagnosis", "Quality Parts", "Warranty Service", "On-Site Support"],
                color: "from-indigo-500 to-purple-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="card-modern p-8 group hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`card-service-${index}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-brand-red font-semibold hover:text-brand-red-dark group/link"
                  data-testid={`link-service-${index}`}
                >
                  Learn More
                  <ArrowRight className="ml-2 transition-transform group-hover/link:translate-x-1" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-display">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from our satisfied customers across Jalandhar
            </p>
          </div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-modern p-8 md:p-12 text-center" data-testid={`review-${reviews[currentReview].id}`}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                    <Quote className="text-white" size={24} />
                  </div>
                  
                  <div className="flex justify-center mb-6">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={24} />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
                    "{reviews[currentReview].text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="text-white" size={20} />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 flex items-center">
                        {reviews[currentReview].name}
                        {reviews[currentReview].verified && (
                          <CheckCircle className="text-green-500 ml-2" size={16} />
                        )}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {reviews[currentReview].service} • {new Date(reviews[currentReview].date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Review indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentReview ? 'bg-brand-red scale-125' : 'bg-gray-300'
                  }`}
                  data-testid={`review-indicator-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-brand-red to-brand-red-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-display">
              Why Choose Kirpal Securities?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience the difference with our premium security solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Advanced Technology",
                description: "Latest AI-powered security systems with cloud integration"
              },
              {
                icon: Clock,
                title: "24/7 Monitoring",
                description: "Round-the-clock professional monitoring and support"
              },
              {
                icon: Award,
                title: "Certified Experts",
                description: "Licensed technicians with 5+ years of experience"
              },
              {
                icon: Zap,
                title: "Quick Installation",
                description: "Professional installation within 24-48 hours"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-display">
              Ready to Secure Your <span className="text-gradient">Future</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Get a free security consultation and customized quote within 24 hours
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card-modern p-8 text-center hover-lift" data-testid="contact-phones">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Call Our Experts</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <strong>NIKHIL:</strong>{' '}
                    <a 
                      href="tel:7009154711" 
                      className="text-brand-red font-bold hover:text-brand-red-dark transition-colors"
                      data-testid="phone-nikhil"
                    >
                      7009154711
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <strong>NAVEEN:</strong>{' '}
                    <a 
                      href="tel:9463687535" 
                      className="text-brand-red font-bold hover:text-brand-red-dark transition-colors"
                      data-testid="phone-naveen"
                    >
                      9463687535
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="card-modern p-8 text-center hover-lift" data-testid="contact-email">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Email Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Get detailed quotes and technical specifications
                </p>
                <a 
                  href="mailto:kirpalsecurities@gmail.com" 
                  className="text-brand-red font-bold hover:text-brand-red-dark transition-colors"
                  data-testid="email-contact"
                >
                  kirpalsecurities@gmail.com
                </a>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="btn-modern px-12 py-4 text-xl font-bold rounded-xl inline-flex items-center group"
              data-testid="button-get-free-quote"
            >
              Get Free Security Assessment
              <Lock className="ml-3 transition-transform group-hover:rotate-12" size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
