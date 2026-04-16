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
 * Right-side scene — a calm "family system".
 *
 * Visual story (uses the same vocabulary as the rest of the site):
 *   - Two orbital rings (slow + counter-rotating) = the surrounding world.
 *   - A central capsule outline (coral→orange) = home / Kindex itself.
 *   - Four small capsule "figures" around it = the family members:
 *        Parent A (coral, tall) · Parent B (orange, tall)
 *        Child 1 (light-orange, small) · Child 2 (yellow, smaller)
 *     They each gently float at their own rhythm — never frantic.
 *   - Hairline connectors link each figure back to home, like soft bonds.
 *   - The whole composition assembles itself element by element
 *     (rings → home → parents → kids → connectors → ambient nodes).
 */
function AssemblingScene() {
  // Each "figure" is a vertical capsule outline. Coordinates are tuned so
  // they sit on a gentle arc above the orbital rings, like a family photo
  // arranged around a hearth.
  return (
    <div className="relative aspect-square w-full max-w-[520px] justify-self-center lg:justify-self-end">
      {/* Soft glow base */}
      <div
        className="absolute inset-[18%] rounded-full bg-coral/15 blur-3xl animate-rise-in"
        style={{ ["--rise-delay" as never]: "300ms" }}
        aria-hidden="true"
      />

      {/* Outer slow tick ring — the world around the family */}
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

      {/* Inner counter-rotating yellow dashed ring — the family's rhythm */}
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
            r="200"
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
                cx={300 + Math.cos(a) * 200}
                cy={300 + Math.sin(a) * 200}
                r="2.5"
                fill="#F5C71A"
                opacity="0.8"
              />
            );
          })}
        </g>
      </svg>

      {/* Family scene — gradients, home, figures, connectors */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fam-coral" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FE5C36" />
            <stop offset="100%" stopColor="#FF7A4F" />
          </linearGradient>
          <linearGradient id="fam-orange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F39420" />
            <stop offset="100%" stopColor="#FEB449" />
          </linearGradient>
          <linearGradient id="fam-light" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FEB449" />
            <stop offset="100%" stopColor="#F5C71A" />
          </linearGradient>
          <linearGradient id="fam-yellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5C71A" />
            <stop offset="100%" stopColor="#FEB449" />
          </linearGradient>
          <linearGradient id="fam-home" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FE5C36" />
            <stop offset="100%" stopColor="#F39420" />
          </linearGradient>
        </defs>

        {/* Hairline connectors from each family member back to home.
            Drawn first so they sit behind the figures. Appear last in time. */}
        <g
          className="animate-rise-in"
          stroke="#FEFEFE"
          strokeOpacity="0.22"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 5"
          fill="none"
          style={{ ["--rise-delay" as never]: "1900ms" } as never}
        >
          <line x1="180" y1="240" x2="290" y2="290" />
          <line x1="420" y1="240" x2="310" y2="290" />
          <line x1="200" y1="430" x2="290" y2="320" />
          <line x1="400" y1="430" x2="310" y2="320" />
        </g>

        {/* HOME — central capsule (Kindex). Appears first inside the rings. */}
        <g
          className="animate-rise-in"
          style={{ ["--rise-delay" as never]: "900ms" } as never}
        >
          <rect
            x="270"
            y="240"
            width="60"
            height="130"
            rx="30"
            fill="none"
            stroke="url(#fam-home)"
            strokeWidth="9"
          />
          {/* tiny inner heart-dot — the warmth at the center */}
          <circle cx="300" cy="305" r="4" fill="#FE5C36" />
        </g>

        {/* PARENT A — coral, top-left, gentle slow float */}
        <g
          className="animate-rise-in"
          style={{ ["--rise-delay" as never]: "1200ms" } as never}
        >
          <g className="animate-float-slow" style={{ transformOrigin: "180px 220px" }}>
            <rect
              x="160"
              y="170"
              width="40"
              height="100"
              rx="20"
              fill="none"
              stroke="url(#fam-coral)"
              strokeWidth="7"
            />
            {/* head dot */}
            <circle cx="180" cy="150" r="11" fill="url(#fam-coral)" />
          </g>
        </g>

        {/* PARENT B — orange, top-right, medium float */}
        <g
          className="animate-rise-in"
          style={{ ["--rise-delay" as never]: "1350ms" } as never}
        >
          <g className="animate-float-medium" style={{ transformOrigin: "420px 220px" }}>
            <rect
              x="400"
              y="170"
              width="40"
              height="100"
              rx="20"
              fill="none"
              stroke="url(#fam-orange)"
              strokeWidth="7"
            />
            <circle cx="420" cy="150" r="11" fill="url(#fam-orange)" />
          </g>
        </g>

        {/* CHILD 1 — light-orange, bottom-left, faster float */}
        <g
          className="animate-rise-in"
          style={{ ["--rise-delay" as never]: "1500ms" } as never}
        >
          <g className="animate-float-fast" style={{ transformOrigin: "200px 420px" }}>
            <rect
              x="184"
              y="395"
              width="32"
              height="70"
              rx="16"
              fill="none"
              stroke="url(#fam-light)"
              strokeWidth="6"
            />
            <circle cx="200" cy="380" r="9" fill="url(#fam-light)" />
          </g>
        </g>

        {/* CHILD 2 — yellow, bottom-right, slow float (smallest of all) */}
        <g
          className="animate-rise-in"
          style={{ ["--rise-delay" as never]: "1650ms" } as never}
        >
          <g className="animate-float-slow" style={{ transformOrigin: "400px 425px" }}>
            <rect
              x="386"
              y="405"
              width="28"
              height="60"
              rx="14"
              fill="none"
              stroke="url(#fam-yellow)"
              strokeWidth="6"
            />
            <circle cx="400" cy="392" r="8" fill="url(#fam-yellow)" />
          </g>
        </g>
      </svg>

      {/* Ambient floating nodes + faint sparks — appear last */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full animate-rise-in"
        style={{ ["--rise-delay" as never]: "2000ms" }}
        aria-hidden="true"
      >
        <circle cx="100" cy="320" r="3" fill="#F5C71A" className="animate-float-fast" />
        <circle cx="500" cy="340" r="3.5" fill="#FEB449" className="animate-float-medium" />
        <circle cx="290" cy="110" r="2.5" fill="#FEFEFE" opacity="0.6" />
        <circle cx="300" cy="500" r="2.5" fill="#FEFEFE" opacity="0.45" />
        <circle cx="120" cy="490" r="2" fill="#FE5C36" opacity="0.7" />
        <circle cx="480" cy="490" r="2" fill="#F5C71A" opacity="0.7" />
      </svg>
    </div>
  );
}

