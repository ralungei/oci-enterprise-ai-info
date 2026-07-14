"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-[9999] flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-1 shadow-lg">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
          lang === "en"
            ? "bg-white text-black shadow-sm"
            : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
          lang === "es"
            ? "bg-white text-black shadow-sm"
            : "text-white/70 hover:text-white"
        }`}
      >
        ES
      </button>
    </div>
  );
}
