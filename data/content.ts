// ---------------------------------------------------------------------------
// All site copy lives here. Edit this file to change content — no layout
// code needs to be touched. An empty github/demo string means "no link".
// ---------------------------------------------------------------------------

export const site = {
  name: "Milen Popat",
  title: "Milen Popat · Builder",
  description:
    "Portfolio of Milen Popat: ML research, applied data work, and AI tools. Data Science and Computer Science at Indiana University Bloomington.",
  email: "mpopat@iu.edu",
  github: "https://github.com/mpopat7",
  linkedin: "https://www.linkedin.com/in/milenpopat",
  resume: "/resume.pdf",
};

export const nav = [
  { href: "/projects", label: "Projects", num: "01" },
  { href: "/work", label: "Work", num: "02" },
  { href: "/about", label: "About", num: "03" },
];

export const hero = {
  status: "Open to internships & research roles",
  // Last word renders in the accent color.
  headline: "I build the whole pipeline, from the spreadsheet to the model.",
  cta: { label: "See the work", href: "/projects" },
  terminal: {
    command: "boot --profile milen",
    lines: [
      ["analytics", "ok"],
      ["ml-research", "ok"],
      ["ai-engineering", "ok"],
    ],
    partial: "automation",
  },
};

export type TextSegment = { text: string; accent?: boolean };

export const about = {
  heading:
    "I got into ML from the business side, and stayed for the build.",
  photo: "/headshot.jpg",
  facts: [
    { label: "Based in", value: "Houston, TX" },
    { label: "Currently", value: "Data Analyst Intern at HiView Solutions" },
    { label: "Studying", value: "Data Science + Computer Science, Indiana University" },
    { label: "Focus", value: "ML, analytics, AI engineering" },
  ],
  paragraphs: [
    [
      { text: "My name is Milen and I grew up in Houston. I got into ML " },
      { text: "from the business side", accent: true },
      { text: ": digitizing paperwork for an urgent care clinic, building dashboards for a Google partner, and following the data work " },
      { text: "until it turned into research", accent: true },
      { text: "." },
    ],
    [
      { text: "Away from school I produce music in Logic Pro, lift, and " },
      { text: "live and die with the Detroit Lions", accent: true },
      { text: "." },
    ],
  ] satisfies TextSegment[][],
  now: [
    "Classifying neuromuscular disease from smartphone video in the Algoverse fellowship",
    "Dashboards and ETL across 650+ client domains at HiView Solutions",
    "Building a multi-agent license compliance auditor with LangGraph",
  ],
};

export type ToolGroup = {
  title: string;
  items: string[];
};

export const toolsIntro = "Tools I reach for";

export const toolGroups: ToolGroup[] = [
  {
    title: "Languages",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "Java", "HTML/CSS"],
  },
  {
    title: "Analytics & Data",
    items: [
      "pandas",
      "NumPy",
      "Excel (Power Query, VBA)",
      "Power BI",
      "Looker Studio",
      "Google Sheets",
    ],
  },
  {
    title: "ML & AI",
    items: [
      "Transformers",
      "LangGraph",
      "Qdrant",
      "LiteLLM",
      "RAG & MCP",
      "Claude & Gemini APIs",
    ],
  },
  {
    title: "Infra & Shipping",
    items: [
      "Ollama",
      "Raspberry Pi 5",
      "SSH & networking",
      "n8n",
      "Next.js",
      "Vercel",
      "Git",
    ],
  },
];

export type FeaturedProject = {
  name: string;
  year: string;
  status: string; // rendered next to an ember dot, e.g. "Live", "In development"
  url: string; // shown in the browser-frame chrome
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string; // optional screenshot in /public; abstract panel when absent
  stats?: { value: string; label: string }[];
};

