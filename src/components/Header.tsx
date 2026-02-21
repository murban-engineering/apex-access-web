import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpeg";

import { SERVICES } from "@/data/services";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#our-services", children: SERVICES.map((service) => ({ name: service.name, href: service.href })) },
  { name: "Project Gallery", href: "/services/rope-access/project-gallery" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isNavLinkActive = (href: string) => {
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.slice(1);
    }

    if (href === "/") {
      return location.pathname === "/" && location.hash === "";
    }

    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3" aria-label="OTNO ACCESS SOLUTION LIMITED home page">
          <img src={logo} alt="OTNO Access Solution Logo" className="h-9 w-auto rounded-sm ring-1 ring-white/20" />
          <span className="hidden font-heading text-lg font-semibold uppercase tracking-wide text-foreground sm:block">
            OTNO ACCESS SOLUTION LIMITED
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isNavLinkActive(link.href)
                      ? "bg-white/10 text-foreground"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                  )}
                >
                  {link.name} <ChevronDown className="h-3 w-3" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-white/10 bg-card/95 p-2 shadow-2xl backdrop-blur">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isNavLinkActive(link.href)
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                )}
              >
                {link.name}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+1234567890" className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <Phone className="h-4 w-4" /> 1300 123 456
          </a>
          <Button asChild className="shadow-lg shadow-primary/30">
            <Link to="/contact#quote-request">Get a Quote</Link>
          </Button>
        </div>

        <button
          className="text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          type="button"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-card/95 backdrop-blur-xl lg:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4" aria-label="Mobile primary">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.href}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
                {link.children && (
                  <div className="pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 border-t border-white/10 pt-3">
              <a href="tel:+1234567890" className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" /> 1300 123 456
              </a>
              <Button asChild className="w-full">
                <Link to="/contact#quote-request" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
