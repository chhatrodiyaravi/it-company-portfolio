export const projects = [
  {
    id: "atlas",
    name: "Atlas Operations",
    category: "Custom software",
    summary: "A unified workspace for distributed operations teams.",
    description:
      "Atlas replaced a scattered set of operational tools with one calm, searchable workspace for teams working across locations.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    filters: ["all", "custom-software", "saas"],
    outcome: "Reduced operational handoffs by 38%.",
    accent: "bg-[#d8f2ef]",
    image: {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
      alt: "Team collaborating around an operations platform in a modern studio",
    },
    problem:
      "Teams were relying on disconnected spreadsheets, messages, and manual status updates to coordinate daily work across remote hubs.",
    solution:
      "We designed a shared operational workspace with clear ownership, searchable context, and a dependable reporting layer with sub-second queries.",
    features: [
      "Shared operational dashboard",
      "Role-based work queues",
      "Searchable activity history",
    ],
    process: [
      "Workflow mapping",
      "Interface prototyping",
      "Incremental platform delivery",
    ],
    gallery: [
      {
        title: "Workspace Overview",
        subtitle: "High-level operations command center",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Team Work Queue",
        subtitle: "Real-time task distribution and SLA tracking",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Reporting & Insights",
        subtitle: "Automated executive metrics and trend analysis",
        src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    id: "lumen",
    name: "Lumen Health",
    category: "Web platform",
    summary: "A calmer, more accessible care coordination experience.",
    description:
      "Lumen gave care teams one accessible place to coordinate appointments, notes, and follow-up across a growing patient network.",
    technologies: ["React", "AWS", "PostgreSQL"],
    filters: ["all", "web", "saas"],
    outcome: "Cut average coordination time by 24%.",
    accent: "bg-[#e6e4f4]",
    image: {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
      alt: "Healthcare professional reviewing patient insights on a tablet",
    },
    problem:
      "Care coordinators needed a reliable way to see the full patient journey without navigating several disconnected legacy systems.",
    solution:
      "We built a calm, accessible coordination platform that brought the right clinical context into one focused, compliant workflow.",
    features: [
      "Accessible care timeline",
      "Appointment coordination",
      "Secure team notes",
    ],
    process: [
      "Care-team research",
      "Service blueprinting",
      "Pilot and iteration",
    ],
    gallery: [
      {
        title: "Care Timeline View",
        subtitle: "Consolidated patient medical history and milestones",
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Appointment Scheduler",
        subtitle: "Multi-provider calendar with instant confirmation",
        src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Care Team Hub",
        subtitle: "Cross-department notes and secure handoff protocol",
        src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    id: "meridian",
    name: "Meridian Market",
    category: "E-commerce",
    summary: "A considered shopping experience for independent makers.",
    description:
      "Meridian connected a curated catalog of independent makers with a checkout journey designed to feel personal and effortless.",
    technologies: ["React", "Stripe", "Shopify"],
    filters: ["all", "ecommerce", "web"],
    outcome: "Increased completed checkouts by 31%.",
    accent: "bg-[#f4ead4]",
    image: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
      alt: "Curated retail packaging and digital commerce checkout",
    },
    problem:
      "Independent makers needed a marketplace that could preserve an artisanal feel while handling high catalog scale and global payments.",
    solution:
      "We shaped a considered browsing and checkout experience that made discovery feel editorial and purchasing feel instantaneous.",
    features: ["Curated catalog", "Maker profiles", "Express checkout"],
    process: [
      "Commerce audit",
      "Experience direction",
      "Conversion experiments",
    ],
    gallery: [
      {
        title: "Curated Storefront",
        subtitle: "Editorial collection browsing with dynamic filtering",
        src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Artisan Profile & Story",
        subtitle: "Rich media storytelling showcasing the craftsmen",
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Frictionless Checkout",
        subtitle: "Optimized one-click payment experience with Stripe",
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    id: "fieldnote",
    name: "Fieldnote Mobile",
    category: "Mobile product",
    summary: "A field reporting tool that works wherever the work happens.",
    description:
      "Fieldnote helped distributed teams capture observations offline and sync reliable reports when they returned to coverage.",
    technologies: ["React Native", "Expo", "Node.js"],
    filters: ["all", "mobile", "custom-software"],
    outcome: "Saved teams five hours per week.",
    accent: "bg-[#e5edf5]",
    image: {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
      alt: "Engineer using a mobile device in active field environment",
    },
    problem:
      "Field teams were losing crucial context and data when reporting work in remote areas with unstable internet connectivity.",
    solution:
      "We designed an offline-first mobile app with local SQLite storage, atomic sync conflict resolution, and background sync.",
    features: ["Offline reporting", "Media attachments", "Background sync"],
    process: ["Field observation", "Offline flow design", "Device testing"],
    gallery: [
      {
        title: "Report Capture UI",
        subtitle: "Rapid inspection forms with photo and GPS stamps",
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Interactive Checklist",
        subtitle: "Step-by-step guidance designed for single-hand use",
        src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Sync Status Monitor",
        subtitle: "Transparent background queue and delta reconciliation",
        src: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "saas", label: "SaaS" },
  { id: "custom-software", label: "Custom software" },
];
