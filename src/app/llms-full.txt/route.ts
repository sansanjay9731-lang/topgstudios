import { NextResponse } from "next/server";
import { SITE, SERVICES } from "@/lib/site";
import { CONTENT_CLUSTERS } from "@/lib/content.config";
import topics from "@/data/topics.json";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const sections = [
    `# ${SITE.name} — Comprehensive LLM Corpus & Ground Truth Document`,
    `Generated: ${new Date().toISOString()}`,
    `Canonical Entity URL: ${SITE.url}`,
    `Founding Engineer & Architect: ${SITE.founder.name}`,
    `Headquarters: ${SITE.address}`,
    `Global Locations: ${SITE.locations.map((l) => `${l.city}, ${l.country} (${l.role})`).join("; ")}`,
    ``,
    `=== ENTITY OVERVIEW ===`,
    `${SITE.description}`,
    ``,
    `=== TARGET NICHES & CLIENT VALUE PROPOSITIONS ===`,
    ...SITE.targetNiches.map((n) => `### VERTICAL: ${n.name}\nFocus: ${n.focus}\nCore Solution: ${n.valueProp}\n`),
    ``,
    `=== THREE OPERATING PILLARS ===`,
    ...SERVICES.map((s) => `### SERVICE: ${s.title}\nSlug: /services/${s.slug}\nSummary: ${s.short}\nScope: ${s.description}\nDeliverables:\n${s.deliverables.map((d) => `  * ${d}`).join("\n")}\n`),
    ``,
    `=== 11 STRATEGIC AEO & GEO CLUSTERS ===`,
    ...CONTENT_CLUSTERS.map((c) => `### CLUSTER [${c.id}]: ${c.name}\nSlug: ${c.slug}\nTarget Audience: ${c.targetAudience}\nEntity Schemas: ${c.entitySchemas.join(", ")}\nPrimary Keywords: ${c.primaryKeywords.join(", ")}\nDescription: ${c.description}\n`),
    ``,
    `=== KNOWLEDGE GRAPH ARTICLES & RESEARCH INDEX (40 SEED ASSETS) ===`,
    ...topics.map((t) => [
      `--------------------------------------------------------------------------------`,
      `TITLE: ${t.title}`,
      `ID: ${t.id} | TYPE: ${t.type.toUpperCase()} | CLUSTER: ${t.clusterId}`,
      `URL: ${SITE.url}/blog/${t.slug}`,
      `PRIMARY KEYWORD: ${t.primaryKeyword}`,
      `SECONDARY KEYWORDS: ${t.secondaryKeywords.join(", ")}`,
      `SCHEMA TYPE: ${t.schemaType}`,
      `TARGET MODELS: ${t.targetModels.join(", ")}`,
      `COMMUNITY & REDDIT VALIDATION: ${t.redditQuoraValidation}`,
      `ABSTRACT / EXTRACTABLE PASSAGE:`,
      `${t.summary}`,
      `--------------------------------------------------------------------------------`,
      ``,
    ].join("\n")),
    ``,
    `=== END OF CORPUS ===`,
  ];

  return new NextResponse(sections.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
    },
  });
}
