import Image from "next/image";
import { Bot, Braces, ChartNoAxesCombined, Code2, Database, Layers3 } from "lucide-react";

type AboutVisualContent = {
  title: string;
  subtitle: string;
  badges: readonly string[];
  metricOne: string;
  metricTwo: string;
  metricThree: string;
  performance: string;
};

export function AboutTechVisual({ visual }: { visual: AboutVisualContent }) {
  const badgeIcons = [Code2, Database, Bot, Layers3];
  const bars = [48, 72, 58, 86, 66, 94];

  return (
    <aside className="glass-card relative min-h-[520px] overflow-hidden p-6 sm:p-8 lg:min-h-full">
      <div className="grid-fade absolute inset-0 opacity-25" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />

      <div className="relative flex h-full flex-col">
        <div className="rounded-lg border border-cyan/20 bg-[#031126]/90 p-5 shadow-glow">
          <div className="mx-auto flex max-w-sm flex-col items-center text-center">
            <div className="relative h-36 w-36 sm:h-44 sm:w-44">
              <Image
                src="/images/logo.png"
                alt="UTech Pro logo"
                fill
                className="object-contain"
                sizes="(min-width: 640px) 176px, 144px"
                priority
              />
            </div>
            <h3 className="mt-4 text-3xl font-black tracking-normal text-white">{visual.title}</h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-normal text-cyan">
              {visual.subtitle}
            </p>
          </div>
        </div>

        <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
          {visual.badges.map((badge, index) => {
            const Icon = badgeIcons[index] ?? Code2;

            return (
              <div
                key={badge}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-4 backdrop-blur"
              >
                <Icon className="h-5 w-5 text-cyan" aria-hidden="true" />
                <p className="mt-3 text-sm font-bold leading-6 text-white">{badge}</p>
              </div>
            );
          })}
        </div>

        <div className="relative mt-5 grid flex-1 gap-4 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-lg border border-cyan/15 bg-[#041124]/90 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">{visual.metricTwo}</p>
                <p className="mt-1 text-xs text-slate-400">{visual.performance}</p>
              </div>
              <ChartNoAxesCombined className="h-5 w-5 text-cyan" aria-hidden="true" />
            </div>
            <div className="mt-6 flex h-28 items-end gap-2">
              {bars.map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="flex-1 rounded-t bg-gradient-to-t from-electric/45 to-cyan"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
              <Braces className="h-5 w-5 text-cyan" aria-hidden="true" />
              <p className="mt-3 text-sm font-bold text-white">{visual.metricOne}</p>
              <p className="mt-1 text-2xl font-black text-gradient">6+</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
              <Bot className="h-5 w-5 text-cyan" aria-hidden="true" />
              <p className="mt-3 text-sm font-bold text-white">{visual.metricThree}</p>
              <p className="mt-1 text-2xl font-black text-gradient">AI</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
