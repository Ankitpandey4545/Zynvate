"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { LaptopMockup } from "@/components/mockups/LaptopMockup";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { ActionButton } from "@/components/ui/ActionButton";
import { images } from "@/data/images";
import { workIntro } from "@/data/projects";
import type { ImageAsset, Project } from "@/lib/types";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

function CaseMarquee({ frames }: { frames: ImageAsset[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [shift, setShift] = useState(0);
  const loop = [...frames, ...frames];

  const step = () => {
    const card = root.current?.querySelector("[data-marquee-card]");
    return (card instanceof HTMLElement ? card.offsetWidth : 320) + 16;
  };

  const move = (dir: -1 | 1) => {
    setPaused(true);
    setShift((value) => value + dir * step());
  };

  return (
    <div
      ref={root}
      className={cn("case-marquee relative", paused && "is-paused")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        aria-label="Previous screenshot"
        onClick={() => move(1)}
        className="absolute left-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border/80 bg-background/95 text-foreground shadow-[0_10px_24px_-16px_rgba(43,26,16,0.55)] sm:left-4 sm:size-11"
      >
        <ArrowLeft className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Next screenshot"
        onClick={() => move(-1)}
        className="absolute right-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-border/80 bg-background/95 text-foreground shadow-[0_10px_24px_-16px_rgba(43,26,16,0.55)] sm:right-4 sm:size-11"
      >
        <ArrowRight className="size-4" />
      </button>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-background to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-background to-transparent sm:w-16" />
      <div className="overflow-hidden">
        <div className="case-marquee-shift" style={{ ["--case-shift" as string]: `${shift}px` }}>
          <div className="case-marquee-track">
            {loop.map((frame, index) => (
              <figure
                key={`${frame.src}-${index}`}
                data-marquee-card
                className="w-[min(82vw,32rem)] shrink-0 overflow-hidden rounded-[1.4rem] bg-white p-2 shadow-[0_22px_50px_-30px_rgba(43,26,16,0.4)]"
              >
                <img
                  src={frame.src}
                  alt={frame.alt}
                  width={frame.width}
                  height={frame.height}
                  loading="lazy"
                  className="h-[14.5rem] w-full rounded-[1rem] object-contain object-top md:h-[18.5rem]"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkCaseStudy({ project }: { project: Project }) {
  const root = useRef<HTMLElement>(null);
  const shots = project.screenshots;
  const heroStill = shots?.dashboard ?? shots?.cover;
  const features = project.features ?? [];
  const frames = [
    shots?.cover,
    shots?.dashboard,
    features[1]?.screenshot,
    shots?.about,
  ].filter((frame): frame is NonNullable<typeof frame> => Boolean(frame));

  useLayoutEffect(() => {
    const section = root.current;
    if (!section || prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-case-rise]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 0.8,
            scrollTrigger: { trigger: el, start: "top 86%", once: true },
          },
        );
      });
    }, section);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <article ref={root} className="bg-background">
      <header className="relative isolate overflow-hidden rounded-b-[2rem] bg-foreground text-background md:rounded-b-[3rem]">
        <div className="mx-auto grid min-h-[88svh] max-w-[92rem] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
          <div className="flex flex-col justify-end px-5 pb-10 pt-32 sm:px-8 md:px-12 md:pb-16">
            <p className="text-sm text-background/60">
              <Link href="/works" className="hover:text-background">
                Works
              </Link>
              <span className="mx-2 text-background/35">/</span>
              {project.title}
            </p>
            <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-clay-light">
              Built by ZYNOVATE
            </p>
            <h1 className="display mt-4 text-[clamp(3.4rem,10vw,7.4rem)] leading-[0.82] tracking-[-0.055em]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-background/72 md:text-lg">
              {project.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.url ? (
                <ActionButton
                  label="Visit live site"
                  variant="cream"
                  href={project.url}
                  target="_blank"
                  icon={<ArrowUpRight className="size-[0.9em] stroke-[2.4]" />}
                />
              ) : null}
              <ActionButton label="Start a project" href="/contact" variant="ghost" />
            </div>
          </div>
          {heroStill ? (
            <div className="flex items-center px-5 pb-8 pt-2 sm:px-8 md:px-12 lg:px-10 lg:pb-12 lg:pt-28">
              <div className="w-full overflow-hidden rounded-[1.45rem] bg-white p-1.5 shadow-[0_28px_60px_-28px_rgba(0,0,0,0.55)]">
                <img
                  src={heroStill.src}
                  alt={heroStill.alt}
                  width={heroStill.width}
                  height={heroStill.height}
                  className="block h-auto w-full"
                />
              </div>
            </div>
          ) : null}
        </div>
        <dl className="mx-auto grid max-w-[92rem] grid-cols-2 gap-6 border-t border-white/10 px-5 py-8 sm:grid-cols-4 sm:px-8 md:px-12">
          {[
            ["Client", project.client],
            ["Year", project.year],
            ["Industry", project.industry],
            ["Scope", project.scope],
          ].map(([label, value]) =>
            value ? (
              <div key={label}>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-background/45">
                  {label}
                </dt>
                <dd className="mt-2 text-sm text-background/90">{value}</dd>
              </div>
            ) : null,
          )}
        </dl>
      </header>

      {project.summary ? (
        <section className="hero-follow bg-background px-5 py-20 sm:px-8 md:px-12 md:py-28">
          <p
            data-case-rise
            className="mx-auto max-w-5xl text-[clamp(1.55rem,3.2vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em]"
          >
            {project.summary}
          </p>
        </section>
      ) : null}

      {project.stats?.length ? (
        <section className="border-y border-border bg-white px-5 py-10 sm:px-8 md:px-12">
          <div data-case-rise className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="display text-[clamp(2.2rem,4vw,3.4rem)] leading-none">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {shots?.dashboard && shots.mobile ? (
        <section className="px-5 py-16 sm:px-8 md:px-12 md:py-24">
          <div data-case-rise className="mx-auto max-w-7xl">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary">The product</p>
            <h2 className="display mt-4 max-w-3xl text-[clamp(2rem,4vw,3.6rem)] leading-none">
              Designed to be read in a glance, used every day.
            </h2>
            <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-center">
              <LaptopMockup image={shots.dashboard} base="deck" className="w-full max-w-3xl" />
              <PhoneMockup chrome="light" className="w-[min(58%,13.25rem)] shrink-0 sm:w-[13.25rem]">
                <img
                  src={shots.mobile.src}
                  alt={shots.mobile.alt}
                  width={shots.mobile.width}
                  height={shots.mobile.height}
                  className="h-full w-full object-cover object-top"
                />
              </PhoneMockup>
            </div>
          </div>
        </section>
      ) : null}

      {frames.length ? (
        <section className="pb-8 md:pb-14">
          <div data-case-rise>
            <CaseMarquee frames={frames} />
          </div>
        </section>
      ) : null}

      {project.does?.length ? (
        <section className="bg-foreground px-5 py-20 text-background sm:px-8 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p data-case-rise className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-clay-light">
              What it does
            </p>
            <h2 data-case-rise className="display mt-4 max-w-3xl text-[clamp(2rem,4vw,3.6rem)] leading-none">
              One platform for AI search and SEO.
            </h2>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.6rem] bg-white/10 sm:grid-cols-2">
              {project.does.map((item, index) => (
                <li key={item} data-case-rise className="flex gap-5 bg-foreground p-6 md:p-8">
                  <span className="font-mono text-sm text-clay-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-background/80">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {features.length ? (
        <section className="px-5 py-16 sm:px-8 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <p data-case-rise className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary">
              Inside the platform
            </p>
            <h2 data-case-rise className="display mt-4 max-w-3xl text-[clamp(2rem,4vw,3.6rem)] leading-none">
              Four rooms. Eighteen tools. One product.
            </h2>
            <div className="mt-12 space-y-16">
              {features.map((group, index) => {
                const ratio = (group.screenshot.height ?? 1) / (group.screenshot.width ?? 1);
                const strip = ratio < 0.25;
                return (
                  <figure key={group.title} data-case-rise>
                    <div className="overflow-hidden rounded-[1.6rem] bg-white p-3 shadow-[0_22px_50px_-30px_rgba(43,26,16,0.45)]">
                      <img
                        src={group.screenshot.src}
                        alt={group.screenshot.alt}
                        width={group.screenshot.width}
                        height={group.screenshot.height}
                        loading="lazy"
                        className={
                          strip
                            ? "w-full rounded-[1.15rem] object-contain"
                            : "max-h-[34rem] w-full rounded-[1.15rem] object-cover object-top"
                        }
                      />
                    </div>
                    <figcaption className="mt-6 grid gap-5 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-start">
                      <div>
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary">
                          {String(index + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
                        </p>
                        <h3 className="display mt-2 text-[clamp(1.7rem,3vw,2.5rem)] leading-none">
                          {group.title}
                        </h3>
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm text-foreground/80"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {project.role?.length ? (
        <section className="bg-white px-5 py-20 sm:px-8 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p data-case-rise className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary">
              {workIntro.roleHeading}
            </p>
            <h2 data-case-rise className="display mt-4 max-w-3xl text-[clamp(2rem,4vw,3.6rem)] leading-none">
              One team, from first sketch to launch.
            </h2>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2">
              {project.role.map((item, index) => (
                <li key={item} data-case-rise className="border-t border-border pt-6">
                  <span className="font-mono text-sm text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-lg leading-relaxed">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      <section className="px-5 py-20 sm:px-8 md:px-12 md:py-24">
        <div data-case-rise className="mx-auto max-w-7xl">
          {project.engines?.length ? (
            <>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary">
                Live across
              </p>
              <p className="mt-4 text-[clamp(1.4rem,3vw,2.2rem)] font-semibold tracking-[-0.03em]">
                {project.engines.join(" · ")}
              </p>
              <img
                src={images.amrut.enginesStrip.src}
                alt={images.amrut.enginesStrip.alt}
                width={images.amrut.enginesStrip.width}
                height={images.amrut.enginesStrip.height}
                className="mt-8 w-full max-w-3xl object-contain"
              />
            </>
          ) : null}
          {project.capabilities?.length ? (
            <div className="mt-12 flex flex-wrap gap-2">
              {project.capabilities.map((item) => (
                <span key={item} className="rounded-full border border-border px-4 py-2 text-sm">
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-foreground px-5 py-20 text-background md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-0 sm:px-3 md:flex-row md:items-end md:px-7">
          <h2 className="max-w-3xl text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-tight">
            {workIntro.contactTitle}
          </h2>
          <ActionButton label={workIntro.contactButton} variant="cream" size="lg" href="/contact" />
        </div>
      </section>
    </article>
  );
}
