import type { Metadata } from "next";

import { HomePage } from "@/components/home/HomePage";
import { contact } from "@/data/contact";
import { site } from "@/data/site";
import { social } from "@/data/social";

export const metadata: Metadata = {
  title: { absolute: site.title },
  alternates: { canonical: "/" },
};

const sameAs = social.filter((s) => !s.isPlaceholder && s.href !== "#").map((s) => s.href);

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo.src}`,
  slogan: site.tagline,
  description: site.description,
  ...(contact.isPlaceholder ? {} : { email: contact.email, telephone: contact.phone }),
  ...(sameAs.length ? { sameAs } : {}),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}
      />
      <HomePage />
    </>
  );
}
