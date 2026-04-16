import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Before Kindex I had 14 tabs open just to pick a weekend activity. Now I decide in minutes — and I finally play with my son instead of researching.",
    name: "Marina Köhler",
    role: "Mom of 2 · 3rd district",
    initials: "MK",
    accent: "from-coral to-orange",
  },
  {
    quote:
      "For the first time, something truly understood the invisible mental load. Kindex doesn't give me more options — it gives me calm and clarity to decide.",
    name: "Sophie Brandt",
    role: "Mom of 1 · 7th district",
    initials: "SB",
    accent: "from-orange to-light-orange",
  },
  {
    quote:
      "It's the only place where everything in our Vienna life talks to each other. I got hours of my week back — and that's family time returned.",
    name: "Lena Hofer",
    role: "Mom of 3 · 19th district",
    initials: "LH",
    accent: "from-light-orange to-yellow",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-soft-gray py-24 lg:py-32">
      {/* Subtle grid scaffold */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(#2F3D4C 1px, transparent 1px), linear-gradient(90deg, #2F3D4C 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.05) 30%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      {/* Soft ambient warm accents — barely perceptible */}
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-coral/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-yellow/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-coral">
            Vienna Families
          </p>
          <h2 className="text-3xl text-navy sm:text-4xl lg:text-5xl">
            Moms who got their{" "}
            <span className="text-gradient-warm">time back</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-navy/65 sm:text-lg">
            "Kindex is not another app to check. It's the clarity you've been
            looking for."
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 140} as="article">
              <div className="group relative flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft hover:border-navy/15">
                <svg
                  className="mb-4 h-7 w-7 text-coral/70 transition-transform duration-500 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5a1.67 1.67 0 0 1 1.67-1.67V6zm10 0a5.17 5.17 0 0 0-5.17 5.17V18h6.83v-6.83H15.5a1.67 1.67 0 0 1 1.67-1.67V6z" />
                </svg>

                <p className="flex-1 text-[15px] leading-relaxed text-navy/85">
                  {t.quote}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-navy/10 pt-5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} text-sm font-bold text-white shadow-card`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight text-navy">
                      {t.name}
                    </p>
                    <p className="text-xs text-navy/55">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
