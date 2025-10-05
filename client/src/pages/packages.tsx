import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo-head";
import { 
  Video, 
  Shield, 
  Zap, 
  Clock, 
  Wrench, 
  CheckCircle, 
  MessageCircle, 
  Star,
  Monitor,
  HardDrive,
  Camera,
  Network
} from "lucide-react";

interface CCTVPackage {
  id: string;
  name: string;
  category: "silver" | "gold" | "hd";
  cameraCount: number;
  discountedPrice: number;
  originalPrice: number;
  features: string[];
  cameraType: string;
  nvr: string;
  hdd: string;
  wire: string;
  switch: string;
  maxSupport: string;
  warranty: string;
}

const cctvPackages: CCTVPackage[] = [
  {
    id: "silver-ip-4",
    name: "Silver IP Camera Set",
    category: "silver",
    cameraCount: 4,
    discountedPrice: 13000,
    originalPrice: 16999,
    features: [
      "5MP Silver Plastic Body (Day/Night Color + Audio)",
      "5 Channel NVR (4K Resolution)",
      "500GB Surveillance HDD",
      "100m CAT6 Wire Roll",
      "4-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 8MP"
    ],
    cameraType: "5MP Silver Plastic Body",
    nvr: "5 Channel NVR (4K)",
    hdd: "500GB Surveillance HDD",
    wire: "100m CAT6 Wire Roll",
    switch: "4-Port PoE Switch",
    maxSupport: "8MP",
    warranty: "2 Years"
  },
  {
    id: "silver-ip-8",
    name: "Silver IP Camera Set",
    category: "silver",
    cameraCount: 8,
    discountedPrice: 21000,
    originalPrice: 23999,
    features: [
      "8 Outdoor 5MP Silver Plastic Body (Day/Night Color + Audio)",
      "10 Channel NVR (4K Resolution)",
      "1TB Surveillance HDD",
      "100m CAT6 Wire Roll",
      "8-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 8MP"
    ],
    cameraType: "5MP Silver Plastic Body",
    nvr: "10 Channel NVR (4K)",
    hdd: "1TB Surveillance HDD",
    wire: "100m CAT6 Wire Roll",
    switch: "8-Port PoE Switch",
    maxSupport: "8MP",
    warranty: "2 Years"
  },
  {
    id: "gold-ip-4",
    name: "Gold IP Series",
    category: "gold",
    cameraCount: 4,
    discountedPrice: 14500,
    originalPrice: 18999,
    features: [
      "4 Outdoor 5MP Gold Metal Body (Day/Night Color + Audio)",
      "5 Channel NVR (4K Resolution)",
      "500GB Surveillance HDD",
      "100m CAT6 Wire Roll",
      "4-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 8MP"
    ],
    cameraType: "5MP Gold Metal Body",
    nvr: "5 Channel NVR (4K)",
    hdd: "500GB Surveillance HDD",
    wire: "100m CAT6 Wire Roll",
    switch: "4-Port PoE Switch",
    maxSupport: "8MP",
    warranty: "2 Years"
  },
  {
    id: "gold-ip-8",
    name: "Gold IP Series",
    category: "gold",
    cameraCount: 8,
    discountedPrice: 23000,
    originalPrice: 26999,
    features: [
      "8 Outdoor 5MP Gold Metal Body (Day/Night Color + Audio)",
      "10 Channel NVR (4K Resolution)",
      "1TB Surveillance HDD",
      "100m CAT6 Wire Roll",
      "8-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 8MP"
    ],
    cameraType: "5MP Gold Metal Body",
    nvr: "10 Channel NVR (4K)",
    hdd: "1TB Surveillance HDD",
    wire: "100m CAT6 Wire Roll",
    switch: "8-Port PoE Switch",
    maxSupport: "8MP",
    warranty: "2 Years"
  },
  {
    id: "silver-hd-4",
    name: "Silver HD Camera Setup",
    category: "hd",
    cameraCount: 4,
    discountedPrice: 10000,
    originalPrice: 12839,
    features: [
      "4 Outdoor 5MP Silver Plastic Body (Day/Night Color + Audio)",
      "4 Channel DVR",
      "500GB Surveillance HDD",
      "90m 3+1 Wire Roll",
      "4-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 5MP"
    ],
    cameraType: "5MP Silver Plastic Body",
    nvr: "4 Channel DVR",
    hdd: "500GB Surveillance HDD",
    wire: "90m 3+1 Wire Roll",
    switch: "4-Port PoE Switch",
    maxSupport: "5MP",
    warranty: "2 Years"
  },
  {
    id: "silver-hd-8",
    name: "Silver HD Camera Setup",
    category: "hd",
    cameraCount: 8,
    discountedPrice: 12500,
    originalPrice: 13839,
    features: [
      "8 Outdoor 5MP Silver Plastic Body (Day/Night Color + Audio)",
      "8 Channel DVR",
      "500GB Surveillance HDD",
      "90m 3+1 Wire Roll",
      "4-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 5MP"
    ],
    cameraType: "5MP Silver Plastic Body",
    nvr: "8 Channel DVR",
    hdd: "500GB Surveillance HDD",
    wire: "90m 3+1 Wire Roll",
    switch: "4-Port PoE Switch",
    maxSupport: "5MP",
    warranty: "2 Years"
  },
  {
    id: "gold-hd-8",
    name: "Gold HD Camera Setup",
    category: "hd",
    cameraCount: 8,
    discountedPrice: 13839,
    originalPrice: 14500,
    features: [
      "8 Outdoor 3MP Gold Metal Body (Day/Night Color + Audio)",
      "8 Channel DVR",
      "500GB Surveillance HDD",
      "90m 3+1 Wire Roll",
      "4-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 5MP"
    ],
    cameraType: "3MP Gold Metal Body",
    nvr: "8 Channel DVR",
    hdd: "500GB Surveillance HDD",
    wire: "90m 3+1 Wire Roll",
    switch: "4-Port PoE Switch",
    maxSupport: "5MP",
    warranty: "2 Years"
  }
];

