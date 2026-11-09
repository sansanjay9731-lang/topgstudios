"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

interface LogoProps {
  variant?: "full" | "emblem" | "icon" | "mark";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  animate?: boolean;
  monochrome?: boolean;
  showRing?: boolean;
  glow?: boolean;
}

export function StealthJetIcon({
  size = "md",
  className = "",
  animate = true,
  glow = true,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
  withAfterburner?: boolean;
  showRing?: boolean;
  glow?: boolean;
  monochrome?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const sz = {
    sm: { box: "h-8 w-8", px: 32 },
    md: { box: "h-10 w-10", px: 40 },
    lg: { box: "h-14 w-14", px: 56 },
    xl: { box: "h-24 w-24", px: 96 },
  }[size];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex items-center justify-center select-none ${sz.box} ${className}`}
    >
      {/* ── Soft Ambient Executive Glow Backlight ── */}
      {glow && (
        <motion.div
          animate={{
            opacity: isHovered ? 0.6 : 0.25,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="pointer-events-none absolute inset-[-15%] z-0 rounded-full bg-gradient-to-b from-emerald-500/35 via-emerald-400/15 to-transparent blur-md"
        />
      )}

      {/* ── Precision Stealth Jet Airframe with Subtle Professional Float ── */}
      <motion.div
        animate={{
          y: animate ? (isHovered ? -2 : [0, -2, 0]) : 0,
          scale: isHovered ? 1.04 : 1,
        }}
        transition={{
          y: { repeat: animate ? Infinity : 0, duration: 3.6, ease: "easeInOut" },
          scale: { type: "spring", stiffness: 350, damping: 25 },
        }}
        className="relative z-10 flex h-full w-full items-center justify-center"
      >
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/brand-jet.png"
            alt="Top Gun Studios Stealth Jet"
            width={sz.px * 2}
            height={sz.px * 2}
            priority
            className="h-full w-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
          />

          {/* ── Refined Specular Light Glint on Hover ── */}
          <motion.div
            initial={{ x: "-150%", opacity: 0 }}
            animate={isHovered ? { x: "150%", opacity: 0.6 } : { x: "-150%", opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent skew-x-12 mix-blend-overlay"
          />
        </div>
      </motion.div>
    </div>
  );
}

export function TopGunWordmark({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  monochrome?: boolean;
}) {
  const sz = {
    sm: { h: 22, w: 56 },
    md: { h: 28, w: 72 },
    lg: { h: 42, w: 108 },
    xl: { h: 64, w: 164 },
  }[size];

  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <Image
        src="/brand-text.png"
        alt="Top Gun Studios"
        width={sz.w * 2}
        height={sz.h * 2}
        priority
        style={{ height: sz.h, width: "auto" }}
        className="object-contain filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
      />
    </div>
  );
}

export function TopGunLogo({
  variant = "full",
  size = "md",
  className = "",
  href = "/",
  animate = true,
  glow = true,
}: LogoProps) {
  // Variant: Standalone Icon
  if (variant === "icon" || variant === "mark") {
    const iconContent = <StealthJetIcon size={size} animate={animate} glow={glow} className={className} />;
    if (href) {
      return (
        <Link href={href} className="inline-flex items-center" aria-label="Top Gun Studios">
          {iconContent}
        </Link>
      );
    }
    return iconContent;
  }

  // Variant: Large Stacked Emblem (exact match to uploaded reference)
  if (variant === "emblem") {
    const emblemContent = (
      <div className={`group flex flex-col items-center justify-center gap-3 text-center ${className}`}>
        <StealthJetIcon size={size === "xl" ? "xl" : "lg"} animate={animate} glow={glow} />
        <TopGunWordmark size={size} />
      </div>
    );
    if (href) {
      return (
        <Link href={href} className="inline-flex items-center" aria-label="Top Gun Studios">
          {emblemContent}
        </Link>
      );
    }
    return emblemContent;
  }

  // Variant: Full Horizontal Lockup (Default for Navigation & Headers)
  const content = (
    <div className={`group flex items-center gap-3 transition-all ${className}`}>
      <StealthJetIcon size={size} animate={animate} glow={glow} />
      <TopGunWordmark size={size} />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center" aria-label="Top Gun Studios">
        {content}
      </Link>
    );
  }

  return content;
}

export const StealthJetSvg = StealthJetIcon;
