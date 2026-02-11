import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, CalendarClock, Clock3, Phone, ShieldCheck, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
          <Badge className="mb-4 uppercase tracking-widest" data-cms-field="mobile-access-hero-eyebrow">
            Mobile Access Platforms
          </Badge>
          <h1 className="max-w-5xl font-heading text-4xl font-bold leading-tight md:text-6xl" data-cms-field="mobile-access-hero-title">
            Safe, Reliable EWP Hire for Commercial, Industrial, and Infrastructure Projects
          </h1>
          <p className="mt-6 max-w-4xl text-base text-muted-foreground md:text-lg" data-cms-field="mobile-access-hero-description">
            Our mobile access platform module combines modern equipment fleets, flexible hire models, and strict compliance controls to deliver safe
            elevated access at speed. Select the right platform class, choose dry or wet hire, and request a quote in minutes.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild>
              <a href="#quote-form">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+1300123456">
                <Phone className="mr-2 h-4 w-4" /> Call 1300 123 456
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="mb-8 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Platform Types & Key Specs</h2>
          <p className="mt-3 text-muted-foreground" data-cms-field="mobile-access-platform-intro">
            Compare common EWP categories to match working height, outreach, and load requirements for your scope.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {platformTypes.map((platform) => (
            <Card key={platform.title} className="h-full">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">{platform.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Working height:</span> {platform.workingHeight}
                </p>
                <p>
                  <span className="font-medium text-foreground">Outreach:</span> {platform.outreach}
                </p>
                <p>
                  <span className="font-medium text-foreground">Load capacity:</span> {platform.loadCapacity}
                </p>
                <p>
                  <span className="font-medium text-foreground">Best for:</span> {platform.bestFor}
                </p>
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
                <CardTitle className="font-heading text-3xl">Hire Options</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {hireOptions.map((option) => (
                  <div key={option.title} className="rounded-lg border border-border p-4" data-cms-field="mobile-access-hire-option">
                    <option.icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-2 font-heading text-lg font-semibold">{option.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{option.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-3xl">Safety & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {complianceItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground" data-cms-field="mobile-access-compliance-item">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Licensed Operators Available",
                    "Documented Pre-Start Checks",
                    "Service & Inspection History",
                    "Emergency Response Support",
                  ].map((tag) => (
                    <Badge key={tag} variant="outline" className="justify-center py-2 text-center" data-cms-field="mobile-access-badge">
                      <ShieldCheck className="mr-2 h-4 w-4" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="quote-form" className="container mx-auto px-4 py-14 md:py-20">
        <Card className="mx-auto max-w-5xl">
          <CardHeader>
            <CardTitle className="font-heading text-3xl md:text-4xl">Request a Mobile Access Quote</CardTitle>
            <p className="text-muted-foreground" data-cms-field="mobile-access-quote-intro">
              Send us your site details and preferred platform type. Our team will provide equipment recommendations, availability, and pricing.
            </p>
          </CardHeader>
          <CardContent>
            <form className="grid gap-5 sm:grid-cols-2" data-cms-field="mobile-access-quote-form">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="fullName" placeholder="e.g. Jordan Lee" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder="Company name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="04xx xxx xxx" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Site Location</Label>
                <Input id="location" name="location" placeholder="Suburb / project site" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Hire Duration</Label>
                <Input id="duration" name="duration" placeholder="e.g. 2 weeks" required />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="platformType">Preferred Platform Type</Label>
                <select
                  id="platformType"
                  name="platformType"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a platform type
                  </option>
                  {platformTypes.map((platform) => (
                    <option key={platform.title} value={platform.title}>
                      {platform.title}
                    </option>
                  ))}
                  <option value="Not sure">Not sure - recommend best option</option>
                </select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="scope">Project Scope & Access Requirements</Label>
                <Textarea
                  id="scope"
                  name="scope"
                  rows={5}
                  placeholder="Tell us about task type, height, obstacles, timeline, and site constraints."
                  required
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">By submitting this form, you consent to being contacted about your quote request.</p>
                <div className="flex flex-wrap gap-3">
                  <Button type="submit">Submit Quote Request</Button>
                  <Button type="button" variant="outline" asChild>
                    <Link to="/services/scaffolding">View Scaffolding Services</Link>
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default MobileAccess;
