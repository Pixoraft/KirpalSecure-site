import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/lib/scroll-to-top";
import { CCTVCamera } from "@/components/cctv-camera";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import ServicesPage from "@/pages/services";
import AboutPage from "@/pages/about";
import BlogsPage from "@/pages/blogs";
import ContactPage from "@/pages/contact";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <CCTVCamera />
      <main>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/blogs" component={BlogsPage} />
          <Route path="/contact" component={ContactPage} />
          {/* Fallback to 404 */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
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
