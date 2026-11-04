import type { Product } from "@/lib/types";
import { products as detailProducts, getProduct, type DetailPage, type Highlight, type Step, type Faq } from "./detailPages";

export { getProduct };
export type { DetailPage, Highlight, Step, Faq };

export const productsIntro = {
  eyebrow: "02 / Solutions",
  title: "What we build.",
  description:
    "Alongside custom client projects, we build product-style solutions and scalable digital tools. These are the kinds of ideas we can bring to life — not a list of products for sale.",
  exampleLabel: "A SaaS dashboard example",
};

export type FullProduct = Product & DetailPage;

export const products: FullProduct[] = detailProducts.map((p) => ({
  ...p,
  description: p.summary,
}));
