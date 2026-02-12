import { ReactNode, useMemo } from "react";
import { ChevronLeft, House } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { SERVICES } from "@/data/services";

const getPageLabel = (pathname: string) => {
  if (pathname === "/") {
    return "Home";
  }

  const serviceMatch = SERVICES.find((service) => service.href === pathname);
  if (serviceMatch) {
    return serviceMatch.name;
  }

  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments.at(-1) ?? "";
  return lastSegment
    .split("-")
    .map((segment) => `${segment.charAt(0).toUpperCase()}${segment.slice(1)}`)
    .join(" ");
};

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const currentPageLabel = useMemo(() => getPageLabel(location.pathname), [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {!isHomePage && (
        <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>

            <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="inline-flex items-center gap-1 transition-colors hover:text-primary">
                <House className="h-4 w-4" /> Home
              </Link>
              <span>/</span>
              <span className="text-foreground">{currentPageLabel}</span>
            </nav>
          </div>
        </div>
      )}
      <main className={`flex-1 ${isHomePage ? "pt-16" : "pt-0"}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
