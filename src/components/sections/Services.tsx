"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe2,
  Smartphone,
  Blocks,
  Cloud,
  PenTool,
  Braces,
  Workflow,
  Wrench,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { services, servicesIntro } from "@/data/services";
import { useCanPin } from "@/hooks/use-can-pin";
import { useIsHome } from "@/hooks/use-is-home";
import { useSmoothScroll } from "@/components/motion/SmoothScrollProvider";
import { ActionButton } from "@/components/ui/ActionButton";
import { cn } from "@/lib/utils";
import {
  WebDev3D,
  MobileDev3D,
  CustomSoftware3D,
  Saas3D,
  UIUX3D,
  Backend3D,
  Automation3D,
  Maintenance3D,
} from "./services/Service3DGraphics";

const icons = {
  Globe2,
  Smartphone,
  Blocks,
  Cloud,
  PenTool,
  Braces,
  Workflow,
  Wrench,
};

const graphics: Record<string, React.ComponentType<{ className?: string }>> = {
  "Web Development": WebDev3D,
  "Mobile App Development": MobileDev3D,
  "Custom Software": CustomSoftware3D,
  "SaaS Development": Saas3D,
  "UI/UX Design": UIUX3D,
  "Backend & API Development": Backend3D,
  "Business Automation": Automation3D,
  "Maintenance & Support": Maintenance3D,
};

export function Services() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const [activeCard, setActiveCard] = useState(1); // Card 2 active by default matching reference
  const { scrollTo } = useSmoothScroll();
  const pinned = useCanPin(1024);
  const home = useIsHome();

  useLayoutEffect(() => {
    if (!pinned || !root.current || !track.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const distance = () =>
        Math.max(0, (track.current?.scrollWidth ?? 0) - window.innerWidth + 80);

      const tween = gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          pin: true,
          scrub: 0.8,
          start: "top top",
          end: () => `+=${distance() + window.innerHeight * 0.4}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progress.current) {
              progress.current.style.transform = `scaleX(${self.progress})`;
            }
            const idx = Math.min(services.length - 1, Math.floor(self.progress * services.length));
            setActiveCard(idx);
          },
        },
      });

      scrollTriggerRef.current = tween.scrollTrigger ?? null;
    }, root);

    ScrollTrigger.refresh();
    return () => {
      ctx.revert();
      scrollTriggerRef.current = null;
    };
  }, [pinned]);

  const scrollToCard = (index: number) => {
    setActiveCard(index);
    const targetIdx = Math.max(0, Math.min(services.length - 1, index));

    if (pinned && scrollTriggerRef.current) {
      const st = scrollTriggerRef.current;
      const targetScroll =
        st.start + (st.end - st.start) * (targetIdx / Math.max(1, services.length - 1));
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    } else if (track.current) {
      const card = track.current.querySelectorAll("article")[targetIdx];
      if (card instanceof HTMLElement) {
        track.current.scrollTo({
          left: Math.max(0, card.offsetLeft - 20),
          behavior: "smooth",
        });
      }
    }
  };

  const handlePrev = () => {
    scrollToCard(activeCard > 0 ? activeCard - 1 : services.length - 1);
  };

  const handleNext = () => {
    scrollToCard(activeCard < services.length - 1 ? activeCard + 1 : 0);
  };

  return (
    <section
      id="services"
      ref={root}
      aria-labelledby="services-title"
      className={cn(
        "relative overflow-hidden bg-background py-20 md:py-28",
        pinned && "flex min-h-[100svh] flex-col justify-center lg:py-14",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
        {home ? <p className="eyebrow text-primary">{servicesIntro.eyebrow}</p> : null}
        <div className={`${home ? "mt-5" : ""} flex flex-col justify-between gap-5 lg:flex-row lg:items-end`}>
          <h2 id="services-title" className="display text-[clamp(2.5rem,7vw,4.5rem)]">
            {servicesIntro.title}
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {servicesIntro.description}
          </p>
        </div>
        {pinned && (
          <div aria-hidden className="mt-10 h-px bg-border">
            <div ref={progress} className="h-full w-full origin-left scale-x-0 bg-primary" />
          </div>
        )}
      </div>

      {/* Carousel Track Container */}
      <div className="relative mt-12 w-full">
        {/* Navigation Arrows */}
        <div className="pointer-events-none absolute inset-y-0 left-4 right-4 z-20 flex items-center justify-between">
          <button
            type="button"
            suppressHydrationWarning
            onClick={handlePrev}
            aria-label="Previous service"
            className="pointer-events-auto size-11 rounded-full border border-black/10 bg-white/95 text-foreground shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:bg-secondary active:scale-95 flex items-center justify-center"
          >
            <ArrowLeft className="size-4 text-foreground/80" />
          </button>
          <button
            type="button"
            suppressHydrationWarning
            onClick={handleNext}
            aria-label="Next service"
            className="pointer-events-auto size-11 rounded-full border border-black/10 bg-white/95 text-foreground shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:bg-secondary active:scale-95 flex items-center justify-center"
          >
            <ArrowRight className="size-4 text-foreground/80" />
          </button>
        </div>

        {/* Cards Row */}
        <div
          ref={track}
          className={cn(
            pinned
              ? "flex w-max gap-6 px-10"
              : "flex w-full snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 pt-2 scrollbar-none sm:px-8",
          )}
        >
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons] ?? Globe2;
            const Graphic = graphics[service.title] ?? WebDev3D;
            const isActive = activeCard === i;

            return (
              <article
                key={service.title}
                onClick={() => setActiveCard(i)}
                className={cn(
                  "group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-7 sm:p-8 transition-all duration-300",
                  isActive
                    ? "border-2 border-primary shadow-[0_16px_40px_rgba(122,68,38,0.12)]"
                    : "border border-[#EDE4DB] shadow-[0_4px_20px_rgba(122,68,38,0.04)] hover:border-primary/50 hover:shadow-[0_12px_32px_rgba(122,68,38,0.08)]",
                  pinned
                    ? "h-[410px] w-[340px] shrink-0"
                    : "h-[400px] w-[82vw] max-w-[330px] shrink-0 snap-center sm:w-[330px]",
                )}
              >
                {/* Top Row: Icon Badge & Number */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#F5EDE4] text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5 text-primary stroke-[1.8]" />
                  </div>
                  <span className="font-mono text-xs font-medium text-muted-foreground/80 tracking-wider">
                    {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Content: Title & Description */}
                <div className="relative z-10 mt-6 flex-1">
                  <h3 className="text-[1.35rem] font-bold leading-snug tracking-tight text-foreground sm:text-[1.45rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3.5 max-w-[230px] text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Row: Learn More Button */}
                <div className="relative z-10 mt-6 flex items-center">
                  <ActionButton
                    label={isActive ? "Explore Service" : "Learn More"}
                    variant={isActive ? "primary" : "outline"}
                    size="sm"
                    href={`/services/${service.slug}`}
                  />
                </div>

                {/* 3D Claymorphic Vector Illustration at bottom-right corner */}
                <div className="pointer-events-none absolute -bottom-2 -right-2 h-44 w-44 transition-transform duration-500 ease-out group-hover:scale-105">
                  <Graphic className="h-full w-full" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              type="button"
              suppressHydrationWarning
              onClick={() => scrollToCard(i)}
              aria-label={`Go to service ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeCard === i ? "w-8 bg-primary" : "w-1.5 bg-[#E5D7CA] hover:bg-primary/50",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
