"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DotField } from "@/components/motion/DotField";
import { useSmoothScroll } from "@/components/motion/SmoothScrollProvider";
import { prefersReducedMotion } from "@/lib/motion";
import { Mail, Phone } from "lucide-react";
import { Zynovate } from "@/components/ui/Zynovate";
import { contact } from "@/data/contact";
import { site } from "@/data/site";
import { social } from "@/data/social";
import { services } from "@/data/services";
import { SocialIcon } from "@/components/layout/SocialIcon";

const FOOTER_DOT_COLORS = ["#F8F0E6", "#E4D5C5", "#C4896A", "#A6785A"];

export function Footer() {
  const root = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const pathname = usePathname() ?? "/";
  const year = new Date().getFullYear();

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-wordmark]", {
        yPercent: 110,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-wordmark-wrap]",
          start: "top bottom",
          once: true,
          invalidateOnRefresh: true,
          onRefresh(self) {
            if (self.start > ScrollTrigger.maxScroll(window)) {
              gsap.set("[data-wordmark]", { yPercent: 0 });
            }
          },
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const go = (href: string) => (event: MouseEvent) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    scrollTo(document.querySelector(href) ? href : 0);
  };

  return (
    <footer ref={root} className="relative isolate overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-y-0 left-[8vw] right-[8vw] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <DotField
          colors={FOOTER_DOT_COLORS}
          interaction={0.55}
          ringGap={36}
          dotSpacing={42}
          className="opacity-[0.65]"
        />
      </div>
      <div className="relative z-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-2 sm:px-6 md:px-10 md:py-16 lg:grid-cols-[1.25fr_repeat(3,minmax(0,1fr))] lg:gap-7">
          <div className="flex flex-col gap-4">
            <a href="#top" onClick={go("#top")} aria-label="ZYNOVATE home" className="w-fit">
              <img
                src={site.logo.src}
                alt=""
                width={site.logo.width}
                height={site.logo.height}
                loading="lazy"
                decoding="async"
                className="h-14 w-auto"
              />
            </a>
            <div className="mt-2 space-y-2">
              <p className="eyebrow text-white/80">Get in touch</p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
              >
                <Mail className="size-4 text-white/70" />
                <span>{contact.email}</span>
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-white/70" />
                <span>{contact.phone}</span>
              </a>
            </div>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow text-white/80">Navigate</p>
            <ul className="mt-4 space-y-2">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(event) => {
                      if (link.href === pathname) {
                        event.preventDefault();
                        scrollTo(0);
                      }
                    }}
                    className="text-sm text-white hover:text-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Services">
            <p className="eyebrow text-white/80">Services</p>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href={service.slug ? `/services/${service.slug}` : "/services"} className="text-sm text-white hover:text-white/70">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow text-white/80">
              Social{social.some((item) => item.isPlaceholder) ? " · Placeholder" : ""}
            </p>
            <div className="footer-socials mt-2 mb-8" role="list">
              {social.map((item) => {
                const network = item.label.toLowerCase();
                const inner = (
                  <>
                    <span className="footer-social__idle" aria-hidden>
                      <SocialIcon label={item.label} />
                    </span>
                    <span className="footer-social__active" aria-hidden>
                      <SocialIcon label={item.label} />
                    </span>
                    <span className="sr-only">{item.label}</span>
                  </>
                );
                if (item.isPlaceholder || item.href === "#") {
                  return (
                    <span key={item.label} role="listitem" className={`footer-social footer-social--${network}`}>
                      {inner}
                    </span>
                  );
                }
                return (
                  <a
                    key={item.label}
                    role="listitem"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`footer-social footer-social--${network}`}
                  >
                    {inner}
                  </a>
                );
              })}
            </div>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => scrollTo("#top")}
              className="footer-top-btn mt-10"
              aria-label="Back to top"
            >
              <div className="text">
                <span>Back</span>
                <span>to</span>
                <span>top</span>
              </div>
              <div className="clone" aria-hidden>
                <span>Back</span>
                <span>to</span>
                <span>top</span>
              </div>
              <svg
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                aria-hidden
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 pb-6 text-xs text-white sm:px-6 md:px-10">
          <p>
            © {year} <Zynovate>{site.name}</Zynovate>
          </p>
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-white hover:underline"
            >
              Terms and Conditions
            </Link>
            <a
              href={contact.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white hover:underline"
            >
              {contact.location}
            </a>
          </div>
        </div>
        <div
          data-wordmark-wrap
          aria-hidden
          className="line-mask flex justify-center overflow-hidden px-4 pb-2 md:px-8"
        >
          <p
            data-wordmark
            className="display relative w-max max-w-full whitespace-nowrap text-center text-[clamp(3.2rem,13.5vw,16rem)] text-[#C8C8C8]"
          >
            {site.name}
            <span aria-hidden className="wordmark-shine pointer-events-none">
              {site.name}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
