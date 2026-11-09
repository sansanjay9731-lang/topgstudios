export const SITE = {
  name: "Top Gun Studios",
  shortName: "Top Gun",
  altName: "Top G Studios",
  tagline: "AI-Native Growth & Search Dominance Engine",
  description:
    "Top Gun Studios is an AI-native search engineering and digital growth agency. We build production software, embed elite engineering talent, and dominate modern search (AEO, GEO & SEO): empowering product and service business owners to gain indisputable visibility, trust, and market dominance across Google, ChatGPT, Perplexity, Claude, and Gemini.",
  url: "https://topgstudios.com",
  email: "sanjay@topgstudios.com",
  founder: {
    name: "Sanjay Yellar",
    title: "Founder & Lead Architect",
    bio: "Pioneering Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) across India and global markets. Architecting AI entity graphs, LLM ingestion pipelines, and organic authority systems that ensure product and service businesses are cited as the premier recommendation.",
    linkedin: "https://www.linkedin.com/in/sanjayyellar",
    twitter: "https://twitter.com/sanjayyellar",
  },
  bookingUrl: "https://calendly.com/sansanjay9731/imagineus-x-discovery-call-clone",
  phone: "+91 98450 00000",
  address: "Bengaluru & Mumbai · Global Delivery for India, USA, UAE & UK",
  locations: [
    { city: "Bengaluru", country: "India", role: "Engineering & AI R&D HQ" },
    { city: "Mumbai", country: "India", role: "Enterprise & Client Hub" },
    { city: "New York", country: "United States", role: "US Partner Operations" },
    { city: "Dubai", country: "United Arab Emirates", role: "Middle East Advisory" },
  ],
  brandValues: [
    { label: "VISIBILITY", desc: "Permanent search presence across Google AI, ChatGPT, Perplexity, and Claude." },
    { label: "TRUST", desc: "Verifiable third-party consensus, schema ground truth, and authoritative proof." },
    { label: "DOMINANCE", desc: "Capturing high-intent buyers at the exact moment of decision." },
    { label: "SPEED", desc: "Rapid deployment cycles, sub-second architectures, zero operational drag." },
    { label: "PERFORMANCE", desc: "Measurable Share of Model growth, high-converting pipelines, and real ROI." },
  ],
  brandColors: {
    accentGreen: "#00FF66",
    deepBlack: "#07080A",
    cleanWhite: "#F8FAFC",
  },
  keywords: [
    "AEO agency India",
    "GEO agency India",
    "AI search optimization",
    "ChatGPT business recommendations",
    "Perplexity search optimization",
    "Google AI Overviews SEO",
    "AEO for product brands",
    "AEO for service businesses",
    "Share of Model tracking",
    "AEO agency USA",
    "Generative Engine Optimization",
    "Next.js AI agency",
    "Enterprise search dominance",
    "organic customer acquisition AI",
  ],
  targetNiches: [
    {
      id: "product-brands",
      name: "Product Brands & Modern D2C",
      focus: "E-Commerce, Consumer Products, Electronics, Clean Beauty, B2B Exporters",
      valueProp: "Make AI assistants recommend your products when buyers search for 'best options with verified quality'. Bypass ad-spend wars with organic product schema and ingredient/spec authority.",
    },
    {
      id: "service-businesses",
      name: "High-Value Service Businesses",
      focus: "Consulting Firms, Healthcare Clinics, Corporate Law, Financial Advisory, Luxury Real Estate",
      valueProp: "Eliminate dependency on aggregator middlemen and broker directories. Position your partners and practices as the verified #1 authority that AI quotes by default.",
    },
    {
      id: "b2b-enterprise",
      name: "B2B & Enterprise Tech",
      focus: "SaaS Platforms, Cloud Infrastructure, IT Providers, Industrial Manufacturers",
      valueProp: "Direct discovery by enterprise procurement heads and technical decision-makers conducting vendor due diligence inside conversational AI engines.",
    },
    {
      id: "regional-market-leaders",
      name: "Regional & Metro Market Leaders",
      focus: "Multi-Location Chains, High-End Boutiques, Specialized Regional Providers",
      valueProp: "Dominate hyper-local and multi-city conversational searches across Mumbai, Bengaluru, Delhi NCR, and international markets without fake review spam.",
    },
  ],
  socials: [
    "https://twitter.com/topgstudios",
    "https://www.linkedin.com/company/topgunstudios",
    "https://www.instagram.com/topgunstudio/",
  ],
  companySocials: {
    linkedin: "https://www.linkedin.com/company/topgunstudios",
    instagram: "https://www.instagram.com/topgunstudio/",
    twitter: "https://twitter.com/topgstudios",
  },
} as const;

export const NAV = [
  { label: "Simulator", href: "/#simulator" },
  { label: "The Paradigm", href: "/#comparison" },
  { label: "Who We Serve", href: "/#niches" },
  { label: "Community Proof", href: "/#community" },
  { label: "Pillars", href: "/#pillars" },
  { label: "Services", href: "/#services" },
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
      "Answer Engine Optimization and Generative Engine Optimization. We engineer your content, schema and authority signals so AI engines quote your brand as the answer, not your competitors.",
    deliverables: [
      "AI visibility audit across ChatGPT, Claude, Perplexity, Gemini, Copilot",
      "Dynamic llms.txt + llms-full.txt + AI crawler infrastructure",
      "Passage-level citability optimization for products and services",
      "Schema.org JSON-LD (Product, Service, LocalBusiness, Organization, Person)",
      "Entity SEO and Google Knowledge Graph entry",
      "Digital PR, Reddit authority consensus, and citation building",
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
      "Full-funnel paid media programs. We build creative, run the ads, manage spend, and report on revenue, not vanity metrics.",
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
