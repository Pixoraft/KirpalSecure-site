import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/seo-head";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm contacting you from your website.

📋 *Contact Details:*
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
${formData.email ? `📧 Email: ${formData.email}` : ''}
${formData.service ? `🔧 Service: ${formData.service}` : ''}

💬 *Message:*
${formData.message}

Please get back to me. Thanks!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/917009154711?text=${encodedMessage}`;
    
    setTimeout(() => {
      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');
      
      toast({
        title: "Redirecting to WhatsApp!",
        description: "Your message is ready to send via WhatsApp.",
      });
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <SEOHead
        title="Contact Kirpal Securities - Get Free Security Consultation in Jalandhar"
        description="Contact Kirpal Securities for professional security solutions in Jalandhar. Get free consultation for CCTV, home security, biometric systems. Call 7009154711 or 9463687535."
        keywords="contact Kirpal Securities, security consultation Jalandhar, CCTV installation quote, security system installation"
      />

      {/* Contact Header */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">Get in touch for professional security solutions and free consultations</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-brand-red" data-testid="contact-phones">
                  <div className="flex items-center">
                    <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                      <p className="text-gray-600 mb-1">
                        <strong>NIKHIL:</strong> <a 
                          href="tel:7009154711" 
                          className="text-brand-red hover:text-brand-red-dark"
                          data-testid="phone-nikhil"
                        >
                          7009154711
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <strong>NAVEEN:</strong> <a 
                          href="tel:9463687535" 
                          className="text-brand-red hover:text-brand-red-dark"
                          data-testid="phone-naveen"
                        >
                          9463687535
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-brand-red" data-testid="contact-email">
                  <div className="flex items-center">
                    <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Address</h3>
                      <p className="text-gray-600">
                        <a 
                          href="mailto:kirpalsecurities@gmail.com" 
                          className="text-brand-red hover:text-brand-red-dark"
                          data-testid="email-contact"
                        >
                          kirpalsecurities@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-brand-red" data-testid="contact-address">
                  <div className="flex items-start">
                    <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Urban Estate Ph. 2, Road Opp. Hotel Imperia Suites,<br />
                        Aggarwal Dhaba Road,<br />
                        Jalandhar, Punjab
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-brand-red" data-testid="business-hours">
                  <div className="flex items-start">
                    <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p><strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM</p>
                        <p><strong>Saturday:</strong> 9:00 AM - 6:00 PM</p>
                        <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
                        <p className="text-brand-red font-medium mt-2">24/7 Emergency Support Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Your phone number"
                    required
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Your email address"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cctv">CCTV & Security Cameras</SelectItem>
                      <SelectItem value="home-security">Home Security Systems</SelectItem>
                      <SelectItem value="biometric">Biometric Devices</SelectItem>
                      <SelectItem value="networking">Networking Solutions</SelectItem>
                      <SelectItem value="intercom">Intercom & Video Door Phone</SelectItem>
                      <SelectItem value="repair">Repair Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your security needs..."
                    rows={5}
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-red hover:bg-brand-red-dark"
                  disabled={isSubmitting}
                  data-testid="button-send-message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  We'll get back to you within 24 hours. For urgent matters, please call us directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of Jalandhar</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4">
            {/* Placeholder for Google Maps */}
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center" data-testid="map-placeholder">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg">Google Maps Integration</p>
                <p className="text-sm">Urban Estate Ph. 2, Road Opp. Hotel Imperia Suites, Jalandhar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
