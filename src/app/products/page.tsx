import type { Metadata } from "next";
import { Products } from "@/components/sections/Products";
import { RouteHero } from "@/components/sections/RouteHero";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <RouteHero route="products" />
      <Products />
    </>
  );
}
