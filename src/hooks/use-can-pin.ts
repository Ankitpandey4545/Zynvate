"use client";

import { useEffect, useState } from "react";

import { REDUCED_MOTION_QUERY, TOUCH_QUERY, canPin } from "@/lib/motion";

/**
 * False during SSR and first paint, so the static (stacked) layout is what renders
 * without JavaScript. Flips to true only on devices that should get pinned scenes.
 */
export function useCanPin(minWidth = 1024) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const queries = [`(min-width: ${minWidth}px)`, REDUCED_MOTION_QUERY, TOUCH_QUERY].map((q) =>
      window.matchMedia(q),
    );
    const update = () => setAllowed(canPin(minWidth));
    update();
    queries.forEach((q) => q.addEventListener("change", update));
    return () => queries.forEach((q) => q.removeEventListener("change", update));
  }, [minWidth]);

  return allowed;
}
