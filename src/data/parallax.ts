import type { ImageAsset } from "@/lib/types";

import { site } from "@/data/site";

/** Scenic cut-outs. Replace with owned artwork before launch. */
const layer = (src: string): ImageAsset => ({
  src,
  width: 2000,
  height: 1906,
  alt: "",
  isPlaceholder: true,
});

type ParallaxDepth = {
  depth: 1 | 2 | 3 | 4;
  yPercent: number;
  image?: ImageAsset;
};

export const parallaxCloser = {
  isPlaceholder: true,
  title: site.tagline,
  layers: [
    { depth: 1, yPercent: 70, image: layer("/parallax/layer-back.webp") },
    { depth: 2, yPercent: 55, image: layer("/parallax/layer-mid.webp") },
    { depth: 3, yPercent: 40 },
    { depth: 4, yPercent: 10, image: layer("/parallax/layer-front.webp") },
  ] satisfies ParallaxDepth[],
};
