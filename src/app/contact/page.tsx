import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { RouteHero } from "@/components/sections/RouteHero";
import { ContactExtras } from "@/components/sections/ContactExtras";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <RouteHero route="contact" />
      <Contact />
      <ContactExtras />
    </>
  );
}
