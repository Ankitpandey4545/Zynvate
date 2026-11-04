"use client";

import { useState } from "react";
import type { ImageAsset } from "@/lib/types";

/** Image that falls back to a labeled placeholder frame if the file is missing. */
export function ScreenImage({
  image,
  priority = false,
}: {
  image: ImageAsset;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div className="grid h-full w-full place-items-center bg-secondary p-4 text-center">
        <span className="text-sm text-muted-foreground">Screenshot unavailable: {image.alt}</span>
      </div>
    );
  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-contain object-top"
      draggable={false}
    />
  );
}
