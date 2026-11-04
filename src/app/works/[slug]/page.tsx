import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WorkCaseStudy } from "@/components/sections/WorkCaseStudy";
import { featuredProjects, getProject } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getProject(slug);
  if (!item) return { title: "Work Not Found" };
  const title = item.seo?.title ?? item.title;
  const description = item.seo?.description ?? item.summary ?? item.tagline ?? item.title;
  return {
    title,
    description,
    alternates: { canonical: `/works/${item.slug}` },
    openGraph: {
      title,
      description,
      url: `/works/${item.slug}`,
    },
  };
}

export function generateStaticParams() {
  return featuredProjects().map((item) => ({ slug: item.slug }));
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getProject(slug);
  if (!item) notFound();
  return <WorkCaseStudy project={item} />;
}
