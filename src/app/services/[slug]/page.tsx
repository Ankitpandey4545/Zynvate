import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPageView } from "@/components/sections/details/DetailPageView";
import { services, getService } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getService(slug);
  if (!item) return { title: "Service Not Found | ZYNOVATE" };

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
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getService(slug);

  if (!item) {
    notFound();
  }

  return (
    <DetailPageView item={item} type="service" allItems={services} />
  );
}
