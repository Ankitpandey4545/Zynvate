import type { Metadata } from "next";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { RouteHero } from "@/components/sections/RouteHero";
import { WorksGallery } from "@/components/sections/WorksGallery";

export const metadata: Metadata = { title: "Works" };

export default function WorksPage() {
  return (
    <>
      <RouteHero route="works" />
      <WorksGallery />
      <FeaturedWork />
      <Testimonials />
    </>
  );
}
