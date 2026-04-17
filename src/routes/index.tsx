import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StartHere } from "@/components/StartHere";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Testimonials } from "@/components/Testimonials";
import { Audience } from "@/components/Audience";
import { Blog } from "@/components/Blog";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kindex — Less Searching. More Living." },
      {
        name: "description",
        content:
          "Kindex helps Vienna families cut through the noise — so you can spend less time deciding and more time living. Join the waitlist.",
      },
      { property: "og:title", content: "Kindex — Less Searching. More Living." },
      {
        property: "og:description",
        content:
          "A calm support system for busy Vienna families. Curated options, clear guidance, less mental load.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StartHere />
      <Problem />
      <Solution />
      <Testimonials />
      <Audience />
      <Blog />
      <Waitlist />
      <Footer />
    </main>
  );
}
