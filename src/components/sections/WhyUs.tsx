"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { images } from "@/data/images";
import { whyIntro, whyUs } from "@/data/whyUs";
import { HighlightZynovate } from "@/components/ui/Zynovate";
import { useSmoothScroll } from "@/components/motion/SmoothScrollProvider";
import { useCanPin } from "@/hooks/use-can-pin";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");
const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function WindowDots() {
  return (
    <span aria-hidden className="flex gap-1.5">
      <span className="size-2.5 rounded-full bg-clay" />
      <span className="size-2.5 rounded-full bg-sand/70" />
      <span className="size-2.5 rounded-full bg-background/25" />
    </span>
  );
}

function Snippet({ index, title, signal }: { index: number; title: string; signal: string }) {
  return (
    <pre className="overflow-hidden whitespace-pre-wrap font-mono text-[0.8rem] leading-6 text-background/70 lg:text-sm lg:leading-7">
      <code>
        <span className="text-background/60">{`// ${pad(index + 1)} — ${title}`}</span>
        {"\n"}
        <span className="text-clay-light">const</span> principle = {"{"}
        {"\n  "}id: <span className="text-sand">&quot;{slug(title)}&quot;</span>,{"\n  "}run:{" "}
        <span className="text-sand">{signal}</span>,{"\n  "}status:{" "}
        <span className="text-sand">&quot;active&quot;</span>,{"\n"}
        {"};"}
      </code>
    </pre>
  );
}

export function WhyUs() {
  const stage = useRef<HTMLDivElement>(null);
  const trigger = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const { scrollTo } = useSmoothScroll();
  const total = whyUs.length;
  const canPin = useCanPin(1024);

  useLayoutEffect(() => {
    const pinned = stage.current;
    if (!canPin || !pinned || total < 2) return;
    if (pinned.offsetHeight > window.innerHeight + 4) return;
    gsap.registerPlugin(ScrollTrigger);
    const st = ScrollTrigger.create({
      trigger: pinned,
      start: "top top",
      end: () => `+=${(total - 1) * window.innerHeight * 0.55}`,
      pin: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => setActive(Math.min(total - 1, Math.round(self.progress * (total - 1)))),
    });
    trigger.current = st;
    ScrollTrigger.refresh();
    return () => {
      st.kill();
      trigger.current = null;
    };
  }, [total, canPin]);

  const select = (index: number) => {
    const st = trigger.current;
    if (!st) return setActive(index);
    scrollTo(st.start + (st.end - st.start) * (index / (total - 1)) + 1);
  };

  if (total === 0) return null;
  const current = whyUs[active] ?? whyUs[0]!;

  return (
    <section id="why" aria-labelledby="why-title" className="bg-foreground text-background">
      <div ref={stage} className="relative hidden min-h-[100svh] overflow-hidden lg:block">
        <img
          src={images.why.src}
          alt={images.why.alt}
          width={images.why.width}
          height={images.why.height}
          loading="lazy"
          decoding="async"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-[0.1] grayscale"
        />
        <div aria-hidden className="absolute inset-0 bg-tech-grid-dark" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-10 py-16">
          <div className="flex items-end justify-between gap-10">
            <div>
              <p className="eyebrow text-clay-light">
                <HighlightZynovate text={whyIntro.eyebrow} />
              </p>
              <h2 id="why-title" className="display mt-4 text-5xl xl:text-6xl">
                <HighlightZynovate text={whyIntro.title} />
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-background/75">
                {whyIntro.description}
              </p>
            </div>
            <p className="shrink-0 font-mono text-sm text-background/70" aria-live="polite">
              [{pad(active + 1)}/{pad(total)}] {slug(current.title)}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-[0.85fr_1.15fr] gap-8 xl:gap-12">
            <ol className="border-t border-background/15">
              {whyUs.map((item, index) => (
                <li key={item.title}>
                  <button
                    type="button"
                    onClick={() => select(index)}
                    aria-current={active === index ? "step" : undefined}
                    suppressHydrationWarning
                    className={cn(
                      "flex w-full items-center gap-4 border-b border-background/15 px-3 py-2.5 text-left transition-colors duration-300",
                      active === index
                        ? "bg-background/[0.06] text-background"
                        : "text-background/60 hover:text-background/80",
                    )}
                  >
                    <span className="font-mono text-xs">{pad(index + 1)}</span>
                    <span className="flex-1 text-sm font-medium lg:text-base">{item.title}</span>
                    <span
                      aria-hidden
                      className={cn(
                        "h-px w-10 origin-right bg-clay-light transition-[opacity,transform] duration-500",
                        active === index ? "scale-x-100 opacity-100" : "scale-x-[0.4] opacity-0",
                      )}
                    />
                  </button>
                </li>
              ))}
            </ol>

            <div className="flex flex-col border border-background/15 bg-espresso/85 shadow-float backdrop-blur-sm">
              <div className="flex items-center gap-3 border-b border-background/15 px-4 py-3">
                <WindowDots />
                <span className="font-mono text-xs text-background/70">why-zynovate.ts</span>
                <span className="ml-auto font-mono text-[0.65rem] uppercase tracking-[0.18em] text-background/60">
                  principles
                </span>
              </div>
              <div className="relative min-h-[360px] flex-1">
                {whyUs.map((item, index) => (
                  <div
                    key={item.title}
                    aria-hidden={active !== index}
                    className={cn(
                      "absolute inset-0 flex flex-col justify-between gap-6 p-6 transition-[opacity,transform] duration-500 ease-[var(--ease-out-expo)] xl:p-8",
                      active === index
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-3 opacity-0",
                    )}
                  >
                    <Snippet index={index} title={item.title} signal={item.signal} />
                    <div>
                      <h3 className="display text-3xl xl:text-4xl">{item.title}</h3>
                      <p className="mt-4 max-w-lg text-base leading-relaxed text-background/75">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-px bg-background/10">
                <div
                  className="h-full origin-left bg-clay transition-transform duration-500"
                  style={{ transform: `scaleX(${(active + 1) / total})` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-tech-grid-dark px-5 py-20 sm:px-6 md:px-10 md:py-28 lg:hidden">
        <p className="eyebrow text-clay-light">
          <HighlightZynovate text={whyIntro.eyebrow} />
        </p>
        <h2 className="display mt-4 text-[clamp(2.5rem,7vw,3.75rem)]">
          <HighlightZynovate text={whyIntro.title} />
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-background/75">
          {whyIntro.description}
        </p>
        <ol className="mt-10 grid gap-3 md:grid-cols-2 md:gap-4">
          {whyUs.map((item, index) => (
            <li key={item.title} className="border border-background/15 bg-espresso/85">
              <div className="flex items-center gap-3 border-b border-background/15 px-4 py-2.5">
                <WindowDots />
                <span className="font-mono text-xs text-background/70">
                  {pad(index + 1)} / {pad(total)}
                </span>
              </div>
              <div className="p-5">
                <p className="font-mono text-xs text-sand">{item.signal}</p>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
