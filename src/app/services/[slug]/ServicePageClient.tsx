"use client";

import Link from "next/link";
import { Button, Card, Container, Eyebrow, H2, Lead, Section } from "@/components/ui";
import {
  FadeIn,
  Stagger,
  StaggerItem,
  MagneticButton,
  HoverLift,
  Tilt,
} from "@/components/motion";
import { motion } from "motion/react";

type ServiceLike = {
  slug: string;
  title: string;
  short: string;
  description: string;
  deliverables: readonly string[];
};

export function ServicePageClient({
  svc,
  others,
  bookingUrl,
}: {
  svc: ServiceLike;
  others: ServiceLike[];
  bookingUrl: string;
}) {
  return (
    <>
      <Section className="pt-24 sm:pt-32 overflow-hidden">
        <div className="absolute inset-0 hud-grid opacity-50" aria-hidden />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#services"
              className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-muted)] hover:text-[var(--color-accent)]"
            >
              ← All services
            </Link>
          </motion.div>
          <div className="mt-8 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <Eyebrow>Service · /services/{svc.slug}</Eyebrow>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="mt-6 font-[var(--font-display)] text-5xl sm:text-6xl font-medium tracking-tight leading-[1.05]"
              >
                {svc.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Lead className="mt-7">{svc.description}</Lead>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <MagneticButton>
                  <Button href={bookingUrl} external size="lg">
                    Scope this engagement
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button href="/contact" variant="outline" size="lg">
                    Send a brief
                  </Button>
                </MagneticButton>
              </motion.div>
            </div>
            <FadeIn direction="right" delay={0.25} className="lg:col-span-4">
              <Tilt max={5}>
                <div className="rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-card)] p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
                    Engagement shape
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-[var(--color-fg-muted)]">
                    <li className="flex justify-between">
                      <span>Kickoff</span>
                      <span className="text-[var(--color-fg)]">7–10 days</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Engagement</span>
                      <span className="text-[var(--color-fg)]">3–12 months</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Model</span>
                      <span className="text-[var(--color-fg)]">Retainer / project</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Coverage</span>
                      <span className="text-[var(--color-fg)]">Global</span>
                    </li>
                  </ul>
                </div>
              </Tilt>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <FadeIn>
            <Eyebrow>Deliverables</Eyebrow>
            <H2 className="mt-6">What you actually get.</H2>
          </FadeIn>
          <Stagger
            className="mt-12 grid gap-px bg-[var(--color-line)] md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-[var(--color-line)]"
            gap={0.06}
          >
            {svc.deliverables.map((d, i) => (
              <StaggerItem key={d}>
                <HoverLift className="h-full bg-[var(--color-bg)] p-7">
                  <span className="font-mono text-xs text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-[var(--color-fg)] font-medium">{d}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)] bg-[var(--color-bg-elev)]">
        <Container>
          <FadeIn>
            <Eyebrow>Adjacent capabilities</Eyebrow>
            <H2 className="mt-6">Pair it with.</H2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3" gap={0.1}>
            {others.map((s) => (
              <StaggerItem key={s.slug}>
                <HoverLift>
                  <Card>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-dim)]">
                      /services/{s.slug}
                    </span>
                    <h3 className="mt-5 font-[var(--font-display)] text-xl font-medium tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--color-fg-muted)] leading-relaxed">
                      {s.short}
                    </p>
                    <Link
                      href={`/services/${s.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent)] group"
                    >
                      Explore
                      <motion.span
                        className="inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </Card>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <FadeIn>
            <div className="rounded-3xl border border-[var(--color-line-strong)] bg-[var(--color-bg-card)] p-10 lg:p-14">
              <H2>
                Ready to deploy <span className="text-[var(--color-accent)]">{svc.title}</span>?
              </H2>
              <Lead className="mt-6">
                30-minute discovery call. We map your needs, scope the engagement, and quote.
              </Lead>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton>
                  <Button href={bookingUrl} external size="lg">
                    Book a call
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button href="/contact" variant="outline" size="lg">
                    Send a brief
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
