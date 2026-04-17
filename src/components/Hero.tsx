import { useEffect, useState } from "react";

/**
 * Hero — minimal, editorial.
 *
 * Concept: a quiet headline paired with a single, focused visual element —
 * a simulated Google search. A parent types "activities for kids in vienna"
 * into a search bar; suggestions and noisy results appear, then the whole
 * panel fades to a single calm Kindex answer. It mirrors the headline:
 * "Less Searching. More Living."
 */

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Ambient warm aura — kept subtle */}
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-coral/15 blur-[160px]"
        aria-hidden="true"
      />
      {/* Faint grid scaffold — same vocabulary as HeroIllustration */}
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.55]"
        aria-hidden="true"
      >
        <g stroke="#FEFEFE" strokeOpacity="0.04" strokeWidth="1">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 70} x2="1200" y2={i * 70} />
          ))}
          {Array.from({ length: 18 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 70} y1="0" x2={i * 70} y2="800" />
          ))}
        </g>
      </svg>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10 lg:py-36">
        {/* LEFT — headline + one CTA */}
        <div>
          <div className="mb-7 flex items-center gap-3">
            <span className="block h-px w-10 bg-gradient-warm" aria-hidden="true" />
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
              For Vienna families
            </p>
          </div>

          <h1 className="text-[2.6rem] leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            <span className="block">Less <span className="text-gradient-warm">Searching</span>.</span>
            <span className="block">More <span className="text-gradient-warm">Living</span>.</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
            Kindex helps you find your way through the noise — calmly, clearly, together.
          </p>

          <div className="mt-10">
            <a
              href="#waitlist"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-coral px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-coral/90 hover:shadow-soft"
            >
              Join the Waitlist
              <span
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT — simulated search */}
        <SearchSimulation />
      </div>

      {/* Bottom hairline divider with a coral tick */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden="true" />
        <div
          className="absolute bottom-0 left-1/2 h-[5px] w-16 -translate-x-1/2 rounded-t-full bg-gradient-warm"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

/**
 * SearchSimulation — a minimal mock of a Google-style search.
 *
 * Loop:
 *  1. Typing "activities for kids in vienna" character by character.
 *  2. Autocomplete suggestions fade in one by one.
 *  3. Noisy result list appears (faint, overwhelming feeling).
 *  4. Everything dims except a single, calm Kindex answer card.
 *  5. After a pause, restart.
 */
const QUERY = "activities for kids in vienna";
const SUGGESTIONS = [
  "activities for kids in vienna this weekend",
  "activities for kids in vienna indoor",
  "activities for kids in vienna under 5",
  "activities for kids in vienna free",
];
const RESULTS = [
  "12 Best Things to Do With Kids in Vienna — TripAdvisor",
  "Vienna with kids: 25 unmissable activities | Time Out",
  "Top 50 family activities in Vienna (2024 update)",
  "Reddit: where do you take your toddler in Vienna?",
];

type Phase = "typing" | "suggesting" | "results" | "answer";

function SearchSimulation() {
  const [typed, setTyped] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  // Typing phase
  useEffect(() => {
    if (phase !== "typing") return;
    if (typed >= QUERY.length) {
      const t = window.setTimeout(() => setPhase("suggesting"), 600);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setTyped((n) => n + 1), 70);
    return () => window.clearTimeout(t);
  }, [typed, phase]);

  // Phase progression
  useEffect(() => {
    if (phase === "suggesting") {
      const t = window.setTimeout(() => setPhase("results"), 1800);
      return () => window.clearTimeout(t);
    }
    if (phase === "results") {
      const t = window.setTimeout(() => setPhase("answer"), 2400);
      return () => window.clearTimeout(t);
    }
    if (phase === "answer") {
      const t = window.setTimeout(() => {
        setTyped(0);
        setPhase("typing");
      }, 4200);
      return () => window.clearTimeout(t);
    }
  }, [phase]);

  const showSuggestions = phase === "suggesting";
  const showResults = phase === "results" || phase === "answer";
  const showAnswer = phase === "answer";

  return (
    <div className="relative w-full max-w-[520px] justify-self-center lg:justify-self-end">
      {/* Soft warm halo behind the panel */}
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2rem]"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(244,117,88,0.18) 0%, rgba(232,169,87,0.06) 55%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-soft backdrop-blur-sm sm:p-6">
        {/* Browser chrome */}
        <div className="mb-4 flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 h-1 flex-1 rounded-full bg-white/5" />
        </div>

        {/* Search bar */}
        <div className="relative flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3.5">
          <SearchIcon />
          <span className="font-sans text-sm text-white/85 sm:text-[15px]">
            {QUERY.slice(0, typed)}
            {phase === "typing" && <span className="caret-blink text-white/80" />}
          </span>
        </div>

        {/* Autocomplete suggestions */}
        <div
          className={`mt-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-500 ${
            showSuggestions ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-transparent"
          }`}
          aria-hidden={!showSuggestions}
        >
          <ul className="divide-y divide-white/5">
            {SUGGESTIONS.map((s, i) => (
              <li
                key={s}
                className="flex items-center gap-3 px-5 py-2.5 text-[13px] text-white/65"
                style={{
                  opacity: showSuggestions ? 1 : 0,
                  transform: showSuggestions ? "translateY(0)" : "translateY(-4px)",
                  transition: `all 0.4s ease ${i * 110}ms`,
                }}
              >
                <SearchIcon small />
                <span className="truncate">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Noisy results — fade and dim once the answer appears */}
        <div
          className={`mt-4 space-y-3 transition-all duration-700 ${
            showResults ? "opacity-100" : "opacity-0"
          } ${showAnswer ? "blur-[1.5px] opacity-30" : ""}`}
          aria-hidden="true"
        >
          {RESULTS.map((r, i) => (
            <div
              key={r}
              className="space-y-1.5"
              style={{
                opacity: showResults ? 1 : 0,
                transform: showResults ? "translateY(0)" : "translateY(6px)",
                transition: `all 0.5s ease ${i * 120}ms`,
              }}
            >
              <div className="text-[11px] text-white/40">
                {["tripadvisor.com", "timeout.com", "viennatips.at", "reddit.com"][i]}
              </div>
              <div className="text-[13px] font-medium text-white/80">{r}</div>
              <div className="flex gap-1">
                <span className="h-1 w-2/3 rounded-full bg-white/10" />
              </div>
              <div className="flex gap-1">
                <span className="h-1 w-1/2 rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>

        {/* The calm Kindex answer */}
        <div
          className={`pointer-events-none absolute inset-x-5 bottom-5 transition-all duration-700 sm:inset-x-6 ${
            showAnswer ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          aria-hidden={!showAnswer}
        >
          <div
            className="rounded-xl border border-white/15 bg-navy/95 p-4 shadow-soft"
            style={{
              boxShadow:
                "0 10px 40px rgba(244,117,88,0.18), 0 0 0 1px rgba(244,117,88,0.25)",
            }}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
                Kindex
              </span>
            </div>
            <p className="text-[13px] leading-relaxed text-white/85 sm:text-sm">
              <span className="text-gradient-warm font-medium">3 picks</span>{" "}
              your family will love this Saturday — picked for a 4-year-old in the 7th district.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchIcon({ small = false }: { small?: boolean }) {
  const size = small ? 13 : 16;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white/45"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </svg>
  );
}
