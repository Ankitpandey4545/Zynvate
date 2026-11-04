import type { ReactNode } from "react";
import type { ImageAsset } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ScreenImage } from "./ScreenImage";

export function PhoneMockup({
  image,
  children,
  className,
  priority,
  frame = "default",
  chrome = "dark",
}: {
  image?: ImageAsset;
  children?: ReactNode;
  className?: string;
  priority?: boolean;
  frame?: "default" | "compact" | "hero";
  chrome?: "dark" | "light";
}) {
  const screen = (
    <div
      className={cn(
        "relative overflow-hidden bg-white",
        chrome === "light" ? "rounded-[1.95rem]" : "rounded-[1.7rem] bg-card",
        frame === "compact" ? "aspect-[9/16.4]" : "aspect-[9/19.5]",
      )}
    >
      <div
        className={cn(
          "absolute left-1/2 z-10 -translate-x-1/2 rounded-full bg-[#1a1a1a]",
          chrome === "light" ? "top-[0.55rem] h-[1.15rem] w-[4.35rem]" : "top-[3.5%] h-[6%] w-1/3 bg-espresso",
        )}
      />
      {children ?? (image ? <ScreenImage image={image} {...(priority ? { priority } : {})} /> : null)}
    </div>
  );

  if (chrome === "light") {
    return (
      <div className={cn("relative", className)}>
        <div className="rounded-[2.35rem] bg-gradient-to-b from-[#3a3a3a] to-[#111] p-[3px] shadow-[0_22px_40px_-22px_rgba(43,26,16,0.55)]">
          <div className="rounded-[2.2rem] bg-[#f3f3f5] p-[5px]">{screen}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative rounded-[2.2rem] bg-espresso p-[5%] shadow-float", className)}>
      {screen}
    </div>
  );
}
