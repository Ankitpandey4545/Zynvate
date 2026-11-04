import { images } from "@/data/images";
import type { ImageAsset } from "@/lib/types";

export const workFilters = [
  "All",
  "Agency",
  "Creative",
  "Corporate",
  "Hospitality",
  "SaaS",
  "Healthcare",
  "Sports",
  "Legal",
  "eCommerce",
  "Restaurant",
  "Construction",
  "Real Estate",
  "Fitness",
  "Blog",
] as const;

export type WorkFilter = (typeof workFilters)[number];

export type WorkGalleryItem = {
  title: string;
  category: Exclude<WorkFilter, "All">;
  image: ImageAsset;
  href?: string;
  siteHref?: string;
  url?: string;
  isPlaceholder?: boolean;
};

const photo = (src: string, alt: string): ImageAsset => ({
  src,
  alt,
  width: 1600,
  height: 1000,
  isPlaceholder: true,
});

export const worksIntro = {
  title: "Our Works",
};

export const workGallery: WorkGalleryItem[] = [
  {
    title: "Amrut.ai",
    category: "SaaS",
    image: images.amrut.homeHero,
    href: "/works/amrut-ai",
    siteHref: "https://amrut.ai/",
    url: "amrut.ai",
    isPlaceholder: false,
  },
  {
    title: "Agency site",
    category: "Agency",
    image: photo("/photos/hero.jpg", "Reference agency website"),
    url: "agency.studio",
    isPlaceholder: true,
  },
  {
    title: "Creative studio",
    category: "Creative",
    image: photo("/photos/cta.jpg", "Reference creative studio website"),
    url: "made.to.felt",
    isPlaceholder: true,
  },
  {
    title: "Corporate platform",
    category: "Corporate",
    image: photo("/photos/why.jpg", "Reference corporate website"),
    url: "corporate.co",
    isPlaceholder: true,
  },
  {
    title: "Hospitality brand",
    category: "Hospitality",
    image: photo("/photos/industries/photo-1554118811-1e0d58224f24.jpg", "Reference hospitality website"),
    url: "stay.house",
    isPlaceholder: true,
  },
  {
    title: "Clinic portal",
    category: "Healthcare",
    image: photo("/photos/industries/photo-1519494026892-80bbd2d6fd0d.jpg", "Reference healthcare website"),
    url: "care.clinic",
    isPlaceholder: true,
  },
  {
    title: "Storefront",
    category: "eCommerce",
    image: photo("/photos/industries/photo-1472851294608-062f824d29cc.jpg", "Reference ecommerce website"),
    url: "shop.store",
    isPlaceholder: true,
  },
  {
    title: "Listings",
    category: "Real Estate",
    image: photo("/photos/industries/photo-1560518883-ce09059eeffa.jpg", "Reference real estate website"),
    url: "homes.list",
    isPlaceholder: true,
  },
  {
    title: "Training club",
    category: "Fitness",
    image: photo("/photos/industries/photo-1559136555-9303baea8ebd.jpg", "Reference fitness website"),
    url: "train.club",
    isPlaceholder: true,
  },
  {
    title: "Legal desk",
    category: "Legal",
    image: photo("/photos/industries/photo-1486406146926-c627a92ad1ab.jpg", "Reference legal website"),
    url: "counsel.law",
    isPlaceholder: true,
  },
  {
    title: "Kitchen site",
    category: "Restaurant",
    image: photo("/photos/industries/photo-1441986300917-64674bd600d8.jpg", "Reference restaurant website"),
    url: "table.kitchen",
    isPlaceholder: true,
  },
  {
    title: "Build journal",
    category: "Construction",
    image: photo("/photos/industries/photo-1497366754035-f200968a6e72.jpg", "Reference construction website"),
    url: "build.works",
    isPlaceholder: true,
  },
  {
    title: "League site",
    category: "Sports",
    image: photo("/photos/industries/photo-1503676260728-1c00da094a0b.jpg", "Reference sports website"),
    url: "play.league",
    isPlaceholder: true,
  },
  {
    title: "Editorial",
    category: "Blog",
    image: photo("/photos/og.jpg", "Reference editorial website"),
    url: "read.notes",
    isPlaceholder: true,
  },
];
