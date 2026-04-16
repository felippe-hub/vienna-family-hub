/**
 * Hero illustration — the Kindex mark blooming open like a flower.
 *
 * The brand mark = three outlined rounded capsules fanning out from a single
 * bottom anchor, in a coral → orange → yellow gradient spectrum.
 *
 * Animation concept: each capsule begins folded (rotation 0°, collapsed onto
 * the vertical axis) and blooms outward to its final fan angle, like petals
 * opening. Then they breathe with a very subtle sway. Surrounding orbital
 * scaffolding is calm and technological — never distracting.
 */
export function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      {/* Soft ambient glow — gentle, not loud */}
      <div className="absolute inset-[22%] rounded-full bg-coral/20 blur-3xl animate-pulse-glow" />

      {/* Outer slow-rotating tick ring */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full animate-spin-slow"
        aria-hidden="true"
      >
        <circle
          cx="300"
          cy="300"
          r="278"
          fill="none"
          stroke="#FEFEFE"
          strokeOpacity="0.14"
          strokeWidth="1"
          strokeDasharray="2 12"
        />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const x1 = 300 + Math.cos(angle) * 256;
          const y1 = 300 + Math.sin(angle) * 256;
          const x2 = 300 + Math.cos(angle) * (i % 6 === 0 ? 240 : 250);
          const y2 = 300 + Math.sin(angle) * (i % 6 === 0 ? 240 : 250);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FEFEFE"
              strokeOpacity={i % 6 === 0 ? "0.42" : "0.16"}
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Counter-rotating inner dashed ring with soft nodes */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full animate-spin-reverse"
        aria-hidden="true"
      >
        <circle
          cx="300"
          cy="300"
          r="200"
          fill="none"
          stroke="#FEB449"
          strokeOpacity="0.28"
          strokeWidth="1"
          strokeDasharray="1 7"
        />
        {[0, 72, 144, 216, 288].map((deg) => {
          const a = (deg * Math.PI) / 180;
          return (
            <circle
              key={deg}
              cx={300 + Math.cos(a) * 200}
              cy={300 + Math.sin(a) * 200}
              r="2.5"
              fill="#F5C71A"
              opacity="0.7"
            />
          );
        })}
      </svg>

      {/* Faint grid scaffold */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g stroke="#FEFEFE" strokeOpacity="0.05" strokeWidth="1">
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`h${i}`} x1="120" y1={150 + i * 30} x2="480" y2={150 + i * 30} />
          ))}
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`v${i}`} x1={120 + i * 30} y1="150" x2={120 + i * 30} y2="450" />
          ))}
        </g>
      </svg>

      {/* Drawn arc accents — drawn once on load */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d="M 130 360 A 170 170 0 0 1 470 360"
          fill="none"
          stroke="#FE5C36"
          strokeOpacity="0.7"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-draw"
          style={{ ["--dash" as never]: "600" }}
        />
        <path
          d="M 180 240 A 120 120 0 0 1 420 240"
          fill="none"
          stroke="#F5C71A"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="3 8"
        />
      </svg>

      {/* THE MARK — three outlined capsules blooming open from a single anchor.
          All three capsules share the SAME pivot (bottom-center at 300,420),
          which is the geometric anchor of the Kindex logo. Each starts folded
          (rotation 0°) and blooms to its final angle, then sways gently. */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          {/* Gradient stops mirror the coral → orange → yellow spectrum
              of the official Kindex brand mark. */}
          <linearGradient id="petal-coral" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FE5C36" />
            <stop offset="100%" stopColor="#FF7A4F" />
          </linearGradient>
          <linearGradient id="petal-orange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F39420" />
            <stop offset="100%" stopColor="#FEB449" />
          </linearGradient>
          <linearGradient id="petal-yellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FEB449" />
            <stop offset="100%" stopColor="#F5C71A" />
          </linearGradient>
        </defs>

        {/* Each capsule is a 64×230 vertical pill (rx=32). Anchor = (300, 420).
            We place the rect so its bottom-center sits at the anchor, then
            rotate around that anchor to fan it out.
            x = 300 - 32 = 268, y = 420 - 230 = 190, height = 230. */}

        {/* PETAL 3 — yellow, fans to the RIGHT (+45°), slowest sway */}
        <g
          className="animate-bloom-right"
          style={{ transformOrigin: "300px 420px", transformBox: "fill-box" } as never}
        >
          <rect
            x="268"
            y="190"
            width="64"
            height="230"
            rx="32"
            fill="none"
            stroke="url(#petal-yellow)"
            strokeWidth="10"
          />
        </g>

        {/* PETAL 2 — orange, stays mostly upright (+8° tilt), medium sway */}
        <g
          className="animate-bloom-center"
          style={{ transformOrigin: "300px 420px", transformBox: "fill-box" } as never}
        >
          <rect
            x="268"
            y="185"
            width="64"
            height="235"
            rx="32"
            fill="none"
            stroke="url(#petal-orange)"
            strokeWidth="10"
          />
        </g>

        {/* PETAL 1 — coral, fans to the LEFT (−40°), fastest sway. Front-most. */}
        <g
          className="animate-bloom-left"
          style={{ transformOrigin: "300px 420px", transformBox: "fill-box" } as never}
        >
          <rect
            x="268"
            y="180"
            width="64"
            height="240"
            rx="32"
            fill="none"
            stroke="url(#petal-coral)"
            strokeWidth="10"
          />
        </g>

        {/* Anchor dot — the calm center of the bloom */}
        <circle cx="300" cy="420" r="4" fill="#FEFEFE" opacity="0.6" />
      </svg>

      {/* Floating nodes + hairline connectors — calm constellation */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle cx="120" cy="180" r="5" fill="#FE5C36" opacity="0.85" className="animate-float-medium" />
        <circle cx="490" cy="220" r="3.5" fill="#F5C71A" className="animate-float-fast" />
        <circle cx="460" cy="430" r="6" fill="#FEB449" opacity="0.85" className="animate-float-slow" />
        <circle cx="100" cy="430" r="4" fill="#FEFEFE" opacity="0.5" className="animate-float-medium" />
        <circle cx="300" cy="120" r="2.5" fill="#FEFEFE" opacity="0.6" />

        <g stroke="#FEFEFE" strokeOpacity="0.14" strokeWidth="1" strokeLinecap="round">
          <line x1="120" y1="180" x2="240" y2="240" strokeDasharray="2 5" />
          <line x1="490" y1="220" x2="380" y2="260" strokeDasharray="2 5" />
          <line x1="460" y1="430" x2="360" y2="380" strokeDasharray="2 5" />
        </g>
      </svg>
    </div>
  );
}
