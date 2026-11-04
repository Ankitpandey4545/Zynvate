"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { process as steps, processIntro } from "@/data/process";
import { useCanPin } from "@/hooks/use-can-pin";
import { cn } from "@/lib/utils";

type Status = "queued" | "running" | "done";

export function Process() {
  const root = useRef<HTMLElement>(null);
  const line = useRef<HTMLDivElement>(null);
  // -1 = static layout (mobile, reduced motion, before hydration): every stage shown as done.
  const [active, setActive] = useState(-1);
  const total = steps.length;
  const canPin = useCanPin(1024);

  useLayoutEffect(() => {
    const section = root.current;
    const bar = line.current;
    if (!canPin || !section || !bar || total === 0) return;
    gsap.registerPlugin(ScrollTrigger);
    const fits = section.offsetHeight <= window.innerHeight + 4;
    setActive(0);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: fits ? "top top" : "top 65%",
            end: fits ? () => `+=${window.innerHeight * 2.2}` : "bottom 60%",
            pin: fits,
            scrub: 0.5,
            invalidateOnRefresh: true,
            onUpdate: (self) =>
              setActive(self.progress >= 0.995 ? total : Math.floor(self.progress * total)),
          },
        },
      );
    }, section);
    ScrollTrigger.refresh();
    return () => {
      ctx.revert();
      setActive(-1);
    };
  }, [total, canPin]);

  if (total === 0) return null;

  const status = (index: number): Status => {
    if (active === -1 || index < active) return "done";
    return index === active ? "running" : "queued";
  };
  const done = active === -1 ? total : Math.min(active, total);

  return (
    <section id="process" ref={root} aria-labelledby="process-title" className="bg-background bg-tech-grid-light">
      <div className="mx-auto flex max-w-7xl flex-col justify-center px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:min-h-[100svh] lg:py-16">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-primary">{processIntro.eyebrow}</p>
            <h2 id="process-title" className="display mt-4 text-[clamp(2.5rem,7vw,3.75rem)]">{processIntro.title}</h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            {processIntro.description}
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] xl:gap-14">
          <div className="relative">
            <div aria-hidden className="absolute bottom-7 left-[19px] top-7 w-px bg-border">
              <div ref={line} className="h-full w-full origin-top bg-primary" />
            </div>
            <ol>
              {steps.map((step, index) => {
                const state = status(index);
                return (
                  <li
                    key={step.number}
                    className={cn(
                      "relative grid grid-cols-[40px_1fr_auto] items-center gap-4 py-2.5 transition-opacity duration-500",
                      state === "queued" && "opacity-60",
                    )}
                  >
                    <span
                      className={cn(
                        "relative z-10 grid size-10 place-items-center border font-mono text-xs transition-colors duration-500",
                        state === "queued" && "border-border bg-background text-muted-foreground",
                        state === "running" && "border-primary bg-background text-primary",
                        state === "done" && "border-primary bg-primary text-primary-foreground",
                      )}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold lg:text-2xl">{step.title}</h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "hidden font-mono text-[0.65rem] uppercase tracking-[0.18em] sm:inline",
                        state === "running" ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {state === "done" ? "passed" : state}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          <div
            aria-hidden
            className="hidden flex-col border border-foreground/15 bg-foreground text-background shadow-float lg:flex"
          >
            <div className="flex items-center gap-3 border-b border-background/15 px-4 py-3">
              <span className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-clay" />
                <span className="size-2.5 rounded-full bg-sand/70" />
                <span className="size-2.5 rounded-full bg-background/25" />
              </span>
              <span className="font-mono text-xs text-background/70">zynovate — pipeline</span>
            </div>
            <div className="min-h-[340px] flex-1 space-y-3 p-6 font-mono text-[0.8rem] leading-6">
              {steps.map((step, index) => {
                const state = status(index);
                if (state === "queued") return null;
                return (
                  <div key={step.number}>
                    <p>
                      <span className="text-clay-light">$</span> {step.command}
                    </p>
                    {state === "done" ? (
                      <p className="text-sand">{step.output}</p>
                    ) : (
                      <p className="text-background/60">
                        running
                        <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-background/70" />
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-4 border-t border-background/15 px-6 py-4 font-mono text-xs text-background/70">
              <span>
                stage {Math.min(done + (done < total ? 1 : 0), total)}/{total}
              </span>
              <span className="h-px flex-1 bg-background/15">
                <span
                  className="block h-full origin-left bg-clay-light transition-transform duration-500"
                  style={{ transform: `scaleX(${done / total})` }}
                />
              </span>
              <span>{done === total ? "complete" : "in progress"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
