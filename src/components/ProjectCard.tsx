import { ArrowUpRight } from "lucide-react";
import { getIcon } from "@/components/IconBadge";

export type Project = {
  icon: string;
  title: string;
  category: string;
  description: string;
  tools: readonly string[];
};

export function ProjectCard({
  project,
  cta,
  wide = false
}: {
  project: Project;
  cta: string;
  wide?: boolean;
}) {
  const Icon = getIcon(project.icon);

  return (
    <article
      className={`glass-card group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:border-cyan/35 ${
        wide ? "w-[min(82vw,360px)] shrink-0 snap-start sm:w-[370px]" : ""
      }`}
    >
      <div className="relative h-44 overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(0,200,255,0.16),rgba(0,123,255,0.08),rgba(255,255,255,0.03))]">
        <div className="grid-fade absolute inset-0 opacity-40" />
        <div className="absolute inset-5 rounded-lg border border-cyan/20 bg-[#041124]/80 p-4 shadow-glow">
          <div className="flex items-center justify-between gap-3">
            <div className="h-2 w-20 rounded-full bg-cyan/70" />
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan" />
              <span className="h-2 w-2 rounded-full bg-electric" />
              <span className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
          <div className="mt-6 flex items-end gap-3">
            <div className="grid h-16 w-16 place-items-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </div>
            <div className="flex flex-1 items-end gap-2">
              <span className="h-7 flex-1 rounded-t bg-cyan/40" />
              <span className="h-12 flex-1 rounded-t bg-cyan/70" />
              <span className="h-9 flex-1 rounded-t bg-electric/70" />
              <span className="h-16 flex-1 rounded-t bg-white/70" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-normal text-cyan">{project.category}</p>
        <h3 className="mt-3 text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-semibold text-slate-300"
            >
              {tool}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.055] px-4 text-sm font-bold text-white transition hover:border-cyan/40 hover:text-cyan"
        >
          {cta}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
