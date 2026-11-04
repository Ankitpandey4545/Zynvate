import Link from "next/link";
import { ArrowUpRight, Check, Settings } from "lucide-react";
import { LaptopMockup } from "@/components/mockups/LaptopMockup";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { CompanyDesktopScreen, CompanyMobileScreen } from "@/components/mockups/CompanyScreens";

const offers = ["Web & Mobile Apps", "SaaS Platforms", "Custom Software", "Care after launch"];

const pill =
  "inline-flex w-max max-w-full items-center gap-[0.45em] rounded-full border border-foreground/10 bg-cream/94 shadow-soft backdrop-blur-xl";

/**
 * Open laptop turned toward the right, with a slim phone beside it.
 * The group scales with its parent so the same layout holds on every screen.
 */
export function HeroShowcase() {
  return (
    <div
      className="@container relative h-full w-full"
      style={{ fontSize: "clamp(0.68rem, 2.7cqi, 1.05rem)" }}
    >
      <svg
        aria-hidden
        viewBox="0 0 800 640"
        className="pointer-events-none absolute inset-0 h-full w-full text-foreground/25"
        fill="none"
      >
        <path d="M90 340C180 130 400 55 540 155" stroke="currentColor" strokeWidth="1.4" />
        <path d="M530 95C630 30 740 50 770 140" stroke="currentColor" strokeWidth="1.4" />
      </svg>

      <div data-hero-laptop className="absolute left-[2%] top-[8%] z-10 w-[86%] @[28rem]:left-[4%] @[28rem]:w-[84%]">
        <div data-hero-float="laptop">
          <div
            className="origin-bottom [transform:perspective(1400px)_rotateY(-14deg)_rotateX(2deg)_rotateZ(-0.6deg)] @[32rem]:[transform:perspective(1400px)_rotateY(-20deg)_rotateX(3deg)_rotateZ(-1deg)]"
          >
            <LaptopMockup priority base="deck">
              <CompanyDesktopScreen />
            </LaptopMockup>
          </div>
        </div>
      </div>

      <div data-hero-phone className="absolute right-0 top-[22%] z-20 w-[24%] @[28rem]:w-[22%]">
        <div data-hero-float="phone">
          <PhoneMockup priority frame="hero">
            <CompanyMobileScreen />
          </PhoneMockup>
        </div>
      </div>

      <div data-hero-float="aim" className="absolute left-[16%] top-[4%] z-30 @[28rem]:left-[20%] @[28rem]:top-[5%]">
        <Link href="/about" className={`${pill} px-[0.55em] py-[0.35em] transition-transform hover:-translate-y-0.5`}>
          <span className="grid size-[1.65em] shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <ArrowUpRight className="size-[0.85em]" />
          </span>
          <span className="pr-[0.15em] text-left leading-none">
            <span className="block text-[0.62em] font-semibold uppercase tracking-[0.16em] text-primary">
              Our aim
            </span>
            <span className="mt-[0.22em] block text-[0.92em] font-semibold text-foreground">ZYNOVATE</span>
          </span>
        </Link>
      </div>

      <div
        data-hero-float="offer"
        className="absolute left-0 top-[40%] z-30 w-max rounded-[0.85em] border border-foreground/10 bg-cream/96 px-[0.7em] py-[0.6em] shadow-soft backdrop-blur-xl"
      >
        <p className="text-[0.92em] font-semibold leading-none text-foreground">What we make</p>
        <ul className="mt-[0.45em] space-y-[0.32em]">
          {offers.map((item) => (
            <li key={item} className="flex items-center gap-[0.35em] whitespace-nowrap text-[0.72em] leading-none text-foreground/80">
              <Check className="size-[0.85em] shrink-0 text-primary" strokeWidth={2.4} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div data-hero-float="growth" className="absolute right-[6%] top-[10%] z-30 @[28rem]:right-[9%] @[28rem]:top-[10%]">
        <div className={`${pill} px-[0.55em] py-[0.35em]`}>
          <p className="whitespace-nowrap text-[0.82em] font-semibold leading-none text-foreground">
            Ideas that last
          </p>
          <span className="flex h-[1.15em] items-end gap-[0.12em]" aria-hidden>
            {[40, 65, 50, 80, 100].map((height) => (
              <span key={height} className="w-[0.22em] rounded-sm bg-primary/80" style={{ height: `${height}%` }} />
            ))}
          </span>
        </div>
      </div>

      <div data-hero-float="promise" className="absolute bottom-[18%] left-[10%] z-30 @[28rem]:bottom-[20%] @[28rem]:left-[15%]">
        <Link href="/about" className={`${pill} px-[0.55em] py-[0.35em] transition-transform hover:-translate-y-0.5`}>
          <span className="grid size-[1.65em] shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <Settings className="size-[0.85em]" />
          </span>
          <span className="pr-[0.15em] text-left leading-none">
            <span className="block text-[0.86em] font-semibold text-foreground">From sketch to launch</span>
            <span className="mt-[0.22em] block text-[0.68em] text-foreground/55">One team, the whole way</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
