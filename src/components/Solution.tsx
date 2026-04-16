import { Sparkles, Compass, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Sparkles,
    title: "Curated options",
    text: "We filter the noise so you only see what fits your family — not the entire internet.",
    accent: "bg-coral text-white",
  },
  {
    icon: Compass,
    title: "Clear, calm guidance",
    text: "No overwhelm, just the right information at the right time. Decisions made simple.",
    accent: "bg-orange text-white",
  },
  {
    icon: HeartHandshake,
    title: "Built for busy parents",
    text: "Especially moms carrying the invisible load. Kindex returns time, energy, and headspace.",
    accent: "bg-yellow text-navy",
  },
];

export function Solution() {
  return (
    <section id="how-it-works" className="bg-soft-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-coral">
            How Kindex helps
          </p>
          <h2 className="text-3xl text-navy sm:text-4xl lg:text-5xl">
            One place for your family's{" "}
            <span className="text-gradient-warm">life in Vienna</span>.
          </h2>
        </div>

        <div className="mt-20 space-y-24">
          {features.map(({ icon: Icon, title, text, accent }, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={title}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accent}`}
                  >
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-2xl text-navy sm:text-3xl">{title}</h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-navy/70">
                    {text}
                  </p>
                </div>

                <div className="flex justify-center">
                  <FeatureShape index={i} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureShape({ index }: { index: number }) {
  if (index === 0) {
    // Curated — concentric precision rings + filter dots
    return (
      <div className="relative aspect-square w-full max-w-[420px]">
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="cur-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FE5C36" />
              <stop offset="100%" stopColor="#F39420" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="170" fill="#FE5C36" opacity="0.06" />

          <g className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }}>
            <circle cx="200" cy="200" r="150" fill="none" stroke="#FE5C36" strokeOpacity="0.3" strokeDasharray="2 8" />
          </g>
          <g className="animate-spin-reverse" style={{ transformOrigin: "200px 200px" }}>
            <circle cx="200" cy="200" r="115" fill="none" stroke="#F39420" strokeOpacity="0.45" strokeDasharray="1 6" />
          </g>

          <circle cx="200" cy="200" r="78" fill="url(#cur-grad)" />
          <circle cx="200" cy="200" r="78" fill="none" stroke="#FEFEFE" strokeOpacity="0.25" strokeWidth="1" />

          {/* checkmark */}
          <path d="M168 200 L192 222 L236 178" stroke="#FEFEFE" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* orbiting dots */}
          <circle cx="200" cy="50" r="6" fill="#F5C71A" />
          <circle cx="350" cy="200" r="5" fill="#FE5C36" />
          <circle cx="200" cy="350" r="4" fill="#FEB449" />
          <circle cx="50" cy="200" r="5" fill="#2F3D4C" opacity="0.6" />
        </svg>
      </div>
    );
  }
  if (index === 1) {
    // Calm guidance — compass / radar
    return (
      <div className="relative aspect-square w-full max-w-[420px]">
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
          <circle cx="200" cy="200" r="170" fill="#F39420" opacity="0.08" />
          {/* radar rings */}
          {[60, 100, 140, 180].map((r, i) => (
            <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="#F39420" strokeOpacity={0.5 - i * 0.08} strokeWidth="1" />
          ))}
          {/* cross axes */}
          <line x1="200" y1="20" x2="200" y2="380" stroke="#2F3D4C" strokeOpacity="0.1" strokeDasharray="3 6" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="#2F3D4C" strokeOpacity="0.1" strokeDasharray="3 6" />

          {/* radar sweep */}
          <g className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }}>
            <path d="M 200 200 L 380 200 A 180 180 0 0 1 327 327 Z" fill="#F39420" opacity="0.18" />
          </g>

          {/* compass needle */}
          <g className="animate-float-medium" style={{ transformOrigin: "200px 200px" }}>
            <polygon points="200,120 215,210 200,200 185,210" fill="#FE5C36" />
            <polygon points="200,280 215,200 200,210 185,200" fill="#2F3D4C" opacity="0.7" />
          </g>
          <circle cx="200" cy="200" r="9" fill="#FEFEFE" stroke="#2F3D4C" strokeWidth="2" />

          {/* satellite dots */}
          <circle cx="80" cy="120" r="4" fill="#F5C71A" />
          <circle cx="320" cy="100" r="5" fill="#FE5C36" />
          <circle cx="340" cy="310" r="4" fill="#FEB449" />
        </svg>
      </div>
    );
  }
  // Built for parents — modular grid + connected nodes (system feel)
  return (
    <div className="relative aspect-square w-full max-w-[420px]">
      <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="par-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FEB449" />
            <stop offset="100%" stopColor="#F5C71A" />
          </linearGradient>
        </defs>
        <rect x="40" y="40" width="320" height="320" rx="40" fill="url(#par-grad)" opacity="0.18" />

        {/* modular tiles */}
        <g>
          <rect x="80" y="80" width="90" height="90" rx="20" fill="#FE5C36" className="animate-float-slow" />
          <rect x="190" y="80" width="60" height="90" rx="20" fill="#FEB449" />
          <rect x="270" y="80" width="50" height="50" rx="16" fill="#F5C71A" className="animate-float-fast" />
          <rect x="270" y="150" width="50" height="80" rx="20" fill="#F39420" />

          <rect x="80" y="190" width="50" height="80" rx="20" fill="#2F3D4C" opacity="0.85" />
          <rect x="150" y="190" width="100" height="50" rx="20" fill="#FEFEFE" stroke="#2F3D4C" strokeOpacity="0.15" />
          <rect x="150" y="260" width="60" height="60" rx="18" fill="#FE5C36" opacity="0.85" className="animate-float-medium" />
          <rect x="230" y="260" width="90" height="60" rx="20" fill="#F5C71A" />
        </g>

        {/* heart accent */}
        <path
          d="M195 215 c-5 -10 -22 -10 -22 4 c0 12 22 22 22 22 s22 -10 22 -22 c0 -14 -17 -14 -22 -4z"
          fill="#FE5C36"
        />

        {/* connector lines */}
        <g stroke="#2F3D4C" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 4" fill="none">
          <line x1="125" y1="170" x2="125" y2="190" />
          <line x1="295" y1="130" x2="295" y2="150" />
          <line x1="200" y1="240" x2="200" y2="260" />
        </g>
      </svg>
    </div>
  );
}
