import { NextResponse } from "next/server";
import { SITE, SERVICES } from "@/lib/site";
import { CONTENT_CLUSTERS } from "@/lib/content.config";
import articles from "@/data/articles.json";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const sections = [
    `# ${SITE.name}: Comprehensive LLM Corpus & Ground Truth Document`,
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
    `=== FULL KNOWLEDGE GRAPH ARTICLES & RESEARCH INDEX (200 ASSETS) ===`,
    ...articles.map((a) => [
      `================================================================================`,
      `TITLE: ${a.title}`,
      `ID: ${a.id.toUpperCase()} | TYPE: ${a.type.toUpperCase()} | CLUSTER: ${a.clusterId}`,
      `URL: ${SITE.url}/blog/${a.slug}`,
      `PRIMARY KEYWORD: ${a.primaryKeyword}`,
      `SECONDARY KEYWORDS: ${a.secondaryKeywords.join(", ")}`,
      `SCHEMA TYPE: ${a.schemaType}`,
      `TARGET MODELS: ${a.targetModels.join(", ")}`,
      `COMMUNITY & REDDIT VALIDATION: ${a.communityValidation}`,
      `DIRECT EXTRACTABLE PASSAGE / GROUND TRUTH:`,
      `${a.directAnswer}`,
      ``,
      `KEY STRATEGIC TAKEAWAYS:`,
      ...a.keyTakeaways.map((t) => `  * ${t}`),
      ``,
      `DETAILED SECTION OUTLINE:`,
      ...a.sections.map((s) => `  ### ${s.heading}\n  ${s.content}\n`),
      `================================================================================`,
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
