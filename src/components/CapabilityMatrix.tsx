"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Container, Eyebrow, H2, Button } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { SITE } from "@/lib/site";

type CapabilityCategory = "all" | "ai" | "engineering" | "growth";

interface CapabilityItem {
  slug: string;
  code: string;
  category: "ai" | "engineering" | "growth";
  categoryLabel: string;
  title: string;
  badge?: string;
  short: string;
  description: string;
  deliverables: string[];
  isFlagship?: boolean;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    slug: "aeo-geo",
    code: "01",
    category: "ai",
    categoryLabel: "AI & Search Visibility",
    title: "AEO + GEO (AI Search Visibility)",
    badge: "CORE FLAGSHIP",
    short: "Get cited on ChatGPT, Claude, Perplexity, Gemini, and Google AI Overviews.",
    description:
      "Engineered answer dominance across generative models. We architect machine-readable structured knowledge, digital PR citation consensus, and dynamic llms.txt endpoints so AI engines quote your business as the single verified recommendation.",
    deliverables: [
      "Dynamic llms.txt & llms-full.txt Endpoints",
      "Perplexity & ChatGPT Citation PR",
      "Knowledge Graph & Schema.org JSON-LD",
      "Direct Passage Search Optimization",
      "Brand Entity Consensus Engineering",
    ],
    isFlagship: true,
  },
  {
    slug: "llm-implementation",
    code: "02",
    category: "ai",
    categoryLabel: "AI & Search Visibility",
    title: "LLM & AI Implementation",
    badge: "AI RUNTIME",
    short: "Custom GPTs, enterprise RAG pipelines, autonomous agents, and internal copilots.",
    description:
      "Production-ready generative AI built for enterprise speed. We implement retrieval-augmented systems, proprietary internal copilots, and multi-agent workflows that automate complex business execution.",
    deliverables: [
      "Enterprise RAG Knowledge Bases",
      "Autonomous Multi-Agent Workflows",
      "Custom Copilots & Tool Calling",
      "Fine-Tuning & Model Alignment",
    ],
  },
  {
    slug: "it-development",
    code: "03",
    category: "engineering",
    categoryLabel: "Software & Systems",
    title: "IT Development",
    badge: "SOFTWARE ENG",
    short: "Custom web applications, native mobile apps, headless e-commerce, and cloud APIs.",
    description:
      "Full-stack engineering teams that ship production software. Next.js, React Native, Node, Python, AWS, and GCP with zero technical debt from MVP to enterprise scale.",
    deliverables: [
      "High-Performance Next.js & React Apps",
      "Cross-Platform iOS & Android Mobile",
      "Headless E-Commerce & Custom Funnels",
      "Cloud Infrastructure & Serverless APIs",
    ],
  },
  {
    slug: "it-manpower",
    code: "04",
    category: "engineering",
    categoryLabel: "Software & Systems",
    title: "IT Manpower Deployment",
    badge: "EMBEDDED TALENT",
    short: "Pre-vetted senior engineers, designers, and tech leads embedded directly into your org.",
    description:
      "On-demand engineering squads deployed with zero recruitment latency. We embed senior engineers, tech leads, and product architects who ship under your leadership from day one.",
    deliverables: [
      "Top 1% Vetted Full-Stack & AI Engineers",
      "Tech Leads & Engineering Managers",
      "Onshore, Nearshore, and Offshore Pods",
      "Immediate 14-Day Deployment Runway",
    ],
  },
  {
    slug: "seo",
    code: "05",
    category: "ai",
    categoryLabel: "AI & Search Visibility",
    title: "Enterprise SEO",
    badge: "ORGANIC RADAR",
    short: "Technical crawl optimization, Core Web Vitals speed, and programmatic SEO at scale.",
    description:
      "Dominate high-intent organic Google search. We diagnose technical friction, build programmatic page generation systems, and maximize internal crawl equity.",
    deliverables: [
      "500+ Page Crawl Diagnostics & Fixes",
      "Core Web Vitals Optimization (INP/LCP)",
      "Programmatic Keyword Architecture",
      "Entity-First Topical Authority Clustering",
    ],
  },
  {
    slug: "performance-marketing",
    code: "06",
    category: "growth",
    categoryLabel: "Growth & Acquisition",
    title: "Performance Marketing",
    badge: "REVENUE SCALE",
    short: "Meta, Google Ads (PMax), and LinkedIn campaigns engineered for bottom-line ROAS.",
    description:
      "High-converting paid acquisition with zero vanity metrics. We craft high-converting ad creative, engineer rigorous conversion funnels, and manage multi-channel spend for measurable profit.",
    deliverables: [
      "Meta Ads & Google Performance Max",
      "Server-Side Tracking & Conversions API",
      "High-Converting Landing Page CRO",
      "LinkedIn Account-Based Targeting (B2B)",
    ],
  },
  {
    slug: "digital-marketing",
    code: "07",
    category: "growth",
    categoryLabel: "Growth & Acquisition",
    title: "Digital Marketing Consulting",
    badge: "STRATEGIC ADVISORY",
    short: "C-suite growth strategy across organic, AI search, paid channels, and lifecycle retention.",
    description:
      "Fractional CMO guidance and growth architecture. We analyze pipeline drop-offs, realign channel investments, and build unified acquisition flywheels for sustainable compounding.",
    deliverables: [
      "Full-Funnel Growth Audits & Playbooks",
      "Fractional CMO & Marketing Org Design",
      "Multi-Channel Attribution Modeling",
      "Quarterly Acquisition OKR Roadmaps",
    ],
  },
];

