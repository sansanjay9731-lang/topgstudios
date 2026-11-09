"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES, SITE } from "@/lib/site";
import { Button } from "./ui";
import { TopGunLogo } from "./logo";

const MEGA_PRODUCT = SERVICES.map((s) => ({
  href: `/services/${s.slug}`,
  title: s.title,
  desc: s.short,
  code: s.slug === "aeo-geo" ? "01" : s.slug === "llm-implementation" ? "02" : "03",
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
  const [activeMobileGroup, setActiveMobileGroup] = useState<string | null>("services");

  // Track scroll for sticky backdrop blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scrolling on iOS/Android when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-white/[0.08] bg-[#07080a]/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-8 lg:gap-10">
          <TopGunLogo variant="full" size="md" href="/" animate />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <MegaItem label="Services" name="services" open={open} setOpen={setOpen} items={MEGA_PRODUCT} />
            <MegaItem
              label="Solutions"
              name="solutions"
              open={open}
              setOpen={setOpen}
              items={MEGA_SOLUTIONS}
            />
            <Link href="/pricing" className={navLinkCls}>
              Pricing
            </Link>
            <Link href="/about" className={navLinkCls}>
              About
            </Link>
            <Link href="/blog" className={navLinkCls}>
              Blog (200)
            </Link>
            <Link href="/glossary" className={navLinkCls}>
              Glossary
            </Link>
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="/llms.txt"
            className="flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-neutral-400 hover:text-white hover:border-emerald-400 transition-colors"
            title="llms.txt for AI engines"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
            llms.txt
          </a>
          <Link
            href="/contact"
            className="px-3 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Button href={SITE.bookingUrl} external size="md">
            Book a call
          </Button>
        </div>

        {/* Mobile Header Controls: Direct Book Call + Aerospace HUD Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 active:scale-95 transition-all"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
            <span>Book Call</span>
          </Link>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.12] bg-[#0c1017] text-neutral-200 transition-colors hover:border-emerald-400/50 hover:text-white active:scale-95 touch-manipulation"
            aria-label={mobileOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileOpen}
          >
            <div className="relative h-4 w-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "translate-y-[7px] rotate-45 bg-emerald-400" : ""
                }`}
              />
              <span
                className={`h-0.5 w-3/4 rounded-full bg-current transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45 bg-emerald-400" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer with Smooth Animations */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-[#06080d]/98 backdrop-blur-2xl border-t border-emerald-500/20 overflow-y-auto overscroll-contain flex flex-col justify-between"
          >
            <div className="px-5 py-6 space-y-6">
              {/* Primary Mobile Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  href={SITE.bookingUrl}
                  external
                  size="md"
                  className="w-full text-xs font-semibold py-3"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Discovery Call →
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  size="md"
                  className="w-full text-xs py-3"
                  onClick={() => setMobileOpen(false)}
                >
                  View Pricing Plans
                </Button>
              </div>

              {/* Grouped Accordion: Capabilities / Services */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#0c1017] p-3">
                <button
                  onClick={() =>
                    setActiveMobileGroup((g) => (g === "services" ? null : "services"))
                  }
                  className="flex w-full items-center justify-between p-2 font-mono text-xs uppercase tracking-wider text-neutral-300"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-400">◇</span>
                    Capabilities & Disciplines
                  </span>
                  <span
                    className={`transition-transform duration-200 text-neutral-500 ${
                      activeMobileGroup === "services" ? "rotate-180 text-emerald-400" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {activeMobileGroup === "services" && (
                  <div className="mt-2 space-y-1 border-t border-white/[0.06] pt-2">
                    {SERVICES.map((s, idx) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between rounded-xl p-3 text-sm transition-colors hover:bg-white/[0.05] active:bg-white/[0.08]"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-white flex items-center gap-2">
                            <span className="font-mono text-[10px] text-emerald-400 font-semibold">
                              [0{idx + 1}]
                            </span>
                            {s.title}
                          </span>
                          <span className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                            {s.short}
                          </span>
                        </div>
                        <span className="text-neutral-500 font-mono text-xs">→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Grouped Accordion: Solutions */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#0c1017] p-3">
                <button
                  onClick={() =>
                    setActiveMobileGroup((g) => (g === "solutions" ? null : "solutions"))
                  }
                  className="flex w-full items-center justify-between p-2 font-mono text-xs uppercase tracking-wider text-neutral-300"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-400">◇</span>
                    Solutions by Stage
                  </span>
                  <span
                    className={`transition-transform duration-200 text-neutral-500 ${
                      activeMobileGroup === "solutions" ? "rotate-180 text-emerald-400" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {activeMobileGroup === "solutions" && (
                  <div className="mt-2 space-y-1 border-t border-white/[0.06] pt-2">
                    {MEGA_SOLUTIONS.map((sol) => (
                      <Link
                        key={sol.title}
                        href={sol.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between rounded-xl p-3 text-sm transition-colors hover:bg-white/[0.05] active:bg-white/[0.08]"
                      >
                        <div>
                          <div className="font-medium text-white">{sol.title}</div>
                          <div className="text-xs text-neutral-400 mt-0.5">{sol.desc}</div>
                        </div>
                        <span className="text-neutral-500 font-mono text-xs">→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Site Pages */}
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/#simulator"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-[#0c1017] p-3.5 text-sm font-medium text-neutral-300 hover:text-white"
                >
                  <span className="text-emerald-400">⚡</span>
                  AEO Simulator
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-[#0c1017] p-3.5 text-sm font-medium text-neutral-300 hover:text-white"
                >
                  <span className="text-emerald-400">◈</span>
                  Founder Bio
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-[#0c1017] p-3.5 text-sm font-medium text-neutral-300 hover:text-white"
                >
                  <span className="text-emerald-400">$</span>
                  Pricing Models
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-[#0c1017] p-3.5 text-sm font-medium text-neutral-300 hover:text-white"
                >
                  <span className="text-emerald-400">✉</span>
                  Contact Office
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5 text-sm font-medium text-emerald-300 hover:text-white"
                >
                  <span className="text-emerald-400">📚</span>
                  Blog (200 Guides)
                </Link>
                <Link
                  href="/glossary"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-[#0c1017] p-3.5 text-sm font-medium text-neutral-300 hover:text-white"
                >
                  <span className="text-emerald-400">📖</span>
                  AI Glossary
                </Link>
              </div>

              {/* Verified Official Social Channels */}
              <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 to-transparent p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400 mb-3 flex items-center justify-between">
                  <span>Official Social Channels</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-2">
                  <a
                    href="https://www.linkedin.com/company/topgunstudios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-xs text-neutral-300 hover:border-emerald-400/40 hover:text-white transition-all active:bg-white/[0.08]"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 fill-emerald-400 shrink-0" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                      </svg>
                      <span className="font-mono">linkedin.com/company/topgunstudios</span>
                    </div>
                    <span className="text-neutral-500 font-mono">↗</span>
                  </a>

                  <a
                    href="https://www.instagram.com/topgunstudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-xs text-neutral-300 hover:border-emerald-400/40 hover:text-white transition-all active:bg-white/[0.08]"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 stroke-emerald-400 fill-none shrink-0" strokeWidth={1.8} viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                      </svg>
                      <span className="font-mono">instagram.com/topgunstudio/</span>
                    </div>
                    <span className="text-neutral-500 font-mono">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Safe Area & llms.txt Link */}
            <div className="px-5 py-4 border-t border-white/[0.06] bg-[#07090e] pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] flex items-center justify-between">
              <a
                href="/llms.txt"
                className="inline-flex items-center gap-2 font-mono text-[11px] text-neutral-400 hover:text-emerald-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
                Raw Machine Corpus (/llms.txt)
              </a>
              <span className="font-mono text-[10px] text-neutral-600">
                TOP GUN STUDIOS v2.4
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
