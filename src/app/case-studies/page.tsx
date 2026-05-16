import type { Metadata } from "next";
import { Button, Card, Container, Eyebrow, H2, Lead, Section } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Selected work from Top G Studios — IT development, embedded engineering and AI search visibility programs for modern enterprises.",
  alternates: { canonical: `${SITE.url}/case-studies` },
};

const CASES = [
  {
    client: "Aam Native",
    sector: "D2C · Agri-food",
    summary:
      "Programmatic SEO at 266 pages, AI crawler access, Knowledge Graph entry. From 0 to indexed authority in the mango category.",
    metrics: ["266 pages shipped", "AI engines unblocked", "Schema across 18 varieties"],
  },
  {
    client: "Sita's Signature",
    sector: "Beauty · Local services",
    summary:
      "Full local SEO refit for a Bangalore bridal makeup studio. Schema, content expansion, FAQ blocks, structured data for BeautySalon + Course.",
    metrics: ["2,500+ words", "BeautySalon schema", "Vite + Vercel"],
  },
  {
    client: "Confidential SaaS (Series B)",
    sector: "B2B SaaS",
    summary:
      "AEO program targeting ChatGPT, Claude, Perplexity. Cite-ready content, llms.txt, brand mention strategy across G2, Reddit, industry forums.",
    metrics: ["4 AI engines targeted", "llms.txt live", "Citation building"],
  },
  {
    client: "AuriLearn",
    sector: "EdTech · Creator",
    summary:
      "Cinematic launch video + brand system. AI video pipeline, vertical creative for paid social, full visual identity.",
    metrics: ["75s cinematic video", "11 AI-generated clips", "Vertical-first"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <div className="absolute inset-0 hud-grid opacity-50" aria-hidden />
        <Container className="relative">
          <Eyebrow>Selected work</Eyebrow>
          <h1 className="mt-6 font-[var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]">
            Engagements that{" "}
            <span className="text-[var(--color-accent)]">compounded</span>.
          </h1>
          <Lead className="mt-7">
            A look at recent work — engineering, AI search visibility, brand systems and growth
            programs. More on request under NDA.
          </Lead>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {CASES.map((c) => (
              <Card key={c.client} className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
                  {c.sector}
                </span>
                <h2 className="mt-5 font-[var(--font-display)] text-3xl font-medium tracking-tight">
                  {c.client}
                </h2>
                <p className="mt-4 text-[var(--color-fg-muted)] leading-relaxed">{c.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.metrics.map((m) => (
                    <li
                      key={m}
                      className="rounded-full border border-[var(--color-line)] bg-[var(--color-bg)] px-3 py-1.5 font-mono text-xs text-[var(--color-fg-muted)]"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <div className="rounded-3xl border border-[var(--color-line-strong)] bg-[var(--color-bg-card)] p-10 lg:p-14">
            <H2>Want your name on this list?</H2>
            <Lead className="mt-6">Start with a 30-minute discovery call.</Lead>
            <div className="mt-8">
              <Button href={SITE.bookingUrl} external size="lg">
                Book a discovery call
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
