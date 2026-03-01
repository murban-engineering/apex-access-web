import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Award,
  Building,
  Building2,
  CheckCircle,
  ClipboardCheck,
  FileDown,
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
import ropeAccessHeroImg from "@/assets/rope-access-hero.jpg";

const cmsContent = {
  seo: {
    title: "Rope Access Services | IRATA & SPRAT Certified Work-at-Height Specialists",
    description:
      "Professional rope access services for inspection, maintenance, restoration, and emergency support. Certified IRATA/SPRAT technicians deliver safer, faster, and cost-effective work-at-height solutions.",
  },
  hero: {
    eyebrow: "Rope Access Section",
    title: "Certified Rope Access Services for Critical Work at Height",
    description:
      "Rope access is a safe, engineered work-at-height method that uses ropes and specialized equipment to position certified technicians exactly where work is needed. Compared with scaffolding and lifts, rope access offers faster setup, lower cost, minimal site disruption, and reliable access to confined or complex structures.",
  },
  compliance: [
    "IRATA & SPRAT compliant procedures",
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

const caseStudies = [
  { name: "Case Study: 48-Storey Façade Remediation", size: "PDF • 1.2 MB" },
  { name: "Case Study: Offshore Flare Stack NDT", size: "PDF • 980 KB" },
  { name: "Case Study: Bridge Expansion Joint Works", size: "PDF • 1.6 MB" },
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
    <main className="bg-background text-foreground">
      <section className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={sectionAnim} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 uppercase tracking-wider">{cmsContent.hero.eyebrow}</Badge>
              <h1 className="max-w-4xl text-4xl font-light text-architectural md:text-6xl">
                {cmsContent.hero.title}
              </h1>
              <p className="mt-6 max-w-4xl text-base text-muted-foreground md:text-lg">
                {cmsContent.hero.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Badge variant="outline">{cmsContent.seo.title}</Badge>
                <Badge variant="secondary">SEO-ready section content</Badge>
              </div>
            </motion.div>
            <img
              src={ropeAccessHeroImg}
              alt="Rope access technician at height"
              className="w-64 h-64 object-cover rounded-3xl hidden lg:block"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0 md:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="safety">Safety & Certification</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="industries">Industries Served</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-light text-architectural md:text-3xl">Why rope access outperforms traditional height access</h2>
                <p className="mt-4 text-muted-foreground">
                  Rope access is engineered for precision and control. Instead of large temporary structures, technicians deploy rope systems rapidly,
                  reducing setup time while maintaining strict safety standards.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    "Safer controlled positioning",
                    "Faster setup and demobilization",
                    "Cost-effective delivery model",
                    "Low-disruption project execution",
                    "Access to confined and complex structures",
                  ].map((item) => (
                    <div key={item} className="rounded-lg border border-border bg-secondary/40 p-3 text-sm font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-light text-architectural">Safety Management & Certification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Every scope is delivered by trained rope access technicians operating under documented procedures.
                  </p>
                  <ul className="space-y-3">
                    {cmsContent.compliance.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-light text-architectural">Certification Badges</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  {[
                    { icon: Award, label: "IRATA International" },
                    { icon: ShieldCheck, label: "SPRAT Certified" },
                    { icon: ClipboardCheck, label: "Documented SWMS" },
                    { icon: MapPinned, label: "Site Rescue Ready" },
                  ].map((badge) => (
                    <div key={badge.label} className="flex items-center gap-3 rounded-lg border border-border p-3">
                      <badge.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{badge.label}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ropeServices.map((service) => (
                <Card key={service.title} className="h-full">
                  <CardContent className="p-6">
                    <service.icon className="h-8 w-8 text-primary" />
                    <h3 className="mt-4 text-xl font-light text-architectural">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="industries" className="mt-6">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="font-heading text-2xl font-semibold md:text-3xl">Industries Served</h2>
                <p className="mt-3 text-muted-foreground">
                  We support asset owners, EPC contractors, and maintenance providers requiring precise, compliant, and low-disruption access.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {industries.map((industry) => (
                    <div key={industry} className="rounded-lg border border-border p-3 text-sm">
                      {industry}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="bg-card py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-light text-architectural">Project Gallery</h2>
              <p className="mt-2 text-muted-foreground">
                Browse rope access projects as a standalone section.
              </p>
            </div>
            <Button asChild>
              <Link to="/services/rope-access/project-gallery">
                Open Project Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-light text-architectural">Case Study Downloads</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {caseStudies.map((study) => (
              <a
                key={study.name}
                href="#"
                className="flex items-center justify-between rounded-lg border border-border p-3 transition hover:bg-secondary/50"
              >
                <div>
                  <p className="text-sm font-medium">{study.name}</p>
                  <p className="text-xs text-muted-foreground">{study.size}</p>
                </div>
                <FileDown className="h-4 w-4 text-primary" />
              </a>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="bg-card py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-architectural">Cost Comparison: Rope Access vs Traditional Access</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60">
                <tr>
                  <th className="p-4 font-semibold">Metric</th>
                  <th className="p-4 font-semibold text-primary">Rope Access</th>
                  <th className="p-4 font-semibold">Scaffold / Lift</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row) => (
                  <tr key={row.metric} className="border-t border-border">
                    <td className="p-4">{row.metric}</td>
                    <td className="p-4 text-primary">{row.ropeAccess}</td>
                    <td className="p-4 text-muted-foreground">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <Card className="overflow-hidden border-primary/20">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="bg-primary p-8 text-primary-foreground md:p-10">
              <h2 className="text-3xl font-light">Request Rope Access Quote</h2>
              <p className="mt-3 text-primary-foreground/85">
                Share your scope and receive a rapid response from our rope access specialists.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> otnoacess@gmail.com</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +254 723 124739</p>
                <p className="flex items-center gap-2"><Building className="h-4 w-4" /> Kenya & East Africa coverage</p>
              </div>
            </div>

            <div className="space-y-4 p-8 md:p-10">
              <p className="text-muted-foreground">Please use our contact page for quote requests.</p>
              <Button asChild className="w-full sm:w-auto">
                <Link to="/contact">
                  Request Rope Access Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default RopeAccess;
