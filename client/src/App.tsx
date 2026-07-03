import { lazy, Suspense, useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/lib/scroll-to-top";
import { CCTVCamera } from "@/components/cctv-camera";
import { FloatingQueryButton } from "@/components/floating-query-button";
import { SplashScreen } from "@/components/splash-screen";
import HomePage from "@/pages/home";

const NotFound = lazy(() => import("@/pages/not-found"));
const ServicesPage = lazy(() => import("@/pages/services"));
const PackagesPage = lazy(() => import("@/pages/packages"));
const AboutPage = lazy(() => import("@/pages/about"));
const BlogsPage = lazy(() => import("@/pages/blogs"));
const BlogDetailPage = lazy(() => import("@/pages/blog-detail"));
const ContactPage = lazy(() => import("@/pages/contact"));
const PrivacyPolicyPage = lazy(() => import("@/pages/privacy-policy"));
const TermsConditionsPage = lazy(() => import("@/pages/terms-conditions"));
const AdminPage = lazy(() => import("@/pages/admin").then(m => ({ default: m.AdminPage })));
const ElectricFenceInstallationPage = lazy(() => import("@/pages/electric-fence-installation"));
const ElectricFenceJalandharPage = lazy(() => import("@/pages/electric-fence-jalandhar"));
const ElectricFenceLudhianaPage = lazy(() => import("@/pages/electric-fence-ludhiana"));
const ElectricFenceAmritsarPage = lazy(() => import("@/pages/electric-fence-amritsar"));
const ElectricFencePathankotPage = lazy(() => import("@/pages/electric-fence-pathankot"));
const ElectricFenceHoshiarpurPage = lazy(() => import("@/pages/electric-fence-hoshiarpur"));
const ElectricFencePhagwaraPage = lazy(() => import("@/pages/electric-fence-phagwara"));
const ElectricFenceKapurthalaPage = lazy(() => import("@/pages/electric-fence-kapurthala"));
const ElectricFenceNakodarPage = lazy(() => import("@/pages/electric-fence-nakodar"));
const ElectricFencePatialaPage = lazy(() => import("@/pages/electric-fence-patiala"));
const ElectricFenceMohaliPage = lazy(() => import("@/pages/electric-fence-mohali"));
const ElectricFenceBathindaPage = lazy(() => import("@/pages/electric-fence-bathinda"));
const ElectricFenceGurdaspurPage = lazy(() => import("@/pages/electric-fence-gurdaspur"));
const ElectricFenceMogaPage = lazy(() => import("@/pages/electric-fence-moga"));
const ElectricFenceSangrurPage = lazy(() => import("@/pages/electric-fence-sangrur"));
const ElectricFenceBarnalaPage = lazy(() => import("@/pages/electric-fence-barnala"));
const ElectricFenceFirozpurPage = lazy(() => import("@/pages/electric-fence-firozpur"));
const ElectricFenceRupnagarPage = lazy(() => import("@/pages/electric-fence-rupnagar"));
const ElectricFenceFatehgarhSahibPage = lazy(() => import("@/pages/electric-fence-fatehgarh-sahib"));
const ElectricFenceFazilkaPage = lazy(() => import("@/pages/electric-fence-fazilka"));
const ElectricFenceMuktsarPage = lazy(() => import("@/pages/electric-fence-muktsar"));
const ElectricFenceTarnTaranPage = lazy(() => import("@/pages/electric-fence-tarn-taran"));
const ElectricFenceMansaPage = lazy(() => import("@/pages/electric-fence-mansa"));
const ElectricFenceNawanshahrPage = lazy(() => import("@/pages/electric-fence-nawanshahr"));
const ElectricFenceMalerkotlaPage = lazy(() => import("@/pages/electric-fence-malerkotla"));
const CCTVInstallationPunjabPage = lazy(() => import("@/pages/cctv-installation-punjab"));
const CCTVJalandharPage = lazy(() => import("@/pages/cctv-jalandhar"));
const CCTVLudhianaPage = lazy(() => import("@/pages/cctv-ludhiana"));
const CCTVAmritsarPage = lazy(() => import("@/pages/cctv-amritsar"));
const CCTVPatialaPage = lazy(() => import("@/pages/cctv-patiala"));
const CCTVMohaliPage = lazy(() => import("@/pages/cctv-mohali"));
const CCTVBathindaPage = lazy(() => import("@/pages/cctv-bathinda"));
const CCTVPhagwaraPage = lazy(() => import("@/pages/cctv-phagwara"));
const CCTVKapurthalaPage = lazy(() => import("@/pages/cctv-kapurthala"));
const CCTVHoshiarpurPage = lazy(() => import("@/pages/cctv-hoshiarpur"));
const CCTVPathankotPage = lazy(() => import("@/pages/cctv-pathankot"));
const CCTVGurdaspurPage = lazy(() => import("@/pages/cctv-gurdaspur"));
const CCTVMogaPage = lazy(() => import("@/pages/cctv-moga"));
const CCTVNakodarPage = lazy(() => import("@/pages/cctv-nakodar"));
const CCTVSangrurPage = lazy(() => import("@/pages/cctv-sangrur"));
const CCTVRupnagarPage = lazy(() => import("@/pages/cctv-rupnagar"));
const CCTVFirozpurPage = lazy(() => import("@/pages/cctv-firozpur"));
const CCTVTarnTaranPage = lazy(() => import("@/pages/cctv-tarn-taran"));
const CCTVNawanshahrPage = lazy(() => import("@/pages/cctv-nawanshahr"));
const ElectricFenceNearMePage = lazy(() => import("@/pages/electric-fence-near-me"));
const CCTVInstallationNearMePage = lazy(() => import("@/pages/cctv-installation-near-me"));
const CCTVCameraServiceNearMePage = lazy(() => import("@/pages/cctv-camera-service-near-me"));
const CCTVForSchoolPage = lazy(() => import("@/pages/cctv-for-school"));
const CCTVForFactoryPage = lazy(() => import("@/pages/cctv-for-factory"));
const CCTVForWarehousePage = lazy(() => import("@/pages/cctv-for-warehouse"));
const CCTVForOfficePage = lazy(() => import("@/pages/cctv-for-office"));
const CCTVForHospitalPage = lazy(() => import("@/pages/cctv-for-hospital"));
const CCTVForCommercialPage = lazy(() => import("@/pages/cctv-for-commercial"));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" data-testid="page-loading-fallback">
      <div className="h-10 w-10 border-4 border-brand-red border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <CCTVCamera />
      <main className="pt-16 sm:pt-20">
        <Suspense fallback={<PageFallback />}>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/packages" component={PackagesPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/blogs" component={BlogsPage} />
            <Route path="/blog/:slug" component={BlogDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/privacy-policy" component={PrivacyPolicyPage} />
            <Route path="/terms-conditions" component={TermsConditionsPage} />
            <Route path="/admin" component={AdminPage} />

            {/* Electric Fence Installation — Punjab Pillar Page */}
            <Route path="/electric-fence-installation-punjab" component={ElectricFenceInstallationPage} />

            {/* Electric Fence Installation — City Pages */}
            <Route path="/electric-fence-installation-jalandhar" component={ElectricFenceJalandharPage} />
            <Route path="/electric-fence-installation-ludhiana" component={ElectricFenceLudhianaPage} />
            <Route path="/electric-fence-installation-amritsar" component={ElectricFenceAmritsarPage} />
            <Route path="/electric-fence-installation-pathankot" component={ElectricFencePathankotPage} />
            <Route path="/electric-fence-installation-hoshiarpur" component={ElectricFenceHoshiarpurPage} />
            <Route path="/electric-fence-installation-phagwara" component={ElectricFencePhagwaraPage} />
            <Route path="/electric-fence-installation-kapurthala" component={ElectricFenceKapurthalaPage} />
            <Route path="/electric-fence-installation-nakodar" component={ElectricFenceNakodarPage} />
            <Route path="/electric-fence-installation-patiala" component={ElectricFencePatialaPage} />
            <Route path="/electric-fence-installation-mohali" component={ElectricFenceMohaliPage} />
            <Route path="/electric-fence-installation-bathinda" component={ElectricFenceBathindaPage} />
            <Route path="/electric-fence-installation-gurdaspur" component={ElectricFenceGurdaspurPage} />
            <Route path="/electric-fence-installation-moga" component={ElectricFenceMogaPage} />
            <Route path="/electric-fence-installation-sangrur" component={ElectricFenceSangrurPage} />
            <Route path="/electric-fence-installation-barnala" component={ElectricFenceBarnalaPage} />
            <Route path="/electric-fence-installation-firozpur" component={ElectricFenceFirozpurPage} />
            <Route path="/electric-fence-installation-rupnagar" component={ElectricFenceRupnagarPage} />
            <Route path="/electric-fence-installation-fatehgarh-sahib" component={ElectricFenceFatehgarhSahibPage} />
            <Route path="/electric-fence-installation-fazilka" component={ElectricFenceFazilkaPage} />
            <Route path="/electric-fence-installation-muktsar" component={ElectricFenceMuktsarPage} />
            <Route path="/electric-fence-installation-tarn-taran" component={ElectricFenceTarnTaranPage} />
            <Route path="/electric-fence-installation-mansa" component={ElectricFenceMansaPage} />
            <Route path="/electric-fence-installation-nawanshahr" component={ElectricFenceNawanshahrPage} />
            <Route path="/electric-fence-installation-malerkotla" component={ElectricFenceMalerkotlaPage} />

            {/* CCTV Camera Installation — Punjab Pillar Page */}
            <Route path="/cctv-camera-installation-punjab" component={CCTVInstallationPunjabPage} />

            {/* CCTV Camera Installation — City Pages */}
            <Route path="/cctv-camera-installation-jalandhar" component={CCTVJalandharPage} />
            <Route path="/cctv-camera-installation-ludhiana" component={CCTVLudhianaPage} />
            <Route path="/cctv-camera-installation-amritsar" component={CCTVAmritsarPage} />
            <Route path="/cctv-camera-installation-patiala" component={CCTVPatialaPage} />
            <Route path="/cctv-camera-installation-mohali" component={CCTVMohaliPage} />
            <Route path="/cctv-camera-installation-bathinda" component={CCTVBathindaPage} />
            <Route path="/cctv-camera-installation-phagwara" component={CCTVPhagwaraPage} />
            <Route path="/cctv-camera-installation-kapurthala" component={CCTVKapurthalaPage} />
            <Route path="/cctv-camera-installation-hoshiarpur" component={CCTVHoshiarpurPage} />
            <Route path="/cctv-camera-installation-pathankot" component={CCTVPathankotPage} />
            <Route path="/cctv-camera-installation-gurdaspur" component={CCTVGurdaspurPage} />
            <Route path="/cctv-camera-installation-moga" component={CCTVMogaPage} />
            <Route path="/cctv-camera-installation-nakodar" component={CCTVNakodarPage} />
            <Route path="/cctv-camera-installation-sangrur" component={CCTVSangrurPage} />
            <Route path="/cctv-camera-installation-rupnagar" component={CCTVRupnagarPage} />
            <Route path="/cctv-camera-installation-firozpur" component={CCTVFirozpurPage} />
            <Route path="/cctv-camera-installation-tarn-taran" component={CCTVTarnTaranPage} />
            <Route path="/cctv-camera-installation-nawanshahr" component={CCTVNawanshahrPage} />

            {/* Near-Me Intent Pages */}
            <Route path="/electric-fence-installation-near-me" component={ElectricFenceNearMePage} />
            <Route path="/cctv-installation-near-me" component={CCTVInstallationNearMePage} />
            <Route path="/cctv-camera-service-near-me" component={CCTVCameraServiceNearMePage} />

            {/* Industry-Specific CCTV Pages */}
            <Route path="/best-cctv-camera-for-school" component={CCTVForSchoolPage} />
            <Route path="/best-cctv-camera-for-factory" component={CCTVForFactoryPage} />
            <Route path="/best-cctv-camera-for-warehouse" component={CCTVForWarehousePage} />
            <Route path="/best-cctv-camera-for-office" component={CCTVForOfficePage} />
            <Route path="/best-cctv-camera-for-hospital" component={CCTVForHospitalPage} />
            <Route path="/best-cctv-camera-for-commercial-buildings" component={CCTVForCommercialPage} />

            {/* Fallback to 404 */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
      
      {/* Floating Query Button - Available on all pages */}
      <FloatingQueryButton />
    </>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem("ks_splash_done")
  );

  const handleSplashDone = () => {
    sessionStorage.setItem("ks_splash_done", "1");
    setShowSplash(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {showSplash && <SplashScreen onDone={handleSplashDone} />}
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