const CATEGORIES: { id: CapabilityCategory; label: string; count: number }[] = [
  { id: "all", label: "All Capabilities", count: 7 },
  { id: "ai", label: "AI & Modern Search", count: 3 },
  { id: "engineering", label: "Software & Talent", count: 2 },
  { id: "growth", label: "Growth & Performance", count: 2 },
];

function CapabilityIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "aeo-geo":
      // Neural radar / multi-model scanner
      return (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <circle cx="12" cy="12" r="9" strokeOpacity={0.3} strokeDasharray="3 3" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4M2 12h4m12 0h4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.5 8.5 2.5-2.5m-12 12 2.5-2.5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "llm-implementation":
      // Microchip / neural node
      return (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 1v3m6-3v3M9 20v3m6-3v3M1 9h3m-3 6h3M20 9h3m-3 6h3" />
        </svg>
      );
    case "it-development":
      // Terminal / code
      return (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m8 10 2.5 2L8 14m5 0h3" />
        </svg>
      );
    case "it-manpower":
      // Squad / team pods
      return (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" stroke="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "seo":
      // Precision search radar
      return (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <circle cx="11" cy="11" r="7" stroke="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M11 8v6m-3-3h6" />
        </svg>
      );
    case "performance-marketing":
      // Targeting reticle & rocket
      return (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H13.5m6 0v6" />
          <circle cx="12" cy="12" r="8" strokeOpacity={0.3} strokeDasharray="2 2" />
          <circle cx="7" cy="17" r="2" fill="currentColor" fillOpacity={0.2} stroke="currentColor" />
        </svg>
      );
    case "digital-marketing":
      // Strategic compass
      return (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.5 9.5-5 2 2 5 5-2-2-5z" fill="currentColor" fillOpacity={0.2} />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
        </svg>
      );
  }
}

