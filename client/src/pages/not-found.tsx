import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found - Kirpal Securities"
        description="The page you're looking for doesn't exist. Explore our security solutions including CCTV installation, electric fencing and biometric systems in Jalandhar."
        keywords="Kirpal Securities, security solutions Jalandhar, CCTV installation Punjab, home security systems"
        url="https://kirpalsecurities.com/404"
        type="website"
      />
      
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="flex justify-center mb-6">
              <AlertCircle className="h-16 w-16 text-brand-red" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>

            <Link href="/">
              <Button className="bg-gradient-primary hover:bg-gradient-secondary text-white" data-testid="button-home">
                <Home className="mr-2" size={18} />
                Go Back Home
              </Button>
            </Link>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Quick Links:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link href="/services">
                  <Button variant="outline" size="sm" data-testid="link-services">Services</Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" size="sm" data-testid="link-products">Products</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="sm" data-testid="link-contact">Contact</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
