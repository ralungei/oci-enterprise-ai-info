"use client";

import { useEffect, useRef, ReactNode } from "react";
import { useActiveSection } from "@/context/ActiveSectionContext";
import type { SectionType } from "@/data/types";

interface SectionWrapperProps {
  id: SectionType;
  children: ReactNode;
}

export default function SectionWrapper({ id, children }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { setActiveSectionId } = useActiveSection();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSectionId(id);
        }
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [id, setActiveSectionId]);

  return (
    <div
      ref={ref}
      id={id}
      className="scroll-snap-section"
    >
      {children}
    </div>
  );
}
