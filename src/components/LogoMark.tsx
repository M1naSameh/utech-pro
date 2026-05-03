import Image from "next/image";
import Link from "next/link";

export function LogoMark({
  compact = false,
  subtitle = "Technology Services",
  size = "header"
}: {
  compact?: boolean;
  subtitle?: string;
  size?: "header" | "footer";
}) {
  const imageClassName =
    size === "footer"
      ? "h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
      : "h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14";

  return (
    <Link href="/" className="group flex items-center gap-3 focus-ring rounded-lg">
      <Image
        src="/images/logo-transparent.png"
        alt="UTech Pro logo"
        width={56}
        height={56}
        className={imageClassName}
        priority
      />
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
