import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { aadhaarVerificationApis } from "@/data/apiCatalog";

type Props = { params: Promise<{ slug: string }> };

function getApi(slug: string) {
  return aadhaarVerificationApis.find((api) => api.href.endsWith(`/${slug}`));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const api = getApi(slug);
  return api ? { title: `${api.title} | ZYNOVATE`, description: `Explore the ${api.title} API in the ZYNOVATE Plug & Play API directory.` } : { title: "API Not Found | ZYNOVATE" };
}

export function generateStaticParams() {
  return aadhaarVerificationApis.map((api) => ({ slug: api.href.split("/").pop() ?? "" }));
}

export default async function ApiDetailPage({ params }: Props) {
  const { slug } = await params;
  const api = getApi(slug);
  if (!api) notFound();

  return (
    <main className="min-h-[70vh] bg-secondary">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 md:px-10 md:pb-24 md:pt-36">
        <Link href="/products/apis" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="size-4" /> All APIs
        </Link>
        <p className="eyebrow mt-10 text-primary">ZYNOVATE / Plug & Play APIs / Aadhaar & Core KYC</p>
        <h1 className="display mt-4 max-w-5xl text-[clamp(2.75rem,7vw,6rem)] leading-[1.02]">{api.title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Explore this API in the ZYNOVATE directory. Tell us about your product and verification workflow, and our team can help plan the right integration.
        </p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          Discuss this API <ArrowUpRight className="size-4" />
        </Link>
        <div className="mt-16 grid max-w-4xl gap-4 border-t border-border pt-6 sm:grid-cols-3">
          <div><p className="eyebrow text-primary">Directory</p><p className="mt-2 text-sm font-medium">Plug & Play APIs</p></div>
          <div><p className="eyebrow text-primary">Category</p><p className="mt-2 text-sm font-medium">Aadhaar & Core KYC</p></div>
          <div><p className="eyebrow text-primary">API</p><p className="mt-2 text-sm font-medium">{api.title}</p></div>
        </div>
      </section>
    </main>
  );
}
