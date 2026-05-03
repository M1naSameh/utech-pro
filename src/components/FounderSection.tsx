"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, UserRound } from "lucide-react";

type FounderContent = {
  eyebrow: string;
  image: string;
  previewTitle: string;
  sectionTitle: string;
  nameLabel: string;
  titleLabel: string;
  educationLabel: string;
  roleLabel: string;
  name: string;
  title: string;
  education: string;
  role: string;
  bio: readonly string[];
  previewText: string;
};

export function FounderSection({
  founder,
  compact = false,
  ctaLabel
}: {
  founder: FounderContent;
  compact?: boolean;
  ctaLabel?: string;
}) {
  const fallbackImage = "/images/logo-transparent.png";
  const [imageSrc, setImageSrc] = useState(founder.image || fallbackImage);
  const imageClassName =
    imageSrc === fallbackImage ? "object-contain p-3" : "object-cover object-center";
  const frameShape = imageSrc === fallbackImage ? "rounded-lg" : "rounded-full";
  const details = [
    {
      icon: UserRound,
      label: founder.titleLabel,
      value: founder.title
    },
    {
      icon: GraduationCap,
      label: founder.educationLabel,
      value: founder.education
    },
    {
      icon: BriefcaseBusiness,
      label: founder.roleLabel,
      value: founder.role
    }
  ];

  useEffect(() => {
    setImageSrc(founder.image || fallbackImage);
  }, [founder.image]);

  if (compact) {
    return (
      <div className="relative overflow-hidden rounded-lg border border-cyan/20 bg-[#041226] p-6 shadow-glow sm:p-8">
        <div className="grid-fade absolute inset-0 opacity-20" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div
              className={`relative h-24 w-24 shrink-0 overflow-hidden border border-cyan/25 bg-[#020714] shadow-glow ${frameShape}`}
            >
              <Image
                src={imageSrc}
                alt={founder.name}
                fill
                className={imageClassName}
                onError={() => setImageSrc(fallbackImage)}
                sizes="96px"
              />
            </div>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-normal text-cyan">
                {founder.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-normal text-white sm:text-3xl">
                {founder.previewTitle}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-300">{founder.previewText}</p>
              <p className="mt-3 text-sm font-semibold text-slate-100">
                {founder.name} - {founder.title}
              </p>
            </div>
          </div>

          {ctaLabel && (
            <Link
              href="/about"
              className="focus-ring inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-cyan/30 bg-cyan/10 px-5 text-sm font-bold text-cyan transition hover:bg-cyan hover:text-[#030b18]"
            >
              {ctaLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg border border-cyan/20 bg-[#041226] p-6 shadow-glow sm:p-8 lg:p-10">
      <div className="grid-fade absolute inset-0 opacity-20" />
      <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
          <div
            className={`relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden border border-cyan/20 bg-[#020714] ${frameShape}`}
          >
            <Image
              src={imageSrc}
              alt={founder.name}
              fill
              className={imageClassName}
              onError={() => setImageSrc(fallbackImage)}
              sizes="(min-width: 1024px) 260px, 70vw"
            />
          </div>
          <div className="mt-5 rounded-lg border border-cyan/15 bg-[#031126] p-4 text-center">
            <p className="text-xs font-bold uppercase tracking-normal text-cyan">
              {founder.nameLabel}
            </p>
            <h3 className="mt-2 text-2xl font-black text-white">{founder.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{founder.role}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-normal text-cyan">{founder.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-4xl">
            {founder.sectionTitle}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-300">
            {founder.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-7 grid gap-3">
            {details.map((detail) => {
              const Icon = detail.icon;

              return (
                <div
                  key={detail.label}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4"
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-cyan/25 bg-cyan/10 text-cyan">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-normal text-slate-500">
                      {detail.label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-6 text-slate-100">
                      {detail.value}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
