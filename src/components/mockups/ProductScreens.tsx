import { getProductScreen, type ScreenTone } from "@/data/productScreens";
import { cn } from "@/lib/utils";

const toneClass: Record<ScreenTone, string> = {
  good: "bg-emerald-100 text-emerald-700",
  brand: "bg-primary/12 text-primary",
  muted: "bg-secondary text-muted-foreground",
};

/* Both screens size their type from the container width (cqw), so they stay legible at any mockup size. */

export function ProductDesktopScreen({ slug }: { slug: string }) {
  const screen = getProductScreen(slug);
  const peak = Math.max(...screen.bars);

  return (
    <div className="@container size-full">
      <div
        className="flex size-full bg-[#FBF7F2] text-foreground"
        style={{ fontSize: "1.7cqw", lineHeight: 1.25 }}
      >
        <aside className="flex w-[22%] shrink-0 flex-col gap-[0.6em] bg-espresso px-[0.9em] py-[1em] text-cream">
          <div className="mb-[0.6em] flex items-center gap-[0.5em]">
            <span className="grid size-[1.6em] place-items-center rounded-[0.4em] bg-primary text-[0.8em] font-bold text-white">
              {screen.app.slice(0, 1)}
            </span>
            <span className="font-semibold">{screen.app}</span>
          </div>
          {screen.nav.map((item, index) => (
            <span
              key={item}
              className={cn(
                "rounded-[0.4em] px-[0.6em] py-[0.35em] text-[0.85em]",
                index === 0 ? "bg-white/12 font-semibold text-white" : "text-cream/65",
              )}
            >
              {item}
            </span>
          ))}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-[0.8em] p-[1em]">
          <div className="flex items-center justify-between">
            <span className="text-[1.15em] font-bold">{screen.title}</span>
            <span className="flex items-center gap-[0.35em] rounded-full bg-emerald-100 px-[0.6em] py-[0.2em] text-[0.75em] font-semibold text-emerald-700">
              <span className="size-[0.5em] rounded-full bg-emerald-500" />
              {screen.badge}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-[0.6em]">
            {screen.kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-[0.6em] border border-border bg-white p-[0.6em]">
                <p className="truncate text-[0.72em] text-muted-foreground">{kpi.label}</p>
                <p className="mt-[0.2em] text-[1.25em] font-bold">{kpi.value}</p>
              </div>
            ))}
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_1fr] gap-[0.6em]">
            <div className="flex min-h-0 flex-col rounded-[0.6em] border border-border bg-white p-[0.7em]">
              <p className="text-[0.75em] font-semibold text-muted-foreground">{screen.chartLabel}</p>
              <div className="mt-[0.5em] flex min-h-0 flex-1 items-end gap-[0.3em]">
                {screen.bars.map((bar, index) => (
                  <span
                    key={index}
                    className={cn(
                      "flex-1 rounded-t-[0.25em]",
                      index === screen.bars.length - 1 ? "bg-primary" : "bg-clay-light/70",
                    )}
                    style={{ height: `${(bar / peak) * 100}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex min-h-0 flex-col gap-[0.4em] rounded-[0.6em] border border-border bg-white p-[0.7em]">
              {screen.rows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-[0.4em]">
                  <div className="min-w-0">
                    <p className="truncate text-[0.78em] font-semibold">{row.label}</p>
                    <p className="truncate text-[0.66em] text-muted-foreground">{row.meta}</p>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 rounded-full px-[0.5em] py-[0.15em] text-[0.62em] font-semibold",
                      toneClass[row.tone],
                    )}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductPhoneScreen({ slug }: { slug: string }) {
  const screen = getProductScreen(slug);
  const { phone } = screen;
  const recent = screen.bars.slice(-6);
  const peak = Math.max(...recent);

  return (
    <div className="@container size-full">
      <div
        className="flex size-full flex-col bg-[#FBF7F2] text-foreground"
        style={{ fontSize: "7.2cqw", lineHeight: 1.25 }}
      >
        <div className="flex items-center justify-between px-[1.1em] pt-[0.7em] text-[0.7em] font-semibold">
          <span>9:41</span>
          <span className="flex gap-[0.25em]">
            <span className="h-[0.6em] w-[0.9em] rounded-[0.15em] bg-foreground/70" />
          </span>
        </div>

        <div className="px-[0.9em] pt-[1.6em]">
          <p className="text-[0.7em] font-semibold uppercase tracking-wide text-primary">{screen.app}</p>
          <p className="text-[1.15em] font-bold">{phone.title}</p>
        </div>

        <div className="mx-[0.9em] mt-[0.7em] rounded-[0.8em] bg-espresso p-[0.8em] text-cream">
          <p className="text-[0.65em] text-cream/70">{phone.heroLabel}</p>
          <p className="mt-[0.15em] text-[1.2em] font-bold text-white">{phone.heroValue}</p>
          <p className="mt-[0.2em] text-[0.62em] text-cream/75">{phone.heroNote}</p>
          <div className="mt-[0.6em] flex h-[2.2em] items-end gap-[0.2em]">
            {recent.map((bar, index) => (
              <span
                key={index}
                className={cn(
                  "flex-1 rounded-t-[0.2em]",
                  index === recent.length - 1 ? "bg-clay-light" : "bg-white/25",
                )}
                style={{ height: `${(bar / peak) * 100}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mx-[0.9em] mt-[0.7em] flex flex-col gap-[0.45em]">
          {screen.rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-[0.3em] rounded-[0.6em] border border-border bg-white px-[0.6em] py-[0.45em]"
            >
              <div className="min-w-0">
                <p className="truncate text-[0.68em] font-semibold">{row.label}</p>
                <p className="truncate text-[0.56em] text-muted-foreground">{row.meta}</p>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-full px-[0.45em] py-[0.1em] text-[0.52em] font-semibold",
                  toneClass[row.tone],
                )}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mx-[0.9em] mt-auto rounded-full bg-primary py-[0.55em] text-center text-[0.72em] font-semibold text-white">
          {phone.action}
        </div>

        <div className="mt-[0.7em] flex justify-around border-t border-border bg-white px-[0.6em] pb-[1em] pt-[0.55em]">
          {phone.tabs.map((tab, index) => (
            <span
              key={tab}
              className={cn(
                "flex flex-col items-center gap-[0.2em] text-[0.58em]",
                index === 0 ? "font-semibold text-primary" : "text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "size-[0.9em] rounded-[0.3em]",
                  index === 0 ? "bg-primary" : "bg-muted-foreground/30",
                )}
              />
              {tab}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
