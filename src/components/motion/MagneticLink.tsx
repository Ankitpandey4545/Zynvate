"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

import { prefersReducedMotion, useSmoothScroll } from "@/components/motion/SmoothScrollProvider";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function MagneticLink({ href, className, children }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollTo } = useSmoothScroll();

  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.35}px, ${y * 0.4}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={(event) => {
        if (!href.startsWith("#")) return;
        event.preventDefault();
        scrollTo(document.querySelector(href) ? href : 0);
      }}
      className={cn(
        "inline-flex items-center gap-2 transition-transform duration-200 ease-[var(--ease-out-expo)]",
        className,
      )}
    >
      {children}
    </a>
  );
}
