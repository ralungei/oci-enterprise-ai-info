"use client";

import { useMemo } from "react";
import { useActiveSection } from "@/context/ActiveSectionContext";
import { useLanguage } from "@/context/LanguageContext";
import { slides } from "@/data/slides";
import { slidesEs } from "@/data/slides-es";

const sectionIds = [
  "hero", "what-is-agent", "challenge", "platform", "tools", "memory",
  "models", "build", "deploy", "governance", "architecture", "regions",
  "demo", "get-started",
];

export default function SectionProgress() {
  const { activeSectionId } = useActiveSection();
  const { lang } = useLanguage();

  const navItems = useMemo(() => {
    const fallback: Record<string, Record<string, string>> = {
      governance: { en: "Governance", es: "Gobernanza" },
      architecture: { en: "Architecture", es: "Arquitectura" },
      demo: { en: "Demo", es: "Demo" },
    };
    const currentSlides = lang === "es" ? slidesEs : slides;
    const slideMap = Object.fromEntries(currentSlides.map((s) => [s.id, s]));
    return sectionIds.map((id) => ({
      id,
      label: slideMap[id]?.sectionLabel ?? fallback[id]?.[lang] ?? id,
    }));
  }, [lang]);
  const currentIndex = navItems.findIndex((n) => n.id === activeSectionId);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-5">
      {navItems.map((item, i) => {
        const isActive = item.id === activeSectionId;
        const isPast = i < currentIndex;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-center gap-3"
          >
            <div
              className="rounded-full shrink-0 transition-all duration-300"
              style={{
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
            />
            <span
              className="whitespace-nowrap leading-none transition-all duration-300"
              style={{
                color: isActive ? "#C74634" : isPast ? "rgba(49, 45, 42, 0.45)" : "rgba(107, 107, 107, 0.4)",
                fontSize: isActive ? "14px" : "11px",
                fontWeight: isActive ? 700 : 500,
              }}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
