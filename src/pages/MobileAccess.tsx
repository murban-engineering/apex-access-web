import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, CalendarClock, Clock3, Mail, Phone, ShieldCheck, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import workersHighrise2 from "@/assets/workers-highrise-2.jpg";

const platformTypes = [
  {
    title: "Scissor Lifts",
    workingHeight: "6m–18m",
    outreach: "Vertical-only access",
    loadCapacity: "230kg–680kg SWL",
    bestFor: "Internal fit-outs, mechanical installation, and slab-level maintenance.",
  },
  {
    title: "Articulating Boom Lifts",
    workingHeight: "11m–43m",
    outreach: "6m–21m horizontal",
    loadCapacity: "227kg–454kg SWL",
    bestFor: "Complex obstacles, façade work, and plant shutdown access.",
  },
  {
    title: "Telescopic Boom Lifts",
    workingHeight: "20m–58m",
    outreach: "12m–24m horizontal",
    loadCapacity: "300kg–450kg SWL",
    bestFor: "Long-reach infrastructure works and open-area construction sites.",
  },
  {
    title: "Vertical Mast Lifts",
    workingHeight: "5m–12m",
    outreach: "Compact footprint",
    loadCapacity: "159kg–227kg SWL",
    bestFor: "Narrow aisle access, warehouse servicing, and electrical tasks.",
  },
];

const hireOptions = [
  {
    icon: Clock3,
    title: "Dry Hire",
    description:
      "Cost-effective equipment-only rental with pre-delivery checks, operator familiarisation, and rapid swap-out support.",
  },
  {
    icon: Truck,
    title: "Wet Hire with Operator",
    description:
      "Licensed and experienced operators available for high-risk, complex, or time-critical work fronts requiring controlled execution.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Terms",
    description:
      "Daily, weekly, monthly, and project-duration hire plans with mobilisation scheduling aligned to your program.",
  },
];

const complianceItems = [
  "Compliant with AS/NZS 1418 and AS 2550 operational standards",
  "Pre-start risk assessments, SWMS, and operator competency verification",
  "Scheduled servicing, statutory inspections, and maintenance traceability",
  "Site delivery briefings covering exclusion zones and rescue contingencies",
  "Emergency support and breakdown response for active project sites",
];

const MobileAccess = () => {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border bg-card/40">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <Badge className="mb-4 uppercase tracking-widest">Mobile Access Platforms</Badge>
              <h1 className="max-w-5xl text-4xl font-light text-architectural md:text-6xl">
                Safe, Reliable EWP Hire for Commercial, Industrial, and Infrastructure Projects
              </h1>
              <p className="mt-6 max-w-4xl text-base text-muted-foreground md:text-lg">
                Our mobile access platform module combines modern equipment fleets, flexible hire models, and strict compliance controls to deliver safe elevated access at speed.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+254723124739"><Phone className="mr-2 h-4 w-4" /> +254 723 124739</a>
                </Button>
              </div>
            </div>
            <img
              src={workersHighrise2}
              alt="Workers on elevated platform"
              className="w-64 h-64 object-cover rounded-3xl hidden lg:block"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-light text-architectural md:text-4xl">Platform Types & Key Specs</h2>
          <p className="mt-3 text-muted-foreground">Compare common EWP categories to match working height, outreach, and load requirements.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {platformTypes.map((platform) => (
            <Card key={platform.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-light text-architectural">{platform.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p><span className="font-medium text-foreground">Working height:</span> {platform.workingHeight}</p>
                <p><span className="font-medium text-foreground">Outreach:</span> {platform.outreach}</p>
                <p><span className="font-medium text-foreground">Load capacity:</span> {platform.loadCapacity}</p>
                <p><span className="font-medium text-foreground">Best for:</span> {platform.bestFor}</p>
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
                <CardTitle className="text-3xl font-light text-architectural">Hire Options</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {hireOptions.map((option) => (
                  <div key={option.title} className="rounded-lg border border-border p-4">
                    <option.icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-2 text-lg font-light text-architectural">{option.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{option.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-light text-architectural">Safety & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {complianceItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Licensed Operators Available", "Documented Pre-Start Checks", "Service & Inspection History", "Emergency Response Support"].map((tag) => (
                    <Badge key={tag} variant="outline" className="justify-center py-2 text-center">
                      <ShieldCheck className="mr-2 h-4 w-4" />{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <Card className="mx-auto max-w-5xl">
          <CardHeader>
            <CardTitle className="text-3xl font-light text-architectural md:text-4xl">Request a Mobile Access Quote</CardTitle>
            <p className="text-muted-foreground">Send us your site details and preferred platform type.</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="tel:+254723124739" className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors">
                  <Phone className="h-4 w-4 text-primary" /> +254 723 124739
                </a>
                <a href="mailto:otnoacess@gmail.com" className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors">
                  <Mail className="h-4 w-4 text-primary" /> otnoacess@gmail.com
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/contact">Go to Contact Page</Link>
                </Button>
                <Button type="button" variant="outline" asChild>
                  <Link to="/services/scaffolding">View Scaffolding Services</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default MobileAccess;
