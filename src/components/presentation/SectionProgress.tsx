"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@/context/ActiveSectionContext";
import { slides } from "@/data/slides";

export default function SectionProgress() {
  const { activeSectionId } = useActiveSection();
  const currentIndex = slides.findIndex((s) => s.id === activeSectionId);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-5">
      {slides.map((slide, i) => {
        const isActive = slide.id === activeSectionId;
        const isPast = i < currentIndex;
        return (
          <a
            key={slide.id}
            href={`#${slide.id}`}
            className="group flex items-center gap-3"
          >
            {/* Dot */}
            <motion.div
              className="rounded-full shrink-0"
              animate={{
                width: isActive ? 14 : 6,
                height: isActive ? 14 : 6,
                backgroundColor: isActive
                  ? "#C74634"
                  : isPast
                  ? "rgba(199, 70, 52, 0.4)"
                  : "rgba(200, 200, 200, 0.35)",
                boxShadow: isActive
                  ? "0 0 14px rgba(199, 70, 52, 0.5)"
                  : "none",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            />
            {/* Label — always visible */}
            <motion.span
              className="whitespace-nowrap leading-none"
              animate={{
                color: isActive ? "#C74634" : isPast ? "rgba(49, 45, 42, 0.45)" : "rgba(107, 107, 107, 0.4)",
                fontSize: isActive ? "14px" : "11px",
                fontWeight: isActive ? 700 : 500,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >
              {slide.sectionLabel}
            </motion.span>
          </a>
        );
      })}
    </div>
  );
}
