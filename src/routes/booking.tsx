import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, ArrowRight, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Booking — Kindex" },
      {
        name: "description",
        content:
          "Direct booking on Kindex is rolling out gradually. For now, each listing links to the provider so you can confirm and reserve there.",
      },
      { property: "og:title", content: "Booking — Kindex" },
      {
        property: "og:description",
        content:
          "Booking on Kindex — coming soon. Discover is live today; reservations roll out step by step.",
      },
    ],
  }),
});

function BookingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden border-b border-border bg-background py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-warm)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            {/* Hairline ringed icon, brand language */}
            <div className="mx-auto h-16 w-16">
              <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
                <circle cx="32" cy="32" r="30" fill="none" stroke="var(--coral)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 4" />
                <circle cx="32" cy="32" r="22" fill="none" stroke="var(--orange)" strokeOpacity="0.4" strokeWidth="1" />
              </svg>
              <div className="-mt-12 flex h-12 w-16 items-center justify-center text-coral">
                <CalendarCheck size={22} strokeWidth={1.6} />
              </div>
            </div>

            <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-coral">
              Booking
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-navy md:text-5xl">
              Booking on <span className="text-gradient-warm">Kindex</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-navy/70 md:text-lg">
              Kindex helps families explore activities, events, camps, and
              services that support family life in Vienna and surrounds. At the
              moment, bookings are completed on the provider's official website.
              Each listing links directly to the organizer so you can confirm
              details and book there.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What's coming */}
      <section className="bg-soft-gray py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-px"
                style={{ background: "var(--gradient-warm)" }}
              />
              <h2 className="text-2xl font-bold text-navy md:text-3xl">
                What's coming
              </h2>
              <p className="mt-4 text-base text-navy/75 leading-relaxed">
                Direct booking on Kindex will be introduced gradually, starting
                with selected partners. This will make it easier to reserve
                spots for activities, workshops, and events without leaving the
                platform.
              </p>
              <p className="mt-4 text-base text-navy/80 font-medium">
                Kindex is already live and growing. Discover is available today,
                and booking options will expand step by step.
              </p>

              <Link
                to="/discover"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-coral px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-coral/90 hover:shadow-soft"
              >
                Explore Discover <ArrowRight size={16} />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Notify */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
          <Reveal>
            <Mail className="mx-auto text-coral" size={28} strokeWidth={1.6} />
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Be the first to know
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-navy/70">
              Sign up to get notified when booking launches — and receive
              curated activity recommendations in the meantime.
            </p>
            <a
              href="/#waitlist"
              className="mt-7 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-navy transition-all hover:border-coral/40"
            >
              Stay in touch
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
