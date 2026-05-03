"use client";

import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { useLanguage } from "@/components/LanguageProvider";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        subtitle={t.services.subtitle}
      />

      <section className="section-spacing pt-8">
        <div className="site-container grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.services.items.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
              cta={t.buttons.requestService}
            />
          ))}
        </div>
      </section>
    </>
  );
}
