export const technologies = [
  { id: "react", name: "React" },
  { id: "node", name: "Node.js" },
  { id: "aws", name: "AWS" },
  { id: "postgres", name: "PostgreSQL" },
];

export const technologyCategories = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces that feel fast, clear, and natural to use.",
    technologies: [
      {
        id: "react",
        name: "React.js",
        detail: "Composable product interfaces",
      },
      {
        id: "javascript",
        name: "JavaScript",
        detail: "Flexible application behavior",
      },
      { id: "html", name: "HTML5", detail: "Semantic content structure" },
      { id: "css", name: "CSS", detail: "Responsive visual systems" },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        detail: "Consistent utility styling",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Services and APIs that keep products dependable.",
    technologies: [
      { id: "node", name: "Node.js", detail: "Event-driven services" },
      { id: "express", name: "Express.js", detail: "Practical API delivery" },
      { id: "python", name: "Python", detail: "Automation and data workflows" },
      { id: "django", name: "Django", detail: "Structured web backends" },
    ],
  },
  {
    id: "database",
    label: "Database",
    description: "Data foundations designed for clarity and scale.",
    technologies: [
      { id: "mongodb", name: "MongoDB", detail: "Flexible document data" },
      { id: "mysql", name: "MySQL", detail: "Proven relational storage" },
      {
        id: "postgresql",
        name: "PostgreSQL",
        detail: "Powerful relational data",
      },
    ],
  },
  {
    id: "tools-cloud",
    label: "Tools and cloud",
    description: "Delivery tools that make quality repeatable.",
    technologies: [
      { id: "git", name: "Git", detail: "Reliable version control" },
      { id: "github", name: "GitHub", detail: "Collaborative delivery" },
      { id: "docker", name: "Docker", detail: "Portable environments" },
      { id: "aws", name: "AWS", detail: "Scalable cloud infrastructure" },
    ],
  },
];
