"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "mark" | "icon" | "stacked" | "wordmark";
  size?: "sm" | "md" | "lg" | "xl";
  monochrome?: boolean;
  className?: string;
  glow?: boolean;
  href?: string;
}

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
  const accentGreen = monochrome ? "#F2F2F2" : "#00FF66";
  const glowId = monochrome ? "glow-mono" : "glow-green";

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Neon Green Glow Filter */}
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation={glow ? "3" : "0"} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Linear Gradients for 3D Stealth Facets */}
        <linearGradient id="fuselage-left" x1="100" y1="20" x2="80" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4D4D8" />
          <stop offset="40%" stopColor="#71717A" />
          <stop offset="100%" stopColor="#18181B" />
        </linearGradient>

        <linearGradient id="fuselage-right" x1="100" y1="20" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A1A1AA" />
          <stop offset="40%" stopColor="#52525B" />
          <stop offset="100%" stopColor="#09090B" />
        </linearGradient>

        <linearGradient id="wing-left-upper" x1="100" y1="80" x2="15" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3F3F46" />
          <stop offset="60%" stopColor="#27272A" />
          <stop offset="100%" stopColor="#18181B" />
        </linearGradient>

        <linearGradient id="wing-right-upper" x1="100" y1="80" x2="185" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#52525B" />
          <stop offset="60%" stopColor="#27272A" />
          <stop offset="100%" stopColor="#09090B" />
        </linearGradient>

        <linearGradient id="wing-left-lower" x1="25" y1="105" x2="75" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#18181B" />
          <stop offset="100%" stopColor="#09090B" />
        </linearGradient>

        <linearGradient id="wing-right-lower" x1="175" y1="105" x2="125" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#27272A" />
          <stop offset="100%" stopColor="#18181B" />
        </linearGradient>

        <linearGradient id="neon-glow-center" x1="100" y1="70" x2="100" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={accentGreen} stopOpacity="1" />
          <stop offset="70%" stopColor={accentGreen} stopOpacity="0.85" />
          <stop offset="100%" stopColor={accentGreen} stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Radar Ring (for Icon Version) */}
      {showRing && (
        <g className="transition-all duration-300">
          {/* Outer Radar Glow Ring */}
          <circle
            cx="100"
            cy="100"
            r="82"
            stroke={accentGreen}
            strokeWidth="3.5"
            strokeDasharray="210 12 210 12"
            strokeDashoffset="11"
            fill="none"
            filter={`url(#${glowId})`}
            opacity="0.9"
          />
          {/* Subtle Inner Circular Grid Track */}
          <circle
            cx="100"
            cy="100"
            r="88"
            stroke={accentGreen}
            strokeWidth="1"
            strokeDasharray="4 8"
            fill="none"
            opacity="0.25"
          />
        </g>
      )}

      {/* STEALTH JET AIRFRAME */}
      <g id="stealth-jet-body" transform="translate(0, 0)">
        {/* OUTER MAIN WINGS (Charcoal Stealth Titanium) */}
        {/* Left Wing Base */}
        <polygon points="100,75 80,88 20,105 60,118 78,110" fill="url(#wing-left-upper)" />
        <polygon points="20,105 55,112 75,122 60,118" fill="url(#wing-left-lower)" />

        {/* Right Wing Base */}
        <polygon points="100,75 120,88 180,105 140,118 122,110" fill="url(#wing-right-upper)" />
        <polygon points="180,105 145,112 125,122 140,118" fill="url(#wing-right-lower)" />

        {/* NEON GREEN WING ACCENTS (Glowing Inner Wing Channels) */}
        <polygon
          points="82,90 28,104 62,112 76,98"
          fill={accentGreen}
          filter={`url(#${glowId})`}
          opacity="0.95"
        />
        <polygon
          points="118,90 172,104 138,112 124,98"
          fill={accentGreen}
          filter={`url(#${glowId})`}
          opacity="0.95"
        />

        {/* INNER CHINE STABILIZERS (Intermediate Angle) */}
        <polygon points="100,68 85,82 82,112 94,116" fill="#222328" />
        <polygon points="100,68 115,82 118,112 106,116" fill="#2B2C33" />

        {/* TWIN REAR VENTRAL EXHAUSTS */}
        <polygon points="90,118 84,136 94,138 98,120" fill="#18181B" />
        <polygon points="110,118 116,136 106,138 102,120" fill="#121214" />
        <polygon points="92,135 100,140 108,135 100,132" fill="#09090B" />

        {/* MAIN FUSELAGE SPINE (Left facet - lighter highlight) */}
        <polygon points="100,24 88,68 86,104 100,126" fill="url(#fuselage-left)" />

        {/* MAIN FUSELAGE SPINE (Right facet - deeper contrast) */}
        <polygon points="100,24 112,68 114,104 100,126" fill="url(#fuselage-right)" />

        {/* NOSE CONE TIP (Sharp aerodynamic titanium spike) */}
        <polygon points="100,16 97,32 100,34 103,32" fill="#F4F4F5" />
        <polygon points="97,32 93,52 100,48 100,34" fill="#E4E4E7" />
        <polygon points="103,32 107,52 100,48 100,34" fill="#A1A1AA" />

        {/* COCKPIT CANOPY (Diamond stealth glass) */}
        <polygon points="100,48 93,72 100,82 107,72" fill="#0A0A0C" stroke="#27272A" strokeWidth="1" />
        {/* Cockpit Inner Glass Specular */}
        <polygon points="100,52 96,70 100,78 100,52" fill="#2E3038" />
        <polygon points="100,52 104,70 100,78 100,52" fill="#1A1B20" />

        {/* CENTER VENTRAL NEON GREEN CORE (Signature glowing dagger/keel) */}
        <polygon
          points="100,82 94,108 100,136 106,108"
          fill="url(#neon-glow-center)"
          filter={`url(#${glowId})`}
        />
        {/* High-intensity neon green core spine */}
        <polygon
          points="100,86 97,105 100,128 103,105"
          fill={accentGreen}
          filter={`url(#${glowId})`}
        />

        {/* WING TIP NAVIGATION EDGES */}
        <line x1="20" y1="105" x2="38" y2="108" stroke={accentGreen} strokeWidth="1.5" opacity="0.8" />
        <line x1="180" y1="105" x2="162" y2="108" stroke={accentGreen} strokeWidth="1.5" opacity="0.8" />
      </g>
    </svg>
  );
}

