import type { Metadata } from "next";
import { Button, Card, Container, Eyebrow, H2, Lead, Section, Stat } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.name} is an AI-native digital agency building software, deploying talent, and owning AI search visibility for modern enterprises.`,
  alternates: { canonical: `${SITE.url}/about` },
};

const VALUES = [
  {
    title: "Operators, not consultants.",
    body: "Every engagement is led by people who have shipped real products and run real P&Ls. We sit inside your team, not on a slide deck.",
  },
  {
    title: "AI-native by default.",
    body: "We build with LLMs in the loop — for our clients and for ourselves. Faster iterations, better content, smarter ops.",
  },
  {
    title: "Compound, don't churn.",
    body: "We optimize for engagements that get bigger over time because revenue did. No vanity metrics. No bloated retainers.",
  },
  {
    title: "Outcomes on the line.",
    body: "Every retainer ties to a measurable outcome — rankings, ROAS, qualified pipeline, AI citations, ships shipped.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <div className="absolute inset-0 hud-grid opacity-50" aria-hidden />
        <Container className="relative">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-6 font-[var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]">
            The growth engine for{" "}
            <span className="text-[var(--color-accent)]">AI-native enterprises</span>.
          </h1>
          <Lead className="mt-7">
            {SITE.name} was built on a simple thesis: software, talent and marketing have collapsed
            into a single function — and the buyers, channels and engines are all changing at once.
            One operator. One stack. Three arms. Built to compound.
          </Lead>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)] bg-[var(--color-bg-elev)]">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <Stat value="3" label="Service arms" />
            <Stat value="7+" label="Disciplines" />
            <Stat value="6" label="Active geographies" />
            <Stat value="100%" label="Senior operators" />
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Operating principles</Eyebrow>
            <H2 className="mt-6">How we work.</H2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {VALUES.map((v) => (
              <Card key={v.title}>
                <h3 className="font-[var(--font-display)] text-xl font-medium tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 text-[var(--color-fg-muted)] leading-relaxed">{v.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <div className="rounded-3xl border border-[var(--color-line-strong)] bg-[var(--color-bg-card)] p-10 lg:p-14">
            <H2>Want the engine on your side?</H2>
            <Lead className="mt-6">Start with a 30-minute discovery call. We do the rest.</Lead>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={SITE.bookingUrl} external size="lg">
                Book a discovery call
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Send a brief
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
