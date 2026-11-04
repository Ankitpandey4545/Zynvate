import type { ImageAsset } from "@/lib/types";

export const images = {
  // Saved locally from Unsplash so the site does not depend on those URLs.
  hero: {
    src: "/photos/hero.jpg",
    width: 2400,
    height: 1600,
    alt: "Bright, warm modern workspace with desks and natural light",
    credit: "Unsplash",
    isPlaceholder: true,
  },
  /** Open Graph / Twitter card: the hero photo cropped to 1200×630. */
  og: {
    src: "/photos/og.jpg",
    width: 1200,
    height: 630,
    alt: "ZYNOVATE — Build. Launch. Evolve.",
    credit: "Unsplash",
    isPlaceholder: true,
  },
  /** Decorative section backgrounds: empty alt so screen readers skip them. */
  why: {
    src: "/photos/why.jpg",
    width: 2400,
    height: 1600,
    alt: "",
    credit: "Unsplash",
    isPlaceholder: true,
  },
  cta: {
    src: "/photos/cta.jpg",
    width: 2400,
    height: 1600,
    alt: "",
    credit: "Unsplash",
    isPlaceholder: true,
  },
  /** Decorative scroll-zoom pair. Both alts stay empty. */
  ctaZoom: {
    hero: {
      src: "/cta-zoom/meeting.jpg",
      width: 1024,
      height: 682,
      alt: "",
      isPlaceholder: false,
    },
    foreground: {
      src: "/cta-zoom/foreground.webp",
      width: 3016,
      height: 1697,
      alt: "",
      isPlaceholder: true,
    },
  },
  amrut: {
    homeHero: {
      src: "/projects/amrut/home-hero.png",
      width: 1811,
      height: 838,
      alt: "Amrut.ai home page with the headline about AI visibility and a call to action",
    },
    dashboard: {
      src: "/projects/amrut/dashboard-ai-visibility.png",
      width: 1146,
      height: 623,
      alt: "Amrut.ai AI visibility dashboard showing visibility score and share of voice",
    },
    llmsTxt: {
      src: "/projects/amrut/llms-txt-generator.png",
      width: 1310,
      height: 725,
      alt: "Amrut.ai LLMS.txt generator form",
    },
    about: {
      src: "/projects/amrut/about-page.png",
      width: 1251,
      height: 851,
      alt: "Amrut.ai about page describing the company",
    },
    toolsGrid: {
      src: "/projects/amrut/tools-grid.png",
      width: 1210,
      height: 140,
      alt: "Amrut.ai grid of free SEO tools",
    },
    mobileHome: {
      src: "/projects/amrut/mobile-home.png",
      width: 337,
      height: 732,
      alt: "Amrut.ai home screen on a phone",
    },
    enginesStrip: {
      src: "/projects/amrut/ai-engines-strip.png",
      width: 1822,
      height: 50,
      alt: "Logos of the AI engines Amrut.ai supports",
    },
  },
} satisfies Record<string, ImageAsset | Record<string, ImageAsset>>;
