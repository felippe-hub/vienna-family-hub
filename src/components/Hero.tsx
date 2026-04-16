/**
 * Hero — minimal, editorial.
 *
 * Concept: a quiet headline paired with a single, focused visual element —
 * a compass / radar disc. The compass is intentionally similar in language
 * to the rest of the site (concentric rings, ticks, soft brand dots) but
 * adds gentle, slow movement: the needle sweeps, a soft sector glows, and
 * a single radar pulse expands outward at a calm cadence.
 *
 * Brand spectrum (cozy): soft coral → amber → honey. Key words use
 * `.text-gradient-warm` to stay consistent with the rest of the site.
 */

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Single ambient warm aura — kept subtle */}
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-coral/15 blur-[160px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 py-28 lg:grid-cols-[1.1fr_1fr] lg:gap-24 lg:px-10 lg:py-36">
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

        {/* RIGHT — compass / radar */}
        <Compass />
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
 * Compass — a calm, abstract direction-finder.
 *
 * Layered elements (back to front):
 *   1. Soft warm disc + radar pulse rings expanding outward
 *   2. Concentric guide rings + cardinal tick marks (N/E/S/W)
 *   3. Faint cross-hair guides
 *   4. Highlighted sector wedge (soft amber glow) — fixed, gives warmth
 *   5. Slowly sweeping needle (coral up / navy-tinted down)
 *   6. Three small brand dots placed on outer rings as "points of interest"
 */
function Compass() {
  return (
    <div className="relative aspect-square w-full max-w-[460px] justify-self-center lg:justify-self-end">
      {/* Soft warm disc behind everything */}
      <div
        className="absolute inset-[6%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(244,117,88,0.16) 0%, rgba(232,169,87,0.06) 55%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Radar pulse rings — staggered for a calm, breathing rhythm */}
      <div className="absolute inset-0" aria-hidden="true">
        {[0, 1.5, 3].map((delay) => (
          <span
            key={delay}
            className="animate-radar-pulse absolute inset-[12%] rounded-full border border-coral/35"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      {/* Compass face */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="needle-up" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f47558" />
            <stop offset="100%" stopColor="#f0964a" />
          </linearGradient>
          <linearGradient id="needle-down" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a4a5c" />
            <stop offset="100%" stopColor="#2f3d4c" />
          </linearGradient>
          <radialGradient id="sector-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8a957" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#e8a957" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Highlighted soft sector wedge (bottom-right) — adds warmth */}
        <path
          d="M 300 300 L 510 300 A 210 210 0 0 1 410 481 Z"
          fill="url(#sector-glow)"
          opacity="0.9"
        />

        {/* Concentric guide rings */}
        {[210, 170, 130, 90, 50].map((r) => (
          <circle
            key={r}
            cx="300"
            cy="300"
            r={r}
            fill="none"
            stroke="#FEFEFE"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        ))}

        {/* Faint cross-hair */}
        <line x1="80" y1="300" x2="520" y2="300" stroke="#FEFEFE" strokeOpacity="0.1" strokeDasharray="2 6" />
        <line x1="300" y1="80" x2="300" y2="520" stroke="#FEFEFE" strokeOpacity="0.1" strokeDasharray="2 6" />

        {/* Cardinal ticks */}
        {[0, 90, 180, 270].map((deg) => {
          const a = (deg * Math.PI) / 180;
          const x1 = 300 + Math.cos(a) * 218;
          const y1 = 300 + Math.sin(a) * 218;
          const x2 = 300 + Math.cos(a) * 232;
          const y2 = 300 + Math.sin(a) * 232;
          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FEFEFE"
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Minor ticks */}
        {Array.from({ length: 24 }).map((_, i) => {
          if (i % 6 === 0) return null;
          const a = (i / 24) * Math.PI * 2;
          const x1 = 300 + Math.cos(a) * 220;
          const y1 = 300 + Math.sin(a) * 220;
          const x2 = 300 + Math.cos(a) * 228;
          const y2 = 300 + Math.sin(a) * 228;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FEFEFE"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
          );
        })}

        {/* Sweeping needle */}
        <g className="animate-compass-sweep" style={{ transformOrigin: "300px 300px" }}>
          {/* Up half — warm coral */}
          <polygon points="300,120 290,300 310,300" fill="url(#needle-up)" />
          {/* Down half — navy */}
          <polygon points="300,480 290,300 310,300" fill="url(#needle-down)" />
        </g>

        {/* Center hub */}
        <circle cx="300" cy="300" r="11" fill="#FEFEFE" />
        <circle cx="300" cy="300" r="5" fill="#2f3d4c" />

        {/* Brand "points of interest" dots on outer rings */}
        <circle cx="138" cy="222" r="4.5" fill="#f0964a" />
        <circle cx="450" cy="190" r="4" fill="#f47558" />
        <circle cx="490" cy="430" r="4.5" fill="#e8a957" />
      </svg>
    </div>
  );
}
