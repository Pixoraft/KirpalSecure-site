import { Link } from "wouter";
import { useState } from "react";
import { SEOHead } from "@/components/seo-head";
import { FloatingQueryButton } from "@/components/floating-query-button";
import productData from "@/data/products";
import { 
  Shield, Award, CheckCircle, Star, Phone, MapPin, 
  Clock, IndianRupee, Zap, Eye, Lock, Video, Users,
  ChevronDown, ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function WhiteEagleCameras() {
  const whiteEagleProducts = productData.products.filter(p => 
    p.name.toLowerCase().includes('white eagle')
  );

  const faqs = [
    {
      question: "Where can I buy White Eagle cameras in Jalandhar?",
      answer: "Kirpal Securities is an authorized White Eagle camera dealer and installer in Jalandhar, Punjab. We offer genuine White Eagle CCTV cameras with professional installation, warranty support, and after-sales service. Contact us at +91-98156-71271 for the best prices on White Eagle cameras."
    },
    {
      question: "What is the price of White Eagle bullet camera in Jalandhar?",
      answer: "White Eagle Bullet Camera is available at ₹2,800 (original price ₹3,500) at Kirpal Securities, Jalandhar. This includes professional installation, warranty, and technical support. We offer the most competitive prices on authentic White Eagle CCTV cameras in Punjab."
    },
    {
      question: "What is the price of White Eagle dome camera?",
      answer: "White Eagle Dome Camera with color night vision is priced at ₹3,200 (original price ₹4,000) at our Jalandhar showroom. This includes professional installation by certified technicians, 2-year warranty, and free remote viewing setup. Get the best deals on White Eagle dome cameras in Jalandhar."
    },
    {
      question: "Is White Eagle camera good quality?",
      answer: "Yes, White Eagle cameras are professional-grade security cameras offering excellent image quality, reliable performance, and long-lasting durability. At Kirpal Securities, we've installed over 3,300 White Eagle CCTV systems across North India with high customer satisfaction. White Eagle cameras feature HD resolution, advanced night vision, weatherproof construction, and mobile app support."
    },
    {
      question: "Does White Eagle camera work at night?",
      answer: "Yes, all White Eagle cameras feature advanced infrared night vision technology. The White Eagle Bullet Camera has IR night vision for clear black & white footage in complete darkness, while the White Eagle Dome Camera features color night vision with built-in LED illumination for colored video even at night."
    },
    {
      question: "What is the warranty on White Eagle cameras?",
      answer: "All White Eagle cameras purchased from Kirpal Securities come with a 2-year manufacturer warranty covering defects and malfunctions. We provide complete after-sales support, including technical assistance, maintenance, and repair services at our Jalandhar service center."
    },
    {
      question: "Can I view White Eagle camera on mobile?",
      answer: "Yes, White Eagle cameras support mobile app remote viewing. After installation, our technicians will set up the mobile app on your smartphone, allowing you to view live footage, receive motion detection alerts, and control your cameras from anywhere in the world via internet connection."
    },
    {
      question: "Do you provide installation for White Eagle cameras?",
      answer: "Yes, Kirpal Securities provides professional White Eagle camera installation services across Jalandhar and Punjab. Our certified technicians handle complete setup including camera mounting, wiring, NVR/DVR configuration, mobile app setup, and testing. Installation is included in our camera packages."
    }
  ];

  // Structured data for Product schema
  const productSchemaData = whiteEagleProducts.map(product => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "brand": {
      "@type": "Brand",
      "name": "White Eagle"
    },
    "description": product.description,
    "sku": product.id,
    "image": product.image,
    "offers": {
      "@type": "Offer",
      "url": `https://kirpalsecurities.com/white-eagle-cameras`,
      "priceCurrency": "INR",
      "price": product.price,
      "priceValidUntil": "2025-12-31",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Kirpal Securities",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jalandhar",
          "addressRegion": "Punjab",
          "addressCountry": "IN"
        },
        "telephone": "+91-98156-71271"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": 150,
      "bestRating": 5,
      "worstRating": 1
    }
  }));

  // FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="White Eagle Camera Price in Jalandhar | Buy White Eagle CCTV Cameras - Authorized Dealer"
        description="Buy genuine White Eagle cameras in Jalandhar at best prices. Authorized White Eagle CCTV dealer offering bullet cameras ₹2,800, dome cameras ₹3,200 with professional installation & warranty. 3300+ installations across North India."
        keywords="white eagle camera, white eagle cctv camera, white eagle camera price, white eagle bullet camera, white eagle dome camera, white eagle camera jalandhar, buy white eagle camera, white eagle cctv price, white eagle camera dealer, white eagle camera installation"
        canonicalUrl="https://kirpalsecurities.com/white-eagle-cameras"
        ogType="website"
        structuredData={[...productSchemaData, faqSchema]}
      />

      <FloatingQueryButton />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">Authorized White Eagle Dealer in Jalandhar</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              White Eagle Camera Price in Jalandhar
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Buy Genuine White Eagle CCTV Cameras with Professional Installation
            </p>
            
            <p className="text-lg mb-8 text-blue-200">
              Authorized White Eagle dealer offering bullet cameras, dome cameras, and complete CCTV systems at best prices in Punjab. 3300+ installations PAN INDIA • 7+ Years Experience
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Authorized Dealer</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
                <span>2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-blue-400" />
                <span>3300+ Happy Customers</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919815671271">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" data-testid="button-call-now">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +91-98156-71271
                </Button>
              </a>
              <a href="#products">
                <Button size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-blue-50" data-testid="button-view-cameras">
                  View White Eagle Cameras
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy White Eagle from Kirpal Securities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Buy White Eagle Cameras from Kirpal Securities?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Best White Eagle camera dealer in Jalandhar offering authentic products, professional installation, and lifetime support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Authorized Dealer",
                description: "100% genuine White Eagle cameras with manufacturer warranty and authenticity guarantee"
              },
              {
                icon: Award,
                title: "Best Price Guarantee",
                description: "Lowest prices on White Eagle CCTV cameras in Jalandhar with special installation packages"
              },
              {
                icon: Users,
                title: "Expert Installation",
                description: "Certified technicians with 7+ years experience installing White Eagle camera systems"
              },
              {
                icon: Clock,
                title: "Lifetime Support",
                description: "Free technical support, maintenance guidance, and repair services for all White Eagle cameras"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              White Eagle CCTV Camera Models & Prices
            </h2>
            <p className="text-lg text-gray-600">
              Professional security cameras available at our Jalandhar showroom
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whiteEagleProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow" data-testid={`card-product-${product.id}`}>
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={`${product.name} - Best price in Jalandhar`}
                    className="w-full h-64 object-cover"
                  />
                  {product.featured && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Best Seller
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-lg shadow-lg">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{product.rating}</span>
                      <span className="text-gray-600 text-sm">(150+ reviews)</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">
                    {product.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-3xl font-bold text-green-600 flex items-center">
                        <IndianRupee className="w-6 h-6" />
                        {product.price.toLocaleString()}
                      </span>
                      <span className="text-xl text-gray-400 line-through flex items-center">
                        <IndianRupee className="w-4 h-4" />
                        {product.originalPrice?.toLocaleString()}
                      </span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-semibold">
                        Save ₹{((product.originalPrice || product.price) - product.price).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      *Price includes professional installation in Jalandhar area
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href="tel:+919815671271" className="flex-1">
                      <Button className="w-full bg-green-600 hover:bg-green-700" data-testid={`button-call-${product.id}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call to Order
                      </Button>
                    </a>
                    <Link href={`/products#${product.id}`}>
                      <Button variant="outline" className="flex-1" data-testid={`button-details-${product.id}`}>
                        Full Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              White Eagle Camera Features
            </h2>
            <p className="text-lg text-gray-600">
              Professional security features in every White Eagle CCTV camera
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Eye,
                title: "HD Video Quality",
                description: "Crystal clear high-definition video recording for identifying faces and license plates"
              },
              {
                icon: Video,
                title: "Night Vision",
                description: "Advanced IR technology and color night vision with LED illumination for 24/7 monitoring"
              },
              {
                icon: Shield,
                title: "Weatherproof",
                description: "IP66 rated metal body construction for outdoor use in all weather conditions"
              },
              {
                icon: Zap,
                title: "Motion Detection",
                description: "Smart motion detection with instant mobile alerts when movement is detected"
              },
              {
                icon: Phone,
                title: "Mobile Access",
                description: "View live footage and recordings on your smartphone from anywhere via mobile app"
              },
              {
                icon: Lock,
                title: "Secure Storage",
                description: "Record to NVR/DVR or cloud storage with encrypted data transmission"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions About White Eagle Cameras
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about buying White Eagle CCTV cameras in Jalandhar
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Best Price on White Eagle Cameras Today
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Call now for free site survey, installation quote, and special discounts on White Eagle CCTV camera packages
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+919815671271">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto" data-testid="button-call-footer">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91-98156-71271
                </Button>
              </a>
              <a href="https://wa.me/919815671271?text=I%20want%20to%20buy%20White%20Eagle%20camera">
                <Button size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto" data-testid="button-whatsapp">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-blue-200">
              <MapPin className="w-5 h-5" />
              <span>Serving Jalandhar, Punjab and surrounding areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Visit Our White Eagle Camera Showroom in Jalandhar
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Kirpal Securities</h4>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <p>Jalandhar, Punjab, India</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <a href="tel:+919815671271" className="hover:text-blue-600">+91-98156-71271</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <p>Open: Mon-Sat, 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Services Offered</h4>
                  <ul className="space-y-2">
                    {[
                      "White Eagle camera sales",
                      "Professional CCTV installation",
                      "Free site survey & consultation",
                      "Mobile app setup & training",
                      "Warranty & after-sales support",
                      "Maintenance & repair services"
                    ].map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
