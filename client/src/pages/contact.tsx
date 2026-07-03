import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, FileText } from "lucide-react";
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

    const whatsappMessage = `Hello! I'm contacting you from your website.

*Contact Details:*
Name: ${formData.name}
Phone: ${formData.phone}
${formData.email ? `Email: ${formData.email}` : ""}
${formData.service ? `Service: ${formData.service}` : ""}

*Message:*
${formData.message}

Please get back to me. Thanks!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/917009154711?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");

      toast({
        title: "Redirecting to WhatsApp!",
        description: "Your message is ready to send via WhatsApp.",
      });

      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleRequestQuote = () => {
    const quoteMessage = encodeURIComponent(
      "Hello! I would like to request a free quote for electric fence installation. Please get back to me. Thanks!"
    );
    window.open(`https://wa.me/917009154711?text=${quoteMessage}`, "_blank");
  };

  return (
    <>
      <SEOHead
        title="Contact Kirpal Securities | Electric Fence Installation Punjab - Call 7009154711"
        description="Contact Kirpal Securities for professional electric fence installation across Punjab. Call Nikhil: 7009154711 or Naveen: 9463687535. Serving Jalandhar, Ludhiana, Amritsar, Pathankot and all of Punjab."
        keywords="contact Kirpal Securities, electric fence installation Punjab, electric fence Jalandhar, electric fence Ludhiana, electric fence quote Punjab, perimeter security Punjab contact"
        image="https://kirpalsecurities.in/contact-team.jpg"
        url="https://kirpalsecurities.in/contact"
        type="website"
      />

      {/* Section 1 — Page Hero */}
      <section className="bg-brand-red text-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Contact Kirpal Securities</h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 text-red-100">
            Get in touch with our team for professional electric fence installation services across Punjab.
          </p>
          <p className="text-sm text-red-200 mb-8">
            Kirpal Securities is a professional electric fence installation company serving customers across Punjab.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:7009154711" data-testid="button-call-now" className="w-full sm:w-auto">
              <Button className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] w-full px-6 flex items-center justify-center gap-2">
                <Phone size={18} />
                Call Now
              </Button>
            </a>
            <a
              href="https://wa.me/917009154711"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp"
              className="w-full sm:w-auto"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold min-h-[48px] w-full px-6 flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                WhatsApp Us
              </Button>
            </a>
            <Button
              onClick={handleRequestQuote}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-red font-semibold min-h-[48px] w-full sm:w-auto px-6 flex items-center justify-center gap-2"
              data-testid="button-request-quote"
            >
              <FileText size={18} />
              Request Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2 & 3 — Contact Details + Contact Form */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-brand-red" data-testid="contact-phones">
                  <div className="flex items-start">
                    <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                      <p className="text-gray-600 mb-1">
                        <strong>Nikhil:</strong>{" "}
                        <a href="tel:7009154711" className="text-brand-red hover:underline" data-testid="phone-nikhil">
                          7009154711
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <strong>Naveen:</strong>{" "}
                        <a href="tel:9463687535" className="text-brand-red hover:underline" data-testid="phone-naveen">
                          9463687535
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-brand-red" data-testid="contact-email">
                  <div className="flex items-center">
                    <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Address</h3>
                      <a
                        href="mailto:kirpalsecurities@gmail.com"
                        className="text-brand-red hover:underline"
                        data-testid="email-contact"
                      >
                        kirpalsecurities@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-brand-red" data-testid="contact-address">
                  <div className="flex items-start">
                    <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Address</h3>
                      <address className="text-gray-600 leading-relaxed not-italic">
                        Urban Estate Phase 2<br />
                        Road Opp. Hotel Imperia Suites<br />
                        Aggarwal Dhaba Road<br />
                        Jalandhar, Punjab<br />
                        India
                      </address>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-brand-red" data-testid="business-hours">
                  <div className="flex items-start">
                    <div className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p><strong>Monday – Friday:</strong> 9:00 AM – 7:00 PM</p>
                        <p><strong>Saturday:</strong> 9:00 AM – 6:00 PM</p>
                        <p><strong>Sunday:</strong> 10:00 AM – 4:00 PM</p>
                        <p className="text-brand-red font-medium mt-2">Emergency support available</p>
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
                  <Label htmlFor="name" className="text-base">Full Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                    className="min-h-[44px] text-base"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                  <Input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Your phone number"
                    required
                    className="min-h-[44px] text-base"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Your email address"
                    className="min-h-[44px] text-base"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-base">Service Interested In</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="min-h-[44px]" data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solar-electric-fence">Solar Electric Fence Installation</SelectItem>
                      <SelectItem value="agricultural-fencing">Agricultural Perimeter Fencing</SelectItem>
                      <SelectItem value="industrial-fencing">Industrial Security Fencing</SelectItem>
                      <SelectItem value="warehouse-fencing">Warehouse Perimeter Protection</SelectItem>
                      <SelectItem value="residential-fencing">Residential Electric Fence</SelectItem>
                      <SelectItem value="cctv">CCTV & Security Cameras</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-base">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your property and fencing requirements..."
                    rows={5}
                    required
                    className="text-base resize-none"
                    data-testid="textarea-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red-dark min-h-[48px] text-base font-semibold"
                  disabled={isSubmitting}
                  data-testid="button-send-message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Our team will respond within 24 hours. For urgent matters, please call us directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Service Areas */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Electric Fence Installation Across Punjab</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Kirpal Securities provides professional electric fence installation services across Punjab.
              Our team frequently installs fencing systems in major cities and also serves surrounding
              towns and rural areas throughout the region.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              {[
                "Jalandhar",
                "Ludhiana",
                "Amritsar",
                "Pathankot",
                "Hoshiarpur",
                "Phagwara",
                "Kapurthala",
                "Nakodar",
              ].map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 text-gray-700 py-2"
                  data-testid={`area-${city.toLowerCase()}`}
                >
                  <MapPin className="text-brand-red flex-shrink-0" size={16} />
                  <span className="font-medium">{city}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-center mt-6 border-t pt-4" data-testid="text-coverage-note">
              We also serve surrounding towns and rural areas throughout Punjab — contact us to confirm availability in your location.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Map Section */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Find Our Office</h2>
            <p className="text-base md:text-xl text-gray-600">
              Urban Estate Phase 2, Road Opp. Hotel Imperia Suites, Jalandhar, Punjab
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-testid="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.143750920052!2d75.58402887555071!3d31.301144974315125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b0a565f8d75%3A0xe85e41fb52991cb2!2sKirpal%20Securities!5e1!3m2!1sen!2sin!4v1777235220633!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kirpal Securities Office Location - Urban Estate Phase 2, Jalandhar, Punjab"
            />
          </div>
        </div>
      </section>

      {/* Section 6 — Final Call to Action */}
      <section className="py-10 md:py-16 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Need Electric Fence Installation for Your Property?</h2>
          <p className="text-base md:text-xl text-red-100 mb-4">
            Contact Kirpal Securities today for professional perimeter security solutions across Punjab.
            Call or WhatsApp our team to schedule a site inspection.
          </p>
          <p className="text-sm md:text-base text-red-200 mb-6 md:mb-8">
            Serving farms, warehouses, industrial facilities and residential properties throughout Punjab.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:7009154711" data-testid="cta-call-nikhil" className="w-full sm:w-auto">
              <Button className="bg-white text-brand-red hover:bg-red-50 font-semibold min-h-[48px] w-full px-6 flex items-center justify-center gap-2">
                <Phone size={18} />
                Call Nikhil: 7009154711
              </Button>
            </a>
            <a
              href="https://wa.me/917009154711"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-whatsapp"
              className="w-full sm:w-auto"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold min-h-[48px] w-full px-6 flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
