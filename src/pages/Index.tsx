import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyMotion, domAnimation, m } from "framer-motion";
import heroBg from "@/assets/construction-silhouette.jpg";
import safetyWorkerImg from "@/assets/safety-equipment-worker.jpg";
import highriseScaffoldingImg from "@/assets/workers-highrise-scaffolding.jpg";
import constructionSilhouettesImg from "@/assets/construction-site-silhouettes.jpg";
import constructionBwImg from "@/assets/construction-workers-bw.jpg";
import constructionSunsetImg from "@/assets/construction-workers-sunset.jpg";
import constructionAerialImg from "@/assets/construction-aerial.jpg";
import ropeAccessTeamImg from "@/assets/rope-access-team.jpg";
import manNacelleImg from "@/assets/man-nacelle.jpg";
import constructionRebarImg from "@/assets/construction-workers-rebar.jpg";

const motion = m;

const aboveTheFoldImages = [heroBg, constructionBwImg, safetyWorkerImg];

const preloadImage = (src: string) => {
  const img = new Image();
  img.decoding = "async";
  img.src = src;
};


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    number: "01",
    title: "ROPE ACCESS",
    description: "Certified technicians for inspection, maintenance, and high-rise works across Kenya.",
    image: constructionBwImg,
  },
  {
    number: "02",
    title: "SCAFFOLDING",
    description: "Design, erection, hire, and compliance management for commercial and industrial projects in East Africa.",
    image: safetyWorkerImg,
  },
  {
    number: "03",
    title: "MOBILE ACCESS PLATFORMS",
    description: "EWP and boom lift hire with operator support for safe, efficient elevated access.",
    image: highriseScaffoldingImg,
  },
  {
    number: "04",
    title: "NETTING & DECKING",
    description: "Safety netting, edge protection, and temporary decking for fall prevention on site.",
    image: constructionSilhouettesImg,
  },
];

const projects = [
  {
    image: constructionSunsetImg,
    title: "CONCRETE REINFORCEMENT WORKS",
    location: "NAIROBI, 2024",
    description: "Structural reinforcement at height using rope access techniques for a major infrastructure project.",
  },
  {
    image: constructionAerialImg,
    title: "SCAFFOLDING HEIGHT OPERATIONS",
    location: "KISUMU, 2023",
    description: "Complex scaffolding system for multi-level industrial maintenance works.",
  },
  {
    image: constructionRebarImg,
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
  useEffect(() => {
    const warmHomeImages = () => {
      aboveTheFoldImages.forEach(preloadImage);
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(warmHomeImages, { timeout: 800 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(warmHomeImages, 300);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroBg}
          alt="Construction worksite silhouette"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-light text-white text-architectural mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            OTNO ACCESS
            <br />
            SOLUTION
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Industry-leading height safety services for commercial and industrial projects across Kenya & East Africa
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
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
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-px h-16 bg-white/40" />
          <div className="text-minimal text-white/60 mt-4 rotate-90 origin-center">SCROLL</div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-20"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-minimal text-muted-foreground mb-4">SERVICES</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">What We Do</h3>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-2 gap-x-12 gap-y-12"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  variants={fadeUp}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-shadow duration-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading={index < 2 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "low"}
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <span className="absolute top-4 left-4 text-minimal text-white/80 font-medium">
                      {service.number}
                    </span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-light mb-3 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-minimal text-muted-foreground mb-4">ABOUT</h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">Safety Philosophy</h3>
                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We believe every worker deserves to return home safely. Our practice focuses on
                    delivering height safety solutions that are both effective and uncompromising in quality.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With over 1,200 projects completed and a 99.9% safety record, our team sets the
                    industry standard for rope access and height works.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="pt-8 border-t border-border"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-20"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-minimal text-muted-foreground mb-4">SELECTED WORK</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">Our Projects</h3>
            </motion.div>
            <div className="space-y-32">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading={index === 0 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "low"}
                      decoding="async"
                      className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-20"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-minimal text-muted-foreground mb-4">TESTIMONIALS</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">What Our Clients Say</h3>
            </motion.div>
            <div className="relative overflow-hidden">
              <div className="flex gap-12 animate-marquee whitespace-nowrap">
                {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className="inline-block w-[400px] min-w-[400px] whitespace-normal space-y-6 border-l-2 border-foreground pl-8">
                    <p className="text-lg text-muted-foreground leading-relaxed italic">"{t.quote}"</p>
                    <div>
                      <p className="font-medium">{t.name}</p>
                      <p className="text-minimal text-muted-foreground">{t.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Let's Discuss
                  <br />
                  Your Project
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                    <a href="mailto:otnoacess@gmail.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      otnoacess@gmail.com
                    </a>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">POSTAL ADDRESS</h4>
                    <p className="text-xl">P.O. BOX 142-00502 Nairobi Karen</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">OFFICE</h4>
                    <address className="text-xl not-italic">
                      Embakasi, Old North Airport Rd<br />Next to Naivas Embakasi
                    </address>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </LazyMotion>
  );
};

export default Index;
