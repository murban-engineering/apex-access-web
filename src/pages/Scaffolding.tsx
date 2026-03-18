import { Link } from "react-router-dom";
import { LazyMotion, domAnimation, m } from "framer-motion";
const motion = m;
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  ClipboardCheck,
  Factory,
  FileCheck2,
  HardHat,
  Mail,
  Phone,
  Ruler,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import metallicStructure from "@/assets/metallic-structure.jpg";

const scaffoldingContent = {
  seo: {
    title: "Scaffolding Services | Engineered Design, Erection, Hire & Compliance Management",
    description:
      "Professional scaffolding services for commercial and industrial projects.",
  },
  hero: {
    eyebrow: "Scaffolding Services",
    title: "Engineered Scaffolding Solutions for Safe Work-at-Height Access",
    description:
      "Scaffolding is a fully engineered work-at-height access system used to deliver safe and efficient construction, shutdown, and maintenance activities. Our team provides complete design, erection, hire, and compliance management with clear safety controls, quality assurance, and professional project delivery.",
  },
};

const serviceModules = [
  { icon: Ruler, title: "Scaffold Design & Engineering", description: "Site-specific scaffold concepts, design drawings, and certified engineering packages aligned to project scope, access requirements, and loading conditions." },
  { icon: HardHat, title: "Safe Erection, Modification & Dismantle", description: "Experienced scaffold teams deliver controlled erection and staged dismantle with exclusion zones, permit controls, and daily supervision." },
  { icon: Factory, title: "Commercial & Industrial Scaffold Hire", description: "Flexible scaffold hire solutions for short-term, long-term, and shutdown projects with responsive maintenance and component replacement." },
  { icon: ClipboardCheck, title: "Compliance Management", description: "End-to-end compliance workflows covering inspection schedules, tagging protocols, handover records, and ongoing access audits." },
];

const trustFeatures = [
  "Safety standards compliance to applicable national and site-specific regulations",
  "Engineered designs with documented load calculations and duty classifications",
  "Certified scaffold inspectors and competent supervision on active work fronts",
  "Scheduled statutory and project-specific scaffold inspections",
  "Clear load ratings, bay limits, and user guidance displayed on-site",
  "Task-specific risk assessments and method statements (SWMS/RAMS)",
  "On-site safety documentation including handover certificates and inspection registers",
  "Traceable quality records for principal contractors, auditors, and asset owners",
];

const deliverySteps = [
  { step: "01", title: "Technical Briefing & Site Survey", detail: "We review your scope, sequencing, and live-site constraints to define compliant access requirements and critical interfaces." },
  { step: "02", title: "Engineering, Load Review & Planning", detail: "Our engineering team prepares scaffold design layouts, tie patterns, and load calculations to suit use classes and operating conditions." },
  { step: "03", title: "Erection, Handover & Tagging", detail: "Certified crews install scaffold systems safely and provide formal handover with signage, load ratings, and access controls." },
  { step: "04", title: "Inspection Program & Compliance Support", detail: "We maintain a planned inspection regime, issue records, and coordinate modifications to keep the scaffold compliant throughout the project." },
];

const sectionAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const Scaffolding = () => {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border bg-card/40">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={sectionAnim} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 uppercase tracking-widest">{scaffoldingContent.hero.eyebrow}</Badge>
              <h1 className="max-w-5xl text-4xl font-light text-architectural md:text-6xl">{scaffoldingContent.hero.title}</h1>
              <p className="mt-6 max-w-4xl text-base text-muted-foreground md:text-lg">{scaffoldingContent.hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Badge variant="outline">{scaffoldingContent.seo.title}</Badge>
                <Badge variant="secondary">SEO-optimized service content</Badge>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/contact">Request Scaffolding Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+254723124739"><Phone className="mr-2 h-4 w-4" /> +254 723 124739</a>
                </Button>
              </div>
            </motion.div>
            <img
              src={metallicStructure}
              alt="Scaffolding metallic structure"
              className="w-64 h-64 object-cover rounded-3xl hidden lg:block"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-light text-architectural md:text-4xl">Complete Scaffolding Service Modules</h2>
          <p className="mt-3 text-muted-foreground">
            Delivered as a complete package, our scaffolding services combine engineering quality, compliant implementation, and practical site support.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {serviceModules.map((module) => (
            <Card key={module.title} className="h-full">
              <CardContent className="p-6">
                <module.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-xl font-light text-architectural">{module.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-card py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-light text-architectural">Safety, Engineering & Trust Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {trustFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground md:text-base">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-light text-architectural">Compliance Snapshot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Shield, label: "Standards Compliance", value: "Aligned to project and regulatory obligations" },
                  { icon: Calculator, label: "Load Calculations", value: "Documented engineering checks and sign-off" },
                  { icon: Users, label: "Certified Inspectors", value: "Competent scaffold inspection personnel" },
                  { icon: FileCheck2, label: "Safety Documentation", value: "RAMS/SWMS, tags, handovers, registers" },
                  { icon: Scale, label: "Load Ratings", value: "Clearly displayed duty and platform limits" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-border p-4">
                    <item.icon className="h-5 w-5 text-primary" />
                    <p className="mt-2 font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-light text-architectural md:text-4xl">Professional Delivery Framework</h2>
          <p className="mt-2 text-muted-foreground">
            A structured workflow keeps every scaffold project safe, efficient, and auditable.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {deliverySteps.map((step) => (
            <Card key={step.step} className="h-full">
              <CardContent className="p-6">
                <p className="text-sm font-semibold tracking-widest text-primary">STEP {step.step}</p>
                <h3 className="mt-2 text-xl font-light text-architectural">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-primary-foreground md:text-4xl">
            Need an Engineered Scaffolding Partner for Your Next Project?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-primary-foreground/85">
            Talk to our team for design review, scaffold hire planning, and full compliance-managed delivery.
          </p>
          <div className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <p className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" /> +254 723 124739</p>
            <p className="flex items-center justify-center gap-2"><Mail className="h-4 w-4" /> otnoacess@gmail.com</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Request a Project Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:+254723124739">+254 723 124739</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Scaffolding;
