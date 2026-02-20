import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { SERVICES } from "@/data/services";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="OTNO Access Solution Logo" className="h-10 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Industry-leading access and height safety solutions. Trusted by Australia's top contractors since 2005.
          </p>
        </div>

        <div>
          <h4 className="mb-4">
            <Link to="/#our-services" className="font-heading text-foreground uppercase tracking-wider text-sm hover:text-primary transition-colors">
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

        <div>
          <h4 className="mb-4">
            <Link to="/#testimonials" className="font-heading text-foreground uppercase tracking-wider text-sm hover:text-primary transition-colors">
              Company
            </Link>
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/#testimonials" className="hover:text-primary transition-colors">Client Testimonials</Link></li>
            <li><Link to="/#featured-projects" className="hover:text-primary transition-colors">Featured Projects</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/contact#quote-request" className="hover:text-primary transition-colors">Get a Quote</Link></li>
          </ul>
        </div>

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
        <p>&copy; {new Date().getFullYear()} OTNO ACCESS SOLUTION LIMITED Safety Services. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
