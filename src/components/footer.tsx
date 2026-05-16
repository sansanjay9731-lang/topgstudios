import Link from "next/link";
import Image from "next/image";
import { SERVICES, SITE } from "@/lib/site";
import { Button } from "./ui";

const TRUST = [
  "SOC 2 ready",
  "GDPR aware",
  "DPDP-compliant",
  "ISO 27001 partners",
  "AI-crawler optimized",
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-line)] bg-[var(--color-bg)]">
      <div className="bg-aura-soft absolute inset-0 pointer-events-none" />

      {/* Repeated CTA block — Neon-style */}
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 pt-24 pb-16">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-line-strong)] bg-[var(--color-bg-elev)] px-8 py-16 sm:px-16 sm:py-20">
          <div className="bg-aura absolute inset-0 opacity-60" />
          <div className="bg-grid absolute inset-0 opacity-40" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />
              Ready when you are
            </div>
            <h2 className="mt-5 font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[var(--color-fg)]">
              The most advanced
              <br />
              <span className="text-[var(--color-accent)] text-glow">AI-native growth</span> platform.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-fg-muted)]">
              Ship software. Embed elite engineers. Get cited by ChatGPT, Claude, Perplexity, Gemini and Google.
              Three operating arms, one team.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={SITE.bookingUrl} external size="lg">
                Book a discovery call →
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                See pricing
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {TRUST.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg-card)]/80 px-3 py-1 font-mono text-[11px] text-[var(--color-fg-muted)]"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 pb-12">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 group">
              <div className="flex items-center gap-4">
                {/* Custom Precision SVG Stealth Jet - Pointy Face Up */}
                <div className="relative h-10 w-10 flex items-center justify-center text-[var(--color-accent)] drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main Fuselage Spine */}
                  <path d="M50 5L58 40L50 85L42 40L50 5Z" fill="currentColor" fillOpacity="0.9" />
                  {/* Outer Stealth Wings */}
                  <path d="M58 35L95 85L62 75L58 35Z" fill="currentColor" fillOpacity="0.7" />
                  <path d="M42 35L5 85L38 75L42 35Z" fill="currentColor" fillOpacity="0.7" />
                  {/* Secondary Inner Stabilizers */}
                  <path d="M50 45L62 65L50 85L38 65L50 45Z" fill="currentColor" fillOpacity="0.8" />
                  {/* Rear Tail Fins */}
                  <path d="M62 70L85 95L68 85L62 70Z" fill="currentColor" fillOpacity="0.75" />
                  <path d="M38 70L15 95L32 85L38 70Z" fill="currentColor" fillOpacity="0.75" />
                  {/* High-Tech Canopy Accent */}
                  <path d="M50 15L54 35L50 42L46 35L50 15Z" fill="#000" fillOpacity="0.4" />
                  </svg>
                </div>
                {/* Professional Text Wordmark */}
                <div className="flex flex-col -gap-1">
                  <span className="font-[var(--font-display)] text-2xl font-bold tracking-tighter uppercase text-white leading-none">
                    TOP G
                  </span>
                  <span className="font-[var(--font-display)] text-[10px] font-medium tracking-[0.3em] uppercase text-[var(--color-accent)] leading-none opacity-100">
                    STUDIOS
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-fg-muted)]">
              {SITE.description}
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
              Contact
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 block text-sm text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              Book a discovery call →
            </a>
            <div className="mt-6 flex gap-3">
              {SITE.socials.map((s) => {
                const label = s.includes("twitter")
                  ? "X"
                  : s.includes("linkedin")
                    ? "in"
                    : s.includes("instagram")
                      ? "ig"
                      : "·";
                return (
                  <a
                    key={s}
                    href={s}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-md border border-[var(--color-line)] bg-[var(--color-bg-elev)] font-mono text-[11px] text-[var(--color-fg-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
              AI Search
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/services/aeo-geo" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                  AEO + GEO
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                  Enterprise SEO
                </Link>
              </li>
              <li>
                <Link href="/services/llm-implementation" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                  LLM Implementation
                </Link>
              </li>
              <li>
                <a href="/llms.txt" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
                  llms.txt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--color-line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] text-[var(--color-fg-dim)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] pulse-dot" />
              All systems operational
            </span>
            <span className="font-mono text-[11px] text-[var(--color-fg-dim)]">
              · © {new Date().getFullYear()} {SITE.name}
            </span>
          </div>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors">
              Terms
            </Link>
            <a href="/llms.txt" className="font-mono text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors">
              llms.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
