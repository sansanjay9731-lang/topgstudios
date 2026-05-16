import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: `${SITE.url}/terms` },
};

export default function TermsPage() {
  return (
    <Section className="pt-24 sm:pt-32">
      <Container className="max-w-3xl">
        <Eyebrow>Terms</Eyebrow>
        <h1 className="mt-6 font-[var(--font-display)] text-5xl font-medium tracking-tight">
          Terms of Service
        </h1>
        <div className="mt-10 space-y-6 text-[var(--color-fg-muted)] leading-relaxed">
          <p>
            By engaging {SITE.name}, you agree to the engagement terms specified in your Statement of
            Work (SOW). The terms below apply to general use of this website.
          </p>
          <h2 className="text-[var(--color-fg)] text-xl mt-8">Use of site</h2>
          <p>
            This website is provided for informational purposes. Information is offered in good faith
            but without warranty.
          </p>
          <h2 className="text-[var(--color-fg)] text-xl mt-8">Engagements</h2>
          <p>
            All client engagements are governed by a signed SOW. Pricing on this site is indicative
            and subject to scope.
          </p>
          <h2 className="text-[var(--color-fg)] text-xl mt-8">Intellectual property</h2>
          <p>All content is property of {SITE.name} unless otherwise stated.</p>
          <h2 className="text-[var(--color-fg)] text-xl mt-8">Contact</h2>
          <p>
            Email <a href={`mailto:${SITE.email}`} className="text-[var(--color-accent)]">{SITE.email}</a>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
