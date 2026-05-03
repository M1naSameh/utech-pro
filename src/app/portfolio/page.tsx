"use client";

import { PageHero } from "@/components/PageHero";
import { PortfolioScroller } from "@/components/PortfolioScroller";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/components/LanguageProvider";

export default function PortfolioPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.portfolio.eyebrow}
        title={t.portfolio.title}
        subtitle={t.portfolio.subtitle}
      />

      <section className="section-spacing pt-8">
        <div className="site-container">
          <SectionHeader
            eyebrow={t.portfolio.carouselTitle}
            title={t.portfolio.carouselTitle}
            subtitle={t.portfolio.subtitle}
          />
          <PortfolioScroller projects={t.portfolio.projects} cta={t.buttons.viewDetails} />
        </div>
      </section>

      <section className="section-spacing border-y border-white/10 bg-white/[0.025]">
        <div className="site-container">
          <SectionHeader
            eyebrow={t.portfolio.gridTitle}
            title={t.portfolio.gridTitle}
            subtitle={t.home.portfolioPreview.subtitle}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.portfolio.projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                cta={t.buttons.viewDetails}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
