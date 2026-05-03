import { IconBadge } from "@/components/IconBadge";

export function ProcessStep({
  icon,
  title,
  description,
  index
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <article className="relative glass-card h-full p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <IconBadge icon={icon} />
        <span className="text-4xl font-black text-white/10">{String(index).padStart(2, "0")}</span>
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  );
}
