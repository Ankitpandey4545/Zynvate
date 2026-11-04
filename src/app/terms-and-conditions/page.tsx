import type { Metadata } from "next";

import { termsAndConditions } from "@/data/terms";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms governing access to zynovate.in and the products and services offered by Zynovate Private Limited.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden rounded-b-[2rem] bg-white text-foreground shadow-[0_18px_50px_-36px_rgba(76,43,25,0.55)] md:rounded-b-[3rem]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(196,137,106,0.2),transparent_32%),linear-gradient(105deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.86)_52%,rgba(248,240,230,0.72)_100%)]" />
        <div className="pointer-events-none absolute -right-20 top-1/2 size-[min(48vw,34rem)] -translate-y-1/2 rounded-full border border-primary/10" />
        <div className="pointer-events-none absolute right-[8%] top-1/2 size-[min(32vw,23rem)] -translate-y-1/2 rounded-full border border-primary/10" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 md:px-12 md:pb-24 md:pt-40">
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span className="h-px w-8 bg-primary/70" />
            {termsAndConditions.eyebrow}
          </p>
          <h1 className="display mt-6 max-w-4xl text-[clamp(3rem,8vw,7.8rem)]">
            {termsAndConditions.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/65 md:text-xl">
            {termsAndConditions.intro}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-16 md:px-12 md:py-24">
        <aside className="hidden md:block">
          <div className="sticky top-28">
            <p className="eyebrow text-primary">On this page</p>
            <nav aria-label="Terms and Conditions sections" className="mt-5 border-l border-primary/15">
              {termsAndConditions.sections.map((section) => (
                <a
                  key={section.number}
                  href={`#terms-${section.number}`}
                  className="block border-l border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  {section.number} · {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="min-w-0">
          <div className="max-w-3xl space-y-5 border-b border-primary/15 pb-12 text-base leading-relaxed text-foreground/70 md:text-lg">
            <p>{termsAndConditions.agreement}</p>
          </div>

          <div className="divide-y divide-primary/15">
            {termsAndConditions.sections.map((section) => (
              <section
                key={section.number}
                id={`terms-${section.number}`}
                className="scroll-mt-28 py-12 first:pt-14 md:py-16"
              >
                <div className="grid gap-6 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-8">
                  <p className="font-mono text-sm tracking-[0.12em] text-primary">
                    {section.number}
                  </p>
                  <div className="max-w-3xl">
                    <h2 className="display text-3xl tracking-tight md:text-4xl">{section.title}</h2>
                    {section.intro ? (
                      <p className="mt-6 text-base leading-relaxed text-foreground/70 md:text-lg">
                        {section.intro}
                      </p>
                    ) : null}
                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-5 text-base leading-relaxed text-foreground/70 md:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.items ? <TermsList items={section.items} /> : null}
                    {section.contact ? (
                      <dl className="mt-7 grid gap-4 rounded-2xl border border-primary/15 bg-white/45 p-5 sm:grid-cols-2">
                        {section.contact.map((item) => (
                          <div key={item.label}>
                            <dt className="eyebrow text-primary">{item.label}</dt>
                            <dd className="mt-2 text-sm text-foreground/75">
                              {item.href ? (
                                <a className="underline-offset-4 hover:underline" href={item.href}>
                                  {item.value}
                                </a>
                              ) : (
                                item.value
                              )}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}
                    {section.footer ? (
                      <p className="mt-6 leading-relaxed text-foreground/70">{section.footer}</p>
                    ) : null}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}

function TermsList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-base leading-relaxed text-foreground/70">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
