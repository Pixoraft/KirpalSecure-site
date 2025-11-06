import { SEOHead } from "@/components/seo-head";
import { Shield, Lock, Eye, Database, UserCheck, FileText, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 6, 2025";

  return (
    <>
      <SEOHead
        title="Privacy Policy | Kirpal Securities"
        description="Privacy Policy for Kirpal Securities - Learn how we collect, use, and protect your personal information when you use our security services in Jalandhar."
        keywords="privacy policy, data protection, Kirpal Securities, security services privacy"
        url="https://kirpalsecurities.com/privacy-policy"
        type="website"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-brand-red text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Privacy Policy</h1>
            <p className="text-xl text-center text-white/90">
              Your privacy is important to us
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Welcome to Kirpal Securities. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our website 
                  or use our security services, and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Identity Data:</strong> First name, last name, username or similar identifier</li>
                  <li><strong>Contact Data:</strong> Address, email address, telephone numbers</li>
                  <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
                  <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us</li>
                  <li><strong>Service Data:</strong> Information about security services you inquire about or purchase</li>
                </ul>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How We Use Your Information</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>To provide and deliver security products and services you have requested</li>
                  <li>To process your payments and manage your account</li>
                  <li>To respond to your inquiries and customer service requests</li>
                  <li>To send you important information regarding our services, changes to our terms, or other administrative information</li>
                  <li>To improve our website and services based on your feedback and usage patterns</li>
                  <li>To send you marketing communications (with your consent where required by law)</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Security</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                  used or accessed in an unauthorized way, altered or disclosed. Our security measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Secure servers and encrypted data transmission</li>
                  <li>Limited access to personal data on a need-to-know basis</li>
                  <li>Regular security assessments and updates</li>
                  <li>Secure payment processing through trusted third-party providers</li>
                  <li>Employee training on data protection and privacy</li>
                </ul>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Legal Rights</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Right to access:</strong> Request access to your personal data</li>
                  <li><strong>Right to correction:</strong> Request correction of inaccurate or incomplete personal data</li>
                  <li><strong>Right to erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to object:</strong> Object to processing of your personal data</li>
                  <li><strong>Right to restriction:</strong> Request restriction of processing your personal data</li>
                  <li><strong>Right to data portability:</strong> Request transfer of your personal data to you or a third party</li>
                  <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time where we rely on consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Retention</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
                  including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  When we no longer need your personal data, we will securely delete or anonymize it. If this is not possible 
                  (for example, because your personal data has been stored in backup archives), we will securely store your 
                  personal data and isolate it from further processing until deletion is possible.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Links</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Our website may include links to third-party websites, plug-ins and applications. Clicking on those links 
                  or enabling those connections may allow third parties to collect or share data about you. We do not control 
                  these third-party websites and are not responsible for their privacy statements. When you leave our website, 
                  we encourage you to read the privacy policy of every website you visit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookies</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our website uses cookies to distinguish you from other users of our website. This helps us to provide you 
                  with a good experience when you browse our website and also allows us to improve our site.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access 
                  cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible 
                  or not function properly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
                  privacy policy on this page and updating the "Last Updated" date at the top of this policy. You are advised 
                  to review this privacy policy periodically for any changes.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-brand-red" size={24} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us:
                </p>
                <Card className="bg-gray-50 dark:bg-gray-700">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="text-brand-red" size={20} />
                        <a 
                          href="mailto:kirpalsecurities@gmail.com" 
                          className="text-brand-red hover:underline"
                          data-testid="privacy-email"
                        >
                          kirpalsecurities@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="text-brand-red" size={20} />
                        <a 
                          href="tel:7009154711" 
                          className="text-brand-red hover:underline"
                          data-testid="privacy-phone"
                        >
                          +91 7009154711 (Nikhil - Technical Lead)
                        </a>
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
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
