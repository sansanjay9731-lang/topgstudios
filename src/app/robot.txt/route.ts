import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const content = [
    "User-agent: *",
    "Allow: /",
    "",
    "# Explicitly welcome AI crawlers: critical for AEO/GEO",
    "User-agent: GPTBot",
    "Allow: /",
    "User-agent: ChatGPT-User",
    "Allow: /",
    "User-agent: OAI-SearchBot",
    "Allow: /",
    "User-agent: ClaudeBot",
    "Allow: /",
    "User-agent: Claude-Web",
    "Allow: /",
    "User-agent: anthropic-ai",
    "Allow: /",
    "User-agent: PerplexityBot",
    "Allow: /",
    "User-agent: Perplexity-User",
    "Allow: /",
    "User-agent: Google-Extended",
    "Allow: /",
    "User-agent: Googlebot",
    "Allow: /",
    "User-agent: Bingbot",
    "Allow: /",
    "User-agent: Applebot-Extended",
    "Allow: /",
    "User-agent: Amazonbot",
    "Allow: /",
    "User-agent: DuckAssistBot",
    "Allow: /",
    "User-agent: Meta-ExternalAgent",
    "Allow: /",
    "User-agent: FacebookBot",
    "Allow: /",
    "User-agent: Bytespider",
    "Allow: /",
    "",
    `Host: ${SITE.url}`,
    `Sitemap: ${SITE.url}/sitemap.xml`,
  ].join("\n");

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=86400",
    },
  });
}
