"use client";

import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";

import { technologies, technologiesIntro } from "@/data/technologies";
import { useIsHome } from "@/hooks/use-is-home";
import { prefersReducedMotion } from "@/lib/motion";
import type { Technology } from "@/lib/types";
import { cn } from "@/lib/utils";

type Point = { x: number; y: number };
type WaveVariant = "desktop" | "compact";

const MARQUEE_TEXT_COLORS = ["#7A4426", "#4C6A8A", "#76558A", "#3E7661", "#9A4B4B", "#2B1A10"];

function MarqueeRow({
  names,
  rowRef,
  colorOffset = 0,
}: {
  names: string[];
  rowRef: RefObject<HTMLDivElement | null>;
  colorOffset?: number;
}) {
  const loop = [...names, ...names];
  return (
    <div className="overflow-hidden py-1">
      <div ref={rowRef} className="flex w-max will-change-transform">
        {loop.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="display flex items-center px-5 py-1 text-[clamp(2rem,6vw,3.75rem)] leading-snug md:px-8 md:py-2"
            style={{
              color: MARQUEE_TEXT_COLORS[(index + colorOffset) % MARQUEE_TEXT_COLORS.length],
            }}
          >
            {name}
            <span aria-hidden className="ml-10 size-2 rounded-full bg-current md:ml-14" />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Two-crest ribbon for a 15-item stack. Any other length uses a sine so order still follows the data. */
const RIBBON = [
  -0.15, 0.42, -1, 0.08, 0.92, -0.22, -0.48, 0.18, -0.02, 0.78, 0.2, 0.48, -0.95, 0.12, -0.28,
];

function ribbonOffset(index: number, count: number) {
  if (count === RIBBON.length) return RIBBON[index] ?? 0;
  const t = count <= 1 ? 0 : index / (count - 1);
  return Math.sin(t * Math.PI * 2.1 + 2.15);
}

function compactOffset(index: number) {
  const side = index % 2 === 0 ? -0.9 : 0.9;
  return side + Math.sin(index * 0.9) * 0.12;
}

function layoutPoints(count: number, width: number, height: number, variant: WaveVariant): Point[] {
  const inset =
    variant === "desktop"
      ? Math.max(36, Math.min(58, width * 0.036))
      : Math.max(22, Math.min(40, width * 0.065));
  const amp = variant === "desktop" ? Math.min(32, height * 0.16) : Math.min(26, height * 0.13);
  const mid = variant === "desktop" ? Math.max(amp + 40, height * 0.4) : height * 0.48;
  const span = Math.max(0, width - inset * 2);

  return Array.from({ length: count }, (_, index) => {
    const x = count === 1 ? width / 2 : inset + (span * index) / (count - 1);
    const offset = variant === "desktop" ? ribbonOffset(index, count) : compactOffset(index);
    return { x, y: mid + offset * amp };
  });
}

function curvePath(points: Point[]) {
  const first = points[0];
  if (!first) return "";
  if (points.length === 1) return `M ${first.x.toFixed(2)} ${first.y.toFixed(2)}`;
  let d = `M ${first.x.toFixed(2)} ${first.y.toFixed(2)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    if (!p1 || !p2) continue;
    const prev = points[i - 1];
    const next = points[i + 2];
    const p0 = prev ?? { x: p1.x * 2 - p2.x, y: p1.y * 2 - p2.y };
    const p3 = next ?? { x: p2.x * 2 - p1.x, y: p2.y * 2 - p1.y };
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }
  return d;
}

function WaveRow({ items, variant }: { items: Technology[]; variant: WaveVariant }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      const next = { w: Math.round(rect.width), h: Math.round(rect.height) };
      setSize((prev) => (prev.w === next.w && prev.h === next.h ? prev : next));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const points =
    size.w > 0 && size.h > 0 ? layoutPoints(items.length, size.w, size.h, variant) : [];

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full",
        variant === "desktop" ? "h-[208px] xl:h-[220px]" : "h-[212px] sm:h-[226px]",
      )}
    >
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full text-taupe"
        viewBox={`0 0 ${Math.max(size.w, 1)} ${Math.max(size.h, 1)}`}
      >
        <path
          d={curvePath(points)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="4 7"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <ul className="absolute inset-0 m-0 list-none p-0">
        {items.map((item, index) => {
          const point = points[index];
          if (!point || size.w === 0 || size.h === 0) return null;
          return (
            <li
              key={item.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 hover:z-10"
              style={{
                left: `${(point.x / size.w) * 100}%`,
                top: `${(point.y / size.h) * 100}%`,
              }}
            >
              <div
                data-tech-wave
                className="tech-wave-bob"
                style={{ animationDelay: `${-(index * 0.18)}s` }}
              >
                <div data-tech-badge className="tech-wave-badge relative">
                  <div
                    aria-hidden
                    className={cn(
                      "grid place-items-center overflow-hidden rounded-full shadow-soft",
                      variant === "desktop"
                        ? "size-[clamp(4rem,5vw,4.75rem)]"
                        : "size-10 sm:size-12 md:size-14",
                    )}
                    style={{ backgroundColor: item.brand }}
                  >
                    <img
                      src={item.logo}
                      alt=""
                      width={32}
                      height={32}
                      draggable={false}
                      className="size-8 max-h-[68%] max-w-[68%] object-contain"
                    />
                  </div>
                  <span
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center font-medium leading-tight text-espresso",
                      variant === "compact" && index % 2 === 0
                        ? "bottom-[calc(100%+0.3rem)] text-[10px] sm:text-[11px] md:text-xs"
                        : variant === "desktop"
                          ? "top-[calc(100%+0.4rem)] text-[11px] xl:text-xs"
                          : "top-[calc(100%+0.3rem)] text-[10px] sm:text-[11px] md:text-xs",
                    )}
                  >
                    {item.name}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function TechWave({ items }: { items: Technology[] }) {
  const mid = Math.ceil(items.length / 2);
  const rows = [items.slice(0, mid), items.slice(mid)].filter((row) => row.length > 0);

  return (
    <div className="mt-16 md:mt-20">
      <div className="flex flex-col gap-1 px-2 sm:px-4 lg:hidden">
        {rows.map((row) => (
          <WaveRow key={row.map((item) => item.name).join("-")} items={row} variant="compact" />
        ))}
      </div>
      <div className="hidden px-3 lg:block xl:px-6">
        <WaveRow items={items} variant="desktop" />
      </div>
    </div>
  );
}

export function Technologies() {
  const home = useIsHome();
  const root = useRef<HTMLElement>(null);
  const rowA = useRef<HTMLDivElement>(null);
  const rowB = useRef<HTMLDivElement>(null);
  const names = technologies.map((item) => item.name);
  const reversed = [...names].reverse();

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const first = rowA.current;
    const second = rowB.current;
    if (!first || !second) return;

    let frame = 0;
    let offsetA = 0;
    let offsetB = 0;
    let ready = false;
    let boost = 0;
    let lastY = window.scrollY;

    const tick = () => {
      const halfA = first.scrollWidth / 2;
      const halfB = second.scrollWidth / 2;
      if (!ready && halfA > 0 && halfB > 0) {
        offsetB = -halfB;
        ready = true;
      }
      const dy = window.scrollY - lastY;
      lastY = window.scrollY;
      boost = Math.max(boost * 0.88, Math.min(14, Math.abs(dy) * 0.35));
      const speed = 0.65 + boost;
      if (halfA > 0) {
        offsetA -= speed;
        if (offsetA <= -halfA) offsetA += halfA;
        first.style.transform = `translate3d(${offsetA}px, 0, 0)`;
      }
      if (halfB > 0) {
        offsetB += speed;
        if (offsetB >= 0) offsetB -= halfB;
        second.style.transform = `translate3d(${offsetB}px, 0, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    const visibility = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      if (entry?.isIntersecting) {
        lastY = window.scrollY;
        frame = requestAnimationFrame(tick);
      }
    });
    if (root.current) visibility.observe(root.current);
    return () => {
      visibility.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  if (technologies.length === 0) return null;

  return (
    <section
      id="technologies"
      ref={root}
      aria-labelledby="technologies-title"
      className="overflow-hidden bg-secondary py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
        {home ? <p className="eyebrow text-primary">{technologiesIntro.eyebrow}</p> : null}
        <div className={`${home ? "mt-5" : ""} flex flex-col justify-between gap-5 lg:flex-row lg:items-end`}>
          <h2 id="technologies-title" className="display max-w-3xl text-[clamp(2.5rem,7vw,4.5rem)]">
            {technologiesIntro.title}
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {technologiesIntro.description}
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-1 md:mt-14 md:space-y-2" aria-hidden>
        <MarqueeRow names={names} rowRef={rowA} />
        <MarqueeRow names={reversed} rowRef={rowB} colorOffset={3} />
      </div>

      <TechWave items={technologies} />
    </section>
  );
}
