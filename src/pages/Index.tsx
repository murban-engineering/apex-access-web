import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, ArrowRight, Phone, Star, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import heroBg from "@/assets/hero-bg.jpg";
import { SERVICES } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const certifications = [
  { icon: Shield, label: "ISO 45001 Certified" },
  { icon: Award, label: "IRATA Member" },
  { icon: CheckCircle, label: "SafeWork Licensed" },
  { icon: Shield, label: "Fully Insured" },
  { icon: Award, label: "NASC Accredited" },
];

const projects = [
  { title: "Sydney Harbour Bridge Maintenance", category: "Rope Access", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" },
  { title: "Commercial Tower Scaffolding", category: "Scaffolding", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" },
  { title: "Stadium Safety Netting Install", category: "Netting & Decking", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80" },
];

const testimonials = [
  { name: "James Carter", company: "BuildCorp Australia", quote: "Access & Height delivered on a complex rope access project with zero safety incidents. Professional, reliable, and highly skilled." },
  { name: "Sarah Mitchell", company: "Turner Construction", quote: "Their scaffolding team set up a 30-storey system in record time. Exceptional planning and execution from start to finish." },
  { name: "David Nguyen", company: "Lendlease", quote: "We've worked with Access & Height for 5 years — they're our go-to for anything at height. Unmatched safety standards." },
];

type QuoteFormData = {
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  projectLocation: string;
  projectStartDate: string;
  projectDetails: string;
  budget: string;
  services: string[];
};

const initialQuoteForm: QuoteFormData = {
  clientName: "",
  companyName: "",
  email: "",
  phone: "",
  projectLocation: "",
  projectStartDate: "",
  projectDetails: "",
  budget: "",
  services: [],
};

const Index = () => {
  const location = useLocation();
  const [quoteForm, setQuoteForm] = useState<QuoteFormData>(initialQuoteForm);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<(QuoteFormData & { createdAt: string }) | null>(null);
  const quoteSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const clearPrintMode = () => {
      document.body.classList.remove("print-quote-only");
    };

    window.addEventListener("afterprint", clearPrintMode);

    return () => {
      window.removeEventListener("afterprint", clearPrintMode);
      clearPrintMode();
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get("quote") === "1") {
      activateQuoteForm();
    }
  }, [location.search]);

  const activateQuoteForm = () => {
    setShowQuoteForm(true);
    requestAnimationFrame(() => {
      quoteSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const toggleService = (serviceName: string) => {
    setQuoteForm((current) => {
      const alreadySelected = current.services.includes(serviceName);

      return {
        ...current,
        services: alreadySelected
          ? current.services.filter((name) => name !== serviceName)
          : [...current.services, serviceName],
      };
    });
  };

  const submitQuoteRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmittedQuote({
      ...quoteForm,
      createdAt: new Date().toLocaleString("en-AU", {
        dateStyle: "long",
        timeStyle: "short",
      }),
    });
  };

  const selectedServiceDetails = SERVICES.filter((service) => submittedQuote?.services.includes(service.name));

  const handleQuotePrint = () => {
    document.body.classList.add("print-quote-only");
    window.print();
    window.setTimeout(() => {
      document.body.classList.remove("print-quote-only");
    }, 300);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-primary font-heading uppercase tracking-[0.3em] text-sm mb-4">
              Safety at Every Level
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase leading-tight text-foreground mb-6">
              Access & Height<br />
              <span className="text-primary">Safety Services</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
              Industry-leading rope access, scaffolding, and height safety solutions for commercial and industrial projects across Australia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="text-base px-8">
                <button type="button" onClick={activateQuoteForm}>Request a Quote <ArrowRight className="ml-2 w-4 h-4" /></button>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary/50 text-primary hover:bg-primary/10">
                <a href="tel:+1300123456"><Phone className="mr-2 w-4 h-4" /> Call Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="our-services" className="scroll-mt-20 py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-primary font-heading uppercase tracking-[0.2em] text-sm mb-2">What We Do</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">Our Services</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div key={service.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}>
                <Link to={service.href}>
                  <Card className="bg-secondary/50 border-border hover:border-primary/50 transition-all group h-full">
                    <CardContent className="p-6">
                      <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-heading text-lg font-semibold uppercase text-foreground mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                      <span className="inline-flex items-center mt-4 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {certifications.map((c) => (
              <div key={c.label} className="flex items-center gap-2 text-muted-foreground">
                <c.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="scroll-mt-20 py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-primary font-heading uppercase tracking-[0.2em] text-sm mb-2">Our Work</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">Featured Projects</h2>
          </motion.div>
          <div className="featured-projects-marquee">
            <div className="featured-projects-track">
              {[...projects, ...projects].map((p, index) => (
                <div key={`${p.title}-${index}`} className="featured-project-card group relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary text-xs font-heading uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{p.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild className="border-primary/50 text-primary hover:bg-primary/10">
              <Link to="/projects">View All Projects <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-primary font-heading uppercase tracking-[0.2em] text-sm mb-2">Trusted By Industry Leaders</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">What Our Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}>
                <Card className="bg-card border-border h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.quote}"</p>
                    <div>
                      <p className="text-foreground font-medium text-sm">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-primary font-heading uppercase tracking-[0.2em] text-sm mb-2">Contact</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">Reach Us Anytime</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-3">Get in touch through phone, email, WhatsApp, or by sharing your details in the contact form.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-background border-border">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-heading uppercase text-foreground text-lg">Communication Channels</h3>
                <a href="tel:+1300123456" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>1300 123 456</span>
                </a>
                <a href="mailto:info@accessheight.com.au" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@accessheight.com.au</span>
                </a>
                <a href="https://wa.me/611300123456" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>WhatsApp Chat</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <span>123 Industrial Way, Sydney NSW 2000</span>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 bg-background border-border">
              <CardContent className="p-6">
                <h3 className="font-heading uppercase text-foreground text-lg mb-4">Quick Contact Form</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" required />
                  <Input type="email" placeholder="Email Address" required />
                  <Input placeholder="Phone Number" required />
                  <Input placeholder="Preferred Contact Method" />
                  <Textarea className="md:col-span-2" rows={4} placeholder="How can we help you?" required />
                  <Button type="button" className="md:col-span-2 w-full md:w-auto">Submit Enquiry</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Get a free, no-obligation quote for your next project. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="text-base px-8">
              <button type="button" onClick={activateQuoteForm}>Request a Quote</button>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+1300123456"><Phone className="mr-2 w-4 h-4" /> 1300 123 456</a>
            </Button>
          </div>
        </div>
      </section>

      {showQuoteForm && (
        <section id="quote-request" ref={quoteSectionRef} className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8 text-center">
              <p className="text-primary font-heading uppercase tracking-[0.2em] text-sm mb-2">Project Quotation</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">Request Form</h2>
              <p className="text-muted-foreground mt-3">Tell us about your scope and we'll prepare a quotation aligned with our core services.</p>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6 md:p-8">
                <form className="space-y-6" onSubmit={submitQuoteRequest}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="clientName">Contact Name</Label>
                      <Input id="clientName" value={quoteForm.clientName} onChange={(event) => setQuoteForm((current) => ({ ...current, clientName: event.target.value }))} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company</Label>
                      <Input id="companyName" value={quoteForm.companyName} onChange={(event) => setQuoteForm((current) => ({ ...current, companyName: event.target.value }))} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={quoteForm.email} onChange={(event) => setQuoteForm((current) => ({ ...current, email: event.target.value }))} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" value={quoteForm.phone} onChange={(event) => setQuoteForm((current) => ({ ...current, phone: event.target.value }))} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectLocation">Project Location</Label>
                      <Input id="projectLocation" value={quoteForm.projectLocation} onChange={(event) => setQuoteForm((current) => ({ ...current, projectLocation: event.target.value }))} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectStartDate">Target Start Date</Label>
                      <Input id="projectStartDate" type="date" value={quoteForm.projectStartDate} onChange={(event) => setQuoteForm((current) => ({ ...current, projectStartDate: event.target.value }))} required />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Required Services</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {SERVICES.map((service) => (
                        <label key={service.name} className="flex items-start gap-3 rounded-md border border-border p-3 cursor-pointer hover:border-primary/50 transition-colors">
                          <input
                            type="checkbox"
                            checked={quoteForm.services.includes(service.name)}
                            onChange={() => toggleService(service.name)}
                            className="mt-1"
                          />
                          <div>
                            <p className="font-medium text-foreground text-sm">{service.name}</p>
                            <p className="text-muted-foreground text-xs">{service.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectDetails">Project Details</Label>
                    <Textarea
                      id="projectDetails"
                      rows={5}
                      value={quoteForm.projectDetails}
                      onChange={(event) => setQuoteForm((current) => ({ ...current, projectDetails: event.target.value }))}
                      placeholder="Include site conditions, access constraints, and preferred timelines."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget (optional)</Label>
                    <Input id="budget" value={quoteForm.budget} onChange={(event) => setQuoteForm((current) => ({ ...current, budget: event.target.value }))} placeholder="e.g. AUD 25,000 - 40,000" />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">Generate Printable Quotation</Button>
                </form>
              </CardContent>
            </Card>

            {submittedQuote && (
              <Card id="quote-print-area" className="mt-10 bg-card border-primary/40">
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-border pb-4">
                    <div>
                      <p className="text-primary font-heading uppercase tracking-[0.2em] text-xs">Quotation Summary</p>
                      <h3 className="font-heading text-2xl font-semibold uppercase text-foreground">Access & Height Safety Services</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Generated: {submittedQuote.createdAt}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <p><span className="font-semibold text-foreground">Contact:</span> {submittedQuote.clientName}</p>
                    <p><span className="font-semibold text-foreground">Company:</span> {submittedQuote.companyName}</p>
                    <p><span className="font-semibold text-foreground">Email:</span> {submittedQuote.email}</p>
                    <p><span className="font-semibold text-foreground">Phone:</span> {submittedQuote.phone}</p>
                    <p><span className="font-semibold text-foreground">Location:</span> {submittedQuote.projectLocation}</p>
                    <p><span className="font-semibold text-foreground">Target Start Date:</span> {submittedQuote.projectStartDate}</p>
                    {submittedQuote.budget && (
                      <p className="md:col-span-2"><span className="font-semibold text-foreground">Budget:</span> {submittedQuote.budget}</p>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Selected Services</h4>
                    <ul className="space-y-2 text-sm">
                      {selectedServiceDetails.length > 0 ? (
                        selectedServiceDetails.map((service) => (
                          <li key={service.name} className="rounded-md border border-border p-3">
                            <p className="font-medium text-foreground">{service.name}</p>
                            <p className="text-muted-foreground">{service.description}</p>
                          </li>
                        ))
                      ) : (
                        <li className="text-muted-foreground">No services were selected.</li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project Scope Notes</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{submittedQuote.projectDetails}</p>
                  </div>

                  <div className="flex justify-end print:hidden">
                    <Button type="button" onClick={handleQuotePrint}>
                      Print Quotation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
