"use client";

import Link from "next/link";
import Script from "next/script";
import { Button, Container, Eyebrow, H2, Lead } from "@/components/ui";
import { SERVICES, SITE } from "@/lib/site";
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
    body: "Production-grade web, mobile and cloud systems. Ship MVPs in weeks, scale to enterprise.",
    href: "/services/it-development",
    bullets: [
      "Next.js, React Native, Node, Python, Go",
      "AWS, GCP, Vercel, Cloudflare",
      "MVP to enterprise platforms",
    ],
  },
  {
    code: "02",
    title: "IT Manpower Deployment",
    body: "Elite vetted engineers, designers and tech leads embedded in your team — onshore or offshore.",
    href: "/services/it-manpower",
    bullets: [
      "Senior full-stack and platform engineers",
      "Data, ML and AI engineers",
      "PMs, designers and engineering managers",
    ],
  },
  {
    code: "03",
    title: "Digital Marketing Consulting",
    body: "Enterprise strategy across AEO, GEO, SEO, paid and lifecycle. From audit to in-market execution.",
    href: "/services/digital-marketing",
    bullets: [
      "AEO + GEO for AI-engine visibility",
      "Technical and programmatic SEO",
      "Performance media + lifecycle CRM",
    ],
  },
];

const AI_ENGINES = ["ChatGPT", "Claude", "Perplexity", "Gemini", "Copilot", "AI Overviews", "Grok"];

const PROCESS = [
  {
    step: "01",
    title: "Diagnose",
    body: "Full audit of your stack, search visibility, AI citations, paid funnels and team capacity. Benchmarked against Google, ChatGPT, Claude, Perplexity, Gemini.",
  },
  {
    step: "02",
    title: "Architect",
    body: "A 90-day roadmap with the right mix of build, deploy-talent and run-marketing. No bloated retainer — we ship what moves revenue.",
  },
  {
    step: "03",
    title: "Deploy",
    body: "Our engineers and operators embed with your team. Code shipped, ads running, content indexed and AI-cited within the first sprint.",
  },
  {
    step: "04",
    title: "Compound",
    body: "Weekly reporting on ROAS, rankings, AI mentions and pipeline. Quarterly strategy resets so growth keeps stacking.",
  },
];

