"use client";

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Facebook, Mail, MessageCircle } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";
import { useLanguage } from "@/components/LanguageProvider";
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

export function SiteFooter() {
  const { language, t } = useLanguage();
  const logoSubtitle = language === "ar" ? t.brand.arabicName : "Technology Services";

  return (
    <footer className="border-t border-white/10 bg-[#020714]">
      <div className="site-container py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.9fr]">
          <div className="space-y-5">
            <LogoMark subtitle={logoSubtitle} />
            <p className="max-w-md text-sm leading-7 text-slate-300">{t.footer.description}</p>
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-lg border border-cyan/20 bg-white/5">
                <Image
                  src="/images/logo-mark.png"
                  alt="UTech Pro logo"
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.brand.name}</p>
                <p className="text-sm text-slate-400">{t.brand.arabicName}</p>
              </div>
            </div>
          </div>

          <FooterColumn title={t.footer.quickLinks}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {t.nav[item.key]}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title={t.footer.services}>
            {t.services.items.map((service) => (
              <Link key={service.title} href="/services" className="footer-link">
                {service.title}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title={t.footer.contact}>
            <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="footer-link">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t.buttons.whatsapp}
            </a>
            <a href={`mailto:${contactLinks.email}`} className="footer-link">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {contactLinks.email}
            </a>
            <a href={contactLinks.facebook} target="_blank" rel="noreferrer" className="footer-link">
              <Facebook className="h-4 w-4" aria-hidden="true" />
              {t.buttons.facebook}
            </a>
          </FooterColumn>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.brand.name}. {t.footer.copyright}
          </p>
          <p>{t.brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-normal text-white">{title}</h3>
      <div className="flex flex-col gap-3 text-sm">{children}</div>
    </div>
  );
}
