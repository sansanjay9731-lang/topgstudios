import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Container, Button } from "@/components/ui";
import { SITE } from "@/lib/site";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Top Gun Studios",
    };
  }

  const url = `${SITE.url}/blog/${article.slug}`;

  return {
    title: `${article.title} | ${SITE.name}`,
    description: article.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.summary,
      siteName: SITE.name,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, article.clusterId, 3);

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": article.schemaType || "Article",
    "@id": `${SITE.url}/blog/${article.slug}#article`,
    headline: article.title,
    description: article.summary,
    inLanguage: "en-US",
    mainEntityOfPage: `${SITE.url}/blog/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
      url: article.author.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/brand-horizontal.png`,
    },
    keywords: [article.primaryKeyword, ...article.secondaryKeywords].join(", "),
    articleSection: article.clusterName,
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
        name: "Blog",
        item: `${SITE.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE.url}/blog/${article.slug}`,
      },
    ],
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden min-h-screen">
        {/* Ambient aura glow */}
        <div className="bg-aura absolute inset-0 pointer-events-none opacity-40" />
        <div className="bg-grid absolute inset-0 pointer-events-none opacity-25" />

        <Container className="relative max-w-4xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-neutral-500">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-emerald-400 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-neutral-400 truncate max-w-[200px] sm:max-w-none">
              {article.clusterName}
            </span>
          </nav>

          {/* Meta Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-emerald-400 font-semibold">
              [{article.id.toUpperCase()}]
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
              {article.clusterName}
            </span>
            <span className="text-neutral-500 font-mono text-xs">·</span>
            <span className="text-neutral-400 font-mono text-xs">
              {article.readingTime}
            </span>
            <span className="text-neutral-500 font-mono text-xs">·</span>
            <span className="text-neutral-400 font-mono text-xs">
              Schema: {article.schemaType}
            </span>
          </div>

          {/* H1 Headline */}
          <h1 className="mt-6 font-[var(--font-display)] text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.08]">
            {article.title}
          </h1>

          {/* Author & Telemetry Info */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 py-5 border-y border-white/[0.08]">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center font-mono text-sm font-bold text-emerald-300">
                SY
              </div>
              <div>
                <div className="text-sm font-medium text-white flex items-center gap-2">
                  <span>{article.author.name}</span>
                  <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    VERIFIED AUTHOR
                  </span>
                </div>
                <div className="text-xs text-neutral-400 font-mono mt-0.5">
                  {article.author.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="text-neutral-500">Target Models:</span>
              <span className="text-emerald-300">
                {article.targetModels.join(" · ")}
              </span>
            </div>
          </div>

          {/* Machine-Extractable Ground Truth Answer Box */}
          <div className="mt-10 rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/30 via-[#0c1017] to-emerald-950/20 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,255,102,0.1)]">
            <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-wider text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              Machine-Extractable Direct Answer // For AI Search Engines
            </div>
            <p className="mt-4 text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              {article.directAnswer}
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0c1017] p-6 sm:p-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              Strategic Key Takeaways
            </h2>
            <ul className="mt-4 space-y-2.5">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                  <span className="text-emerald-400 font-mono text-xs mt-1">✓</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Article Sections */}
          <div className="mt-12 space-y-12">
            {article.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-medium tracking-tight text-white">
                  {sec.heading}
                </h2>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                  {sec.content}
                </p>

                {sec.bullets && sec.bullets.length > 0 && (
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 mt-4">
                    <div className="font-mono text-xs uppercase tracking-wider text-neutral-400 mb-3">
                      Core Implementation Parameters:
                    </div>
                    <ul className="space-y-2.5">
                      {sec.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Community & Reddit Consensus Validation */}
          <div className="mt-14 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-950/20 via-[#0c1017] to-transparent p-6 sm:p-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-purple-400">
              <span>⚡</span>
              Third-Party Consensus & Community Validation
            </div>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
              {article.communityValidation}
            </p>
          </div>

          {/* FAQ Accordion Section */}
          <div className="mt-16 pt-12 border-t border-white/[0.08]">
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              {article.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#0c1017] p-6 transition-colors"
                >
                  <h3 className="font-medium text-base sm:text-lg text-white">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Author E-E-A-T Bio Box */}
          <div className="mt-16 rounded-3xl border border-white/[0.08] bg-[#0c1017] p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center font-mono text-xl font-bold text-emerald-300 shrink-0">
              SY
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-[var(--font-display)] text-xl font-medium text-white">
                  {article.author.name}
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  {article.author.role}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                {article.author.bio}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs font-mono">
                <a
                  href={article.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Connect on LinkedIn</span>
                  <span>↗</span>
                </a>
                <span className="text-neutral-600">·</span>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  View Founder Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Direct Architecture Call CTA */}
          <div className="mt-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-[#090c12] to-emerald-950/40 p-8 sm:p-12 text-center">
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-medium text-white">
              Ready to Engineer Your Brand&apos;s AI Search Dominance?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Schedule an executive AI Visibility Audit with Sanjay Yellar to benchmark your
              Share of Model across ChatGPT, Perplexity, Claude, and Google AI Overviews.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={SITE.bookingUrl} external size="lg">
                Book AI Visibility Audit →
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                Explore Retainer Packages
              </Button>
            </div>
          </div>

          {/* Sibling & Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-20 pt-12 border-t border-white/[0.08]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    Deep Topical Cluster Links
                  </div>
                  <h2 className="font-[var(--font-display)] text-2xl font-medium text-white mt-1">
                    Related Authority Guides in This Cluster
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-1 font-mono text-xs text-neutral-400 hover:text-emerald-400"
                >
                  <span>All 200 Articles</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group rounded-2xl border border-white/[0.08] bg-[#0c1017] p-6 hover:border-emerald-500/40 hover:bg-[#0f141e] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-mono text-[10px] text-emerald-400 font-semibold">
                        [{rel.id.toUpperCase()}]
                      </div>
                      <h3 className="mt-3 font-medium text-white text-base group-hover:text-emerald-300 transition-colors line-clamp-2">
                        {rel.title}
                      </h3>
                      <p className="mt-2 text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                        {rel.summary}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs font-mono text-emerald-400 flex items-center justify-between">
                      <span>{rel.readingTime}</span>
                      <span className="group-hover:translate-x-1 transition-transform">Read →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </article>
    </>
  );
}
