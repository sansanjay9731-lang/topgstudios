import type { MetadataRoute } from "next";
import { SERVICES, SITE } from "@/lib/site";
import { getAllArticles, getGlossaryArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE.url}/glossary`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const allArticles = getAllArticles();
  const blogRoutes: MetadataRoute.Sitemap = allArticles.map((a) => ({
    url: `${SITE.url}/blog/${a.slug}`,
    lastModified: new Date(a.updatedAt || a.publishedAt),
    changeFrequency: a.type === "pillar" ? "weekly" : "monthly",
    priority: a.type === "pillar" ? 0.95 : 0.85,
  }));

  const glossaryTerms = getGlossaryArticles();
  const glossaryRoutes: MetadataRoute.Sitemap = glossaryTerms.map((g) => ({
    url: `${SITE.url}/glossary/${g.slug}`,
    lastModified: new Date(g.updatedAt || g.publishedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...glossaryRoutes];
}
