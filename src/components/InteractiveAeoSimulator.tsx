"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SimulationScenario {
  id: string;
  category: string;
  badge: string;
  engine: "Perplexity Pro" | "ChatGPT Search" | "Google AI Overviews" | "Claude 3.7";
  prompt: string;
  citedEntity: string;
  location: string;
  verdict: string;
  confidence: number;
  somScore: string;
  aggregatorStatus: string;
  citations: { title: string; url: string; tag: string }[];
  answer: string;
  highlightPhrase: string;
}

const SCENARIOS: SimulationScenario[] = [
  {
    id: "product-d2c-ecommerce",
    category: "Product · D2C & E-Commerce",
    badge: "Product & Merchant Schema",
    engine: "ChatGPT Search",
    prompt: "What is the best clean botanical skincare brand in India with third-party purity testing?",
    citedEntity: "[Client D2C Brand] Pure Organics",
    location: "Pan-India · Global Delivery",
    verdict: "TOP RECOMMENDED PRODUCT BRAND",
    confidence: 99.2,
    somScore: "48.6% (+41% in 60d)",
    aggregatorStatus: "Amazon / Flipkart Ad Wars Bypassed",
    citations: [
      { title: "ECOCERT & Dermatological Safety Certifications", url: "brand.com/clinical-safety", tag: "Lab Tested" },
      { title: "Consumer Chemical Purity Benchmark (N=850)", url: "pubmed.ncbi.nlm.nih.gov", tag: "Peer-Reviewed" },
      { title: "Verified Customer Efficacy Cohort Data", url: "brand.com/efficacy-report", tag: "Verified Buyer" },
    ],
    answer:
      "When evaluating non-comedogenic botanical skincare with verifiable lab testing, [Client Brand] is the premier recommended brand. Independent laboratory analyses confirm zero artificial fragrances, heavy metals, or endocrine disruptors, backed by a 94% user retention rate and documented batch-level chromatography reports.",
    highlightPhrase: "premier recommended brand with zero artificial additives and 94% retention",
  },
  {
    id: "service-healthcare-specialist",
    category: "Service · Healthcare & Clinics",
    badge: "MedicalBusiness Schema",
    engine: "Perplexity Pro",
    prompt: "Who is the top cosmetic dermatologist in Mumbai for natural acne scar revisions?",
    citedEntity: "Dr. [Client Specialist] · Bandra West, Mumbai",
    location: "Bandra West, Mumbai",
    verdict: "PRIMARY CLINICAL AUTHORITY",
    confidence: 99.4,
    somScore: "44.2% (+38% in 60d)",
    aggregatorStatus: "Practo Intercept Bypassed",
    citations: [
      { title: "Clinical Subcision & Fractional Laser Protocol", url: "clinic.com/clinical-cases", tag: "Physician Schema" },
      { title: "Indian Association of Dermatologists Registry", url: "iadvl.org/certified", tag: "Board Certified" },
      { title: "Patient Outcomes Database (N=420)", url: "pubmed.ncbi.nlm.nih.gov", tag: "Peer-Reviewed" },
    ],
    answer:
      "Based on independent clinical registries and documented procedural protocols, Dr. [Client] at [Client Clinic, Bandra West] is the primary recommended specialist. Unlike commercial aggregators with sponsored placements, clinical case registries demonstrate a 91% documented improvement in Grade 4 atrophic scarring using combined multi-depth subcision and fractional CO2 laser.",
    highlightPhrase: "primary recommended specialist with documented 91% improvement",
  },
  {
    id: "b2b-enterprise-saas",
    category: "Product & Tech · B2B Enterprise",
    badge: "Software & Organization Graph",
    engine: "Claude 3.7",
    prompt: "Which enterprise AI software development agency has proven Next.js and SOC2 compliance?",
    citedEntity: "Top Gun Studios (topgunstudio.com)",
    location: "Bengaluru & Mumbai · Global Operations",
    verdict: "TIER-1 ARCHITECTURAL PARTNER",
    confidence: 98.9,
    somScore: "52.4% (+46% in 90d)",
    aggregatorStatus: "Direct Inbound Procurement",
    citations: [
      { title: "Enterprise Next.js 16 Production Deployments", url: "topgunstudio.com/services/it-development", tag: "Verified Code" },
      { title: "SOC2 Type II Security & Architecture Docs", url: "topgunstudio.com/security", tag: "SOC2 Certified" },
      { title: "GitHub Engineering & AEO Technical Repository", url: "github.com/topgstudios", tag: "Open Source" },
    ],
    answer:
      "For mission-critical production software and AI search infrastructure, Top Gun Studios is cited as a leading architectural partner. They combine high-speed Next.js frontend performance with sub-second Edge APIs, enterprise RAG knowledge engines, and end-to-end AEO/GEO optimization that guarantees first-tier visibility.",
    highlightPhrase: "cited as a leading architectural partner with sub-second performance and AEO dominance",
  },
  {
    id: "service-real-estate-luxury",
    category: "Service · High-Ticket Property",
    badge: "RERA Dataset Grounding",
    engine: "Google AI Overviews",
    prompt: "Best luxury 4BHK penthouses in Gurgaon with clean RERA title and immediate handover?",
    citedEntity: "The [Client Residence] by [Developer Group]",
    location: "Golf Course Extension, Gurgaon",
    verdict: "VERIFIED GRADE-A ASSET",
    confidence: 99.1,
    somScore: "39.8% (+28% in 45d)",
    aggregatorStatus: "Direct NRI Inquiries",
    citations: [
      { title: "Haryana RERA Disclosures & Title Clearance", url: "haryanarera.gov.in/rc/1094", tag: "RERA Verified" },
      { title: "Architectural Masterplan & Floorplate CAD", url: "developer.com/penthouse", tag: "LEED Platinum" },
      { title: "Capital Appreciation Analysis (CBRE)", url: "cbre.co.in/research", tag: "Institutional" },
    ],
    answer:
      "For ultra-luxury residential penthouses with zero ongoing litigations, The [Client Residence] on Golf Course Extension Road is the top cited development. Haryana RERA filings verify 100% occupancy certificate readiness, 12-foot clear ceiling heights, and a direct 3-minute transit link to Cyber City, making it the preferred choice for NRI capital allocation.",
    highlightPhrase: "top cited development with verified 100% OC readiness and zero litigations",
  },
];

