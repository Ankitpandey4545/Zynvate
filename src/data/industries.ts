import type { Industry } from "@/lib/types";

export const industriesIntro = {
  eyebrow: "07 / Use cases",
  title: "Areas we can build for",
  description:
    "Types of products and organizations we can design and build for. This is not a list of clients we have served.",
};

const photo = (id: string, alt: string) => ({
  src: `/photos/industries/${id}.jpg`,
  width: 1200,
  height: 1500,
  alt,
  credit: "Unsplash",
  isPlaceholder: true,
});

export const industries: Industry[] = [
  {
    title: "Startups",
    focus: "MVPs and first product versions",
    image: photo("photo-1559136555-9303baea8ebd", "Placeholder photo of a small team working together"),
  },
  {
    title: "Small Businesses",
    focus: "Websites, bookings and internal tools",
    image: photo("photo-1441986300917-64674bd600d8", "Placeholder photo of a small shop interior"),
  },
  {
    title: "E-commerce",
    focus: "Storefronts, catalogs and order flows",
    image: photo("photo-1472851294608-062f824d29cc", "Placeholder photo of a storefront display"),
  },
  {
    title: "Education",
    focus: "Learning portals and course tools",
    image: photo("photo-1503676260728-1c00da094a0b", "Placeholder photo of books and a desk"),
  },
  {
    title: "Healthcare",
    focus: "Appointment and patient-facing apps",
    image: photo("photo-1519494026892-80bbd2d6fd0d", "Placeholder photo of a calm clinical hallway"),
  },
  {
    title: "Finance",
    focus: "Dashboards and reporting tools",
    image: photo("photo-1486406146926-c627a92ad1ab", "Placeholder photo of office towers"),
  },
  {
    title: "SaaS",
    focus: "Subscription platforms and admin panels",
    image: photo("photo-1498050108023-c5249f4df085", "Placeholder photo of a laptop on a desk"),
  },
  {
    title: "Real Estate",
    focus: "Listing sites and lead management",
    image: photo("photo-1560518883-ce09059eeffa", "Placeholder photo of a house exterior"),
  },
  {
    title: "Service Businesses",
    focus: "Scheduling, quotes and client portals",
    image: photo("photo-1554118811-1e0d58224f24", "Placeholder photo of a cafe counter"),
  },
  {
    title: "Internal Operations",
    focus: "Workflow automation and internal apps",
    image: photo("photo-1497366754035-f200968a6e72", "Placeholder photo of an open office"),
  },
];
