import { Anchor, Building2, Grid3X3, Truck, type LucideIcon } from "lucide-react";

export type ServiceItem = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const SERVICES: ServiceItem[] = [
  {
    name: "Rope Access",
    description: "IRATA-certified technicians for inspection, maintenance, and high-rise works at any height.",
    href: "/services/rope-access",
    icon: Anchor,
  },
  {
    name: "Scaffolding",
    description: "Design, erection, hire, and compliance management for commercial and industrial projects.",
    href: "/services/scaffolding",
    icon: Building2,
  },
  {
    name: "Mobile Access Platforms",
    description: "EWP and boom lift hire with operator support for safe, efficient elevated access.",
    href: "/services/mobile-access",
    icon: Truck,
  },
  {
    name: "Netting & Decking",
    description: "Safety netting, edge protection, and temporary decking for fall prevention on site.",
    href: "/services/netting-decking",
    icon: Grid3X3,
  },
];
