"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqIntro, faqs } from "@/data/faqs";

export function Faq() {
  if (faqs.length === 0) return null;

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-background py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div>
          <p className="eyebrow text-primary">{faqIntro.eyebrow}</p>
          <h2 id="faq-title" className="display mt-5 text-[clamp(2.5rem,7vw,4.5rem)]">{faqIntro.title}</h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground md:text-lg">
            {faqIntro.description}
          </p>
        </div>
        <Accordion type="single" collapsible className="border-t border-border">
          {faqs.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="border-border">
              <AccordionTrigger className="py-5 text-left text-lg font-medium hover:no-underline md:py-6 md:text-2xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
