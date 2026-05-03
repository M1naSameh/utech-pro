"use client";

import type { FormEvent, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Facebook, Mail, MessageCircle, Send } from "lucide-react";
import { ContactButtons } from "@/components/ContactButtons";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { contactLinks } from "@/lib/site";

export default function ContactPage() {
  const { t } = useLanguage();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <PageHero
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <section className="section-spacing pt-8">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_0.78fr]">
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8">
            <h2 className="text-2xl font-black text-white">{t.contact.formTitle}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label={t.contact.fields.name}>
                <input
                  type="text"
                  placeholder={t.contact.placeholders.name}
                  className="form-field"
                />
              </Field>
              <Field label={t.contact.fields.email}>
                <input
                  type="email"
                  placeholder={t.contact.placeholders.email}
                  className="form-field"
                />
              </Field>
              <Field label={t.contact.fields.phone}>
                <input
                  type="tel"
                  placeholder={t.contact.placeholders.phone}
                  className="form-field"
                />
              </Field>
              <Field label={t.contact.fields.serviceType}>
                <select defaultValue="" className="form-field">
                  <option value="" disabled>
                    {t.contact.placeholders.serviceType}
                  </option>
                  {t.contact.serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t.contact.fields.budgetRange}>
                <select defaultValue="" className="form-field">
                  <option value="" disabled>
                    {t.contact.placeholders.budgetRange}
                  </option>
                  {t.contact.budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t.contact.fields.projectDetails} wide>
                <textarea
                  rows={7}
                  placeholder={t.contact.placeholders.projectDetails}
                  className="form-field resize-none"
                />
              </Field>
            </div>
            <button
              type="submit"
              className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-gradient px-6 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {t.buttons.sendMessage}
            </button>
          </form>

          <aside className="space-y-5">
            <div className="glass-card p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white">{t.contact.directTitle}</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{t.contact.directText}</p>
              <ContactButtons
                className="mt-6"
                labels={{
                  whatsapp: t.buttons.whatsapp,
                  facebook: t.buttons.facebook,
                  email: t.buttons.email
                }}
              />
            </div>

            <div className="grid gap-4">
              <ContactInfo
                icon={Facebook}
                label={t.buttons.facebook}
                value={contactLinks.facebook}
                href={contactLinks.facebook}
              />
              <ContactInfo
                icon={MessageCircle}
                label={t.buttons.whatsapp}
                value={contactLinks.whatsappNumber}
                href={contactLinks.whatsapp}
              />
              <ContactInfo
                icon={Mail}
                label={t.buttons.email}
                value={contactLinks.email}
                href={`mailto:${contactLinks.email}`}
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  children,
  wide = false
}: {
  label: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <label className={`block ${wide ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-200">{label}</span>
      {children}
    </label>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="focus-ring flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.055] p-5 transition hover:border-cyan/35"
    >
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-bold text-white">{label}</span>
        <span className="mt-1 block break-words text-sm text-slate-400">{value}</span>
      </span>
    </a>
  );
}
