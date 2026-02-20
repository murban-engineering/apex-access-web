export type RopeAccessProject = {
  title: string;
  industry: "Commercial" | "Infrastructure" | "Energy" | "Marine" | "Industrial";
  image: string;
};

export const ROPE_ACCESS_PROJECTS: RopeAccessProject[] = [
  { title: "CBD Glass Façade Remediation", industry: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80" },
  { title: "Bridge Bearing Inspection", industry: "Infrastructure", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1000&q=80" },
  { title: "Tank Farm NDT Program", industry: "Energy", image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1000&q=80" },
  { title: "Stadium Cable Installation", industry: "Commercial", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1000&q=80" },
  { title: "Port Facility Corrosion Coatings", industry: "Marine", image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1000&q=80" },
  { title: "Confined Shaft Rescue Cover", industry: "Industrial", image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1000&q=80" },
];
