import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { KindexLogo } from "./KindexLogo";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Discover", to: "/discover" as const },
  { label: "Booking", to: "/booking" as const },
  { label: "For Parents", to: "/for-parents" as const },
  { label: "About", to: "/about" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" aria-label="Kindex home" className="flex items-center">
          <KindexLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-navy font-medium" }}
              inactiveProps={{ className: "text-navy/70" }}
              className="text-sm transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/#waitlist"
            className="inline-flex items-center justify-center rounded-xl bg-coral px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-coral/90 hover:shadow-soft"
          >
            Join Waitlist
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-navy"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-navy/80 hover:bg-soft-gray"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#waitlist"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-coral px-5 py-3 text-sm font-medium text-white"
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
