// ---------------------------------------------------------------------------
// All site copy lives here. Edit this file to change content — no animation
// code needs to be touched. Anything wrapped in [BRACKETS] is a placeholder
// waiting for final copy or a real link.
// ---------------------------------------------------------------------------

export const site = {
  name: "Milen Popat",
  title: "Milen Popat — Builder",
  description:
    "Builder of AI systems, data tools, and the servers they run on. Information Systems & Business Analytics at Indiana University Kelley, CS minor.",
  email: "mpopat@iu.edu",
  github: "https://github.com/mpopat7",
  linkedin: "[LINKEDIN URL]",
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
  eyebrow: "Bloomington, Indiana",
  name: "Milen Popat",
  tagline:
    "I build AI systems, data tools, and the servers they run on. Studying Information Systems & Business Analytics at Indiana University's Kelley School of Business, with a CS minor.",
};

export const about = {
  heading: "Builder first.",
  // Rendered word-by-word with a scroll-scrubbed brightness reveal.
  body: "I was writing code and standing up servers before I got to campus. What holds my attention now is ML research, applied data work, and shipping tools people actually use — real systems over tutorials, working software over slideware.",
};

export type SkillGroup = {
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Data",
    blurb: "The core toolkit everything else is built on.",
    items: ["Python", "SQL", "TypeScript"],
  },
  {
    title: "Analysis & Visualization",
    blurb: "Turning raw tables into decisions.",
    items: ["Looker Studio", "Excel / Sheets (advanced)", "Data storytelling"],
  },
  {
    title: "ML & Deep Learning",
    blurb: "Fundamentals, not framework cargo-culting.",
    items: ["Probability & statistics", "Gradient descent", "Transformer architectures"],
  },
  {
    title: "AI Engineering",
    blurb: "Agent systems that hold up outside a notebook.",
    items: ["LangGraph", "Qdrant", "LiteLLM"],
  },
  {
    title: "Local Models & Infra",
    blurb: "If it can run on my own hardware, it does.",
    items: ["Ollama", "Home inference server", "Raspberry Pi 5", "SSH & networking"],
  },
  {
    title: "Automation",
    blurb: "Workflows that run while I sleep.",
    items: ["n8n", "AI agents", "Workflow design"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string; // "[GITHUB LINK]" renders as a placeholder, a URL renders as a link
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Open Source License Compliance Auditor",
    tagline: "AI agents that audit a dependency tree for license risk.",
    description:
      "A multi-agent pipeline that reads a repository, detects and classifies its open-source licenses, and flags compliance conflicts. LangGraph orchestrates the agents, Qdrant backs the retrieval, LiteLLM handles model routing — with deterministic SPDX reasoning so the AI never grades its own homework.",
    tech: ["LangGraph", "Qdrant", "LiteLLM", "Python"],
    github: "[GITHUB LINK]",
  },
  {
    name: "Gallstone ML Classifier",
    tagline: "[ONE-LINE DESCRIPTION]",
    description:
      "A machine-learning classifier built end-to-end in Google Colab: data cleaning, feature work, model training, and evaluation on a real medical dataset. [Add outcome / accuracy details]",
    tech: ["Python", "Google Colab", "[TECH STACK]"],
    github: "[GITHUB LINK]",
  },
  {
    name: "Web Content Extractor",
    tagline: "[ONE-LINE DESCRIPTION]",
    description:
      "A tool that pulls clean, structured content out of messy web pages. [Add what it extracts, what it feeds into, and why it exists]",
    tech: ["[TECH STACK]"],
    github: "[GITHUB LINK]",
  },
  {
    name: "Home Lab / Local AI Server",
    tagline: "A personal inference stack, from bare metal up.",
    description:
      "An ASUS NUC GX10 with 128GB of unified memory running Ollama as a personal inference server, plus a Raspberry Pi 5 configured from scratch — SSH, local models, and networked storage. The infrastructure the other projects run on.",
    tech: ["Ollama", "Ubuntu", "Raspberry Pi OS", "Networking"],
    github: "[GITHUB LINK]",
  },
  {
    name: "n8n + AI Agent Automations",
    tagline: "[ONE-LINE DESCRIPTION]",
    description:
      "Automations that wire AI agents into real workflows with n8n — triggers, tool calls, and hand-offs that run unattended. [Add one or two concrete automations and what they save]",
    tech: ["n8n", "AI agents", "[TECH STACK]"],
    github: "[GITHUB LINK]",
  },
];

export const research = {
  eyebrow: "Research",
  role: "AI Research Fellow · Algoverse",
  body: "Part of a NeurIPS-aligned research cohort, working under Dr. Taoran Ji, former Director of Machine Learning at Moody's Analytics.",
  focus: [
    "Mechanistic interpretability",
    "Sparse autoencoders",
    "Transformer architectures",
    "ML in finance",
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
    dates: "[DATE RANGE]",
    description:
      "Client-facing analytics for Google Workspace deployments — building the dashboards and adoption reporting that customers act on.",
  },
  {
    role: "Accounting / ERP Intern",
    org: "FEAST Detroit",
    dates: "[DATE RANGE]",
    description:
      "Supported accounting operations and ERP workflows for a Detroit food-business incubator.",
  },
  {
    role: "Operations Intern",
    org: "Precise Urgent Care",
    dates: "[DATE RANGE]",
    description:
      "Digitized paper-based clinical and administrative workflows into structured digital systems.",
  },
];

export const extras = {
  heading: "Off the clock",
  items: [
    {
      title: "Cincinnati Reds Analytics Case Competition",
      note: "Student analytics competition — baseball data, real stakes.",
    },
    {
      title: "Cintas / ENT Case Competition",
      note: "Business case competition with a data-driven pitch.",
    },
  ],
};

export const contact = {
  heading: "Let's build something.",
  sub: "Open to research collaborations, internships, and interesting problems.",
};
