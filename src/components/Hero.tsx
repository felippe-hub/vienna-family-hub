import { HeroIllustration } from "./HeroIllustration";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
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
          <div className="animate-float-slow">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
