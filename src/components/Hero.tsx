import { useEffect, useState } from "react";

/**
 * Hero — typewriter headline with a scene that assembles itself.
 *
 * Concept:
 *  1. The headline types itself out, line by line, as if Kindex is
 *     "writing the answer for you" — calm, intentional, human.
 *  2. As the typing progresses, surrounding scene elements rise into
 *     place one by one (eyebrow → headline → subcopy → CTAs → scenery).
 *  3. Reuses the visual vocabulary already established on the site:
 *     grid scaffold, orbital tick rings, floating capsules in the brand
 *     spectrum, hairline connectors, ambient auras.
 *
 * Brand spectrum: coral (#FE5C36) → orange (#F39420) → light-orange
 * (#FEB449) → yellow (#F5C71A). Key words use `.text-gradient-warm`.
 */

const LINES = [
  { plain: "Less ", accent: "Searching", trail: "." },
  { plain: "More ", accent: "Living", trail: "." },
] as const;

// Typing rhythm — calm, not frantic.
const CHAR_MS = 55;
const LINE_GAP_MS = 280;

export function Hero() {
  // Total characters across all lines (plain + accent + trail).
  const total = LINES.reduce(
    (sum, l) => sum + l.plain.length + l.accent.length + l.trail.length,
    0,
  );
  const [typed, setTyped] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typed >= total) {
      setDone(true);
      return;
    }
    // Slight pause between lines for natural cadence.
    const onLineBreak =
      typed === LINES[0].plain.length + LINES[0].accent.length + LINES[0].trail.length;
    const delay = onLineBreak ? LINE_GAP_MS : CHAR_MS;
    const t = window.setTimeout(() => setTyped((n) => n + 1), delay);
    return () => window.clearTimeout(t);
  }, [typed, total]);

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Faint grid scaffold */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#FEFEFE 1px, transparent 1px), linear-gradient(90deg, #FEFEFE 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 60% 50%, black 25%, transparent 78%)",
        }}
        aria-hidden="true"
      />

      {/* Ambient brand auras */}
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-coral/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-yellow/12 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:px-10 lg:py-32">
        {/* LEFT — typed headline + scene-builder copy */}
        <div>
          {/* Eyebrow */}
          <div
            className="mb-7 flex items-center gap-3 animate-rise-in"
            style={{ ["--rise-delay" as never]: "0ms" }}
          >
            <span className="block h-px w-10 bg-gradient-warm" aria-hidden="true" />
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
              For Vienna families
            </p>
          </div>

          {/* Typewriter headline. Screen-readers get the full text; the
              visual layer renders the partial typed state. */}
          <h1 className="text-[2.6rem] leading-[1.04] sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="sr-only">Less Searching. More Living.</span>
            <span aria-hidden="true">
              <TypedHeadline typed={typed} done={done} />
            </span>
          </h1>

          {/* Subcopy rises in once typing completes */}
          <p
            className="mt-7 max-w-xl text-base leading-relaxed text-white/70 animate-rise-in sm:text-lg"
            style={{ ["--rise-delay" as never]: "1500ms" }}
          >
            Kindex helps Vienna families cut through the{" "}
            <span className="text-gradient-warm font-medium">noise</span> — so
            you can spend less time deciding and more time{" "}
            <span className="text-gradient-warm font-medium">living</span>.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-wrap items-center gap-6 animate-rise-in"
            style={{ ["--rise-delay" as never]: "1800ms" }}
          >
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
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
            >
              <span className="underline decoration-white/30 underline-offset-4 transition-colors group-hover:decoration-white">
                See how it works
              </span>
            </a>
          </div>

          {/* Brand spectrum credibility row */}
          <div
            className="mt-12 flex items-center gap-4 animate-rise-in"
            style={{ ["--rise-delay" as never]: "2100ms" }}
          >
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

        {/* RIGHT — assembled scene built from already-established elements */}
        <AssemblingScene />
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
 * Renders the headline based on how many characters have been typed.
 * Each line: plain prefix + gradient accent word + trailing punctuation.
 * Caret is shown at the current typing position; once done it sits at end.
 */
function TypedHeadline({ typed, done }: { typed: number; done: boolean }) {
  let remaining = typed;

  return (
    <>
      {LINES.map((line, idx) => {
        const plainShown = Math.min(remaining, line.plain.length);
        remaining -= plainShown;
        const accentShown = Math.min(Math.max(remaining, 0), line.accent.length);
        remaining -= accentShown;
        const trailShown = Math.min(Math.max(remaining, 0), line.trail.length);
        remaining -= trailShown;

        const lineStarted = plainShown > 0 || accentShown > 0 || trailShown > 0;
        const lineComplete =
          plainShown === line.plain.length &&
          accentShown === line.accent.length &&
          trailShown === line.trail.length;

        // Caret position: on the last line currently being typed.
        const isCaretLine =
          lineStarted &&
          !lineComplete &&
          // no later line has started
          LINES.slice(idx + 1).every((next) => {
            // remaining was reduced; if it's still <= 0 here, no later line started
            return true;
          });

        const showFinalCaret = done && idx === LINES.length - 1;

        return (
          <span key={idx} className="block">
            <span>{line.plain.slice(0, plainShown)}</span>
            {accentShown > 0 && (
              <span className="text-gradient-warm">
                {line.accent.slice(0, accentShown)}
              </span>
            )}
            <span>{line.trail.slice(0, trailShown)}</span>
            {(isCaretLine || (showFinalCaret && idx === LINES.length - 1)) && (
              <span className="caret-blink text-white/80" />
            )}
          </span>
        );
      })}
    </>
  );
}