export const projectsIntro = {
  heading: "Things I've built, end to end.",
  sub: "RAG systems, agent pipelines, and a deployed AI web app, each one shipped and documented. Open the source for the full story.",
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Multimodal RAG",
    year: "2026",
    status: "Benchmarked & shipped",
    url: "github.com/mpopat7/multimodal-rag",
    tagline: "Document Q&A that reads the page the way a person sees it",
    description:
      "A visual-document RAG system that embeds page images with the ColQwen2 vision-language model and answers questions over PDFs and slide decks from layout alone, with no OCR step. Benchmarked against an OCR-text baseline across 23 queries and 85 pages, with the biggest gains on charts, flowcharts, and tables where extractable text is thin.",
    tech: ["Python", "ColQwen2", "Ollama"],
    github: "https://github.com/mpopat7/multimodal-rag",
    stats: [
      { value: "87%", label: "top-1 retrieval" },
      { value: "+17pts", label: "vs OCR baseline" },
    ],
  },
  {
    name: "License Compliance Auditor",
    year: "2026",
    status: "In progress",
    url: "github.com/mpopat7/license-compliance-auditor",
    tagline: "AI agents that audit a dependency tree for license risk",
    description:
      "🚧 In progress — multi-agent auditor that detects/classifies OSS licenses in a repo and flags obligation conflicts (SPDX-matrix reasoning + LLM extraction)",
    tech: ["LangGraph", "Qdrant", "LiteLLM", "Python"],
    github: "https://github.com/mpopat7/license-compliance-auditor",
  },
  {
    name: "SNAP Notice Navigator",
    year: "2026",
    status: "Live on Vercel",
    url: "snap-notice-navigator.vercel.app",
    tagline: "Plain-language help for confusing benefit letters",
    description:
      "An AI web app that explains SNAP benefit notices in plain language and produces a source-backed, deadline-aware checklist of next steps. Built for the USAII Global AI Hackathon with responsible-AI guardrails: hedged wording, human-in-the-loop review, no automated eligibility decisions, and cited official sources.",
    tech: ["Next.js", "TypeScript", "Claude API", "Vercel"],
    github: "https://github.com/mpopat7/snap-notice-navigator",
    demo: "https://snap-notice-navigator.vercel.app",
  },
];

export const researchFeature = {
  sub: "Fellowship research in progress, aimed at a top ML conference.",
  label: "Algoverse AI Research Fellowship · 2026",
  title: "Classifying neuromuscular disease from smartphone video",
  meta: "12-week conference-paper cohort · in progress",
  description:
    "A pipeline that reconstructs 3D joint kinematics from smartphone video with OpenCap, then engineers interpretable movement features across 129 subjects and 9 clinical tasks. Preliminary benchmarks reach 82% accuracy against 50% for standard clinical timed tests.",
  pipeline: ["smartphone video", "OpenCap 3D kinematics", "movement features", "classifier"],
};

export type MoreProject = {
  name: string;
  tagline: string;
  tech: string[];
  github: string;
};

export const moreProjects: MoreProject[] = [
  {
    name: "Local LLM Hallucination Eval",
    tagline:
      "Grades a local model's Python answers against AST-derived ground truth, with explicit outcome codes.",
    tech: ["Python", "AST", "Ollama"],
    github: "https://github.com/mpopat7/local-ai-hallucination-test",
  },
  {
    name: "Obsidian Brain",
    tagline:
      "Captures ChatGPT, Claude, and Ollama conversations into a linked Obsidian graph, queryable by AI agents over MCP.",
    tech: ["Python", "MCP", "Obsidian"],
    github: "https://github.com/mpopat7/obsidian-brain",
  },
  {
    name: "Gallstone Ultrasound Classifier",
    tagline:
      "ML model reading real ultrasound reports for Precise Urgent Care, at 73% classification accuracy.",
    tech: ["Python", "Google Colab"],
    github: "",
  },
];

export type WorkEntry = {
  role: string;
  org: string;
  location: string;
  mode: string;
  dates: string;
  current?: boolean;
  summary: string;
  bullets: string[];
};

