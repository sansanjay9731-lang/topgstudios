"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";

interface LogoProps {
  variant?: "full" | "mark" | "icon";
  size?: "sm" | "md" | "lg" | "xl";
  monochrome?: boolean;
  className?: string;
  href?: string;
  animate?: boolean;
}

/* ─── SVG Mark ─────────────────────────────────────────────────────────────── */
export function StealthJetSvg({
  className = "w-full h-full",
  monochrome = false,
  showRing = false,
  glow = true,
}: {
  className?: string;
  monochrome?: boolean;
  showRing?: boolean;
  glow?: boolean;
}) {
  const G = monochrome ? "#CFCFCF" : "#00FF66";
  const filterBlur = glow ? "4" : "0";

  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {/* ── glow filters ── */}
        <filter id="fg" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation={filterBlur} result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="fg2" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* ── chrome metallic gradients ── */}
        {/* top blade – left lit face */}
        <linearGradient id="tbl" x1="97" y1="10" x2="94" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E4E4E7" />
          <stop offset="60%" stopColor="#71717A" />
          <stop offset="100%" stopColor="#27272A" />
        </linearGradient>
        {/* top blade – right shadow face */}
        <linearGradient id="tbr" x1="103" y1="10" x2="106" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A1A1AA" />
          <stop offset="60%" stopColor="#52525B" />
          <stop offset="100%" stopColor="#18181B" />
        </linearGradient>
        {/* bottom blade */}
        <linearGradient id="bbl" x1="97" y1="190" x2="94" y2="126" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#52525B" />
          <stop offset="100%" stopColor="#27272A" />
        </linearGradient>
        <linearGradient id="bbr" x1="103" y1="190" x2="106" y2="126" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3F3F46" />
          <stop offset="100%" stopColor="#18181B" />
        </linearGradient>
        {/* left wing – upper lit face */}
        <linearGradient id="lwu" x1="82" y1="90" x2="10" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#71717A" />
          <stop offset="100%" stopColor="#27272A" />
        </linearGradient>
        {/* left wing – lower shadow face */}
        <linearGradient id="lwl" x1="82" y1="110" x2="10" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3F3F46" />
          <stop offset="100%" stopColor="#18181B" />
        </linearGradient>
        {/* left wing – inner chrome chine */}
        <linearGradient id="lwc" x1="82" y1="90" x2="68" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A1A1AA" />
          <stop offset="100%" stopColor="#52525B" />
        </linearGradient>
        {/* right wing */}
        <linearGradient id="rwu" x1="118" y1="90" x2="190" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A1A1AA" />
          <stop offset="100%" stopColor="#3F3F46" />
        </linearGradient>
        <linearGradient id="rwl" x1="118" y1="110" x2="190" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#52525B" />
          <stop offset="100%" stopColor="#27272A" />
        </linearGradient>
        <linearGradient id="rwc" x1="118" y1="90" x2="132" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4D4D8" />
          <stop offset="100%" stopColor="#71717A" />
        </linearGradient>
        {/* center diamond glow */}
        <radialGradient id="cdg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={G} stopOpacity="1" />
          <stop offset="55%" stopColor={G} stopOpacity="0.85" />
          <stop offset="100%" stopColor={G} stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* ── Radar Ring (icon variant) ── */}
      {showRing && (
        <g>
          <circle cx="100" cy="100" r="88"
            stroke={G} strokeWidth="1.5" strokeDasharray="4 7"
            fill="none" opacity="0.25" />
          <circle cx="100" cy="100" r="80"
            stroke={G} strokeWidth="2.5"
            strokeDasharray="195 14 195 14"
            fill="none" opacity="0.85"
            filter="url(#fg)" />
        </g>
      )}

      {/* ══════════════════════════════════════
          STEALTH STAR AIRFRAME
          4-bladed fighter / shuriken silhouette
          matching the Top Gun Studios brand sheet
      ══════════════════════════════════════ */}

      {/* ── LEFT WING ── */}
      {/* Upper lit face */}
      <polygon points="82,92  10,100  82,100" fill="url(#lwu)" />
      {/* Lower shadow face */}
      <polygon points="82,100 10,100  82,108" fill="url(#lwl)" />
      {/* Inner chrome chine (secondary facet for 3-D depth) */}
      <polygon points="82,92  82,108  68,100" fill="url(#lwc)" />
      {/* Neon leading-edge accent */}
      <line x1="82" y1="92" x2="10" y2="100" stroke={G} strokeWidth="0.9" opacity="0.75" filter="url(#fg)" />
      <line x1="82" y1="108" x2="10" y2="100" stroke={G} strokeWidth="0.4" opacity="0.35" />

      {/* ── RIGHT WING ── */}
      <polygon points="118,92  190,100 118,100" fill="url(#rwu)" />
      <polygon points="118,100 190,100 118,108" fill="url(#rwl)" />
      <polygon points="118,92  118,108 132,100" fill="url(#rwc)" />
      <line x1="118" y1="92"  x2="190" y2="100" stroke={G} strokeWidth="0.9" opacity="0.75" filter="url(#fg)" />
      <line x1="118" y1="108" x2="190" y2="100" stroke={G} strokeWidth="0.4" opacity="0.35" />

      {/* ── TOP BLADE (forward fuselage spine) ── */}
      {/* Left lit face */}
      <polygon points="100,10  94,72  100,76" fill="url(#tbl)" />
      {/* Right shadow face */}
      <polygon points="100,10  106,72 100,76" fill="url(#tbr)" />
      {/* Spine divider */}
      <line x1="100" y1="10" x2="100" y2="76" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.6" />
      {/* Tip specular */}
      <polygon points="100,10 102,20 100,26" fill="#F4F4F5" opacity="0.6" />

      {/* ── BOTTOM BLADE (tail) ── */}
      <polygon points="100,190  94,128  100,124" fill="url(#bbl)" />
      <polygon points="100,190  106,128 100,124" fill="url(#bbr)" />
      <line x1="100" y1="190" x2="100" y2="124" stroke="#0a0a0a" strokeWidth="0.6" opacity="0.6" />

      {/* ── COCKPIT / CENTRE DIAMOND ── */}
      {/* Ambient outer glow blob */}
      <polygon points="100,64 136,100 100,136 64,100"
        fill={G} opacity="0.18" filter="url(#fg2)" />
      {/* Main glowing diamond */}
      <polygon points="100,74 124,100 100,126 76,100"
        fill="url(#cdg)" filter="url(#fg)" />
      {/* Inner bright core */}
      <polygon points="100,82 116,100 100,118 84,100"
        fill={G} opacity="0.95" />
      {/* Cockpit slit (dark lens) */}
      <polygon points="100,88 109,100 100,112 91,100"
        fill={monochrome ? "#555" : "#003D1E"} />
      {/* Specular highlight */}
      <polygon points="100,88 109,100 100,100"
        fill="#33FF85" opacity={monochrome ? 0.4 : 0.65} />

      {/* ── Wing-tip navigation lights ── */}
      <circle cx="10"  cy="100" r="2.5" fill={G} opacity="0.9" filter="url(#fg)" />
      <circle cx="190" cy="100" r="2.5" fill={G} opacity="0.9" filter="url(#fg)" />
    </svg>
  );
}

