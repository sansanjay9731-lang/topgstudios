import Link from "next/link";
import Image from "next/image";
import { SERVICES, SITE } from "@/lib/site";
import { Button } from "./ui";
import { TopGunLogo } from "./logo";

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

      {/* Repeated CTA block */}
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
            <TopGunLogo variant="full" size="md" href="/" />
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
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp: {SITE.whatsappNumber}</span>
            </a>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/topgunstudios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Top Gun Studios LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.1] bg-[#0c1017] text-neutral-400 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-400 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/topgunstudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Top Gun Studios Instagram"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.1] bg-[#0c1017] text-neutral-400 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-400 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth={1.8} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://twitter.com/topgstudios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Top Gun Studios X"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.1] bg-[#0c1017] text-neutral-400 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-400 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
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
                <Link href="/blog" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400 font-mono text-xs">◈</span>
                  Research Blog (200)
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400 font-mono text-xs">◇</span>
                  AI Glossary
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
