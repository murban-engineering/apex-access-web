import { useState } from "react";
import projectConcreteImg from "@/assets/project-concrete.jpg";
import projectScaffoldingWorkImg from "@/assets/project-scaffolding-work.jpg";
import projectFacadeScaffoldingImg from "@/assets/project-facade-scaffolding.jpg";
import ropeAccessTeamImg from "@/assets/rope-access-team.jpg";
import ropeAccessDrillingImg from "@/assets/rope-access-drilling.jpg";
import ropeAccessHeroImg from "@/assets/rope-access-hero.jpg";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const projects = [
    {
      image: projectConcreteImg,
      title: "CONCRETE REINFORCEMENT WORKS",
      location: "SYDNEY, 2024",
      category: "INFRASTRUCTURE",
      description: "Structural reinforcement at height using rope access techniques for a major infrastructure project.",
    },
    {
      image: ropeAccessTeamImg,
      title: "HIGH-RISE FAÇADE MAINTENANCE",
      location: "MELBOURNE, 2024",
      category: "ROPE ACCESS",
      description: "Full façade inspection and maintenance program for a 40-storey commercial tower.",
    },
    {
      image: projectScaffoldingWorkImg,
      title: "SCAFFOLDING HEIGHT OPERATIONS",
      location: "BRISBANE, 2023",
      category: "SCAFFOLDING",
      description: "Complex scaffolding system for multi-level industrial maintenance works.",
    },
    {
      image: projectFacadeScaffoldingImg,
      title: "FAÇADE SCAFFOLDING SYSTEM",
      location: "PERTH, 2023",
      category: "SCAFFOLDING",
      description: "Full-perimeter scaffolding for heritage building façade restoration.",
    },
    {
      image: ropeAccessDrillingImg,
      title: "BUILDING FAÇADE DRILLING",
      location: "SYDNEY, 2024",
      category: "ROPE ACCESS",
      description: "Precision drilling works on building façade using rope access for commercial installation.",
    },
    {
      image: ropeAccessHeroImg,
      title: "HIGH-RISE ROPE ACCESS INSPECTION",
      location: "ADELAIDE, 2023",
      category: "ROPE ACCESS",
      description: "Comprehensive structural inspection using IRATA-certified rope access techniques.",
    },
  ];

  const categories = ["ALL", "ROPE ACCESS", "SCAFFOLDING", "INFRASTRUCTURE"];

  const filteredProjects =
    activeCategory === "ALL" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">OUR WORK</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A curated selection of our height safety projects, each delivered with zero-incident commitment
              and meticulous attention to safety standards.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                      activeCategory === category ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-8">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                      <span className="text-minimal text-foreground">{project.category}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-minimal text-muted-foreground">{project.location}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              Ready to Start
              <br />
              Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's discuss how we can deliver safe and efficient access solutions for your next project.
            </p>
            <a
              href="/contact"
              className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
            >
              GET IN TOUCH
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
