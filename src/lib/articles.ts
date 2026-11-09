import articlesData from "@/data/articles.json";

export interface ArticleSection {
  heading: string;
  content: string;
  bullets?: string[];
  codeSnippet?: string;
}

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface ArticleAuthor {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  clusterId: string;
  clusterName: string;
  type: "pillar" | "cluster" | "glossary";
  wordCountTarget: number;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  targetAudience: string;
  schemaType: string;
  targetModels: string[];
  summary: string;
  directAnswer: string;
  communityValidation: string;
  keyTakeaways: string[];
  sections: ArticleSection[];
  faq: ArticleFaq[];
  author: ArticleAuthor;
}

const typedArticles = articlesData as unknown as Article[];

export function getAllArticles(): Article[] {
  return typedArticles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return typedArticles.find((a) => a.slug === slug);
}

export function getPillarArticles(): Article[] {
  return typedArticles.filter((a) => a.type === "pillar");
}

export function getGlossaryArticles(): Article[] {
  return typedArticles.filter((a) => a.type === "glossary");
}

export function getArticlesByCluster(clusterId: string): Article[] {
  return typedArticles.filter((a) => a.clusterId === clusterId);
}

export function getRelatedArticles(currentSlug: string, clusterId: string, limit: number = 3): Article[] {
  const clusterSiblings = typedArticles.filter(
    (a) => a.clusterId === clusterId && a.slug !== currentSlug
  );
  if (clusterSiblings.length >= limit) {
    return clusterSiblings.slice(0, limit);
  }
  const others = typedArticles.filter(
    (a) => a.clusterId !== clusterId && a.slug !== currentSlug
  );
  return [...clusterSiblings, ...others].slice(0, limit);
}
