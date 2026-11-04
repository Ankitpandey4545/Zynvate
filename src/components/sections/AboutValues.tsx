"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { aboutValues } from "@/data/values";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function AboutValues() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = root.current;
    if (!section || prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const spine = section.querySelector<HTMLElement>("[data-value-spine]");
      const fill = section.querySelector<HTMLElement>("[data-value-fill]");
      const items = gsap.utils.toArray<HTMLElement>("[data-value-item]");

      if (spine) {
        gsap.fromTo(
          spine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              end: "bottom 55%",
              scrub: true,
            },
          },
        );
      }

      if (fill) {
        gsap.fromTo(
          fill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 68%",
              end: "bottom 45%",
              scrub: true,
            },
          },
        );
      }

      items.forEach((item, index) => {
        const fromLeft = index % 2 === 0;
        gsap.fromTo(
          item,
          { opacity: 0.16, x: fromLeft ? -32 : 32 },
          {
            opacity: 1,
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 84%",
              end: "top 50%",
              scrub: true,
            },
          },
        );
      });
    }, section);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      aria-labelledby="values-title"
      className="bg-background px-5 py-20 sm:px-6 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="values-title"
          className="display text-center text-[clamp(2.4rem,6vw,4.25rem)] leading-none tracking-[-0.04em]"
        >
          {aboutValues.title}
        </h2>

        <div className="relative mx-auto mt-16 max-w-4xl md:mt-24">
          <div
            aria-hidden
            data-value-spine
            className="absolute bottom-2 left-4 top-2 origin-top bg-border md:left-1/2 md:-translate-x-px"
            style={{ width: 1 }}
          />
          <div
            aria-hidden
            data-value-fill
            className="absolute bottom-2 left-4 top-2 origin-top bg-foreground md:left-1/2 md:-translate-x-px"
            style={{ width: 1 }}
          />

          <ul className="relative space-y-16 md:space-y-28">
            {aboutValues.items.map((item, index) => {
              const left = index % 2 === 0;
              return (
                <li key={item.title} data-value-item className="relative md:grid md:grid-cols-2 md:items-start">
                  <span
                    aria-hidden
                    className="absolute left-4 top-[0.85rem] size-2 -translate-x-1/2 rounded-full bg-foreground md:left-1/2"
                  />
                  <div
                    className={cn(
                      "relative pl-10 md:max-w-[20rem] md:pl-0",
                      left
                        ? "md:col-start-1 md:justify-self-end md:pr-16 md:text-right"
                        : "md:col-start-2 md:justify-self-start md:pl-16",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute top-[1.05rem] hidden h-px bg-border md:block",
                        left ? "right-0 w-12" : "left-0 w-12",
                      )}
                    />
                    <h3 className="display text-[clamp(1.85rem,3.4vw,2.75rem)] leading-none tracking-[-0.03em]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
