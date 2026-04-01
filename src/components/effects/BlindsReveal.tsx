"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BlindsRevealProps {
  children: React.ReactNode;
  className?: string;
  cols?: number;
  rows?: number;
}

export default function BlindsReveal({ children, className = "", cols = 8, rows = 6 }: BlindsRevealProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const overlay = overlayRef.current;
    if (!trigger || !overlay) return;

    const boxes = overlay.querySelectorAll<HTMLDivElement>(".blinds-box");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        scrub: 0.5,
        start: "top 90%",
        end: "top 30%",
      },
    });

    tl.to(boxes, {
      force3D: true,
      duration: 1,
      xPercent: 100,
      ease: "power1.inOut",
      stagger: { amount: 1 },
    });
    tl.to(boxes, { ease: "power1.out", duration: 1, rotation: "45deg" }, 0);
    tl.to(boxes, { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);

    return () => {
      tl.kill();
    };
  }, []);

  const totalBoxes = cols * rows;

  return (
    <div ref={triggerRef} className={`relative ${className}`}>
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 grid pointer-events-none overflow-hidden"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: totalBoxes }, (_, i) => (
          <div
            key={i}
            className="blinds-box w-full h-full"
            style={{
              background: i % 2 === 0 ? "var(--oracle-red)" : "#0a0a0f",
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
}
