import { IconBadge } from "@/components/IconBadge";

export function FeatureCard({
  icon,
  title,
  description
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <article className="glass-card group h-full p-6 transition hover:-translate-y-1 hover:border-cyan/35">
      <IconBadge icon={icon} />
      <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  );
}
