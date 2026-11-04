"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import directory from "@/data/apiDirectory.json";
import { useSmoothScroll } from "@/components/motion/SmoothScrollProvider";

const allApis = directory.apis.map((api, index) => ({ ...api, id: index }));
const PAGE_SIZE = 40;

export function ApiCatalog() {
  const [query, setQuery] = useState("");
  const [collection, setCollection] = useState("All APIs");
  const [page, setPage] = useState(1);
  const resultsRef = useRef<HTMLDivElement>(null);
  const previousPage = useRef(1);
  const { scrollTo } = useSmoothScroll();
  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return allApis.filter((api) => {
      const matchesCollection = collection === "All APIs" || api.collection === collection;
      const matchesQuery = !normalizedQuery || `${api.title} ${api.path} ${api.collection}`.toLowerCase().includes(normalizedQuery);
      return matchesCollection && matchesQuery;
    });
  }, [collection, query]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageApis = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const grouped = directory.collections
    .filter((item) => collection === "All APIs" || item.name === collection)
    .map((item) => ({
      ...item,
      matchingCount: filtered.filter((api) => api.collection === item.name).length,
      apis: pageApis.filter((api) => api.collection === item.name),
    }))
    .filter((item) => item.apis.length > 0);

  useEffect(() => {
    if (previousPage.current === page) return;
    previousPage.current = page;
    if (resultsRef.current) scrollTo(resultsRef.current);
  }, [page, scrollTo]);

  const pagination = pageCount > 1 ? (
    <nav aria-label="API directory pages" className="flex items-center justify-center gap-3 pt-8">
      <button type="button" disabled={page === 1} onClick={() => setPage((current) => Math.max(1, current - 1))} className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 disabled:cursor-not-allowed disabled:opacity-40">Previous</button>
      <span aria-live="polite" className="min-w-24 text-center text-sm text-muted-foreground">Page {page} of {pageCount}</span>
      <button type="button" disabled={page === pageCount} onClick={() => setPage((current) => Math.min(pageCount, current + 1))} className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 disabled:cursor-not-allowed disabled:opacity-40">Next</button>
    </nav>
  ) : null;

  return (
    <main className="bg-secondary">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-28 sm:px-6 md:px-10 md:pt-36">
        <p className="eyebrow text-primary">Products / Plug & Play APIs</p>
        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="display text-[clamp(3rem,8vw,6.5rem)] leading-[0.98]">API Directory</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">Search and browse the API collection. Open an API to view its ZYNOVATE page.</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground"><span className="font-mono text-3xl font-semibold text-primary">{directory.apis.length}</span><span>APIs<br />across {directory.collections.length} collections</span></div>
        </div>
      </section>

      <section className="border-y border-border bg-background py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
          <div className="grid gap-4 lg:grid-cols-[minmax(16rem,0.8fr)_1.6fr] lg:items-end">
            <label className="block">
              <span className="eyebrow text-primary">Search APIs</span>
              <span className="relative mt-2 block">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search by API name or collection" className="h-12 w-full rounded-xl border border-border bg-secondary pl-11 pr-4 text-sm outline-none transition focus:border-primary" />
              </span>
            </label>
            <div>
              <p className="eyebrow mb-2 text-primary">Quick filters</p>
              <div className="flex gap-2 overflow-x-auto pb-1">
                <button type="button" aria-pressed={collection === "All APIs"} onClick={() => { setCollection("All APIs"); setPage(1); }} className={`shrink-0 rounded-full border px-3 py-2 text-xs font-semibold transition-colors ${collection === "All APIs" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-secondary text-foreground/75 hover:border-primary/50"}`}>All APIs <span className="ml-1 opacity-70">{directory.apis.length}</span></button>
                {directory.collections.map((item) => (
                  <button key={item.name} type="button" aria-pressed={collection === item.name} onClick={() => { setCollection(item.name); setPage(1); }} className={`shrink-0 rounded-full border px-3 py-2 text-xs font-semibold transition-colors ${collection === item.name ? "border-primary bg-primary text-primary-foreground" : "border-border bg-secondary text-foreground/75 hover:border-primary/50"}`}>
                    {item.name} <span className="ml-1 opacity-70">{item.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={resultsRef} className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:px-10 md:py-14">
        <p className="mb-4 text-sm text-muted-foreground">Showing <span className="font-semibold text-foreground">{filtered.length ? (page - 1) * PAGE_SIZE + 1 : 0}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}</span> APIs{collection === "All APIs" ? " across all collections" : ` in ${collection}`}.</p>
        {pagination}
        <div className="space-y-10">
          {grouped.map((group) => (
            <section key={group.name}>
              <div className="mb-4 flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between">
                <div><h2 className="display text-2xl md:text-3xl">{group.name}</h2><p className="mt-2 text-sm text-muted-foreground">{group.description}</p></div>
                <span className="shrink-0 text-xs font-semibold text-primary">{group.matchingCount} APIs</span>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {group.apis.map((api) => (
                  <li key={api.id}>
                    <Link href={`/products/apis/catalog/${api.id}`} className="group flex min-h-16 items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-colors hover:border-primary/50 hover:bg-card">
                      <span className="text-sm font-medium leading-snug text-foreground group-hover:text-primary">{api.title}</span>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          {grouped.length === 0 ? <p className="rounded-2xl border border-border bg-background px-6 py-12 text-center text-sm text-muted-foreground">No APIs match your search. Try a different name or collection.</p> : null}
        </div>
        {pagination}
      </section>
    </main>
  );
}