export function CapabilityMatrix() {
  const [activeTab, setActiveTab] = useState<CapabilityCategory>("all");

  const filteredCapabilities =
    activeTab === "all"
      ? CAPABILITIES
      : CAPABILITIES.filter((c) => c.category === activeTab);

  return (
    <section id="services" className="relative border-t border-white/[0.08] py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/[0.03] blur-[140px] pointer-events-none rounded-full"
        aria-hidden
      />

      <Container>
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <Eyebrow>Full Capability Matrix</Eyebrow>
            <H2 className="mt-4">Every discipline. One accountable team.</H2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
              No fragmented vendor finger-pointing. We integrate custom software engineering,
              on-demand manpower deployment, and modern search dominance (AEO, GEO, and SEO)
              under one rigorous engineering standard.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button href="/pricing" variant="outline">
              View Pricing Models
            </Button>
            <Button href={SITE.bookingUrl} external variant="primary">
              Book Architecture Call
            </Button>
          </div>
        </FadeIn>

        {/* Filter Switcher Tabs */}
        <FadeIn delay={0.1} className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-[0_0_20px_rgba(0,255,102,0.15)]"
                    : "bg-[#0d1017] text-neutral-400 border border-white/[0.08] hover:text-white hover:border-white/20"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] ${
                    isActive
                      ? "bg-emerald-500/30 text-emerald-200"
                      : "bg-white/5 text-neutral-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </FadeIn>

        {/* Dynamic Bento Capability Grid */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "all" ? (
                /* Curated 7-Item Bento Grid Layout */
                <div className="space-y-6">
                  {/* Top Row: Flagship 2-col card + Companion 1-col card */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* CARD 1: Flagship AEO+GEO (spans 2 columns on lg) */}
                    <div className="lg:col-span-2">
                      <CapabilityCard item={CAPABILITIES[0]} isHero />
                    </div>

                    {/* CARD 2: LLM Implementation (spans 1 column) */}
                    <div className="lg:col-span-1">
                      <CapabilityCard item={CAPABILITIES[1]} />
                    </div>
                  </div>

                  {/* Middle Row: 3 Balanced Software & Search Cards */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* CARD 3: IT Development */}
                    <CapabilityCard item={CAPABILITIES[2]} />
                    {/* CARD 4: IT Manpower */}
                    <CapabilityCard item={CAPABILITIES[3]} />
                    {/* CARD 5: Enterprise SEO */}
                    <CapabilityCard item={CAPABILITIES[4]} />
                  </div>

                  {/* Bottom Row: 2 Balanced Growth Pods (50% / 50% split) */}
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* CARD 6: Performance Marketing */}
                    <CapabilityCard item={CAPABILITIES[5]} isWide />
                    {/* CARD 7: Digital Marketing Consulting */}
                    <CapabilityCard item={CAPABILITIES[6]} isWide />
                  </div>
                </div>
              ) : (
                /* Filtered View: Uniform Grid */
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredCapabilities.map((item) => (
                    <CapabilityCard key={item.slug} item={item} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Guarantee Banner */}
        <FadeIn delay={0.2} className="mt-14">
          <div className="relative rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950/20 via-[#0d1017] to-emerald-950/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                  Unified Accountability SLA
                </div>
                <div className="text-sm sm:text-base text-neutral-300 font-medium mt-0.5">
                  Every capability includes dedicated engineering leads, weekly sprint telemetry, and SLA-backed deliverables.
                </div>
              </div>
            </div>
            <Link
              href="/pricing"
              className="shrink-0 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 hover:text-emerald-300 group"
            >
              <span>Explore Retainer Packages</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function CapabilityCard({
  item,
  isHero = false,
  isWide = false,
}: {
  item: CapabilityItem;
  isHero?: boolean;
  isWide?: boolean;
}) {
  return (
    <Link
      href={`/services/${item.slug}`}
      className={`group relative flex flex-col h-full rounded-2xl border transition-all duration-300 overflow-hidden ${
        isHero
          ? "border-emerald-500/30 bg-gradient-to-b from-[#0f141f] via-[#0a0d13] to-[#07090d] hover:border-emerald-400/60 hover:shadow-[0_0_40px_rgba(0,255,102,0.12)] p-7 sm:p-9"
          : "border-white/[0.08] bg-[#0b0e14] hover:bg-[#0f131c] hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(0,255,102,0.06)] p-7"
      }`}
    >
      {/* Subtle corner glow effect on hover */}
      <div
        className="absolute -top-16 -right-16 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden
      />

      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-semibold text-emerald-400">
            [SYS // {item.code}]
          </span>
          {item.badge && (
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-wider font-medium ${
                item.isFlagship
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : "bg-white/5 text-neutral-400 border border-white/10"
              }`}
            >
              {item.badge}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-neutral-500 group-hover:text-neutral-400 transition-colors hidden sm:inline">
            {item.categoryLabel}
          </span>
          <div className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 flex items-center justify-center transition-colors">
            <span className="text-neutral-400 group-hover:text-emerald-400 text-xs font-mono group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </div>
        </div>
      </div>

      {/* Icon & Title */}
      <div className="mt-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/15 transition-all">
          <CapabilityIcon slug={item.slug} />
        </div>
        <div>
          <h3
            className={`font-[var(--font-display)] font-medium tracking-tight text-white group-hover:text-emerald-300 transition-colors ${
              isHero ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            {isHero || isWide ? item.description : item.short}
          </p>
        </div>
      </div>

      {/* Deliverable Micro-Tags */}
      <div className="mt-6 pt-5 border-t border-white/[0.06] flex-1 flex flex-col justify-end">
        <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-3">
          Key Deliverables:
        </div>
        <div className="flex flex-wrap gap-2">
          {item.deliverables.map((del, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-neutral-300 group-hover:border-white/10 group-hover:bg-white/[0.05] transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-emerald-400/80" />
              {del}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA row */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono pt-4 border-t border-white/[0.04]">
        <span className="text-neutral-500">Route: /services/{item.slug}</span>
        <span className="text-emerald-400 group-hover:underline flex items-center gap-1">
          Explore Capability Details →
        </span>
      </div>
    </Link>
  );
}
