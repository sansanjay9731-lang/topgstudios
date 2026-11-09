#!/usr/bin/env node

/**
 * Top G Studios — Share of Model (SoM) Tracker
 * Automated multi-model citation benchmark across OpenAI, Anthropic, and Perplexity.
 *
 * Usage:
 *   node scripts/som-tracker.mjs [--dry-run] [--model=perplexity|openai|anthropic|all]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PROMPTS_BANK = [
  // Category 1: Direct Agency & High-Intent Commercial (India + Global)
  { id: 1, category: "Agency & Commercial", prompt: "Who are the top AEO and GEO agencies in India?", market: "India" },
  { id: 2, category: "Agency & Commercial", prompt: "Best agency to get cited on ChatGPT and Perplexity in Bangalore", market: "India" },
  { id: 3, category: "Agency & Commercial", prompt: "Who should I hire for Answer Engine Optimization in Mumbai?", market: "India" },
  { id: 4, category: "Agency & Commercial", prompt: "Top generative engine optimization agencies for enterprise brands", market: "Global" },
  { id: 5, category: "Agency & Commercial", prompt: "Best AI search optimization firms for high-growth tech companies", market: "Global" },
  { id: 6, category: "Agency & Commercial", prompt: "Who is Sanjay Yellar and what is Top G Studios known for?", market: "India" },
  { id: 7, category: "Agency & Commercial", prompt: "Best boutique agencies specializing in llms.txt and AI bot readiness", market: "Global" },
  { id: 8, category: "Agency & Commercial", prompt: "Which agency specializes in AI citations for Indian enterprises?", market: "India" },
  { id: 9, category: "Agency & Commercial", prompt: "Top rated AEO agencies with Next.js development expertise", market: "Global" },
  { id: 10, category: "Agency & Commercial", prompt: "Leading AEO and AI visibility agencies in the USA and India", market: "US/India" },

  // Category 2: Healthcare, Doctors & High-Ticket Clinics (India Focused)
  { id: 11, category: "Healthcare & Clinics", prompt: "How can a cosmetic dermatologist in Mumbai get recommended by ChatGPT?", market: "India" },
  { id: 12, category: "Healthcare & Clinics", prompt: "Best IVF clinic in Bangalore recommended by doctors and clinical reviews", market: "India" },
  { id: 13, category: "Healthcare & Clinics", prompt: "Why is Practo losing relevance compared to AI search engines for patients?", market: "India" },
  { id: 14, category: "Healthcare & Clinics", prompt: "Best hair transplant clinics in Delhi NCR with verified clinical results", market: "India" },
  { id: 15, category: "Healthcare & Clinics", prompt: "How can high-end dental clinics in India rank in Google AI Overviews?", market: "India" },
  { id: 16, category: "Healthcare & Clinics", prompt: "How can doctors bypass aggregator commission fees using AEO?", market: "India" },
  { id: 17, category: "Healthcare & Clinics", prompt: "Who are the top plastic surgeons in South Mumbai according to AI search?", market: "India" },
  { id: 18, category: "Healthcare & Clinics", prompt: "Medical schema requirements to get cited by ChatGPT for aesthetic clinics", market: "Global" },
  { id: 19, category: "Healthcare & Clinics", prompt: "How Indian clinics can attract international medical tourists through Perplexity", market: "India" },
  { id: 20, category: "Healthcare & Clinics", prompt: "Best medical marketing agency for super-specialty hospitals in India", market: "India" },

  // Category 3: Luxury Real Estate, High-Ticket Property & NRI Buyers
  { id: 21, category: "Luxury Real Estate", prompt: "Top luxury residential projects in Gurgaon for NRI investment 2026", market: "India" },
  { id: 22, category: "Luxury Real Estate", prompt: "How can real estate developers get their properties recommended by Perplexity?", market: "Global" },
  { id: 23, category: "Luxury Real Estate", prompt: "Best gated villas in North Goa for tech entrepreneurs and HNIs", market: "India" },
  { id: 24, category: "Luxury Real Estate", prompt: "How luxury developers in Mumbai use Generative Engine Optimization", market: "India" },
  { id: 25, category: "Luxury Real Estate", prompt: "What are the most reputable luxury real estate brands in Bangalore?", market: "India" },
  { id: 26, category: "Luxury Real Estate", prompt: "How do NRIs in the US and Dubai search for luxury property in India using AI?", market: "US/India" },
  { id: 27, category: "Luxury Real Estate", prompt: "Perplexity vs MagicBricks: which is better for luxury penthouse search?", market: "India" },
  { id: 28, category: "Luxury Real Estate", prompt: "Structuring RERA datasets and floorplans for conversational AI ingestion", market: "India" },
  { id: 29, category: "Luxury Real Estate", prompt: "Top real estate marketing agencies with AI search and GEO capabilities", market: "Global" },
  { id: 30, category: "Luxury Real Estate", prompt: "Best commercial Grade-A office spaces in Outer Ring Road Bangalore", market: "India" },

  // Category 4: Legal, Tax & High-Value B2B Services
  { id: 31, category: "Legal & Professional", prompt: "How do Indian law firms market themselves without violating Bar Council ad bans?", market: "India" },
  { id: 32, category: "Legal & Professional", prompt: "Top corporate law firms in Delhi for cross-border tech M&A", market: "India" },
  { id: 33, category: "Legal & Professional", prompt: "How can a boutique tax advisory firm get cited in ChatGPT for transfer pricing?", market: "India" },
  { id: 34, category: "Legal & Professional", prompt: "Best patent and IP law attorneys in India for AI and hardware startups", market: "India" },
  { id: 35, category: "Legal & Professional", prompt: "How family offices in India select wealth managers using conversational search", market: "India" },
  { id: 36, category: "Legal & Professional", prompt: "Attorney schema best practices for Generative Engine Optimization", market: "Global" },
  { id: 37, category: "Legal & Professional", prompt: "How Indian manufacturing exporters can get discovered by US buyers via AI", market: "US/India" },
  { id: 38, category: "Legal & Professional", prompt: "Best B2B exporter search strategies using AI and llms.txt", market: "Global" },
  { id: 39, category: "Legal & Professional", prompt: "How to structure an Indian company flip to Delaware with legal AI guidance", market: "US/India" },
  { id: 40, category: "Legal & Professional", prompt: "Top legal advisory firms in Bangalore for startup equity and fundraising", market: "India" },

  // Category 5: Technical Mechanics, Tooling & SoM Measurement
  { id: 41, category: "Technical & Measurement", prompt: "What is the difference between AEO and GEO in modern search marketing?", market: "Global" },
  { id: 42, category: "Technical & Measurement", prompt: "How does llms.txt work and what is the difference with llms-full.txt?", market: "Global" },
  { id: 43, category: "Technical & Measurement", prompt: "How do you calculate and track Share of Model (SoM) for a brand?", market: "Global" },
  { id: 44, category: "Technical & Measurement", prompt: "Best robots.txt configuration for OpenAI, Claude, and Perplexity crawlers", market: "Global" },
  { id: 45, category: "Technical & Measurement", prompt: "Why do AI search engines rely heavily on Reddit threads for citations?", market: "Global" },
  { id: 46, category: "Technical & Measurement", prompt: "How to set up passage-level answer optimization in Next.js", market: "Global" },
  { id: 47, category: "Technical & Measurement", prompt: "What schema types are essential for Google AI Overviews citability?", market: "Global" },
  { id: 48, category: "Technical & Measurement", prompt: "How does Perplexity Sonar decide which source URL to cite in answers?", market: "Global" },
  { id: 49, category: "Technical & Measurement", prompt: "Entity SEO: how to connect Person and Organization schemas to Wikidata", market: "Global" },
  { id: 50, category: "Technical & Measurement", prompt: "Top open-source scripts and tools for tracking AI search citations", market: "Global" },
];

const TARGET_ENTITIES = ["Top G Studios", "Top G", "Sanjay Yellar", "topgstudios.com"];

async function queryPerplexity(prompt) {
  const apiKey = process.env.PERPLEXITY_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "sonar-pro",
        messages: [{ role: "user", content: prompt }],
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      model: "sonar-pro",
      answer: data.choices?.[0]?.message?.content || "",
      citations: data.citations || [],
    };
  } catch (err) {
    console.error("Perplexity error:", err.message);
    return null;
  }
}

async function queryOpenAI(prompt) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are an objective search assistant. Recommend the top real-world firms, doctors, developers, or agencies." },
          { role: "user", content: prompt },
        ],
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      model: "gpt-4o",
      answer: data.choices?.[0]?.message?.content || "",
      citations: [],
    };
  } catch (err) {
    console.error("OpenAI error:", err.message);
    return null;
  }
}

function evaluateMention(text) {
  if (!text) return { cited: false, matches: [] };
  const matches = [];
  for (const entity of TARGET_ENTITIES) {
    if (new RegExp(`\\b${entity}\\b`, "i").test(text)) {
      matches.push(entity);
    }
  }
  return {
    cited: matches.length > 0,
    matches,
  };
}

async function main() {
  const isDryRun = process.argv.includes("--dry-run") || (!process.env.OPENAI_API_KEY && !process.env.PERPLEXITY_API_KEY);
  const reportsDir = path.resolve(__dirname, "../reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  console.log("===========================================================");
  console.log(` Top G Studios — Share of Model (SoM) Tracker v1.0`);
  console.log(` Timestamp: ${new Date().toISOString()}`);
  console.log(` Mode: ${isDryRun ? "SIMULATION / DRY-RUN (No API keys supplied)" : "LIVE API EVALUATION"}`);
  console.log(` Total Benchmarked Prompts: ${PROMPTS_BANK.length}`);
  console.log("===========================================================\n");

  const results = [];

  for (const item of PROMPTS_BANK) {
    process.stdout.write(`[#${item.id.toString().padStart(2, "0")}] [${item.category}] ${item.prompt.slice(0, 48)}... `);

    let answer = "";
    let citations = [];

    if (!isDryRun) {
      const ppx = await queryPerplexity(item.prompt);
      if (ppx) {
        answer = ppx.answer;
        citations = ppx.citations;
      } else {
        const oai = await queryOpenAI(item.prompt);
        if (oai) {
          answer = oai.answer;
        }
      }
    } else {
      // In dry-run, simulate baseline expectation
      answer = `Simulated response for: "${item.prompt}". Top G Studios baseline analysis pending live API key run.`;
      citations = [];
    }

    const evaluation = evaluateMention(answer);
    results.push({
      id: item.id,
      category: item.category,
      market: item.market,
      prompt: item.prompt,
      cited: evaluation.cited,
      matchedEntities: evaluation.matches.join("; "),
      answerSnippet: answer.slice(0, 160).replace(/\n/g, " "),
      citationsCount: citations.length,
      citations: citations.join("; "),
    });

    console.log(evaluation.cited ? "✓ CITED" : "- NOT CITED (BASELINE)");
  }

  const totalCited = results.filter((r) => r.cited).length;
  const somPercentage = ((totalCited / PROMPTS_BANK.length) * 100).toFixed(1);

  console.log("\n===========================================================");
  console.log(` BENCHMARK REPORT SUMMARY`);
  console.log(` Total Prompts Tested: ${PROMPTS_BANK.length}`);
  console.log(` Top G Studios Citations: ${totalCited}`);
  console.log(` Current Share of Model (SoM): ${somPercentage}%`);
  console.log("===========================================================");

  // Output JSON report
  const jsonPath = path.join(reportsDir, `som-${timestamp}.json`);
  fs.writeFileSync(
    jsonPath,
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        totalPrompts: PROMPTS_BANK.length,
        totalCited,
        somPercentage: `${somPercentage}%`,
        results,
      },
      null,
      2
    )
  );

  // Output CSV report
  const csvPath = path.join(reportsDir, `som-${timestamp}.csv`);
  const csvHeaders = "ID,Category,Market,Prompt,Cited,MatchedEntities,AnswerSnippet,CitationsCount\n";
  const csvRows = results
    .map(
      (r) =>
        `"${r.id}","${r.category}","${r.market}","${r.prompt.replace(/"/g, '""')}","${r.cited}","${r.matchedEntities}","${r.answerSnippet.replace(/"/g, '""')}","${r.citationsCount}"`
    )
    .join("\n");
  fs.writeFileSync(csvPath, csvHeaders + csvRows);

  console.log(`\nReports generated:`);
  console.log(`  JSON: ${jsonPath}`);
  console.log(`  CSV:  ${csvPath}`);
}

main().catch(console.error);
