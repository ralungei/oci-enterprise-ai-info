"use client";

import { useRef, useCallback, useEffect } from "react";

interface CursorGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function CursorGlow({
  children,
  className = "",
  glowColor = "rgba(199, 70, 52, 0.4)",
}: CursorGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  // Cache card references after mount and on DOM changes
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    cardsRef.current = Array.from(el.querySelectorAll<HTMLElement>("[data-glow-card]"));
  }, [children]);

  const handlePointerMove = useCallback(
    (ev: React.PointerEvent) => {
      const cards = cardsRef.current;
      for (let i = 0; i < cards.length; i++) {
        const rect = cards[i].getBoundingClientRect();
        cards[i].style.setProperty("--glow-x", String(ev.clientX - rect.left));
        cards[i].style.setProperty("--glow-y", String(ev.clientY - rect.top));
      }
    },
    []
  );

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className={className}
      style={{ "--glow-color": glowColor } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div data-glow-card className={`glow-border-card ${className}`}>
      {children}
    </div>
  );
}
