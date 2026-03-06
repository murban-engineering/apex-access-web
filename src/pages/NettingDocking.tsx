import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building,
  ClipboardCheck,
  HardHat,
  LifeBuoy,
  Mail,
  Phone,
  Shield,
  Waves,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import safetyWorkerPpe from "@/assets/safety-worker-ppe.jpg";

const pageContent = {
  hero: {
    eyebrow: "Netting & Docking Services",
    title: "Netting and Docking Systems Built for Reliable Fall Protection and Site Access",
    description:
      "Our netting and docking services deliver engineered fall-arrest netting, temporary decking, and docking access systems for active construction and maintenance sites.",
  },
  seo: {
    title: "Netting & Docking Services | Temporary Decking, Edge Protection, and Access Safety",
    description: "Specialist netting and docking services for civil, commercial, and industrial sites.",
  },
};

const serviceModules = [
  { icon: Shield, title: "Safety Netting Installation", description: "Certified crews install horizontal and vertical safety net systems to reduce fall risk during structural and roofing works." },
  { icon: Building, title: "Temporary Decking & Void Protection", description: "Modular temporary decking systems protect floor openings, service penetrations, and incomplete edges." },
  { icon: Wrench, title: "Docking Access Setup", description: "Docking and loading-zone access setups are planned and installed for safer movement of people, materials, and equipment." },
  { icon: ClipboardCheck, title: "Inspection & Compliance Records", description: "Routine inspections, tagged handovers, and traceable records help maintain clear compliance evidence." },
];

const industries = [
  "Commercial construction", "Warehousing and logistics hubs", "Marine and port facilities",
  "Industrial shutdown projects", "Infrastructure and civil works", "High-rise refurbishment",
];

const deliveryWorkflow = [
  { step: "01", title: "Scope Review & Site Risk Assessment", detail: "We assess hazard zones, traffic flow, and work sequencing to determine the right netting and docking controls." },
  { step: "02", title: "Engineered Layout & Method Planning", detail: "Our team develops installation layouts, load considerations, and safe work method documentation for approval." },
  { step: "03", title: "Installation, Tagging & Handover", detail: "Certified installers complete the system setup, verify tension/fixings, and issue formal handover documentation." },
  { step: "04", title: "Ongoing Inspection & Modifications", detail: "Scheduled inspections and responsive modifications keep systems compliant as site conditions evolve." },
];

const sectionAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const NettingDocking = () => {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border bg-card/40">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={sectionAnim} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 uppercase tracking-widest">{pageContent.hero.eyebrow}</Badge>
              <h1 className="max-w-5xl text-4xl font-light text-architectural md:text-6xl">{pageContent.hero.title}</h1>
              <p className="mt-6 max-w-4xl text-base text-muted-foreground md:text-lg">{pageContent.hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Badge variant="outline">{pageContent.seo.title}</Badge>
                <Badge variant="secondary">Detailed service landing content</Badge>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/contact">Request Netting & Docking Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+254723124739"><Phone className="mr-2 h-4 w-4" /> +254 723 124739</a>
                </Button>
              </div>
            </motion.div>
            <img
              src={safetyWorkerPpe}
              alt="Safety worker with PPE equipment"
              className="w-64 h-64 object-cover rounded-3xl hidden lg:block"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-light text-architectural md:text-4xl">Complete Netting & Docking Service Modules</h2>
          <p className="mt-4 text-muted-foreground">From design through inspections, we provide end-to-end delivery for netting, temporary decking, and docking access controls.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {serviceModules.map((module) => (
            <Card key={module.title} className="h-full">
              <CardHeader>
                <module.icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-light text-architectural">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-card py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-light text-architectural">Where We Deliver</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <li key={industry} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{industry}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-light text-architectural">Why Clients Choose Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2"><HardHat className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Competent installation crews with documented safety procedures.</p>
                <p className="flex items-start gap-2"><LifeBuoy className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Practical fall-prevention controls tailored to live-site conditions.</p>
                <p className="flex items-start gap-2"><Waves className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Solutions suited to industrial, logistics, and marine docking environments.</p>
                <p className="flex items-start gap-2"><ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Inspection logs and handover records ready for audit and contractor review.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-light text-architectural md:text-4xl">Delivery Workflow</h2>
          <p className="mt-3 text-muted-foreground">Every project follows a clear process to protect site teams and meet compliance requirements.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {deliveryWorkflow.map((item) => (
            <Card key={item.step}>
              <CardHeader>
                <CardTitle className="text-2xl font-light text-architectural">
                  <span className="mr-3 text-primary">{item.step}</span>{item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <Card className="container mx-auto max-w-5xl px-4 py-10 md:px-10">
          <h2 className="text-3xl font-light text-architectural md:text-4xl">Plan Your Netting & Docking Scope</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Share your site requirements and program constraints. We will recommend the right system and provide a clear quote.
          </p>
          <div className="mt-4 flex flex-wrap gap-6 text-sm">
            <a href="tel:+254723124739" className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors">
              <Phone className="h-4 w-4 text-primary" /> +254 723 124739
            </a>
            <a href="mailto:otnoacess@gmail.com" className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors">
              <Mail className="h-4 w-4 text-primary" /> otnoacess@gmail.com
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/services/scaffolding">View Scaffolding Services</Link>
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default NettingDocking;
