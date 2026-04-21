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
    <LazyMotion features={domAnimation}>
    <main className="bg-background text-foreground">
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-card">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <img
          src={metallicStructure}
          alt="Scaffolding metallic structure"
          className="absolute right-0 top-0 h-full w-2/3 object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="container mx-auto px-4 relative z-20 py-32">
          <div className="max-w-2xl">
            <motion.div initial="hidden" animate="show" variants={sectionAnim} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 uppercase tracking-widest">{scaffoldingContent.hero.eyebrow}</Badge>
              <h1 className="text-4xl font-light text-architectural md:text-6xl">{scaffoldingContent.hero.title}</h1>
              <p className="mt-6 text-base text-muted-foreground md:text-lg">{scaffoldingContent.hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/contact">Request Scaffolding Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+254723124739"><Phone className="mr-2 h-4 w-4" /> +254 723 124739</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light text-architectural mb-6">Need Scaffolding Services?</h2>
          <p className="text-muted-foreground mb-8">
            Contact our team for design, erection, hire, and compliance-managed scaffolding solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link to="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+254723124739"><Phone className="mr-2 h-4 w-4" /> +254 723 124739</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  </LazyMotion>
  );
};

export default Scaffolding;
