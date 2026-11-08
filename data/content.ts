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
  emailPersonal: "milenpopat@gmail.com",
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

// Annotated rather than `satisfies`-checked: with no accented segment present,
// inference narrows to `{ text: string }` and the renderer's `seg.accent` stops
// compiling. The annotation keeps the accent option available.
const aboutParagraphs: TextSegment[][] = [
  [
    {
      text: "My name is Milen! I'm a sophomore at Indiana University studying Data Science and Computer Science. One of my main interests is AI and how it's improving the world around us. Outside of school I enjoy music (listening and playing), pickleball, and watching football.",
    },
  ],
];

export const about = {
  photo: "/headshot.jpg",
  facts: [
    { label: "Based in", value: "Richmond, TX" },
    { label: "Currently", value: "Data Analyst Intern at HiView Solutions" },
    { label: "Studying", value: "Data Science + Computer Science, Indiana University" },
    { label: "Focus", value: "ML, analytics, AI engineering" },
  ],
  paragraphs: aboutParagraphs,
  now: [
    "Building and evaluating next-month MLB pitcher forecasts with public Statcast data",
    "Python ETL and annual contract value reconciliation at HiView Solutions",
    "Continuing the PortPy radiotherapy research with the Algoverse team",
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
    title: "Analytics & Business Tools",
    items: [
      "Pandas",
      "NumPy",
      "Excel (Power Query, VBA)",
      "Tableau",
      "Power BI",
      "Looker Studio",
      "PowerPoint",
      "Word",
      "Google Sheets",
    ],
  },
  {
    title: "ML & AI",
    items: [
      "PyTorch",
      "scikit-learn",
      "ColQwen2",
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
      "Docker",
      "Linux",
      "Ollama",
      "Raspberry Pi 5",
      "SSH & networking",
      "n8n",
      "Next.js",
      "React",
      "FastAPI",
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
    name: "Pitcher Change Forecaster",
    year: "2026",
    status: "Study evaluated",
    url: "github.com/mpopat7/pitcher-change-forecaster",
    tagline: "Testing whether pitch changes improve next-month forecasts",
    description:
      "A forecasting study using 3.8 million Statcast pitches to compare recent results, current pitch characteristics, and changes in a pitcher's repertoire. Evaluated a frozen model on the 2025 season: current pitch measurements modestly improved strikeout forecasts, while recent-change features added no reliable forecasting benefit. Includes a historical browser for 13,591 eligible forecasts across 2024 and 2025, with model comparisons and experimental alert outcomes.",
    tech: ["Python", "Pandas", "scikit-learn", "Statcast"],
    github: "https://github.com/mpopat7/pitcher-change-forecaster",
    stats: [
      { value: "3.8M", label: "pitches audited" },
      { value: "13,591", label: "historical forecasts" },
    ],
  },
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
    status: "Prototype",
    url: "github.com/mpopat7/license-compliance-auditor",
    tagline: "AI agents that audit a dependency tree for license risk",
    description:
      "A prototype for auditing open-source licenses in a repository. Built repository ingestion, license-source detection, and structured LLM extraction; classification and obligation-conflict reasoning are planned.",
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
  sub: "Completed fellowship research on genetic algorithms for radiotherapy planning.",
  label: "Algoverse AI Research Fellowship · 2026",
  title: "Optimizing radiotherapy beam angles with genetic algorithms",
  meta: "37-patient PortPy study · manuscript in preparation",
  description:
    "Completed during the Algoverse AI Research Fellowship: a genetic algorithm for seven-beam radiotherapy planning on PortPy's lung-cancer benchmark. Across 37 patients, it beat clinician-selected beam configurations in 30 cases with 12.14% lower mean objective cost, cutting tumor underdose and overdose penalties 49% and 47% and fluence-smoothness penalty 22%.",
  pipeline: ["PortPy patient data", "genetic beam search", "full-resolution rescoring", "cohort analysis"],
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
        "Built Python ETL pipelines across 650+ client domains using Apollo API to track technology adoption; prototyped a Gemini Enterprise Slack agent for renewal reminders, draft follow-ups, and CRM synchronization.",
        "Developed Python reconciliation tools for Google partner annual contract value (ACV), identifying $347K in renewal-credit increases across 1,440 existing bookings and 144 customers, alongside $336K in New & Expansion reductions.",
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
  degree: "Bachelor of Science in Data Science and Computer Science, Minor in Business",
  meta: "Bloomington, IN · GPA 3.81 / 4.00",
  dates: "Expected May 2029",
};

export type Certification = { name: string; issuer?: string };

export const certifications: Certification[] = [
  { name: "Claude Certified Architect" },
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
      title: "JPMorganChase Career.edYOU Academy",
      note: "Participated in the 2026 cohort, learning about the recruiting pipeline and roles across the firm and networking with employees.",
    },
    {
      title: "K204 Peer Tutor, Kelley School of Business",
      note: "Excel and Access lab tutor for a 30-student honors section.",
    },
    {
      title: "Vice President of Operations, Business Analytics Club at Kelley",
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
  role: "Builder, Richmond, Texas",
  note: "Designed and built from scratch.",
};
