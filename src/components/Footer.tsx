import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-20 border-t border-border bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light text-architectural mb-4">
              OTNO ACCESS SOLUTION LIMITED
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Industry-leading rope access, scaffolding, and height safety solutions for commercial and industrial projects across Kenya & East Africa.
            </p>
          </div>

          <div>
            <h4 className="text-minimal text-muted-foreground mb-6">SERVICES</h4>
            <div className="space-y-3">
              <Link to="/services" className="block text-foreground hover:text-muted-foreground transition-colors duration-300">
                Rope Access
              </Link>
              <Link to="/services" className="block text-foreground hover:text-muted-foreground transition-colors duration-300">
                Scaffolding
              </Link>
              <Link to="/services" className="block text-foreground hover:text-muted-foreground transition-colors duration-300">
                Mobile Access
              </Link>
              <Link to="/services" className="block text-foreground hover:text-muted-foreground transition-colors duration-300">
                Netting & Decking
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-minimal text-muted-foreground mb-6">CONTACT</h4>
            <div className="space-y-3">
              <a href="mailto:otnoacess@gmail.com" className="block text-foreground hover:text-muted-foreground transition-colors duration-300">
                otnoacess@gmail.com
              </a>
              <address className="not-italic text-muted-foreground">
                Embakasi, Old North Airport Rd<br />Next to Naivas Embakasi
              </address>
              <p className="text-muted-foreground">P.O. Box 99215-80107, Mombasa</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-minimal text-muted-foreground">
            &copy; {new Date().getFullYear()} OTNO ACCESS SOLUTION LIMITED. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/contact" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
