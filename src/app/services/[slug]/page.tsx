import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { SERVICES, SITE } from "@/lib/site";
import { ServicePageClient } from "./ServicePageClient";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.description,
    alternates: { canonical: `${SITE.url}/services/${svc.slug}` },
    openGraph: {
      title: `${svc.title} — ${SITE.name}`,
      description: svc.description,
      url: `${SITE.url}/services/${svc.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) notFound();

  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${svc.slug}`,
    name: svc.title,
    description: svc.description,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: ["IN", "US", "AE", "GB", "SG", "AU"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${svc.title} deliverables`,
      itemListElement: svc.deliverables.map((d, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: d },
      })),
    },
  };

  return (
    <>
      <ServicePageClient svc={svc} others={others} bookingUrl={SITE.bookingUrl} />
      <Script
        id={`ld-svc-${svc.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
