import { SectionHeader } from "@/components/SectionHeader";

export function PageHero({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      <div className="site-container relative pb-12">
        <div className="grid-fade absolute inset-x-4 top-12 h-56 rounded-lg opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative">
          <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} center />
        </div>
      </div>
    </section>
  );
}
