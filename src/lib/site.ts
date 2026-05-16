export const SITE = {
  name: "Top G Studios",
  shortName: "Top G",
  tagline: "AI-Native Growth Engine for Modern Enterprises",
  description:
    "Top G Studios is an AI-native digital agency. We ship enterprise software, embed elite IT talent, and run AEO, GEO, SEO and performance marketing programs that get businesses cited on ChatGPT, Claude, Perplexity, Gemini and Google.",
  url: "https://topgstudios.com",
  email: "sanjay@topgstudio.com",
  bookingUrl: "https://calendly.com/sansanjay9731/imagineus-x-discovery-call-clone",
  phone: "+1 (000) 000-0000",
  address: "United States · Serving US-based teams",
  keywords: [
    "AEO agency USA",
    "GEO agency USA",
    "AI search optimization",
    "ChatGPT visibility",
    "Claude citations",
    "Perplexity SEO",
    "enterprise SEO US",
    "performance marketing USA",
    "IT staff augmentation US",
    "IT manpower deployment",
    "LLM implementation",
    "RAG agency",
    "Next.js development agency USA",
  ],
  socials: [
    "https://twitter.com/topgstudios",
    "https://www.linkedin.com/company/topgstudios",
    "https://www.instagram.com/topgstudios",
  ],
} as const;

export const NAV = [
  { label: "Services", href: "/#services" },
  { label: "AI Search", href: "/services/aeo-geo" },
  { label: "Manpower", href: "/services/it-manpower" },
  { label: "Work", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

export const SERVICES = [
  {
    slug: "it-development",
    title: "IT Development",
    short: "Custom software, web & mobile, e-commerce, internal tools.",
    description:
      "Full-stack engineering teams that ship production software. Next.js, React Native, Node, Python, AWS, GCP. From MVP to enterprise platforms.",
    deliverables: [
      "Web applications (Next.js, React, Vue)",
      "Mobile apps (React Native, Flutter, native iOS/Android)",
      "E-commerce platforms (Shopify Hydrogen, headless, custom)",
      "Backend systems and APIs (Node, Python, Go)",
      "Cloud architecture (AWS, GCP, Vercel, Cloudflare)",
      "DevOps, CI/CD, observability",
    ],
    icon: "code",
  },
  {
    slug: "it-manpower",
    title: "IT Manpower Deployment",
    short: "Vetted engineers, designers and PMs embedded in your team.",
    description:
      "We deploy on-demand engineering teams and individual contributors at companies that need elite talent without the hiring overhead. Onshore, nearshore, and offshore models.",
    deliverables: [
      "Full-stack & frontend engineers",
      "Backend & cloud engineers (AWS / GCP / Azure)",
      "Data engineers, ML engineers, AI engineers",
      "Product designers and UX researchers",
      "Engineering managers and tech leads",
      "QA, SDET, DevOps and SRE",
    ],
    icon: "team",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Consulting",
    short: "Enterprise-scale strategy across SEO, AEO/GEO, paid and lifecycle.",
    description:
      "C-suite consulting and execution. We diagnose where you're invisible, build the strategy, and deploy the team that ships growth.",
    deliverables: [
      "Full-funnel growth audits",
      "Marketing org design",
      "Channel strategy (SEO/AEO/GEO/paid/lifecycle)",
      "Attribution and analytics architecture",
      "Quarterly OKR planning",
      "Fractional CMO engagements",
    ],
    icon: "strategy",
  },
  {
    slug: "aeo-geo",
    title: "AEO + GEO (AI Search Visibility)",
    short: "Get cited on ChatGPT, Claude, Perplexity, Gemini, AI Overviews.",
    description:
      "Answer Engine Optimization and Generative Engine Optimization. We engineer your content, schema and authority signals so AI engines quote your brand as the answer — not your competitors.",
    deliverables: [
      "AI visibility audit across ChatGPT, Claude, Perplexity, Gemini, Copilot",
      "llms.txt + robots.txt + AI crawler access",
      "Passage-level citability optimization",
      "Schema.org JSON-LD (Organization, Service, FAQ, HowTo, Article)",
      "Entity SEO and Knowledge Graph entry",
      "Brand mention and citation building",
    ],
    icon: "ai",
  },
  {
    slug: "seo",
    title: "Enterprise SEO",
    short: "Technical SEO, content velocity, programmatic at scale.",
    description:
      "Win Google rankings the right way. Technical audits, content systems, programmatic SEO, internal linking architecture, Core Web Vitals.",
    deliverables: [
      "Technical SEO audit (500+ page crawl)",
      "Core Web Vitals optimization (INP, LCP, CLS)",
      "Programmatic SEO infrastructure",
      "Topical authority maps + content production",
      "Schema markup and rich results",
      "Link building and digital PR",
    ],
    icon: "search",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    short: "Meta, Google, LinkedIn ads engineered for ROAS.",
    description:
      "Full-funnel paid media programs. We build creative, run the ads, manage spend, and report on revenue — not vanity metrics.",
    deliverables: [
      "Meta Ads (Facebook, Instagram, Messenger)",
      "Google Ads (Search, Performance Max, YouTube)",
      "LinkedIn Ads for B2B",
      "Landing page CRO and funnel design",
      "Creative production (video, static, UGC)",
      "Server-side tracking and Conversions API",
    ],
    icon: "rocket",
  },
  {
    slug: "llm-implementation",
    title: "LLM & AI Implementation",
    short: "Custom GPTs, RAG systems, agents, internal copilots.",
    description:
      "Production AI for businesses. We build retrieval-augmented systems, internal copilots, customer-facing agents, and AI-powered workflows that actually save time and make money.",
    deliverables: [
      "Custom RAG knowledge systems",
      "Internal copilots (sales, support, ops)",
      "AI agents and workflow automation",
      "Custom GPTs and Claude Projects",
      "Voice agents and chatbots",
      "Fine-tuning and prompt engineering",
    ],
    icon: "spark",
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];
