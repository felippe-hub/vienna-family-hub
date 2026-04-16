/**
 * Hero illustration — faithful to the Kindex brand mark.
 * The mark = three OUTLINED rounded capsules fanning out, in a coral→yellow
 * gradient. Wrapped in a precision orbital system for a calm, technological feel.
 */
export function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      {/* Soft ambient glow */}
      <div className="absolute inset-[18%] rounded-full bg-coral/25 blur-3xl animate-pulse-glow" />

      {/* Outer slow-rotating dotted ring */}
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
          strokeOpacity="0.18"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const x1 = 300 + Math.cos(angle) * 256;
          const y1 = 300 + Math.sin(angle) * 256;
          const x2 = 300 + Math.cos(angle) * (i % 6 === 0 ? 240 : 248);
          const y2 = 300 + Math.sin(angle) * (i % 6 === 0 ? 240 : 248);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FEFEFE"
              strokeOpacity={i % 6 === 0 ? "0.5" : "0.2"}
              strokeWidth="1.2"
            />
          );
        })}
      </svg>

      {/* Counter-rotating inner dashed ring with nodes */}
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
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="1 6"
        />
        {[0, 72, 144, 216, 288].map((deg) => {
          const a = (deg * Math.PI) / 180;
          return (
            <circle
              key={deg}
              cx={300 + Math.cos(a) * 200}
              cy={300 + Math.sin(a) * 200}
              r="3"
              fill="#F5C71A"
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
        <g stroke="#FEFEFE" strokeOpacity="0.06" strokeWidth="1">
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`h${i}`} x1="120" y1={150 + i * 30} x2="480" y2={150 + i * 30} />
          ))}
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`v${i}`} x1={120 + i * 30} y1="150" x2={120 + i * 30} y2="450" />
          ))}
        </g>
      </svg>

      {/* Drawn arc accents */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d="M 130 360 A 170 170 0 0 1 470 360"
          fill="none"
          stroke="#FE5C36"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-draw"
          style={{ ["--dash" as never]: "600" }}
        />
        <path
          d="M 180 240 A 120 120 0 0 1 420 240"
          fill="none"
          stroke="#F5C71A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 8"
        />
      </svg>

      {/* THE MARK — three outlined capsules fanning out, exactly like the logo */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          {/* Each capsule has its own gradient stop in the coral→yellow spectrum,
              creating the layered color shift seen in the real logo. */}
          <linearGradient id="cap-1-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FE5C36" />
            <stop offset="100%" stopColor="#FF7A4F" />
          </linearGradient>
          <linearGradient id="cap-2-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F39420" />
            <stop offset="100%" stopColor="#FEB449" />
          </linearGradient>
          <linearGradient id="cap-3-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FEB449" />
            <stop offset="100%" stopColor="#F5C71A" />
          </linearGradient>
        </defs>

        {/* Capsule geometry: each rect is 64×220 with rx=32 (pill).
            Pivot is the bottom-center (≈ x+32, y+220) so they fan from one anchor.
            Rotation angles approximate the original mark layout. */}

        {/* Capsule 3 — back, yellow, rotated most clockwise */}
        <g
          className="origin-center animate-float-slow"
          style={{ transformOrigin: "300px 300px" }}
        >
          <rect
            x="268"
            y="190"
            width="64"
            height="220"
            rx="32"
            fill="none"
            stroke="url(#cap-3-grad)"
            strokeWidth="11"
            transform="rotate(50 300 410)"
          />
        </g>

        {/* Capsule 2 — middle, orange, slightly rotated */}
        <g
          className="origin-center animate-float-medium"
          style={{ transformOrigin: "300px 300px" }}
        >
          <rect
            x="268"
            y="180"
            width="64"
            height="225"
            rx="32"
            fill="none"
            stroke="url(#cap-2-grad)"
            strokeWidth="11"
            transform="rotate(20 300 405)"
          />
        </g>

        {/* Capsule 1 — front, coral, rotated counter-clockwise (top-left) */}
        <g
          className="origin-center animate-float-fast"
          style={{ transformOrigin: "300px 300px" }}
        >
          <rect
            x="268"
            y="170"
            width="64"
            height="230"
            rx="32"
            fill="none"
            stroke="url(#cap-1-grad)"
            strokeWidth="11"
            transform="rotate(-15 300 400)"
          />
        </g>
      </svg>

      {/* Floating nodes + hairline connectors */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle cx="120" cy="180" r="6" fill="#FE5C36" className="animate-float-medium" />
        <circle cx="490" cy="220" r="4" fill="#F5C71A" className="animate-float-fast" />
        <circle cx="460" cy="430" r="8" fill="#FEB449" className="animate-float-slow" />
        <circle cx="100" cy="430" r="5" fill="#FEFEFE" opacity="0.6" className="animate-float-medium" />
        <circle cx="300" cy="120" r="3" fill="#FEFEFE" opacity="0.7" />
        <circle cx="300" cy="490" r="3" fill="#FEFEFE" opacity="0.7" />

        <g stroke="#FEFEFE" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round">
          <line x1="120" y1="180" x2="240" y2="240" strokeDasharray="2 4" />
          <line x1="490" y1="220" x2="380" y2="260" strokeDasharray="2 4" />
          <line x1="460" y1="430" x2="360" y2="380" strokeDasharray="2 4" />
        </g>
      </svg>
    </div>
  );
}
