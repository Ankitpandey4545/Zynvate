import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { productMenuCategories } from "@/data/detailPages";

type Props = { params: Promise<{ slug: string }> };

function findCatalogProduct(slug: string) {
  for (const category of productMenuCategories) {
    const product = category.items.find((item) => item.slug === slug);
    if (product) return { product, category };
  }
  return undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = findCatalogProduct(slug);
  return entry
    ? { title: `${entry.product.title} | ZYNOVATE`, description: `${entry.product.title} from the ${entry.category.title} collection in the ZYNOVATE product directory.` }
    : { title: "Product Not Found | ZYNOVATE" };
}

export function generateStaticParams() {
  return productMenuCategories.flatMap((category) => category.items.map((product) => ({ slug: product.slug })));
}

export default async function MeonProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = findCatalogProduct(slug);
  if (!entry) notFound();

  const isApi = entry.category.slug === "plug-and-play-apis";
  const related = entry.category.items.filter((item) => item.slug !== entry.product.slug);

  return (
    <main className="min-h-[70vh] bg-secondary">
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-6 md:px-10 md:pb-20 md:pt-36">
        <Link href={`/products/meon#${entry.category.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="size-4" /> All Meon products
        </Link>
        <p className="eyebrow mt-10 text-primary">Meon / {entry.category.title}</p>
        <h1 className="display mt-4 max-w-5xl text-[clamp(2.75rem,7vw,6rem)] leading-[1.02]">{entry.product.title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {entry.product.title} is listed in the {entry.category.title} collection. Contact ZYNOVATE to discuss requirements, implementation, and integration for your workflow.
        </p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          {isApi ? "Discuss this API" : "Discuss this product"}<ArrowUpRight className="size-4" />
        </Link>
        <div className="mt-14 grid max-w-4xl gap-4 border-t border-border pt-6 sm:grid-cols-2">
          <div><p className="eyebrow text-primary">Collection</p><p className="mt-2 text-sm font-medium">{entry.category.title}</p></div>
          <div><p className="eyebrow text-primary">Directory</p><p className="mt-2 text-sm font-medium">Meon Products · ZYNOVATE</p></div>
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-border bg-background py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
            <p className="eyebrow text-primary">{entry.category.title}</p>
            <h2 className="display mt-3 text-3xl md:text-4xl">Related offerings</h2>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/products/meon/${item.slug}`} className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary">
                  {item.title}<ArrowUpRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
