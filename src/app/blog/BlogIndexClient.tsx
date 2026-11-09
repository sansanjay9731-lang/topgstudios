"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Container, Eyebrow, H2, Button } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { CONTENT_CLUSTERS } from "@/lib/content.config";
import type { Article } from "@/lib/articles";

export function BlogIndexClient({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [selectedCluster, setSelectedCluster] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(18);

  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      const matchesCluster =
        selectedCluster === "all" || a.clusterId === selectedCluster;
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.primaryKeyword.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q);
      return matchesCluster && matchesSearch;
    });
  }, [articles, selectedCluster, search]);

  const featuredPillar = useMemo(() => {
    return articles.find((a) => a.type === "pillar") || articles[0];
  }, [articles]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden min-h-screen">
      {/* Background ambient glowing auras */}
      <div className="bg-aura absolute inset-0 pointer-events-none opacity-40" />
      <div className="bg-grid absolute inset-0 pointer-events-none opacity-30" />

      <Container className="relative">
        {/* Header */}
        <FadeIn className="max-w-4xl">
          <Eyebrow>Knowledge Corpus // 200 Peer-Reviewed Indexes</Eyebrow>
          <H2 className="mt-4 text-4xl sm:text-6xl font-medium tracking-tight text-white">
            AI Search Engineering & Citation Authority Insights.
          </H2>
          <p className="mt-6 text-base sm:text-xl text-neutral-400 leading-relaxed max-w-3xl">
            Empirical blueprints, technical DOM specifications, and entity grounding protocols.
            Learn how top product brands and high-value service leaders dominate conversational recommendations
            across Google AI, ChatGPT, Perplexity, and Claude.
          </p>
        </FadeIn>

        {/* Search & Cluster Filter Bar */}
        <FadeIn delay={0.1} className="mt-12 space-y-6">
          <div className="relative max-w-xl">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search 200 research topics, keywords, or industries..."
              className="w-full rounded-2xl border border-white/[0.12] bg-[#0c1017] px-5 py-4 pl-12 font-mono text-sm text-white placeholder-neutral-500 shadow-2xl backdrop-blur transition-all focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
            <button
              onClick={() => setSelectedCluster("all")}
              className={`shrink-0 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                selectedCluster === "all"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_20px_rgba(0,255,102,0.15)]"
                  : "bg-[#0c1017] text-neutral-400 border border-white/[0.08] hover:text-white"
              }`}
            >
              All Topics ({articles.length})
            </button>
            {CONTENT_CLUSTERS.map((c) => {
              const count = articles.filter((a) => a.clusterId === c.id).length;
              const isActive = selectedCluster === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCluster(c.id)}
                  className={`shrink-0 px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all ${
                    isActive
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_20px_rgba(0,255,102,0.15)]"
                      : "bg-[#0c1017] text-neutral-400 border border-white/[0.08] hover:text-white"
                  }`}
                >
                  {c.name} ({count})
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Featured Pillar Hero Card (Shown when not filtering by search) */}
        {!search && selectedCluster === "all" && featuredPillar && (
          <FadeIn delay={0.15} className="mt-12">
            <Link
              href={`/blog/${featuredPillar.slug}`}
              className="group relative block rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-[#10141e] via-[#090c12] to-[#06080c] p-8 sm:p-12 hover:border-emerald-400/60 hover:shadow-[0_0_50px_rgba(0,255,102,0.12)] transition-all overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
                    [PILLAR BLUEPRINT // {featuredPillar.id.toUpperCase()}]
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                    FEATURED ENGINE
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-neutral-500">
                  <span>{featuredPillar.readingTime}</span>
                  <span>·</span>
                  <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">Read Complete Guide →</span>
                </div>
              </div>

              <h3 className="mt-6 font-[var(--font-display)] text-2xl sm:text-4xl font-medium tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                {featuredPillar.title}
              </h3>

              <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-4xl">
                {featuredPillar.directAnswer}
              </p>

              <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/[0.08]">
                {featuredPillar.keyTakeaways.map((takeaway, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {takeaway}
                  </span>
                ))}
              </div>
            </Link>
          </FadeIn>
        )}

        {/* Results Counter */}
        <div className="mt-12 flex items-center justify-between text-xs font-mono text-neutral-500">
          <span>Showing {displayedArticles.length} of {filteredArticles.length} Articles</span>
          {search && <span>Filtered by query: &quot;{search}&quot;</span>}
        </div>

        {/* Articles Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedArticles.map((art) => (
            <Link
              key={art.slug}
              href={`/blog/${art.slug}`}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c1017] p-7 transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#0f141e] hover:shadow-[0_0_30px_rgba(0,255,102,0.08)]"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span className="text-emerald-400 font-semibold">[{art.id.toUpperCase()}]</span>
                  <span className="text-neutral-400">{art.readingTime}</span>
                </div>

                <div className="mt-4 inline-block px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-white/[0.04] border border-white/[0.08] text-neutral-400">
                  {art.clusterName}
                </div>

                <h3 className="mt-4 font-[var(--font-display)] text-xl font-medium tracking-tight text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                  {art.title}
                </h3>

                <p className="mt-3 text-sm text-neutral-400 leading-relaxed line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500 truncate max-w-[180px]">
                  Keyword: {art.primaryKeyword}
                </span>
                <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount((c) => c + 18)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-wider bg-[#0c1017] border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(0,255,102,0.15)] active:scale-95 transition-all cursor-pointer"
            >
              <span>Load More Research Articles ({filteredArticles.length - visibleCount} Remaining)</span>
              <span>↓</span>
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}
