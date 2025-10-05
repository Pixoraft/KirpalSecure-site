import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QueryFormData {
  name: string;
  serviceType: string;
  message: string;
  contactMethod: string;
  email?: string;
  address: string;
  area?: string;
  fencingType?: string;
  siteType?: string;
}

interface FloatingQueryButtonProps {
  preSelectedService?: string;
}

const serviceTypes = [
  "Electric Fencing Installation",
  "CCTV Installation",
  "Smart Home Security",
  "Biometric Systems",
  "Network Setup",
  "Video Intercom",
  "Laptop/Printer Repair",
  "General Inquiry"
];

export function FloatingQueryButton({ preSelectedService }: FloatingQueryButtonProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<QueryFormData>({
    name: "",
    serviceType: preSelectedService || "",
    message: preSelectedService === "Electric Fencing Installation" 
      ? "I'm interested in electric fencing installation. Please provide pricing details for both commercial and residential options, including different pole types and fencing configurations."
      : "",
    contactMethod: "phone",
    email: "",
    address: "",
    area: "",
    fencingType: "",
    siteType: ""
  });

  // Listen for custom events to open with pre-selected service
  useEffect(() => {
    const handleOpenQuery = (event: CustomEvent) => {
      const { serviceType, message } = event.detail;
      setFormData(prev => ({
        ...prev,
        serviceType: serviceType || "",
        message: message || (serviceType === "Electric Fencing Installation" 
          ? "I'm interested in electric fencing installation. Please provide pricing details for both commercial and residential options, including different pole types and fencing configurations."
          : prev.message),
        area: serviceType === "Electric Fencing Installation" ? "" : prev.area,
        fencingType: serviceType === "Electric Fencing Installation" ? "" : prev.fencingType,
        siteType: serviceType === "Electric Fencing Installation" ? "" : prev.siteType
      }));
      setIsOpen(true);
    };

    window.addEventListener('openQueryForm', handleOpenQuery as EventListener);
    return () => {
      window.removeEventListener('openQueryForm', handleOpenQuery as EventListener);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Determine phone number and message format based on service type
    let phoneNumber = "917009154711"; // Default number
    let whatsappMessage = "";

    if (formData.serviceType === "Electric Fencing Installation") {
      // KIRPAL SECURITIES specific phone numbers and message
      phoneNumber = "917009154711"; // NIKHIL's number
      whatsappMessage = `🔋 *KIRPAL SECURITIES - ELECTRIC FENCING INQUIRY*

Hello! I'm interested in electric fencing installation by KIRPAL SECURITIES.

👤 *Customer Details:*
Name: ${formData.name}
🏠 Address: ${formData.address}
📞 Contact Method: ${formData.contactMethod}
${formData.email ? `📧 Email: ${formData.email}` : ''}

⚡ *Electric Fencing Requirements:*
${formData.area ? `📏 Area to be fenced: ${formData.area}` : ''}
${formData.siteType ? `🏢 Site Type: ${formData.siteType}` : ''}
${formData.fencingType ? `🔧 Fencing Type: ${formData.fencingType}` : ''}

💬 *Additional Details:*
${formData.message}

📋 *Please provide information about:*
• Pricing for Commercial/Residential sites
• MS Powder Coating Pole vs S.S 304 Grade Pole
• Openable Gate Fencing vs Straight Fencing options
• Installation timeline and warranty details

Please get back to me with detailed quotation. Thanks!`;
    } else {
      // Regular services message
      whatsappMessage = `Hello! I'm interested in your services.

📋 *Service Details:*
👤 Name: ${formData.name}
🏠 Address: ${formData.address}
🔧 Service: ${formData.serviceType}
📞 Contact Method: ${formData.contactMethod}
${formData.email ? `📧 Email: ${formData.email}` : ''}

💬 *Message:*
${formData.message}

Please get back to me. Thanks!`;
    }

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Simulate loading and redirect to WhatsApp
    setTimeout(() => {
      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');
      
      // Reset form
      setFormData({
        name: "",
        serviceType: "",
        message: "",
        contactMethod: "phone",
        email: "",
        address: "",
        area: "",
        fencingType: "",
        siteType: ""
      });
      setIsSubmitting(false);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button with Text */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-primary rounded-full shadow-xl flex items-center justify-center text-white group px-3 py-2 sm:px-4 sm:py-3 gap-2 sm:gap-3"
          data-testid="floating-query-button"
        >
          <MessageCircle size={18} className="group-hover:scale-110 transition-transform sm:w-5 sm:h-5" />
          <span className="text-xs sm:text-sm font-semibold">Buy Now</span>
          
          {/* Pulse animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-primary rounded-full opacity-30"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>

      {/* Query Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-[110]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Modal */}
            <motion.div
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] sm:w-[400px] md:w-[440px] lg:w-[480px] xl:w-[500px] max-w-[95vw] h-fit max-h-[calc(100vh-2rem)] sm:max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-[120] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Buy Now</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 min-w-[44px] min-h-[44px] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center justify-center"
                  data-testid="close-query-form"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your name"
                    required
                    className="min-h-[44px] text-base"
                    data-testid="query-name-input"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <Label htmlFor="serviceType" className="text-sm font-medium">Service Type</Label>
                  <Select 
                    value={formData.serviceType} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}
                    required
                  >
                    <SelectTrigger className="min-h-[44px]" data-testid="service-type-select">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Electric Fencing Specific Fields */}
                {formData.serviceType === "Electric Fencing Installation" && (
                  <>
                    {/* Area Field */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <h4 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-3 flex items-center">
                        ⚡ Electric Fencing Details
                      </h4>
                      
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="area" className="text-sm font-medium">Area to be Fenced</Label>
                          <Input
                            id="area"
                            value={formData.area}
                            onChange={(e) => setFormData(prev => ({ ...prev, area: e.target.value }))}
                            placeholder="e.g., 5000 sq ft, 2 acres, 100x50 meters"
                            data-testid="electric-fencing-area-input"
                          />
                        </div>

                        <div>
                          <Label htmlFor="siteType" className="text-sm font-medium">Site Type</Label>
                          <Select 
                            value={formData.siteType} 
                            onValueChange={(value) => setFormData(prev => ({ ...prev, siteType: value }))}
                          >
                            <SelectTrigger data-testid="site-type-select">
                              <SelectValue placeholder="Select site type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Commercial">Commercial</SelectItem>
                              <SelectItem value="Residential">Residential</SelectItem>
                              <SelectItem value="Industrial">Industrial</SelectItem>
                              <SelectItem value="Agricultural">Agricultural</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="fencingType" className="text-sm font-medium">Fencing Type</Label>
                          <Select 
                            value={formData.fencingType} 
                            onValueChange={(value) => setFormData(prev => ({ ...prev, fencingType: value }))}
                          >
                            <SelectTrigger data-testid="fencing-type-select">
                              <SelectValue placeholder="Select fencing type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Straight Fencing">Straight Fencing</SelectItem>
                              <SelectItem value="Openable Gate Fencing">Openable Gate Fencing</SelectItem>
                              <SelectItem value="Mixed (Straight + Gate)">Mixed (Straight + Gate)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Contact Method */}
                <div>
                  <Label className="text-sm font-medium">How would you like us to contact you?</Label>
                  <RadioGroup
                    value={formData.contactMethod}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, contactMethod: value }))}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone" />
                      <Label htmlFor="phone" className="flex items-center gap-2 cursor-pointer">
                        <Phone size={16} />
                        Phone Call (+91 7009154711 - Nikhil)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email" />
                      <Label htmlFor="email" className="flex items-center gap-2 cursor-pointer">
                        <Mail size={16} />
                        Email Response
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Email Input (conditional) */}
                {formData.contactMethod === "email" && (
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter your email address"
                      required
                      data-testid="query-email-input"
                    />
                  </div>
                )}

                {/* Address */}
                <div>
                  <Label htmlFor="address" className="text-sm font-medium">Your Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Enter your complete address"
                    required
                    data-testid="query-address-input"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-sm font-medium">Your Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Describe your requirements or ask any questions..."
                    rows={3}
                    required
                    data-testid="query-message-textarea"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:bg-gradient-secondary text-white"
                  data-testid="submit-query-button"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Opening WhatsApp...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <MessageCircle size={16} />
                      Book Now
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}