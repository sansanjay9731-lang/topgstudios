"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Container, Eyebrow, H2, Lead } from "./ui";
import { TopGunLogo, StealthJetSvg, TopGunWordmark } from "./logo";
import { SITE } from "@/lib/site";

const LOGO_VARIANTS = [
  { id: "hero", label: "Icon Version", desc: "HUD Radar Ring with stealth jet core" },
  { id: "horizontal", label: "Horizontal", desc: "Primary digital & navigation lockup" },
  { id: "stacked", label: "Stacked", desc: "Centric editorial & apparel orientation" },
  { id: "monochrome", label: "Monochrome", desc: "Titanium white for high contrast & print" },
];

export function BrandShowcase() {
  const [activeVariant, setActiveVariant] = useState("hero");
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section id="brand-system" className="relative border-t border-[var(--color-line)] py-24 sm:py-32 overflow-hidden bg-[var(--color-bg)]">
      {/* Background Ambience */}
      <div className="bg-aura absolute inset-0 opacity-40 pointer-events-none" />
      <div className="bg-grid absolute inset-0 opacity-30 pointer-events-none" />

      <Container className="relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Eyebrow>Brand Identity System</Eyebrow>
          <H2 className="mt-4">
            Engineered for <span className="text-[var(--color-accent)] text-glow">Supersonic</span> Dominance.
          </H2>
          <Lead className="mt-4">
            The upgraded Top Gun Studios visual identity marries aerospace stealth aerodynamics with high-contrast cyber radar aesthetics. Built for high authority and instant memorability.
          </Lead>
        </div>

        {/* 5 Core Pillars Ribbon */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {SITE.brandValues.map((pillar) => (
            <div
              key={pillar.label}
              className="group relative overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-card)]/80 p-4 transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-elev)]"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[var(--color-fg)]">
                  {pillar.label}
                </span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-[var(--color-fg-muted)]">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main Interactive Stage */}
        <div className="mt-16 grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Logo Viewer (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-bg-elev)]/90 p-8 backdrop-blur-xl relative overflow-hidden">
            {/* Corner HUD Markers */}
            <div className="absolute top-3 left-4 font-mono text-[10px] text-[var(--color-fg-dim)] tracking-widest">
              SYS.ID // TOP GUN STUDIOS
            </div>
            <div className="absolute top-3 right-4 font-mono text-[10px] text-[var(--color-accent)] tracking-widest flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] pulse-dot" />
              LIVE VECTOR
            </div>

            {/* Central Stage Display */}
            <div className="my-10 min-h-[300px] flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                {activeVariant === "hero" && (
                  <motion.div
                    key="hero"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center gap-6"
                  >
                    <div className="relative h-44 w-44 flex items-center justify-center">
                      <StealthJetSvg showRing={true} glow={true} className="w-full h-full drop-shadow-[0_0_24px_rgba(0,255,102,0.4)]" />
                    </div>
                    <TopGunWordmark size="lg" className="items-center" />
                  </motion.div>
                )}

                {activeVariant === "horizontal" && (
                  <motion.div
                    key="horizontal"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-wrap items-center justify-center gap-6"
                  >
                    <div className="h-20 w-20">
                      <StealthJetSvg showRing={false} glow={true} className="w-full h-full drop-shadow-[0_0_20px_rgba(0,255,102,0.35)]" />
                    </div>
                    <TopGunWordmark size="lg" />
                  </motion.div>
                )}

                {activeVariant === "stacked" && (
                  <motion.div
                    key="stacked"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center gap-5"
                  >
                    <div className="h-24 w-24">
                      <StealthJetSvg showRing={false} glow={true} className="w-full h-full drop-shadow-[0_0_20px_rgba(0,255,102,0.35)]" />
                    </div>
                    <TopGunWordmark size="lg" className="items-center" />
                  </motion.div>
                )}

                {activeVariant === "monochrome" && (
                  <motion.div
                    key="monochrome"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center gap-6"
                  >
                    <div className="h-32 w-32">
                      <StealthJetSvg monochrome={true} showRing={false} glow={false} className="w-full h-full" />
                    </div>
                    <TopGunWordmark monochrome={true} size="lg" className="items-center" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-[var(--color-line)]">
              {LOGO_VARIANTS.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVariant(v.id)}
                  className={`rounded-lg px-3 py-2 text-left transition-all ${
                    activeVariant === v.id
                      ? "bg-[var(--color-accent)]/10 border border-[var(--color-accent)] text-[var(--color-fg)]"
                      : "border border-[var(--color-line)] bg-transparent text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-white/5"
                  }`}
                >
                  <div className="font-mono text-xs font-semibold">{v.label}</div>
                  <div className="text-[10px] opacity-70 truncate">{v.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Color Palette & 3D Real-World Implementation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Color Palette Matrix */}
            <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg-card)] p-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
                <span>COLOR SPECIFICATIONS</span>
                <span className="text-[var(--color-accent)]">HEX & HSL</span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { name: "ACCENT GREEN", hex: "#00FF66", bg: "bg-[#00FF66]", text: "text-black", desc: "Radar / Jet Glow" },
                  { name: "DEEP BLACK", hex: "#0A0A0A", bg: "bg-[#0A0A0A] border border-white/20", text: "text-white", desc: "Stealth Canvas" },
                  { name: "CLEAN WHITE", hex: "#F2F2F2", bg: "bg-[#F2F2F2]", text: "text-black", desc: "Titanium Text" },
                ].map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => copyToClipboard(c.hex)}
                    className="group relative flex flex-col items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-bg-elev)] p-3 text-center transition-all hover:border-[var(--color-accent)]"
                    title={`Click to copy ${c.hex}`}
                  >
                    <div className={`h-12 w-full rounded-lg ${c.bg} flex items-center justify-center font-mono text-[10px] font-bold ${c.text}`}>
                      {copiedColor === c.hex ? "COPIED!" : c.hex}
                    </div>
                    <div className="mt-2 font-mono text-[10px] font-bold tracking-tight text-[var(--color-fg)]">
                      {c.name}
                    </div>
                    <div className="text-[9px] text-[var(--color-fg-muted)]">
                      {c.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3D Physical Mockups Grid */}
            <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg-card)] p-6 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)] mb-4">
                <span>3D MATERIAL APPLICATION</span>
                <span>PHYSICAL REALIZATION</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* 3D Embossed Card */}
                <div className="group relative overflow-hidden rounded-xl border border-[var(--color-line)] aspect-[4/3] bg-black">
                  <Image
                    src="/brand-mockup-card.jpg"
                    alt="Top Gun Studios embossed executive card mockup"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                    <span className="font-mono text-[9px] tracking-wider text-white uppercase">
                      Executive Matte Emboss
                    </span>
                  </div>
                </div>

                {/* 3D Illuminated Facade */}
                <div className="group relative overflow-hidden rounded-xl border border-[var(--color-line)] aspect-[4/3] bg-black">
                  <Image
                    src="/brand-facade.jpg"
                    alt="Top Gun Studios architectural signage facade"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                    <span className="font-mono text-[9px] tracking-wider text-white uppercase">
                      Architectural Signage
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--color-line)] flex items-center justify-between font-mono text-[11px] text-[var(--color-fg-muted)]">
                <span>Format: Scalable Vector & WebGL</span>
                <span className="text-[var(--color-accent)]">60 FPS Ready</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
