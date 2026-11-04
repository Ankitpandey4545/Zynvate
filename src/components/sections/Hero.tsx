"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { HeroShowcase } from "@/components/mockups/HeroShowcase";
import { ActionButton } from "@/components/ui/ActionButton";
import { ProjectInquiryModal } from "@/components/layout/ProjectInquiryModal";
import { isTouchDevice, prefersReducedMotion } from "@/lib/motion";

const lines = ["Build.", "Launch.", "Evolve."];
const { hero } = site;

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const reduced = prefersReducedMotion();
    let removePointer = () => { };

    const ctx = gsap.context(() => {
      if (reduced) {
        return;
      }

      // Background settles in. Copy stays visible so a stalled tween cannot hide the opening.
      gsap.fromTo(
        "[data-hero-bg]",
        { scale: 1.08 },
        { scale: 1, duration: 1.6, ease: "expo.out", clearProps: "transform" },
      );

      if (isTouchDevice()) return;

      // ---------- Scroll-driven parallax ----------
      const st = { trigger: el, start: "top top", end: "bottom top", scrub: true };
      gsap.to("[data-hero-bg-img]", { scale: 1.18, yPercent: 12, ease: "none", scrollTrigger: st });
      gsap.to("[data-hero-copy]", {
        opacity: 0,
        y: -80,
        ease: "none",
        scrollTrigger: { ...st, end: "60% top" },
      });
      gsap.to("[data-hero-laptop]", { yPercent: -18, ease: "none", scrollTrigger: st });
      gsap.to("[data-hero-phone]", { yPercent: -45, ease: "none", scrollTrigger: st });

      // ---------- Pointer parallax (devices and chips drift at different depths) ----------
      const q = gsap.utils.selector(el);
      const floats = [
        { sel: "[data-hero-float='laptop']", depth: 14 },
        { sel: "[data-hero-float='phone']", depth: 26 },
        { sel: "[data-hero-float='aim']", depth: -12 },
        { sel: "[data-hero-float='offer']", depth: -16 },
        { sel: "[data-hero-float='growth']", depth: 10 },
        { sel: "[data-hero-float='promise']", depth: -8 },
      ]
        .map(({ sel, depth }) => {
          const target = q(sel)[0];
          if (!target) return null;
          const opts = { duration: 0.9, ease: "power3.out" };
          return { depth, x: gsap.quickTo(target, "x", opts), y: gsap.quickTo(target, "y", opts) };
        })
        .filter(Boolean) as { depth: number; x: (v: number) => void; y: (v: number) => void }[];

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        floats.forEach((f) => {
          f.x(nx * f.depth * 2);
          f.y(ny * f.depth * 2);
        });
      };
      el.addEventListener("pointermove", onMove, { passive: true });
      removePointer = () => el.removeEventListener("pointermove", onMove);
    }, root);

    return () => {
      removePointer();
      ctx.revert();
    };
  }, []);

  return (
    <>
      <section
        id="top"
        ref={root}
        aria-labelledby="hero-title"
        className="relative min-h-[100svh] overflow-visible rounded-b-[2rem] lg:h-[100svh] lg:min-h-0 lg:overflow-hidden lg:rounded-b-[3rem]"
      >
        {/* Background image + overlays */}
        <div data-hero-bg aria-hidden className="absolute inset-0 will-change-transform">
          <img
            data-hero-bg-img
            src={images.hero.src}
            alt=""
            width={images.hero.width}
            height={images.hero.height}
            className="h-full w-full object-cover will-change-transform"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/70 to-cream/40 lg:hidden" />
          <div className="absolute inset-0 bg-hero-fade" />
        </div>

        <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-x-8 gap-y-10 px-5 pb-12 pt-28 sm:px-6 lg:h-full lg:min-h-0 lg:grid-cols-[0.9fr_1.15fr] lg:gap-x-6 lg:gap-y-3 lg:px-10 lg:pb-10 lg:pt-24">
          {/* ---------------- Left: copy ---------------- */}
          <div data-hero-copy className="lg:min-h-0">
            <div data-hero-fade className="mb-7 flex flex-wrap items-center gap-3">
              <p className="eyebrow text-primary">{hero.eyebrow}</p>
              <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-cream/60 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full rounded-full bg-primary/50 motion-safe:animate-ping" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                {hero.status}
              </span>
            </div>

            <div className="relative">
              <h1
                id="hero-title"
                className="display text-display-xl relative z-10 text-foreground lg:text-[clamp(4rem,6vw,6.5rem)] lg:leading-[0.86]"
              >
                {lines.map((l, i) => (
                  <span key={l} className="line-mask">
                    <span data-hero-line className={`block ${i === 2 ? "text-primary" : ""}`}>
                      {l}
                    </span>
                  </span>
                ))}
              </h1>
            </div>

            <p
              data-hero-fade
              className="mt-6 max-w-xl text-lg font-light leading-relaxed text-foreground/85 md:text-xl lg:text-[1.1rem] lg:leading-snug"
            >
              {hero.lead}
            </p>
            <p
              data-hero-fade
              className="mt-4 max-w-md border-l-2 border-primary/40 pl-4 text-base leading-relaxed text-foreground/65 lg:text-sm lg:leading-snug"
            >
              {hero.support}
            </p>

            <div data-hero-fade className="mt-7 flex flex-wrap items-center gap-3">
              <ActionButton
                label={site.primaryCta.label}
                size="lg"
                onClick={() => setInquiryOpen(true)}
              />
              <ActionButton
                label={site.secondaryCta.label}
                variant="outline"
                size="lg"
                href={site.secondaryCta.href}
              />
            </div>
          </div>

          {/* ---------------- Right: devices + floating chips ---------------- */}
          <div className="relative mx-auto w-full min-w-0 max-w-[40rem] lg:max-w-none">
            <div className="relative mx-auto aspect-[1.02] w-full lg:w-[min(100%,calc((100svh-9.5rem)*1.02))]">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </section>
      <ProjectInquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
