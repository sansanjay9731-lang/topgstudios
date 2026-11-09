"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface LogoProps {
  variant?: "full" | "emblem" | "icon" | "mark";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  animate?: boolean;
  withAfterburner?: boolean;
}

export function StealthJetIcon({
  size = "md",
  className = "",
  animate = true,
  withAfterburner = true,
  showRing = false,
  glow = true,
  monochrome = false,
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
  const ref = useRef<HTMLDivElement>(null);

  // 3D Gyroscope mouse tracking for interactive banking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const sz = {
    sm: { box: "h-9 w-9", jet: 36, plume: "h-4 w-2.5 -bottom-3", reticle: 54 },
    md: { box: "h-11 w-11", jet: 44, plume: "h-6 w-3 -bottom-4", reticle: 68 },
    lg: { box: "h-16 w-16", jet: 64, plume: "h-8 w-4 -bottom-6", reticle: 96 },
    xl: { box: "h-28 w-28", jet: 112, plume: "h-14 w-7 -bottom-10", reticle: 160 },
  }[size];

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center select-none perspective-800 ${sz.box} ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* ── Holographic Targeting Reticle on Hover ── */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.05 : 0.85,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="pointer-events-none absolute inset-[-25%] z-0 flex items-center justify-center"
      >
        <div className="relative h-full w-full rounded-full border border-emerald-500/25 border-dashed" />
        <span className="absolute -top-1 font-mono text-[8px] text-emerald-400 tracking-widest">
          [LOCK]
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[140%] w-[1px] bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
          <div className="w-[140%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        </div>
      </motion.div>

      {/* ── Ambient Radial Glow Backlight ── */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.9 : 0.35,
          scale: isHovered ? 1.25 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 z-0 rounded-full bg-gradient-to-b from-emerald-500/30 via-cyan-500/15 to-transparent blur-md"
      />

      {/* ── 3D Banking Jet Airframe ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: animate ? (isHovered ? -3 : [0, -2, 0]) : 0,
          scale: isHovered ? 1.06 : 1,
        }}
        transition={{
          y: { repeat: animate ? Infinity : 0, duration: 3, ease: "easeInOut" },
          scale: { duration: 0.25 },
        }}
        className="relative z-10 flex h-full w-full items-center justify-center"
      >
        {/* Stealth Fighter Image with Specular Light */}
        <div className="relative h-full w-full">
          <Image
            src="/stealth-jet.png"
            alt="Top Gun Stealth Jet F-19"
            width={sz.jet * 2}
            height={sz.jet * 2}
            priority
            className="h-full w-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          />

          {/* Sweeping Specular Shimmer across facets on hover */}
          <motion.div
            initial={{ x: "-150%", opacity: 0 }}
            animate={isHovered ? { x: "150%", opacity: 0.8 } : { x: "-150%", opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut", repeat: isHovered ? Infinity : 0, repeatDelay: 1.5 }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/35 to-transparent skew-x-12 mix-blend-overlay"
          />
        </div>

        {/* ── Twin Afterburner Thruster Plumes ── */}
        {withAfterburner && (
          <div className="pointer-events-none absolute bottom-0 flex justify-center gap-1.5 z-0">
            {/* Left Nozzle Flame */}
            <motion.div
              animate={{
                scaleY: isHovered ? [1.2, 1.8, 1.3] : [0.8, 1.1, 0.8],
                opacity: isHovered ? [0.85, 1, 0.9] : [0.4, 0.65, 0.4],
              }}
              transition={{ repeat: Infinity, duration: 0.25, ease: "easeInOut" }}
              className={`origin-top rounded-b-full bg-gradient-to-b from-white via-emerald-400 to-transparent shadow-[0_0_15px_#00ff66] ${sz.plume}`}
            >
              {/* Mach diamond inside flame */}
              <div className="mx-auto mt-1 h-1 w-1 rounded-full bg-cyan-200 blur-[0.5px]" />
            </motion.div>

            {/* Right Nozzle Flame */}
            <motion.div
              animate={{
                scaleY: isHovered ? [1.3, 1.9, 1.2] : [0.75, 1.15, 0.75],
                opacity: isHovered ? [0.9, 1, 0.85] : [0.45, 0.7, 0.45],
              }}
              transition={{ repeat: Infinity, duration: 0.28, ease: "easeInOut" }}
              className={`origin-top rounded-b-full bg-gradient-to-b from-white via-emerald-400 to-transparent shadow-[0_0_15px_#00ff66] ${sz.plume}`}
            >
              <div className="mx-auto mt-1 h-1 w-1 rounded-full bg-cyan-200 blur-[0.5px]" />
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function TopGunWordmark({
  size = "md",
  className = "",
  monochrome = false,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  monochrome?: boolean;
}) {
  const sz = {
    sm: { title: "text-base tracking-[0.08em]", sub: "text-[8px] tracking-[0.38em]", gap: "gap-0" },
    md: { title: "text-[19px] tracking-[0.1em]", sub: "text-[9px] tracking-[0.42em]", gap: "gap-0.5" },
    lg: { title: "text-3xl tracking-[0.12em]", sub: "text-xs tracking-[0.45em]", gap: "gap-1" },
    xl: { title: "text-5xl tracking-[0.14em]", sub: "text-sm tracking-[0.5em]", gap: "gap-1.5" },
  }[size];

  return (
    <div className={`flex flex-col justify-center select-none ${sz.gap} ${className}`}>
      {/* TOP GUN Header with Sci-Fi Stencil Aesthetics */}
      <div className="flex items-center gap-1.5 leading-none">
        <span
          className={`font-[var(--font-display)] font-extrabold uppercase text-white ${sz.title}`}
          style={{
            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          TOP GUN
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#00ff66]" />
      </div>

      {/* STUDIOS with tracked geometric sans */}
      <span
        className={`font-mono font-medium uppercase text-neutral-400 group-hover:text-emerald-400 transition-colors leading-none ${sz.sub}`}
      >
        STUDIOS
      </span>
    </div>
  );
}

export function TopGunLogo({
  variant = "full",
  size = "md",
  className = "",
  href = "/",
  animate = true,
}: LogoProps) {
  // Variant: Standalone Icon
  if (variant === "icon" || variant === "mark") {
    const iconContent = <StealthJetIcon size={size} animate={animate} className={className} />;
    if (href) {
      return (
        <Link href={href} className="inline-flex items-center" aria-label="Top Gun Studios">
          {iconContent}
        </Link>
      );
    }
    return iconContent;
  }

  // Variant: Large Stacked Emblem (like the uploaded image)
  if (variant === "emblem") {
    const emblemContent = (
      <div className={`group flex flex-col items-center justify-center gap-4 text-center ${className}`}>
        <StealthJetIcon size={size === "xl" ? "xl" : "lg"} animate={animate} />
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

  // Variant: Full Horizontal Header Lockup (default)
  const content = (
    <div className={`group flex items-center gap-3.5 transition-all ${className}`}>
      <StealthJetIcon size={size} animate={animate} />
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
