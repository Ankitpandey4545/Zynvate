import type { Project } from "@/lib/types";

import { images } from "@/data/images";

export const workIntro = {
  eyebrow: "03 / Selected work", title: "Featured work.", description: "A closer look at something we've built.",
  stages: ["The product", "Feature groups", "Our role", "Capabilities"],
  featureHeading: "Inside the platform", roleHeading: "From concept to launch", capabilitiesHeading: "What went into it",
  productNote: "Product by Amrut.ai. Built by ZYNOVATE.",
  projectButton: "View Project", contactTitle: "Have a product like this in mind? Let's build it.", contactButton: "Start a conversation",
  upcomingTitle: "The next stories are taking shape.",
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Amrut.ai",
    slug: "amrut-ai",
    category: "SaaS platform · AI Visibility & SEO",
    client: "Amrut.ai",
    year: "2026",
    industry: "AI search · GEO · SEO",
    scope: "Product, design, full-stack",
    tagline: "The AI Visibility Platform That Tells You Exactly What To Do Next.",
    summary: "Amrut.ai helps brands see how AI assistants talk about them, then gives a clear plan to earn more mentions, citations and recommendations. It also bundles a suite of SEO and website-intelligence tools in one place.",
    does: ["Tracks brand visibility across AI engines such as ChatGPT, Gemini, Perplexity and Google AI Mode", "Shows visibility score, share of voice, sentiment and competitor benchmarking", "Generates llms.txt files and AI-powered SEO analysis reports", "Offers keyword research, backlink checking, competitor ad analysis and website analytics", "Includes free utilities such as Robots.txt Generator, Sitemap Generator and Token Counter"],
    features: [
      { title: "AI Visibility", screenshot: images.amrut.dashboard, items: ["AI Visibility tracking", "AI Crawlability", "LLMS.txt Generator", "AI LLMs Traffic", "Ask AI"] },
      { title: "SEO & Content", screenshot: images.amrut.llmsTxt, items: ["AI SEO Analysis Report", "AI Content Generator (beta)", "Keyword Research", "Ranked Keywords", "Keyword Suggestions", "Keyword Extractor"] },
      { title: "Site & Competitors", screenshot: images.amrut.about, items: ["Company Profile", "Backlink Checker", "Competitor Ads", "Watchlist & Alerts", "Website Ranking"] },
      { title: "Your Data & Utilities", screenshot: images.amrut.toolsGrid, items: ["Website Analytics", "GSC Dashboard", "YouTube Trends", "Robots.txt Generator", "Sitemap Generator", "Token Counter"] },
    ],
    role: ["End-to-end build of the complete platform, from product concept to launch", "Product design and UI/UX", "Front-end and back-end development of the AI visibility and SEO tools", "Responsive experience across desktop and mobile"],
    capabilities: ["SaaS platform", "Dashboard UI", "Full-stack development", "Responsive web design", "Product engineering"],
    engines: ["ChatGPT", "Gemini", "Perplexity", "Google AI Mode"],
    stats: [
      { value: "1.1M+", label: "Websites analyzed" },
      { value: "4", label: "AI engines tracked" },
      { value: "18", label: "Tools in one place" },
      { value: "1.9M+", label: "Reports generated" },
    ],
    url: "https://amrut.ai/",
    seo: {
      title: "Amrut.ai — Case Study",
      description:
        "ZYNOVATE designed and engineered Amrut.ai, an AI visibility and SEO platform that tracks brands across ChatGPT, Gemini, Perplexity and Google AI Mode.",
    },
    screenshots: { cover: images.amrut.homeHero, dashboard: images.amrut.dashboard, mobile: images.amrut.mobileHome, about: images.amrut.about, tools: images.amrut.toolsGrid },
  },
  // TODO: replace with a real project
  { id: "02", title: "Coming soon", category: "Next case study", isPlaceholder: true },
  // TODO: replace with a real project
  { id: "03", title: "Coming soon", category: "Next case study", isPlaceholder: true },
];

export type FeaturedProject = Project & { slug: string };

export const featuredProjects = (): FeaturedProject[] =>
  projects.filter((item): item is FeaturedProject => Boolean(item.slug) && !item.isPlaceholder);

export function getProject(slug: string) {
  return featuredProjects().find((item) => item.slug === slug);
}
