import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowUpRight,
  Blocks,
  Braces,
  ChevronDown,
  Cloud,
  Globe2,
  Layers3,
  Menu,
  PenTool,
  Smartphone,
  Sparkles,
  Workflow,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/data/site";
import { contact } from "@/data/contact";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { productMenuCategories } from "@/data/detailPages";
import { featuredProjects } from "@/data/projects";
import { aadhaarCoreKycSubcategories, aadhaarVerificationApis, apiCategories } from "@/data/apiCatalog";
import type { Product, Project, Service } from "@/lib/types";
import { useSmoothScroll } from "@/components/motion/SmoothScrollProvider";
import { cn } from "@/lib/utils";
import { ProjectInquiryModal } from "@/components/layout/ProjectInquiryModal";
import { ActionButton } from "@/components/ui/ActionButton";

const serviceIcons: Record<string, LucideIcon> = {
  Globe2,
  Smartphone,
  Blocks,
  Cloud,
  PenTool,
  Braces,
  Workflow,
  Wrench,
};

const productIcons: LucideIcon[] = [Layers3, Blocks, Sparkles, Workflow, Globe2, PenTool];

function hasServiceIcon(item: Service | Product | Project): item is Service {
  return "icon" in item;
}

function coverOf(item: Service | Product | Project) {
  return "screenshots" in item ? item.screenshots?.cover : undefined;
}

