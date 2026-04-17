import { Link } from "@tanstack/react-router";
import { CalendarDays, Cake, Backpack, CloudRain } from "lucide-react";
import { Reveal } from "./Reveal";
import type { QuickFilter } from "@/data/discover";

/**
 * "Start here" — quick paths into Discover.
 *
 * Aligned with the Problem section pattern:
 *  - centered eyebrow + title block
 *  - 4 cards in a grid, each with a colored Lucide icon chip
 *  - hairline border, soft hover lift, no warm halo
 */

interface StartCard {
  filter: QuickFilter;
  title: string;
  subtitle: string;
  icon: typeof CalendarDays;
  accent: "coral" | "orange" | "yellow";
}

const cards: StartCard[] = [
  {
    filter: "weekend",
    title: "This weekend",
    subtitle: "Parks, museums & more",
    icon: CalendarDays,
    accent: "coral",
  },
  {
    filter: "birthday",
    title: "Birthday ideas",
    subtitle: "Venues, parties & fun",
    icon: Cake,
    accent: "orange",
  },
  {
    filter: "afterschool",
    title: "After school",
    subtitle: "Sports, arts & play",
    icon: Backpack,
    accent: "yellow",
  },
  {
    filter: "indoor",
    title: "Rainy-day inspiration",
    subtitle: "Indoor spots & cozy plans",
    icon: CloudRain,
    accent: "coral",
  },
];

const accentClasses: Record<StartCard["accent"], string> = {
  coral: "bg-coral/10 text-coral group-hover:bg-coral group-hover:text-white",
  orange:
    "bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white",
  yellow:
    "bg-yellow/15 text-navy group-hover:bg-yellow group-hover:text-navy",
};

export function StartHere() {
  return (
    <section id="start-here" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-coral">
            Start here
          </p>
          <h2 className="text-3xl text-navy sm:text-4xl lg:text-5xl">
            Quick paths to <span className="text-gradient-warm">explore</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/65">
            Four calm starting points to find what fits your family in Vienna —
            without the scrolling.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.filter} delay={i * 120}>
              <StartCardItem card={card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StartCardItem({ card }: { card: StartCard }) {
  const Icon = card.icon;
  return (
    <Link
      to="/discover"
      search={{ filter: card.filter }}
      className="group block h-full rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-coral/30 hover:shadow-soft"
    >
      <div
        className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 ${accentClasses[card.accent]}`}
      >
        <Icon size={24} strokeWidth={1.75} />
      </div>
      <h3 className="text-xl text-navy">{card.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-navy/65">
        {card.subtitle}
      </p>
    </Link>
  );
}
