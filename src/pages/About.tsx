import nacelleImg from "@/assets/man-nacelle.jpg";
import constructionSkyscrapers from "@/assets/construction-modern-skyscrapers.jpg";
import KenyaMap from "@/components/KenyaMap";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-card">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <img
          src={constructionSkyscrapers}
          alt="Modern construction scaffolding on high-rise building"
          className="absolute right-0 top-0 h-full w-2/3 object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="container mx-auto px-4 md:px-6 relative z-20 py-32">
          <div className="max-w-2xl">
            <h1 className="text-minimal text-muted-foreground mb-3 md:mb-4">ABOUT</h1>
            <h2 className="text-3xl md:text-6xl font-light text-architectural mb-8 md:mb-12">
              Our Safety
              <br />
              Philosophy
            </h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                OTNO ACCESS SOLUTION LIMITED was founded with a simple belief: every worker
                deserves to return home safely. We deliver height safety solutions that are
                effective, compliant, and uncompromising in quality.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                With over 1,200 projects completed across Kenya and East Africa, our
                technicians and licensed operators set the industry standard for
                rope access, scaffolding, and elevated work platforms.
              </p>
            </div>
            <div className="pt-6 md:pt-8 border-t border-border mt-8">
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-1 md:mb-2">PROJECTS</h4>
                  <p className="text-lg md:text-xl">1,200+</p>
                </div>
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-1 md:mb-2">SAFETY</h4>
                  <p className="text-lg md:text-xl">99.9%</p>
                </div>
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-1 md:mb-2">SINCE</h4>
                  <p className="text-lg md:text-xl">2005</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-16 md:py-32 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div>
                <h2 className="text-minimal text-muted-foreground mb-3 md:mb-4">COVERAGE</h2>
                <h3 className="text-3xl md:text-6xl font-light text-architectural mb-8 md:mb-12">
                  Where We
                  <br />
                  Work
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  We operate across Kenya's major urban centres and industrial zones, with our
                  headquarters in Nairobi and active project sites spanning the coast to the
                  western highlands.
                </p>

                <div className="space-y-4 md:space-y-6">
                  <div className="border-l-2 border-foreground pl-4 md:pl-6">
                    <h4 className="text-base md:text-lg font-medium mb-0.5 md:mb-1">Nairobi & Central</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Nairobi, Thika, Machakos, Nyeri, Naivasha</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-4 md:pl-6">
                    <h4 className="text-base md:text-lg font-medium mb-0.5 md:mb-1">Coast Region</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Mombasa, Malindi, Lamu</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-4 md:pl-6">
                    <h4 className="text-base md:text-lg font-medium mb-0.5 md:mb-1">Western & Rift Valley</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Kisumu, Nakuru, Eldoret, Kitale</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-4 md:pl-6">
                    <h4 className="text-base md:text-lg font-medium mb-0.5 md:mb-1">Northern Frontier</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Garissa, Marsabit, Turkana — expanding soon</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background p-2 md:p-6">
                <KenyaMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div className="rounded-2xl overflow-hidden order-2 md:order-1">
                <img
                  src={nacelleImg}
                  alt="Worker operating a mobile elevated work platform"
                  className="w-full h-[300px] md:h-[500px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-minimal text-muted-foreground mb-3 md:mb-4">OUR CAPABILITY</h2>
                <h3 className="text-3xl md:text-6xl font-light text-architectural mb-8 md:mb-12">
                  Equipped for
                  <br />
                  Every Task
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  From mobile elevated work platforms to rope access systems, our fleet and teams
                  are ready to tackle any height safety challenge across Kenya and East Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
