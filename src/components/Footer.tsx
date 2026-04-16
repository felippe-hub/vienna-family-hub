import { Instagram, Linkedin, Facebook } from "lucide-react";
import { KindexLogo } from "./KindexLogo";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-10 md:flex-row md:items-center">
          <div>
            <KindexLogo color="white" />
            <p className="mt-3 text-sm text-white/60">Less Searching. More Living.</p>
          </div>

          <nav className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/80 transition-all hover:border-coral hover:bg-coral hover:text-white"
              >
                <Icon size={18} strokeWidth={1.75} />
              </a>
            ))}
          </nav>
        </div>

        <p className="pt-6 text-xs text-white/50">
          © 2025 Kindex · Vienna, Austria
        </p>
      </div>
    </footer>
  );
}
