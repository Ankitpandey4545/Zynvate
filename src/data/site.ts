import type { NavLink } from "@/lib/types";

// Canonical URL for metadata and JSON-LD. Set NEXT_PUBLIC_SITE_URL in the environment.
// If it is unset, site.url falls back to https://zynovate.in.
const envUrl = typeof process !== "undefined" ? process.env?.NEXT_PUBLIC_SITE_URL : undefined;

export const site = {
  name: "ZYNOVATE",
  url: (envUrl || "https://zynovate.in").replace(/\/$/, ""),
  title: "ZYNOVATE — Build. Launch. Evolve.",
  metaDescription:
    "ZYNOVATE builds custom software, web and mobile apps, SaaS platforms and digital products around your ideas.",
  tagline: "Build. Launch. Evolve.",
  description: "Technology solutions built around your ideas, business, and digital goals.",
  logo: { src: "/brand/zynovate-logo.png", alt: "ZYNOVATE", width: 600, height: 408 },
  // Real routes, not "#contact" (Contact is its own page now).
  primaryCta: { label: "Start a Project", href: "/contact" as const },
  secondaryCta: { label: "Explore Our Work", href: "/works" as const },
  trustLine: ["Custom software", "Web & mobile", "SaaS", "Product engineering"],

  /** Hero copy. TODO: replace with client wording when available. */
  hero: {
    eyebrow: "Technology & software company",
    // TODO: confirm availability wording with the client before launch.
    status: "Open for new projects",
    lead: "We design and engineer websites, web and mobile apps, SaaS platforms and custom software, taking ideas from a first sketch to a product that is live, reliable and ready to grow.",
    support:
      "Bring us a clear requirement, a rough idea, or an existing product that needs to evolve. We shape it, build it properly, and stay with you after launch.",
    pillars: [
      {
        index: "01",
        title: "Build",
        text: "Websites, apps and custom software engineered around your requirements.",
      },
      {
        index: "02",
        title: "Launch",
        text: "Tested, responsive and production-ready, deployed with care.",
      },
      {
        index: "03",
        title: "Evolve",
        text: "Support, improvements and new features as your business grows.",
      },
    ],
    tracks: [
      { label: "Service-based", text: "Custom projects built around your brief" },
      { label: "Product-based", text: "Scalable platforms, tools and SaaS" },
    ],
    featured: {
      label: "Our vision",
      title: "ZYNOVATE",
      text: "Technology that moves business forward",
      href: "/about",
    },
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Works", href: "/works" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
};
