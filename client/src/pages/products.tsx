import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";
import { 
  Video, 
  Shield, 
  Fingerprint, 
  Network, 
  Phone, 
  Zap, 
  Monitor, 
  Camera, 
  MessageCircle, 
  CheckCircle,
  Star
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: any;
  color: string;
}

const products: Product[] = [
  {
    id: "cctv-cameras",
    name: "CCTV Cameras",
    category: "Security",
    description: "High-quality surveillance cameras with day/night vision, audio recording, and 4K resolution support.",
    features: [
      "5MP & 3MP Resolution Options",
      "Day/Night Color + Audio",
      "Plastic & Metal Body Options",
      "Indoor & Outdoor Models",
      "Weather Resistant",
      "Remote Access via Mobile App"
    ],
    icon: Video,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "biometric-devices",
    name: "Biometric Devices",
    category: "Access Control",
    description: "Advanced fingerprint and facial recognition systems for secure access management and time attendance.",
    features: [
      "Fingerprint Scanner",
      "Face Recognition Technology",
      "Time Attendance System",
      "Multi-User Management",
      "Access Control Integration",
      "Real-time Monitoring"
    ],
    icon: Fingerprint,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "intercom-systems",
    name: "Intercom Systems",
    category: "Communication",
    description: "Audio and video intercom systems with door phone integration for residential and commercial use.",
    features: [
      "Audio/Video Intercoms",
      "Video Door Phones",
      "Multi-Unit Systems",
      "Wireless Options",
      "Mobile Integration",
      "Two-way Communication"
    ],
    icon: Phone,
    color: "from-teal-500 to-blue-500"
  },
  {
    id: "networking-solutions",
    name: "Networking Solutions",
    category: "Infrastructure",
    description: "Professional network setup with high-speed connectivity, security firewall, and monitoring capabilities.",
    features: [
      "High-Speed Network Setup",
      "Wi-Fi Installation",
      "Security Firewall",
      "Router & Switch Configuration",
      "Network Maintenance",
      "24/7 Monitoring"
    ],
    icon: Network,
    color: "from-orange-500 to-red-500"
  },
  {
    id: "fire-alarm-systems",
    name: "Fire Alarm Systems",
    category: "Safety",
    description: "Comprehensive fire detection and alarm systems with smoke sensors and emergency alert capabilities.",
    features: [
      "Smoke Detection Sensors",
      "Heat Detection Systems",
      "Emergency Alert Systems",
      "Automatic Fire Suppression",
      "Remote Monitoring",
      "Professional Installation"
    ],
    icon: Zap,
    color: "from-red-500 to-orange-500"
  },
  {
    id: "electric-fence",
    name: "Electric Fence",
    category: "Perimeter Security",
    description: "Electric fence systems for perimeter security with advanced monitoring and alert capabilities.",
    features: [
      "High-Voltage Deterrent",
      "Perimeter Protection",
      "Intrusion Detection",
      "Weather Resistant",
      "Low Maintenance",
      "Professional Installation"
    ],
    icon: Shield,
    color: "from-yellow-500 to-orange-500"
  }
];

function WhatsAppButton({ productName }: { productName: string }) {
  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in ${productName}. Please provide more details and help me get a quote.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/917009154711?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Button 
      onClick={handleWhatsAppClick}
      className="w-full bg-green-600 hover:bg-green-700 text-white"
      data-testid={`whatsapp-${productName.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <MessageCircle className="mr-2" size={16} />
      Get Quote on WhatsApp
    </Button>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 h-full" data-testid={`card-${product.id}`}>
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color}`}></div>
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-gray-100 text-gray-800">
            {product.category}
          </Badge>
        </div>
        
        <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl shadow-lg flex items-center justify-center mb-4`}>
          <product.icon className="text-white" size={24} />
        </div>
        
        <CardTitle className="text-xl font-bold text-gray-900">
          {product.name}
        </CardTitle>
        
        <CardDescription className="text-sm text-gray-600">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
            <Star className="text-yellow-500" size={12} />
            <span>Professional Installation & Support</span>
          </div>
        </div>
        
        <WhatsAppButton productName={product.name} />
      </CardContent>
    </Card>
  );
}


export default function ProductsPage() {

  return (
    <>
      <SEOHead
        title="Security Products | CCTV Cameras, Biometric Devices, Intercom Systems | Kirpal Securities"
        description="🔐 Professional security products in Hoshiarpur, Jalandhar: CCTV cameras, biometric devices, intercom systems, networking solutions, fire alarms & electric fence. Expert installation with warranty."
        keywords="security products Jalandhar, CCTV cameras Punjab, biometric devices, intercom systems, fire alarm systems, electric fence, networking solutions, security equipment"
        image="https://kirpalsecurities.com/security-products.jpg"
        url="https://kirpalsecurities.com/products"
        type="website"
      />

      {/* Products Header */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            High-quality security products and equipment for comprehensive protection. Professional installation and support in Hoshiarpur, Jalandhar.
          </p>
        </div>
      </section>


      {/* Product Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Security Products?</h2>
            <p className="text-xl text-gray-600">Professional security solutions with complete peace of mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center" data-testid="feature-quality">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">High Quality Equipment</h3>
              <p className="text-gray-600">Premium security products with latest technology and reliable performance.</p>
            </div>
            
            <div className="text-center" data-testid="feature-installation">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Installation</h3>
              <p className="text-gray-600">Professional installation and configuration by certified technicians.</p>
            </div>
            
            <div className="text-center" data-testid="feature-support">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support and maintenance services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Need Security Products?</h2>
          <p className="text-xl mb-8">Get expert consultation and quotes for all our security products.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const message = `Hi! I'm interested in your security products. Please help me choose the right solution for my needs.`;
                const encodedMessage = encodeURIComponent(message);
                const whatsappURL = `https://wa.me/917009154711?text=${encodedMessage}`;
                window.open(whatsappURL, '_blank');
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              data-testid="button-whatsapp-inquiry"
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp for Quote
            </Button>
            <Link href="/packages">
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-red px-8 py-3"
                data-testid="button-view-packages"
              >
                View CCTV Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}