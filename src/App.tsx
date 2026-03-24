import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Layout from "./components/Layout";
import Index from "./pages/Index";

const loadNotFound = () => import("./pages/NotFound");
const loadServicesPage = () => import("./pages/ServicesPage");
const loadRopeAccess = () => import("./pages/RopeAccess");
const loadRopeAccessProjectGallery = () => import("./pages/RopeAccessProjectGallery");
const loadScaffolding = () => import("./pages/Scaffolding");
const loadMobileAccess = () => import("./pages/MobileAccess");
const loadNettingDocking = () => import("./pages/NettingDocking");
const loadWork = () => import("./pages/Work");
const loadAbout = () => import("./pages/About");
const loadCatalogue = () => import("./pages/Catalogue");
const loadContact = () => import("./pages/Contact");

const NotFound = lazy(loadNotFound);
const ServicesPage = lazy(loadServicesPage);
const RopeAccess = lazy(loadRopeAccess);
const RopeAccessProjectGallery = lazy(loadRopeAccessProjectGallery);
const Scaffolding = lazy(loadScaffolding);
const MobileAccess = lazy(loadMobileAccess);
const NettingDocking = lazy(loadNettingDocking);
const Work = lazy(loadWork);
const About = lazy(loadAbout);
const Catalogue = lazy(loadCatalogue);
const Contact = lazy(loadContact);

const preloadRouteChunks = [
  loadServicesPage,
  loadRopeAccess,
  loadRopeAccessProjectGallery,
  loadScaffolding,
  loadMobileAccess,
  loadNettingDocking,
  loadWork,
  loadAbout,
  loadCatalogue,
  loadContact,
  loadNotFound,
] as const;

const queryClient = new QueryClient();

const RouteChangeHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const warmRoutes = () => {
      preloadRouteChunks.forEach((loadChunk) => {
        void loadChunk();
      });
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(warmRoutes, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(warmRoutes, 600);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="otno-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteChangeHandler />
          <Layout>
            <Suspense
              fallback={
                <div className="flex min-h-[40vh] items-center justify-center text-sm text-muted-foreground">
                  Loading page...
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/rope-access" element={<RopeAccess />} />
                <Route path="/services/rope-access/project-gallery" element={<RopeAccessProjectGallery />} />
                <Route path="/services/scaffolding" element={<Scaffolding />} />
                <Route path="/services/mobile-access" element={<MobileAccess />} />
                <Route path="/services/netting-decking" element={<NettingDocking />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
