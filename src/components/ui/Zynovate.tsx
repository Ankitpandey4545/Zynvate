import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface ZynovateProps extends ComponentPropsWithoutRef<"span"> {
  children?: string;
}

/**
 * Renders the ZYNOVATE brand wordmark with the animated blade shine effect
 * as seen on the footer wordmark.
 */
export function Zynovate({ className, children = "ZYNOVATE", ...props }: ZynovateProps) {
  return (
    <span
      className={cn("relative inline-block whitespace-nowrap text-[#C8C8C8]", className)}
      {...props}
    >
      {children}
      <span aria-hidden="true" className="wordmark-shine pointer-events-none select-none">
        {children}
      </span>
    </span>
  );
}

/**
 * Replaces any occurrence of "ZYNOVATE" in a text string with the shining
 * <Zynovate /> component while preserving all surrounding text and casing.
 */
export function HighlightZynovate({ text, className }: { text: string; className?: string }) {
  if (!text || !/ZYNOVATE/i.test(text)) {
    return <>{text}</>;
  }

  const parts = text.split(/(ZYNOVATE)/i);
  return (
    <>
      {parts.map((part, index) => {
        if (part.toUpperCase() === "ZYNOVATE") {
          return (
            <Zynovate key={index} className={className}>
              {part}
            </Zynovate>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
