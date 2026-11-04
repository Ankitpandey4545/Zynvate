"use client";

import type { ReactNode } from "react";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <div id="top" className="grain">
        <a
          href="#main"
          className="sr-only rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80]"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main
          id="main"
          tabIndex={-1}
          className="focus-visible:shadow-none focus-visible:outline-none"
        >
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </SmoothScrollProvider>
  );
}
