import { useParams, useLocation, Link } from "wouter";
import { useState, useEffect } from "react";
import { ArrowLeft, Star, IndianRupee, CheckCircle, MessageCircle, Phone, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/seo-head";
import { Product, ProductData } from "@/types/product";
import productData from "@/data/products";

const data = productData;

export default function ProductDetailPage() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (id) {
      // Find product directly from the products array
      const foundProduct = data.products.find((p: Product) => p.id === id) || null;
      setProduct(foundProduct);
      if (foundProduct) {
        setSelectedImage(foundProduct.image);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Button onClick={() => setLocation("/products")} variant="outline">
            <ArrowLeft className="mr-2" size={16} />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const savings = product.originalPrice - product.price;
  const savingsPercent = Math.round((savings / product.originalPrice) * 100);
  const category = data.categories.find(cat => cat.id === product.category);

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in ${product.name}.

💰 Price: ₹${product.price.toLocaleString()} ${savings > 0 ? `(Save ₹${savings.toLocaleString()} - ${savingsPercent}% OFF!)` : ''}
⭐ Rating: ${product.rating}/5

🔧 Key Features:
${product.features.slice(0, 3).map(feature => `• ${feature}`).join('\n')}

Please provide more details and availability. Thanks!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/917009154711?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} - ${product.shortDescription}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  return (
    <>
      <SEOHead
        title={`${product.name} - ₹${product.price.toLocaleString()} | Kirpal Securities`}
        description={`${product.shortDescription} Starting at ₹${product.price.toLocaleString()}${savings > 0 ? ` (${savingsPercent}% off)` : ''}. Professional installation available. ${product.inStock ? 'In stock.' : 'Available for order.'} Call 7009154711.`}
        keywords={`${product.name} Jalandhar, ${product.name} price Punjab, ${category?.name}, ${product.features.slice(0, 3).join(', ')}, security products Jalandhar`}
        image={product.image}
        url={`https://kirpalsecurities.com/product/${product.id}`}
        type="website"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-2 text-sm">
              <button 
                onClick={() => setLocation("/")}
                className="text-gray-500 hover:text-brand-red"
              >
                Home
              </button>
              <span className="text-gray-300">/</span>
              <button 
                onClick={() => setLocation("/products")}
                className="text-gray-500 hover:text-brand-red"
              >
                Products
              </button>
              <span className="text-gray-300">/</span>
              <span className="text-brand-red">{category?.name}</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="relative">
                  <img 
                    src={selectedImage} 
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-lg"
                    data-testid="product-main-image"
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-black font-semibold">
                        ⭐ Featured
                      </Badge>
                    </div>
                  )}
                  {savingsPercent > 0 && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-500 text-white font-semibold">
                        {savingsPercent}% OFF
                      </Badge>
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center rounded-lg">
                      <Badge variant="destructive" className="text-lg px-4 py-2">Out of Stock</Badge>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                      {category?.name}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500 fill-current" size={16} />
                      <span className="font-medium" data-testid="product-rating">{product.rating}/5</span>
                    </div>
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" data-testid="product-title">
                    {product.name}
                  </h1>
                  
                  <p className="text-base sm:text-lg text-gray-600 mb-6" data-testid="product-description">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Pricing */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <div className="flex items-center">
                      <IndianRupee size={24} className="text-green-600 sm:w-7 sm:h-7" />
                      <span className="text-3xl sm:text-4xl font-bold text-green-600" data-testid="product-price">
                        {product.price.toLocaleString()}
                      </span>
                    </div>
                    {savings > 0 && (
                      <span className="text-lg sm:text-xl text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {savings > 0 && (
                    <p className="text-green-600 font-medium text-base sm:text-lg">
                      You save ₹{savings.toLocaleString()} ({savingsPercent}% off)
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">
                    *Price includes installation and setup
                  </p>

                  {/* Action Buttons - Desktop (Now inside pricing section) */}
                  <div className="space-y-4 mt-6 hidden lg:block">
                    <button
                      onClick={handleWhatsAppClick}
                      disabled={!product.inStock}
                      className="w-full bg-brand-red hover:bg-red-700 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-colors disabled:cursor-not-allowed min-h-[56px]"
                      data-testid="buy-now-button"
                    >
                      <MessageCircle size={20} />
                      {product.inStock ? 'Buy Now via WhatsApp' : 'Out of Stock'}
                    </button>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => {
                          const phoneMessage = `Hi! I'd like to know more about ${product.name}. Please call me to discuss pricing and availability.`;
                          const encodedMessage = encodeURIComponent(phoneMessage);
                          const whatsappURL = `https://wa.me/917009154711?text=${encodedMessage}`;
                          window.open(whatsappURL, '_blank');
                        }}
                        className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                        data-testid="call-now-button"
                      >
                        <Phone size={16} />
                        Call Now
                      </button>
                      
                      <button
                        onClick={handleShare}
                        className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                        data-testid="share-button"
                      >
                        <Share2 size={16} />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details Tabs */}
            <div className="border-t">
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  {product.specifications && Object.keys(product.specifications).length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                      <div className="space-y-3">
                        {Object.entries(product.specifications).map(([key, value], index) => (
                          value && (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                              <span className="text-gray-700"><span className="font-medium">{key}:</span> {value}</span>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Full Description */}
                {product.description && (
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Product Description</h3>
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Other Products Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Products You May Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.products
                .filter(p => p.id !== product.id)
                .slice(0, 3)
                .map((otherProduct) => {
                  const otherCategory = data.categories.find(cat => cat.id === otherProduct.category);
                  const savings = otherProduct.originalPrice - otherProduct.price;
                  const savingsPercent = Math.round((savings / otherProduct.originalPrice) * 100);
                  
                  return (
                    <Card key={otherProduct.id} className="group hover:shadow-xl transition-all duration-300" data-testid={`related-product-${otherProduct.id}`}>
                      <Link href={`/product/${otherProduct.id}`} data-testid={`link-product-${otherProduct.id}`}>
                        <div className="cursor-pointer">
                          <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <img 
                              src={otherProduct.image} 
                              alt={otherProduct.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            {otherProduct.featured && (
                              <Badge className="absolute top-2 left-2 bg-yellow-500 text-black">
                                ⭐ Featured
                              </Badge>
                            )}
                            {savingsPercent > 0 && (
                              <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                                {savingsPercent}% OFF
                              </Badge>
                            )}
                          </div>
                          <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">
                              {otherCategory?.name}
                            </Badge>
                            <CardTitle className="text-lg line-clamp-2 group-hover:text-brand-red transition-colors">
                              {otherProduct.name}
                            </CardTitle>
                            <CardDescription className="line-clamp-2">
                              {otherProduct.shortDescription}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-green-600">
                                  ₹{otherProduct.price.toLocaleString()}
                                </span>
                                {savings > 0 && (
                                  <span className="text-sm text-gray-500 line-through">
                                    ₹{otherProduct.originalPrice.toLocaleString()}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="text-yellow-500 fill-current" size={14} />
                                <span className="text-sm font-medium">{otherProduct.rating}</span>
                              </div>
                            </div>
                            <Button 
                              className="w-full bg-brand-red hover:bg-red-700 text-white"
                              data-testid={`view-product-${otherProduct.id}`}
                            >
                              View Details
                            </Button>
                          </CardContent>
                        </div>
                      </Link>
                    </Card>
                  );
                })}
            </div>
          </div>

          {/* Back to Products */}
          <div className="mt-8 text-center pb-20 lg:pb-8">
            <Button 
              onClick={() => setLocation("/products")} 
              variant="outline"
              className="px-6 py-3 min-h-[44px]"
              data-testid="back-to-products"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to All Products
            </Button>
          </div>
        </div>

        {/* Mobile Sticky CTA Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50 safe-area-inset-bottom">
          <div className="flex gap-3">
            <button
              onClick={handleShare}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors min-h-[48px]"
              data-testid="mobile-share-button"
            >
              <Share2 size={18} />
              Share
            </button>
            <button
              onClick={handleWhatsAppClick}
              disabled={!product.inStock}
              className="flex-[2] bg-brand-red hover:bg-red-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors disabled:cursor-not-allowed min-h-[48px]"
              data-testid="mobile-buy-now-button"
            >
              <MessageCircle size={18} />
              {product.inStock ? 'Buy Now' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}