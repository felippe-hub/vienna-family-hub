export function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      <svg
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        {/* Soft yellow blob */}
        <circle cx="380" cy="160" r="110" fill="#F5C71A" opacity="0.85" />
        {/* Light orange rounded square */}
        <rect
          x="60"
          y="120"
          width="200"
          height="200"
          rx="56"
          fill="#FEB449"
          opacity="0.95"
        />
        {/* Coral pill */}
        <rect x="120" y="320" width="280" height="90" rx="45" fill="#FE5C36" />
        {/* Orange ring */}
        <circle
          cx="160"
          cy="200"
          r="58"
          stroke="#F39420"
          strokeWidth="14"
          fill="none"
        />
        {/* Small coral dot */}
        <circle cx="430" cy="360" r="22" fill="#FE5C36" />
        {/* Yellow small dot */}
        <circle cx="90" cy="410" r="14" fill="#F5C71A" />
        {/* Subtle white accent */}
        <circle cx="380" cy="160" r="32" fill="#FEFEFE" opacity="0.25" />
      </svg>
    </div>
  );
}
