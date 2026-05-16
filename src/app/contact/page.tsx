import type { Metadata } from "next";
import { Button, Container, Eyebrow, Lead, Section } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name}. Book a discovery call or send a brief.`,
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <Section className="pt-24 sm:pt-32 min-h-[80vh]">
      <div className="absolute inset-0 hud-grid opacity-50" aria-hidden />
      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-6 font-[var(--font-display)] text-5xl sm:text-6xl font-medium tracking-tight leading-[1.05]">
              Let's run the diagnostic.
            </h1>
            <Lead className="mt-7">
              30-minute discovery call. We map your gaps across product, talent and AI visibility,
              then quote a 90-day runway. No deck. No pressure.
            </Lead>

            <div className="mt-10 space-y-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
                  Email
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 inline-block text-lg text-[var(--color-fg)] hover:text-[var(--color-accent)]"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
                  Calendar
                </p>
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-lg text-[var(--color-fg)] hover:text-[var(--color-accent)]"
                >
                  Book a discovery call →
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
                  HQ
                </p>
                <p className="mt-2 text-lg text-[var(--color-fg)]">{SITE.address}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <form
              action={`mailto:${SITE.email}`}
              method="post"
              encType="text/plain"
              className="rounded-3xl border border-[var(--color-line-strong)] bg-[var(--color-bg-card)] p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
                Send a brief
              </p>
              <div className="mt-6 space-y-5">
                <Field label="Name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field
                  label="What do you need?"
                  name="brief"
                  textarea
                  placeholder="E.g. We need a 4-person engineering pod for 6 months + an AEO program targeting ChatGPT and Perplexity."
                  required
                />
              </div>
              <div className="mt-8">
                <Button size="lg" className="w-full">
                  Send brief
                </Button>
              </div>
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
                Or just{" "}
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline-offset-4 hover:underline"
                >
                  book a call
                </a>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  const base =
    "w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-fg)] placeholder:text-[var(--color-fg-dim)] focus:border-[var(--color-accent)] focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={5} className={`${base} mt-2`} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={`${base} mt-2`} />
      )}
    </label>
  );
}
