import type { ReactNode } from "react";
import type { ImageAsset } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ScreenImage } from "./ScreenImage";

export function LaptopMockup({
  image,
  children,
  className,
  priority,
  base = "chin",
}: {
  image?: ImageAsset;
  children?: ReactNode;
  className?: string;
  priority?: boolean;
  /** `deck` draws an open laptop with a keyboard. Other pages keep the slim chin. */
  base?: "chin" | "deck";
}) {
  const screen = (
    <div className={cn("overflow-hidden bg-card", base === "deck" ? "aspect-[16/10] rounded-[0.28rem]" : "aspect-[16/10] rounded-[0.4rem]")}>
      {children ?? (image ? <ScreenImage image={image} {...(priority ? { priority } : {})} /> : null)}
    </div>
  );

  if (base === "deck") {
    return (
      <div className={cn("relative", className)}>
        <div className="rounded-t-[0.85rem] bg-[#24170f] p-[1.5%] shadow-[0_22px_40px_-28px_rgba(28,16,10,0.8)]">
          {screen}
        </div>
        <div className="relative -mt-px w-full rounded-b-[0.7rem] bg-gradient-to-b from-[#e7dfd6] via-[#d2c6ba] to-[#b7aa9d] px-[6%] pb-[2.2%] pt-[1.4%] shadow-[0_14px_22px_-20px_rgba(43,26,16,0.5)]">
          <div className="mx-auto mb-[2%] h-[0.16rem] w-[15%] rounded-full bg-[#2b1a10]/25" />
          <div className="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-[0.18rem]">
            {Array.from({ length: 42 }, (_, index) => (
              <span key={index} className="h-[0.32rem] rounded-[1.5px] bg-white/75" />
            ))}
          </div>
          <div className="mx-auto mt-[2.8%] h-[0.7rem] w-[20%] rounded-[0.25rem] border border-black/5 bg-[#f4efe9]/85" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <div className="rounded-t-[1.1rem] bg-espresso p-[2.2%] shadow-float">
        {screen}
      </div>
      <div className="relative mx-[-6%] h-3 rounded-b-xl bg-gradient-to-b from-taupe to-espresso">
        <div className="absolute left-1/2 top-0 h-1.5 w-1/6 -translate-x-1/2 rounded-b-md bg-espresso/60" />
      </div>
    </div>
  );
}
