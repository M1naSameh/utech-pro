"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FounderSection } from "@/components/FounderSection";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();

  const blocks = [
    {
      title: t.about.whoTitle,
      text: t.about.whoText
    },
    {
      title: t.about.missionTitle,
      text: t.about.missionText
    },
    {
      title: t.about.visionTitle,
      text: t.about.visionText
    }
  ];

  return (
    <>
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.subtitle} />

      <section className="section-spacing pt-8">
        <div className="site-container grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            {blocks.map((block) => (
              <article key={block.title} className="glass-card p-6">
                <h2 className="text-2xl font-bold text-white">{block.title}</h2>
                <p className="mt-3 text-base leading-8 text-slate-300">{block.text}</p>
              </article>
            ))}
          </div>

          <div className="glass-card overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/utech-cover.png"
                alt={t.brand.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="border-t border-white/10 p-6">
              <p className="text-sm font-bold uppercase tracking-normal text-cyan">
                {t.brand.name}
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">{t.brand.arabicName}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{t.brand.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing border-y border-white/10 bg-white/[0.025]">
        <div className="site-container">
          <FounderSection founder={t.founder} />
        </div>
      </section>

      <section className="section-spacing border-y border-white/10 bg-white/[0.025]">
        <div className="site-container">
          <SectionHeader
            eyebrow={t.about.valuesTitle}
            title={t.about.valuesTitle}
            subtitle={t.brand.tagline}
            center
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((value) => (
              <article key={value} className="glass-card p-6">
                <CheckCircle2 className="h-7 w-7 text-cyan" aria-hidden="true" />
                <p className="mt-4 text-lg font-bold leading-7 text-white">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
