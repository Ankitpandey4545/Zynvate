import type { Metadata } from "next";
import { ApiCatalog } from "@/components/sections/ApiCatalog";

export const metadata: Metadata = {
  title: "API Directory | ZYNOVATE",
  description: "Search and browse ZYNOVATE's verification APIs by collection.",
};

export default function ApiDirectoryPage() {
  return <ApiCatalog />;
}
