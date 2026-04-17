import { createFileRoute, Link } from "@tanstack/react-router";
import { Coffee, Heart, Users, Sparkles, Shield, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/for-parents")({
  component: ForParentsPage,
  head: () => ({
    meta: [
      { title: "For Parents — Kindex" },
      {
        name: "description",
        content:
          "Resources, reflections and gentle support for parents in Vienna. Because you matter too.",
      },
      { property: "og:title", content: "For Parents — Kindex" },
      {
        property: "og:description",
        content:
          "A calm space for parents — workshops, support, time for yourself, and quiet reflections.",
      },
    ],
  }),
});

const supportPillars = [
  {
    icon: Coffee,
    title: "Rest & Recharge",
    text: "Self-care resources, wellness tips, and moments of calm for busy parents.",
    accent: "coral" as const,
  },
  {
    icon: Heart,
    title: "Parenting Support",
    text: "Workshops, guides, and expert advice for everyday challenges.",
    accent: "orange" as const,
  },
  {
    icon: Users,
    title: "Everyday Support",
    text: "Practical help with childcare, meal planning, and household logistics.",
    accent: "yellow" as const,
  },
  {
    icon: Sparkles,
    title: "Time for Myself",
    text: "Finding balance and nurturing your own interests and well-being.",
    accent: "coral" as const,
  },
  {
    icon: Shield,
    title: "Stability",
    text: "Financial planning, legal resources, and family security guidance.",
    accent: "orange" as const,
  },
];

const reflections = [
  {
    date: "December 2025",
    title: "The Art of Slowing Down",
    excerpt:
      "Sometimes the best family activities aren't planned at all. Here's how embracing spontaneity can lead to the most memorable experiences.",
  },
  {
    date: "November 2025",
    title: "Managing Screen Time Without the Battles",
    excerpt:
      "Practical strategies for creating healthy digital habits that work for the whole family.",
  },
  {
    date: "October 2025",
    title: "Building Resilience in Young Children",
    excerpt:
      "How small daily practices can help your child develop emotional strength and adaptability.",
  },
];

function ForParentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-warm)" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-coral">
              For Parents
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
              A calm space for <span className="text-gradient-warm">you</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-navy/70 md:text-lg">
              Parenting is a journey, not a destination. Here you'll find
              resources, reflections, and support for every step of the way.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-soft-gray py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Support for every aspect of parenting
            </h2>
            <p className="mt-3 max-w-2xl text-base text-navy/70">
              Explore resources organized around what matters most.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {supportPillars.map((p, i) => {
              const Icon = p.icon;
              const ringColor =
                p.accent === "coral"
                  ? "var(--coral)"
                  : p.accent === "orange"
                    ? "var(--orange)"
                    : "var(--yellow)";
              return (
                <Reveal key={p.title} delay={i * 70}>
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-coral/40 hover:shadow-soft">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60"
                      style={{ background: "var(--gradient-warm)" }}
                    />
                    <div className="relative">
                      <div className="relative h-12 w-12">
                        <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full" aria-hidden>
                          <circle
                            cx="24"
                            cy="24"
                            r="22"
                            fill="none"
                            stroke={ringColor}
                            strokeOpacity="0.3"
                            strokeWidth="1"
                            strokeDasharray="2 4"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon size={20} strokeWidth={1.6} style={{ color: ringColor }} />
                        </div>
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-navy">{p.title}</h3>
                      <p className="mt-2 text-sm text-navy/70">{p.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-coral">
              Reflections
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Thoughtful pieces on family life
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {reflections.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <article className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-coral/40 hover:shadow-soft">
                  <p className="text-xs font-medium uppercase tracking-wider text-navy/50">
                    {r.date}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-navy group-hover:text-coral">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm text-navy/70">{r.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-coral">
                    Read reflection <ArrowRight size={14} />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Need support */}
      <section className="bg-soft-gray py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Need support?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-navy/70">
              If you or your family are going through a difficult time, help is
              available. Vienna has excellent resources for families in need.
            </p>
            <Link
              to="/discover"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3 text-sm font-medium text-white transition-all hover:bg-coral/90 hover:shadow-soft"
            >
              View support resources <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
