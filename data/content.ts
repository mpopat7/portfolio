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
    "I build data pipelines, RAG systems, and ML experiments that make it past the notebook. Information Systems & Business Analytics at Indiana University's Kelley School of Business, with a CS minor.",
};

export const about = {
  heading: "Builder first.",
  // Rendered word-by-word with a scroll-scrubbed brightness reveal.
  body: "I started shipping before I started school: dashboards for an urgent care clinic in Texas, ETL pipelines for a Google partner, research code for a NeurIPS-track fellowship, and a rack of local AI hardware at home. I like messy problems, measurable results, and tools that outlive the demo.",
  photo: "/headshot.jpg",
};

export type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    blurb: "The core toolkit everything else is built on.",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "Java", "HTML/CSS"],
  },
  {
    title: "Analysis & Visualization",
    blurb: "Turning raw tables into decisions.",
    items: [
      "Excel (Power Query, Power Pivot, VBA)",
      "Power BI",
      "Looker Studio",
      "Google Sheets",
    ],
  },
  {
    title: "ML & Deep Learning",
    blurb: "Fundamentals before frameworks.",
    items: [
      "Probability & statistics",
      "Gradient descent",
      "Transformer architectures",
    ],
  },
  {
    title: "AI Engineering",
    blurb: "Agent systems that hold up outside a notebook.",
    items: ["LangGraph", "Qdrant", "LiteLLM", "RAG & MCP", "Claude & Gemini APIs"],
  },
  {
    title: "Local Models & Infra",
    blurb: "If it can run on my own hardware, it does.",
    items: ["Ollama", "Home inference server", "Raspberry Pi 5", "SSH & networking"],
  },
  {
    title: "Web & Shipping",
    blurb: "From repo to production.",
    items: ["Next.js", "React", "Vercel", "Git"],
  },
  {
    title: "Automation",
    blurb: "Workflows that run while I sleep.",
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
      "A Python machine-learning model prototyped in Google Colab for Precise Urgent Care that analyzes ultrasound reports to detect and classify gallstones, reaching 73% classification accuracy on the available report data. Internal clinical work, so no public repo.",
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
  {
    name: "Home Lab / Local AI Server",
    tagline: "A personal inference stack, from bare metal up.",
    description:
      "An ASUS NUC with 128GB of unified memory running Ollama as a personal inference server, plus a Raspberry Pi 5 configured from scratch: SSH, local models, and networked storage. This is the infrastructure the other projects run on.",
    tech: ["Ollama", "Ubuntu", "Raspberry Pi OS", "Networking"],
    github: "",
  },
  {
    name: "Web Content Extractor",
    tagline: "[ONE-LINE DESCRIPTION]",
    description:
      "A tool that pulls clean, structured content out of messy web pages. [Add what it extracts and what it feeds into]",
    tech: ["[TECH STACK]"],
    github: "[GITHUB LINK]",
  },
  {
    name: "n8n + AI Agent Automations",
    tagline: "[ONE-LINE DESCRIPTION]",
    description:
      "Automations that wire AI agents into real workflows with n8n: triggers, tool calls, and hand-offs that run unattended. [Add one or two concrete automations and what they save]",
    tech: ["n8n", "AI agents"],
    github: "[GITHUB LINK]",
  },
];

export const research = {
  eyebrow: "Research",
  role: "AI Research Fellow · Algoverse",
  dates: "June 2026 – Present",
  body: "Selected for a 12-week NeurIPS-track research cohort, working under Dr. Taoran Ji, former Director of Machine Learning at Moody's Analytics. Current work: a pipeline that reconstructs 3D joint kinematics from smartphone video (OpenCap) to classify neuromuscular disease, engineering interpretable movement features across 129 subjects and 9 clinical tasks. Preliminary benchmarks reach 82% accuracy against 50% for standard clinical timed tests.",
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
