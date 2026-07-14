"use client";

import { useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/context/ActiveSectionContext";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";
import { slides } from "@/data/slides";
import { slidesEs } from "@/data/slides-es";

export default function Teleprompter() {
  const { activeSectionId, teleprompterVisible } = useActiveSection();
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);

  const currentSlides = useMemo(() => (lang === "es" ? slidesEs : slides), [lang]);
  const currentIndex = currentSlides.findIndex((s) => s.id === activeSectionId);
  const total = currentSlides.length;

  useEffect(() => {
    if (activeRef.current && containerRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeSectionId]);

  return (
    <AnimatePresence>
      {teleprompterVisible && (
        <>
          {/* Desktop: fixed right panel */}
          <motion.aside
            initial={{ x: 380 }}
            animate={{ x: 0 }}
            exit={{ x: 380 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="hidden md:flex fixed top-0 right-0 w-[380px] h-screen z-40 flex-col bg-[#0a0a0f]/95 backdrop-blur-xl border-l border-white/[0.06]"
          >
            {/* Progress bar */}
            <div className="px-5 pt-16 pb-3">
              <div className="flex items-center justify-between text-xs text-white/40 mb-2">
                <span className="font-semibold uppercase tracking-wider">{t("teleprompter.title", lang)}</span>
                <span>
                  {currentIndex + 1} / {total}
                </span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-oracle-red rounded-full"
                  animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            {/* Notes container */}
            <div ref={containerRef} className="flex-1 overflow-y-auto px-5 pb-8 teleprompter-scroll">
              {currentSlides.map((slide) => {
                const isActive = slide.id === activeSectionId;
                return (
                  <div
                    key={slide.id}
                    ref={isActive ? activeRef : undefined}
                    className={`py-4 border-b border-white/[0.04] transition-all duration-500 ${
                      isActive ? "opacity-100" : "opacity-25"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-oracle-red animate-pulse" />
                      )}
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isActive ? "text-oracle-red" : "text-white/30"
                        }`}
                      >
                        {slide.sectionLabel}
                      </span>
                    </div>
                    {slide.speakerNotes.map((note, i) => (
                      <p
                        key={i}
                        className={`text-[14px] leading-relaxed mb-3 ${
                          isActive ? "text-white/80" : "text-white/20"
                        }`}
                      >
                        {note}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </motion.aside>

          {/* Mobile: bottom drawer */}
          <motion.aside
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="md:hidden fixed bottom-0 left-0 right-0 h-[40vh] z-40 flex flex-col bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/[0.06] rounded-t-2xl"
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>
            <div className="px-4 pb-2">
              <div className="flex items-center justify-between text-xs text-white/40">
                <span className="font-semibold uppercase tracking-wider">{t("teleprompter.title", lang)}</span>
                <span>
                  {currentIndex + 1} / {total}
                </span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-1">
                <motion.div
                  className="h-full bg-oracle-red rounded-full"
                  animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 pb-4 teleprompter-scroll">
              {currentSlides
                .filter((s) => s.id === activeSectionId)
                .map((slide) => (
                  <div key={slide.id}>
                    <span className="text-xs font-bold text-oracle-red uppercase tracking-wider">
                      {slide.sectionLabel}
                    </span>
                    {slide.speakerNotes.map((note, i) => (
                      <p key={i} className="text-[14px] leading-relaxed text-white/80 mt-3">
                        {note}
                      </p>
                    ))}
                  </div>
                ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
