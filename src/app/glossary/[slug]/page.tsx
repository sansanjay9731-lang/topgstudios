import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Container, Button } from "@/components/ui";
import { SITE } from "@/lib/site";
import { getArticleBySlug, getGlossaryArticles } from "@/lib/articles";

export async function generateStaticParams() {
  const glossaryTerms = getGlossaryArticles();
  return glossaryTerms.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getArticleBySlug(slug);

  if (!term) {
    return { title: "Term Not Found | Top Gun Studios" };
  }

  const url = `${SITE.url}/glossary/${term.slug}`;

  return {
    title: `${term.title} | ${SITE.name}`,
    description: term.directAnswer,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: term.title,
      description: term.directAnswer,
      siteName: SITE.name,
    },
  };
}

export default async function GlossaryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getArticleBySlug(slug);

  if (!term) {
    notFound();
  }

  // DefinedTerm JSON-LD Schema
  const termSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${SITE.url}/glossary/${term.slug}#term`,
    name: term.title,
    description: term.directAnswer,
    inDefinedTermSet: `${SITE.url}/glossary`,
    termCode: term.id,
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Glossary",
        item: `${SITE.url}/glossary`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: term.title,
        item: `${SITE.url}/glossary/${term.slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-defined-term"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termSchema) }}
      />
      <Script
        id="ld-breadcrumb-term"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden min-h-screen">
        <div className="bg-aura absolute inset-0 pointer-events-none opacity-40" />
        <div className="bg-grid absolute inset-0 pointer-events-none opacity-25" />

        <Container className="relative max-w-4xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-neutral-500">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/glossary" className="hover:text-emerald-400 transition-colors">
              Glossary
            </Link>
            <span>/</span>
            <span className="text-neutral-400 truncate">{term.title}</span>
          </nav>

          <div className="mt-8 flex items-center gap-3">
            <span className="font-mono text-xs text-emerald-400 font-semibold">
              [{term.id.toUpperCase()}]
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
              DEFINED TERM
            </span>
            <span className="text-neutral-500 font-mono text-xs">·</span>
            <span className="text-neutral-400 font-mono text-xs">
              Schema: DefinedTerm
            </span>
          </div>

          <h1 className="mt-6 font-[var(--font-display)] text-3xl sm:text-5xl font-medium tracking-tight text-white">
            {term.title}
          </h1>

          {/* Machine-Extractable Direct Definition Box */}
          <div className="mt-8 rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/30 via-[#0c1017] to-emerald-950/20 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,255,102,0.1)]">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-wider text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              Machine-Extractable Definition // For AI Search Engines
            </div>
            <p className="mt-4 text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              {term.directAnswer}
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#0c1017] p-6 sm:p-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              Key Concepts & Implications
            </h2>
            <ul className="mt-4 space-y-2.5">
              {term.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                  <span className="text-emerald-400 font-mono text-xs mt-1">✓</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <div className="mt-12 space-y-10">
            {term.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl font-medium tracking-tight text-white">
                  {sec.heading}
                </h2>
                <p className="text-base text-neutral-300 leading-relaxed">
                  {sec.content}
                </p>
                {sec.bullets && (
                  <ul className="space-y-2 mt-3">
                    {sec.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl border border-emerald-500/20 bg-[#0c1017] p-8 text-center">
            <h2 className="font-[var(--font-display)] text-xl font-medium text-white">
              Need Help Implementing AEO or GEO for Your Business?
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Top Gun Studios builds custom schemas, machine-readable corpora, and AI search authority.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href={SITE.bookingUrl} external size="md">
                Schedule Architecture Consultation →
              </Button>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
