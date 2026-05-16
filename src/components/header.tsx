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
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-md border border-[var(--color-line-strong)] bg-white transition-shadow group-hover:shadow-[0_0_18px_var(--color-accent-glow)]">
              <Image
                src="/logo.png"
                alt={`${SITE.name} logo`}
                width={36}
                height={36}
                priority
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-[var(--font-display)] text-[15px] font-semibold tracking-tight">
              {SITE.name}
            </span>
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
