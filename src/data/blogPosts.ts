export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "rope-access-vs-scaffolding",
    title: "Rope Access vs Scaffolding: Choosing the Right Solution",
    excerpt: "Understanding when to use rope access techniques versus traditional scaffolding for your height safety project.",
    content: `
## When to Choose Rope Access

Rope access is ideal for projects that require quick mobilisation, minimal disruption, and access to areas where scaffolding isn't practical. It's cost-effective for short-duration tasks like inspections, maintenance, and minor repairs.

### Key Advantages
- Rapid deployment — setup in hours, not days
- Minimal footprint on site
- Access to complex geometries and confined spaces
- Lower overall project costs for short-duration work

## When Scaffolding Makes Sense

For longer-duration projects requiring continuous access, heavy equipment support, or multiple trades working simultaneously, scaffolding provides a stable and versatile platform.

### Key Advantages
- Stable working platform for extended operations
- Supports heavy tools and materials
- Multiple workers can operate simultaneously
- Ideal for façade-wide renovation projects

## Making the Decision

The right choice depends on project duration, scope, site constraints, and budget. Our team can assess your requirements and recommend the most efficient and safe access method.
    `,
    author: "OTNO Safety Team",
    date: "2024-06-15",
    readTime: "5 min read",
    category: "SAFETY",
    image: "",
  },
  {
    id: "working-at-height-regulations-australia",
    title: "Working at Height Regulations in Australia: 2024 Update",
    excerpt: "A comprehensive overview of the latest regulations and compliance requirements for working at height in Australia.",
    content: `
## Understanding the Framework

Working at height remains one of the highest risk activities in the construction and maintenance industries. Australian regulations require a systematic approach to managing fall risks.

### Key Regulatory Bodies
- SafeWork Australia sets the national standards
- State-based regulators enforce compliance

## Hierarchy of Controls

The regulations mandate following the hierarchy of controls:
- Eliminate the risk where possible
- Use passive fall prevention (guardrails, barriers)
- Use work positioning systems
- Use fall arrest systems as a last resort

## Recent Changes

2024 has seen updates to requirements around:
- Competency standards for height safety supervisors
- Equipment inspection and certification intervals
- Documentation and record-keeping requirements

## Compliance Tips

Staying compliant requires ongoing training, regular equipment inspections, and comprehensive risk assessments for every job. Our team ensures full compliance on every project.
    `,
    author: "OTNO Compliance",
    date: "2024-05-20",
    readTime: "7 min read",
    category: "REGULATIONS",
    image: "",
  },
];
