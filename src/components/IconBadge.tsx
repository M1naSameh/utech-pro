import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Bot,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  Code2,
  Film,
  Globe2,
  Handshake,
  Headphones,
  Layers3,
  Lightbulb,
  Network,
  Palette,
  PenTool,
  SearchCheck,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Smartphone,
  Video,
  Zap
} from "lucide-react";

const iconMap = {
  ai: Bot,
  analyze: SearchCheck,
  build: PenTool,
  custom: SlidersHorizontal,
  data: ChartNoAxesCombined,
  design: Palette,
  idea: Lightbulb,
  mobile: Smartphone,
  quality: BadgeCheck,
  smart: BrainCircuit,
  speed: Zap,
  starter: Sparkles,
  pro: Building2,
  support: Headphones,
  customPlan: Network,
  video: Video,
  web: Globe2,
  delivery: Handshake,
  layers: Layers3,
  code: Code2,
  film: Film,
  shield: ShieldCheck
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function getIcon(icon: string): LucideIcon {
  return iconMap[icon as IconName] ?? Code2;
}

export function IconBadge({
  icon,
  className = "",
  iconClassName = "h-5 w-5"
}: {
  icon: string;
  className?: string;
  iconClassName?: string;
}) {
  const Icon = getIcon(icon);

  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan shadow-glow ${className}`}
    >
      <Icon className={iconClassName} aria-hidden="true" />
    </span>
  );
}
