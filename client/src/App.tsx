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
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import ServicesPage from "@/pages/services";
import ProductsPage from "@/pages/products";
import PackagesPage from "@/pages/packages";
import AboutPage from "@/pages/about";
import BlogsPage from "@/pages/blogs";
import BlogDetailPage from "@/pages/blog-detail";
import ContactPage from "@/pages/contact";
import { AdminPage } from "@/pages/admin";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <CCTVCamera />
      <main className="pt-16 sm:pt-20">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/packages" component={PackagesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/blogs" component={BlogsPage} />
          <Route path="/blog/:slug" component={BlogDetailPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/admin" component={AdminPage} />
          {/* Fallback to 404 */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      
      {/* Floating Query Button - Available on all pages */}
      <FloatingQueryButton />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
