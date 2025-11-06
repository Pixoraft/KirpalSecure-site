import { SEOHead } from "@/components/seo-head";
import { FileText, AlertCircle, CheckCircle, XCircle, DollarSign, Shield, Users, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsConditionsPage() {
  const lastUpdated = "November 6, 2025";

  return (
    <>
      <SEOHead
        title="Terms and Conditions | Kirpal Securities"
        description="Terms and Conditions for Kirpal Securities - Read our terms of service, warranty information, and service policies for security solutions in Jalandhar."
        keywords="terms and conditions, service terms, Kirpal Securities, warranty policy"
        url="https://kirpalsecurities.com/terms-conditions"
        type="website"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-brand-red text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Terms and Conditions</h1>
            <p className="text-xl text-center text-white/90">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-center text-white/75 mt-4">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <div className="prose dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  By accessing and using the services of Kirpal Securities, you accept and agree to be bound by the terms 
                  and provisions of this agreement. If you do not agree to abide by the above, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Services Provided</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Kirpal Securities provides the following security solutions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>CCTV Camera Installation and Maintenance</li>
                  <li>Biometric Access Control Systems</li>
                  <li>Electric Fencing Installation</li>
                  <li>Video Door Phone Systems</li>
                  <li>Fire Alarm Systems</li>
                  <li>Networking Solutions</li>
                  <li>Smart Home Security Integration</li>
                  <li>Technical Support and Maintenance Services</li>
                </ul>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Pricing and Payment</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">3.1 Quotations</h3>
                    <p>All prices quoted are subject to change without notice. Final pricing will be confirmed in writing before service commencement.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">3.2 Payment Terms</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>50% advance payment required before installation begins</li>
                      <li>Remaining 50% due upon completion of installation</li>
                      <li>Payment can be made via cash, bank transfer, or online payment</li>
                      <li>All prices are inclusive of applicable taxes unless otherwise stated</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">3.3 Additional Charges</h3>
                    <p>Additional charges may apply for:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Site visits beyond the initial consultation</li>
                      <li>Materials and equipment not included in the original quotation</li>
                      <li>Emergency or after-hours service calls</li>
                      <li>Travel expenses for locations outside Jalandhar city limits</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Warranty and Guarantee</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">4.1 Product Warranty</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>All products carry manufacturer's warranty (typically 1-2 years)</li>
                      <li>Warranty coverage varies by product - details provided at time of purchase</li>
                      <li>Warranty covers manufacturing defects and malfunctions under normal use</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">4.2 Installation Warranty</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>12-month warranty on professional installation workmanship</li>
                      <li>Free service for any installation-related issues during warranty period</li>
                      <li>Does not cover damage caused by user negligence or external factors</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">4.3 Warranty Exclusions</h3>
                    <p>Warranty does not cover:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Damage caused by improper use, negligence, or accidents</li>
                      <li>Damage from natural disasters, power surges, or electrical issues</li>
                      <li>Modifications or repairs performed by unauthorized personnel</li>
                      <li>Normal wear and tear</li>
                      <li>Cosmetic damage that does not affect functionality</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Customer Responsibilities</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Customers are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Providing accurate information about the installation site and requirements</li>
                  <li>Ensuring adequate access to the installation area during scheduled times</li>
                  <li>Providing stable electrical power supply as per equipment specifications</li>
                  <li>Maintaining equipment according to manufacturer's recommendations</li>
                  <li>Notifying us immediately of any issues or malfunctions</li>
                  <li>Not attempting repairs or modifications without authorization</li>
                  <li>Ensuring payment as per agreed terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Cancellation and Refund Policy</h2>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">6.1 Cancellation by Customer</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Cancellations before installation: Full refund of advance payment minus 10% processing fee</li>
                      <li>Cancellations after installation has begun: No refund on advance payment</li>
                      <li>Cancellation requests must be made in writing (email or WhatsApp)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">6.2 Rescheduling</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Installation appointments can be rescheduled up to 48 hours before the scheduled date</li>
                      <li>Last-minute cancellations (less than 24 hours) may incur a rescheduling fee</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Limitation of Liability</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Kirpal Securities shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Any indirect, incidental, or consequential damages arising from use of our products or services</li>
                  <li>Loss or damage to property not directly caused by our installation work</li>
                  <li>Security breaches or incidents that occur due to factors beyond the scope of installed systems</li>
                  <li>Delays in service delivery due to unforeseen circumstances, natural disasters, or force majeure events</li>
                  <li>Issues arising from customer's failure to maintain equipment or follow recommended practices</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Our total liability is limited to the amount paid for the specific service or product in question.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Maintenance and Support</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">8.1 Technical Support</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>24/7 emergency support available for critical issues</li>
                      <li>Free technical support during warranty period</li>
                      <li>Response time: Within 24 hours for standard queries, within 4 hours for emergencies</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">8.2 Annual Maintenance Contracts (AMC)</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Optional AMC packages available for ongoing maintenance</li>
                      <li>Includes periodic inspections, cleaning, and preventive maintenance</li>
                      <li>Priority service and discounted rates on repairs and parts</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Intellectual Property</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  All content on our website, including text, graphics, logos, images, and software, is the property of 
                  Kirpal Securities or its content suppliers and is protected by intellectual property laws. You may not 
                  reproduce, distribute, or create derivative works from this content without our express written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Privacy</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to 
                  understand how we collect, use, and protect your personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Dispute Resolution</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In the event of any dispute arising from these terms or our services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>First attempt at resolution through direct communication with our customer service team</li>
                  <li>If unresolved, disputes will be subject to mediation before legal action</li>
                  <li>Legal jurisdiction: All disputes shall be governed by the laws of India</li>
                  <li>Venue: Courts in Jalandhar, Punjab shall have exclusive jurisdiction</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Modifications to Terms</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Kirpal Securities reserves the right to modify these terms and conditions at any time. Changes will be 
                  effective immediately upon posting to our website. Your continued use of our services after changes are 
                  posted constitutes your acceptance of the modified terms. We encourage you to review these terms periodically.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Severability</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall 
                  continue in full force and effect.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">14. Contact Information</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <Card className="bg-gray-50 dark:bg-gray-700">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="text-brand-red" size={20} />
                        <a 
                          href="mailto:kirpalsecurities@gmail.com" 
                          className="text-brand-red hover:underline"
                          data-testid="terms-email"
                        >
                          kirpalsecurities@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="text-brand-red" size={20} />
                        <div>
                          <a 
                            href="tel:7009154711" 
                            className="text-brand-red hover:underline block"
                            data-testid="terms-phone-nikhil"
                          >
                            +91 7009154711 (Nikhil - Technical Lead)
                          </a>
                          <a 
                            href="tel:9463687535" 
                            className="text-brand-red hover:underline block"
                            data-testid="terms-phone-naveen"
                          >
                            +91 9463687535 (Naveen - Installation Head)
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="text-brand-red mt-1" size={20} />
                        <div className="text-gray-700 dark:text-gray-300">
                          <p className="font-medium">Kirpal Securities</p>
                          <p className="text-sm">Urban Estate Ph. 2, Road Opp. Hotel Imperia Suites,</p>
                          <p className="text-sm">Aggarwal Dhaba Road, Jalandhar, Punjab</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> By using our services, you acknowledge that you have read, understood, and agree 
                    to be bound by these Terms and Conditions.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
