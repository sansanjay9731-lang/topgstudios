import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, H2 } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { SITE } from "@/lib/site";
import { getGlossaryArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "AI Search & AEO Defined Terms Glossary",
  description:
    "Authoritative dictionary of Answer Engine Optimization, Generative Engine Optimization, and LLM ingestion definitions for machines and human practitioners.",
  alternates: {
    canonical: `${SITE.url}/glossary`,
  },
};

export default function GlossaryIndexPage() {
  const glossaryTerms = getGlossaryArticles();

  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden min-h-screen">
      <div className="bg-aura absolute inset-0 pointer-events-none opacity-40" />
      <div className="bg-grid absolute inset-0 pointer-events-none opacity-30" />

      <Container className="relative max-w-5xl">
        <FadeIn className="max-w-3xl">
          <Eyebrow>Defined Term Lexicon // Machine Ground Truth</Eyebrow>
          <H2 className="mt-4 text-4xl sm:text-6xl font-medium tracking-tight text-white">
            AI Search & AEO Glossary
          </H2>
          <p className="mt-6 text-base sm:text-xl text-neutral-400 leading-relaxed">
            High-density, machine-readable definitions engineered for zero-click direct passage retrieval
            by ChatGPT, Perplexity, Claude, and Google AI Overviews.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {glossaryTerms.map((term) => (
            <Link
              key={term.slug}
              href={`/glossary/${term.slug}`}
              className="group rounded-2xl border border-white/[0.08] bg-[#0c1017] p-7 hover:border-emerald-500/40 hover:bg-[#0f141e] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span className="text-emerald-400 font-semibold">[{term.id.toUpperCase()}]</span>
                  <span className="text-neutral-400">{term.readingTime}</span>
                </div>
                <h3 className="mt-4 font-[var(--font-display)] text-xl font-medium text-white group-hover:text-emerald-300 transition-colors">
                  {term.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed line-clamp-3">
                  {term.directAnswer}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-emerald-400 flex items-center justify-between">
                <span>Schema: DefinedTerm</span>
                <span className="group-hover:translate-x-1 transition-transform">View Full Definition →</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
