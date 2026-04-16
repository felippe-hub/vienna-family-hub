/**
 * Hero illustration — sophisticated, technological geometric composition.
 * Layered orbits, precise grids, drawn arcs, and the brand ribbon motif.
 * Every element animates subtly to feel alive without being noisy.
 */
export function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      {/* Soft ambient glow */}
      <div className="absolute inset-[15%] rounded-full bg-coral/20 blur-3xl animate-pulse-glow" />

      {/* Outer slow-rotating dotted ring */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full animate-spin-slow"
        aria-hidden="true"
      >
        <circle
          cx="300"
          cy="300"
          r="280"
          fill="none"
          stroke="#FEFEFE"
          strokeOpacity="0.18"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
        {/* tick marks */}
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

      {/* Counter-rotating inner ring */}
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
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="1 6"
        />
        {/* node markers on inner ring */}
        <g>
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
        </g>
      </svg>

      {/* Grid scaffold — sense of precision */}
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

      {/* Central composition — the brand ribbon reimagined as floating capsules */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cap-coral" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FE5C36" />
            <stop offset="100%" stopColor="#F39420" />
          </linearGradient>
          <linearGradient id="cap-yellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FEB449" />
            <stop offset="100%" stopColor="#F5C71A" />
          </linearGradient>
        </defs>

        {/* Capsule cluster — references the official logo mark */}
        <g className="origin-center animate-float-slow" style={{ transformOrigin: "300px 300px" }}>
          <rect
            x="240"
            y="200"
            width="48"
            height="160"
            rx="24"
            fill="url(#cap-coral)"
            transform="rotate(-22 264 280)"
          />
        </g>
        <g className="origin-center animate-float-medium" style={{ transformOrigin: "300px 300px" }}>
          <rect
            x="278"
            y="220"
            width="48"
            height="170"
            rx="24"
            fill="#F39420"
            transform="rotate(8 302 305)"
          />
        </g>
        <g className="origin-center animate-float-fast" style={{ transformOrigin: "300px 300px" }}>
          <rect
            x="240"
            y="260"
            width="48"
            height="170"
            rx="24"
            fill="url(#cap-yellow)"
            transform="rotate(38 264 345)"
          />
        </g>
      </svg>

      {/* Floating data-style nodes */}
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

        {/* Connecting hairlines — subtle network feel */}
        <g stroke="#FEFEFE" strokeOpacity="0.18" strokeWidth="1" strokeLinecap="round">
          <line x1="120" y1="180" x2="240" y2="240" strokeDasharray="2 4" />
          <line x1="490" y1="220" x2="380" y2="260" strokeDasharray="2 4" />
          <line x1="460" y1="430" x2="360" y2="380" strokeDasharray="2 4" />
        </g>
      </svg>
    </div>
  );
}
