import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Layers3 } from "lucide-react";
import { productMenuCategories } from "@/data/detailPages";

export const metadata: Metadata = {
  title: "Meon Products | ZYNOVATE",
  description: "Browse Meon product categories and offerings in the ZYNOVATE product directory.",
};

export default function MeonProductsPage() {
  const productCount = productMenuCategories.reduce((total, category) => total + category.items.length, 0);

  return (
    <main className="bg-secondary">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-28 sm:px-6 md:px-10 md:pt-36">
        <Link href="/works" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="size-4" /> Back to Works
        </Link>
        <p className="eyebrow mt-10 text-primary">Meon / Products</p>
        <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="display text-[clamp(3rem,8vw,6.5rem)] leading-[0.98]">Meon Products</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Browse Meon’s product suite, organized by solution area and product type.
            </p>
          </div>
          <p className="flex items-center gap-3 text-sm text-muted-foreground"><span className="font-mono text-3xl font-semibold text-primary">{productCount}</span> products across {productMenuCategories.length} categories</p>
        </div>
      </section>

      <section className="border-y border-border bg-background py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
          <p className="eyebrow text-primary">Product categories</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {productMenuCategories.map((category) => (
              <Link key={category.slug} href={`#${category.slug}`} className="rounded-full border border-border bg-secondary px-3 py-2 text-xs font-medium text-foreground/75 transition-colors hover:border-primary/50 hover:text-primary">{category.title}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:px-10 md:py-14">
        <div className="grid gap-4 lg:grid-cols-2">
          {productMenuCategories.map((category) => (
            <article key={category.slug} id={category.slug} className="scroll-mt-28 rounded-2xl border border-border bg-background p-5 md:p-7">
              <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><Layers3 className="size-5" /></span>
                  <h2 className="text-base font-semibold text-foreground md:text-lg">{category.title}</h2>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">{String(category.items.length).padStart(2, "0")}</span>
              </div>
              <ul className="mt-4 grid gap-1 sm:grid-cols-2">
                {category.items.map((product) => (
                  <li key={product.slug} className="flex items-start gap-2 rounded-lg px-2 py-2 text-sm leading-snug text-foreground/75">
                    <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-primary/75" />
                    {product.title}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
