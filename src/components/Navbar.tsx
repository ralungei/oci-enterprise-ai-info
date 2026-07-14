"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useActiveSection } from "@/context/ActiveSectionContext";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";

const navLinkDefs = [
  { key: "nav.platform" as const, href: "#platform" },
  { key: "nav.models" as const, href: "#models" },
  { key: "nav.tools" as const, href: "#tools" },
  { key: "nav.memory" as const, href: "#memory" },
  { key: "nav.deploy" as const, href: "#deploy" },
];

export default function Navbar() {
  const { lang } = useLanguage();
  const navLinks = useMemo(() => navLinkDefs.map((l) => ({
    label: t(l.key, lang),
    href: l.href,
  })), [lang]);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const { teleprompterVisible, toggleTeleprompter } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-oracle-red to-oracle-red-dark z-[60] origin-left"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-oracle-red flex items-center justify-center">
              <span className="text-white font-bold text-xs">O</span>
            </div>
            <span className="font-semibold text-dark-text text-sm tracking-tight hidden sm:block">
              OCI Enterprise AI
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-[13px] font-medium text-medium-gray hover:text-oracle-red transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTeleprompter}
              className={`px-3 py-1.5 text-[13px] font-semibold rounded-full border transition-all ${
                teleprompterVisible
                  ? "bg-oracle-red text-white border-oracle-red"
                  : "text-medium-gray border-gray-200 hover:border-oracle-red/30 hover:text-oracle-red"
              }`}
              title="Toggle teleprompter (T)"
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <span className="hidden sm:inline">{t("nav.notes", lang)}</span>
                <kbd className="hidden sm:inline text-[10px] px-1.5 py-0.5 rounded bg-black/5 font-mono">T</kbd>
              </span>
            </button>
            <a
              href="#get-started"
              className="px-5 py-2 text-[13px] font-semibold text-white bg-oracle-red rounded-full hover:bg-oracle-red-dark transition-colors"
            >
              {t("nav.getStarted", lang)}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
