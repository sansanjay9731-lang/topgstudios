# Top G Studios

AI-native digital agency site. Built with Next.js 16 + Tailwind v4.

## Stack
- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind v4 (CSS-first config in `globals.css`)
- TypeScript, Edge runtime for OG images
- Inter (sans), JetBrains Mono (mono), Space Grotesk (display)

## Run

```bash
cd ~/topg-studios
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve production
```

## Structure

```
src/
  app/
    page.tsx                    Landing (3 pillars + full service grid)
    layout.tsx                  Root layout, fonts, Organization schema
    globals.css                 Tailwind v4 theme tokens, HUD primitives
    robots.ts                   AI crawlers allowlisted (GPTBot, ClaudeBot, PerplexityBot, etc.)
    sitemap.ts                  All static + dynamic routes
    opengraph-image.tsx         Auto-generated OG for /
    services/[slug]/page.tsx    All 7 service detail pages
    about/, case-studies/, pricing/, contact/, privacy/, terms/
  components/
    header.tsx, footer.tsx, ui.tsx
  lib/
    site.ts                     SITE config, NAV, SERVICES data
public/
  llms.txt                      AEO/GEO crawl manifest (ChatGPT, Claude, Perplexity)
```

## Branding

- Name: **Top G Studios**
- Tagline: AI-Native Growth Engine for Modern Enterprises
- Palette: bg `#050608`, accent `#00ff88` (neon green), text `#e8edf5`
- Vibe: dark AI-enterprise, terminal/HUD details, scanlines, monospace eyebrows

Update everything in `src/lib/site.ts`.

## Three landing pillars
1. **IT Development** — software shipped
2. **IT Manpower Deployment** — embedded engineers/designers/leads
3. **Digital Marketing Consulting** — enterprise SEO/AEO/GEO/paid/lifecycle

Full service grid below covers: AEO+GEO, Enterprise SEO, Performance Marketing, LLM/AI Implementation.

## AEO/GEO/SEO setup
- `robots.ts` — explicitly allows GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Amazonbot, Bytespider, Meta-ExternalAgent
- `sitemap.ts` — every route, dynamic from `lib/site.ts`
- `llms.txt` — full corpus summary served at `/llms.txt` for LLM ingestion
- JSON-LD: Organization (sitewide), Service (per service page), FAQPage (homepage)
- Metadata API: title templates, OG, Twitter, canonical URLs

## Deploy to Vercel

```bash
cd ~/topg-studios
git init && git add . && git commit -m "Initial Top G Studios site"
# Create a new GitHub repo, then:
git remote add origin git@github.com:<you>/topg-studios.git
git push -u origin main
# Then connect the repo on vercel.com and add your domain.
```

Set the production URL in `src/lib/site.ts` (currently `https://topgstudios.com`) before deploying.

## Content TODO before launch
- Real client logos and case study assets
- Real metrics in case-studies
- Actual booking calendar URL (currently Calendly placeholder)
- Real founder bio + team photos on /about
- Twitter / LinkedIn / Instagram handles in `SITE.socials`
- Replace placeholder phone number in `SITE.phone`
