import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Bot, ChartNoAxesCombined, Code2, Sparkles } from "lucide-react";

export function TechHeroVisual({
  labels
}: {
  labels: {
    automation: string;
    analytics: string;
    code: string;
    delivery: string;
    live: string;
    growth: string;
    web: string;
    ai: string;
    data: string;
    creative: string;
  };
}) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute inset-x-8 -top-3 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
      <div className="glass-card relative overflow-hidden p-5 sm:p-6">
        <div className="grid-fade absolute inset-0 opacity-30" />
        <div className="relative flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-transparent.png"
              alt="UTech Pro logo"
              width={96}
              height={96}
              className="h-[72px] w-[72px] shrink-0 object-contain sm:h-20 sm:w-20"
              priority
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-cyan">UTech Pro</p>
              <p className="text-sm text-slate-300">{labels.delivery}</p>
            </div>
          </div>
          <span className="rounded-md border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan">
            {labels.live}
          </span>
        </div>

        <div className="relative mt-6 rounded-lg border border-cyan/15 bg-[#041124] p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white">{labels.analytics}</p>
              <p className="text-xs text-slate-400">{labels.growth}</p>
            </div>
            <ChartNoAxesCombined className="h-5 w-5 text-cyan" aria-hidden="true" />
          </div>
          <div className="flex h-32 items-end gap-2">
            {[42, 68, 54, 82, 70, 92, 76, 100].map((height, index) => (
              <span
                key={`${height}-${index}`}
                className="flex-1 rounded-t bg-gradient-to-t from-electric/55 to-cyan"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-slate-400">
            <span>{labels.web}</span>
            <span>{labels.ai}</span>
            <span>{labels.data}</span>
          </div>
        </div>

        <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
          <MiniPanel icon={Bot} title={labels.automation} value="78%" />
          <MiniPanel icon={Code2} title={labels.code} value="98%" />
          <MiniPanel icon={Sparkles} title={labels.creative} value="6x" />
        </div>
      </div>

    </div>
  );
}

function MiniPanel({
  icon: Icon,
  title,
  value
}: {
  icon: LucideIcon;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
      <Icon className="h-5 w-5 text-cyan" aria-hidden="true" />
      <p className="mt-3 text-sm font-semibold text-white">{title}</p>
      <p className="mt-1 text-xl font-black text-gradient">{value}</p>
    </div>
  );
}
