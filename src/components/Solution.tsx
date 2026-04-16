import { Sparkles, Compass, HeartHandshake } from "lucide-react";

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
            One place for your family's life in Vienna.
          </h2>
        </div>

        <div className="mt-20 space-y-20">
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
    return (
      <svg viewBox="0 0 360 280" className="h-auto w-full max-w-[420px]" aria-hidden="true">
        <rect x="20" y="40" width="240" height="200" rx="40" fill="#FE5C36" opacity="0.12" />
        <rect x="60" y="20" width="260" height="60" rx="30" fill="#FE5C36" />
        <rect x="60" y="100" width="200" height="20" rx="10" fill="#2F3D4C" opacity="0.15" />
        <rect x="60" y="140" width="160" height="20" rx="10" fill="#2F3D4C" opacity="0.15" />
        <rect x="60" y="180" width="180" height="20" rx="10" fill="#2F3D4C" opacity="0.15" />
        <circle cx="310" cy="220" r="34" fill="#F5C71A" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 360 280" className="h-auto w-full max-w-[420px]" aria-hidden="true">
        <circle cx="180" cy="140" r="110" fill="#F39420" opacity="0.15" />
        <circle cx="180" cy="140" r="70" fill="none" stroke="#F39420" strokeWidth="14" />
        <circle cx="180" cy="140" r="14" fill="#FE5C36" />
        <circle cx="80" cy="60" r="22" fill="#F5C71A" />
        <circle cx="300" cy="220" r="18" fill="#FEB449" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 360 280" className="h-auto w-full max-w-[420px]" aria-hidden="true">
      <rect x="40" y="60" width="280" height="160" rx="80" fill="#F5C71A" opacity="0.5" />
      <circle cx="130" cy="140" r="44" fill="#FE5C36" />
      <circle cx="230" cy="140" r="44" fill="#FEB449" />
      <circle cx="180" cy="140" r="20" fill="#FEFEFE" />
    </svg>
  );
}
