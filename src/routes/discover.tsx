import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search, Heart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import {
  discoverItems,
  allCategories,
  quickFilterLabels,
  type DiscoverItem,
  type DiscoverKind,
  type QuickFilter,
} from "@/data/discover";

const searchSchema = z.object({
  filter: fallback(
    z.enum(["weekend", "birthday", "afterschool", "indoor", "today"]).optional(),
    undefined,
  ).optional(),
  kind: fallback(z.enum(["all", "activity", "event"]), "all").default("all"),
  q: fallback(z.string(), "").default(""),
  cat: fallback(z.string(), "").default(""),
  sort: fallback(z.enum(["newest", "az"]), "newest").default("newest"),
});

type DiscoverSearch = z.infer<typeof searchSchema>;

export const Route = createFileRoute("/discover")({
  validateSearch: zodValidator(searchSchema),
  component: DiscoverPage,
  head: () => ({
    meta: [
      { title: "Discover — Kindex" },
      {
        name: "description",
        content:
          "Find activities and events in Vienna that fit your family — calmly curated, easy to filter.",
      },
      { property: "og:title", content: "Discover — Kindex" },
      {
        property: "og:description",
        content:
          "Activities, events, parks, theaters and more — discover what fits your family in Vienna.",
      },
    ],
  }),
});

function DiscoverPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <DiscoverHero />
      <DiscoverContent />
      <Footer />
    </main>
  );
}

function DiscoverHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-12 pb-8">
      {/* warm halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-coral">
          Discover
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Find what fits your <span className="text-gradient-warm">family</span>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-navy/70">
          Activities and events across Vienna — curated, calm, easy to scan.
        </p>
      </div>
    </section>
  );
}

function DiscoverContent() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(search.q);

  const filtered = useMemo(() => {
    let items = [...discoverItems];

    if (search.kind !== "all") {
      items = items.filter((i) => i.kind === (search.kind as DiscoverKind));
    }
    if (search.filter) {
      items = items.filter((i) => i.tags.includes(search.filter as QuickFilter));
    }
    if (search.cat) {
      items = items.filter((i) => i.category === search.cat);
    }
    if (search.q.trim()) {
      const q = search.q.toLowerCase();
      items = items.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q),
      );
    }
    if (search.sort === "az") {
      items.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      items.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
    }
    return items;
  }, [search]);

  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Search + sort row */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <form
            className="relative flex-1"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ search: (prev: DiscoverSearch) => ({ ...prev, q: query }) });
            }}
          >
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search activities and events…"
              className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-navy placeholder:text-navy/40 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20"
            />
          </form>
          <select
            value={search.sort}
            onChange={(e) =>
              navigate({
                search: (prev: DiscoverSearch) => ({
                  ...prev,
                  sort: e.target.value as "newest" | "az",
                }),
              })
            }
            className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-navy focus:border-coral focus:outline-none"
          >
            <option value="newest">Newest</option>
            <option value="az">A → Z</option>
          </select>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <FiltersPanel />
          </aside>

          <div>
            <p className="mb-5 text-sm text-navy/60">
              {filtered.length} result{filtered.length === 1 ? "" : "s"} found
            </p>

            {filtered.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((item, i) => (
                  <Reveal key={item.id} delay={Math.min(i * 50, 300)}>
                    <DiscoverCard item={item} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FiltersPanel() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <h3 className="text-sm font-bold text-navy">Filters</h3>

      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-navy/50">
        Browse
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {(["all", "activity", "event"] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() =>
              navigate({ search: (prev: DiscoverSearch) => ({ ...prev, kind: k }) })
            }
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
              search.kind === k
                ? "border-coral bg-coral text-white"
                : "border-border bg-background text-navy/70 hover:border-coral/50 hover:text-navy"
            }`}
          >
            {k === "all" ? "All" : k === "activity" ? "Activities" : "Events"}
          </button>
        ))}
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wider text-navy/50">
        Quick filters
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {(Object.keys(quickFilterLabels) as QuickFilter[]).map((f) => {
          const active = search.filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() =>
                navigate({
                  search: (prev: DiscoverSearch) => ({
                    ...prev,
                    filter: active ? undefined : f,
                  }),
                })
              }
              className={`rounded-full border px-3 py-1.5 text-xs transition-all ${
                active
                  ? "border-coral/60 bg-coral/10 text-coral"
                  : "border-border bg-background text-navy/70 hover:border-coral/40"
              }`}
            >
              {quickFilterLabels[f]}
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wider text-navy/50">
        Category
      </p>
      <select
        value={search.cat}
        onChange={(e) =>
          navigate({ search: (prev: DiscoverSearch) => ({ ...prev, cat: e.target.value }) })
        }
        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-navy focus:border-coral focus:outline-none"
      >
        <option value="">All categories</option>
        {allCategories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {(search.filter || search.cat || search.q || search.kind !== "all") && (
        <button
          type="button"
          onClick={() =>
            navigate({
              search: () => ({
                kind: "all" as const,
                q: "",
                cat: "",
                sort: "newest" as const,
                filter: undefined,
              }),
            })
          }
          className="mt-5 text-xs font-medium text-coral hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}

function DiscoverCard({ item }: { item: DiscoverItem }) {
  const accentClass =
    item.accent === "coral"
      ? "from-coral/80 via-orange/70 to-light-orange/70"
      : item.accent === "orange"
        ? "from-orange/80 via-light-orange/70 to-yellow/70"
        : "from-light-orange/70 via-yellow/70 to-coral/60";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-0.5 hover:border-coral/40 hover:shadow-soft">
      <div
        className={`relative h-36 bg-gradient-to-br ${accentClass} overflow-hidden`}
      >
        {/* hairline grid scaffold for brand consistency */}
        <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
          <defs>
            <pattern id={`g-${item.id}`} width="22" height="22" patternUnits="userSpaceOnUse">
              <path d="M 22 0 L 0 0 0 22" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#g-${item.id})`} />
        </svg>

        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-navy/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white backdrop-blur-sm">
          {item.category}
        </span>

        <button
          type="button"
          aria-label="Save"
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-navy/70 transition-colors hover:text-coral"
        >
          <Heart size={15} strokeWidth={1.75} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-medium uppercase tracking-wider text-navy/50">
          {item.kind === "event" ? "Event" : "Ongoing activity"}
        </p>
        <h3 className="mt-1 text-lg font-bold text-navy">{item.title}</h3>
        <p className="mt-2 text-sm text-navy/70 line-clamp-3">
          {item.description}
        </p>

        <dl className="mt-4 space-y-1 text-xs text-navy/60">
          <div className="flex items-start gap-2">
            <span className="text-navy/40">When</span>
            <span className="text-navy/80">{item.schedule}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-navy/40">Age</span>
            <span className="text-navy/80">{item.ageRange}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-navy/40">Where</span>
            <span className="text-navy/80">
              {item.district}
              {item.organizer ? ` · ${item.organizer}` : ""}
            </span>
          </div>
        </dl>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          {item.price === "Free" ? (
            <span className="rounded-full bg-yellow/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-navy">
              Free
            </span>
          ) : (
            <span className="text-xs text-navy/50">
              {item.price ?? "Free entry"}
            </span>
          )}
          <Link
            to="/booking"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-coral transition-colors hover:text-orange"
          >
            View details
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
      <p className="text-base font-medium text-navy">Nothing matches yet.</p>
      <p className="mt-1 text-sm text-navy/60">
        Try clearing a filter or changing the search query.
      </p>
    </div>
  );
}
