import { HeroIllustration } from "./HeroIllustration";

/**
 * Hero — editorial, calm, technological.
 *
 * Composition reuses the visual vocabulary we've established across the site:
 *  - faint grid scaffolding (like Audience / HeroIllustration)
 *  - soft coral & yellow ambient auras
 *  - small orbital rings and tick marks
 *  - floating constellation nodes
 *  - thin connector lines
 *
 * The headline uses the brand warm gradient (coral → orange → yellow) on its
 * key words ("Searching", "Living") to anchor the brand spectrum in the copy.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Faint grid scaffold — same vocabulary as the illustration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#FEFEFE 1px, transparent 1px), linear-gradient(90deg, #FEFEFE 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 70% 50%, black 20%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Ambient auras — coral right, yellow left, both very soft */}
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-coral/25 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-yellow/12 blur-[140px]"
        aria-hidden="true"
      />

      {/* Decorative far-left orbital ring — slow rotation, very faint */}
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -left-24 top-16 h-[300px] w-[300px] animate-spin-slow opacity-60"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="#FEFEFE"
          strokeOpacity="0.18"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x1 = 200 + Math.cos(angle) * 168;
          const y1 = 200 + Math.sin(angle) * 168;
          const x2 = 200 + Math.cos(angle) * (i % 3 === 0 ? 152 : 162);
          const y2 = 200 + Math.sin(angle) * (i % 3 === 0 ? 152 : 162);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FEFEFE"
              strokeOpacity={i % 3 === 0 ? "0.4" : "0.15"}
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Decorative bottom-center mini ring */}
      <svg
        viewBox="0 0 200 200"
        className="pointer-events-none absolute bottom-10 left-[42%] h-[140px] w-[140px] animate-spin-reverse opacity-50"
        aria-hidden="true"
      >
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#FEB449"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="1 6"
        />
        {[0, 90, 180, 270].map((deg) => {
          const a = (deg * Math.PI) / 180;
          return (
            <circle
              key={deg}
              cx={100 + Math.cos(a) * 80}
              cy={100 + Math.sin(a) * 80}
              r="2"
              fill="#F5C71A"
              opacity="0.7"
            />
          );
        })}
      </svg>

      {/* Floating constellation nodes scattered across the section */}
      <div
        className="pointer-events-none absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-coral animate-float-medium"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[38%] top-[14%] h-1.5 w-1.5 rounded-full bg-yellow animate-float-fast"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[52%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-light-orange/80 animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[6%] bottom-[28%] h-1.5 w-1.5 rounded-full bg-white/40 animate-float-medium"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10 lg:py-32">
        {/* LEFT — editorial copy block */}
        <div className="animate-fade-in-up">
          {/* Eyebrow with hairline accent — echoes the connector lines used elsewhere */}
          <div className="mb-7 flex items-center gap-3">
            <span
              className="block h-px w-10 bg-gradient-warm"
              aria-hidden="true"
            />
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
              For Vienna families
            </p>
          </div>

          <h1 className="text-[2.6rem] leading-[1.02] sm:text-5xl lg:text-6xl xl:text-7xl">
            Less{" "}
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Searching
            </span>
            .
            <br />
            More{" "}
            <span className="bg-gradient-warm bg-clip-text text-transparent">
              Living
            </span>
            .
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Kindex helps Vienna families cut through the noise — so you can spend
            less time deciding and more time living.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#waitlist"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-coral px-7 py-3.5 text-sm font-medium text-white transition-all hover:shadow-soft"
            >
              <span className="relative z-10">Join the Waitlist</span>
              {/* Hover shimmer using the brand gradient */}
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-warm opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                aria-hidden="true"
              />
            </a>
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
            >
              <span className="underline decoration-white/30 underline-offset-4 transition-colors group-hover:decoration-white">
                See how it works
              </span>
              <span
                className="inline-block transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>

          {/* Tiny credibility row — uses the brand spectrum dots as visual signature */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-1.5" aria-hidden="true">
              <span className="block h-2.5 w-2.5 rounded-full bg-coral ring-2 ring-navy" />
              <span className="block h-2.5 w-2.5 rounded-full bg-orange ring-2 ring-navy" />
              <span className="block h-2.5 w-2.5 rounded-full bg-light-orange ring-2 ring-navy" />
              <span className="block h-2.5 w-2.5 rounded-full bg-yellow ring-2 ring-navy" />
            </div>
            <p className="text-xs text-white/55">
              Built with families across Vienna's districts
            </p>
          </div>
        </div>

        {/* RIGHT — the bloom illustration (unchanged, but now sits in a richer scene) */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Subtle hairline frame around the illustration — editorial framing */}
          <div
            className="pointer-events-none absolute inset-6 rounded-[32px] border border-white/[0.06]"
            aria-hidden="true"
          />
          <HeroIllustration />
        </div>
      </div>

      {/* Bottom hairline divider with a single coral tick — calm section close */}
      <div className="relative">
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-white/10"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/2 h-[5px] w-16 -translate-x-1/2 rounded-t-full bg-gradient-warm"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
