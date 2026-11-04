"use client";

import type { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "cream" | "ghost";
type Size = "sm" | "md" | "lg";

type ActionButtonProps = {
  label: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  tabIndex?: number;
  target?: string;
  icon?: ReactNode | null;
  portraitSrc?: string;
};

function LetterRow({ text, layer }: { text: string; layer: "out" | "in" }) {
  return (
    <span className={cn("action-letters", layer === "in" ? "action-letters-in" : "action-letters-out")}>
      {Array.from(text).map((char, index) => (
        <span key={`${layer}-${index}`} className="action-letter" style={{ ["--i" as string]: index }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

const variantClass: Record<Variant, string> = {
  primary: "border-transparent bg-primary text-primary-foreground",
  outline: "border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5",
  cream: "border-transparent bg-cream text-espresso",
  ghost: "border-cream/25 bg-transparent text-cream hover:bg-cream/10",
};

const stickerClass: Record<Variant, string> = {
  primary: "bg-primary-foreground text-primary",
  outline: "bg-primary/10 text-primary",
  cream: "bg-espresso text-cream",
  ghost: "bg-cream/15 text-cream",
};

const sizeClass: Record<Size, string> = {
  sm: "h-[42.66px] gap-2 py-1.5 pl-4 pr-1.5 text-[0.8rem]",
  md: "h-[42.66px] gap-2.5 py-1.5 pl-5 pr-1.5 text-[0.88rem]",
  lg: "h-12 gap-2.5 py-1.5 pl-6 pr-1.5 text-[0.95rem] sm:h-[3.15rem]",
};

const stickerSize: Record<Size, string> = {
  sm: "size-7",
  md: "size-8",
  lg: "size-8 sm:size-9",
};

export function ActionButton({
  label,
  variant = "primary",
  size = "md",
  href,
  className,
  disabled,
  type = "button",
  onClick,
  tabIndex,
  target,
  icon,
  portraitSrc,
}: ActionButtonProps) {
  const showIcon = icon !== null;
  const visual = (
    <>
      {portraitSrc ? (
        <img
          src={portraitSrc}
          alt=""
          width={40}
          height={40}
          className={cn("shrink-0 rounded-full object-cover object-top", stickerSize[size])}
        />
      ) : null}
      <span className="sr-only">{label}</span>
      <span aria-hidden className="action-stage">
        <span className="action-measure">{label}</span>
        <LetterRow text={label} layer="out" />
        <LetterRow text={label} layer="in" />
      </span>
      {showIcon ? (
        <span aria-hidden className={cn("action-sticker", stickerClass[variant], stickerSize[size])}>
          {icon ?? <ArrowRight className="size-[0.9em] stroke-[2.4]" />}
        </span>
      ) : null}
    </>
  );
  const classes = cn(
    "action-btn inline-flex",
    variantClass[variant],
    sizeClass[size],
    portraitSrc && "pl-1.5",
    className,
  );

  if (href) {
    const external = href.startsWith("http") || Boolean(target);
    return (
      <Link
        href={href}
        className={classes}
        suppressHydrationWarning
        {...(onClick ? { onClick } : {})}
        {...(tabIndex !== undefined ? { tabIndex } : {})}
        {...(external ? { target: target ?? "_blank", rel: "noopener noreferrer" } : {})}
      >
        {visual}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      suppressHydrationWarning
      {...(disabled ? { disabled: true } : {})}
      {...(onClick ? { onClick } : {})}
      {...(tabIndex !== undefined ? { tabIndex } : {})}
    >
      {visual}
    </button>
  );
}
