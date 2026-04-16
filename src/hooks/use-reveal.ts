import { useEffect, useRef, useState } from "react";

/**
 * Triggers `visible = true` the first time the element enters the viewport.
 * Used for elegant fade-up reveals on scroll. Respects prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      options,
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return { ref, visible } as const;
}
