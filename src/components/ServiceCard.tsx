import { ArrowUpRight, Check } from "lucide-react";
import { IconBadge } from "@/components/IconBadge";
import { contactLinks } from "@/lib/site";

type Service = {
  icon: string;
  title: string;
  description: string;
  features: readonly string[];
};

export function ServiceCard({
  service,
  cta,
  compact = false
}: {
  service: Service;
  cta: string;
  compact?: boolean;
}) {
  const visibleFeatures = compact ? service.features.slice(0, 3) : service.features;

  return (
    <article className="glass-card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-cyan/35">
      <div className="flex items-start justify-between gap-4">
        <IconBadge icon={service.icon} />
        <ArrowUpRight className="h-5 w-5 text-slate-600 transition group-hover:text-cyan" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
      <ul className="mt-5 space-y-3 text-sm text-slate-300">
        {visibleFeatures.map((feature) => (
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
        className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-cyan/30 bg-cyan/10 px-4 text-sm font-bold text-cyan transition hover:bg-cyan hover:text-[#030b18]"
      >
        {cta}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}
