"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { parallaxCloser } from "@/data/parallax";
import { isTouchDevice, prefersReducedMotion } from "@/lib/motion";

export function ParallaxCloser() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = root.current;
    if (!section || prefersReducedMotion()) return;

    const touch = isTouchDevice();

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const layersElement = section.querySelector("[data-parallax-layers]");
      if (!layersElement) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: layersElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0,
          // Refresh after the pinned scenes above so this range includes their spacing.
          refreshPriority: -1,
        },
      });

      for (const layer of parallaxCloser.layers) {
        timeline.to(
          `[data-parallax-layer="${layer.depth}"]`,
          { yPercent: touch ? layer.yPercent * 0.45 : layer.yPercent, ease: "none" },
          0,
        );
      }
    }, section);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      aria-labelledby="parallax-closer-title"
      className="relative w-full overflow-hidden bg-foreground"
    >
      <div className="relative flex min-h-[100svh] items-center justify-center">
        <div className="absolute top-0 left-0 h-[120%] w-full">
          <div data-parallax-layers className="absolute inset-0 overflow-hidden">
            {parallaxCloser.layers.map((layer) =>
              layer.image ? (
                <img
                  key={layer.depth}
                  data-parallax-layer={layer.depth}
                  src={layer.image.src}
                  alt={layer.image.alt}
                  width={layer.image.width}
                  height={layer.image.height}
                  loading="lazy"
                  decoding="async"
                  className="pointer-events-none absolute top-[-17.5%] left-0 h-[117.5%] w-full object-cover"
                />
              ) : (
                <div
                  key={layer.depth}
                  data-parallax-layer={layer.depth}
                  className="absolute top-0 left-0 flex h-[100svh] w-full items-center justify-center"
                >
                  <h2
                    id="parallax-closer-title"
                    className="display px-4 text-center text-[clamp(3.2rem,8vw,8rem)] !leading-[0.9] !font-extrabold text-cream"
                  >
                    {parallaxCloser.title
                      .split(/\s+/)
                      .filter(Boolean)
                      .map((line, index, lines) => (
                        <span
                          key={line}
                          className={index === lines.length - 1 ? "block text-clay-light" : "block"}
                        >
                          {line}
                        </span>
                      ))}
                  </h2>
                </div>
              ),
            )}
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[20%] bg-gradient-to-t from-foreground to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-0.5 bg-foreground"
        />
      </div>
    </section>
  );
}
