import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ROPE_ACCESS_PROJECTS } from "@/data/ropeAccessProjects";

const filters = ["All", "Commercial", "Infrastructure", "Energy", "Marine", "Industrial"] as const;

const RopeAccessProjectGallery = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<(typeof filters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (selectedIndustry === "All") return ROPE_ACCESS_PROJECTS;
    return ROPE_ACCESS_PROJECTS.filter((project) => project.industry === selectedIndustry);
  }, [selectedIndustry]);

  return (
    <main>
      <section className="bg-card py-14 md:py-20">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Rope Access</p>
          <h1 className="mt-3 font-heading text-4xl font-bold md:text-5xl">Project Gallery</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Explore completed rope access works across commercial, infrastructure, energy, marine, and industrial assets.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-heading text-3xl font-bold">Recent Projects</h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedIndustry === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedIndustry(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.title} className="project-image-frame overflow-hidden rounded-xl border border-border/80 bg-card/40 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1">
              <img src={project.image} alt={project.title} className="project-image h-56 w-full object-cover" loading="lazy" decoding="async" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-wider text-primary">{project.industry}</p>
                <h3 className="mt-1 font-heading text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-14 md:pb-20">
        <Card className="border-primary/20">
          <CardContent className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-heading text-2xl font-semibold">Need a similar rope access scope completed?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Tell us about your access challenge and timeline.</p>
            </div>
            <Button asChild>
              <Link to="/contact">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default RopeAccessProjectGallery;
