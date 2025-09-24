import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";
import { 
  MessageCircle, 
  CheckCircle,
  Star,
  Search,
  Filter,
  Eye,
  ShoppingCart,
  IndianRupee,
  Shield,
  Award,
  Clock
} from "lucide-react";
import { Product, ProductData } from "@/types/product";
import productData from "@/data/products.json";

const data = productData as ProductData;

function WhatsAppButton({ product }: { product: Product }) {
  const handleWhatsAppClick = () => {
    const savings = product.originalPrice - product.price;
    const savingsPercent = Math.round((savings / product.originalPrice) * 100);
    
    const message = `Hi! I'm interested in ${product.name}.

📋 *Product Details:*
💰 Price: ₹${product.price.toLocaleString()} (Save ₹${savings.toLocaleString()} - ${savingsPercent}% OFF!)
⭐ Rating: ${product.rating}/5
📦 Stock: ${product.inStock ? 'Available' : 'Out of Stock'}

🔧 *Key Features:*
${product.features.slice(0, 4).map(feature => `• ${feature}`).join('\n')}

Please provide more details and help me get a quote. Thanks!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/917009154711?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Button 
      onClick={handleWhatsAppClick}
      className="w-full bg-green-600 hover:bg-green-700 text-white"
      data-testid={`whatsapp-${product.id}`}
    >
      <MessageCircle className="mr-2" size={16} />
      Get Quote on WhatsApp
    </Button>
  );
}

function ProductCard({ product, onViewDetails }: { product: Product; onViewDetails: (product: Product) => void }) {
  const savings = product.originalPrice - product.price;
  const savingsPercent = Math.round((savings / product.originalPrice) * 100);
  
  const categoryColors: Record<string, string> = {
    "security-cameras": "from-blue-500 to-cyan-500",
    "access-control": "from-purple-500 to-pink-500",
    "communication": "from-teal-500 to-blue-500",
    "networking": "from-orange-500 to-red-500",
    "safety-systems": "from-red-500 to-orange-500",
    "perimeter-security": "from-yellow-500 to-orange-500",
    "smart-home": "from-green-500 to-teal-500",
    "repair-services": "from-gray-500 to-gray-700"
  };

  const categoryColor = categoryColors[product.category] || "from-gray-500 to-gray-700";

  return (
    <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 h-full group" data-testid={`card-${product.id}`}>
      {product.featured && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-yellow-500 text-black font-semibold">
            ⭐ Featured
          </Badge>
        </div>
      )}
      
      {savingsPercent > 0 && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-red-500 text-white font-semibold">
            {savingsPercent}% OFF
          </Badge>
        </div>
      )}

      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${categoryColor}`}></div>
      
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          data-testid={`img-${product.id}`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <Badge variant="destructive" className="text-white">Out of Stock</Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-gray-100 text-gray-800 text-xs">
            {data.categories.find(cat => cat.id === product.category)?.name || product.category}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500 fill-current" size={14} />
            <span className="text-sm font-medium" data-testid={`rating-${product.id}`}>{product.rating}</span>
          </div>
        </div>
        
        <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
          {product.name}
        </CardTitle>
        
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {product.shortDescription}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Pricing */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <IndianRupee size={18} className="text-green-600" />
              <span className="text-2xl font-bold text-green-600" data-testid={`price-${product.id}`}>
                {product.price.toLocaleString()}
              </span>
            </div>
            {savings > 0 && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {savings > 0 && (
            <p className="text-sm text-green-600 font-medium">
              You save ₹{savings.toLocaleString()} ({savingsPercent}% off)
            </p>
          )}
        </div>

        {/* Key Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900">Key Features:</h4>
          <div className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={12} />
                <span className="text-xs text-gray-700">{feature}</span>
              </div>
            ))}
            {product.features.length > 3 && (
              <p className="text-xs text-gray-500">+{product.features.length - 3} more features</p>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-2 pt-4 border-t">
          <Button 
            onClick={() => onViewDetails(product)}
            variant="outline" 
            className="w-full"
            data-testid={`view-details-${product.id}`}
          >
            <Eye className="mr-2" size={16} />
            View Details
          </Button>
          <WhatsAppButton product={product} />
        </div>
      </CardContent>
    </Card>
  );
}

function ProductDetailModal({ product, isOpen, onClose }: { 
  product: Product | null; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  if (!product || !isOpen) return null;

  const savings = product.originalPrice - product.price;
  const savingsPercent = Math.round((savings / product.originalPrice) * 100);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
              <div className="flex items-center gap-4">
                <Badge variant="secondary">
                  {data.categories.find(cat => cat.id === product.category)?.name}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-500 fill-current" size={16} />
                  <span className="font-medium">{product.rating}/5</span>
                </div>
              </div>
            </div>
            <Button variant="outline" onClick={onClose}>✕</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Pricing */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center">
                    <IndianRupee size={24} className="text-green-600" />
                    <span className="text-3xl font-bold text-green-600">
                      {product.price.toLocaleString()}
                    </span>
                  </div>
                  {savings > 0 && (
                    <span className="text-lg text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {savings > 0 && (
                  <p className="text-green-600 font-medium">
                    You save ₹{savings.toLocaleString()} ({savingsPercent}% off)
                  </p>
                )}
                <p className={`text-sm mt-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
                </p>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <WhatsAppButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = data.products;

    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const featuredProducts = data.products.filter(product => product.featured);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <SEOHead
        title="Security Products | CCTV Cameras, Biometric Devices, Smart Home | Kirpal Securities"
        description="🔐 Comprehensive security products in Jalandhar: CCTV cameras, biometric devices, intercom systems, networking solutions, fire alarms & smart home automation. Expert installation with warranty."
        keywords="security products Jalandhar, CCTV cameras Punjab, biometric devices, intercom systems, fire alarm systems, electric fence, networking solutions, smart home automation"
        image="https://kirpalsecurities.com/security-products.jpg"
        url="https://kirpalsecurities.com/products"
        type="website"
      />

      {/* Products Header */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Products Catalog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of {data.products.length}+ security products with competitive prices and professional installation in Jalandhar.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="search-products"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-gray-600" />
                <span className="text-sm text-gray-600">Filter by:</span>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48" data-testid="category-filter">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {data.categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProducts.length} of {data.products.length} products
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      {selectedCategory === "all" && !searchTerm && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-xl text-gray-600">Our most popular and highly rated security solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === "all" ? "All Products" : 
               data.categories.find(cat => cat.id === selectedCategory)?.name || "Products"}
            </h2>
            {searchTerm && (
              <p className="text-xl text-gray-600">Search results for "{searchTerm}"</p>
            )}
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <ShoppingCart size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
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
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">High-quality security products with latest technology and reliable performance.</p>
            </div>
            
            <div className="text-center" data-testid="feature-installation">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Installation</h3>
              <p className="text-gray-600">Professional installation and configuration by certified technicians.</p>
            </div>
            
            <div className="text-center" data-testid="feature-support">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
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
          <p className="text-xl mb-8">Get expert consultation and quotes for all our security products with competitive pricing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const message = `Hi! I'm interested in your security products. I was browsing your catalog of ${data.products.length}+ products. Please help me choose the right solution for my needs and provide competitive quotes.`;
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

      {/* Product Detail Modal */}
      <ProductDetailModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}