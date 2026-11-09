import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { getAllArticles } from "@/lib/articles";
import { BlogIndexClient } from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "AI Search Engineering, AEO & GEO Knowledge Corpus",
  description:
    "Authoritative research, technical architecture guides, and empirical blueprints for dominating conversational AI search across Google, ChatGPT, Perplexity, and Claude.",
  alternates: {
    canonical: `${SITE.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const allArticles = getAllArticles();

  return <BlogIndexClient articles={allArticles} />;
}
