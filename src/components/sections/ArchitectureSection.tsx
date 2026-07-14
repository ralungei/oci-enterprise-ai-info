"use client";

import { motion } from "framer-motion";
import ArchitectureDiagram from "@/components/effects/ArchitectureDiagram";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";

export default function ArchitectureSection() {
  const { lang } = useLanguage();
  return (
    <section className="relative py-32 md:py-40 bg-[#0a0a0f] text-white">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="accent-bar mx-auto mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            {t("arch.label", lang)}
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            {t("arch.title", lang)}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <ArchitectureDiagram />
        </motion.div>
      </div>
    </section>
  );
}
