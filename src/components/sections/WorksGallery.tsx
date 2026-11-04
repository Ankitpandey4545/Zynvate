"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ActionButton } from "@/components/ui/ActionButton";
import { type WorkFilter, workFilters, workGallery } from "@/data/works";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

function WaveLabel({ text, className }: { text: string; className?: string }) {
  return (
    <span className={cn("action-btn pointer-events-none inline-flex", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="action-stage">
        <span className="action-measure">{text}</span>
        <span className="action-letters action-letters-out">
          {Array.from(text).map((char, index) => (
            <span key={`out-${index}`} className="action-letter" style={{ ["--i" as string]: index }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        <span className="action-letters action-letters-in">
          {Array.from(text).map((char, index) => (
            <span key={`in-${index}`} className="action-letter" style={{ ["--i" as string]: index }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}

export function WorksGallery() {
  const root = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<WorkFilter>("All");

  const items = useMemo(
    () => (filter === "All" ? workGallery : workGallery.filter((item) => item.category === filter)),
    [filter],
  );

  useLayoutEffect(() => {
    const section = root.current;
    if (!section || prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const title = section.querySelector<HTMLElement>("[data-works-title]");
    const overlay = section.querySelector<HTMLElement>("[data-works-overlay]");
    if (!title || !overlay) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        title,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -28,
          ease: "none",
          scrollTrigger: {
            trigger: overlay,
            start: "top 62%",
            end: "top 28%",
            scrub: true,
          },
        },
      );
    }, section);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      aria-labelledby="works-gallery-title"
      className="bg-background px-5 pb-20 pt-12 sm:px-6 md:px-12 md:pb-28 md:pt-16"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="relative z-0 flex h-[34svh] items-center justify-center md:h-[40svh]">
          <h2
            id="works-gallery-title"
            data-works-title
            className="display sticky top-28 text-center text-[clamp(3.4rem,10vw,8.4rem)] leading-[0.86] tracking-[-0.055em]"
          >
            Our <span className="italic">Works</span>
          </h2>
        </div>

        <div data-works-overlay className="relative z-10 -mt-6 md:-mt-10">
          <div
            role="group"
            aria-label="Work categories"
            className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 bg-background/92 py-3 backdrop-blur-md"
          >
            {workFilters.map((label) => {
              const active = filter === label;
              return (
                <ActionButton
                  key={label}
                  label={label}
                  icon={null}
                  size="sm"
                  variant={active ? "primary" : "outline"}
                  onClick={() => setFilter(label)}
                  className="!h-9 min-w-0 px-4 text-[0.82rem]"
                />
              );
            })}
          </div>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-7">
            {items.map((item) => {
              const caseHref = item.href;
              const siteHref = item.siteHref;
              const preview = (
                <div className="work-card group relative aspect-[16/10] overflow-hidden rounded-[1.15rem] bg-secondary">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-[transform,filter] duration-500 group-hover:scale-[1.04] group-hover:blur-[6px]"
                  />
                  <div className="absolute inset-0 grid place-items-center bg-espresso/35 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <WaveLabel
                      text="View project"
                      className="border-transparent bg-cream px-4 py-2 text-espresso"
                    />
                  </div>
                </div>
              );

              return (
                <li key={`${item.category}-${item.title}`}>
                  <article className="rounded-[1.6rem] bg-white p-3 shadow-[0_18px_40px_-28px_rgba(43,26,16,0.4)]">
                    {caseHref ? <Link href={caseHref}>{preview}</Link> : preview}
                    <div className="flex items-end justify-between gap-4 px-1.5 pb-2 pt-4">
                      <div>
                        <p className="text-[1.15rem] font-semibold leading-tight text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      {siteHref ? (
                        <a
                          href={siteHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-foreground"
                        >
                          Visit site
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      ) : (
                        <span className="inline-flex shrink-0 items-center gap-1 text-sm text-foreground/55">
                          Visit site
                          <ArrowUpRight className="size-3.5" />
                        </span>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
