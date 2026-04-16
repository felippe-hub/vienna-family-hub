import { useState, type FormEvent } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section id="waitlist" className="bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl">
          Be the <span className="text-gradient-warm">first</span> to try
          Kindex.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
          We're launching in Vienna soon. Get early access and help shape the
          experience.
        </p>

        {submitted ? (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-white/15 bg-white/5 p-6">
            <p className="text-lg font-medium text-white">
              You're in. We'll be in touch.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-xl border border-white/10 bg-white px-5 py-3.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-coral"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-coral px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-coral/90 hover:shadow-soft"
            >
              Join Waitlist
            </button>
          </form>
        )}

        <p className="mt-5 text-xs text-white/50">
          No spam. Just meaningful updates.
        </p>
      </div>
    </section>
  );
}
