import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 lg:px-10 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />
      {children}
    </div>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[var(--color-fg)] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`max-w-2xl text-lg sm:text-xl leading-relaxed text-[var(--color-fg-muted)] ${className}`}>
      {children}
    </p>
  );
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  external,
}: ButtonProps) {
  const sizeCls = size === "lg" ? "h-14 px-7 text-base" : "h-11 px-5 text-sm";
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200";
  const variants = {
    primary:
      "bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-dim)] hover:shadow-[0_0_32px_var(--color-accent-glow)]",
    ghost: "text-[var(--color-fg)] hover:bg-white/5",
    outline:
      "border border-[var(--color-line-strong)] text-[var(--color-fg)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  };
  const cls = `${base} ${sizeCls} ${variants[variant]} ${className}`;
  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <button className={cls}>{children}</button>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`group relative rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg-card)] p-7 transition-colors hover:border-[var(--color-line-strong)] ${className}`}
    >
      {children}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-[var(--font-display)] text-4xl sm:text-5xl font-medium tracking-tight text-[var(--color-fg)]">
        {value}
      </div>
      <div className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
        {label}
      </div>
    </div>
  );
}
