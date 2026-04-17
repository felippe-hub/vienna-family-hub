import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Kindex" },
      {
        name: "description",
        content:
          "Kindex is a calm, human-centered platform helping families in Vienna discover activities, events and support without the overwhelm.",
      },
      { property: "og:title", content: "About — Kindex" },
      {
        property: "og:description",
        content:
          "A trusted friend who knows Vienna — calm by design, locally curated, parent-first.",
      },
    ],
  }),
});

const principles = [
  {
    title: "Calm by Design",
    text: "No flashy banners, no urgency tactics. Just clean, helpful information presented in a way that respects your time and attention.",
  },
  {
    title: "Locally Curated",
    text: "Every activity and resource is selected with Vienna families in mind. Quality over quantity, always.",
  },
  {
    title: "Parent-First",
    text: "Built around the way busy parents actually plan — fast to scan, easy to act on, never overwhelming.",
  },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden border-b border-border bg-background py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-warm)" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-coral">
              About
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
              A calm <span className="text-gradient-warm">ecosystem</span> for Vienna families
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-navy/70 md:text-lg">
              Kindex is a calm, human-centered platform designed to help families
              in Vienna discover activities, events, and resources without the
              overwhelm.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">
              What is Kindex?
            </h2>
            <p className="mt-4 text-base text-navy/75 leading-relaxed">
              Kindex is your family ecosystem in Vienna — a curated collection of
              activities, events, and parenting resources, all in one place.
              Instead of scrolling through endless websites and social media
              posts, you get a calm, organized overview of what's available for
              your family.
            </p>
            <p className="mt-4 text-base text-navy/75 leading-relaxed">
              Think of it as a trusted friend who knows Vienna and keeps you
              updated on the best things to do with your kids — without the
              noise and without the pressure.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-2xl font-bold text-navy md:text-3xl">
              The problem we're solving
            </h2>
            <p className="mt-4 text-base text-navy/75 leading-relaxed">
              Vienna is full of wonderful things to do with kids, but finding
              them is surprisingly difficult. Information is scattered across
              dozens of websites, often outdated, and rarely organized in a way
              that helps busy parents.
            </p>
            <p className="mt-4 text-base text-navy/75 leading-relaxed">
              We spend hours researching instead of enjoying time with our
              families. Kindex changes that by bringing everything together in
              one thoughtfully curated space.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-soft-gray py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
              What makes Kindex different
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-6 top-0 h-px"
                    style={{ background: "var(--gradient-warm)" }}
                  />
                  <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                  <p className="mt-3 text-sm text-navy/70">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Ready to <span className="text-gradient-warm">explore</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-navy/70">
              Discover activities and events that fit your family — calm,
              curated, and just for Vienna.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/discover"
                className="inline-flex items-center gap-2 rounded-xl bg-coral px-6 py-3 text-sm font-medium text-white transition-all hover:bg-coral/90 hover:shadow-soft"
              >
                Explore Discover <ArrowRight size={16} />
              </Link>
              <Link
                to="/for-parents"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-navy transition-all hover:border-coral/40"
              >
                For Parents
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
