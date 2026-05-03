"use client";

import { ContactButtons } from "@/components/ContactButtons";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { useLanguage } from "@/components/LanguageProvider";

export default function PricingPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.pricing.eyebrow}
        title={t.pricing.title}
        subtitle={t.pricing.subtitle}
      />

      <section className="section-spacing pt-8">
        <div className="site-container">
          <div className="grid gap-5 lg:grid-cols-3">
            {t.pricing.plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} cta={t.buttons.getQuote} />
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-cyan/20 bg-[#05142a] p-8 shadow-glow">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <h2 className="text-2xl font-black text-white sm:text-3xl">{t.pricing.cta}</h2>
              <ContactButtons
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
