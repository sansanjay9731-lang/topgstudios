"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 48 },
  down:  { x: 0,   y: -48 },
  left:  { x: 48,  y: 0 },
  right: { x: -48, y: 0 },
  none:  { x: 0,   y: 0 },
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className = "",
  once = true,
  amount = 0.2,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: keyof typeof motion;
} & Omit<HTMLMotionProps<"div">, "children">) {
  const reduce = useReducedMotion();
  const offset = reduce ? OFFSET.none : OFFSET[direction];
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Stagger({
  children,
  className = "",
  delay = 0,
  gap = 0.08,
  amount = 0.15,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
  amount?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
} & Omit<HTMLMotionProps<"div">, "children" | "variants" | "initial">) {
  const reduce = useReducedMotion();
  const offset = reduce ? OFFSET.none : OFFSET[direction];
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setDisplay(value);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function HoverLift({
  children,
  className = "",
  ...rest
}: {
  children: ReactNode;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({
  children,
  className = "",
  strength = 18,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 });
  const reduce = useReducedMotion();

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = ((e.clientX - cx) / r.width) * strength;
    const dy = ((e.clientY - cy) / r.height) * strength;
    x.set(dx);
    y.set(dy);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxY({
  children,
  className = "",
  intensity = 40,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      setScroll(-(center / window.innerHeight) * intensity);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [intensity, reduce]);

  return (
    <div ref={ref} className={className} style={{ transform: `translate3d(0, ${scroll}px, 0)` }}>
      {children}
    </div>
  );
}

export function Tilt({
  children,
  className = "",
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [max, -max]);
  const rotateY = useTransform(x, [-50, 50], [-max, max]);
  const reduce = useReducedMotion();

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * 100);
    y.set(((e.clientY - r.top) / r.height - 0.5) * 100);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Jet / Spaceship HUD Cursor Target Reticle ─────────────────────────────── */
export function HUDCursorReticle() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { stiffness: 450, damping: 32, mass: 0.2 });
  const smoothY = useSpring(mouseY, { stiffness: 450, damping: 32, mass: 0.2 });

  const [isLockedOn, setIsLockedOn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || typeof window === "undefined") return;

    // Only enable for desktop mice
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select");
      setIsLockedOn(!!isInteractive);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [mouseX, mouseY, isVisible, reduce]);

  if (reduce || !isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
      style={{
        x: smoothX,
        y: smoothY,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Center Laser Dot */}
      <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)] -translate-x-1/2 -translate-y-1/2" />

      {/* Fighter Jet Targeting Reticle Brackets */}
      <motion.div
        className="absolute -top-4 -left-4 w-8 h-8 pointer-events-none"
        animate={{
          scale: isLockedOn ? 1.45 : 1,
          rotate: isLockedOn ? 45 : 0,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 24 }}
      >
        {/* Top-Left Bracket */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--color-accent)] opacity-85" />
        {/* Top-Right Bracket */}
        <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--color-accent)] opacity-85" />
        {/* Bottom-Left Bracket */}
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--color-accent)] opacity-85" />
        {/* Bottom-Right Bracket */}
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--color-accent)] opacity-85" />
      </motion.div>
    </motion.div>
  );
}

/* ─── Spaceship Cockpit Radar Sweep Background ─────────────────────────────── */
export function RadarSweepBackground({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden>
      {/* Concentric Range Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[var(--color-accent)]/10">
        <div className="absolute inset-[15%] rounded-full border border-[var(--color-accent)]/10" />
        <div className="absolute inset-[32%] rounded-full border border-[var(--color-accent)]/15" />
        <div className="absolute inset-[50%] rounded-full border border-[var(--color-accent)]/20" />
        <div className="absolute inset-[70%] rounded-full border border-[var(--color-accent)]/25" />

        {/* Crosshair Cardinal Grid Axes */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[var(--color-accent)]/10" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-[var(--color-accent)]/10" />

        {/* Rotating 360° Radar Beam */}
        {!reduce && (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg at 50% 50%, rgba(0, 255, 102, 0.18) 0deg, rgba(0, 255, 102, 0.05) 45deg, transparent 90deg, transparent 360deg)",
              animation: "radar-sweep 8s linear infinite",
            }}
          />
        )}
      </div>

      {/* Subtle Aerospace Telemetry Markers */}
      <div className="absolute top-8 left-8 font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--color-accent)]/40 hidden sm:block">
        RADAR: 360° // RNG: 120NM // MACH: 3.2
      </div>
      <div className="absolute top-8 right-8 font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--color-accent)]/40 hidden sm:block">
        STATUS: COMBAT-READY // VECTOR: ACTIVE
      </div>
    </div>
  );
}

