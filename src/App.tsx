import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import RopeAccessProjectGallery from "./pages/RopeAccessProjectGallery";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const RopeAccess = lazy(() => import("./pages/RopeAccess"));
const RopeAccessProjectGallery = lazy(() => import("./pages/RopeAccessProjectGallery"));
const Scaffolding = lazy(() => import("./pages/Scaffolding"));
const MobileAccess = lazy(() => import("./pages/MobileAccess"));
const Contact = lazy(() => import("./pages/Contact"));

const queryClient = new QueryClient();

const RouteChangeHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteChangeHandler />
        <Layout>
          <Suspense fallback={<div className="flex min-h-[40vh] items-center justify-center text-sm text-muted-foreground">Loading page...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/rope-access" element={<RopeAccess />} />
              <Route path="/services/rope-access/project-gallery" element={<RopeAccessProjectGallery />} />
              <Route path="/services/scaffolding" element={<Scaffolding />} />
              <Route path="/services/mobile-access" element={<MobileAccess />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
