import KenyaMap from "@/components/KenyaMap";
import nacelleImg from "@/assets/man-nacelle.jpg";

const About = () => {
  return (
    <div>
      {/* Hero / Philosophy */}
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">ABOUT</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Our Safety
                  <br />
                  Philosophy
                </h2>

                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    OTNO ACCESS SOLUTION LIMITED was founded with a simple belief: every worker
                    deserves to return home safely. We deliver height safety solutions that are
                    effective, compliant, and uncompromising in quality.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With over 1,200 projects completed across Kenya and East Africa, our IRATA-certified
                    technicians and licensed operators set the industry standard for
                    rope access, scaffolding, and elevated work platforms.
                  </p>
                </div>
              </div>

              <div className="space-y-12">
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
                      <h4 className="text-minimal text-muted-foreground mb-2">SINCE</h4>
                      <p className="text-xl">2005</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">COVERAGE</h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Where We
                  <br />
                  Work
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We operate across Kenya's major urban centres and industrial zones, with our
                  headquarters in Nairobi and active project sites spanning the coast to the
                  western highlands.
                </p>

                <div className="space-y-6">
                  <div className="border-l-2 border-foreground pl-6">
                    <h4 className="text-lg font-medium mb-1">Nairobi & Central</h4>
                    <p className="text-muted-foreground">Nairobi, Thika, Machakos, Nyeri, Naivasha</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-6">
                    <h4 className="text-lg font-medium mb-1">Coast Region</h4>
                    <p className="text-muted-foreground">Mombasa, Malindi, Lamu</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-6">
                    <h4 className="text-lg font-medium mb-1">Western & Rift Valley</h4>
                    <p className="text-muted-foreground">Kisumu, Nakuru, Eldoret, Kitale</p>
                  </div>
                  <div className="border-l-2 border-foreground pl-6">
                    <h4 className="text-lg font-medium mb-1">Northern Frontier</h4>
                    <p className="text-muted-foreground">Garissa, Marsabit, Turkana — expanding soon</p>
                  </div>
                </div>
              </div>

              <div>
                <KenyaMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={nacelleImg}
                  alt="Worker operating a mobile elevated work platform"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">OUR CAPABILITY</h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Equipped for
                  <br />
                  Every Task
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
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
