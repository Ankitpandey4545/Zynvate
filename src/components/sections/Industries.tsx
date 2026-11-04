"use client";

import { useEffect, useRef, useState } from "react";

import { industries, industriesIntro } from "@/data/industries";
import { useIsHome } from "@/hooks/use-is-home";
import { prefersReducedMotion } from "@/lib/motion";
import type { ImageAsset } from "@/lib/types";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");
const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const corners = [
  "left-3 top-3 border-l border-t",
  "right-3 top-3 border-r border-t",
  "bottom-3 left-3 border-b border-l",
  "bottom-3 right-3 border-b border-r",
];

function Photo({ image, decorative = false }: { image?: ImageAsset | undefined; decorative?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (!image || failed) {
    return (
      <div className="grid h-full w-full place-items-center bg-espresso font-mono text-xs text-background/70">
        image unavailable
      </div>
    );
  }
  return (
    <img
      src={image.src}
      alt={decorative ? "" : image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

export function Industries() {
  const home = useIsHome();
  const list = useRef<HTMLOListElement>(null);
  const hovering = useRef(false);
  const [active, setActive] = useState(0);
  const total = industries.length;

  useEffect(() => {
    const el = list.current;
    if (!el) return;
    const rows = Array.from(el.querySelectorAll<HTMLElement>("[data-industry-row]"));
    if (prefersReducedMotion()) {
      rows.forEach((row) => (row.dataset["revealed"] = "true"));
      return;
    }
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset["revealed"] = "true";
          reveal.unobserve(entry.target);
        }),
      { threshold: 0.35 },
    );
    const follow = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hovering.current) return;
          setActive(Number((entry.target as HTMLElement).dataset["index"] ?? 0));
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    rows.forEach((row) => {
      reveal.observe(row);
      follow.observe(row);
    });
    return () => {
      reveal.disconnect();
      follow.disconnect();
    };
  }, []);

  if (total === 0) return null;
  const current = industries[active] ?? industries[0]!;

  return (
    <section
      id="industries"
      aria-labelledby="industries-title"
      className="bg-foreground bg-tech-grid-dark py-20 text-background md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            {home ? <p className="eyebrow text-clay-light">{industriesIntro.eyebrow}</p> : null}
            <h2 id="industries-title" className={`display max-w-3xl text-[clamp(2.5rem,7vw,4.5rem)] ${home ? "mt-4" : ""}`}>{industriesIntro.title}</h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-background/75 md:text-lg">
            {industriesIntro.description}
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <ol
            ref={list}
            onMouseEnter={() => (hovering.current = true)}
            onMouseLeave={() => (hovering.current = false)}
            className="border-t border-background/15"
          >
            {industries.map((item, index) => (
              <li
                key={item.title}
                data-industry-row
                data-index={index}
                className="border-b border-background/15"
              >
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  aria-pressed={active === index}
                  suppressHydrationWarning
                  className={cn(
                    "grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 py-5 text-left transition-colors duration-300",
                    active === index
                      ? "text-background"
                      : "text-background lg:text-background/60 lg:hover:text-background/80",
                  )}
                >
                  <span className="font-mono text-xs">[{pad(index + 1)}]</span>
                  <span>
                    <span className="block text-2xl font-semibold md:text-3xl">{item.title}</span>
                    {item.focus ? (
                      <span className="mt-1 block text-sm text-background/70">{item.focus}</span>
                    ) : null}
                  </span>
                  <span className="hidden font-mono text-xs text-background/60 sm:inline">
                    /{slug(item.title)}
                  </span>
                </button>
                <div className="industry-reveal relative mb-5 aspect-[16/9] overflow-hidden md:aspect-[21/9] lg:hidden">
                  <Photo image={item.image} />
                  {item.image?.isPlaceholder ? (
                    <span className="absolute left-3 top-3 bg-espresso/80 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-background/80">
                      placeholder image
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          <div aria-hidden className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden border border-background/15 bg-espresso">
                {industries.map((item, index) => (
                  <div
                    key={item.title}
                    data-active={active === index}
                    className="industry-frame absolute inset-0"
                  >
                    <Photo image={item.image} decorative />
                  </div>
                ))}
                <div aria-hidden className="pointer-events-none absolute inset-0 z-[2] bg-scanlines" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24 bg-gradient-to-b from-espresso/80 to-transparent"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-1/2 bg-gradient-to-t from-espresso/90 to-transparent"
                />
                {corners.map((position) => (
                  <span
                    key={position}
                    aria-hidden
                    className={cn("absolute z-[3] size-5 border-background/70", position)}
                  />
                ))}
                <div className="absolute inset-x-0 top-0 z-[3] flex justify-between px-6 py-5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-background/75">
                  <span>
                    use case {pad(active + 1)}/{pad(total)}
                  </span>
                  {current.image?.isPlaceholder ? <span>placeholder image</span> : null}
                </div>
                <div className="absolute inset-x-0 bottom-0 z-[3] px-6 pb-6">
                  <p className="font-mono text-xs text-sand">/{slug(current.title)}</p>
                  <p className="display mt-2 text-4xl">{current.title}</p>
                  {current.focus ? (
                    <p className="mt-2 text-sm text-background/70">{current.focus}</p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
