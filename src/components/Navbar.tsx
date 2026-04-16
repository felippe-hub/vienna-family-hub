import { useState } from "react";
import { Menu, X } from "lucide-react";
import { KindexLogo } from "./KindexLogo";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "For Families", href: "#for-families" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" aria-label="Kindex home" className="flex items-center">
          <KindexLogo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-navy/70 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#waitlist"
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
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-navy/80 hover:bg-soft-gray"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
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
