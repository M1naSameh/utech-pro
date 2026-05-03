import Image from "next/image";
import Link from "next/link";

export function LogoMark({
  compact = false,
  subtitle = "Technology Services"
}: {
  compact?: boolean;
  subtitle?: string;
}) {
  return (
    <Link href="/" className="group flex items-center gap-3 focus-ring rounded-lg">
      <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-cyan/25 bg-[#020714] shadow-glow">
        <Image
          src="/images/logo-mark.png"
          alt="UTech Pro logo"
          fill
          className="object-contain"
          sizes="48px"
          priority
        />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-lg font-extrabold tracking-normal text-white">
            UTech <span className="text-gradient">Pro</span>
          </span>
          <span className="block text-[11px] font-medium uppercase tracking-normal text-slate-400">
            {subtitle}
          </span>
        </span>
      )}
    </Link>
  );
}
