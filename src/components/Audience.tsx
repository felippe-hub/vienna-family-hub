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
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-navy"
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

function AudienceIllustration() {
  return (
    <svg
      viewBox="0 0 480 480"
      className="h-auto w-full max-w-[480px]"
      aria-hidden="true"
    >
      {/* warm soft backdrop */}
      <circle cx="240" cy="240" r="200" fill="#FEB449" opacity="0.25" />
      {/* big yellow blob */}
      <path
        d="M340 130c40 30 60 80 50 130-10 60-70 100-130 100-70 0-130-50-130-120 0-60 50-110 110-130 40-12 70-10 100 20z"
        fill="#F5C71A"
        opacity="0.85"
      />
      {/* coral house-like rounded shape */}
      <rect x="170" y="200" width="160" height="160" rx="50" fill="#FE5C36" />
      {/* window dots */}
      <circle cx="215" cy="260" r="14" fill="#FEFEFE" />
      <circle cx="285" cy="260" r="14" fill="#FEFEFE" />
      {/* smile */}
      <path
        d="M210 310 Q250 340 290 310"
        stroke="#FEFEFE"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* orange floating shape */}
      <circle cx="120" cy="160" r="34" fill="#F39420" />
      {/* small navy dot */}
      <circle cx="380" cy="370" r="14" fill="#2F3D4C" opacity="0.8" />
    </svg>
  );
}
