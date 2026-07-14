"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";

export default function PillarDivider({ pillar }: { pillar: 1 | 2 }) {
  const { lang } = useLanguage();

  const config = pillar === 1
    ? {
        num: "01",
        titleKey: "pillar.api.title" as const,
        subtitleKey: "pillar.api.subtitle" as const,
        icon: "solar:code-bold-duotone",
      }
    : {
        num: "02",
        titleKey: "pillar.hosted.title" as const,
        subtitleKey: "pillar.hosted.subtitle" as const,
        icon: "solar:rocket-2-bold-duotone",
      };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-oracle-red/10 flex items-center justify-center shrink-0">
            <Icon icon={config.icon} className="text-oracle-red" width={32} height={32} />
          </div>
          <div>
            <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.15em]">
              {t("pillar.prefix", lang)} {config.num}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text mt-1">
              {t(config.titleKey, lang)}
            </h2>
            <p className="text-lg text-medium-gray mt-2">
              {t(config.subtitleKey, lang)}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
