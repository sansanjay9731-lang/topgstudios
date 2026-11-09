export interface ContentCluster {
  id: string;
  name: string;
  slug: string;
  description: string;
  targetAudience: string;
  primaryKeywords: string[];
  entitySchemas: string[];
  pillarSlug: string;
}

export const CONTENT_CLUSTERS: ContentCluster[] = [
  {
    id: "healthcare-aeo",
    name: "Healthcare & High-Ticket Medical AEO",
    slug: "healthcare-aeo",
    description:
      "How top medical specialists, IVF clinics, cosmetic dermatologists, and hospitals become the recommended choice on ChatGPT, Perplexity, and Google AI Overviews without relying on Practo kickbacks.",
    targetAudience: "Dermatologists, IVF Specialists, Plastic Surgeons, Dental Implantologists, Clinic Directors",
    primaryKeywords: [
      "AEO for healthcare",
      "ChatGPT doctor recommendations",
      "AI visibility for clinics India",
      "Perplexity medical citations",
      "Practo alternative for doctors",
    ],
    entitySchemas: ["MedicalBusiness", "Physician", "MedicalCondition", "MedicalProcedure"],
    pillarSlug: "the-doctors-guide-to-ai-search-aeo-geo",
  },
  {
    id: "real-estate-aeo",
    name: "Luxury Real Estate & Developer GEO",
    slug: "real-estate-aeo",
    description:
      "Capturing high-net-worth local and NRI property buyers by engineering conversational presence on Perplexity, Claude, and Google AI search for luxury residential and commercial developments.",
    targetAudience: "Real Estate Developers, Luxury Brokers, NRI Property Advisors, Commercial Real Estate Firms",
    primaryKeywords: [
      "AI search for real estate",
      "Perplexity property search",
      "luxury real estate AEO India",
      "NRI property search ChatGPT",
      "GEO for real estate developers",
    ],
    entitySchemas: ["RealEstateAgent", "Place", "OfferCatalog", "Residence"],
    pillarSlug: "how-luxury-real-estate-developers-win-ai-search",
  },
  {
    id: "legal-wealth-geo",
    name: "Legal, Tax & Wealth Management GEO",
    slug: "legal-wealth-geo",
    description:
      "Bypassing advertising restrictions to establish unassailable authoritative consensus on AI engines for corporate law firms, tax advisory, and family wealth offices.",
    targetAudience: "Corporate Law Firms, M&A Lawyers, Chartered Accountants, Family Offices, Wealth Advisors",
    primaryKeywords: [
      "AEO for law firms India",
      "legal marketing without advertising",
      "corporate law firm ChatGPT citations",
      "Perplexity wealth management advisory",
    ],
    entitySchemas: ["LegalService", "FinancialService", "Attorney"],
    pillarSlug: "legal-marketing-in-the-ai-era-bypassing-ad-bans",
  },
  {
    id: "aeo-core-mechanics",
    name: "AEO Core Mechanics & Technical AI-Readiness",
    slug: "aeo-core-mechanics",
    description:
      "The engineering standard: llms.txt, robots.txt, semantic HTML, passage-level answer engines, and crawler optimization for GPTBot, ClaudeBot, and PerplexityBot.",
    targetAudience: "CTOs, Technical Marketers, Next.js Developers, Enterprise Growth Engineers",
    primaryKeywords: [
      "llms.txt specification",
      "AEO technical checklist",
      "robots.txt for AI crawlers",
      "passage ranking optimization",
      "Next.js AEO architecture",
    ],
    entitySchemas: ["TechArticle", "SoftwareSourceCode", "DefinedTerm"],
    pillarSlug: "the-definitive-technical-aeo-architecture-guide",
  },
  {
    id: "geo-consensus-pr",
    name: "GEO Consensus & Digital PR Graph",
    slug: "geo-consensus-pr",
    description:
      "Building third-party validation that AI engines trust: Reddit discussions, editorial features, industry directories, and original research datasets.",
    targetAudience: "Founders, CMOs, PR Heads, Agency Owners",
    primaryKeywords: [
      "Generative Engine Optimization",
      "third party consensus AI search",
      "Reddit citation SEO",
      "digital PR for AI engines",
    ],
    entitySchemas: ["Article", "NewsArticle", "Review"],
    pillarSlug: "generative-engine-optimization-building-third-party-consensus",
  },
  {
    id: "entity-eeat-anchoring",
    name: "Entity SEO & E-E-A-T Anchoring",
    slug: "entity-eeat-anchoring",
    description:
      "Binding founder credentials, corporate registries, patents, and sameAs graphs into Google Knowledge Graph and LLM memory weights.",
    targetAudience: "Enterprise Founders, C-Suite Leaders, Medical Directors",
    primaryKeywords: [
      "Entity SEO Knowledge Graph",
      "Person schema E-E-A-T",
      "LLM entity grounding",
      "sameAs schema graph",
    ],
    entitySchemas: ["Person", "Organization", "AboutPage"],
    pillarSlug: "entity-seo-grounding-your-brand-in-llm-knowledge-graphs",
  },
  {
    id: "local-regional-ai",
    name: "Local & Multi-City AI Visibility (India & Tier-1 Hubs)",
    slug: "local-regional-ai",
    description:
      "Dominating conversational hyper-local search across Mumbai, Bengaluru, Delhi NCR, Hyderabad, Chennai, and Pune without fake review spam.",
    targetAudience: "Multi-Location Clinic Chains, High-End Boutiques, Regional Service Providers",
    primaryKeywords: [
      "local AEO India",
      "geo-radius schema AI search",
      "multi-city clinic AI visibility",
      "hyperlocal ChatGPT queries",
    ],
    entitySchemas: ["LocalBusiness", "GeoCoordinates", "OpeningHoursSpecification"],
    pillarSlug: "hyperlocal-ai-search-winning-metro-india-queries",
  },
  {
    id: "d2c-export-b2b",
    name: "D2C Brands & India-to-US B2B Exporters",
    slug: "d2c-export-b2b",
    description:
      "How Indian manufacturing exporters, SaaS builders, and clean D2C brands get discovered by international buyers using AI search in the US, UK, and UAE.",
    targetAudience: "D2C Brand Founders, B2B Exporters, Cross-Border SaaS Founders",
    primaryKeywords: [
      "cross-border AI discovery",
      "B2B exporter AEO",
      "D2C brand recommendation ChatGPT",
      "India to US export search",
    ],
    entitySchemas: ["Product", "Brand", "MerchantReturnPolicy"],
    pillarSlug: "the-export-playbook-getting-indian-manufacturers-cited-in-us-ai-search",
  },
  {
    id: "som-measurement",
    name: "Share of Model (SoM) & AI Attribution",
    slug: "som-measurement",
    description:
      "The metrics that replace keyword rank: Share of Model, citation frequency, sentiment polarity, and revenue attribution from conversational AI.",
    targetAudience: "CMOs, Growth Heads, Performance Marketers, Agency Leaders",
    primaryKeywords: [
      "Share of Model tracking",
      "AI citation monitoring",
      "AEO analytics",
      "measuring ChatGPT referrals",
    ],
    entitySchemas: ["QuantitativeValue", "Dataset", "Article"],
    pillarSlug: "share-of-model-how-to-measure-and-track-ai-search-visibility",
  },
  {
    id: "glossary-defined-terms",
    name: "AI Search Glossary & Defined Terms",
    slug: "glossary-defined-terms",
    description:
      "Snackable, authoritative 500-word definitions designed for direct passage extraction by answer engines answering 'What is X?' queries.",
    targetAudience: "Business Owners, Marketers, Students, Developers",
    primaryKeywords: [
      "what is AEO",
      "what is GEO",
      "llms.txt explained",
      "hallucination rate in search",
    ],
    entitySchemas: ["DefinedTerm", "DefinedTermSet"],
    pillarSlug: "ai-search-glossary-the-complete-aeo-geo-lexicon",
  },
  {
    id: "cross-border-global",
    name: "Global Enterprise AI Visibility (USA, UAE, UK)",
    slug: "cross-border-global",
    description:
      "Enterprise playbooks for multinational brands competing in global English and multilingual conversational search environments.",
    targetAudience: "Global VP Marketing, Multinational Enterprises, VC-backed Series B+ Startups",
    primaryKeywords: [
      "global enterprise AEO",
      "multilingual AI search optimization",
      "US enterprise GEO agency",
      "Dubai luxury brand AI search",
    ],
    entitySchemas: ["Organization", "Corporation", "WebSite"],
    pillarSlug: "global-enterprise-geo-competing-in-us-and-international-ai-answers",
  },
];
