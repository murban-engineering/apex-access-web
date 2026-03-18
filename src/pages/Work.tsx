import { useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
const motion = m;
import constructionWorkersBw2 from "@/assets/construction-workers-bw-2.jpg";
import constructionAerial from "@/assets/construction-aerial.jpg";
import constructionSilhouettes2 from "@/assets/construction-silhouettes-2.jpg";
import workersHighrise2 from "@/assets/workers-highrise-2.jpg";
import safetyWorkerPpe from "@/assets/safety-worker-ppe.jpg";
import metallicStructure from "@/assets/metallic-structure.jpg";
import constructionWorkersRebar from "@/assets/construction-workers-rebar.jpg";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const projects = [
    {
      image: constructionWorkersBw2,
      title: "STRUCTURAL STEEL REINFORCEMENT",
      location: "NAIROBI, 2024",
      category: "INFRASTRUCTURE",
      description: "Structural reinforcement at height using rope access techniques for a major infrastructure project.",
    },
    {
      image: constructionAerial,
      title: "HIGH-RISE SCAFFOLDING WORKS",
      location: "MOMBASA, 2024",
      category: "SCAFFOLDING",
      description: "Full scaffolding system installation for a multi-storey commercial development.",
    },
    {
      image: constructionSilhouettes2,
      title: "FAÇADE ACCESS & MAINTENANCE",
      location: "NAIROBI, 2023",
      category: "ROPE ACCESS",
      description: "Comprehensive façade inspection and maintenance program using certified rope access.",
    },
    {
      image: workersHighrise2,
      title: "ELEVATED PLATFORM OPERATIONS",
      location: "KISUMU, 2023",
      category: "ROPE ACCESS",
      description: "High-rise platform access and maintenance using mobile elevated work platforms.",
    },
    {
      image: safetyWorkerPpe,
      title: "SAFETY COMPLIANCE WORKS",
      location: "NAKURU, 2024",
      category: "INFRASTRUCTURE",
      description: "Full safety compliance and PPE-controlled works for industrial maintenance projects.",
    },
    {
      image: constructionWorkersRebar,
      title: "CONCRETE REINFORCEMENT AT HEIGHT",
      location: "ELDORET, 2023",
      category: "INFRASTRUCTURE",
      description: "Precision rebar installation and concrete reinforcement works at height for commercial construction.",
    },
  ];

  const categories = ["ALL", "ROPE ACCESS", "SCAFFOLDING", "INFRASTRUCTURE"];

  const filteredProjects =
    activeCategory === "ALL" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <LazyMotion features={domAnimation}>
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
                      decoding="async"
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

      {/* Kenya Coverage Map */}
      <section className="py-32 bg-card/40 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-6">
                  Project Coverage
                  <br />
                  Across Kenya
                </h2>
                <p className="text-xl text-muted-foreground max-w-xl mb-8">
                  Headquartered in Nairobi with active operations across Kenya's major cities and industrial regions.
                </p>
                <div className="space-y-4">
                  {["Nairobi HQ", "Mombasa", "Kisumu", "Nakuru", "Eldoret"].map((city) => (
                    <div key={city} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">{city}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="rounded-2xl overflow-hidden border border-border bg-background p-4 md:p-6">
                  <img
                    src="/kenya-map.svg"
                    alt="Map of Kenya showing project coverage"
                    className="w-full h-auto"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Scaffolding Management System for Hire */}
      <section className="py-32 bg-card/40 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-light text-architectural mb-6">
                Scaffolding Management
                <br />
                System for Hire
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mb-12">
                Our fully engineered scaffolding management systems are available for short-term and long-term hire — designed for commercial, industrial, and shutdown projects with full compliance support.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Design & Engineering",
                  description: "Site-specific scaffold designs with certified engineering packages, load calculations, and duty classifications.",
                },
                {
                  title: "Erection & Dismantle",
                  description: "Professional crews for controlled erection, staged modifications, and safe dismantle with permit controls.",
                },
                {
                  title: "Compliance & Inspection",
                  description: "Scheduled inspections, tagging protocols, handover certificates, and ongoing compliance audits throughout hire.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-background border border-border rounded-2xl p-8"
                >
                  <h3 className="text-xl font-light text-architectural mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              <a
                href="/contact"
                className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
              >
                ENQUIRE ABOUT HIRE
                <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300" />
              </a>
              <a
                href="/services/scaffolding"
                className="inline-block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                VIEW SCAFFOLDING SERVICES
                <span className="absolute bottom-0 left-0 w-full h-px bg-muted-foreground group-hover:bg-foreground transition-colors duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
              </a>
            </motion.div>
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
  </LazyMotion>
  );
};

export default Work;
