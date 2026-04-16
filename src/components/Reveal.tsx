import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

/** Subtle fade-up reveal that triggers once when the element enters the viewport. */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
      style={{ ["--reveal-delay" as never]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