const FAQ = [
  {
    q: "What does Top G Studios actually do?",
    a: "We are a three-arm AI-native agency. We build software (IT development), embed engineers in your team (IT manpower deployment), and run enterprise-grade digital marketing across SEO, AEO, GEO, performance and lifecycle.",
  },
  {
    q: "What is AEO and GEO and why do they matter?",
    a: "AEO is Answer Engine Optimization — getting your brand cited inside answers from ChatGPT, Claude, Perplexity and Gemini. GEO is Generative Engine Optimization — winning visibility inside Google's AI Overviews and similar generative search experiences. Together, they are how modern buyers discover vendors. Traditional SEO is no longer enough.",
  },
  {
    q: "How is IT manpower deployment different from a typical staffing firm?",
    a: "We vet for senior engineers, designers and tech leads who have shipped real production systems. We don't bill bodies — we deploy operators who can lead initiatives. Engagements are typically 3 to 12 months, embedded inside your team and tooling.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. We have Sprint engagements starting at $7,500 for early-stage US teams, and Enterprise programs for US companies running multi-channel growth at scale.",
  },
  {
    q: "Where are you based and who do you work with?",
    a: "We serve US-based teams only. Active engagements across all US time zones. SaaS, e-commerce, healthcare, real estate, fintech and D2C are core verticals.",
  },
  {
    q: "How fast can you start?",
    a: "Discovery call within 48 hours of inquiry. For straightforward IT manpower or marketing engagements, kickoff in 7–10 days. Full build engagements scope in 2 weeks.",
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
  { label: "Pillars", href: "#pillars" },
  { label: "AI Search", href: "#ai-search" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — Neon-style centered with ambient blobs + grid */}
      <section className="relative overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="bg-aura absolute inset-0 pointer-events-none" aria-hidden />
        <div className="bg-grid absolute inset-0 pointer-events-none" aria-hidden />

        <Container className="relative">
          {/* SYSTEM badge — Neon-style status pill */}
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
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg-elev)]/80 px-3 py-1 font-mono text-[11px] text-[var(--color-fg-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-fg)] transition-colors backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] pulse-dot" />
              SYSTEM ONLINE · BOOK A 30-MIN CALL
              <span className="text-[var(--color-accent)]">→</span>
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-8 text-center font-[var(--font-display)] text-5xl sm:text-7xl lg:text-[88px] font-medium tracking-tight leading-[0.98]"
          >
            The AI-native
            <br />
            <span className="text-[var(--color-accent)] text-glow">growth engine.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-center text-lg sm:text-xl leading-relaxed text-[var(--color-fg-muted)]"
          >
            Ship enterprise software. Embed elite engineers. Get cited on ChatGPT, Claude,
            Perplexity, Gemini and Google. Three operating arms, one accountable team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton>
              <Button href={SITE.bookingUrl} external size="lg">
                Book a discovery call →
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="/pricing" variant="outline" size="lg">
                See pricing
              </Button>
            </MagneticButton>
          </motion.div>

          {/* CLI pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <div className="cli-pill">
              <span className="text-[var(--color-accent)]">$</span>
              <span className="text-[var(--color-fg-muted)]">npx</span>
              <span>topg deploy --enterprise</span>
              <span className="caret">▍</span>
            </div>
          </motion.div>

          {/* Anchor strip — Neon-style in-page nav */}
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-1 rounded-full border border-[var(--color-line)] bg-[var(--color-bg-elev)]/60 p-1.5 backdrop-blur-xl mx-auto w-max max-w-full overflow-x-auto"
          >
            {ANCHORS.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)] hover:bg-[var(--color-bg-card)] hover:text-[var(--color-fg)] transition-colors whitespace-nowrap"
              >
                {a.label}
              </a>
            ))}
          </motion.nav>
        </Container>

        {/* Trust marquee */}
        <div className="relative mt-20 border-y border-[var(--color-line)] bg-[var(--color-bg-elev)]/40 py-5 overflow-hidden">
          <div className="flex gap-12 marquee whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
            {[...AI_ENGINES, ...AI_ENGINES, ...AI_ENGINES].map((e, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="text-[var(--color-accent)]">◇</span>
                Cited on {e}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* THREE PILLARS — alternating feature rows, Neon-style */}
      <section id="pillars" className="relative py-24 sm:py-32">
        <Container>
          <FadeIn className="max-w-3xl">
            <Eyebrow>Three pillars · one operator</Eyebrow>
            <H2 className="mt-6">
              Build. Deploy. <span className="text-[var(--color-fg-muted)]">Get found.</span>
            </H2>
            <Lead className="mt-6">
              Most agencies sell one thing. We sell the entire growth motion — engineering, talent,
              and AI-search visibility under one roof, on one P&L, with one accountable team.
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
                  <span className="font-mono text-xs tracking-[0.2em] text-[var(--color-accent)]">
                    // PILLAR {p.code}
                  </span>
                  <h3 className="mt-5 font-[var(--font-display)] text-4xl sm:text-5xl font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-[var(--color-fg-muted)]">
                    {p.body}
                  </p>
                  <Stagger className="mt-7 space-y-3" gap={0.1}>
                    {p.bullets.map((b) => (
                      <StaggerItem
                        key={b}
                        className="flex items-start gap-3 text-sm text-[var(--color-fg)]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
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

                {/* Illustration — Neon-style mock console */}
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

      {/* AI VISIBILITY DEEP-DIVE */}
      <section
        id="ai-search"
        className="relative border-t border-[var(--color-line)] py-24 sm:py-32 overflow-hidden"
      >
        <div className="bg-aura-soft absolute inset-0 pointer-events-none" aria-hidden />
        <Container className="relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <FadeIn direction="left" className="lg:col-span-6">
              <Eyebrow>AEO + GEO</Eyebrow>
              <H2 className="mt-6">
                Your buyers are asking <span className="text-[var(--color-accent)]">ChatGPT</span>,
                not Google.
              </H2>
              <Lead className="mt-6">
                70% of B2B decision makers now research vendors inside AI assistants before they ever
                touch a search engine. If ChatGPT, Claude and Perplexity can&apos;t see you, you
                don&apos;t exist. We engineer your content, schema, citations and entity graph so AI
                engines quote your brand as the answer.
              </Lead>
              <div className="mt-9 flex flex-wrap gap-3">
                <MagneticButton>
                  <Button href="/services/aeo-geo" size="lg">
                    Inside AEO + GEO →
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button href="/contact" variant="outline" size="lg">
                    Free AI visibility audit
                  </Button>
                </MagneticButton>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15} className="lg:col-span-6">
              <Tilt max={5}>
                <div className="gradient-border p-7">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
                    <span>citation.surface</span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] pulse-dot" />
                      SCANNING
                    </span>
                  </div>
                  <Stagger className="mt-6 space-y-3.5" gap={0.07}>
                    {AI_ENGINES.map((engine) => (
                      <StaggerItem
                        key={engine}
                        direction="left"
                        className="flex items-center justify-between rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-elev)]/60 px-4 py-3"
                      >
                        <span className="flex items-center gap-3 text-sm text-[var(--color-fg)]">
                          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
                          {engine}
                        </span>
                        <span className="font-mono text-[11px] text-[var(--color-accent)]">
                          optimized
                        </span>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </Tilt>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* FULL SERVICES GRID */}
      <section id="services" className="relative border-t border-[var(--color-line)] py-24 sm:py-32">
        <Container>
          <FadeIn className="flex items-end justify-between flex-wrap gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Full capability map</Eyebrow>
              <H2 className="mt-6">Every discipline. One operator.</H2>
            </div>
            <Button href="/pricing" variant="outline">
              See pricing
            </Button>
          </FadeIn>
          <Stagger
            className="mt-16 grid gap-px bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-[var(--color-line)]"
            gap={0.06}
          >
            {SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block h-full bg-[var(--color-bg)] p-8 transition-all duration-300 hover:bg-[var(--color-bg-card)]"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-fg-dim)]">
                        /services/{s.slug}
                      </span>
                      <motion.span
                        className="text-[var(--color-fg-dim)] group-hover:text-[var(--color-accent)] transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        →
                      </motion.span>
                    </div>
                    <h3 className="mt-6 font-[var(--font-display)] text-xl font-medium tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--color-fg-muted)] leading-relaxed">
                      {s.short}
                    </p>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative border-t border-[var(--color-line)] py-24 sm:py-32">
        <Container>
          <FadeIn className="max-w-3xl">
            <Eyebrow>Operating system</Eyebrow>
            <H2 className="mt-6">A 90-day runtime to compound growth.</H2>
          </FadeIn>
          <Stagger
            className="mt-16 grid gap-px bg-[var(--color-line)] md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-[var(--color-line)]"
            gap={0.08}
          >
            {PROCESS.map((p) => (
              <StaggerItem key={p.step}>
                <HoverLift className="h-full bg-[var(--color-bg-card)] p-8">
                  <span className="font-mono text-2xl font-medium text-[var(--color-accent)]">
                    {p.step}
                  </span>
                  <h3 className="mt-5 font-[var(--font-display)] text-xl font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--color-fg-muted)] leading-relaxed">
                    {p.body}
                  </p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* STATS */}
      <section className="relative border-t border-[var(--color-line)] bg-[var(--color-bg-elev)] py-20">
        <Container>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10" gap={0.1}>
            <StaggerItem>
              <AnimatedStat value={<><AnimatedCounter value={7} />+</>} label="Service lines" />
            </StaggerItem>
            <StaggerItem>
              <AnimatedStat value="24/7" label="Global delivery" />
            </StaggerItem>
            <StaggerItem>
              <AnimatedStat
                value={<><AnimatedCounter value={48} />h</>}
                label="Discovery turnaround"
              />
            </StaggerItem>
            <StaggerItem>
              <AnimatedStat value="∞" label="Citations to compound" />
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative border-t border-[var(--color-line)] py-24 sm:py-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <FadeIn className="lg:col-span-4" direction="left">
              <Eyebrow>Common questions</Eyebrow>
              <H2 className="mt-6">FAQ</H2>
              <p className="mt-6 text-[var(--color-fg-muted)]">
                Still curious? Ask anything in a 30-min call —{" "}
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline-offset-4 hover:underline"
                >
                  book it here
                </a>
                .
              </p>
            </FadeIn>
            <div className="lg:col-span-8">
              <Stagger
                className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]"
                gap={0.06}
              >
                {FAQ.map((f) => (
                  <StaggerItem key={f.q}>
                    <details className="group py-6">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                        <span className="font-[var(--font-display)] text-lg font-medium tracking-tight">
                          {f.q}
                        </span>
                        <span className="text-[var(--color-accent)] text-xl transition-transform duration-300 group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-[var(--color-fg-muted)] leading-relaxed">{f.a}</p>
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
      <div className="font-[var(--font-display)] text-4xl sm:text-5xl font-medium tracking-tight text-[var(--color-fg)]">
        {value}
      </div>
      <div className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
        {label}
      </div>
    </div>
  );
}

function PillarMock({ code, title }: { code: string; title: string }) {
  if (code === "01") {
    return (
      <div className="gradient-border p-6">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
          <span>build.console</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] pulse-dot" />
            BUILDING
          </span>
        </div>
        <div className="mt-5 font-mono text-sm leading-7">
          <p>
            <span className="text-[var(--color-accent)]">$</span>{" "}
            <span className="text-[var(--color-fg)]">topg create --stack next,ts,tailwind</span>
          </p>
          <p className="text-[var(--color-fg-muted)]">→ scaffolding monorepo</p>
          <p className="text-[var(--color-fg-muted)]">→ provisioning vercel + supabase</p>
          <p className="text-[var(--color-fg-muted)]">→ CI/CD + observability wired</p>
          <p className="mt-3">
            <span className="text-[var(--color-accent)]">$</span>{" "}
            <span className="text-[var(--color-fg)]">topg ship --env production</span>
          </p>
          <p className="text-[var(--color-accent)]">
            ✓ deployed in 14d
            <span className="caret ml-1">▍</span>
          </p>
        </div>
      </div>
    );
  }

  if (code === "02") {
    return (
      <div className="gradient-border p-6">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
          <span>roster.live</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] pulse-dot" />
            EMBEDDED
          </span>
        </div>
        <div className="mt-5 space-y-2.5">
          {[
            { role: "Sr. Full-stack Eng", loc: "BLR · 8 yrs", on: true },
            { role: "AI Engineer (RAG)", loc: "DEL · 6 yrs", on: true },
            { role: "Product Designer", loc: "BOM · 7 yrs", on: true },
            { role: "Tech Lead", loc: "SG · 11 yrs", on: true },
            { role: "DevOps / SRE", loc: "GGN · 9 yrs", on: false },
          ].map((p) => (
            <div
              key={p.role}
              className="flex items-center justify-between rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-elev)]/60 px-4 py-2.5"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-2 w-2 rounded-full ${
                    p.on
                      ? "bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]"
                      : "bg-[var(--color-fg-dim)]"
                  }`}
                />
                <span className="text-sm text-[var(--color-fg)]">{p.role}</span>
              </div>
              <span className="font-mono text-[11px] text-[var(--color-fg-muted)]">{p.loc}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[11px] text-[var(--color-fg-dim)]">
          // {title} — 4 of 5 active
        </p>
      </div>
    );
  }

  return (
    <div className="gradient-border p-6">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
        <span>growth.metrics</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] pulse-dot" />
          LIVE
        </span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          { k: "AI mentions", v: "+412%", sub: "90d" },
          { k: "Organic clicks", v: "+186%", sub: "QoQ" },
          { k: "ROAS (paid)", v: "5.4x", sub: "blended" },
          { k: "Pipeline", v: "$5.1M", sub: "sourced" },
        ].map((m) => (
          <div
            key={m.k}
            className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-elev)]/60 p-4"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
              {m.k}
            </div>
            <div className="mt-2 font-[var(--font-display)] text-2xl font-medium text-[var(--color-fg)]">
              {m.v}
            </div>
            <div className="mt-1 font-mono text-[10px] text-[var(--color-accent)]">{m.sub}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 h-12 rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-elev)]/60 p-2">
        <svg viewBox="0 0 200 32" className="h-full w-full">
          <polyline
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            points="0,28 20,22 40,24 60,18 80,20 100,12 120,14 140,8 160,10 180,4 200,6"
          />
        </svg>
      </div>
    </div>
  );
}
