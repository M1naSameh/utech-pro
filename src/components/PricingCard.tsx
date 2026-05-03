import { Check, MessageCircle } from "lucide-react";
import { IconBadge } from "@/components/IconBadge";
import { contactLinks } from "@/lib/site";

type Plan = {
  icon: string;
  name: string;
  audience: string;
  priceText: string;
  features: readonly string[];
};

export function PricingCard({ plan, cta }: { plan: Plan; cta: string }) {
  const highlighted = plan.name === "Professional";

  return (
    <article
      className={`relative flex h-full flex-col rounded-lg border p-6 shadow-card ${
        highlighted
          ? "border-cyan/45 bg-cyan/[0.085]"
          : "border-white/10 bg-white/[0.055]"
      }`}
    >
      {highlighted && (
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
      )}
      <IconBadge icon={plan.icon === "custom" ? "customPlan" : plan.icon} />
      <h3 className="mt-5 text-2xl font-bold text-white">{plan.name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{plan.audience}</p>
      <p className="mt-6 rounded-lg border border-cyan/20 bg-[#031126] p-4 text-base font-bold text-cyan">
        {plan.priceText}
      </p>
      <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={contactLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-gradient px-5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        {cta}
      </a>
    </article>
  );
}