export const work = {
  eyebrow: "Experience",
  heading: "Turning business problems into working systems.",
  sub: "Internships across analytics, operations, and applied ML.",
  entries: [
    {
      role: "Data Analyst Intern",
      org: "HiView Solutions",
      location: "San Luis Obispo, CA",
      mode: "Remote",
      dates: "May 2026 – Present",
      current: true,
      summary:
        "Analytics for a Google Premier Partner serving 650+ Workspace clients.",
      bullets: [
        "Design and build live dashboards analyzing customer renewal data across 650+ clients and $220K in quarterly revenue.",
        "Built Python ETL pipelines through the Apollo API to track tech adoption, and prototyped a Gemini-powered Slack agent that automates reminders, drafts, and follow-ups.",
      ],
    },
    {
      role: "Analytics & Operations Intern",
      org: "Precise Urgent Care",
      location: "Livingston, TX",
      mode: "On-site",
      dates: "Jul 2025 – May 2026",
      summary:
        "Moved a paper-based clinic onto live, leadership-ready dashboards.",
      bullets: [
        "Digitized 8 paper tracking forms covering medication expiration, cash deposits, and X-ray data into live dashboards.",
        "Prototyped a Python ML model that analyzes ultrasound reports to detect and classify gallstones at 73% accuracy.",
      ],
    },
    {
      role: "Accounting & ERP Implementation Intern",
      org: "FEAST Detroit",
      location: "Inkster, MI",
      mode: "On-site",
      dates: "May 2024 – Aug 2024",
      summary: "Cost analysis and ERP selection for a contract food manufacturer.",
      bullets: [
        "Conducted cost and margin analysis for 110+ food products to support pricing and profitability decisions.",
        "Evaluated ERP traceability software with three cross-functional teams, recommending Wherefour.",
      ],
    },
  ] satisfies WorkEntry[],
};

export const education = {
  school: "Indiana University Bloomington",
  degree: "Bachelor of Science in Data Science and Computer Science",
  meta: "Bloomington, IN · GPA 3.81 / 4.00",
  dates: "Expected May 2029",
};

export type Certification = { name: string; issuer: string };

export const certifications: Certification[] = [
  { name: "Microsoft Office Specialist (Word, Excel, PowerPoint, Access)", issuer: "Microsoft" },
  { name: "Investment Banking Virtual Experience", issuer: "J.P. Morgan (Forage)" },
  { name: "AI in Business", issuer: "Wharton School, UPenn" },
  { name: "IT Automation with Python & Data Analytics", issuer: "Google" },
];

export type ListSectionContent = {
  id: string;
  eyebrow: string;
  heading: string;
  items: { title: string; note: string }[];
};

export const caseComps: ListSectionContent = {
  id: "competitions",
  eyebrow: "Case Competitions",
  heading: "Competing with data.",
  items: [
    {
      title: "Epsilon Nu Tau x Cintas Case Competition",
      note: "Placed 1st with a vendor-consolidation strategy projecting $1,300 in monthly savings per location.",
    },
    {
      title: "Cincinnati Reds Analytics Case Competition",
      note: "Placed 3rd, analyzing 240,000 transactions to surface spending trends for 50+ stakeholders.",
    },
    {
      title: "Hoosier Consulting Network Case Competition",
      note: "Top 6 of 100+ teams with a hospital strategy on physician retention.",
    },
  ],
};

export const leadership: ListSectionContent = {
  id: "leadership",
  eyebrow: "Leadership & Development",
  heading: "Beyond the classroom.",
  items: [
    {
      title: "Epsilon Nu Tau Professional Fraternity",
      note: "Selected 1 of 27 from 400 applicants; 70 formal interviews and a business launch project that raised $1,000 for charity.",
    },
    {
      title: "Goldman Sachs Possibilities Series",
      note: "Selected for the competitive first-year career program.",
    },
    {
      title: "K204 Peer Tutor, Kelley School of Business",
      note: "Excel and Access lab tutor for a 30-student honors section.",
    },
    {
      title: "Business Analytics Club at Kelley",
      note: "Analytical models and automated insights with advanced Excel, Python, and generative AI tools.",
    },
    {
      title: "Claude Builders Club",
      note: "Workshops and hackathons prototyping AI projects with Claude Code.",
    },
  ],
};

export const contact = {
  heading: "Let's build something.",
  sub: "Open to research collaborations, internships, and interesting problems.",
};

export const footer = {
  role: "Builder, Houston, Texas",
  note: "Designed and built from scratch.",
};
