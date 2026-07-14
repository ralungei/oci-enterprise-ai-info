"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";

export default function DemoSection() {
  const { lang } = useLanguage();
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="accent-bar mx-auto mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            {t("demo.label", lang)}
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
            {t("demo.title", lang)}
          </h2>
          <p className="text-xl text-medium-gray mt-6 leading-relaxed max-w-2xl mx-auto">
            {t("demo.subtitle", lang)}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
        >
          <video
            src="/demo-mcp-calendar.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full bg-black"
          />
        </motion.div>
      </div>
    </section>
  );
}
