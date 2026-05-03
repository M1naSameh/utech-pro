"use client";

import { BlogCard } from "@/components/BlogCard";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero eyebrow={t.blog.eyebrow} title={t.blog.title} subtitle={t.blog.subtitle} />

      <section className="section-spacing pt-8">
        <div className="site-container grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.blog.articles.map((article) => (
            <BlogCard
              key={article.title}
              article={article}
              readTimeLabel={t.blog.readTime}
              readLabel={t.buttons.readArticle}
            />
          ))}
        </div>
      </section>
    </>
  );
}
