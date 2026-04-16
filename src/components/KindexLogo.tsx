import logoMark from "@/assets/kindex-mark.png";

interface KindexLogoProps {
  color?: "navy" | "white";
  className?: string;
}

export function KindexLogo({ color = "navy", className = "" }: KindexLogoProps) {
  const textColor = color === "white" ? "text-white" : "text-navy";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className="h-8 w-auto shrink-0"
      />
      <span
        className={`text-2xl font-bold lowercase leading-none tracking-tight ${textColor}`}
      >
        kindex
      </span>
    </div>
  );
}
