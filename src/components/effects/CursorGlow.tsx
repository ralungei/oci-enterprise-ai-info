"use client";

import { useRef, useCallback } from "react";

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

  const handlePointerMove = useCallback(
    (ev: React.PointerEvent) => {
      const cards = containerRef.current?.querySelectorAll<HTMLElement>("[data-glow-card]");
      if (!cards) return;
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--glow-x", String(ev.clientX - rect.left));
        card.style.setProperty("--glow-y", String(ev.clientY - rect.top));
      });
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
