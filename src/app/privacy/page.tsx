import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <Section className="pt-24 sm:pt-32">
      <Container className="max-w-3xl">
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="mt-6 font-[var(--font-display)] text-5xl font-medium tracking-tight">
          Privacy Policy
        </h1>
        <div className="prose prose-invert mt-10 space-y-6 text-[var(--color-fg-muted)] leading-relaxed">
          <p>
            {SITE.name} respects your privacy. This policy explains what we collect and how we use it.
          </p>
          <h2 className="text-[var(--color-fg)] text-xl mt-8">Information we collect</h2>
          <p>
            We collect information you provide when you contact us, book a call, or send a brief — name,
            email, company, and the content of your message.
          </p>
          <h2 className="text-[var(--color-fg)] text-xl mt-8">How we use it</h2>
          <p>
            To respond to your inquiry, scope an engagement, and contact you about our services. We do
            not sell your information.
          </p>
          <h2 className="text-[var(--color-fg)] text-xl mt-8">Cookies and analytics</h2>
          <p>
            We use minimal analytics to understand site usage. No third-party advertising trackers.
          </p>
          <h2 className="text-[var(--color-fg)] text-xl mt-8">Contact</h2>
          <p>
            Questions? Email <a href={`mailto:${SITE.email}`} className="text-[var(--color-accent)]">{SITE.email}</a>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
