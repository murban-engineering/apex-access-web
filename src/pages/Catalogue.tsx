import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { catalogueItems, CATALOGUE_CATEGORIES } from "@/data/catalogueItems";
import metallicStructure from "@/assets/metallic-structure.jpg";

const Catalogue = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered =
    activeCategory === "ALL"
      ? catalogueItems
      : catalogueItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-card">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <img
          src={metallicStructure}
          alt="Stacked galvanized scaffolding components ready for hire"
          className="absolute right-0 top-0 h-full w-2/3 object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="container mx-auto px-6 relative z-20 py-32">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">CATALOGUE</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Scaffolding equipment available for hire. Quality Kwik-stage components for your project needs.
            </p>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {CATALOGUE_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
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

      {/* Items table */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left px-6 py-4 text-minimal text-muted-foreground font-medium">PART NUMBER</th>
                      <th className="text-left px-6 py-4 text-minimal text-muted-foreground font-medium">DESCRIPTION</th>
                      <th className="text-left px-6 py-4 text-minimal text-muted-foreground font-medium">CATEGORY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((item, index) => (
                      <tr
                        key={`${item.partNumber}-${index}`}
                        className="border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 text-sm font-mono text-foreground">{item.partNumber}</td>
                        <td className="px-6 py-4 text-sm text-foreground">{item.description}</td>
                        <td className="px-6 py-4">
                          <span className="text-xs text-muted-foreground tracking-widest">{item.category}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Showing {filtered.length} of {catalogueItems.length} items
            </p>
          </div>
        </div>
      </section>

      {/* Enquire CTA */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto border-t border-border pt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-architectural mb-4">
                  Enquire About Hire
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Contact us for availability, pricing, and delivery of scaffolding equipment. We respond within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="tel:+254723124739"
                  className="flex items-center gap-3 text-lg text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  +254 723 124739
                </a>
                <a
                  href="mailto:otnoacess@gmail.com"
                  className="flex items-center gap-3 text-lg text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  otnoacess@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalogue;
