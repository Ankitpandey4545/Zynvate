"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserMockup } from "@/components/mockups/BrowserMockup";
import { LaptopMockup } from "@/components/mockups/LaptopMockup";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { projects, workIntro } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActionButton } from "@/components/ui/ActionButton";
import { HighlightZynovate } from "@/components/ui/Zynovate";
import { ProjectInquiryModal } from "@/components/layout/ProjectInquiryModal";
import { useCanPin } from "@/hooks/use-can-pin";
import { useIsHome } from "@/hooks/use-is-home";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  const root = useRef<HTMLElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const browser = useRef<HTMLDivElement>(null);
  const devices = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [feature, setFeature] = useState(0);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const project = projects.find((p) => !p.isPlaceholder);
  const upcoming = projects.filter((p) => p.isPlaceholder);
  const pinned = useCanPin(1024);
  const home = useIsHome();

  useEffect(() => {
    if (!pinned || !scene.current || !browser.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scene.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Browser settles into place...
      timeline.fromTo(
        browser.current,
        { scale: 0.94, y: 24, rotate: -1.2 },
        { scale: 1, y: 0, rotate: 0, ease: "none", duration: 1 },
        0,
      );

      // ...while laptop + phone rise together from the same baseline.
      if (devices.current) {
        timeline.fromTo(
          devices.current.children,
          { y: 48, opacity: 0.4 },
          { y: 0, opacity: 1, ease: "none", duration: 1, stagger: 0.12 },
          0,
        );
      }

      ScrollTrigger.create({
        trigger: scene.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) =>
          setStep(
            Math.min(
              workIntro.stages.length - 1,
              Math.floor(self.progress * workIntro.stages.length),
            ),
          ),
      });
    }, root);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [pinned]);

  if (!project || !project.screenshots || !project.features?.length) return null;
  const features = project.features;
  const currentFeature = features[feature] ?? features[0];
  if (!currentFeature) return null;

  const total = String(projects.filter((item) => !item.isPlaceholder).length).padStart(2, "0");

  return (
    <>
      <section id="work" ref={root} aria-labelledby="work-title" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-6 md:px-10 md:pt-32">
          {home ? <p className="eyebrow text-primary">{workIntro.eyebrow}</p> : null}
          <div className={`${home ? "mt-5" : ""} flex flex-wrap items-end justify-between gap-6`}>
            <h2 id="work-title" className="display text-[clamp(2.5rem,7vw,4.5rem)]">
              {workIntro.title}
            </h2>
            <p className="max-w-md text-muted-foreground">{workIntro.description}</p>
          </div>
        </div>

        <div ref={scene} className={cn("relative", pinned && "h-[310svh]")}>
          <div
            className={cn(
              "mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:px-10 md:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16",
              pinned && "sticky top-0 h-[100svh] lg:py-16",
            )}
          >
            {/* ───────────── Device stage ───────────── */}
            <div className="relative min-w-0">
              {/* Caption row sits ABOVE the stage so it never collides with the devices */}
              <div className="mb-4 flex items-center justify-between gap-3 px-1 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  <HighlightZynovate
                    text={workIntro.productNote}
                    className="font-bold text-primary"
                  />
                </span>
                <span className="font-mono text-xs font-semibold">
                  {project.id} / {total}
                </span>
              </div>

              {/* Browser = hero device */}
              <div ref={browser} className="will-change-transform">
                {/*
                  The screenshot is shorter than the mockup's viewport, which left an empty
                  cream band under it. This wrapper crops the frame to the screenshot's real
                  height (aspect-[16/8]) and anchors it to the top, so no blank area shows.
                  Tune the ratio: a bigger second number = taller, a smaller one = shorter.
                */}
                <div className="aspect-[16/8] overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                  <BrowserMockup
                    image={step === 1 ? currentFeature.screenshot : project.screenshots.cover}
                    url="amrut.ai"
                    className="h-auto w-full rounded-none border-0 shadow-none"
                  />
                </div>
              </div>

              {/*
                Laptop + phone share ONE flex row, bottom-aligned (items-end).
                They overlap the browser's lower edge by the same negative margin,
                so both sit on a single baseline instead of floating independently.
              */}
              <div
                ref={devices}
                className="relative z-10 -mt-6 flex items-end justify-between gap-3 px-[4%] sm:-mt-8 lg:-mt-10"
              >
                <div
                  className="w-[34%] drop-shadow-xl"
                  role="img"
                  aria-label="Admin dashboard on a laptop"
                >
                  <LaptopMockup image={project.screenshots.dashboard} className="w-full" />
                </div>

                <div
                  className="w-[11%] min-w-[52px] drop-shadow-xl"
                  role="img"
                  aria-label="Mobile view on a phone"
                >
                  <PhoneMockup image={project.screenshots.mobile} />
                </div>
              </div>
            </div>

            {/* ───────────── Story panel ───────────── */}
            <div className="flex min-h-[360px] flex-col justify-center lg:min-h-[460px]">
              <div aria-hidden className="flex gap-2">
                {workIntro.stages.map((label, i) => (
                  <span
                    key={label}
                    className={cn(
                      "h-1 flex-1 transition-colors",
                      i <= step ? "bg-primary" : "bg-border",
                    )}
                  />
                ))}
              </div>

              {!pinned && (
                <div
                  role="group"
                  aria-label="Case study stages"
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {workIntro.stages.map((label, i) => (
                    <Button
                      key={label}
                      type="button"
                      size="sm"
                      aria-pressed={step === i}
                      variant={step === i ? "default" : "outline"}
                      onClick={() => setStep(i)}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              )}

              <p className="eyebrow mt-8 text-primary">
                {workIntro.stages[step]} / {project.category}
              </p>
              <h3
                aria-live="polite"
                className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl xl:text-5xl"
              >
                {step === 0
                  ? project.title
                  : step === 1
                    ? workIntro.featureHeading
                    : step === 2
                      ? workIntro.roleHeading
                      : workIntro.capabilitiesHeading}
              </h3>

              {step === 0 && (
                <>
                  <p className="mt-5 text-xl font-medium leading-snug">{project.tagline}</p>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <ul className="mt-5 grid gap-2 text-xs leading-relaxed text-muted-foreground md:grid-cols-2">
                    {project.does?.map((item) => (
                      <li key={item} className="border-l-2 border-primary pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {step === 1 && (
                <>
                  <div role="group" aria-label="Feature groups" className="mt-6 flex flex-wrap gap-2">
                    {features.map((group, i) => (
                      <Button
                        key={group.title}
                        type="button"
                        aria-pressed={feature === i}
                        variant={feature === i ? "default" : "outline"}
                        size="sm"
                        className="h-auto min-h-9 whitespace-normal text-left"
                        onClick={() => setFeature(i)}
                      >
                        {group.title}
                      </Button>
                    ))}
                  </div>
                  <ul className="mt-6 grid gap-x-5 gap-y-3 text-sm text-muted-foreground sm:grid-cols-2">
                    {currentFeature.items.map((item) => (
                      <li key={item} className="border-l-2 border-primary pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {step === 2 && (
                <ul className="mt-6 space-y-4">
                  {project.role?.map((item, i) => (
                    <li
                      key={item}
                      className="flex gap-4 border-b border-border pb-4 text-sm leading-relaxed"
                    >
                      <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {step === 3 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.capabilities?.map((item) => (
                    <span key={item} className="border border-border px-3 py-2 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {project.slug ? (
                <div className="mt-8">
                  <ActionButton
                    label={workIntro.projectButton}
                    size="lg"
                    href={`/works/${project.slug}`}
                    icon={<ArrowUpRight className="size-[0.9em] stroke-[2.4]" />}
                  />
                </div>
              ) : project.url ? (
                <div className="mt-8">
                  <ActionButton
                    label={workIntro.projectButton}
                    size="lg"
                    href={project.url}
                    target="_blank"
                    icon={<ArrowUpRight className="size-[0.9em] stroke-[2.4]" />}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="bg-foreground py-16 text-background md:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-6 md:flex-row md:items-end md:px-10">
            <h2 className="max-w-3xl text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-tight">
              {workIntro.contactTitle}
            </h2>
            <ActionButton
              label={workIntro.contactButton}
              variant="cream"
              size="lg"
              onClick={() => setInquiryOpen(true)}
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20">
          <p className="eyebrow text-primary">
            {home
              ? `Next / ${upcoming[0]?.id ?? "02"}—${upcoming[upcoming.length - 1]?.id ?? "03"}`
              : "Next"}
          </p>
          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">{workIntro.upcomingTitle}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {upcoming.map((item) => (
              <article
                key={item.id}
                className="flex min-h-52 flex-col justify-between border border-border bg-card p-7"
              >
                <span className="text-sm text-primary">Project {item.id}</span>
                <div>
                  <h3 className="text-3xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.category}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ProjectInquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}