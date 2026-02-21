import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { SERVICES } from "@/data/services";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#070b14]">
    <div className="container mx-auto px-4 py-14">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <img src={logo} alt="OTNO Access Solution Logo" className="h-10 w-auto rounded-sm ring-1 ring-white/20" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Industry-leading access and height safety solutions. Trusted by Australia&apos;s top contractors since 2005.
          </p>
        </div>

        <div>
          <h4 className="mb-4">
            <Link to="/#our-services" className="font-heading text-sm uppercase tracking-wider text-foreground transition-colors hover:text-primary">
              Services
            </Link>
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((service) => (
              <li key={service.name}>
                <Link to={service.href} className="transition-colors hover:text-foreground">{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4">
            <Link to="/#testimonials" className="font-heading text-sm uppercase tracking-wider text-foreground transition-colors hover:text-primary">
              Company
            </Link>
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/#testimonials" className="transition-colors hover:text-foreground">Client Testimonials</Link></li>
            <li><Link to="/#featured-projects" className="transition-colors hover:text-foreground">Featured Projects</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-foreground">Contact</Link></li>
            <li><Link to="/contact#quote-request" className="transition-colors hover:text-foreground">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4">
            <Link to="/contact" className="font-heading text-sm uppercase tracking-wider text-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> 1300 123 456</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@accessheight.com.au</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> 123 Industrial Way, Sydney NSW 2000</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground md:flex-row">
        <p>&copy; {new Date().getFullYear()} OTNO ACCESS SOLUTION LIMITED Safety Services. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/contact" className="transition-colors hover:text-foreground">Privacy Policy</Link>
          <Link to="/contact" className="transition-colors hover:text-foreground">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
