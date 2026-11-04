import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { AboutValues } from "@/components/sections/AboutValues";
import { TeamGallery } from "@/components/sections/TeamGallery";
import { RouteHero } from "@/components/sections/RouteHero";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <RouteHero route="about" />
      <About />
      <AboutValues />
      <TeamGallery />
    </>
  );
}
