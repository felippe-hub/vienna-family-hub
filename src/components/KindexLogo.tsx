import logoFull from "@/assets/kindex-logo.png";

interface KindexLogoProps {
  /** Show the full brand signature (mark + wordmark + tagline) */
  variant?: "full" | "wordmark";
  color?: "navy" | "white";
  className?: string;
}

export function KindexLogo({
  variant = "wordmark",
  color = "navy",
  className = "",
}: KindexLogoProps) {
  if (variant === "full") {
    return (
      <img
        src={logoFull}
        alt="Kindex — Less Searching. More Living."
        className={`h-12 w-auto ${className}`}
      />
    );
  }

  // Compact wordmark with brand mark for navbar/footer
  const textColor = color === "white" ? "text-white" : "text-navy";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <BrandMark />
      <span className={`text-2xl font-bold lowercase leading-none tracking-tight ${textColor}`}>
        kindex
      </span>
    </div>
  );
}

/** The looping coral→yellow ribbon mark, rebuilt as inline SVG for crisp scaling. */
function BrandMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="kindex-mark-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FE5C36" />
          <stop offset="55%" stopColor="#F39420" />
          <stop offset="100%" stopColor="#F5C71A" />
        </linearGradient>
      </defs>
      <g
        stroke="url(#kindex-mark-grad)"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      >
        <rect x="14" y="6" width="14" height="36" rx="7" transform="rotate(-22 21 24)" />
        <rect x="20" y="14" width="14" height="38" rx="7" transform="rotate(8 27 33)" />
        <rect x="14" y="22" width="14" height="38" rx="7" transform="rotate(38 21 41)" />
      </g>
    </svg>
  );
}
