import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { SERVICES } from "@/data/services";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#our-services", children: SERVICES.map((service) => ({ name: service.name, href: service.href })) },
  { name: "Projects", href: "/#featured-projects" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isNavLinkActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.slice(1);
    }

    if (href === '/') {
      return location.pathname === '/' && location.hash === '';
    }

    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="font-heading text-primary-foreground font-bold text-sm">AH</span>
          </div>
          <span className="font-heading text-foreground text-lg font-semibold tracking-wide uppercase hidden sm:block">
            Access & Height
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
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
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    isNavLinkActive(link.href) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name} <ChevronDown className="w-3 h-3" />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-56 bg-card border border-border rounded-md shadow-lg py-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
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
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  isNavLinkActive(link.href) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+1234567890" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> 1300 123 456
          </a>
          <Button asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.href}
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
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
                        className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-border flex flex-col gap-2">
              <a href="tel:+1234567890" className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" /> 1300 123 456
              </a>
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
