import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import directory from "@/data/apiDirectory.json";

type Props = { params: Promise<{ id: string }> };

function getApi(id: string) {
  const index = Number(id);
  if (!Number.isInteger(index) || index < 0 || index >= directory.apis.length) return undefined;
  return directory.apis[index];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const api = getApi(id);
  return api ? { title: `${api.title} | ZYNOVATE`, description: `${api.title} in the ZYNOVATE ${api.collection} API collection.` } : { title: "API Not Found | ZYNOVATE" };
}

export function generateStaticParams() {
  return directory.apis.map((_, id) => ({ id: String(id) }));
}

export default async function CatalogApiPage({ params }: Props) {
  const { id } = await params;
  const api = getApi(id);
  if (!api) notFound();

  return (
    <main className="min-h-[70vh] bg-secondary">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 md:px-10 md:pb-24 md:pt-36">
        <Link href="/products/apis" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="size-4" /> All APIs
        </Link>
        <p className="eyebrow mt-10 text-primary">ZYNOVATE / Plug & Play APIs / {api.collection}</p>
        <h1 className="display mt-4 max-w-5xl text-[clamp(2.75rem,7vw,6rem)] leading-[1.02]">{api.title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Explore this API in the ZYNOVATE directory. Tell us about your product and verification workflow, and our team can help plan the right integration.
        </p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          Discuss this API <ArrowUpRight className="size-4" />
        </Link>
        <div className="mt-16 max-w-4xl border-t border-border pt-6">
          <p className="eyebrow text-primary">Collection</p>
          <p className="mt-2 text-sm font-medium">{api.collection}</p>
        </div>
      </section>
    </main>
  );
}
