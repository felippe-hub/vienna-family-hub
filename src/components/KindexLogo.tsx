interface KindexLogoProps {
  color?: "navy" | "white";
}

export function KindexLogo({ color = "navy" }: KindexLogoProps) {
  const textColor = color === "white" ? "text-white" : "text-navy";
  return (
    <div className={`relative inline-flex items-end font-bold lowercase tracking-tight ${textColor}`}>
      <span className="text-2xl leading-none">k</span>
      <span className="relative text-2xl leading-none">
        i
        <span className="absolute -top-[6px] left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-coral" />
      </span>
      <span className="text-2xl leading-none">ndex</span>
    </div>
  );
}
