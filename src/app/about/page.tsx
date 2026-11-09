import type { Metadata } from "next";
import Script from "next/script";
import { Button, Card, Container, Eyebrow, H2, Lead, Section, Stat } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Top G Studios & Founder Sanjay Yellar",
  description:
    "Top G Studios is an AI-native search engineering and digital growth agency founded by Sanjay Yellar. We engineer AEO, GEO, and high-performance software for healthcare, luxury real estate, and enterprise brands.",
  alternates: { canonical: `${SITE.url}/about` },
};

const VALUES = [
  {
    title: "Truth as a Ranking Signal.",
    body: "AI models cannot be bought with spam backlinks or fake review farms. We engineer transparent, clinical and commercial ground truth that answer engines cite by default.",
  },
  {
    title: "Operators, not Slide-Deck Consultants.",
    body: "Every engagement is led by architects who write production code, deploy real talent, and benchmark Share of Model across OpenAI, Claude, and Perplexity APIs.",
  },
  {
    title: "Zero Aggregator Extortion.",
    body: "We free clinics, developers, and law firms from paying 20-40% cuts to directories like Practo, Justdial, and 99acres by making them direct AI destinations.",
  },
  {
    title: "Measurable Share of Model.",
    body: "We do not bill for vanity impressions. Every retainer is measured on Share of Model growth, verified citation frequency, and qualified high-ticket leads.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.founder.name,
  jobTitle: SITE.founder.title,
  worksFor: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  description: SITE.founder.bio,
  url: `${SITE.url}/about`,
  sameAs: [SITE.founder.linkedin, SITE.founder.twitter],
  knowsAbout: [
    "Answer Engine Optimization (AEO)",
    "Generative Engine Optimization (GEO)",
    "Artificial Intelligence in Healthcare",
    "Luxury Real Estate AI Search",
    "Entity SEO & Knowledge Graph Engineering",
    "Next.js Architecture",
    "Share of Model (SoM) Benchmarking",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24 sm:pt-32">
        <div className="absolute inset-0 hud-grid opacity-50" aria-hidden />
        <Container className="relative">
          <Eyebrow>About the Studio</Eyebrow>
          <h1 className="mt-6 font-[var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]">
            The AI-native authority engine for{" "}
            <span className="text-[var(--color-accent)]">high-ticket leaders</span>.
          </h1>
          <Lead className="mt-7">
            {SITE.name} was established on an indisputable market shift: traditional search engines
            and directory aggregators are losing to conversational AI assistants. We turn elite
            healthcare clinics, luxury real estate developers, and corporate law firms into the #1
            cited recommendation on ChatGPT, Perplexity, Claude, and Google AI Overviews.
          </Lead>
        </Container>
      </Section>

      {/* Founder Bio Section — Critical for E-E-A-T */}
      <Section className="border-t border-[var(--color-line)] bg-[var(--color-bg-elev)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <div className="gradient-border p-8 text-center sm:text-left">
                <div className="inline-block h-20 w-20 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-accent)]/30 flex items-center justify-center font-[var(--font-display)] text-3xl font-medium text-[var(--color-accent)] shadow-[0_0_20px_rgba(0,229,153,0.15)]">
                  SY
                </div>
                <h3 className="mt-6 font-[var(--font-display)] text-2xl font-medium text-[var(--color-fg)]">
                  {SITE.founder.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-[var(--color-accent)]">
                  {SITE.founder.title}
                </p>
                <p className="mt-4 text-sm text-[var(--color-fg-muted)] leading-relaxed">
                  Headquartered in Bengaluru & Mumbai. Leading the transition from traditional SEO
                  to Answer Engine Optimization and verified entity graphs for Indian and
                  international enterprises.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={SITE.founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg)] px-3 py-1 font-mono text-xs text-[var(--color-fg-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-fg)] transition-colors"
                  >
                    LinkedIn Profile ↗
                  </a>
                  <a
                    href={SITE.founder.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg)] px-3 py-1 font-mono text-xs text-[var(--color-fg-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-fg)] transition-colors"
                  >
                    X / Twitter ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Eyebrow>Leadership Vision</Eyebrow>
              <h2 className="mt-4 font-[var(--font-display)] text-3xl sm:text-4xl font-medium tracking-tight text-[var(--color-fg)]">
                &ldquo;If an AI model cannot verify your clinical or commercial proof, you don&apos;t
                exist.&rdquo;
              </h2>
              <div className="mt-6 space-y-4 text-base text-[var(--color-fg-muted)] leading-relaxed">
                <p>
                  For the last 15 years, Indian businesses were held hostage by directory
                  aggregators. Doctors paid extortionate commission fees to Practo. Real estate
                  developers spent crores on portal banners. Lawyers were legally banned from
                  advertising and had to rely solely on offline referrals.
                </p>
                <p>
                  Conversational AI changes the rules entirely. High-net-worth patients, NRI buyers,
                  and corporate executives now ask ChatGPT and Perplexity:{" "}
                  <span className="text-[var(--color-fg)] italic">
                    &ldquo;Who is the most qualified cosmetic dermatologist in Bandra?&rdquo;
                  </span>{" "}
                  or{" "}
                  <span className="text-[var(--color-fg)] italic">
                    &ldquo;Which luxury developer in Gurgaon has zero RERA litigations?&rdquo;
                  </span>
                </p>
                <p>
                  At Top G Studios, we engineer the technical schema, verifiable publications, and
                  digital consensus that force LLMs to recommend you by name. No tricks, no spam —
                  just undeniable mathematical and entity authority.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Global Locations Strip */}
      <Section className="border-t border-[var(--color-line)] bg-[var(--color-bg)]">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE.locations.map((loc) => (
              <div
                key={loc.city}
                className="rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-card)] p-5"
              >
                <div className="font-mono text-xs text-[var(--color-accent)]">{loc.country}</div>
                <div className="mt-2 font-[var(--font-display)] text-xl font-medium text-[var(--color-fg)]">
                  {loc.city}
                </div>
                <div className="mt-1 font-mono text-[11px] text-[var(--color-fg-dim)]">
                  {loc.role}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Operating Principles */}
      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Operating principles</Eyebrow>
            <H2 className="mt-6">How we engineer authority.</H2>
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

      {/* Discovery CTA */}
      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <div className="rounded-3xl border border-[var(--color-line-strong)] bg-[var(--color-bg-card)] p-10 lg:p-14">
            <H2>Ready to make AI recommend you by name?</H2>
            <Lead className="mt-6">
              Schedule an executive AI search audit with Sanjay Yellar. We will evaluate your
              current Share of Model and show you where your competitors are being cited.
            </Lead>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={SITE.bookingUrl} external size="lg">
                Book a 30-min AI Audit →
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Send a Direct Brief
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Script
        id="ld-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
