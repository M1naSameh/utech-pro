"use client";

import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ContactButtons } from "@/components/ContactButtons";
import { FeatureCard } from "@/components/FeatureCard";
import { FounderSection } from "@/components/FounderSection";
import { PortfolioScroller } from "@/components/PortfolioScroller";
import { ProcessStep } from "@/components/ProcessStep";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { TechHeroVisual } from "@/components/TechHeroVisual";
import { useLanguage } from "@/components/LanguageProvider";
import { contactLinks } from "@/lib/site";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent" />
        <div className="site-container relative grid items-center gap-12 pb-14 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-3xl text-start">
            <p className="mb-5 inline-flex rounded-md border border-cyan/20 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan">
              {t.home.hero.eyebrow}
            </p>
            <h1 className="text-4xl font-black tracking-normal text-white sm:text-5xl lg:text-6xl">
              {t.home.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {t.home.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-gradient px-6 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {t.buttons.bookWhatsApp}
              </a>
              <Link
                href="/services"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.055] px-6 text-sm font-bold text-white transition hover:border-cyan/40 hover:text-cyan"
              >
                {t.buttons.viewServices}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {[t.home.hero.statOne, t.home.hero.statTwo, t.home.hero.statThree].map(
                (stat, index) => (
                  <div key={stat} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                    <p className="text-2xl font-black text-gradient">{index === 0 ? "6" : index === 1 ? "100%" : "24/7"}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-400">{stat}</p>
                  </div>
                )
              )}
            </div>
          </div>

          <TechHeroVisual labels={t.home.hero.visual} />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container">
          <SectionHeader
            eyebrow={t.home.servicesPreview.eyebrow}
            title={t.home.servicesPreview.title}
            subtitle={t.home.servicesPreview.subtitle}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.services.items.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                cta={t.buttons.requestService}
                compact
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing border-y border-white/10 bg-white/[0.025]">
        <div className="site-container">
          <SectionHeader
            eyebrow={t.home.why.eyebrow}
            title={t.home.why.title}
            subtitle={t.home.why.subtitle}
            center
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {t.whyItems.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container">
          <FounderSection founder={t.founder} compact ctaLabel={t.nav.about} />
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow={t.home.portfolioPreview.eyebrow}
              title={t.home.portfolioPreview.title}
              subtitle={t.home.portfolioPreview.subtitle}
            />
            <Link
              href="/portfolio"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-cyan/30 bg-cyan/10 px-5 text-sm font-bold text-cyan transition hover:bg-cyan hover:text-[#030b18]"
            >
              {t.nav.portfolio}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <PortfolioScroller projects={t.portfolio.projects} cta={t.buttons.viewDetails} />
        </div>
      </section>

      <section className="section-spacing border-y border-white/10 bg-white/[0.025]">
        <div className="site-container">
          <SectionHeader
            eyebrow={t.home.process.eyebrow}
            title={t.home.process.title}
            subtitle={t.home.process.subtitle}
            center
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.process.map((step, index) => (
              <ProcessStep
                key={step.title}
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-lg border border-cyan/20 bg-[#05142a] p-8 shadow-glow sm:p-10 lg:p-12">
            <div className="grid-fade absolute inset-0 opacity-25" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="max-w-3xl text-3xl font-black tracking-normal text-white sm:text-4xl">
                  {t.home.cta.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  {t.home.cta.subtitle}
                </p>
              </div>
              <ContactButtons
                channels={["whatsapp", "facebook"]}
                labels={{
                  whatsapp: t.buttons.whatsapp,
                  facebook: t.buttons.facebook,
                  email: t.buttons.email
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
