import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import projectConcreteImg from "@/assets/project-concrete.jpg";
import projectScaffoldingWorkImg from "@/assets/project-scaffolding-work.jpg";
import projectFacadeScaffoldingImg from "@/assets/project-facade-scaffolding.jpg";
import ropeAccessTeamImg from "@/assets/rope-access-team.jpg";

const services = [
  {
    number: "01",
    title: "ROPE ACCESS",
    description: "IRATA-certified technicians for inspection, maintenance, and high-rise works across Kenya.",
  },
  {
    number: "02",
    title: "SCAFFOLDING",
    description: "Design, erection, hire, and compliance management for commercial and industrial projects in East Africa.",
  },
  {
    number: "03",
    title: "MOBILE ACCESS PLATFORMS",
    description: "EWP and boom lift hire with operator support for safe, efficient elevated access.",
  },
  {
    number: "04",
    title: "NETTING & DECKING",
    description: "Safety netting, edge protection, and temporary decking for fall prevention on site.",
  },
];

const projects = [
  {
    image: projectConcreteImg,
    title: "CONCRETE REINFORCEMENT WORKS",
    location: "NAIROBI, 2024",
    description: "Structural reinforcement at height using rope access techniques for a major infrastructure project.",
  },
  {
    image: ropeAccessTeamImg,
    title: "HIGH-RISE FAÇADE MAINTENANCE",
    location: "MOMBASA, 2024",
    description: "Full façade inspection and maintenance program for a 40-storey commercial tower.",
  },
  {
    image: projectScaffoldingWorkImg,
    title: "SCAFFOLDING HEIGHT OPERATIONS",
    location: "KISUMU, 2023",
    description: "Complex scaffolding system for multi-level industrial maintenance works.",
  },
  {
    image: projectFacadeScaffoldingImg,
    title: "FAÇADE SCAFFOLDING SYSTEM",
    location: "NAKURU, 2023",
    description: "Full-perimeter scaffolding for heritage building façade restoration.",
  },
];

const testimonials = [
  {
    name: "James Ochieng",
    company: "Kenya Construction Ltd",
    quote:
      "OTNO ACCESS SOLUTION LIMITED delivered on a complex rope access project with zero safety incidents. Professional, reliable, and highly skilled.",
  },
  {
    name: "Sarah Wanjiku",
    company: "Nairobi Developments",
    quote:
      "Their scaffolding team set up a 30-storey system in record time. Exceptional planning and execution from start to finish.",
  },
  {
    name: "David Mwangi",
    company: "East African Builders",
    quote:
      "We've worked with OTNO ACCESS SOLUTION LIMITED for 5 years — they're our go-to for anything at height. Unmatched safety standards.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white text-architectural mb-8 reveal">
            OTNO ACCESS
            <br />
            SOLUTION
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto reveal-delayed">
            Industry-leading height safety services for commercial and industrial projects across Kenya & East Africa
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 reveal-delayed">
            <Link
              to="/services"
              className="group relative px-10 py-4 border-2 border-white text-white text-minimal overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">OUR SERVICES</span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
            <Link
              to="/contact"
              className="group relative px-10 py-4 bg-white text-black text-minimal overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">CONTACT US</span>
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
          <div className="w-px h-16 bg-white/40" />
          <div className="text-minimal text-white/60 mt-4 rotate-90 origin-center">SCROLL</div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-minimal text-muted-foreground mb-4">SERVICES</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                What We Do
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
              {services.map((service) => (
                <div key={service.number} className="group">
                  <div className="flex items-start space-x-6">
                    <span className="text-minimal text-muted-foreground font-medium">
                      {service.number}
                    </span>
                    <div>
                      <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">ABOUT</h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Safety Philosophy
                </h3>
                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We believe every worker deserves to return home safely. Our practice focuses on
                    delivering height safety solutions that are both effective and uncompromising in quality.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With over 1,200 projects completed and a 99.9% safety record, our team of IRATA-certified
                    technicians sets the industry standard for rope access and height works.
                  </p>
                </div>
              </div>
              <div className="space-y-12">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-6">APPROACH</h4>
                  <div className="space-y-6">
                    <div className="border-l-2 border-foreground pl-6">
                      <h5 className="text-lg font-medium mb-2">Safety First</h5>
                      <p className="text-muted-foreground">ISO 45001 certified with zero-incident commitment</p>
                    </div>
                    <div className="border-l-2 border-foreground pl-6">
                      <h5 className="text-lg font-medium mb-2">Expert Teams</h5>
                      <p className="text-muted-foreground">IRATA-certified technicians and SafeWork licensed operators</p>
                    </div>
                    <div className="border-l-2 border-foreground pl-6">
                      <h5 className="text-lg font-medium mb-2">Full Compliance</h5>
                      <p className="text-muted-foreground">NASC accredited with comprehensive insurance coverage</p>
                    </div>
                  </div>
                </div>
                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-minimal text-muted-foreground mb-2">PROJECTS</h4>
                      <p className="text-xl">1,200+</p>
                    </div>
                    <div>
                      <h4 className="text-minimal text-muted-foreground mb-2">SAFETY</h4>
                      <p className="text-xl">99.9%</p>
                    </div>
                    <div>
                      <h4 className="text-minimal text-muted-foreground mb-2">RESPONSE</h4>
                      <p className="text-xl">&lt; 30min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-minimal text-muted-foreground mb-4">SELECTED WORK</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">Our Projects</h3>
            </div>
            <div className="space-y-32">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="mt-8 grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-2xl font-light text-architectural mb-2">{project.title}</h4>
                      <p className="text-minimal text-muted-foreground">{project.location}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-minimal text-muted-foreground mb-4">TESTIMONIALS</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                What Our Clients Say
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {testimonials.map((t, i) => (
                <div key={i} className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-medium">{t.name}</p>
                    <p className="text-minimal text-muted-foreground">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Let's Discuss
                  <br />
                  Your Project
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                    <a href="mailto:info@otnoaccess.co.ke" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      info@otnoaccess.co.ke
                    </a>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">PHONE</h4>
                    <a href="tel:+254700123456" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      +254 700 123 456
                    </a>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">OFFICE</h4>
                    <address className="text-xl not-italic">
                      Westlands Business Park<br />Nairobi, Kenya
                    </address>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full space-y-8">
                  <p className="text-muted-foreground leading-relaxed">
                    We approach each project with rigorous safety planning and a commitment to excellence.
                    Our process begins with understanding your access requirements and delivering solutions
                    that exceed expectations.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
                  >
                    REQUEST A QUOTE
                    <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
