"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useActiveSection } from "@/context/ActiveSectionContext";
import type { SectionType } from "@/data/types";

interface SectionWrapperProps {
  id: SectionType;
  children: ReactNode;
}

export default function SectionWrapper({ id, children }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { setActiveSectionId } = useActiveSection();

  /* ── IntersectionObserver for active section detection ── */
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

  /* ── Parallax + fade scroll-linked animations ── */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Content shifts up slightly as you scroll through (parallax)
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  // Fade in as section enters, fade out as it leaves
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  // Slight scale for depth
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.97, 1, 1, 0.97]);

  return (
    <div
      ref={ref}
      id={id}
      className="min-h-screen flex flex-col justify-center scroll-snap-section relative overflow-hidden"
    >
      <motion.div style={{ y, opacity, scale }}>
        {children}
      </motion.div>
    </div>
  );
}