/**
 * Right-side scene that assembles itself element by element using the
 * vocabulary already on the page: orbital ring, capsules in the brand
 * spectrum, floating nodes, hairline connectors.
 */
function AssemblingScene() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] justify-self-center lg:justify-self-end">
      {/* Soft glow base */}
      <div
        className="absolute inset-[18%] rounded-full bg-coral/15 blur-3xl animate-rise-in"
        style={{ ["--rise-delay" as never]: "300ms" }}
        aria-hidden="true"
      />

      {/* Outer slow tick ring */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full animate-rise-in"
        style={{ ["--rise-delay" as never]: "500ms" }}
        aria-hidden="true"
      >
        <g className="animate-spin-slow" style={{ transformOrigin: "300px 300px" }}>
          <circle
            cx="300"
            cy="300"
            r="270"
            fill="none"
            stroke="#FEFEFE"
            strokeOpacity="0.16"
            strokeWidth="1"
            strokeDasharray="2 12"
          />
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            const x1 = 300 + Math.cos(a) * 252;
            const y1 = 300 + Math.sin(a) * 252;
            const x2 = 300 + Math.cos(a) * (i % 6 === 0 ? 234 : 244);
            const y2 = 300 + Math.sin(a) * (i % 6 === 0 ? 234 : 244);
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
        </g>
      </svg>

      {/* Inner counter-rotating yellow dashed ring */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full animate-rise-in"
        style={{ ["--rise-delay" as never]: "700ms" }}
        aria-hidden="true"
      >
        <g className="animate-spin-reverse" style={{ transformOrigin: "300px 300px" }}>
          <circle
            cx="300"
            cy="300"
            r="195"
            fill="none"
            stroke="#FEB449"
            strokeOpacity="0.32"
            strokeWidth="1"
            strokeDasharray="1 7"
          />
          {[0, 72, 144, 216, 288].map((deg) => {
            const a = (deg * Math.PI) / 180;
            return (
              <circle
                key={deg}
                cx={300 + Math.cos(a) * 195}
                cy={300 + Math.sin(a) * 195}
                r="2.5"
                fill="#F5C71A"
                opacity="0.8"
              />
            );
          })}
        </g>
      </svg>

      {/* Three brand-spectrum capsules — assembled in sequence.
          Each one fades up into its final fanned position. */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-coral" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FE5C36" />
            <stop offset="100%" stopColor="#FF7A4F" />
          </linearGradient>
          <linearGradient id="hero-orange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F39420" />
            <stop offset="100%" stopColor="#FEB449" />
          </linearGradient>
          <linearGradient id="hero-yellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FEB449" />
            <stop offset="100%" stopColor="#F5C71A" />
          </linearGradient>
        </defs>

        {/* Capsule — yellow, fanned right */}
        <g
          className="animate-rise-in"
          style={
            {
              ["--rise-delay" as never]: "1100ms",
              transformOrigin: "300px 420px",
              transform: "rotate(40deg)",
            } as never
          }
        >
          <rect
            x="268"
            y="190"
            width="64"
            height="230"
            rx="32"
            fill="none"
            stroke="url(#hero-yellow)"
            strokeWidth="10"
          />
        </g>

        {/* Capsule — orange, slight tilt */}
        <g
          className="animate-rise-in"
          style={
            {
              ["--rise-delay" as never]: "1300ms",
              transformOrigin: "300px 420px",
              transform: "rotate(8deg)",
            } as never
          }
        >
          <rect
            x="268"
            y="185"
            width="64"
            height="235"
            rx="32"
            fill="none"
            stroke="url(#hero-orange)"
            strokeWidth="10"
          />
        </g>

        {/* Capsule — coral, fanned left */}
        <g
          className="animate-rise-in"
          style={
            {
              ["--rise-delay" as never]: "1500ms",
              transformOrigin: "300px 420px",
              transform: "rotate(-36deg)",
            } as never
          }
        >
          <rect
            x="268"
            y="180"
            width="64"
            height="240"
            rx="32"
            fill="none"
            stroke="url(#hero-coral)"
            strokeWidth="10"
          />
        </g>

        {/* Anchor dot */}
        <circle
          cx="300"
          cy="420"
          r="4"
          fill="#FEFEFE"
          opacity="0.6"
          className="animate-rise-in"
          style={{ ["--rise-delay" as never]: "900ms" } as never}
        />
      </svg>

      {/* Floating constellation + connectors — appear last */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full animate-rise-in"
        style={{ ["--rise-delay" as never]: "1800ms" }}
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
