import { ArrowUpRight } from "lucide-react";
import { getIcon } from "@/components/IconBadge";

export type Project = {
  icon: string;
  title: string;
  category: string;
  goal: string;
  description: string;
  tools: readonly string[];
};

export function ProjectCard({
  project,
  cta,
  wide = false,
  labels = {
    projectType: "Portfolio Project",
    goal: "Goal",
    tools: "Tools Used"
  }
}: {
  project: Project;
  cta: string;
  wide?: boolean;
  labels?: {
    projectType: string;
    goal: string;
    tools: string;
  };
}) {
  const Icon = getIcon(project.icon);
  const bars = getProjectBars(project.icon);

  return (
    <article
      className={`glass-card group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:border-cyan/35 ${
        wide ? "w-[min(86vw,390px)] shrink-0 snap-start sm:w-[390px]" : ""
      }`}
    >
      <div className="relative h-52 overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(0,200,255,0.16),rgba(0,123,255,0.08),rgba(255,255,255,0.03))]">
        <div className="grid-fade absolute inset-0 opacity-40" />
        <div className="absolute inset-5 rounded-lg border border-cyan/20 bg-[#041124]/85 p-4 shadow-glow">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-md border border-cyan/25 bg-cyan/10 px-3 py-1 text-[11px] font-bold uppercase tracking-normal text-cyan">
              {labels.projectType}
            </span>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan" />
              <span className="h-2 w-2 rounded-full bg-electric" />
              <span className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-[0.72fr_1fr] gap-4">
            <div className="rounded-lg border border-cyan/25 bg-cyan/10 p-4 text-cyan">
              <Icon className="h-9 w-9" aria-hidden="true" />
              <div className="mt-8 h-2 rounded-full bg-white/10">
                <span className="block h-full w-2/3 rounded-full bg-cyan" />
              </div>
              <div className="mt-3 h-2 w-3/4 rounded-full bg-white/10" />
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
              <div className="mb-4 flex items-end gap-2">
                {bars.map((height, index) => (
                  <span
                    key={`${project.icon}-${height}-${index}`}
                    className="flex-1 rounded-t bg-gradient-to-t from-electric/50 to-cyan"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="h-2 rounded-full bg-cyan/50" />
                <span className="h-2 rounded-full bg-white/20" />
                <span className="h-2 rounded-full bg-white/20" />
                <span className="h-2 rounded-full bg-electric/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-normal text-cyan">
          {project.category}
        </p>
        <h3 className="mt-3 text-xl font-bold text-white">{project.title}</h3>
        <div className="mt-4 rounded-lg border border-cyan/15 bg-cyan/[0.06] p-4">
          <p className="text-xs font-bold uppercase tracking-normal text-cyan">{labels.goal}</p>
          <p className="mt-2 text-sm leading-6 text-slate-200">{project.goal}</p>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
        <p className="mt-5 text-xs font-bold uppercase tracking-normal text-slate-500">
          {labels.tools}
        </p>
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

function getProjectBars(icon: string) {
  const bars: Record<string, number[]> = {
    web: [34, 58, 42, 76, 52],
    mobile: [62, 46, 70, 38, 58],
    ai: [44, 74, 54, 82, 66],
    data: [36, 54, 72, 48, 84],
    design: [52, 66, 40, 74, 58],
    video: [40, 72, 50, 68, 86]
  };

  return bars[icon] ?? bars.web;
}
