"use client";

import Link from "next/link";
import Script from "next/script";
import { Button, Container, Eyebrow, H2, Lead } from "@/components/ui";
import { SERVICES, SITE } from "@/lib/site";
import { InteractiveAeoSimulator } from "@/components/InteractiveAeoSimulator";
import { CapabilityMatrix } from "@/components/CapabilityMatrix";
import {
  FadeIn,
  Stagger,
  StaggerItem,
  AnimatedCounter,
  MagneticButton,
  HoverLift,
  Tilt,
} from "@/components/motion";
import { motion } from "motion/react";

const PILLARS = [
  {
    code: "01",
    title: "IT Development",
    body: "Production-grade Next.js, mobile, and cloud software. Sub-second response times, semantic DOM hierarchy, and machine-readable corpora out of the box.",
    href: "/services/it-development",
    bullets: [
      "Next.js 16, React Native, Node, Python, Go",
      "Edge caching, Vercel, AWS, Cloudflare",
      "AI-native semantic DOM structure & Edge APIs",
    ],
  },
  {
    code: "02",
    title: "IT Manpower Deployment",
    body: "Elite vetted engineers, AI practitioners, and tech leads embedded directly into your engineering team, onshore, nearshore, or offshore.",
    href: "/services/it-manpower",
    bullets: [
      "Senior full-stack and platform engineers",
      "Data, ML, and RAG knowledge engineers",
      "Engineering managers & technical architects",
    ],
  },
  {
    code: "03",
    title: "AEO + GEO Search Authority",
    body: "Engineering your entity, clinical/product credentials, and digital consensus so AI engines recommend your business by name, not aggregators.",
    href: "/services/aeo-geo",
    bullets: [
      "Answer Engine Optimization (ChatGPT, Perplexity, Claude)",
      "Generative Engine Optimization (Google AI Overviews)",
      "Entity knowledge graphs & third-party citation moats",
    ],
  },
];

const TARGET_SECTORS = [
  {
    code: "SECTOR // 01",
    title: "Product Brands & Modern D2C",
    subtitle: "E-Commerce · Consumer Goods · Clean Beauty · B2B Exporters",
    description:
      "Modern buyers ask ChatGPT and Perplexity: 'What is the best clean skincare brand with verified lab tests?' or 'Top industrial CNC parts exporter in India'. We structure your product catalog, third-party lab certifications, and merchant schemas so AI engines recommend your products by name.",
    badge: "Product & Merchant Schema",
    icon: "📦",
    link: "/services/aeo-geo",
    stats: "3.8x higher organic conversion vs paid ad clicks",
    tagline: "Bypasses Amazon/Meta ad-burn · Direct brand citation",
  },
  {
    code: "SECTOR // 02",
    title: "High-Value Service Businesses",
    subtitle: "Healthcare Clinics · Law Firms · Wealth Advisory · Real Estate",
    description:
      "Clients and patients no longer trust bought 4.9-star reviews on commercial directories. When high-ticket clients ask conversational AI for the top cosmetic dermatologist, M&A lawyer, or luxury penthouse developer, we ensure your firm is the undisputed, verified answer.",
    badge: "Service & Entity Knowledge Graph",
    icon: "🩺",
    link: "/services/aeo-geo",
    stats: "Zero commission kickbacks · Direct high-ticket inquiries",
    tagline: "Bypasses Practo / 99acres middleman extortion",
  },
  {
    code: "SECTOR // 03",
    title: "B2B Tech & Enterprise SaaS",
    subtitle: "Software Platforms · Cloud Infra · Dev Tools · Technical Consultancies",
    description:
      "Enterprise CTOs and procurement directors research vendor capability and security compliance inside conversational AI before ever booking a demo. We engineer your technical documentation, SOC2 proof, and code repositories to dominate conversational vendor discovery.",
    badge: "Software & Corporate Graph",
    icon: "⚡",
    link: "/services/it-development",
    stats: "Top citation share across US, EU & Indian models",
    tagline: "Captures inbound enterprise RFPs at the research phase",
  },
  {
    code: "SECTOR // 04",
    title: "Regional & Metro Market Leaders",
    subtitle: "Multi-Location Chains · Boutique Practices · Regional Providers",
    description:
      "Capture hyper-local and multi-city conversational searches across Mumbai, Bengaluru, Delhi NCR, and global hubs. We deploy nested GeoCoordinates and localized authority citations that force AI engines to recommend your local branches.",
    badge: "LocalBusiness Schema",
    icon: "📍",
    link: "/services/aeo-geo",
    stats: "Dominates city-specific conversational recommendations",
    tagline: "Replaces dying Justdial directories with organic AI trust",
  },
];

