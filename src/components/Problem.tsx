import { Brain, Clock, Puzzle } from "lucide-react";

const problems = [
  {
    icon: Brain,
    title: "Mental overload",
    text: "Endless tabs, lists, and group chats — just to plan the week.",
  },
  {
    icon: Clock,
    title: "Time lost searching",
    text: "Hours spent comparing options that should take minutes.",
  },
  {
    icon: Puzzle,
    title: "Fragmented decisions",
    text: "Every choice lives in a different place. Nothing connects.",
  },
];

export function Problem() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-coral">
            The Problem
          </p>
          <h2 className="text-3xl text-navy sm:text-4xl lg:text-5xl">
            Too many options. Not enough clarity.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-coral/10 text-coral transition-colors group-hover:bg-coral group-hover:text-white">
                <Icon size={24} strokeWidth={1.75} />
              </div>
              <h3 className="text-xl text-navy">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
