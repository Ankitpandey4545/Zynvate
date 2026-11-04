"use client";

import { useEffect, useState, type RefObject } from "react";

/** Current time, refreshed on open, when the block is on screen, and as minutes pass. */
export function useLiveNow(target?: RefObject<HTMLElement | null>) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const interval = window.setInterval(tick, 15_000);
    const onWake = () => {
      if (document.visibilityState === "visible") tick();
    };
    document.addEventListener("visibilitychange", onWake);
    window.addEventListener("focus", tick);

    const node = target?.current;
    const observer = node
      ? new IntersectionObserver(
          (entries) => {
            if (entries.some((entry) => entry.isIntersecting)) tick();
          },
          { threshold: 0.15 },
        )
      : null;
    if (node && observer) observer.observe(node);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onWake);
      window.removeEventListener("focus", tick);
      observer?.disconnect();
    };
  }, [target]);

  return now;
}
