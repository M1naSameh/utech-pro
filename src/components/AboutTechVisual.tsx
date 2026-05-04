import Image from "next/image";

export function AboutTechVisual() {
  return (
    <aside className="glass-card flex items-center justify-center overflow-hidden p-2 sm:p-3">
      <Image
        src="/images/about-banner.png"
        alt="UTech Pro technology services banner"
        width={1377}
        height={1142}
        className="h-auto w-full object-contain"
        sizes="(min-width: 1024px) 46vw, 100vw"
        priority
      />
    </aside>
  );
}