function WhatsAppButton({ packageName, price }: { packageName: string; price: number }) {
  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in the ${packageName} for ₹${price.toLocaleString()}. Please provide more details and help me get a quote.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/917009154711?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Button 
      onClick={handleWhatsAppClick}
      className="w-full bg-green-600 hover:bg-green-700 text-white"
      data-testid={`whatsapp-${packageName.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <MessageCircle className="mr-2" size={16} />
      Buy Now on WhatsApp
    </Button>
  );
}

function PackageCard({ package: pkg }: { package: CCTVPackage }) {
  const categoryColors = {
    silver: "from-gray-500 to-gray-600",
    gold: "from-yellow-500 to-yellow-600",
    hd: "from-blue-500 to-blue-600"
  };

  const discountPercentage = Math.round(((pkg.originalPrice - pkg.discountedPrice) / pkg.originalPrice) * 100);

  return (
    <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 h-full" data-testid={`card-${pkg.id}`}>
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${categoryColors[pkg.category]}`}></div>
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className={`bg-gradient-to-r ${categoryColors[pkg.category]} text-white`}>
            {pkg.category.toUpperCase()} SERIES
          </Badge>
          {discountPercentage > 0 && (
            <Badge variant="destructive" className="animate-pulse">
              {discountPercentage}% OFF
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-xl font-bold text-gray-900">
          {pkg.name} - {pkg.cameraCount} Cameras
        </CardTitle>
        
        <CardDescription className="text-sm text-gray-600">
          Professional surveillance package with {pkg.cameraCount}-camera setup
        </CardDescription>
        
        <div className="flex items-baseline gap-2 mt-4">
          <span className="text-3xl font-black text-green-600">
            ₹{pkg.discountedPrice.toLocaleString()}
          </span>
          <span className="text-lg text-gray-500 line-through">
            ₹{pkg.originalPrice.toLocaleString()}
          </span>
          <span className="text-xs text-gray-500">(GST Included)</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {pkg.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="text-brand-red" size={16} />
            <span className="text-sm font-semibold text-brand-red">{pkg.warranty} Warranty</span>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Star className="text-yellow-500" size={12} />
            <span>Professional Installation Included</span>
          </div>
        </div>
        
        <WhatsAppButton packageName={`${pkg.name} (${pkg.cameraCount} Cameras)`} price={pkg.discountedPrice} />
      </CardContent>
    </Card>
  );
}

function ComparisonTable() {
  const silverPackages = cctvPackages.filter(pkg => pkg.category === "silver");
  const goldPackages = cctvPackages.filter(pkg => pkg.category === "gold");
  const hdPackages = cctvPackages.filter(pkg => pkg.category === "hd");

  return (
    <div className="overflow-x-auto" data-testid="comparison-table">
      <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 p-4 text-left font-semibold">Feature</th>
            <th className="border border-gray-200 p-4 text-center font-semibold text-gray-500">Silver Series</th>
            <th className="border border-gray-200 p-4 text-center font-semibold text-yellow-600">Gold Series</th>
            <th className="border border-gray-200 p-4 text-center font-semibold text-blue-600">HD Series</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 p-4 font-medium">Camera Body</td>
            <td className="border border-gray-200 p-4 text-center">Plastic Body</td>
            <td className="border border-gray-200 p-4 text-center">Metal Body</td>
            <td className="border border-gray-200 p-4 text-center">Plastic Body</td>
          </tr>
          <tr className="bg-gray-25">
            <td className="border border-gray-200 p-4 font-medium">Recording System</td>
            <td className="border border-gray-200 p-4 text-center">NVR (4K)</td>
            <td className="border border-gray-200 p-4 text-center">NVR (4K)</td>
            <td className="border border-gray-200 p-4 text-center">DVR</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-4 font-medium">Wire Type</td>
            <td className="border border-gray-200 p-4 text-center">CAT6</td>
            <td className="border border-gray-200 p-4 text-center">CAT6</td>
            <td className="border border-gray-200 p-4 text-center">3+1 Wire</td>
          </tr>
          <tr className="bg-gray-25">
            <td className="border border-gray-200 p-4 font-medium">Maximum Support</td>
            <td className="border border-gray-200 p-4 text-center">8MP</td>
            <td className="border border-gray-200 p-4 text-center">8MP</td>
            <td className="border border-gray-200 p-4 text-center">5MP</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-4 font-medium">4 Camera Package</td>
            <td className="border border-gray-200 p-4 text-center">₹13,000</td>
            <td className="border border-gray-200 p-4 text-center">₹14,500</td>
            <td className="border border-gray-200 p-4 text-center">₹10,000</td>
          </tr>
          <tr className="bg-gray-25">
            <td className="border border-gray-200 p-4 font-medium">8 Camera Package</td>
            <td className="border border-gray-200 p-4 text-center">₹21,000</td>
            <td className="border border-gray-200 p-4 text-center">₹23,000</td>
            <td className="border border-gray-200 p-4 text-center">₹12,500 - ₹13,839</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-4 font-medium">Warranty</td>
            <td className="border border-gray-200 p-4 text-center">2 Years</td>
            <td className="border border-gray-200 p-4 text-center">2 Years</td>
            <td className="border border-gray-200 p-4 text-center">2 Years</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "silver" | "gold" | "hd">("all");

  const filteredPackages = selectedCategory === "all" 
    ? cctvPackages 
    : cctvPackages.filter(pkg => pkg.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="CCTV Camera Packages | Silver, Gold & HD Series | Kirpal Securities Hoshiarpur"
        description="🎯 Complete CCTV camera packages in Hoshiarpur, Jalandhar: Silver (₹10K-₹21K), Gold (₹14.5K-₹23K) & HD Series. 4-8 camera setups with 2-year warranty. Professional installation included. Get quote on WhatsApp!"
        keywords="CCTV camera packages Jalandhar, security camera price Punjab, IP camera installation, surveillance system cost, CCTV packages with installation, best security camera deals, professional CCTV setup"
        image="https://kirpalsecurities.com/cctv-packages.jpg"
        url="https://kirpalsecurities.com/packages"
        type="website"
      />

      {/* Packages Header */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CCTV Camera Packages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Complete surveillance packages with 2-year warranty. Professional installation included for Hoshiarpur, Jalandhar and surrounding areas.
          </p>
        </div>
      </section>

      {/* Package Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all" data-testid="filter-all">All Packages</TabsTrigger>
              <TabsTrigger value="silver" data-testid="filter-silver">Silver Series</TabsTrigger>
              <TabsTrigger value="gold" data-testid="filter-gold">Gold Series</TabsTrigger>
              <TabsTrigger value="hd" data-testid="filter-hd">HD Series</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Our CCTV Series</h2>
            <p className="text-xl text-gray-600">Choose the perfect security solution for your needs</p>
          </div>
          
          <ComparisonTable />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our CCTV Packages?</h2>
            <p className="text-xl text-gray-600">Professional security solutions with complete peace of mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="feature-warranty">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">2 Years Warranty</h3>
              <p className="text-gray-600">Complete warranty coverage on all CCTV packages for peace of mind.</p>
            </div>
            
            <div className="text-center" data-testid="feature-installation">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Installation</h3>
              <p className="text-gray-600">Expert technicians ensure proper setup and configuration.</p>
            </div>
            
            <div className="text-center" data-testid="feature-support">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance services.</p>
            </div>
            
            <div className="text-center" data-testid="feature-quality">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Video size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">High Quality Equipment</h3>
              <p className="text-gray-600">Premium cameras and recording equipment for crystal clear footage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Property?</h2>
          <p className="text-xl mb-8">Get instant quotes and professional consultation via WhatsApp.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const message = `Hi! I'm interested in your CCTV packages. Please help me choose the right security solution for my property.`;
                const encodedMessage = encodeURIComponent(message);
                const whatsappURL = `https://wa.me/917009154711?text=${encodedMessage}`;
                window.open(whatsappURL, '_blank');
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              data-testid="button-whatsapp-inquiry"
            >
              <MessageCircle className="mr-2" size={20} />
              Buy Now on WhatsApp
            </Button>
            <Button 
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-brand-red hover:bg-gray-100 px-8 py-3"
              data-testid="button-contact-form"
            >
              Contact Form
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}