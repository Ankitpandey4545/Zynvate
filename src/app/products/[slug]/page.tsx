import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPageView } from "@/components/sections/details/DetailPageView";
import { products, getProduct } from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getProduct(slug);
  if (!item) return { title: "Product Not Found | ZYNOVATE" };

  return {
    title: item.seo.title,
    description: item.seo.description,
    openGraph: {
      title: item.seo.title,
      description: item.seo.description,
    },
  };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getProduct(slug);

  if (!item) {
    notFound();
  }

  return (
    <DetailPageView item={item} type="product" allItems={products} />
  );
}
