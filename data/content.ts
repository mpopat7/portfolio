// ---------------------------------------------------------------------------
// All site copy lives here. Edit this file to change content — no layout
// code needs to be touched. An empty github/demo string means "no link".
// ---------------------------------------------------------------------------

export const site = {
  name: "Milen Popat",
  title: "Milen Popat · Builder",
  description:
    "Portfolio of Milen Popat: ML research, applied data work, and AI tools. Information Systems & Business Analytics at Indiana University Kelley, CS minor.",
  email: "mpopat@iu.edu",
  github: "https://github.com/mpopat7",
  linkedin: "https://www.linkedin.com/in/milenpopat",
  resume: "/resume.pdf",
};

export const nav = [
  { id: "about", label: "About", num: "01" },
  { id: "projects", label: "Projects", num: "02" },
  { id: "work", label: "Work", num: "03" },
];

export const hero = {
  status: "Open to internships & research roles",
  // Last word renders in the accent color.
  headline: "I build the whole pipeline, from the spreadsheet to the model.",
  intro: [
    { text: "I got into ML from the business side: clinic dashboards first, then client data pipelines, then a research fellowship. I ship " },
    { text: "tools people actually use", accent: true },
    { text: ", and I like to understand them " },
    { text: "all the way down", accent: true },
    { text: ", to the hardware they run on." },
  ],
  cta: { label: "See the work", href: "#work" },
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

export const about = {
  heading: "Builder first.",
  // Rendered word-by-word with a scroll-scrubbed brightness reveal.
  body: "My name is Milen and I grew up in Houston. I got into ML from the business side: digitizing paperwork for an urgent care clinic, building dashboards for a Google partner, and following the data work until it turned into research. Away from school I produce music in Logic Pro, lift, and live and die with the Detroit Lions.",
  photo: "/headshot.jpg",
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "Java", "HTML/CSS"],
  },
  {
    title: "Analysis & Visualization",
    items: [
      "Excel (Power Query, Power Pivot, VBA)",
      "Power BI",
      "Looker Studio",
      "Google Sheets",
    ],
  },
  {
    title: "ML & Deep Learning",
    items: [
      "Probability & statistics",
      "Gradient descent",
      "Transformer architectures",
    ],
  },
  {
    title: "AI Engineering",
    items: ["LangGraph", "Qdrant", "LiteLLM", "RAG & MCP", "Claude & Gemini APIs"],
  },
  {
    title: "Local Models & Infra",
    items: ["Ollama", "Home inference server", "Raspberry Pi 5", "SSH & networking"],
  },
  {
    title: "Web & Shipping",
    items: ["Next.js", "React", "Vercel", "Git"],
  },
  {
    title: "Automation",
    items: ["n8n", "AI agents", "Python ETL (Apollo API)"],
  },
];

export type Project = {
  name: string;
  year: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Multimodal RAG",
    year: "2026",
    tagline: "Document Q&A that reads the page the way a person sees it.",
    description:
      "A visual-document RAG system that embeds page images with the ColQwen2 vision-language model and answers questions over PDFs and slide decks from layout alone, with no OCR step. Benchmarked against an OCR-text baseline across 23 queries and 85 pages: 87% top-1 retrieval (0.91 MRR) versus 70% (0.75 MRR), with the biggest gains on charts, flowcharts, and tables.",
    tech: ["Python", "ColQwen2", "Ollama"],
    github: "https://github.com/mpopat7/multimodal-rag",
  },
  {
    name: "Open Source License Compliance Auditor",
    year: "2026",
    tagline: "AI agents that audit a dependency tree for license risk.",
    description:
      "A multi-agent pipeline that reads a repository, detects and classifies its open-source licenses, and flags obligation conflicts. LangGraph orchestrates the agents, Qdrant backs the retrieval, LiteLLM handles model routing, and deterministic SPDX-matrix reasoning keeps the AI from grading its own homework.",
    tech: ["LangGraph", "Qdrant", "LiteLLM", "Python"],
    github: "https://github.com/mpopat7/license-compliance-auditor",
  },
  {
    name: "SNAP Notice Navigator",
    year: "2026",
    tagline: "Plain-language help for confusing benefit letters.",
    description:
      "An AI web app that explains SNAP benefit notices in plain language and produces a source-backed, deadline-aware checklist of next steps. Built for the USAII Global AI Hackathon with responsible-AI guardrails: hedged wording, human-in-the-loop review, no automated eligibility decisions, and cited official sources. Live on Vercel.",
    tech: ["Next.js", "TypeScript", "Claude API", "Vercel"],
    github: "https://github.com/mpopat7/snap-notice-navigator",
    demo: "https://snap-notice-navigator.vercel.app",
  },
  {
    name: "Local LLM Hallucination Eval",
    year: "2026",
    tagline: "Measuring how often a local model makes things up.",
    description:
      "An evaluation harness that grades a local LLM's answers to Python code questions against deterministic ground truth derived from the abstract syntax tree. Ground-truth generation is fully separated from model querying, so the model never grades its own output, and every result gets an explicit outcome code: CORRECT, PARTIAL, WRONG COUNT, MISSED.",
    tech: ["Python", "AST", "Ollama"],
    github: "https://github.com/mpopat7/local-ai-hallucination-test",
  },
  {
    name: "Obsidian Brain",
    year: "2026",
    tagline: "A second brain that AI agents can read.",
    description:
      "Scripts that capture ChatGPT, Claude, and Ollama conversations into a single linked Obsidian knowledge graph, exposed read-only to AI agents through a standard-library Python MCP server. Everything I've figured out becomes queryable from Claude Code.",
    tech: ["Python", "MCP", "Obsidian"],
    github: "https://github.com/mpopat7/obsidian-brain",
  },
  {
    name: "Gallstone Ultrasound Classifier",
    year: "2025",
    tagline: "Machine learning on real clinical reports.",
    description:
      "A Python machine-learning model prototyped in Google Colab for Precise Urgent Care that analyzes ultrasound reports to detect and classify gallstones, reaching 73% classification accuracy on the available report data.",
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
  sub: "Internships and research across analytics, operations, and ML.",
  entries: [
    {
      role: "AI Research Fellow",
      org: "Algoverse",
      location: "Palo Alto, CA",
      mode: "Remote",
      dates: "Jun 2026 – Present",
      current: true,
      summary:
        "Competitive 12-week research cohort building toward a paper targeted at a top ML conference.",
      bullets: [
        "Building a pipeline that reconstructs 3D joint kinematics from smartphone video (OpenCap) to classify neuromuscular disease, with preliminary benchmarks of 82% accuracy against 50% for standard clinical timed tests.",
        "Engineering interpretable movement features across 129 subjects and 9 clinical tasks that flag the joints driving each diagnosis.",
      ],
    },
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
  school: "Indiana University, Kelley School of Business",
  degree: "BS in Information Systems & Business Analytics, Minor in Computer Science",
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
