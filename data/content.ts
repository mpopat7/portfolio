// ---------------------------------------------------------------------------
// All site copy lives here. Edit this file to change content — no animation
// code needs to be touched. Anything wrapped in [BRACKETS] is a placeholder
// waiting for final copy or a real link. An empty github/demo string means
// "no link exists for this project" and nothing is rendered.
// ---------------------------------------------------------------------------

export const site = {
  name: "Milen Popat",
  title: "Milen Popat · Builder",
  description:
    "Portfolio of Milen Popat: ML research, applied data work, and AI tools. Information Systems & Business Analytics at Indiana University Kelley, CS minor.",
  email: "mpopat@iu.edu",
  github: "https://github.com/mpopat7",
  linkedin: "https://www.linkedin.com/in/milenpopat",
  resume: "/resume.pdf", // drop resume.pdf into /public
};

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Based in Houston, Texas",
  name: "Milen Popat",
  tagline:
    "Information Systems & Business Analytics at Indiana University's Kelley School of Business, with a CS minor.",
};

export const about = {
  heading: "Builder first.",
  // Rendered word-by-word with a scroll-scrubbed brightness reveal.
  body: "I grew up in Houston and got my start digitizing paperwork for a Texas urgent care clinic. Now it's ML research and client data work at Kelley. Before any of that I was a drum captain: eight years of tabla and a marching band drumline taught me that reps beat talent. Away from the terminal I produce music in Logic Pro, lift, and live and die with the Detroit Lions.",
  photo: "/headshot.jpg",
  interests: [
    "Music production (Logic Pro)",
    "Tabla",
    "Weightlifting",
    "Detroit Lions",
    "Don Toliver",
    "The Flash",
  ],
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
  tagline: string;
  description: string;
  tech: string[];
  github: string; // "" = no link, "[GITHUB LINK]" = visible placeholder, URL = link
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Multimodal RAG",
    tagline: "Document Q&A that reads the page the way a person sees it.",
    description:
      "A visual-document RAG system that embeds page images with the ColQwen2 vision-language model and answers questions over PDFs and slide decks from layout alone, with no OCR step. Benchmarked against an OCR-text baseline across 23 queries and 85 pages: 87% top-1 retrieval (0.91 MRR) versus 70% (0.75 MRR), with the biggest gains on charts, flowcharts, and tables.",
    tech: ["Python", "ColQwen2", "Ollama"],
    github: "https://github.com/mpopat7/multimodal-rag",
  },
  {
    name: "Open Source License Compliance Auditor",
    tagline: "AI agents that audit a dependency tree for license risk.",
    description:
      "A multi-agent pipeline that reads a repository, detects and classifies its open-source licenses, and flags obligation conflicts. LangGraph orchestrates the agents, Qdrant backs the retrieval, LiteLLM handles model routing, and deterministic SPDX-matrix reasoning keeps the AI from grading its own homework.",
    tech: ["LangGraph", "Qdrant", "LiteLLM", "Python"],
    github: "https://github.com/mpopat7/license-compliance-auditor",
  },
  {
    name: "SNAP Notice Navigator",
    tagline: "Plain-language help for confusing benefit letters.",
    description:
      "An AI web app that explains SNAP benefit notices in plain language and produces a source-backed, deadline-aware checklist of next steps. Built for the USAII Global AI Hackathon with responsible-AI guardrails: hedged wording, human-in-the-loop review, no automated eligibility decisions, and cited official sources. Live on Vercel.",
    tech: ["Next.js", "TypeScript", "Claude API", "Vercel"],
    github: "https://github.com/mpopat7/snap-notice-navigator",
    demo: "https://snap-notice-navigator.vercel.app",
  },
  {
    name: "Local LLM Hallucination Eval",
    tagline: "Measuring how often a local model makes things up.",
    description:
      "An evaluation harness that grades a local LLM's answers to Python code questions against deterministic ground truth derived from the abstract syntax tree. Ground-truth generation is fully separated from model querying, so the model never grades its own output, and every result gets an explicit outcome code: CORRECT, PARTIAL, WRONG COUNT, MISSED.",
    tech: ["Python", "AST", "Ollama"],
    github: "https://github.com/mpopat7/local-ai-hallucination-test",
  },
  {
    name: "Gallstone Ultrasound Classifier",
    tagline: "Machine learning on real clinical reports.",
    description:
      "A Python machine-learning model prototyped in Google Colab for Precise Urgent Care that analyzes ultrasound reports to detect and classify gallstones, reaching 73% classification accuracy on the available report data.",
    tech: ["Python", "Google Colab"],
    github: "",
  },
  {
    name: "Obsidian Brain",
    tagline: "A second brain that AI agents can read.",
    description:
      "Scripts that capture ChatGPT, Claude, and Ollama conversations into a single linked Obsidian knowledge graph, exposed read-only to AI agents through a standard-library Python MCP server. Everything I've figured out becomes queryable from Claude Code.",
    tech: ["Python", "MCP", "Obsidian"],
    github: "https://github.com/mpopat7/obsidian-brain",
  },
];

export const research = {
  eyebrow: "Research",
  role: "AI Research Fellow · Algoverse",
  dates: "June 2026 – Present",
  body: "Selected for Algoverse's competitive 12-week research cohort, building toward a paper targeted at a top ML conference under a PhD mentor. Current work: a pipeline that reconstructs 3D joint kinematics from smartphone video (OpenCap) to classify neuromuscular disease, engineering interpretable movement features across 129 subjects and 9 clinical tasks. Preliminary benchmarks reach 82% accuracy against 50% for standard clinical timed tests.",
  focus: [
    "Transformer architectures",
    "Scaling laws",
    "Self-supervised learning",
    "Interpretable ML",
  ],
};

export type ExperienceEntry = {
  role: string;
  org: string;
  dates: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Data Analyst Intern",
    org: "HiView Solutions · Google Premier Partner",
    dates: "May 2026 – Present",
    description:
      "Live dashboards tracking renewals across 650+ clients and $220K in quarterly revenue, Python ETL pipelines through the Apollo API, and a Gemini-powered Slack agent that automates reminders, drafts, and follow-ups.",
  },
  {
    role: "Analytics & Operations Intern",
    org: "Precise Urgent Care",
    dates: "July 2025 – May 2026",
    description:
      "Digitized 8 paper tracking forms into live, leadership-ready dashboards and prototyped a gallstone-detection ML model on ultrasound reports at 73% accuracy.",
  },
  {
    role: "Accounting & ERP Implementation Intern",
    org: "FEAST Detroit",
    dates: "May 2024 – August 2024",
    description:
      "Cost and margin analysis across 110+ food products, and evaluated ERP traceability software with three cross-functional teams, recommending Wherefour.",
  },
];

export const extras = {
  heading: "Case competitions & campus",
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
    {
      title: "Epsilon Nu Tau Professional Fraternity",
      note: "Selected 1 of 27 from 400 applicants to the entrepreneurship fraternity.",
    },
    {
      title: "K204 Peer Tutor, Kelley School of Business",
      note: "Excel and Access lab tutor for a 30-student honors section.",
    },
    {
      title: "Goldman Sachs Possibilities Series",
      note: "Selected for the competitive first-year career program.",
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
