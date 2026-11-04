import { ArrowUpRight, Clock3, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { contact, contactSteps } from "@/data/contact";

export function ContactExtras() {
  return (
    <section className="bg-secondary px-5 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary">What happens next</p>
            <h2 className="display mt-5 max-w-xl text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95]">
              A thoughtful start makes better work.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            No hard sell, no vague handoff. We use the first conversation to understand the
            opportunity, define the shape of the work, and make the next step easy to say yes to.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {contactSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-border bg-background p-6 shadow-soft"
            >
              <span className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-10 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-foreground p-6 text-background md:col-span-2">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="eyebrow text-clay-light">Work with confidence</p>
                <h3 className="mt-4 max-w-lg text-2xl font-semibold">
                  Clear communication from kickoff to launch.
                </h3>
              </div>
              <ShieldCheck className="size-8 shrink-0 text-clay-light" />
            </div>
            <div className="mt-10 grid gap-4 text-sm text-background/70 sm:grid-cols-2">
              <p className="flex items-center gap-2">
                <Clock3 className="size-4 text-clay-light" /> Reply within 24 hours
              </p>
              <p className="flex items-center gap-2">
                <Sparkles className="size-4 text-clay-light" /> Practical recommendations
              </p>
            </div>
          </div>
          <a
            href={contact.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-border bg-background p-6 shadow-soft transition-transform hover:-translate-y-1"
          >
            <MapPin className="size-6 text-primary" />
            <p className="mt-10 text-sm text-muted-foreground">Find us in</p>
            <h3 className="mt-1 text-xl font-semibold">{contact.location}</h3>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
              Open in Google Maps{" "}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