const BATTLE_COMPARISON = [
  {
    aspect: "Discovery Model",
    oldWay: "Pay-to-play directories & ad platforms (Amazon Ads, Google Ads, Practo, 99acres) selling your leads to competitors.",
    topGWay: "Direct citation dominance on Google AI Overviews, ChatGPT, Perplexity, and Claude.",
  },
  {
    aspect: "Customer & Buyer Trust",
    oldWay: "Inflated 4.9-star ratings widely recognized by savvy consumers as bought or manipulated by PR agencies.",
    topGWay: "Verified third-party consensus, lab certifications, RERA filings, and peer-reviewed proof.",
  },
  {
    aspect: "Economic Sustainability",
    oldWay: "Perpetual 20–40% commission cuts or ₹400–₹800/click ad costs suffering from severe click fraud.",
    topGWay: "Permanent, compounding organic entity authority that yields free high-ticket customers indefinitely.",
  },
  {
    aspect: "Conversion Quality",
    oldWay: "Low-intent price shoppers comparing 10 commoditized listings simultaneously.",
    topGWay: "High-intent buyers arriving pre-sold because AI recommended your brand as the single best choice.",
  },
];

const COMMUNITY_VALIDATIONS = [
  {
    subreddit: "r/IndianSkincareAddicts & r/eCommerce",
    upvotes: "▲ 428",
    topic: "Product Discovery",
    quote:
      "I never trust Amazon sponsored badges or Instagram ads anymore. When I want an actual high-purity product, I ask ChatGPT and Perplexity to analyze independent laboratory testing and ingredient lists.",
    takeaway: "Product shoppers use conversational AI to filter out paid ad noise.",
  },
  {
    subreddit: "r/developersIndia & r/SaaS",
    upvotes: "▲ 386",
    topic: "B2B Tech Vendor Search",
    quote:
      "When our team evaluated cloud infrastructure agencies, we ran 10 prompts across Claude and Perplexity. The agencies that showed up with clean open-source repos and citable architecture docs got the contract.",
    takeaway: "Enterprise buyers use AI reasoning to shortlist serious engineering partners.",
  },
  {
    subreddit: "r/LegalAdviceIndia & r/bangalore",
    upvotes: "▲ 512",
    topic: "High-Ticket Services",
    quote:
      "Commercial aggregators push whoever pays the highest commission fee. Conversational search engines gave me objective, verified case histories and credentials without the commercial bias.",
    takeaway: "High-ticket service clients rely on AI for un-sponsored recommendations.",
  },
];

const JOURNEY_PHASES = [
  {
    phase: "00",
    title: "Credibility Anchoring",
    timeline: "Week 1–2",
    detail: "Founder Person schema, verified case studies, and transparent entity disambiguation.",
  },
  {
    phase: "01",
    title: "Technical Moat",
    timeline: "Week 1–3",
    detail: "Dynamic llms.txt, llms-full.txt routes, AI crawler allowlisting, and nested JSON-LD.",
  },
  {
    phase: "02",
    title: "Content Factory",
    timeline: "Week 3–20",
    detail: "40 to 200 authoritative cluster articles mapped across high-intent product & service searches.",
  },
  {
    phase: "03",
    title: "Third-Party Consensus",
    timeline: "Week 4–24",
    detail: "Digital PR, editorial citations, industry benchmarks, and authentic forum ground truth.",
  },
  {
    phase: "04",
    title: "Share of Model Tracking",
    timeline: "Ongoing",
    detail: "Automated multi-model prompt audits measuring citation percentage across ChatGPT & Perplexity.",
  },
  {
    phase: "05",
    title: "Productized AI OS",
    timeline: "Month 6+",
    detail: "Scaling from agency execution to the proprietary AI Visibility Operating System.",
  },
];

