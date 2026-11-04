import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import DotField from "@/components/motion/DotField";
import { BrowserMockup } from "@/components/mockups/BrowserMockup";
import { LaptopMockup } from "@/components/mockups/LaptopMockup";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { CompanyDesktopScreen } from "@/components/mockups/CompanyScreens";
import { HeroShowcase } from "@/components/mockups/HeroShowcase";
import { images } from "@/data/images";
import { ProductDesktopScreen, ProductPhoneScreen } from "@/components/mockups/ProductScreens";

type Route = "about" | "services" | "products" | "works" | "contact";

const content = {
  about: {
    title: "About Us.",
    description:
      "We combine thoughtful design, modern technology, and strong engineering to create digital solutions that meet today's needs and prepare businesses for tomorrow's opportunities.",
    detail: "Strategy · Design · Engineering",
  },
  services: {
    title: "Every layer of the digital build, considered.",
    description:
      "From the first sketch to the systems behind it, our services connect strategy, design and engineering into one focused delivery team.",
    detail: "8 capabilities · 1 connected team",
  },
  products: {
    title: "Digital products built to earn their place.",
    description:
      "We shape product ideas into useful, scalable tools — from internal systems to customer-facing platforms people return to.",
    detail: "Useful by design · Ready to evolve",
  },
  works: {
    title: "Proof that good work moves the needle.",
    description:
      "A look at the digital platforms, interfaces and systems we build with our partners to make ambitious ideas real.",
    detail: "Selected projects · Real outcomes",
  },
  contact: {
    title: "Bring us the challenge behind the brief.",
    description:
      "Tell us what you are trying to change, launch or make easier. We will bring the right questions, the right people and a clear next step.",
    detail: "Typically replies within 24 hours",
  },
} satisfies Record<Route, { title: string; description: string; detail: string }>;

function AboutVisual() {
  return (
    <div className="relative mx-auto aspect-[1.02] w-full max-w-[34rem] min-w-0 sm:max-w-xl">
      <HeroShowcase />
    </div>
  );
}

function ServicesVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg rotate-1 drop-shadow-2xl">
      <LaptopMockup>
        <CompanyDesktopScreen />
      </LaptopMockup>
      <div className="absolute -right-4 -top-5 rounded-2xl border border-primary/15 bg-white/95 px-4 py-3 shadow-lg">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
          Delivery system
        </p>
        <p className="mt-1 text-sm font-semibold">One team. Every layer.</p>
      </div>
    </div>
  );
}

function ProductsVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-lg items-end justify-center gap-[-1rem] drop-shadow-2xl">
      <div className="w-[88%] -rotate-2">
        <LaptopMockup>
          <ProductDesktopScreen slug="business-tools" />
        </LaptopMockup>
      </div>
      <div className="absolute -bottom-6 -right-1 w-24 rotate-6">
        <PhoneMockup>
          <ProductPhoneScreen slug="customer-facing-platforms" />
        </PhoneMockup>
      </div>
    </div>
  );
}

function WorksVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg rotate-2 drop-shadow-2xl">
      <BrowserMockup image={images.amrut.homeHero} url="amrut.ai" />
      <div className="absolute -bottom-2 -right-2 grid size-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">
        <ArrowUpRight />
      </div>
    </div>
  );
}

function ContactVisual() {
  return (
    <div className="relative mx-auto h-full min-h-0 w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-primary/20 shadow-2xl">
      <img
        src="/photos/contact.jpg"
        alt="Team collaborating around a table"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-espresso/75 via-espresso/25 to-transparent" />
      <div className="absolute bottom-5 left-5 max-w-[15rem] text-white">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/65">
          Noida Sector 2 B-10, Uttar Pradesh, 201301
        </p>
        <p className="mt-2 text-xl font-semibold leading-tight">
          Good work starts with a clear conversation.
        </p>
      </div>
    </div>
  );
}

function Showcase({ route }: { route: Route }) {
  if (route === "about") return <AboutVisual />;
  if (route === "services") return <ServicesVisual />;
  if (route === "products") return <ProductsVisual />;
  if (route === "works") return <WorksVisual />;
  return <ContactVisual />;
}

export function RouteHero({ route }: { route: Route }) {
  const item = content[route];
  const compact = route === "contact";
  const aboutHero = route === "about";
  return (
    <section
      className={`relative isolate overflow-hidden rounded-b-[2rem] bg-white text-foreground shadow-[0_18px_50px_-36px_rgba(76,43,25,0.55)] md:rounded-b-[3rem] ${
        aboutHero ? "h-[90svh] max-h-[92svh] min-h-[86svh]" : ""
      }`}
    >
      <DotField
        colors={["#7a4426", "#9a5b36", "#b58468", "#2b1a10"]}
        ringGap={25}
        dotSpacing={31}
        centerX={0.76}
        centerY={0.48}
        innerRadius={0.08}
        interaction={0.75}
        className="opacity-[0.22]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_44%,rgba(196,137,106,0.14),transparent_25%),linear-gradient(105deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.76)_44%,rgba(255,255,255,0.3)_100%)]" />
      {compact ? null : (
        <>
          <div className="pointer-events-none absolute right-[8%] top-1/2 size-[min(38vw,28rem)] -translate-y-1/2 rounded-full border border-primary/10 md:right-[10%]" />
          <div className="pointer-events-none absolute right-[14%] top-1/2 size-[min(27vw,20rem)] -translate-y-1/2 rounded-full border border-primary/10" />
        </>
      )}
      <div
        className={`relative mx-auto grid max-w-7xl items-center sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:px-12 ${
          aboutHero
            ? "h-full min-h-0 gap-6 overflow-hidden px-5 pb-8 pt-28 md:gap-10 md:pb-10 md:pt-32"
            : compact
              ? "min-h-[36svh] max-h-none gap-4 px-5 pb-7 pt-24 md:min-h-[38svh] md:gap-8 md:pb-8 md:pt-28"
              : "min-h-[46svh] gap-5 px-5 pb-10 pt-28 md:gap-10 md:pb-12 md:pt-32"
        }`}
      >
        <div className="max-w-2xl">
          <h1
            className={`display max-w-2xl leading-[0.9] tracking-[-0.05em] ${
              aboutHero
                ? "text-[clamp(3.4rem,8.6vw,7.6rem)]"
                : compact
                  ? "text-[clamp(1.85rem,3.8vw,3.15rem)]"
                  : "text-[clamp(2.45rem,5.5vw,5.3rem)]"
            }`}
          >
            {item.title}
          </h1>
          <p
            className={`mt-5 max-w-xl leading-relaxed text-foreground/65 ${
              aboutHero ? "text-base md:text-lg" : compact ? "text-sm md:text-base" : "text-base md:text-lg"
            }`}
          >
            {item.description}
          </p>
          <div className={`flex flex-wrap items-center gap-4 ${compact || aboutHero ? "mt-5" : "mt-8"}`}>
            <span className="rounded-full border border-primary/15 bg-white/55 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-foreground/60">
              {item.detail}
            </span>
            <ArrowDownRight className="size-5 text-primary" />
          </div>
        </div>
        <div
          className={`relative ${
            aboutHero ? "hidden h-full min-h-0 md:block" : compact ? "min-h-0 h-40 md:h-44" : "min-h-64"
          }`}
        >
          {aboutHero ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[min(100%,30rem)]">
                <Showcase route={route} />
              </div>
            </div>
          ) : (
            <Showcase route={route} />
          )}
        </div>
      </div>
    </section>
  );
}
