export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : "text-start"} max-w-3xl`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-normal text-cyan">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-normal text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-300">{subtitle}</p>}
    </div>
  );
}