function ApiDirectoryDropdown() {
  return (
    <div className="mt-2 border-t border-border pt-3">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-wider text-primary">Plug & Play APIs</p><p className="mt-1 text-[0.68rem] text-muted-foreground">Aadhaar-first onboarding, eKYC, XML, and core identity checks.</p></div>
        <Link href="/products/apis" className="shrink-0 text-xs font-semibold text-primary hover:underline">View all APIs ↗</Link>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-5">
        {apiCategories.map((category) => <span key={category} className="rounded-lg border border-border px-2 py-1.5 text-[0.62rem] leading-tight text-foreground/70">{category}</span>)}
      </div>
      <section className="border-t border-border pt-3">
        <h3 className="text-xs font-bold text-foreground">Aadhaar & Core KYC</h3>
        <div className="mt-2 rounded-lg bg-secondary/50 p-2.5">
          <h4 className="text-[0.7rem] font-semibold text-foreground">Aadhaar Verification</h4>
          <p className="mt-1 text-[0.65rem] leading-snug text-muted-foreground">Core Aadhaar verification, QR, authentication, and masking APIs.</p>
          <ul className="mt-2 grid grid-cols-1 gap-x-4 sm:grid-cols-3 xl:grid-cols-4">
            {aadhaarVerificationApis.map(({ title, href }) => <li key={href}><Link href={href} className="block rounded-md py-1 text-[0.67rem] leading-snug text-foreground/75 hover:text-primary hover:underline">{title} ↗</Link></li>)}
          </ul>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1.5 lg:grid-cols-5">
          {aadhaarCoreKycSubcategories.map((subcategory) => <span key={subcategory} className="rounded-md border border-border px-2 py-1.5 text-[0.64rem] text-foreground/65">{subcategory}</span>)}
        </div>
      </section>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const { scrollTo } = useSmoothScroll();
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<null | "services" | "products" | "works">(null);
  const [workProductsOpen, setWorkProductsOpen] = useState(false);
  const [workApisOpen, setWorkApisOpen] = useState(false);
  const menuCloseTimer = useRef<number | null>(null);
  const works = featuredProjects();
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [indicator, setIndicator] = useState<{ left: number; right: number } | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const listRef = useRef<HTMLUListElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  const cancelMenuClose = () => {
    if (menuCloseTimer.current !== null) {
      window.clearTimeout(menuCloseTimer.current);
      menuCloseTimer.current = null;
    }
  };
  const scheduleMenuClose = () => {
    cancelMenuClose();
    menuCloseTimer.current = window.setTimeout(() => {
      setMenu(null);
      menuCloseTimer.current = null;
    }, 350);
  };

  useEffect(() => () => {
    if (menuCloseTimer.current !== null) window.clearTimeout(menuCloseTimer.current);
  }, []);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (!open) setHidden(y > last && y > 160);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Active section tracking
  useEffect(() => {
    setMenu(null);
    if (pathname !== "/") {
      setActive(pathname.slice(1) || null);
      return;
    }
    setActive("home");
    const ids = site.nav.filter((l) => l.href !== "/").map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    const onTop = () => window.scrollY < 200 && setActive("home");
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [pathname]);

  useLayoutEffect(() => {
    const el = active ? linkRefs.current[active] : null;
    if (!el || !listRef.current) return setIndicator(null);
    const parent = listRef.current.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    setIndicator({ left: r.left - parent.left, right: parent.right - r.right });
  }, [active]);

  // Mobile menu: Esc + focus trap + lock, focus returns to the toggle on close
  useEffect(() => {
    if (!open) {
      if (wasOpen.current) toggleRef.current?.focus({ preventScroll: true });
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    const root = menuRef.current;
    const focusables = root?.querySelectorAll<HTMLElement>("a, button");
    focusables?.[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && focusables && focusables.length) {
        const first = focusables[0]!;
        const last = focusables[focusables.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      for (const link of site.nav) router.prefetch(link.href);
    }, 200);
    return () => window.clearTimeout(id);
  }, [router]);

  const go = (href: string) => (e: React.MouseEvent) => {
    setOpen(false);
    setMenu(null);
    if (href === "/contact") {
      if (pathname === "/contact") {
        e.preventDefault();
        window.scrollTo(0, 0);
        setTimeout(() => scrollTo("#contact"), open ? 860 : 620);
      }
      return;
    }
    if (href === pathname || href.startsWith("#")) {
      e.preventDefault();
      const target = href.startsWith("#") && document.querySelector(href) ? href : 0;
      setTimeout(() => scrollTo(target), open ? 280 : 0);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-transform duration-500 ease-[var(--ease-out-expo)]",
          hidden && "-translate-y-[140%]",
        )}
        onFocus={() => setHidden(false)}
      >
        <nav
          aria-label="Primary"
          className="glass flex w-full max-w-6xl items-center justify-between rounded-full py-2 pl-5 pr-2"
        >
          <Link
            href="/"
            {...(pathname === "/" ? { onClick: go("#top") } : {})}
            aria-label="ZYNOVATE home"
            className="shrink-0"
          >
            <img
              src={site.logo.src}
              alt={site.logo.alt}
              width={site.logo.width}
              height={site.logo.height}
              className="h-10 w-auto"
            />
          </Link>

          <ul
            ref={listRef}
            className="relative hidden items-center gap-1 lg:flex"
            onMouseLeave={scheduleMenuClose}
          >
            <span
              aria-hidden
              className={cn(
                "absolute inset-0 bg-secondary transition-[clip-path,opacity] duration-500 ease-[var(--ease-out-expo)]",
                !indicator && "opacity-0",
              )}
              style={
                indicator
                  ? { clipPath: `inset(0 ${indicator.right}px 0 ${indicator.left}px round 999px)` }
                  : undefined
              }
            />
            {site.nav.map((l) => {
              const id = l.href === "/" ? "home" : l.href.slice(1);
              const isServices = l.href === "/services";
              const isProducts = l.href === "/products";
              const isWorks = l.href === "/works";
              const menuKey = isServices ? "services" : isProducts ? "products" : isWorks ? "works" : null;
              const dropdownItems = isServices ? services : isProducts ? products.slice(0, 6) : isWorks ? works : null;
              const childBase = isServices ? "/services" : isProducts ? "/products" : "/works";
              const menuOpen = menuKey !== null && menu === menuKey;
              return (
                <li
                  key={l.href}
                  onMouseEnter={() => {
                    cancelMenuClose();
                    setMenu(menuKey);
                    if (!dropdownItems) return;
                    for (const item of dropdownItems) {
                      if (!("slug" in item) || !item.slug) continue;
                      router.prefetch(`${childBase}/${item.slug}`);
                    }
                  }}
                  onFocus={() => setMenu(menuKey)}
                  onBlur={(event) => {
                    const next = event.relatedTarget;
                    if (next instanceof Node && event.currentTarget.contains(next)) return;
                    setMenu(null);
                  }}
                  className="relative"
                >
                  <Link
                    ref={(el) => {
                      linkRefs.current[id] = el;
                    }}
                    href={l.href}
                    prefetch
                    onClick={l.href === "/" && pathname === "/" ? go("#top") : go(l.href)}
                    aria-current={active === id ? "page" : undefined}
                    aria-haspopup={dropdownItems ? "true" : undefined}
                    {...(dropdownItems ? { "aria-expanded": menuOpen } : {})}
                    className="relative z-10 flex items-center gap-1 rounded-full px-4 py-2 text-sm text-foreground/75 transition-colors hover:text-foreground aria-[current]:text-foreground"
                  >
                    {isWorks ? (
                      <span className="relative mr-0.5 inline-flex size-2" aria-hidden>
                        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/80" />
                        <span className="relative size-2 rounded-full bg-emerald-500" />
                      </span>
                    ) : null}
                    {l.label}
                    {dropdownItems ? (
                      <ChevronDown className={cn("size-3.5 transition-transform", menuOpen && "rotate-180")} />
                    ) : null}
                  </Link>
                  {dropdownItems ? (
                    <div
                      onMouseEnter={cancelMenuClose}
                      onMouseLeave={scheduleMenuClose}
                      className={cn(
                        isWorks
                          ? "fixed inset-x-4 top-[5.25rem] z-50 mx-auto w-auto max-w-[80rem] pt-2"
                          : "absolute left-1/2 top-full z-50 w-[24rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-2",
                        menuOpen ? "visible" : "pointer-events-none invisible",
                      )}
                    >
                    <div
                      className={cn(
                        "rounded-2xl border border-border/80 bg-background/95 p-1.5 shadow-[0_18px_45px_-20px_rgba(43,26,16,0.35)] backdrop-blur-xl transition-opacity duration-200",
                        menuOpen ? "opacity-100" : "opacity-0",
                      )}
                    >
                      {isWorks ? (
                        <div className="rounded-[1.35rem] p-2 sm:p-3">
                          {works.map((item) => (
                            <Link key={item.slug} href={`/works/${item.slug}`} onClick={() => setMenu(null)} className="group/item flex items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-secondary">
                              {item.screenshots?.cover ? <img src={item.screenshots.cover.src} alt="" className="h-16 w-24 rounded-xl object-cover object-top" /> : null}
                              <span className="min-w-0"><span className="block text-sm font-semibold text-foreground">{item.title}</span><span className="mt-1 block text-xs text-muted-foreground">{item.category}</span></span>
                              <ArrowUpRight className="ml-auto size-4 text-muted-foreground transition-transform group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5" />
                            </Link>
                          ))}
                          <div className="mt-2 border-t border-border pt-3">
                            <div className="mb-3 flex items-center justify-between px-2"><button type="button" aria-expanded={workProductsOpen} onClick={() => setWorkProductsOpen((expanded) => !expanded)} className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground">PRODUCTS<ChevronDown className={cn("size-4 transition-transform", workProductsOpen && "rotate-180")} /></button><Link href="/products" onClick={() => setMenu(null)} className="text-xs font-semibold text-primary hover:underline">Explore all products ↗</Link></div>
                            <div className="mb-3 rounded-xl border border-border bg-secondary/40 px-3 py-2">
                              <button type="button" aria-expanded={workApisOpen} onClick={() => setWorkApisOpen((expanded) => !expanded)} className="flex w-full items-center justify-between text-sm font-semibold tracking-wide text-foreground">
                                API
                                <ChevronDown className={cn("size-4 transition-transform", workApisOpen && "rotate-180")} />
                              </button>
                              {workApisOpen ? <ApiDirectoryDropdown /> : null}
                            </div>
                            {workProductsOpen ? <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-7">
                              {productMenuCategories.map((category) => (
                                <section key={category.slug} className="min-w-0">
                                  <Link href={`/products/${category.slug}`} onClick={() => setMenu(null)} className="mb-2 flex min-h-10 items-center rounded-lg border-l-[3px] border-primary bg-secondary/70 px-3 text-[0.72rem] font-bold tracking-wide text-primary hover:bg-secondary">{category.title}</Link>
                                  <ul className="space-y-0.5">
                                    {category.items.map((product) => <li key={product.slug}><Link href={`/products/${product.slug}`} onClick={() => setMenu(null)} className="block rounded-md px-3 py-1.5 text-[0.72rem] leading-snug text-foreground/80 transition-colors hover:bg-secondary hover:text-primary">{product.title}</Link></li>)}
                                  </ul>
                                </section>
                              ))}
                            </div> : null}
                          </div>
                          <Link href="/works" onClick={() => setMenu(null)} className="mt-1 flex items-center justify-between rounded-xl border-t border-border px-3 py-3 text-xs font-semibold text-primary hover:bg-secondary">
                            Explore all works
                            <ArrowUpRight className="size-3.5" />
                          </Link>
                        </div>
                      ) : (
                      <>
                      <div className={cn("grid gap-1", "grid-cols-2")}>
                        {dropdownItems.map((item, index) => {
                          const Icon = hasServiceIcon(item)
                            ? (serviceIcons[item.icon] ?? Sparkles)
                            : (productIcons[index % productIcons.length] ?? Sparkles);
                          const slug = "slug" in item ? item.slug : undefined;
                          const cover = coverOf(item);
                          return (
                            <Link
                              key={item.title}
                              href={slug ? `${childBase}/${slug}` : l.href}
                              prefetch={false}
                              className="group/item min-w-0 rounded-xl p-1.5 transition-colors hover:bg-secondary focus-visible:bg-secondary"
                            >
                              {cover ? (
                                <span className="flex items-center gap-3">
                                  <img
                                    src={cover.src}
                                    alt=""
                                    width={cover.width}
                                    height={cover.height}
                                    className="h-12 w-[4.4rem] shrink-0 rounded-lg object-cover object-top"
                                  />
                                  <span className="min-w-0">
                                    <span className="block text-[0.78rem] font-semibold leading-tight text-foreground">
                                      {item.title}
                                    </span>
                                    {"category" in item && item.category ? (
                                      <span className="mt-1 block text-[0.62rem] leading-snug text-muted-foreground">
                                        {item.category}
                                      </span>
                                    ) : null}
                                  </span>
                                </span>
                              ) : (
                                <>
                                  <span className="grid size-6 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                                    <Icon className="size-3.5" />
                                  </span>
                                  <span className="mt-1 block text-[0.64rem] font-semibold leading-tight text-foreground">
                                    {item.title}
                                  </span>
                                </>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                      <Link
                        href={l.href}
                        prefetch
                        onClick={go(l.href)}
                        className="mt-1 flex items-center justify-between rounded-xl border-t border-border px-3 py-3 text-xs font-semibold text-primary hover:bg-secondary"
                      >
                        Explore all {l.label.toLowerCase()}
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                      </>
                      )}
                    </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ActionButton
              label={site.primaryCta.label}
              size="sm"
              className="hidden sm:inline-flex"
              icon={<ArrowUpRight className="size-[0.9em] stroke-[2.4]" />}
              onClick={() => setProjectModalOpen(true)}
            />
            <button
              ref={toggleRef}
              type="button"
              suppressHydrationWarning
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid size-11 place-items-center rounded-full bg-secondary text-foreground lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "fixed inset-0 z-[70] flex flex-col bg-background px-6 pb-10 pt-6 transition-[clip-path] duration-700 ease-[var(--ease-out-expo)] lg:hidden",
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]",
        )}
      >
        <div className="flex items-center justify-between">
          <img
            src={site.logo.src}
            alt=""
            width={site.logo.width}
            height={site.logo.height}
            loading="lazy"
            className="h-10 w-auto"
          />
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
            className="grid size-11 place-items-center rounded-full bg-secondary"
          >
            <X className="size-5" />
          </button>
        </div>
        <ul className="mt-10 flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto pb-6">
          {site.nav.map((l, i) => {
            const children =
              l.href === "/services" ? services : l.href === "/products" ? products.slice(0, 6) : l.href === "/works" ? works : null;
            const childBase =
              l.href === "/services" ? "/services" : l.href === "/products" ? "/products" : "/works";
            return (
              <li
                key={l.href}
                className={cn(
                  "transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)]",
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                )}
                style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
              >
                <Link
                  href={l.href}
                  prefetch
                  onClick={l.href === "/" && pathname === "/" ? go("#top") : go(l.href)}
                  aria-current={
                    active === (l.href === "/" ? "home" : l.href.slice(1)) ? "page" : undefined
                  }
                  tabIndex={open ? 0 : -1}
                  className="display flex items-center gap-3 py-1 text-[clamp(2.15rem,9vw,3.4rem)]"
                >
                  {l.href === "/works" ? (
                    <span className="relative inline-flex size-2.5" aria-hidden>
                      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/80" />
                      <span className="relative size-2.5 rounded-full bg-emerald-500" />
                    </span>
                  ) : null}
                  {l.label}
                </Link>
                {children ? (
                  <div className="mt-1 pb-2">
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                      {children.map((item) => (
                        <li key={item.slug ?? item.title}><Link href={item.slug ? `${childBase}/${item.slug}` : l.href} prefetch={false} onClick={go(item.slug ? `${childBase}/${item.slug}` : l.href)} tabIndex={open ? 0 : -1} className="block py-1 text-sm leading-snug text-foreground/70">{item.title}</Link></li>
                      ))}
                    </ul>
                    {l.href === "/works" ? (
                      <div className="mt-4 border-t border-border pt-3">
                        <button type="button" aria-expanded={workProductsOpen} onClick={() => setWorkProductsOpen((expanded) => !expanded)} tabIndex={open ? 0 : -1} className="mb-2 flex items-center gap-2 text-xs font-bold tracking-widest text-primary">
                          PRODUCTS<ChevronDown className={cn("size-3 transition-transform", workProductsOpen && "rotate-180")} />
                        </button>
                        <div className="mb-3 rounded-lg border border-border bg-secondary/40 px-3 py-2">
                          <button type="button" aria-expanded={workApisOpen} onClick={() => setWorkApisOpen((expanded) => !expanded)} tabIndex={open ? 0 : -1} className="flex w-full items-center justify-between text-xs font-bold tracking-widest text-foreground">
                            API<ChevronDown className={cn("size-3 transition-transform", workApisOpen && "rotate-180")} />
                          </button>
                          {workApisOpen ? <ApiDirectoryDropdown /> : null}
                        </div>
                        {workProductsOpen ? (
                          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {productMenuCategories.map((category) => (
                              <section key={category.slug}>
                                <Link href={`/products/${category.slug}`} onClick={go(`/products/${category.slug}`)} tabIndex={open ? 0 : -1} className="block py-1 text-xs font-bold text-foreground">{category.title}</Link>
                                {category.items.map((product) => <Link key={product.slug} href={`/products/${product.slug}`} onClick={go(`/products/${product.slug}`)} tabIndex={open ? 0 : -1} className="block py-1 text-xs text-foreground/65">{product.title}</Link>)}
                              </section>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
        <div className="flex items-end justify-between text-sm text-muted-foreground">
          <a
            href={`mailto:${contact.email}`}
            tabIndex={open ? 0 : -1}
            className="transition-colors hover:text-primary"
          >
            {contact.email}
          </a>
          <ActionButton
            label={site.primaryCta.label}
            size="sm"
            tabIndex={open ? 0 : -1}
            icon={<ArrowUpRight className="size-[0.9em] stroke-[2.4]" />}
            onClick={() => {
              setOpen(false);
              setProjectModalOpen(true);
            }}
          />
        </div>
      </div>
      <ProjectInquiryModal open={projectModalOpen} onClose={() => setProjectModalOpen(false)} />
    </>
  );
}