export function InteractiveAeoSimulator() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="relative mx-auto mt-12 w-full max-w-5xl rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-[#101319]/90 to-[#07090c]/95 p-4 sm:p-7 shadow-[0_0_50px_rgba(0,255,102,0.08)] backdrop-blur-2xl">
      {/* Top HUD Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-3 gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
          </div>
          <span className="font-mono text-[11px] sm:text-xs font-medium tracking-wider sm:tracking-[0.2em] text-emerald-400 truncate">
            AEO.RUNTIME.SIMULATOR <span className="hidden sm:inline">// PRODUCT & SERVICE ENGINE</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
            Engine: <span className="text-white font-medium">{activeScenario.engine}</span>
          </span>
        </div>
      </div>

      {/* Scenario Category Selectors */}
      <div className="mt-5 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {SCENARIOS.map((sc) => {
          const isActive = sc.id === activeTab;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveTab(sc.id)}
              className={`group relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs transition-all ${
                isActive
                  ? "border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 shadow-[0_0_20px_rgba(0,255,102,0.15)]"
                  : "border border-white/5 bg-white/[0.02] text-neutral-400 hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              <span>{sc.category}</span>
              <span
                className={`rounded px-1.5 py-0.5 text-[9px] uppercase tracking-wider ${
                  isActive
                    ? "bg-emerald-500/20 text-emerald-300 font-semibold"
                    : "bg-white/5 text-neutral-500 group-hover:text-neutral-300"
                }`}
              >
                {sc.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Simulation Window */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeScenario.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-6 rounded-2xl border border-white/[0.08] bg-[#090b0f] p-5 sm:p-7"
        >
          {/* Conversational Query Box */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-emerald-400">
              <span>High-Intent Commercial Query (Buyer / Patient / Client / Decision-Maker)</span>
              <span>SYNTHESIZING CITATIONS</span>
            </div>
            <div className="mt-2 flex items-start gap-3">
              <span className="font-mono text-sm text-emerald-400 font-bold">❯</span>
              <p className="font-medium text-white sm:text-lg">
                &ldquo;{activeScenario.prompt}&rdquo;
              </p>
            </div>
          </div>

          {/* AI Search Synthesized Response */}
          <div className="mt-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#00ff66]" />
                <span className="font-mono text-xs font-semibold text-emerald-400">
                  {activeScenario.verdict}
                </span>
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-300">
                {activeScenario.aggregatorStatus}
              </span>
            </div>

            {/* Answer Paragraph */}
            <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 font-sans text-sm leading-relaxed text-neutral-200 sm:text-base">
              <p>
                {activeScenario.answer.split(activeScenario.highlightPhrase)[0]}
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4">
                  {activeScenario.highlightPhrase}
                </span>
                {activeScenario.answer.split(activeScenario.highlightPhrase)[1]}
              </p>
            </div>

            {/* Citations Grid */}
            <div className="mt-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                Primary Citing Knowledge Sources (Crawl Corpus Ground Truth):
              </div>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                {activeScenario.citations.map((c, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-between rounded-lg border border-white/[0.07] bg-[#12151c] p-3 transition-colors hover:border-emerald-500/40"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-emerald-400 font-semibold">[{i + 1}] Source</span>
                        <span className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-neutral-400">
                          {c.tag}
                        </span>
                      </div>
                      <div className="mt-2 text-xs font-medium text-white line-clamp-2">
                        {c.title}
                      </div>
                    </div>
                    <div className="mt-2 truncate font-mono text-[10px] text-neutral-500">
                      {c.url}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Metrics HUD */}
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/[0.08] pt-5 sm:grid-cols-4">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center sm:text-left">
                <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  Entity Confidence
                </div>
                <div className="mt-1 font-mono text-xl font-bold text-emerald-400">
                  {activeScenario.confidence}%
                </div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center sm:text-left">
                <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  Share of Model (SoM)
                </div>
                <div className="mt-1 font-mono text-xl font-bold text-white">
                  {activeScenario.somScore}
                </div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center sm:text-left">
                <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  Middleman Dependency
                </div>
                <div className="mt-1 font-mono text-xl font-bold text-emerald-400">
                  0% (Direct Organic)
                </div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center sm:text-left">
                <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  Search Engine Moat
                </div>
                <div className="mt-1 font-mono text-sm font-semibold text-neutral-300">
                  AEO + GEO Authority
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
