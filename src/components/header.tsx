"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SERVICES, SITE } from "@/lib/site";
import { Button } from "./ui";

const MEGA_PRODUCT = SERVICES.map((s) => ({
  href: `/services/${s.slug}`,
  title: s.title,
  desc: s.short,
}));

const MEGA_SOLUTIONS = [
  { title: "For Startups", desc: "Ship MVPs, hit PMF fast.", href: "/pricing#sprint" },
  { title: "For Scale-ups", desc: "Embedded pods for multi-channel growth.", href: "/pricing#growth" },
  { title: "For Enterprises", desc: "Multi-discipline programs at scale.", href: "/pricing#enterprise" },
  { title: "For Agencies", desc: "White-label development & AEO programs.", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[var(--color-bg)]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-4">
              {/* Custom Precision SVG Stealth Jet - Pointy Face Up */}
              <div className="relative h-10 w-10 flex items-center justify-center text-[var(--color-accent)] drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main Fuselage Spine */}
                  <path d="M50 5L58 40L50 85L42 40L50 5Z" fill="currentColor" fillOpacity="0.9" />
                  {/* Outer Stealth Wings */}
                  <path d="M58 35L95 85L62 75L58 35Z" fill="currentColor" fillOpacity="0.7" />
                  <path d="M42 35L5 85L38 75L42 35Z" fill="currentColor" fillOpacity="0.7" />
                  {/* Secondary Inner Stabilizers */}
                  <path d="M50 45L62 65L50 85L38 65L50 45Z" fill="currentColor" fillOpacity="0.8" />
                  {/* Rear Tail Fins */}
                  <path d="M62 70L85 95L68 85L62 70Z" fill="currentColor" fillOpacity="0.75" />
                  <path d="M38 70L15 95L32 85L38 70Z" fill="currentColor" fillOpacity="0.75" />
                  {/* High-Tech Canopy Accent */}
                  <path d="M50 15L54 35L50 42L46 35L50 15Z" fill="#000" fillOpacity="0.4" />
                </svg>
              </div>
              {/* Professional Text Wordmark */}
              <div className="flex flex-col -gap-1">
                <span className="font-[var(--font-display)] text-2xl font-bold tracking-tighter uppercase text-white leading-none">
                  TOP G
                </span>
                <span className="font-[var(--font-display)] text-[10px] font-medium tracking-[0.3em] uppercase text-[var(--color-accent)] leading-none opacity-100">
                  STUDIOS
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <MegaItem label="Services" name="services" open={open} setOpen={setOpen} items={MEGA_PRODUCT} />
            <MegaItem
              label="Solutions"
              name="solutions"
              open={open}
              setOpen={setOpen}
              items={MEGA_SOLUTIONS}
            />
            <Link href="/case-studies" className={navLinkCls}>
              Customers
            </Link>
            <Link href="/pricing" className={navLinkCls}>
              Pricing
            </Link>
            <Link href="/about" className={navLinkCls}>
              About
            </Link>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href="/llms.txt"
            className="flex items-center gap-2 rounded-md border border-[var(--color-line-strong)] bg-[var(--color-bg-elev)]/80 px-3 py-1.5 font-mono text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:border-[var(--color-accent)] transition-colors"
            title="llms.txt for AI engines"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] pulse-dot" />
            llms.txt
          </a>
          <Link
            href="/contact"
            className="px-3 py-1.5 text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
          >
            Contact
          </Link>
          <Button href={SITE.bookingUrl} external size="md">
            Book a call
          </Button>
        </div>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-[var(--color-line)]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="font-mono text-sm">{mobileOpen ? "✕" : "≡"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--color-line)] bg-[var(--color-bg-elev)]">
          <div className="px-6 py-5 flex flex-col gap-1">
            <MobileGroup title="Services" items={MEGA_PRODUCT} />
            <MobileGroup title="Solutions" items={MEGA_SOLUTIONS} />
            <Link href="/case-studies" className="py-2 text-sm" onClick={() => setMobileOpen(false)}>
              Customers
            </Link>
            <Link href="/pricing" className="py-2 text-sm" onClick={() => setMobileOpen(false)}>
              Pricing
            </Link>
            <Link href="/about" className="py-2 text-sm" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <div className="flex gap-3 pt-4">
              <Button href="/contact" variant="outline" size="md" className="flex-1">
                Contact
              </Button>
              <Button href={SITE.bookingUrl} external size="md" className="flex-1">
                Book a call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const navLinkCls =
  "px-3 py-2 rounded-md text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors";

function MegaItem({
  label,
  name,
  open,
  setOpen,
  items,
}: {
  label: string;
  name: string;
  open: string | null;
  setOpen: (v: string | null) => void;
  items: { title: string; desc: string; href: string }[];
}) {
  const isOpen = open === name;
  return (
    <div className="relative" onMouseEnter={() => setOpen(name)} onMouseLeave={() => setOpen(null)}>
      <button className={`${navLinkCls} flex items-center gap-1`}>
        {label}
        <span className={`text-[10px] transition-transform ${isOpen ? "rotate-180" : ""}`}>▾</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full pt-3 w-[560px]">
          <div className="gradient-border p-3 grid grid-cols-2 gap-1 bg-[var(--color-bg-card)]/95 backdrop-blur-xl">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="group flex flex-col gap-1 rounded-lg p-3 hover:bg-white/5 transition-colors"
              >
                <span className="flex items-center gap-2 text-sm font-medium text-[var(--color-fg)]">
                  <span className="text-[var(--color-accent)]">◇</span>
                  {it.title}
                </span>
                <span className="text-xs text-[var(--color-fg-muted)] leading-relaxed">
                  {it.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileGroup({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string }[];
}) {
  return (
    <details className="border-b border-[var(--color-line)] py-2">
      <summary className="cursor-pointer list-none py-2 text-sm font-medium flex items-center justify-between">
        {title}
        <span className="text-xs text-[var(--color-fg-muted)]">▾</span>
      </summary>
      <div className="pl-2 pb-2 flex flex-col gap-1">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="py-1.5 text-sm text-[var(--color-fg-muted)]">
            {it.title}
          </Link>
        ))}
      </div>
    </details>
  );
}
