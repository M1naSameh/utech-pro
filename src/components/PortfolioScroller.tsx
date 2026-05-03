"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard, type Project } from "@/components/ProjectCard";

export function PortfolioScroller({
  projects,
  cta,
  labels
}: {
  projects: readonly Project[];
  cta: string;
  labels: {
    projectType: string;
    goal: string;
    tools: string;
  };
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  function scroll(direction: "previous" | "next") {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: direction === "next" ? 410 : -410,
      behavior: "smooth"
    });
  }

  return (
    <div className="mt-10">
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll("previous")}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.055] text-white transition hover:border-cyan/40 hover:text-cyan"
          aria-label="Previous portfolio projects"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scroll("next")}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.055] text-white transition hover:border-cyan/40 hover:text-cyan"
          aria-label="Next portfolio projects"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="portfolio-scroll flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            cta={cta}
            labels={labels}
            wide
          />
        ))}
      </div>
    </div>
  );
}
