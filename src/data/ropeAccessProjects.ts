import projectConcreteImg from "@/assets/project-concrete.jpg";
import projectScaffoldingWorkImg from "@/assets/project-scaffolding-work.jpg";
import projectFacadeScaffoldingImg from "@/assets/project-facade-scaffolding.jpg";
import ropeAccessDrillingImg from "@/assets/rope-access-drilling.jpg";
import ropeAccessTeamImg from "@/assets/rope-access-team.jpg";

export type RopeAccessProject = {
  title: string;
  industry: "Commercial" | "Infrastructure" | "Energy" | "Marine" | "Industrial";
  image: string;
};

export const ROPE_ACCESS_PROJECTS: RopeAccessProject[] = [
  { title: "CBD Glass Façade Remediation", industry: "Commercial", image: projectConcreteImg },
  { title: "Bridge Bearing Inspection", industry: "Infrastructure", image: projectScaffoldingWorkImg },
  { title: "Tank Farm NDT Program", industry: "Energy", image: projectFacadeScaffoldingImg },
  { title: "Stadium Cable Installation", industry: "Commercial", image: projectConcreteImg },
  { title: "Port Facility Corrosion Coatings", industry: "Marine", image: projectScaffoldingWorkImg },
  { title: "Confined Shaft Rescue Cover", industry: "Industrial", image: projectFacadeScaffoldingImg },
  { title: "Building Façade Drilling Works", industry: "Commercial", image: ropeAccessDrillingImg },
  { title: "High-Rise Façade Maintenance Team", industry: "Commercial", image: ropeAccessTeamImg },
];
