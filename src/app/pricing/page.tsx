import type { Metadata } from "next";
import { Button, Container, Eyebrow, H2, Lead, Section } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — US Market",
  description:
    "Transparent USD pricing for IT development, embedded engineering and digital marketing programs at Top G Studios. Built for US-based teams.",
  alternates: { canonical: `${SITE.url}/pricing` },
};

const TIERS = [
  {
    name: "Sprint",
    price: "$7,500",
    cadence: "/ project",
    blurb: "For US founders and lean teams shipping their first version or first AI-search push.",
    features: [
      "Single discipline (build OR marketing OR AEO)",
      "2–4 week scope",
      "1 senior operator",
      "Weekly check-ins (US time zones)",
      "Async-first delivery",
    ],
    cta: "Scope a sprint",
  },
  {
    name: "Growth",
    price: "$15,000",
    cadence: "/ month",
    blurb: "For US scale-ups running multi-channel growth or live product engineering.",
    features: [
      "2–3 disciplines combined",
      "Embedded pod (3–4 people)",
      "Weekly strategy + standups",
      "Monthly reporting + planning",
      "Quarterly OKR resets",
    ],
    featured: true,
    cta: "Start Growth program",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    blurb: "For US enterprises running full-stack programs across product, talent and AI search.",
    features: [
      "All disciplines on call",
      "Embedded engineering teams (5–15+)",
      "Fractional CMO / Head of Engineering",
      "Dedicated PMO",
      "Full US time zone coverage",
      "Custom SLAs and MSAs",
    ],
    cta: "Talk to an operator",
  },
];

const ADDONS = [
  { name: "Free AI visibility audit", body: "Where you stand on ChatGPT, Claude, Perplexity, Gemini, AI Overviews." },
  { name: "Free SEO health score", body: "Technical, content, schema and Core Web Vitals snapshot." },
  { name: "Free engineering audit", body: "Stack review, architecture, scalability, AI integration readiness." },
];

export default function PricingPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <div className="absolute inset-0 hud-grid opacity-50" aria-hidden />
        <Container className="relative">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-6 font-[var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]">
            US pricing, built to <span className="text-[var(--color-accent)]">compound</span>.
          </h1>
          <Lead className="mt-7">
            All prices in USD. We serve US-based teams only. Start with a sprint or a free audit, then
            grow into a multi-discipline retainer when the ROI is obvious. Enterprise programs are
            quoted by scope.
          </Lead>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-3xl border p-8 flex flex-col ${
                  t.featured
                    ? "border-[var(--color-accent)] bg-[var(--color-bg-card)] shadow-[0_0_60px_-20px_var(--color-accent-glow)]"
                    : "border-[var(--color-line)] bg-[var(--color-bg-card)]"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[var(--color-accent)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                    Most popular
                  </span>
                )}
                <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-tight">
                  {t.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-[var(--font-display)] text-5xl font-medium tracking-tight">
                    {t.price}
                  </span>
                  <span className="font-mono text-xs text-[var(--color-fg-muted)]">{t.cadence}</span>
                </div>
                <p className="mt-4 text-sm text-[var(--color-fg-muted)] leading-relaxed">{t.blurb}</p>
                <ul className="mt-8 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-[var(--color-fg)]">
                      <span className="text-[var(--color-accent)]">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button
                    href={SITE.bookingUrl}
                    external
                    variant={t.featured ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    {t.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)] bg-[var(--color-bg-elev)]">
        <Container>
          <Eyebrow>Free for qualified teams</Eyebrow>
          <H2 className="mt-6">Try us with a free audit.</H2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ADDONS.map((a) => (
              <div
                key={a.name}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg-card)] p-7"
              >
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  // free
                </p>
                <h3 className="mt-4 font-[var(--font-display)] text-xl font-medium tracking-tight">
                  {a.name}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-fg-muted)] leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
