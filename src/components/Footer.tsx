import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { SERVICES } from "@/data/services";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="font-heading text-primary-foreground font-bold text-sm">AH</span>
            </div>
            <span className="font-heading text-foreground text-lg font-semibold tracking-wide uppercase">
              Access & Height
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Industry-leading access and height safety solutions. Trusted by Australia's top contractors since 2005.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4">
            <Link to="/services" className="font-heading text-foreground uppercase tracking-wider text-sm hover:text-primary transition-colors">
              Services
            </Link>
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((service) => (
              <li key={service.name}>
                <Link to={service.href} className="hover:text-primary transition-colors">{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4">
            <Link to="/about" className="font-heading text-foreground uppercase tracking-wider text-sm hover:text-primary transition-colors">
              Company
            </Link>
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/contact#quote-request" className="hover:text-primary transition-colors">Get a Quote</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4">
            <Link to="/contact" className="font-heading text-foreground uppercase tracking-wider text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> 1300 123 456</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@accessheight.com.au</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" /> 123 Industrial Way, Sydney NSW 2000</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Access & Height Safety Services. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