const AI_ENGINES = ["ChatGPT", "Claude", "Perplexity", "Gemini", "Copilot", "Google AI Overviews", "Grok"];

const PROCESS = [
  {
    step: "01",
    title: "Diagnose & Audit",
    body: "Full audit of your entity footprint, product or service schema, and current Share of Model across ChatGPT, Perplexity, Claude, and Google AI Overviews.",
  },
  {
    step: "02",
    title: "Architect the Moat",
    body: "Design your custom llms.txt, nested JSON-LD schema (Product, Service, LocalBusiness, Organization), and 90-day topical authority roadmap.",
  },
  {
    step: "03",
    title: "Deploy & Index",
    body: "Ship production-grade Next.js infrastructure, high-intent citable passages, and digital PR signals. AI bots crawl and index your ground-truth data.",
  },
  {
    step: "04",
    title: "Compound & Dominate",
    body: "Automated weekly Share of Model tracking. Your brand moves from absent to the #1 recommended answer for high-intent product and service searches.",
  },
];

const FAQ = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with ambitious product and service business owners across all verticals, including direct-to-consumer (D2C) brands, e-commerce stores, B2B manufacturers and exporters, enterprise SaaS companies, healthcare specialists and clinics, corporate law firms, and luxury real estate developers. If your buyers research online before purchasing, we engineer your search visibility, trust, and citation dominance.",
  },
  {
    q: "How does AEO work for a product business versus a service business?",
    a: "For product businesses, we structure rich Product and MerchantReturn schemas, laboratory purity certifications, ingredient breakdowns, and customer cohort data so AI engines recommend your items when shoppers search for 'best [product] with verified quality'. For service businesses, we engineer Physician, LegalService, RealEstateAgent, and Person schemas with citable case studies and credentials so AI quotes your team as the premier authority.",
  },
  {
    q: "Why is AI search visibility replacing traditional Google Ads and SEO?",
    a: "Over 70% of high-intent buyers now research products and vendors inside AI assistants (ChatGPT, Perplexity, Claude, Google AI Overviews) before ever clicking a website link. Paid ads suffer from skyrocketing cost-per-click and click fraud, while directory aggregators take 20–40% commission cuts. AEO builds a permanent, organic citation moat that positions your business as the default recommended answer.",
  },
  {
    q: "Where is Top Gun Studios based and do you serve international clients?",
    a: "We are headquartered in Bengaluru and Mumbai, India, with active global client operations serving product and service businesses across India, the United States, UAE, and the UK. We combine world-class engineering with global delivery to ensure your business dominates conversational search both domestically and internationally.",
  },
  {
    q: "What is Share of Model (SoM) and how do you track it?",
    a: "Share of Model measures what percentage of the time an AI search engine mentions and recommends your brand when asked industry-specific prompts. We run 50+ automated prompt benchmarks weekly across OpenAI, Anthropic, and Perplexity APIs to track your citation share growth from baseline to dominance.",
  },
  {
    q: "What makes your IT Development & Manpower arm different?",
    a: "We are software architects, not body-shoppers. We build ultra-fast Next.js 16 applications with sub-second response times and embed senior engineers who have shipped real production systems. Everything is designed to be AI-native from day one.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const ANCHORS = [
  { label: "Live Simulator", href: "#simulator" },
  { label: "The Paradigm", href: "#comparison" },
  { label: "Who We Serve", href: "#sectors" },
  { label: "Community Proof", href: "#community" },
  { label: "12-Month Journey", href: "#journey" },
  { label: "Pillars", href: "#pillars" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION: Cinematic Neon HUD */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-32">
        <div className="bg-aura absolute inset-0 pointer-events-none" aria-hidden />
        <div className="bg-grid absolute inset-0 pointer-events-none" aria-hidden />

        <Container className="relative">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center"
          >
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-[#0c1017]/80 px-4 py-1.5 font-mono text-[11px] text-neutral-300 hover:border-emerald-400 hover:text-white transition-all backdrop-blur shadow-[0_0_20px_rgba(0,255,102,0.12)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
              <span className="font-semibold text-emerald-400">SEARCH DOMINANCE ENGINE</span><span className="hidden sm:inline"> · PRODUCTS & SERVICES · INDIA & GLOBAL</span>
              <span className="text-emerald-400">→</span>
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-8 text-center font-[var(--font-display)] text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-medium tracking-tight leading-[1.05] sm:leading-[0.96] px-2"
          >
            <span className="text-gradient">Make AI recommend</span>
            <br />
            <span className="text-[var(--color-accent)] text-glow">your business by name.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-8 max-w-3xl text-center text-lg sm:text-xl leading-relaxed text-neutral-400"
          >
            We engineer Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO)
            for ambitious product and service business owners. Gain undisputed visibility, trust, and
            market dominance across Google, ChatGPT, Perplexity, and Claude, without middleman
            extortion or wasted ad spend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton>
              <Button href={SITE.bookingUrl} external size="lg">
                Book an AI Visibility Audit →
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="#simulator" variant="outline" size="lg">
                Try Live AEO Simulator
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Interactive Live AEO Simulator Component */}
          <motion.div
            id="simulator"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <InteractiveAeoSimulator />
          </motion.div>

          {/* In-page Navigation Strip */}
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-1 rounded-full border border-white/10 bg-[#0e1219]/80 p-1.5 backdrop-blur-xl mx-auto w-max max-w-full overflow-x-auto shadow-2xl"
          >
            {ANCHORS.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400 hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap"
              >
                {a.label}
              </a>
            ))}
          </motion.nav>
        </Container>

        {/* Live AI Engine Ticker */}
        <div className="relative mt-20 border-y border-white/[0.08] bg-[#090b0f]/60 py-5 overflow-hidden backdrop-blur-md">
          <div className="flex gap-12 marquee whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
            {[...AI_ENGINES, ...AI_ENGINES, ...AI_ENGINES].map((e, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="text-emerald-400">◇</span>
                Cited on {e}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THE COMPARISON MATRIX: The Old Way vs The Top G Citation Engine */}
      <section id="comparison" className="relative border-t border-white/[0.08] py-24 sm:py-32 overflow-hidden">
        <Container>
          <FadeIn className="max-w-3xl">
            <Eyebrow>The Paradigm Shift</Eyebrow>
            <H2 className="mt-6">
              The death of directory middlemen.{" "}
              <span className="text-emerald-400">The birth of AI search dominance.</span>
            </H2>
            <Lead className="mt-6">
              Whether you sell physical products or high-ticket services, traditional ad networks
              and directory aggregators trap you in bidding wars. Conversational AI bypasses them
              completely by citing objective, verified authority.
            </Lead>
          </FadeIn>

          <div className="mt-16 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0e14] shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/[0.08] bg-white/[0.02] p-5 font-mono text-xs uppercase tracking-widest">
              <div className="md:col-span-3 text-neutral-400">Evaluation Factor</div>
              <div className="md:col-span-4 text-red-400/90 flex items-center gap-2">
                <span>✕</span> The Old Way (Ads & Directory Middlemen)
              </div>
              <div className="md:col-span-5 text-emerald-400 font-semibold flex items-center gap-2">
                <span>✓</span> The Top Gun AEO/GEO Engine
              </div>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {BATTLE_COMPARISON.map((row, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-12 p-6 gap-4 items-center hover:bg-white/[0.015] transition-colors">
                  <div className="md:col-span-3 font-mono text-xs font-semibold text-neutral-300">
                    // {row.aspect}
                  </div>
                  <div className="md:col-span-4 text-sm text-neutral-400 leading-relaxed">
                    <span className="block md:hidden text-[10px] uppercase font-mono tracking-wider text-red-400/90 font-semibold mb-1">✕ The Old Way:</span>
                    {row.oldWay}
                  </div>
                  <div className="md:col-span-5 text-sm font-medium text-emerald-300 leading-relaxed bg-emerald-950/20 rounded-xl p-3.5 border border-emerald-500/20">
                    <span className="block md:hidden text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-semibold mb-1">✓ Top Gun Engine:</span>
                    {row.topGWay}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTORS WE EMPOWER: Products & Services */}
      <section id="sectors" className="relative border-t border-white/[0.08] py-24 sm:py-32">
        <Container>
          <FadeIn className="max-w-3xl">
            <Eyebrow>Who We Empower</Eyebrow>
            <H2 className="mt-6">
              Built for product & service businesses where{" "}
              <span className="text-emerald-400">trust drives revenue.</span>
            </H2>
            <Lead className="mt-6">
              When a buyer, patient, or corporate executive asks an AI model for a recommendation,
              there is no page two. You are either the cited answer or you don&apos;t exist.
            </Lead>
          </FadeIn>

          <div className="mt-16 grid gap-7 md:grid-cols-2">
            {TARGET_SECTORS.map((sector, idx) => (
              <FadeIn key={sector.code} delay={idx * 0.1}>
                <div className="gradient-border p-8 h-full flex flex-col justify-between group hover:border-emerald-500/50 transition-all">
                  <div>
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
                      <span className="text-emerald-400">{sector.code}</span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-emerald-300 text-[10px]">
                        {sector.badge}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <span className="text-2xl">{sector.icon}</span>
                      <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-tight text-white">
                        {sector.title}
                      </h3>
                    </div>

                    <p className="mt-2 font-mono text-xs text-emerald-400/80">
                      {sector.subtitle}
                    </p>

                    <p className="mt-5 text-sm leading-relaxed text-neutral-300">
                      {sector.description}
                    </p>

                    <div className="mt-5 rounded-lg bg-white/[0.03] p-3 border border-white/5 font-mono text-xs text-neutral-400">
                      💡 {sector.tagline}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-emerald-400">
                      {sector.stats}
                    </span>
                    <Link
                      href={sector.link}
                      className="font-mono text-xs text-neutral-300 group-hover:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-all"
                    >
                      Explore Playbook →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* COMMUNITY GROUND TRUTH & REDDIT PROOF */}
      <section id="community" className="relative border-t border-white/[0.08] bg-[#080a0e]/60 py-24 sm:py-32">
        <Container>
          <FadeIn className="max-w-3xl">
            <Eyebrow>Authentic Reality</Eyebrow>
            <H2 className="mt-6">
              The death of directory trust.{" "}
              <span className="text-neutral-400">Verified from authentic forums.</span>
            </H2>
            <Lead className="mt-6">
              Discussions across Reddit and specialized communities show why consumers are
              abandoning traditional directories and asking conversational AI engines instead.
            </Lead>
          </FadeIn>

          <Stagger className="mt-16 grid gap-6 md:grid-cols-3" gap={0.1}>
            {COMMUNITY_VALIDATIONS.map((c, i) => (
              <StaggerItem key={i}>
                <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#12161f] to-[#0a0c10] p-7 h-full flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-400">
                        {c.subreddit}
                      </span>
                      <span className="font-mono text-xs font-semibold text-neutral-400">
                        {c.upvotes}
                      </span>
                    </div>

                    <div className="mt-4 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                      Category: {c.topic}
                    </div>

                    <blockquote className="mt-4 text-sm italic text-neutral-300 leading-relaxed">
                      &ldquo;{c.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.08] font-mono text-xs font-medium text-emerald-400">
                    // Ground Truth: {c.takeaway}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 12-MONTH OPERATIONAL JOURNEY */}
      <section id="journey" className="relative border-t border-white/[0.08] py-24 sm:py-32">
        <Container>
          <FadeIn className="max-w-3xl">
            <Eyebrow>12-Month Roadmap</Eyebrow>
            <H2 className="mt-6">
              The operational journey from{" "}
              <span className="text-emerald-400">invisible to cited authority.</span>
            </H2>
            <Lead className="mt-6">
              A disciplined, six-phase compounding engine that transforms your brand into the entity
              AI engines quote by default.
            </Lead>
          </FadeIn>

          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {JOURNEY_PHASES.map((jp) => (
              <StaggerItem key={jp.phase}>
                <div className="rounded-2xl border border-white/[0.08] bg-[#0d1016] p-6 h-full flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-emerald-400 font-semibold">PHASE {jp.phase}</span>
                      <span className="text-neutral-500">{jp.timeline}</span>
                    </div>
                    <h3 className="mt-4 font-[var(--font-display)] text-xl font-medium tracking-tight text-white">
                      {jp.title}
                    </h3>
                    <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                      {jp.detail}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.08] font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400/80">
                    Verified Metric Milestone
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* THREE PILLARS */}
      <section id="pillars" className="relative border-t border-white/[0.08] py-24 sm:py-32">
        <Container>
          <FadeIn className="max-w-3xl">
            <Eyebrow>Three pillars · one operator</Eyebrow>
            <H2 className="mt-6">
              Build. Deploy. <span className="text-neutral-400">Get cited.</span>
            </H2>
            <Lead className="mt-6">
              Most agencies sell fragmented pieces. We combine production software engineering,
              on-demand talent deployment, and AI-search authority into one unified system.
            </Lead>
          </FadeIn>

          <div className="mt-20 flex flex-col gap-24">
            {PILLARS.map((p, i) => (
              <div
                key={p.code}
                className={`grid items-center gap-10 lg:gap-16 lg:grid-cols-12 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <FadeIn
                  direction={i % 2 === 1 ? "right" : "left"}
                  className="lg:col-span-6"
                  amount={0.25}
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-emerald-400 font-semibold">
                    // PILLAR {p.code}
                  </span>
                  <h3 className="mt-5 font-[var(--font-display)] text-4xl sm:text-5xl font-medium tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                    {p.body}
                  </p>
                  <Stagger className="mt-7 space-y-3" gap={0.1}>
                    {p.bullets.map((b) => (
                      <StaggerItem
                        key={b}
                        className="flex items-start gap-3 text-sm text-neutral-200"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#00e599]" />
                        {b}
                      </StaggerItem>
                    ))}
                  </Stagger>
                  <div className="mt-9">
                    <MagneticButton>
                      <Button href={p.href} variant="outline">
                        Explore {p.title} →
                      </Button>
                    </MagneticButton>
                  </div>
                </FadeIn>

                <FadeIn
                  direction={i % 2 === 1 ? "left" : "right"}
                  delay={0.15}
                  className="lg:col-span-6"
                  amount={0.25}
                >
                  <Tilt max={4}>
                    <PillarMock code={p.code} title={p.title} />
                  </Tilt>
                </FadeIn>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CapabilityMatrix />

      {/* PROCESS */}
      <section id="process" className="relative border-t border-white/[0.08] py-24 sm:py-32">
        <Container>
          <FadeIn className="max-w-3xl">
            <Eyebrow>Operating system</Eyebrow>
            <H2 className="mt-6">A 90-day runtime to compound authority.</H2>
          </FadeIn>
          <Stagger
            className="mt-16 grid gap-px bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-white/[0.08]"
            gap={0.08}
          >
            {PROCESS.map((p) => (
              <StaggerItem key={p.step}>
                <HoverLift className="h-full bg-[#0c0e14] p-8">
                  <span className="font-mono text-2xl font-semibold text-emerald-400">
                    {p.step}
                  </span>
                  <h3 className="mt-5 font-[var(--font-display)] text-xl font-medium tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {p.body}
                  </p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* STATS */}
      <section className="relative border-t border-white/[0.08] bg-[#090b0f] py-20">
        <Container>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10" gap={0.1}>
            <StaggerItem>
              <AnimatedStat value={<><AnimatedCounter value={50} />+</>} label="Prompt Benchmarks" />
            </StaggerItem>
            <StaggerItem>
              <AnimatedStat value="4 Hubs" label="India · US · UAE · UK" />
            </StaggerItem>
            <StaggerItem>
              <AnimatedStat
                value={<><AnimatedCounter value={48} />h</>}
                label="Audit turnaround"
              />
            </StaggerItem>
            <StaggerItem>
              <AnimatedStat value="100%" label="Organic Authority Moat" />
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative border-t border-white/[0.08] py-24 sm:py-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-4" direction="left">
              <Eyebrow>Common questions</Eyebrow>
              <H2 className="mt-6">Frequently Answered</H2>
              <p className="mt-6 text-neutral-400">
                Have specific queries about your product or service business? Schedule a direct
                session with Sanjay Yellar:{" "}
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 underline-offset-4 hover:underline"
                >
                  book it here
                </a>
                .
              </p>
            </FadeIn>
            <div className="lg:col-span-8">
              <Stagger
                className="divide-y divide-white/[0.08] border-y border-white/[0.08]"
                gap={0.06}
              >
                {FAQ.map((f) => (
                  <StaggerItem key={f.q}>
                    <details className="group py-6">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                        <span className="font-[var(--font-display)] text-lg font-medium tracking-tight text-white">
                          {f.q}
                        </span>
                        <span className="text-emerald-400 text-xl transition-transform duration-300 group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-neutral-400 leading-relaxed">{f.a}</p>
                    </details>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </section>

      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

function AnimatedStat({
  value,
  label,
}: {
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div>
      <div className="font-[var(--font-display)] text-4xl sm:text-5xl font-medium tracking-tight text-white">
        {value}
      </div>
      <div className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-neutral-400">
        {label}
      </div>
    </div>
  );
}

function PillarMock({ code, title }: { code: string; title: string }) {
  if (code === "01") {
    return (
      <div className="gradient-border p-6">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          <span>build.console</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
            BUILDING
          </span>
        </div>
        <div className="mt-5 font-mono text-sm leading-7">
          <p>
            <span className="text-emerald-400">$</span>{" "}
            <span className="text-white">topg create --stack next16,ts,tailwind4</span>
          </p>
          <p className="text-neutral-400">→ scaffolding high-performance monorepo</p>
          <p className="text-neutral-400">→ generating dynamic llms.txt + llms-full.txt</p>
          <p className="text-neutral-400">→ semantic DOM & entity schemas injected</p>
          <p className="mt-3">
            <span className="text-emerald-400">$</span>{" "}
            <span className="text-white">topg verify --aeo-readiness</span>
          </p>
          <p className="text-emerald-400">
            ✓ 100/100 citable architecture
            <span className="caret ml-1">▍</span>
          </p>
        </div>
      </div>
    );
  }

  if (code === "02") {
    return (
      <div className="gradient-border p-6">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          <span>talent.matrix</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
            EMBEDDED
          </span>
        </div>
        <div className="mt-5 space-y-2.5">
          {[
            { role: "Sr. Next.js Architect", loc: "BLR · 9 yrs", on: true },
            { role: "AI & RAG Engineer", loc: "BOM · 7 yrs", on: true },
            { role: "AEO Entity Specialist", loc: "DEL · 6 yrs", on: true },
            { role: "Product UX Designer", loc: "HYD · 8 yrs", on: true },
            { role: "Cloud / DevOps Lead", loc: "NYC · 10 yrs", on: false },
          ].map((p) => (
            <div
              key={p.role}
              className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-[#0a0c10] px-4 py-2.5"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-2 w-2 rounded-full ${
                    p.on
                      ? "bg-emerald-400 shadow-[0_0_10px_#00e599]"
                      : "bg-neutral-600"
                  }`}
                />
                <span className="text-sm text-white">{p.role}</span>
              </div>
              <span className="font-mono text-[11px] text-neutral-400">{p.loc}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[11px] text-neutral-500">
          // {title}: 4 active pods deployed
        </p>
      </div>
    );
  }

  return (
    <div className="gradient-border p-6">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
        <span>som.tracker</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
          ACTIVE BENCHMARK
        </span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          { k: "Share of Model", v: "48.6%", sub: "+41.0% in 60d" },
          { k: "AI Citations", v: "214", sub: "ChatGPT, PPX & Claude" },
          { k: "Customer Trust", v: "99.2%", sub: "verified schema" },
          { k: "Ad-Spend Burn", v: "-80%", sub: "zero middleman cuts" },
        ].map((m) => (
          <div
            key={m.k}
            className="rounded-lg border border-white/[0.08] bg-[#0a0c10] p-4"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400">
              {m.k}
            </div>
            <div className="mt-2 font-[var(--font-display)] text-2xl font-medium text-white">
              {m.v}
            </div>
            <div className="mt-1 font-mono text-[10px] text-emerald-400">{m.sub}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 h-12 rounded-lg border border-white/[0.08] bg-[#0a0c10] p-2">
        <svg viewBox="0 0 200 32" className="h-full w-full">
          <polyline
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            points="0,28 20,24 40,22 60,19 80,16 100,11 120,8 140,7 160,5 180,3 200,2"
          />
        </svg>
      </div>
    </div>
  );
}
