import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import manNacelleImg from "@/assets/man-nacelle.jpg";

const MobileAccess = () => {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-card">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <img
          src={manNacelleImg}
          alt="Operator using a mobile elevated work platform"
          className="absolute right-0 top-0 h-full w-2/3 object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="container mx-auto px-4 relative z-20 py-32">
          <div className="max-w-2xl">
            <Badge className="mb-4 uppercase tracking-widest">Mobile Access Platforms</Badge>
            <h1 className="text-4xl font-light text-architectural md:text-6xl">
              Safe, Reliable EWP Hire for Commercial, Industrial, and Infrastructure Projects
            </h1>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
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
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light text-architectural mb-6">Need Mobile Access Platforms?</h2>
          <p className="text-muted-foreground mb-8">
            Contact our team for scissor lifts, boom lifts, and operator-supported elevated access solutions.
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
  );
};

export default MobileAccess;
