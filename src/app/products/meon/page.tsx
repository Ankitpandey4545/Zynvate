import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { productMenuCategories } from "@/data/detailPages";
import directory from "@/data/apiDirectory.json";

export const metadata: Metadata = {
  title: "Meon Products & APIs | ZYNOVATE",
  description: "Explore Meon products and a selection of verification APIs from ZYNOVATE.",
};

const featuredApis = directory.apis.slice(0, 20);
const meonProductCategories = productMenuCategories.filter((category) => category.title !== "PLUG & PLAY APIs");

export default function MeonPage() {
  const productCount = meonProductCategories.reduce((total, category) => total + category.items.length, 0);

  return (
    <main className="bg-background">
      <section className="relative isolate overflow-hidden rounded-b-[2rem] bg-foreground text-background md:rounded-b-[3rem]">
        <div className="mx-auto flex min-h-[40svh] max-w-7xl flex-col items-center justify-center px-5 py-28 text-center sm:px-6 md:min-h-[46svh] md:px-10 md:py-32">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-clay-light">Meon / Digital verification</p>
          <div className="mt-4 flex flex-col items-center gap-5">
            <div>
              <h1 className="display whitespace-nowrap text-[clamp(1.35rem,6.3vw,6.5rem)] leading-[0.92] tracking-[-0.055em]">Meon Products &amp; APIs</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-background/65 md:text-lg">
                Explore Meon’s product suite and verification APIs in one place.
              </p>
              <ul aria-label="Meon solution areas" className="mt-6 flex flex-wrap justify-center gap-2">
                {["KYC", "eSign", "Onboarding", "Conversational AI"].map((area) => (
                  <li key={area} className="rounded-full border border-background/15 bg-background/5 px-3 py-1.5 text-xs font-medium text-background/75 backdrop-blur-sm">{area}</li>
                ))}
              </ul>
            </div>
            <p className="shrink-0 text-sm text-background/65"><span className="font-mono text-3xl font-semibold text-clay-light">{productCount}</span> products <span className="px-2">·</span> <span className="font-mono text-3xl font-semibold text-clay-light">20</span> APIs</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 md:px-10 md:pb-24">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(19rem,0.8fr)] lg:gap-12">
          <section aria-labelledby="meon-products-heading">
            <div className="mb-5 flex items-end justify-between border-b border-border pb-4">
              <div>
                <h2 id="meon-products-heading" className="display mt-2 text-3xl md:text-4xl">Products</h2>
              </div>
              <span className="text-sm text-muted-foreground">{productCount} products</span>
            </div>
            <div className="space-y-4">
              {meonProductCategories.map((category) => (
                <article key={category.slug} id={category.slug} className="scroll-mt-28 rounded-2xl border border-border bg-background p-5 md:p-6">
                  <div className="flex items-center gap-3 border-b border-border pb-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><Layers3 className="size-4" /></span>
                    <h3 className="text-sm font-semibold text-foreground md:text-base">{category.title}</h3>
                    <span className="ml-auto font-mono text-xs text-muted-foreground">{String(category.items.length).padStart(2, "0")}</span>
                  </div>
                  <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                    {category.items.map((product) => (
                      <li key={product.slug}>
                        <Link href={`/products/meon/${product.slug}`} className="group flex min-h-10 items-start gap-2 rounded-lg px-2 py-2 text-sm leading-snug text-foreground/75 transition-colors hover:bg-secondary hover:text-primary">
                          <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-primary/75" />
                          <span>{product.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="meon-apis-heading" className="lg:sticky lg:top-28">
            <div className="mb-5 flex items-end justify-between border-b border-border pb-4">
              <div>
                <h2 id="meon-apis-heading" className="display mt-2 text-3xl md:text-4xl">20 APIs</h2>
              </div>
              <Link href="/products/apis" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">All APIs <ArrowUpRight className="size-3.5" /></Link>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {featuredApis.map((api, index) => (
                <li key={`${api.path}-${index}`}>
                  <Link href={`/products/apis/catalog/${index}`} className="group flex min-h-14 items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-colors hover:border-primary/50 hover:bg-card">
                    <span className="text-sm font-medium leading-snug text-foreground group-hover:text-primary">{api.title}</span>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
