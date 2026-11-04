import type { ImageAsset } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ScreenImage } from "./ScreenImage";

export function BrowserMockup({
  image,
  url,
  className,
}: {
  image: ImageAsset;
  url?: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border bg-card shadow-float", className)}>
      <div className="flex items-center gap-3 border-b px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-sand" />
          <span className="size-2.5 rounded-full bg-sand" />
          <span className="size-2.5 rounded-full bg-sand" />
        </div>
        {url && (
          <div className="mx-auto rounded-full bg-secondary px-4 py-1 text-xs text-muted-foreground">
            {url}
          </div>
        )}
      </div>
      <div className="aspect-[16/10]">
        <ScreenImage image={image} />
      </div>
    </div>
  );
}
