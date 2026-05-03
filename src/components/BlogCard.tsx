import { ArrowUpRight, Newspaper } from "lucide-react";

type Article = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
};

export function BlogCard({
  article,
  readTimeLabel,
  readLabel
}: {
  article: Article;
  readTimeLabel: string;
  readLabel: string;
}) {
  return (
    <article className="glass-card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-cyan/35">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan shadow-glow">
          <Newspaper className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="rounded-md border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-semibold text-slate-300">
          {article.readTime} {readTimeLabel}
        </span>
      </div>
      <p className="mt-5 text-xs font-bold uppercase tracking-normal text-cyan">
        {article.category}
      </p>
      <h3 className="mt-3 text-xl font-bold text-white">{article.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{article.excerpt}</p>
      <button
        type="button"
        className="focus-ring mt-6 inline-flex items-center gap-2 self-start rounded-md text-sm font-bold text-cyan transition group-hover:gap-3"
      >
        {readLabel}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </article>
  );
}
