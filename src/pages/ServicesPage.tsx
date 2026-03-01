import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { SERVICES } from "@/data/services";

const Services = () => {
  const services = SERVICES.map((s, i) => ({
    number: String(i + 1).padStart(2, "0"),
    title: s.name.toUpperCase(),
    description: s.description,
    href: s.href,
  }));

  return (
    <section className="pt-32 pb-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h1 className="text-minimal text-muted-foreground mb-4">SERVICES</h1>
            <h2 className="text-4xl md:text-6xl font-light text-architectural">What We Do</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {services.map((service) => (
              <Link to={service.href} key={service.number} className="group">
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium">{service.number}</span>
                  <div>
                    <h3 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Request for Quote */}
          <div className="mt-24 border-t border-border pt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-light text-architectural mb-4">Request a Quote</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get in touch with our team for a free consultation and project quote. We respond within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="tel:+254723124739"
                  className="flex items-center gap-3 text-lg text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  +254 723 124739
                </a>
                <a
                  href="mailto:otnoacess@gmail.com"
                  className="flex items-center gap-3 text-lg text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  otnoacess@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
