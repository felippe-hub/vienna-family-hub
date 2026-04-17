import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, ArrowRight, Mail, ExternalLink } from "lucide-react";
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
          "Direct booking on Kindex is rolling out gradually. For now, each listing links to the Vienna provider so you can confirm and reserve there.",
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

/**
 * Curated, real Vienna providers families can already book directly.
 * Until native Kindex booking ships, each card hands off to the
 * organizer's official site — calmly and without pretending otherwise.
 */
interface BookableProvider {
  id: string;
  name: string;
  category: string;
  district: string;
  ageRange: string;
  description: string;
  bookingNote: string;
  url: string;
  accent: "coral" | "orange" | "yellow";
}

const providers: BookableProvider[] = [
  {
    id: "zoom",
    name: "ZOOM Kindermuseum",
    category: "Museum & workshops",
    district: "MuseumsQuartier · 7. Bezirk",
    ageRange: "8 months – 14 years",
    description:
      "Hands-on exhibitions, ateliers and labs where children learn by doing. Time-slot tickets are required, even for free entries.",
    bookingNote: "Reserve a time slot",
    url: "https://www.kindermuseum.at/en/visit/tickets",
    accent: "coral",
  },
  {
    id: "haus-des-meeres",
    name: "Haus des Meeres",
    category: "Aquarium & tropical house",
    district: "Esterházypark · 6. Bezirk",
    ageRange: "All ages",
    description:
      "Eleven floors of sharks, crocodiles, monkeys and a rooftop tropical house. A dependable rainy-day plan in the middle of the city.",
    bookingNote: "Buy timed entry online",
    url: "https://www.haus-des-meeres.at/en/Visit-us/Tickets.htm",
    accent: "orange",
  },
  {
    id: "wiener-eistraum",
    name: "Wiener Eistraum",
    category: "Ice skating",
    district: "Rathausplatz · 1. Bezirk",
    ageRange: "3+ years",
    description:
      "Vienna's winter ice park in front of the city hall — paths through the park, kids' rink and skate rentals on-site.",
    bookingNote: "Buy day tickets",
    url: "https://wienereistraum.com/en/tickets/",
    accent: "yellow",
  },
  {
    id: "kreadance",
    name: "KREADANCE — Tanzschule für Kinder",
    category: "Dance courses",
    district: "9. Bezirk",
    ageRange: "2 – 17 years",
    description:
      "Weekly children's dance courses — Miniballett, Charts Dance Club and Musical Showdance. Trial classes can be booked online.",
    bookingNote: "Book a trial class",
    url: "https://www.kreadance.com/anmeldung/",
    accent: "coral",
  },
  {
    id: "kletterhalle",
    name: "Kletterhalle Wien — Kinderklettern",
    category: "Climbing courses",
    district: "Marswiese · 17. Bezirk",
    ageRange: "5 – 14 years",
    description:
      "Supervised climbing courses for kids in one of Europe's largest indoor climbing halls. Term courses and birthday packages available.",
    bookingNote: "Reserve a course or birthday",
    url: "https://www.kletterhalle.at/kinder-und-jugend/",
    accent: "orange",
  },
  {
    id: "muth",
    name: "MuTh — Kinderoper & family concerts",
    category: "Music & theater",
    district: "Augarten · 2. Bezirk",
    ageRange: "4 – 12 years",
    description:
      "The concert hall of the Vienna Boys' Choir, with a dedicated programme of children's opera and family matinees.",
    bookingNote: "See programme & book seats",
    url: "https://www.muth.at/en/programme/",
    accent: "yellow",
  },
  {
    id: "schoenbrunn-zoo",
    name: "Tiergarten Schönbrunn",
    category: "Zoo",
    district: "Schönbrunn · 13. Bezirk",
    ageRange: "All ages",
    description:
      "The world's oldest zoo, set inside Schönbrunn palace gardens. Online tickets skip the queue at the entrance.",
    bookingNote: "Buy entry tickets",
    url: "https://www.zoovienna.at/en/visitor-info/admission-prices/",
    accent: "coral",
  },
  {
    id: "kindermusik-mdw",
    name: "MdW — Kindermusik & Eltern-Kind-Kurse",
    category: "Early music education",
    district: "Universität für Musik · 3. Bezirk",
    ageRange: "0 – 6 years",
    description:
      "Parent-and-child music classes run by the University of Music and Performing Arts Vienna. Limited spots per term.",
    bookingNote: "View term enrolment",
    url: "https://www.mdw.ac.at/imp/musikvermittlung/",
    accent: "orange",
  },
];

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
            <div className="relative mx-auto h-16 w-16">
              <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
                <circle cx="32" cy="32" r="30" fill="none" stroke="var(--coral)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 4" />
                <circle cx="32" cy="32" r="22" fill="none" stroke="var(--orange)" strokeOpacity="0.4" strokeWidth="1" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-coral">
                <CalendarCheck size={22} strokeWidth={1.6} />
              </div>
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-coral">
              Booking
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-navy md:text-5xl">
              Booking on <span className="text-gradient-warm">Kindex</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-navy/70 md:text-lg">
              Kindex helps families explore activities, events, camps and
              services across Vienna. At the moment, bookings are completed on
              each provider's official website. Every listing below links you
              straight to the organizer so you can confirm details and reserve
              there.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bookable providers in Vienna */}
      <section className="bg-soft-gray py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-coral">
              Bookable today
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Vienna providers families can <span className="text-gradient-warm">reserve</span> directly
            </h2>
            <p className="mt-3 max-w-2xl text-base text-navy/70">
              A calm shortlist of trusted places. Tap a card to open the
              organizer's booking page in a new tab — no account needed on
              Kindex yet.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {providers.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i * 60, 280)}>
                <ProviderCard provider={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's coming */}
      <section className="bg-background py-20">
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
                spots for activities, workshops and events without leaving the
                platform.
              </p>
              <p className="mt-4 text-base text-navy/80 font-medium">
                Kindex is already live and growing. Discover is available
                today, and booking options will expand step by step.
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
      <section className="bg-soft-gray py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
          <Reveal>
            <Mail className="mx-auto text-coral" size={28} strokeWidth={1.6} />
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Be the first to know
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-navy/70">
              Sign up to get notified when native booking launches — and
              receive curated activity recommendations in the meantime.
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

function ProviderCard({ provider }: { provider: BookableProvider }) {
  const accentClass =
    provider.accent === "coral"
      ? "from-coral/80 via-orange/70 to-light-orange/70"
      : provider.accent === "orange"
        ? "from-orange/80 via-light-orange/70 to-yellow/70"
        : "from-light-orange/70 via-yellow/70 to-coral/60";

  return (
    <a
      href={provider.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-0.5 hover:border-coral/40 hover:shadow-soft"
    >
      <div className={`relative h-28 bg-gradient-to-br ${accentClass} overflow-hidden`}>
        <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
          <defs>
            <pattern id={`bk-${provider.id}`} width="22" height="22" patternUnits="userSpaceOnUse">
              <path d="M 22 0 L 0 0 0 22" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#bk-${provider.id})`} />
        </svg>
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-navy/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white backdrop-blur-sm">
          {provider.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy group-hover:text-coral">
          {provider.name}
        </h3>
        <p className="mt-2 text-sm text-navy/70">{provider.description}</p>

        <dl className="mt-4 space-y-1 text-xs text-navy/60">
          <div className="flex items-start gap-2">
            <span className="text-navy/40">Where</span>
            <span className="text-navy/80">{provider.district}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-navy/40">Age</span>
            <span className="text-navy/80">{provider.ageRange}</span>
          </div>
        </dl>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs text-navy/55">Booked on provider site</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-coral transition-colors group-hover:text-orange">
            {provider.bookingNote}
            <ExternalLink size={12} strokeWidth={1.75} />
          </span>
        </div>
      </div>
    </a>
  );
}