export function TopGunWordmark({
  className = "",
  monochrome = false,
  size = "md",
  title = "TOP GUN",
  subtitle = "STUDIOS",
}: {
  className?: string;
  monochrome?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  title?: string;
  subtitle?: string;
}) {
  const accentColor = monochrome ? "text-[#F2F2F2]" : "text-[var(--color-accent)]";

  const sizeStyles = {
    sm: {
      title: "text-lg tracking-tight",
      sub: "text-[8px] tracking-[0.26em]",
      dash: "w-3",
    },
    md: {
      title: "text-2xl tracking-tighter",
      sub: "text-[10px] tracking-[0.32em]",
      dash: "w-5",
    },
    lg: {
      title: "text-4xl tracking-tighter",
      sub: "text-xs tracking-[0.36em]",
      dash: "w-8",
    },
    xl: {
      title: "text-6xl tracking-tighter",
      sub: "text-sm tracking-[0.42em]",
      dash: "w-12",
    },
  }[size];

  return (
    <div className={`flex flex-col select-none ${className}`}>
      {/* Primary Wordmark with Stylized 'G' Arrow Accent */}
      <div className="flex items-center">
        <span className={`font-[var(--font-display)] font-bold uppercase text-white leading-none ${sizeStyles.title}`}>
          {title}
        </span>
      </div>

      {/* Subtitle with High-Tech Precision Lateral Dashes */}
      <div className="mt-1 flex items-center gap-2">
        <span className={`h-px bg-current opacity-40 ${sizeStyles.dash} ${accentColor}`} />
        <span
          className={`font-[var(--font-display)] font-semibold uppercase ${accentColor} leading-none ${sizeStyles.sub}`}
        >
          {subtitle}
        </span>
        <span className={`h-px bg-current opacity-40 ${sizeStyles.dash} ${accentColor}`} />
      </div>
    </div>
  );
}

export function TopGunLogo({
  variant = "full",
  size = "md",
  monochrome = false,
  className = "",
  glow = true,
  href = "/",
}: LogoProps) {
  const sizeMap = {
    sm: { box: "h-8", jet: "w-8 h-8", ring: "w-9 h-9", gap: "gap-2.5" },
    md: { box: "h-11", jet: "w-11 h-11", ring: "w-12 h-12", gap: "gap-3.5" },
    lg: { box: "h-16", jet: "w-16 h-16", ring: "w-18 h-18", gap: "gap-5" },
    xl: { box: "h-24", jet: "w-24 h-24", ring: "w-28 h-28", gap: "gap-6" },
  }[size];

  const content = (
    <div className={`group inline-flex items-center transition-transform duration-200 ${sizeMap.gap} ${className}`}>
      {/* Mark Only */}
      {variant === "mark" && (
        <div className={`relative ${sizeMap.jet} flex items-center justify-center`}>
          <StealthJetSvg monochrome={monochrome} showRing={false} glow={glow} />
        </div>
      )}

      {/* Icon Ring Version */}
      {variant === "icon" && (
        <div className={`relative ${sizeMap.ring} flex items-center justify-center`}>
          <StealthJetSvg monochrome={monochrome} showRing={true} glow={glow} />
        </div>
      )}

      {/* Horizontal Full Lockup */}
      {variant === "full" && (
        <>
          <div className={`relative ${sizeMap.jet} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
            <StealthJetSvg monochrome={monochrome} showRing={false} glow={glow} />
          </div>
          <TopGunWordmark monochrome={monochrome} size={size} />
        </>
      )}

      {/* Stacked Lockup */}
      {variant === "stacked" && (
        <div className="flex flex-col items-center text-center gap-3">
          <div className={`relative ${sizeMap.jet} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
            <StealthJetSvg monochrome={monochrome} showRing={true} glow={glow} />
          </div>
          <TopGunWordmark monochrome={monochrome} size={size} className="items-center" />
        </div>
      )}

      {/* Wordmark Only */}
      {variant === "wordmark" && (
        <TopGunWordmark monochrome={monochrome} size={size} />
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
