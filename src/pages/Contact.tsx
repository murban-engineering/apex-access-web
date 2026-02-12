import { useEffect, useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/data/services";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "#quote-request") {
      return;
    }

    const quoteSection = document.getElementById("quote-request");

    if (!quoteSection) {
      return;
    }

    requestAnimationFrame(() => {
      quoteSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const company = String(formData.get("company") || "");
    const scope = String(formData.get("scope") || "");

    const subject = `Quotation Request - ${selectedService}`;
    const body = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${company || "N/A"}`,
      `Service: ${selectedService}`,
      "",
      "Project details:",
      scope,
    ].join("\n");

    window.location.href = `mailto:info@accessheight.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-primary font-heading uppercase tracking-[0.2em] text-sm mb-2">Contact</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase text-foreground">Let's Talk About Your Project</h1>
            <p className="text-muted-foreground mt-3">Reach out using any communication channel below and our team will respond quickly.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-4 text-sm">
                <h2 className="font-heading text-lg uppercase text-foreground">Reach us directly</h2>
                <a href="tel:+1300123456" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" /> 1300 123 456
                </a>
                <a href="mailto:info@accessheight.com.au" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" /> info@accessheight.com.au
                </a>
                <a href="https://wa.me/611300123456" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" /> WhatsApp chat
                </a>
                <p className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  123 Industrial Way, Sydney NSW 2000
                </p>
              </CardContent>
            </Card>

            <Card id="quote-request" className="lg:col-span-2 bg-card border-border scroll-mt-24">
              <CardContent className="p-6">
                <h2 className="font-heading text-lg uppercase text-foreground mb-4">Request a quotation</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                  <Input name="fullName" placeholder="Full Name" required />
                  <Input name="email" type="email" placeholder="Email Address" required />
                  <Input name="phone" placeholder="Phone Number" required />
                  <Input name="company" placeholder="Company Name" />
                  <div className="md:col-span-2">
                    <Select value={selectedService} onValueChange={setSelectedService} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service for quotation" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((service) => (
                          <SelectItem key={service.name} value={service.name}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea
                    className="md:col-span-2"
                    rows={5}
                    name="scope"
                    placeholder="Tell us what you need help with (scope, location, timeline, access requirements)"
                    required
                  />
                  <Button type="submit" className="md:col-span-2 w-full md:w-auto" disabled={!selectedService}>
                    Send Quotation Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
