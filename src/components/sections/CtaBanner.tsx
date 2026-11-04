"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { images } from "@/data/images";
import { useCanPin } from "@/hooks/use-can-pin";
import { prefersReducedMotion } from "@/lib/motion";

export function CtaBanner() {
  const wrapper = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);
  const foreground = useRef<HTMLImageElement>(null);
  // Pinned dolly only for a fine pointer at desktop width. Same stacked frame otherwise.
  const canPin = useCanPin(1024);

  useLayoutEffect(() => {
    const root = wrapper.current;
    const heroEl = hero.current;
    const image = foreground.current;
    if (!root || !heroEl || !image || prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    if (!canPin) {
      const mobile = gsap.context(() => {
        gsap.fromTo(
          image,
          { scale: 1, z: 0 },
          {
            scale: 1.45,
            z: 140,
            transformOrigin: "center center",
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }, root);
      ScrollTrigger.refresh();
      return () => mobile.revert();
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: true,
          },
        })
        .to(image, {
          scale: 2,
          z: 350,
          transformOrigin: "center center",
          ease: "power1.inOut",
        })
        .to(
          heroEl,
          { scale: 1.1, transformOrigin: "center center", ease: "power1.inOut" },
          "<",
        );
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [canPin]);

  const { hero: heroImage, foreground: foregroundImage } = images.ctaZoom;

  return (
    <div ref={wrapper} data-cta-zoom className="relative z-[1] w-full">
      <div className="relative z-[1] w-full overflow-x-hidden">
        <section
          ref={hero}
          aria-label="Featured visual"
          className="h-screen w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 z-[2] h-screen w-full overflow-hidden perspective-[500px]">
        <img
          ref={foreground}
          src={foregroundImage.src}
          alt={foregroundImage.alt}
          width={foregroundImage.width}
          height={foregroundImage.height}
          className="h-full w-full object-cover object-center [transform-style:preserve-3d]"
        />
      </div>
    </div>
  );
}