/* ─── Wordmark ──────────────────────────────────────────────────────────────── */
export function TopGunWordmark({
  className = "",
  monochrome = false,
  size = "md",
}: {
  className?: string;
  monochrome?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const accent = monochrome ? "#CFCFCF" : "var(--color-accent)";
  const sz = {
    sm:  { title: "text-lg",   sub: "text-[8px]",  dash: "w-4",  gap: "mt-0.5" },
    md:  { title: "text-[22px]", sub: "text-[9px]", dash: "w-5",  gap: "mt-1" },
    lg:  { title: "text-4xl",  sub: "text-xs",    dash: "w-8",  gap: "mt-1.5" },
    xl:  { title: "text-6xl",  sub: "text-sm",    dash: "w-12", gap: "mt-2" },
  }[size];

  return (
    <div className={`flex flex-col select-none ${className}`}>
      <span
        className={`font-[var(--font-display)] font-bold uppercase tracking-tight leading-none text-white ${sz.title}`}
        style={{ letterSpacing: "-0.03em" }}
      >
        TOP GUN
      </span>
      <div className={`flex items-center gap-1.5 ${sz.gap}`}>
        <span className={`h-px ${sz.dash}`} style={{ background: accent, opacity: 0.6 }} />
        <span
          className={`font-[var(--font-display)] font-semibold uppercase leading-none ${sz.sub}`}
          style={{ color: accent, letterSpacing: "0.32em" }}
        >
          STUDIOS
        </span>
        <span className={`h-px ${sz.dash}`} style={{ background: accent, opacity: 0.6 }} />
      </div>
    </div>
  );
}

/* ─── Animated Logo Component ───────────────────────────────────────────────── */
export function TopGunLogo({
  variant = "full",
  size = "md",
  monochrome = false,
  className = "",
  href = "/",
  animate = false,
}: LogoProps) {
  const sz = {
    sm:  { jet: "w-8 h-8",   ring: "w-10 h-10",  gap: "gap-2.5" },
    md:  { jet: "w-11 h-11", ring: "w-13 h-13",  gap: "gap-3.5" },
    lg:  { jet: "w-16 h-16", ring: "w-20 h-20",  gap: "gap-5"   },
    xl:  { jet: "w-24 h-24", ring: "w-28 h-28",  gap: "gap-6"   },
  }[size];

  /* Jet mark spring entrance – drops in from above on first render */
  const jetVariants: Variants = {
    hidden: { opacity: 0, y: animate ? -32 : 0, scale: animate ? 0.7 : 1 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: "easeOut", delay: animate ? 0.1 : 0 },
    },
  };
  /* Wordmark fades in after jet lands */
  const wordVariants: Variants = {
    hidden: { opacity: 0, x: animate ? -10 : 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: "easeOut", delay: animate ? 0.45 : 0 },
    },
  };

  const jetEl = (
    <motion.div
      className={`relative flex items-center justify-center ${sz.jet}`}
      variants={jetVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.08, transition: { duration: 0.25 } }}
    >
      {/* Engine glow behind jet (idle throb) */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: monochrome
            ? "radial-gradient(circle, rgba(200,200,200,0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(0,255,102,0.12) 0%, transparent 70%)",
          animation: "jet-idle-glow 2.8s ease-in-out infinite",
        }}
      />
      <StealthJetSvg
        monochrome={monochrome}
        showRing={variant === "icon"}
        glow
      />
    </motion.div>
  );

  const wordEl = variant !== "icon" && (
    <motion.div variants={wordVariants} initial="hidden" animate="visible">
      <TopGunWordmark monochrome={monochrome} size={size} />
    </motion.div>
  );

  const inner = (
    <div className={`inline-flex items-center group ${sz.gap} ${className}`}>
      {jetEl}
      {wordEl}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center focus:outline-none">
        {inner}
      </Link>
    );
  }
  return inner;
}
