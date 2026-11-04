import { images } from "@/data/images";
import { team } from "@/data/team";
import { ProductDesktopScreen } from "@/components/mockups/ProductScreens";
import { ActionButton } from "@/components/ui/ActionButton";
import { cn } from "@/lib/utils";

type Tile = {
  className: string;
  delay: string;
} & ({ image: { src: string; alt: string } } | { screen: string });

/* Positions keep the centre clear for the headline. Odd tiles stay visible on phones. */
const tiles: Tile[] = [
  { image: images.amrut.homeHero, className: "left-[3%] top-[7%] w-[34%] -rotate-3 md:w-[19%]", delay: "0s" },
  { screen: "saas-platforms", className: "left-[29%] -top-[7%] hidden w-[15%] rotate-2 md:block", delay: "-2.4s" },
  { screen: "customer-facing-platforms", className: "right-[3%] top-[6%] w-[32%] rotate-3 md:w-[18%]", delay: "-1.2s" },
  { image: images.amrut.llmsTxt, className: "right-[25%] -top-[5%] hidden w-[14%] -rotate-2 md:block", delay: "-3.6s" },
  { screen: "business-tools", className: "left-[2%] bottom-[6%] w-[33%] rotate-2 md:w-[20%]", delay: "-0.8s" },
  { image: images.amrut.about, className: "left-[27%] -bottom-[8%] hidden w-[14%] -rotate-3 md:block", delay: "-2.9s" },
  { image: images.amrut.dashboard, className: "right-[2%] bottom-[7%] w-[34%] -rotate-2 md:w-[20%]", delay: "-1.8s" },
  { screen: "automation-products", className: "right-[26%] -bottom-[7%] hidden w-[13%] rotate-3 md:block", delay: "-4.2s" },
];

const ring =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-[#14100d]";

export function DetailCta({
  heading,
  text,
  button,
  onStart,
  secondaryHref,
  secondaryLabel,
}: {
  heading: string;
  text: string;
  button: string;
  onStart: () => void;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  const portrait = team[0]?.image?.src;
  return (
    <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#14100d] p-8 text-cream shadow-xl sm:p-12 md:p-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={cn("absolute", tile.className)}
          >
            <div
              className="cta-tile overflow-hidden rounded-lg border border-white/10 bg-[#201812] shadow-[0_20px_40px_-18px_rgba(0,0,0,0.8)]"
              style={{ animationDelay: tile.delay }}
            >
              <div className="aspect-[16/10] w-full">
                {"image" in tile ? (
                  <img
                    src={tile.image.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover object-top"
                  />
                ) : (
                  <ProductDesktopScreen slug={tile.screen} />
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#14100d_0%,rgba(20,16,13,0.88)_38%,rgba(20,16,13,0.45)_72%,rgba(20,16,13,0.7)_100%)]" />
      </div>

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-clay-light">
          Ready to start?
        </p>
        <h2 className="display mt-4 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] tracking-[-0.03em] text-[#E9DCC8]">
          {heading}
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">{text}</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <ActionButton
            label={button}
            variant="cream"
            size="lg"
            className={ring}
            {...(portrait ? { portraitSrc: portrait } : {})}
            onClick={onStart}
          />
          <ActionButton
            label={secondaryLabel}
            variant="ghost"
            size="lg"
            href={secondaryHref}
            className={ring}
          />
        </div>
      </div>
    </div>
  );
}
