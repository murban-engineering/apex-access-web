import { LazyMotion, domAnimation, m } from "framer-motion";
const motion = m;
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Award,
  Building,
  Building2,
  CheckCircle,
  ClipboardCheck,
  HardHat,
  LifeBuoy,
  Mail,
  MapPinned,
  Paintbrush,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ropeAccessTeamImg from "@/assets/rope-access-team.jpg";

const cmsContent = {
  seo: {
    title: "Rope Access Services | Certified Work-at-Height Specialists",
    description:
      "Professional rope access services for inspection, maintenance, restoration, and emergency support. Certified technicians deliver safer, faster, and cost-effective work-at-height solutions.",
  },
  hero: {
    eyebrow: "Rope Access Section",
    title: "Certified Rope Access Services for Critical Work at Height",
    description:
      "Rope access is a safe, engineered work-at-height method that uses ropes and specialized equipment to position certified technicians exactly where work is needed. Compared with scaffolding and lifts, rope access offers faster setup, lower cost, minimal site disruption, and reliable access to confined or complex structures.",
  },
  compliance: [
    "Internationally compliant work-at-height procedures",
    "Task-specific risk assessments and method statements",
    "Site rescue plans with standby capability",
    "Daily pre-use and documented equipment inspections",
  ],
};

const ropeServices = [
  { icon: Building2, title: "High-Rise Maintenance", description: "Reactive and planned maintenance for towers, façades, and hard-to-access elevations." },
  { icon: Search, title: "Façade Inspection", description: "Close visual and technical façade assessments to identify defects and compliance risks." },
  { icon: ClipboardCheck, title: "Structural Surveys", description: "Condition assessments, reporting, and photographic documentation for engineers and asset owners." },
  { icon: Paintbrush, title: "Painting & Coating", description: "Protective coating systems, remedial painting, and corrosion treatment at height." },
  { icon: Sparkles, title: "Cleaning & Restoration", description: "External cleaning, stain removal, sealing, and heritage-sensitive restoration services." },
  { icon: Wrench, title: "Welding at Height", description: "Qualified rope-access welding and minor steel repairs with strict hot-work controls." },
  { icon: Activity, title: "NDT Inspection", description: "Non-destructive testing support including visual, ultrasonic, and magnetic particle workflows." },
  { icon: LifeBuoy, title: "Rescue Support", description: "Dedicated standby rescue teams and emergency response capability for high-risk scopes." },
  { icon: HardHat, title: "Custom Installations", description: "Bespoke rigging, access system installs, anchors, signage, sensors, and more." },
];

const industries = [
  "Commercial real estate",
  "Oil & gas and energy",
  "Infrastructure and transport",
  "Mining and heavy industry",
  "Marine and ports",
  "Government and defense",
];

const costComparison = [
  { metric: "Mobilization lead time", ropeAccess: "1–2 days", traditional: "5–10 days" },
  { metric: "Site footprint", ropeAccess: "Very low", traditional: "High" },
  { metric: "Operational disruption", ropeAccess: "Minimal", traditional: "Moderate to high" },
  { metric: "Access in confined/complex areas", ropeAccess: "Excellent", traditional: "Limited" },
  { metric: "Typical project cost", ropeAccess: "15–40% lower", traditional: "Baseline" },
];

const sectionAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const RopeAccess = () => {
  return (
    <LazyMotion features={domAnimation}>
    <main className="bg-background text-foreground">
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-card">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <img
          src={ropeAccessTeamImg}
          alt="Rope access team on a high-rise project"
          className="absolute right-0 top-0 h-full w-2/3 object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="container mx-auto px-4 relative z-20 py-32">
          <div className="max-w-2xl">
            <motion.div initial="hidden" animate="show" variants={sectionAnim} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 uppercase tracking-wider">{cmsContent.hero.eyebrow}</Badge>
              <h1 className="text-4xl font-light text-architectural md:text-6xl">
                {cmsContent.hero.title}
              </h1>
              <p className="mt-6 text-base text-muted-foreground md:text-lg">
                {cmsContent.hero.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light text-architectural mb-6">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8">
            Contact our rope access specialists for a consultation and project quote.
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

export default RopeAccess;
