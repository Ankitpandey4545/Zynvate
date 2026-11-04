import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
import { Industries } from "@/components/sections/Industries";
import { RouteHero } from "@/components/sections/RouteHero";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <RouteHero route="services" />
      <Services />
      <Technologies />
      <Industries />
    </>
  );
}
