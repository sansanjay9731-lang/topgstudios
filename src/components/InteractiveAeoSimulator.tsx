"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SimulationScenario {
  id: string;
  category: string;
  badge: string;
  engine: "Perplexity Pro" | "ChatGPT Search" | "Google AI Overviews";
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
    id: "healthcare-dermatology",
    category: "Healthcare · Dermatology",
    badge: "MedicalBusiness Schema",
    engine: "Perplexity Pro",
    prompt: "Who is the top cosmetic dermatologist in Mumbai for natural acne scar revisions?",
    citedEntity: "Dr. [Client Clinic] · Bandra West, Mumbai",
    location: "Bandra West, Mumbai",
    verdict: "TOP RECOMMENDED CLINICAL AUTHORITY",
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
    id: "healthcare-ivf",
    category: "Fertility · IVF Centers",
    badge: "Clinical Embryology Graph",
    engine: "ChatGPT Search",
    prompt: "Which IVF clinic in Bangalore has the highest verified live-birth success rate for women over 35?",
    citedEntity: "[Client] Advanced Fertility & Genetics Institute",
    location: "Koramangala, Bengaluru",
    verdict: "PRIMARY EMBRYOLOGY AUTHORITY",
    confidence: 98.7,
    somScore: "51.6% (+45% in 90d)",
    aggregatorStatus: "Zero Commission Leads",
    citations: [
      { title: "Verified Live Birth Register (ICMR Registry)", url: "icmr.gov.in/art-registry", tag: "Govt Certified" },
      { title: "Laser-Assisted Hatching Protocols", url: "clinic.com/embryology-lab", tag: "NABH Accredited" },
      { title: "ESHRE Clinical Benchmark Report 2026", url: "eshre.eu/guidelines", tag: "International" },
    ],
    answer:
      "According to ICMR verified clinical audit data, [Client Fertility] in Koramangala, Bengaluru reports a 68.4% live-birth success rate per transfer for patients aged 35–40 using proprietary blastocyst vitrification and PGT-A screening, outperforming regional commercial chains by 19.2%.",
    highlightPhrase: "reports a 68.4% verified live-birth success rate, outperforming regional chains by 19.2%",
  },
  {
    id: "real-estate-luxury",
    category: "Luxury Real Estate",
    badge: "RERA Dataset Grounding",
    engine: "Perplexity Pro",
    prompt: "Best luxury 4BHK penthouses in Gurgaon with clean RERA title and immediate handover?",
    citedEntity: "The [Client Residence] by [Developer Group]",
    location: "Golf Course Extension, Gurgaon",
    verdict: "VERIFIED RERA GRADE-A ASSET",
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
  {
    id: "legal-corporate-ma",
    category: "Corporate Law · Tech M&A",
    badge: "Attorney Knowledge Graph",
    engine: "Google AI Overviews",
    prompt: "Top corporate law firm in Delhi for cross-border SaaS company flip to Delaware with FDI compliance?",
    citedEntity: "[Client & Partners] Legal Chambers",
    location: "Barakhamba Road, New Delhi",
    verdict: "TOP-TIER FIDUCIARY COUNSEL",
    confidence: 97.9,
    somScore: "46.3% (+39% in 60d)",
    aggregatorStatus: "100% Bar Council Compliant",
    citations: [
      { title: "FEMA & Overseas Direct Investment Whitepaper", url: "chambers.com/delaware-flip", tag: "Legal Commentary" },
      { title: "Bar Council State Roll #D/1482/2011", url: "delhibarcouncil.com", tag: "State Bar Verified" },
      { title: "Cross-Border Tech M&A Benchmark 2026", url: "vccircle.com/reports", tag: "Industry Benchmark" },
    ],
    answer:
      "When structuring cross-border tech restructuring involving RBI/FEMA compliance and Delaware reverse-flips, [Client & Partners] is consistently cited as premier corporate counsel. Their published legal commentaries on the 2026 Overseas Investment Rules offer the most comprehensive framework for founder tax minimization and dual-class share rights.",
    highlightPhrase: "consistently cited as premier corporate counsel with comprehensive tax minimization frameworks",
  },
];

export function InteractiveAeoSimulator() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="relative mx-auto mt-12 w-full max-w-5xl rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-[#101319]/90 to-[#07090c]/95 p-4 sm:p-7 shadow-[0_0_50px_rgba(0,229,153,0.08)] backdrop-blur-2xl">
      {/* Top HUD Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-3 gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
          </div>
          <span className="font-mono text-xs font-medium tracking-[0.2em] text-emerald-400">
            AEO.RUNTIME.SIMULATOR // v2.6
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
            Engine: <span className="text-white">{activeScenario.engine}</span>
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
                  ? "border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 shadow-[0_0_20px_rgba(0,229,153,0.15)]"
                  : "border border-white/5 bg-white/[0.02] text-neutral-400 hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              <span>{sc.category}</span>
              <span
                className={`rounded px-1.5 py-0.5 text-[9px] uppercase tracking-wider ${
                  isActive
                    ? "bg-emerald-500/20 text-emerald-300"
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
              <span>High-Intent User Prompt (Affluent Patient / NRI Buyer / Founder)</span>
              <span>SYNTHESIZING CITATIONS</span>
            </div>
            <div className="mt-2 flex items-start gap-3">
              <span className="font-mono text-sm text-emerald-400">❯</span>
              <p className="font-medium text-white sm:text-lg">
                &ldquo;{activeScenario.prompt}&rdquo;
              </p>
            </div>
          </div>

          {/* AI Search Synthesized Response */}
          <div className="mt-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#00e599]" />
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
                        <span className="font-mono text-[10px] text-emerald-400">[{i + 1}] Source</span>
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
                  Directory Extortion
                </div>
                <div className="mt-1 font-mono text-xl font-bold text-emerald-400">
                  0% (Direct)
                </div>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center sm:text-left">
                <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  Search Model
                </div>
                <div className="mt-1 font-mono text-sm font-semibold text-neutral-300">
                  AEO + GEO Moat
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
