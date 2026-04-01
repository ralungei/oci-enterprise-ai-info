"use client";

import { useEffect, useRef } from "react";
import "./galaxy-button.css";

interface GalaxyButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function GalaxyButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: GalaxyButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stars = containerRef.current?.querySelectorAll(".galaxy-star");
    if (!stars) return;
    stars.forEach((star) => {
      const el = star as HTMLElement;
      const rand = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1) + min);
      el.style.setProperty("--angle", String(rand(0, 360)));
      el.style.setProperty("--duration", String(rand(6, 20)));
      el.style.setProperty("--delay", String(rand(1, 10)));
      el.style.setProperty("--alpha", String(rand(40, 90) / 100));
      el.style.setProperty("--size", String(rand(2, 6)));
      el.style.setProperty("--distance", String(rand(40, 200)));
    });
  }, []);

  const starElements = Array.from({ length: 20 }, (_, i) => (
    <span key={`ring-${i}`} className="galaxy-star" />
  ));

  const staticStars = Array.from({ length: 4 }, (_, i) => (
    <span key={`static-${i}`} className="galaxy-star galaxy-star--static" />
  ));

  const inner = (
    <div ref={containerRef} className={`galaxy-button-wrap ${variant}`}>
      <span className="galaxy-spark" />
      <span className="galaxy-backdrop" />
      <span className="galaxy-star-container">{staticStars}</span>
      <span className="galaxy-ring-outer">
        <span className="galaxy-ring">{starElements}</span>
      </span>
      <span className="galaxy-text">{children}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className={`galaxy-button-link ${className}`}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`galaxy-button-link ${className}`}>
      {inner}
    </button>
  );
}
