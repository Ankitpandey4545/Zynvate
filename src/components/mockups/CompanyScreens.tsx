/**
 * Dashboard and phone screens for the hero composition.
 * They describe ZYNOVATE's aim, not a client product.
 * Type scales with the frame through container-query units.
 */

const stages = [
  { label: "Jan", h: 42 },
  { label: "Feb", h: 58 },
  { label: "Mar", h: 48 },
  { label: "Apr", h: 66 },
  { label: "May", h: 54 },
  { label: "Jun", h: 74 },
  { label: "Jul", h: 86 },
  { label: "Aug", h: 100 },
];

const stageTone = [
  "bg-[#E7D5C6]",
  "bg-[#DDC4B0]",
  "bg-[#D7BBA6]",
  "bg-[#C4A48A]",
  "bg-[#B08A6C]",
  "bg-[#A67C5D]",
  "bg-[#8C6244]",
  "bg-primary",
];

const nav = ["Dashboard", "Projects", "Services", "Analytics", "Team", "Settings"] as const;

const journey = [
  ["Plan", "Understand the goal"],
  ["Design", "Shape the solution"],
  ["Develop", "Build it carefully"],
  ["Launch", "Put it live"],
  ["Evolve", "Stay and improve"],
];

export function CompanyDesktopScreen() {
  return (
    <div className="@container size-full" style={{ containerType: "inline-size" }}>
      <div
        className="flex size-full overflow-hidden bg-[#F7F4F0] text-foreground"
        style={{ fontSize: "2.35cqw", lineHeight: 1.15 }}
      >
        <aside className="flex w-[21%] shrink-0 flex-col gap-[0.28em] border-r border-black/5 bg-white px-[0.55em] py-[0.7em]">
          <p className="px-[0.35em] pb-[0.35em] text-[0.62em] font-bold tracking-[0.12em]">ZYNOVATE</p>
          {nav.map((label) => (
            <span
              key={label}
              className={`truncate rounded-[0.35em] px-[0.4em] py-[0.32em] text-[0.5em] ${
                label === "Dashboard" ? "bg-primary font-semibold text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
          ))}
        </aside>
        <div className="flex min-w-0 flex-1 flex-col px-[0.7em] py-[0.55em]">
          <div className="flex items-center gap-[0.4em]">
            <span className="min-w-0 flex-1 truncate rounded-full bg-white px-[0.6em] py-[0.28em] text-[0.46em] text-muted-foreground">
              Search projects, services…
            </span>
            <span className="size-[1.15em] shrink-0 rounded-full bg-white" />
            <span className="grid size-[1.15em] shrink-0 place-items-center rounded-full bg-primary text-[0.48em] font-bold text-primary-foreground">
              Z
            </span>
          </div>
          <div className="mt-[0.45em] flex items-end justify-between gap-[0.4em]">
            <div>
              <h2 className="text-[1.15em] font-bold leading-none tracking-tight">Build what lasts.</h2>
              <p className="mt-[0.18em] text-[0.48em] text-muted-foreground">Ideas. Technology. Real outcomes.</p>
            </div>
            <span className="shrink-0 rounded-full bg-white px-[0.45em] py-[0.2em] text-[0.42em] text-muted-foreground">
              Last 30 days
            </span>
          </div>
          <div className="mt-[0.4em] grid grid-cols-3 gap-[0.28em]">
            {[
              ["Projects", "24", "+12%"],
              ["Active products", "8.4K", "+28%"],
              ["Client growth", "+200%", "+18%"],
            ].map(([label, value, delta]) => (
              <div key={label} className="rounded-[0.4em] bg-white px-[0.4em] py-[0.32em]">
                <p className="truncate text-[0.42em] text-muted-foreground">{label}</p>
                <p className="mt-[0.12em] text-[0.78em] font-bold leading-none">{value}</p>
                <p className="mt-[0.12em] text-[0.4em] font-semibold text-[#2f7d4a]">{delta}</p>
              </div>
            ))}
          </div>
          <div className="mt-[0.35em] grid min-h-0 flex-1 grid-cols-[1.25fr_0.9fr] gap-[0.28em]">
            <div className="flex min-h-0 flex-col rounded-[0.4em] bg-white px-[0.45em] py-[0.32em]">
              <div className="flex items-center justify-between">
                <p className="text-[0.48em] font-semibold">Project progress</p>
                <span className="rounded-full bg-[#F4EFEA] px-[0.4em] py-[0.12em] text-[0.38em] text-muted-foreground">
                  Monthly
                </span>
              </div>
              <div className="relative mt-[0.25em] min-h-[2.6em] flex-1">
                <div className="absolute inset-0 flex items-end gap-[0.22em]">
                  {stages.map((stage, index) => (
                    <span
                      key={stage.label}
                      className={`flex-1 rounded-t-[0.12em] ${stageTone[index] ?? "bg-primary"}`}
                      style={{ height: `${stage.h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-[0.4em] bg-white px-[0.45em] py-[0.32em]">
              <p className="text-[0.48em] font-semibold">Project journey</p>
              <ul className="mt-[0.28em] space-y-[0.22em]">
                {journey.map(([title, text]) => (
                  <li key={title} className="flex items-start gap-[0.3em]">
                    <span className="mt-[0.12em] size-[0.55em] shrink-0 rounded-[0.12em] bg-primary" />
                    <span>
                      <span className="block text-[0.46em] font-semibold leading-none">{title}</span>
                      <span className="mt-[0.1em] block text-[0.38em] leading-none text-muted-foreground">{text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const phoneOffers: [string, string][] = [
  ["Web & Mobile Apps", "Modern, scalable and secure"],
  ["SaaS Platforms", "Products that scale"],
  ["Custom Software", "Built around your needs"],
];

export function CompanyMobileScreen() {
  return (
    <div className="@container size-full" style={{ containerType: "inline-size" }}>
      <div
        className="flex size-full flex-col bg-[#FBF8F4] px-[0.7em] pb-[0.7em] pt-[1.85em] text-foreground"
        style={{ fontSize: "7.4cqw", lineHeight: 1.15 }}
      >
        <div className="flex items-center justify-between">
          <p className="text-[0.52em] font-bold tracking-[0.14em]">ZYNOVATE</p>
          <span className="flex w-[0.9em] flex-col gap-[0.14em]" aria-hidden>
            <span className="h-[0.08em] rounded-full bg-foreground" />
            <span className="h-[0.08em] rounded-full bg-foreground" />
            <span className="h-[0.08em] w-[0.65em] rounded-full bg-foreground" />
          </span>
        </div>
        <h2 className="mt-[0.55em] text-[1.05em] font-bold leading-[1.05] tracking-tight">
          Ideas engineered for what’s next.
        </h2>
        <p className="mt-[0.35em] text-[0.52em] leading-[1.35] text-muted-foreground">
          We build digital products that help businesses grow and evolve.
        </p>
        <ul className="mt-[0.45em] flex min-h-0 flex-1 flex-col justify-between gap-[0.35em] pb-[0.15em]">
          {phoneOffers.map(([title, text]) => (
            <li key={title} className="flex items-center gap-[0.45em] rounded-[0.5em] bg-white px-[0.5em] py-[0.48em]">
              <span className="grid size-[1.7em] shrink-0 place-items-center rounded-[0.4em] bg-primary/10 text-[0.7em] font-bold text-primary">
                {title.slice(0, 1)}
              </span>
              <span className="min-w-0">
                <span className="block text-[0.58em] font-bold leading-none">{title}</span>
                <span className="mt-[0.2em] block text-[0.46em] leading-snug text-muted-foreground">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
