import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Ambient background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#FEFEFE 1px, transparent 1px), linear-gradient(90deg, #FEFEFE 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      {/* Soft coral aura */}
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-coral/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
        <div className="animate-fade-in-up">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-coral">
            For Vienna families
          </p>
          <h1 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
            Less Searching.
            <br />
            More Living.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            Kindex helps Vienna families cut through the noise — so you can spend
            less time deciding and more time living.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-xl bg-coral px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-coral/90 hover:shadow-soft"
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
