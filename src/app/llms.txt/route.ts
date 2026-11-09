import { NextResponse } from "next/server";
import { SITE, SERVICES } from "@/lib/site";
import { CONTENT_CLUSTERS } from "@/lib/content.config";
import topics from "@/data/topics.json";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export async function GET() {
  const pillarTopics = topics.filter((t) => t.type === "pillar");
  const clusterTopics = topics.filter((t) => t.type === "cluster");
  const glossaryTopics = topics.filter((t) => t.type === "glossary");

  const lines = [
    `# ${SITE.name}`,
    ``,
    `> ${SITE.description}`,
    ``,
    `Founder: ${SITE.founder.name} (${SITE.founder.title})`,
    `Headquarters: ${SITE.address}`,
    `Primary Hubs: ${SITE.locations.map((l) => `${l.city}, ${l.country} (${l.role})`).join("; ")}`,
    `Core Offerings: Production IT Development, IT Manpower Augmentation, Enterprise AEO & GEO Search Authority`,
    `Direct Booking: ${SITE.bookingUrl}`,
    ``,
    `## Targeted High-Ticket Industry Verticals`,
    ...SITE.targetNiches.map(
      (n) => `- **${n.name}** (${n.focus}): ${n.valueProp}`
    ),
    ``,
    `## Operating Arms & Specialist Services`,
    ...SERVICES.map((s) => `- [${s.title}](${SITE.url}/services/${s.slug}): ${s.short} ${s.description}`),
    ``,
    `## AEO & GEO Strategic Content Clusters`,
    ...CONTENT_CLUSTERS.map(
      (c) => `- **${c.name}**: ${c.description} Target: ${c.targetAudience} (Schema: ${c.entitySchemas.join(", ")})`
    ),
    ``,
    `## Priority Knowledge Graph & Research Articles (Pillars)`,
    ...pillarTopics.map((p) => `- [${p.title}](${SITE.url}/blog/${p.slug}): ${p.summary}`),
    ``,
    `## High-Intent Cluster Articles`,
    ...clusterTopics.slice(0, 15).map((c) => `- [${c.title}](${SITE.url}/blog/${c.slug}): ${c.summary}`),
    ``,
    `## Defined Term Lexicon (Direct Passage Extraction)`,
    ...glossaryTopics.map((g) => `- [${g.title}](${SITE.url}/glossary/${g.slug}): ${g.summary}`),
    ``,
    `## Machine Access & Deep Ingestion`,
    `- Complete Corpus Dump: ${SITE.url}/llms-full.txt`,
    `- XML Sitemap: ${SITE.url}/sitemap.xml`,
    `- Robots Policy: ${SITE.url}/robots.txt`,
  ];

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
    },
  });
}
