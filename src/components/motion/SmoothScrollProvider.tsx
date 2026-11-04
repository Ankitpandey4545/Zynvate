"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { isTouchDevice, prefersReducedMotion } from "@/lib/motion";

export { prefersReducedMotion } from "@/lib/motion";

type Ctx = {
  scrollTo: (target: string | number | HTMLElement) => void;
  setScrollLocked: (locked: boolean) => void;
};
const SmoothScrollContext = createContext<Ctx>({ scrollTo: () => {}, setScrollLocked: () => {} });
export const useSmoothScroll = () => useContext(SmoothScrollContext);

function releaseMainPins() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.getAll().forEach((trigger) => {
    const node = trigger.trigger;
    if (!(node instanceof Element) || !node.closest("main")) return;
    trigger.kill(true);
  });
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instance = useRef<any>(null);
  const [scrollLocked, setScrollLocked] = useState(false);
  const scrollLockedRef = useRef(false);
  const pathname = usePathname();
  const seenPath = useRef<string | null>(null);

  useLayoutEffect(() => {
    const previous = seenPath.current;
    seenPath.current = pathname;
    const pinTop = () => {
      window.scrollTo(0, 0);
      instance.current?.lenisInstance?.scrollTo?.(0, { immediate: true, force: true });
    };
    if (pathname === "/contact") {
      // Land on the contact hero, then glide to the project form.
      pinTop();
      const frame = window.requestAnimationFrame(pinTop);
      const pinTimer = window.setTimeout(pinTop, 80);
      let userMoved = false;
      const markMoved = () => {
        userMoved = true;
      };
      window.addEventListener("wheel", markMoved, { passive: true });
      window.addEventListener("touchmove", markMoved, { passive: true });
      const glideTimer = window.setTimeout(() => {
        if (userMoved) return;
        const el = document.getElementById("contact");
        if (!el) return;
        if (prefersReducedMotion()) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo(0, top);
          instance.current?.lenisInstance?.scrollTo?.(el, { immediate: true, force: true });
          return;
        }
        if (instance.current) {
          instance.current.scrollTo(el, { duration: 1.35, offset: 0 });
          return;
        }
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 620);
      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(pinTimer);
        window.clearTimeout(glideTimer);
        window.removeEventListener("wheel", markMoved);
        window.removeEventListener("touchmove", markMoved);
      };
    }
    if (previous === null || previous === pathname) return;
    pinTop();
    return;
  }, [pathname]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        ScrollTrigger.getAll().forEach((trigger) => {
          const node = trigger.trigger;
          if (node instanceof Element && !node.isConnected) trigger.kill();
        });
        ScrollTrigger.refresh();
      } catch {
        // A trigger can already be gone while the next page is mounting.
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    scrollLockedRef.current = scrollLocked;
    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    if (scrollLocked) {
      root.style.overflow = "hidden";
      body.style.overflow = "hidden";
      instance.current?.lenisInstance?.stop();
    } else {
      instance.current?.lenisInstance?.start();
    }
    return () => {
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [scrollLocked]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      let next: URL;
      try {
        next = new URL(link.href, window.location.href);
      } catch {
        return;
      }
      if (next.origin !== window.location.origin || next.pathname === window.location.pathname) return;
      releaseMainPins();
    };
    const onPop = () => releaseMainPins();
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let refreshTimer = 0;
    const scheduleRefresh = () => {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    };
    // Lazy images change section heights after triggers are measured.
    const onAssetLoad = (event: Event) => {
      if (event.target instanceof HTMLImageElement) scheduleRefresh();
    };
    document.addEventListener("load", onAssetLoad, true);
    window.addEventListener("load", scheduleRefresh);
    document.fonts?.ready.then(scheduleRefresh);

    let cancelled = false;
    let tick: ((t: number) => void) | null = null;

    // Native scrolling on touch devices and for reduced motion.
    if (!prefersReducedMotion() && !isTouchDevice()) {
      import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
        if (cancelled || instance.current) return; // StrictMode-safe
        const loco = new LocomotiveScroll({
          autoStart: false,
          lenisOptions: { lerp: 0.09, smoothWheel: true },
          scrollCallback: () => ScrollTrigger.update(),
        });
        instance.current = loco;
        if (scrollLockedRef.current) loco.lenisInstance?.stop();
        tick = (time: number) => loco.lenisInstance?.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        ScrollTrigger.refresh();
      });
    }

    return () => {
      cancelled = true;
      window.clearTimeout(refreshTimer);
      document.removeEventListener("load", onAssetLoad, true);
      window.removeEventListener("load", scheduleRefresh);
      if (tick) gsap.ticker.remove(tick);
      instance.current?.destroy();
      instance.current = null;
    };
  }, []);

  const scrollTo = useCallback((target: string | number | HTMLElement) => {
    if (instance.current) {
      instance.current.scrollTo(target, { duration: 1.4, offset: 0 });
      return;
    }
    const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth";
    if (typeof target === "number") window.scrollTo({ top: target, behavior });
    else {
      const el = typeof target === "string" ? document.querySelector(target) : target;
      el?.scrollIntoView({ behavior });
    }
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ scrollTo, setScrollLocked }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
