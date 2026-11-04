const matches = (query: string) =>
  typeof window !== "undefined" && window.matchMedia(query).matches;

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
export const TOUCH_QUERY = "(hover: none), (pointer: coarse)";

export const prefersReducedMotion = () => matches(REDUCED_MOTION_QUERY);

export const isTouchDevice = () => matches(TOUCH_QUERY);

/** Pinned and parallax scenes only run with a fine pointer, full motion, and enough width. */
export const canPin = (minWidth = 1024) =>
  !prefersReducedMotion() && !isTouchDevice() && matches(`(min-width: ${minWidth}px)`);
