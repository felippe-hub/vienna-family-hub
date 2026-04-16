const traits = [
  "Busy schedules",
  "High mental load",
  "Too many apps",
  "Not enough hours",
];

export function Audience() {
  return (
    <section id="for-families" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-coral">
            Who it's for
          </p>
          <h2 className="text-3xl text-navy sm:text-4xl lg:text-5xl">
            Made for families in Vienna
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-navy/70 sm:text-lg">
            Urban parents with children 0–12 years old who are done wasting time
            and want their energy back.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-3">
            {traits.map((trait) => (
              <li
                key={trait}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-navy transition-all hover:-translate-y-0.5 hover:border-coral/40 hover:shadow-card"
              >
                <span className="h-2 w-2 rounded-full bg-coral" />
                {trait}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <AudienceIllustration />
        </div>
      </div>
    </section>
  );
}

/**
 * Audience visual — a precision composition: rotating dotted ring,
 * concentric arcs, modular geometric "family system" tiles.
 */
function AudienceIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-[480px]">
      {/* Outer rotating dotted ring */}
      <svg
        viewBox="0 0 480 480"
        className="absolute inset-0 h-full w-full animate-spin-slow"
        aria-hidden="true"
      >
        <circle
          cx="240"
          cy="240"
          r="220"
          fill="none"
          stroke="#2F3D4C"
          strokeOpacity="0.1"
          strokeDasharray="2 10"
          strokeWidth="1"
        />
      </svg>

      {/* Counter-rotating yellow ring */}
      <svg
        viewBox="0 0 480 480"
        className="absolute inset-0 h-full w-full animate-spin-reverse"
        aria-hidden="true"
      >
        <circle
          cx="240"
          cy="240"
          r="180"
          fill="none"
          stroke="#F5C71A"
          strokeOpacity="0.6"
          strokeDasharray="1 7"
          strokeWidth="1.5"
        />
      </svg>

      {/* Static composition */}
      <svg viewBox="0 0 480 480" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="aud-warm" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FEB449" />
            <stop offset="100%" stopColor="#F5C71A" />
          </linearGradient>
          <linearGradient id="aud-coral" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FE5C36" />
            <stop offset="100%" stopColor="#F39420" />
          </linearGradient>
        </defs>

        {/* warm core blob */}
        <circle cx="240" cy="240" r="140" fill="url(#aud-warm)" opacity="0.25" />

        {/* central rounded square */}
        <rect x="160" y="160" width="160" height="160" rx="44" fill="url(#aud-coral)" />

        {/* window grid inside */}
        <g fill="#FEFEFE" opacity="0.95">
          <circle cx="200" cy="220" r="10" />
          <circle cx="240" cy="220" r="10" />
          <circle cx="280" cy="220" r="10" />
        </g>
        {/* smile */}
        <path
          d="M198 270 Q240 300 282 270"
          stroke="#FEFEFE"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />

        {/* arc above */}
        <path
          d="M 100 200 A 140 140 0 0 1 380 200"
          fill="none"
          stroke="#FE5C36"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="4 8"
        />
      </svg>

      {/* Orbiting modular tiles */}
      <svg viewBox="0 0 480 480" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <g className="animate-float-medium" style={{ transformOrigin: "240px 240px" }}>
          <rect x="60" y="100" width="56" height="56" rx="16" fill="#F39420" />
        </g>
        <g className="animate-float-slow" style={{ transformOrigin: "240px 240px" }}>
          <rect x="370" y="80" width="42" height="42" rx="12" fill="#F5C71A" />
        </g>
        <g className="animate-float-fast" style={{ transformOrigin: "240px 240px" }}>
          <rect x="380" y="340" width="50" height="50" rx="14" fill="#FEB449" />
        </g>
        <g className="animate-float-medium" style={{ transformOrigin: "240px 240px" }}>
          <rect x="70" y="360" width="44" height="44" rx="12" fill="#2F3D4C" opacity="0.85" />
        </g>

        {/* small accent dots */}
        <circle cx="40" cy="240" r="4" fill="#FE5C36" />
        <circle cx="440" cy="240" r="4" fill="#FE5C36" />
        <circle cx="240" cy="40" r="4" fill="#2F3D4C" opacity="0.7" />
        <circle cx="240" cy="440" r="4" fill="#2F3D4C" opacity="0.7" />
      </svg>
    </div>
  );
}
