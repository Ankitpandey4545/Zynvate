"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, UserRound } from "lucide-react";
import { testimonials, testimonialsIntro } from "@/data/testimonials";
import { useIsHome } from "@/hooks/use-is-home";

export function Testimonials() {
  const home = useIsHome();
  const [activeIndex, setActiveIndex] = useState(0);
  const flagged = testimonials.length === 0 || testimonials.every((item) => item.isPlaceholder);
  const visible = testimonials.slice(activeIndex, activeIndex + 3);
  const maxIndex = Math.max(0, testimonials.length - 3);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-secondary py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:mb-14 lg:flex-row lg:items-end">
          <div>
            {home ? <p className="eyebrow text-primary">{testimonialsIntro.eyebrow}</p> : null}
            <h2
              id="testimonials-title"
              className="display mt-5 max-w-3xl text-[clamp(2.5rem,7vw,4.5rem)]"
            >
              {flagged ? testimonialsIntro.title : "Notes from clients."}
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {testimonialsIntro.description}
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="relative">
            <button
              type="button"
              suppressHydrationWarning
              aria-label="Previous testimonial"
              onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}
              disabled={activeIndex === 0}
              className="absolute left-0 top-1/2 z-10 hidden size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 lg:grid"
            >
              <ChevronLeft className="size-5" strokeWidth={1.7} />
            </button>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((item, index) => (
                <figure
                  key={item.role}
                  className={[
                    "group relative flex min-h-[19rem] flex-col overflow-hidden rounded-[1.35rem] border p-7 shadow-[0_8px_30px_-22px_rgba(76,43,25,0.45)] transition-transform duration-300 hover:-translate-y-1 sm:p-8",
                    (index + activeIndex) % 2 === 1
                      ? "border-border bg-card"
                      : "border-primary/15 bg-[#fff8f0]",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-14 place-items-center rounded-full bg-primary/10 text-3xl font-semibold leading-none text-primary">
                      “
                    </span>
                    {item.isPlaceholder ? (
                      <span className="rounded-full border border-primary/20 bg-background/60 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-primary">
                        Coming soon{" "}
                        <span
                          aria-hidden
                          className="ml-1 inline-block size-2 rounded-full bg-primary align-middle"
                        />
                      </span>
                    ) : null}
                  </div>

                  <blockquote className="mt-5 max-w-[22rem] text-[1.15rem] leading-[1.42] text-foreground/80 sm:text-[1.25rem]">
                    {item.quote}
                  </blockquote>
                  <div className="mt-5 h-px w-12 bg-primary/45" />

                  <figcaption className="mt-auto flex items-center gap-4 pt-6">
                    <span className="grid size-14 shrink-0 place-items-center rounded-full bg-background text-primary shadow-sm">
                      <UserRound className="size-7" strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0">
                      <strong className="block text-sm font-bold text-foreground">
                        {item.role.replace(" (placeholder)", "")}
                      </strong>
                      <span className="mt-1 block text-sm text-muted-foreground">Placeholder</span>
                    </span>
                  </figcaption>

                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-12 right-1 text-[12rem] font-serif leading-none text-primary/[0.06]"
                  >
                    “
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-12 right-[-2.5rem] text-[12rem] font-serif leading-none text-primary/[0.045]"
                  >
                    “
                  </span>
                </figure>
              ))}
            </div>
            <button
              type="button"
              suppressHydrationWarning
              aria-label="Next testimonial"
              onClick={() => setActiveIndex((index) => Math.min(maxIndex, index + 1))}
              disabled={activeIndex === maxIndex}
              className="absolute right-0 top-1/2 z-10 hidden size-12 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-foreground shadow-soft transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 lg:grid"
            >
              <ChevronRight className="size-5" strokeWidth={1.7} />
            </button>
          </div>
        ) : null}

        <div className="mt-7 flex items-center justify-center gap-3" aria-label="Testimonial pages">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              type="button"
              key={index}
              suppressHydrationWarning
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={[
                "h-2 rounded-full transition-all",
                index === activeIndex ? "w-7 bg-primary" : "w-6 bg-primary/20",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
