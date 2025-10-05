import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Video, Home, Fingerprint, Network, Phone, Wrench, 
  Shield, Award, Clock, Users, Star, Quote, 
  CheckCircle, ArrowRight, Play, Zap, Eye, Lock,
  MessageCircle, IndianRupee
} from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { FloatingQueryButton } from "@/components/floating-query-button";
import CountUp from "react-countup";
import { ProductData } from "@/types/product";
import productData from "@/data/products.json";
import { cctvPackages, CCTVPackage } from "@/data/packages";

const data = productData as ProductData;

// Hero banner slides data
const heroBannerSlides = [
  {
    id: 0,
    title: "KIRPAL SECURITIES",
    subtitle: "⚡ ELECTRIC FENCING SPECIALISTS ⚡",
    description: "North India's biggest solar electric fencing company • 7+ Years Experience • 3300+ Installations PAN INDIA • Most Trusted Electric Fencing Installation",
    backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    ctaText: "⚡ Buy Now",
    isElectricFencing: true
  },
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
              {heroBannerSlides[currentSlide].isElectricFencing && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 animate-pulse" />
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
                  <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-ping delay-300" />
                  <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-500" />
                </motion.div>
              )}
              
              <motion.h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-display leading-tight ${
                  heroBannerSlides[currentSlide].isElectricFencing 
                    ? 'text-yellow-200 drop-shadow-2xl' 
                    : ''
                }`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {heroBannerSlides[currentSlide].title}
              </motion.h2>
              
              <motion.p
                className={`text-lg sm:text-xl md:text-2xl mb-3 font-semibold ${
                  heroBannerSlides[currentSlide].isElectricFencing 
                    ? 'text-yellow-300 drop-shadow-lg' 
                    : 'text-blue-200'
                }`}
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
                {heroBannerSlides[currentSlide].isElectricFencing ? (
                  <button 
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('openQueryForm', {
                        detail: {
                          serviceType: 'Electric Fencing Installation',
                          message: 'I am interested in KIRPAL SECURITIES electric fencing installation. Please provide detailed pricing and timeline information.'
                        }
                      }));
                    }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black px-6 sm:px-8 py-3 text-base sm:text-lg font-bold rounded-xl inline-flex items-center group shadow-2xl transform hover:scale-105 transition-all"
                    data-testid="banner-electric-fencing-cta"
                  >
                    {heroBannerSlides[currentSlide].ctaText}
                    <Zap className="ml-2 transition-transform group-hover:rotate-12" size={18} />
                  </button>
                ) : (
                  <Link 
                    href="/services"
                    className="btn-modern px-6 sm:px-8 py-3 text-base sm:text-lg font-bold rounded-xl inline-flex items-center group"
                    data-testid="banner-cta-button"
                  >
                    {heroBannerSlides[currentSlide].ctaText}
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                  </Link>
                )}
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

// Featured Products Slider Component
function FeaturedProductsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const featuredProducts = data.products.filter(product => product.featured);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {featuredProducts.map((product) => {
            const category = data.categories.find(cat => cat.id === product.category);
            const savings = product.originalPrice - product.price;
            const savingsPercent = Math.round((savings / product.originalPrice) * 100);

            return (
              <div key={product.id} className="w-full flex-shrink-0 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative h-80 md:h-96">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <div className="bg-yellow-500 text-black font-bold px-3 py-2 rounded-full text-sm flex items-center">
                            <Star className="mr-1" size={16} />
                            Featured
                          </div>
                        </div>
                        {savingsPercent > 0 && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-red-500 text-white font-bold px-3 py-2 rounded-full text-sm">
                              {savingsPercent}% OFF
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-500">{category?.name}</span>
                          <div className="flex items-center">
                            <Star className="text-yellow-500 fill-current" size={16} />
                            <span className="text-sm font-medium ml-1">{product.rating}/5</span>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                          {product.name}
                        </h3>
                        
                        <p className="text-gray-600 text-base mb-6">
                          {product.shortDescription}
                        </p>
                        
                        <div className="mb-6">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl md:text-4xl font-bold text-green-600">
                              ₹{product.price.toLocaleString()}
                            </span>
                            {savings > 0 && (
                              <span className="text-lg text-gray-500 line-through">
                                ₹{product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          {savings > 0 && (
                            <p className="text-green-600 font-medium">
                              Save ₹{savings.toLocaleString()} ({savingsPercent}% off)
                            </p>
                          )}
                        </div>
                        
                        <button
                          onClick={() => window.location.href = `/product/${product.id}`}
                          className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
                          data-testid={`buy-now-featured-${product.id}`}
                        >
                          Buy Now
                          <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      {featuredProducts.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-10"
            data-testid="featured-slider-prev"
          >
            <ArrowRight className="rotate-180" size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-10"
            data-testid="featured-slider-next"
          >
            <ArrowRight size={24} />
          </button>
        </>
      )}
      
      {/* Slide Indicators */}
      {featuredProducts.length > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-brand-red w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              data-testid={`featured-indicator-${index}`}
            />
          ))}
        </div>
      )}
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
        title="Security Solutions Jalandhar | Kirpal Securities"
        description="Professional CCTV installation, electric fencing, biometric systems and home security in Jalandhar. 500+ installations, 2-year warranty. Call 7009154711."
        keywords="security solutions Jalandhar, CCTV installation Jalandhar, electric fence Punjab, biometric systems Jalandhar, home security Jalandhar, surveillance cameras Punjab, security company Jalandhar"
        image="https://kirpalsecurities.com/hero-security-team.jpg"
        url="https://kirpalsecurities.com"
        type="website"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden max-w-full -mt-16 sm:-mt-20 pt-16 sm:pt-20">
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
      

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-xl sm:rounded-2xl shadow-glow flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="text-white" size={24} />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-red mb-1 sm:mb-2">
                {statsInView && <CountUp end={500} duration={2.5} />}+
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-xl sm:rounded-2xl shadow-glow flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-red mb-1 sm:mb-2">
                {statsInView && <CountUp end={1200} duration={2.5} />}+
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Security Systems Installed</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-xl sm:rounded-2xl shadow-glow flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="text-white" size={24} />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-red mb-1 sm:mb-2">
                {statsInView && <CountUp end={5} duration={2.5} />}+
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-xl sm:rounded-2xl shadow-glow flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-red mb-1 sm:mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Support Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 text-display">
              Featured <span className="text-gradient">Products</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Discover our premium security products with exclusive deals
            </p>
          </motion.div>

          <FeaturedProductsSlider />
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="btn-modern px-8 py-4 text-lg font-bold rounded-xl inline-flex items-center group shadow-lg hover:shadow-xl"
              data-testid="button-view-all-products"
            >
              View All Products
              <ArrowRight className="ml-3 transition-transform group-hover:translate-x-1" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Fence Wiring Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-red to-red-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
                    <Zap className="text-yellow-300 mr-3" size={40} />
                    Electric Fence Installation
                  </h2>
                  <p className="text-xl md:text-2xl font-semibold mb-3">Professional Perimeter Security Solutions</p>
                  <div className="flex items-center text-base md:text-lg">
                    <Shield className="text-yellow-300 mr-2" size={20} />
                    <span className="font-semibold">7+ Years Experience • 3300+ Installations • PAN INDIA</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                    <h4 className="font-bold text-lg mb-3 text-yellow-300">Pole Material Options</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-2 flex-shrink-0" size={14} />
                        <span>MS Powder Coating Pole - Durable & cost-effective</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-2 flex-shrink-0" size={14} />
                        <span>S.S 304 Grade Pole - Premium corrosion resistance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                    <h4 className="font-bold text-lg mb-3 text-yellow-300">Fencing Types</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-2 flex-shrink-0" size={14} />
                        <span>Openable Gate Fencing - Vehicle access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-yellow-300 mt-1 mr-2 flex-shrink-0" size={14} />
                        <span>Straight Fencing - Continuous protection</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-red font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
                    data-testid="button-fence-learn-more"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('openQueryForm', {
                        detail: {
                          serviceType: 'Electric Fencing Installation',
                          message: 'I am interested in KIRPAL SECURITIES electric fencing installation. Please provide detailed pricing and timeline information.'
                        }
                      }));
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
                    data-testid="button-fence-contact"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="font-bold text-2xl mb-4 text-yellow-300">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-yellow-300 mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-white">Leading Manufacturer</p>
                        <p className="text-sm text-gray-200">North India's biggest solar electric fencing company</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-yellow-300 mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-white">Expert Team</p>
                        <p className="text-sm text-gray-200">Experienced engineers and technicians</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-yellow-300 mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-white">Complete Service Network</p>
                        <p className="text-sm text-gray-200">Spare parts and after-sales support</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-yellow-300 mt-1 mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-white">PAN INDIA Reach</p>
                        <p className="text-sm text-gray-200">Based in Jalandhar with installations across India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 text-display px-4">
              Professional <span className="text-gradient">Security Solutions</span> in Jalandhar
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Leading CCTV installation & home security systems provider in Jalandhar, Punjab. Expert installation, 24/7 support, and the latest security technology for homes and businesses.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                className="card-modern p-4 sm:p-6 lg:p-8 group hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`card-service-${index}`}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={20} />
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-brand-red font-semibold hover:text-brand-red-dark group/link text-sm sm:text-base"
                  data-testid={`link-service-${index}`}
                >
                  Learn More
                  <ArrowRight className="ml-2 transition-transform group-hover/link:translate-x-1" size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Customer Reviews */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 text-display px-4">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Real testimonials from 500+ satisfied customers across Jalandhar who trust us for their security needs
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


      {/* Package Offers Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 text-display px-4">
              Special <span className="text-gradient">Package Offers</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choose from our exclusive security packages designed for your needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {cctvPackages.slice(0, 3).map((pkg, index) => {
              const savings = pkg.originalPrice - pkg.discountedPrice;
              const savingsPercent = Math.round((savings / pkg.originalPrice) * 100);
              const colors = ["from-blue-500 to-cyan-500", "from-green-500 to-emerald-500", "from-purple-500 to-pink-500"];
              const icons = [Video, Home, Shield];
              const isPopular = index === 1; // middle package is popular
              
              return (
                <motion.div
                  key={pkg.id}
                  className={`card-modern p-4 sm:p-6 lg:p-8 relative group hover-lift h-full flex flex-col ${
                    isPopular ? 'ring-2 ring-brand-red sm:scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`package-${pkg.id}`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 w-max">
                      <span className="bg-gradient-primary text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${colors[index]} rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    {index === 0 && <Video className="text-white" size={24} />}
                    {index === 1 && <Home className="text-white" size={24} />}
                    {index === 2 && <Shield className="text-white" size={24} />}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-3 sm:mb-4">{pkg.name}</h3>
                  
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-red">₹{pkg.discountedPrice.toLocaleString()}</span>
                      <div className="flex flex-col items-center sm:items-start">
                        <span className="text-sm sm:text-base lg:text-lg text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm text-green-600 font-semibold">Save ₹{savings.toLocaleString()}</span>
                          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-bold">{savingsPercent}% OFF</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" size={14} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <Link 
                      href="/contact" 
                      className={`block w-full text-center py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all shadow-lg ${
                        isPopular 
                          ? 'bg-gradient-primary text-white hover:bg-gradient-secondary hover:shadow-xl' 
                          : 'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white hover:shadow-xl'
                      }`}
                      data-testid={`package-button-${index}`}
                    >
                      Choose Package
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* View More Packages Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/packages"
              className="btn-modern px-8 py-4 text-lg font-bold rounded-xl inline-flex items-center group shadow-lg hover:shadow-xl"
              data-testid="button-view-more-packages"
            >
              View All Package Deals
              <ArrowRight className="ml-3 transition-transform group-hover:translate-x-1" size={20} />
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              Explore our complete range of CCTV packages and security solutions
            </p>
          </motion.div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 text-display px-4">
              Ready to Secure Your <span className="text-gradient">Future</span>?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed px-4">
              Get a free security consultation and customized quote within 24 hours
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
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
              className="bg-brand-red hover:bg-red-700 text-white px-12 py-4 text-xl font-bold rounded-xl inline-flex items-center group shadow-lg hover:shadow-xl transition-all"
              data-testid="button-get-free-quote"
            >
              Buy Now
              <Lock className="ml-3 transition-transform group-hover:rotate-12" size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
