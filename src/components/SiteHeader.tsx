"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Languages, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { LogoMark } from "@/components/LogoMark";
import { contactLinks } from "@/lib/site";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/pricing", key: "pricing" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" }
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  const logoSubtitle = language === "ar" ? t.brand.arabicName : "Technology Services";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#030b18]/82 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between gap-4">
        <LogoMark subtitle={logoSubtitle} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-cyan/10 text-cyan"
                    : "text-slate-300 hover:bg-white/[0.055] hover:text-white"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="focus-ring inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-white/[0.055] px-4 text-sm font-semibold text-slate-100 transition hover:border-cyan/40 hover:text-cyan"
            aria-label="Toggle language"
          >
            <Languages className="h-4 w-4" aria-hidden="true" />
            {t.nav.language}
          </button>
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex h-11 items-center gap-2 rounded-md bg-brand-gradient px-5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            {t.nav.book}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className="focus-ring inline-flex h-10 min-w-12 items-center justify-center rounded-md border border-white/10 bg-white/[0.055] px-3 text-sm font-bold text-slate-100"
            aria-label="Toggle language"
          >
            {t.nav.language}
          </button>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.055] text-white"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#030b18]/96 lg:hidden">
          <div className="site-container flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/[0.055] hover:text-cyan"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-gradient px-5 text-sm font-bold text-white shadow-glow"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              {t.nav.book}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
