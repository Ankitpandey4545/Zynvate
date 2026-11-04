import type { Service } from "@/lib/types";
import { services as detailServices, getService, type DetailPage, type Highlight, type Step, type Faq } from "./detailPages";

export { getService };
export type { DetailPage, Highlight, Step, Faq };

export const servicesIntro = {
  eyebrow: "01 / Expertise",
  title: "What we do.",
  description:
    "From the first screen to the systems behind it, we build digital experiences that work for your business and the people using them.",
};

export type FullService = Service & DetailPage;

export const services: FullService[] = detailServices.map((s) => ({
  ...s,
  description: s.summary,
  icon: s.icon ?? "Globe2",
}));
