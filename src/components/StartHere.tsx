import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import type { QuickFilter } from "@/data/discover";

/**
 * "Start here" — quick paths into Discover, in our brand vocabulary.
 *
 * Each card has:
 *  - a small geometric SVG glyph (no Lucide), echoing the orbital/hairline
 *    language used in Hero, Solution and Audience
 *  - a coral hairline that lights up on hover
 *  - the warm gradient bleed used as a soft halo behind the glyph
 */

interface StartCard {
  filter: QuickFilter;
  title: string;
  subtitle: string;
  glyph: "weekend" | "birthday" | "afterschool" | "indoor";
  accent: "coral" | "orange" | "yellow";
}

const cards: StartCard[] = [
  {
    filter: "weekend",
    title: "This weekend",
    subtitle: "Parks, museums & more",
    glyph: "weekend",
    accent: "coral",
  },
  {
    filter: "birthday",
    title: "Birthday ideas",
    subtitle: "Venues, parties & fun",
    glyph: "birthday",
    accent: "orange",
  },
  {
    filter: "afterschool",
    title: "After school",
    subtitle: "Sports, arts & play",
    glyph: "afterschool",
    accent: "yellow",
  },
  {
    filter: "indoor",
    title: "Rainy-day inspiration",
    subtitle: "Indoor spots & cozy plans",
    glyph: "indoor",
    accent: "coral",
  },
];

export function StartHere() {
  return (
    <section id="start-here" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-coral">
            Start here
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Quick paths to <span className="text-gradient-warm">explore</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base text-navy/70">
            Four calm starting points to find what fits your family in Vienna —
            without the scrolling.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.filter} delay={i * 90}>
              <StartCardItem card={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StartCardItem({ card }: { card: StartCard }) {
  const accentVar =
    card.accent === "coral"
      ? "var(--coral)"
      : card.accent === "orange"
        ? "var(--orange)"
        : "var(--yellow)";

  return (
    <Link
      to="/discover"
      search={{ filter: card.filter }}
      className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-coral/40 hover:shadow-soft"
    >
      {/* warm halo behind glyph */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-2xl transition-opacity group-hover:opacity-70"
        style={{ background: "var(--gradient-warm)" }}
      />

      {/* hairline brand accent on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100"
        style={{ background: "var(--gradient-warm)" }}
      />

      <div className="relative">
        <CardGlyph kind={card.glyph} stroke={accentVar} />

        <h3 className="mt-5 text-lg font-bold text-navy">{card.title}</h3>
        <p className="mt-1 text-sm text-navy/65">{card.subtitle}</p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-navy/50 transition-colors group-hover:text-coral">
          Explore
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

/**
 * Tiny, calm geometric glyphs — drawn with the same hairline + ring vocabulary
 * as Solution.tsx and Audience.tsx. Strokes follow the brand palette.
 */
function CardGlyph({
  kind,
  stroke,
}: {
  kind: StartCard["glyph"];
  stroke: string;
}) {
  return (
    <div className="relative h-12 w-12">
      <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden="true">
        {/* shared hairline ring */}
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke={stroke}
          strokeOpacity="0.25"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        {kind === "weekend" && (
          <>
            {/* sun + horizon */}
            <circle cx="24" cy="22" r="6" fill="none" stroke={stroke} strokeWidth="1.6" />
            <line x1="10" y1="34" x2="38" y2="34" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
            <line x1="24" y1="10" x2="24" y2="13" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
            <line x1="13" y1="22" x2="16" y2="22" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
            <line x1="32" y1="22" x2="35" y2="22" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
          </>
        )}
        {kind === "birthday" && (
          <>
            {/* cake silhouette in hairline */}
            <rect x="14" y="22" width="20" height="12" rx="1.5" fill="none" stroke={stroke} strokeWidth="1.6" />
            <line x1="14" y1="28" x2="34" y2="28" stroke={stroke} strokeOpacity="0.5" strokeWidth="1" />
            <line x1="24" y1="14" x2="24" y2="22" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="24" cy="13" r="1.6" fill={stroke} />
          </>
        )}
        {kind === "afterschool" && (
          <>
            {/* compass / play arrow inside ring */}
            <circle cx="24" cy="24" r="9" fill="none" stroke={stroke} strokeWidth="1.6" />
            <path d="M24 17 L27 25 L21 25 Z" fill={stroke} fillOpacity="0.6" />
            <circle cx="24" cy="24" r="1.5" fill={stroke} />
          </>
        )}
        {kind === "indoor" && (
          <>
            {/* cloud + drops */}
            <path
              d="M14 26 a6 6 0 0 1 6 -6 a7 7 0 0 1 13 1 a5 5 0 0 1 -1 10 H17 a5 5 0 0 1 -3 -5 z"
              fill="none"
              stroke={stroke}
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <line x1="20" y1="34" x2="19" y2="38" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
            <line x1="26" y1="34" x2="25" y2="38" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
            <line x1="30" y1="34" x2="29" y2="38" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  );
}
